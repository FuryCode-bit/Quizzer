import React, { useState } from 'react'
import { StyleSheet, View, Text, SafeAreaView, StatusBar, Image, TouchableOpacity, Modal, Animated } from 'react-native'
import { COLORS, SIZES } from '../constants';
import data from '../data/QuizData';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import api from '../api/api';
import * as Font from 'expo-font'; 
import {openDatabase} from 'react-native-sqlite-storage';


async function componentDidMount() {
    async function componentDidMount() {
        await Font.loadAsync({
            'Montserrat_Regular': require('../constants/fonts/Montserrat-Regular.ttf'),
            'Montserrat_SemiBold': require('../constants/fonts/Montserrat-SemiBold.ttf'),
            'Montserrat_Bold': require('../constants/fonts/Montserrat-Bold.ttf'),
        });
        this.setState({ fontLoaded: true });
    }
}

const Quiz = ({route, navigation}) => {

    const { game, name, name2, value, questions } = route.params;

    //const allQuestions = data;
    const allQuestions = questions.slice(0, value)    
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
    const [correctOption, setCorrectOption] = useState(null);
    const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
    const [score, setScore] = useState(0)
    const [showNextButton, setShowNextButton] = useState(false)
    const [showScoreModal, setShowScoreModal] = useState(false)

    const [player1turn, setPlayer1turn] = useState(1)
    
    const [player1score, setPlayer1score] = useState(0)
    const [player2score, setPlayer2score] = useState(0)

    const validateAnswer = (selectedOption) => {
        let correct_option = allQuestions[currentQuestionIndex]['correct_option'];
        setCurrentOptionSelected(selectedOption);
        setCorrectOption(correct_option);
        setIsOptionsDisabled(true);
        if(selectedOption==correct_option){
            // Set Score
            if(game == 1) {
                setScore(score+1)
            } else if (game == 2 && player1turn % 2 !== 0 ) {
                setPlayer1score(player1score+1)
            } else if (game == 2 && player1turn % 2 === 0 ) {
                setPlayer2score(player2score+1)
            }
        }
        // Show Next Button
        setShowNextButton(true)
    }
    const handleNext = () => {
        if(currentQuestionIndex== allQuestions.length-1){
            // Last Question
            // Show Score Modal
            setShowScoreModal(true)
        }else{
            setCurrentQuestionIndex(currentQuestionIndex+1);
            setCurrentOptionSelected(null);
            setCorrectOption(null);
            setIsOptionsDisabled(false);
            setShowNextButton(false);
            setPlayer1turn(player1turn+1)
        }

        Animated.timing(progress, {
            toValue: currentQuestionIndex+1,
            duration: 1000,
            useNativeDriver: false
        }).start();
    }
    const restartQuiz = () => {
        setShowScoreModal(false);

        setCurrentQuestionIndex(0);
        setScore(0);

        setCurrentOptionSelected(null);
        setCorrectOption(null);
        setIsOptionsDisabled(false);
        setShowNextButton(false);
        Animated.timing(progress, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false
        }).start();
    }
    
    const RankUser = (name, score, value) => {
        navigation.navigate('Home');

        db.transaction((tx) => {
            tx.executeSql(
                "INSERT INTO Ranks (Name, Score, TotalQuestions) VALUES ('" + name +"', '" + score +"', " + value + ")"
            )
            tx.commit();
        })
        console.log("Inserted!")
    }

    const renderQuestion = () => {
        return (
            <View style={{
                marginVertical: 40
            }}>
                {/* Question Counter */}
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'flex-end'
                }}>
                    <Text style={{color: COLORS.white, fontSize: 20, opacity: 0.6, marginRight: 2}}>{currentQuestionIndex+1}</Text>
                    <Text style={{color: COLORS.white, fontSize: 18, opacity: 0.6}}>/ {allQuestions.length}</Text>
                </View>

                {/* Question */}
                <Text style={{
                    color: COLORS.white,
                    fontSize: 30,
                    alignItems: 'left',
                    width: '100%'
                }}>{allQuestions[currentQuestionIndex]?.question}</Text>
            </View>
        )
    }
    const renderOptions = () => {
        return (
            <View>
                {
                    allQuestions[currentQuestionIndex]?.options.map(option => (
                        <TouchableOpacity 
                        onPress={()=> validateAnswer(option)}
                        disabled={isOptionsDisabled}
                        key={option}
                        style={{
                            borderWidth: 3, 
                            borderColor: option==correctOption 
                            ? COLORS.success
                            : option==currentOptionSelected 
                            ? COLORS.error 
                            : COLORS.secondary+'40',
                            backgroundColor: option==correctOption 
                            ? COLORS.success +'20'
                            : option==currentOptionSelected 
                            ? COLORS.error +'20'
                            : COLORS.secondary+'20',
                            height: 60, borderRadius: 20,
                            flexDirection: 'row',
                            alignItems: 'center', justifyContent: 'space-between',
                            paddingHorizontal: 20,
                            marginVertical: 10
                        }}
                        >
                            <Text style={{fontSize: 20, color: COLORS.white}}>{option}</Text>

                            {/* Show Check Or Cross Icon based on correct answer*/}
                            {
                                option==correctOption ? (
                                    <View style={{
                                        width: 30, height: 30, borderRadius: 30/2,
                                        backgroundColor: COLORS.success,
                                        justifyContent: 'center', alignItems: 'center'
                                    }}>
                                        <MaterialCommunityIcons name="check" style={{
                                            color: COLORS.white,
                                            fontSize: 20
                                        }} />
                                    </View>
                                ): option == currentOptionSelected ? (
                                    <View style={{
                                        width: 30, height: 30, borderRadius: 30/2,
                                        backgroundColor: COLORS.error,
                                        justifyContent: 'center', alignItems: 'center'
                                    }}>
                                        <MaterialCommunityIcons name="close" style={{
                                            color: COLORS.white,
                                            fontSize: 20
                                        }} />
                                    </View>
                                ) : null
                            }

                        </TouchableOpacity>
                    ))
                }
            </View>
        )
    }
    const renderNextButton = () => {
        if(showNextButton){
            return (
                <TouchableOpacity
                onPress={handleNext}
                style={{
                    marginTop: 20, width: '100%', backgroundColor: COLORS.accent, padding: 20, borderRadius: 5
                }}>
                    <Text style={{fontSize: 20, color: COLORS.white, textAlign: 'center'}}>Next</Text>
                </TouchableOpacity>
            )
        }else{
            return null
        }
    }


    const [progress, setProgress] = useState(new Animated.Value(0));
    const progressAnim = progress.interpolate({
        inputRange: [0, allQuestions.length],
        outputRange: ['0%','100%']
    })
    const renderProgressBar = () => {
        return (
            <View style={{
                width: '100%',
                height: 20,
                borderRadius: 20,
                backgroundColor: '#00000020',

            }}>
                <Animated.View style={[{
                    height: 20,
                    borderRadius: 20,
                    backgroundColor: COLORS.accent
                },{
                    width: progressAnim
                }]}>

                </Animated.View>

            </View>
        )
    }

const renderTurnText = () => {
    let text = ""
    if(game == 2) {
        if(player1turn % 2 == 0) {
            text = `${name2}'s turn`
        } else {
            text = `${name}'s turn`
        }
    }
}

return (
    <SafeAreaView style={{
        flex: 1,
        width: '100%'
    }}>
        <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
        <View style={{
            flex: 1,
            paddingVertical: 40,
            paddingHorizontal: 16,
            backgroundColor: COLORS.background,
            position:'relative'
        }}>
            {/* ProgressBar */}
            { renderProgressBar() }

            {/* TurnText */}
            { renderTurnText()}

            {/* Question */}
            {renderQuestion()}

            {/* Options */}
            {renderOptions()}

            {/* Next Button */}
            {renderNextButton()}

            {/* Score Modal */}
            <Modal
            animationType="slide"
            transparent={true}
            visible={showScoreModal}
            >
                <View style={{
                    flex: 1,
                    backgroundColor: COLORS.primary,
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: "100%"
                }}>
                     {game == 1? 
                    <View style={{
                        backgroundColor: COLORS.white,
                        width: '90%',
                        borderRadius: 20,
                        padding: 20,
                        alignItems: 'center'
                    }}>
                         <Text style={{fontSize: 30, fontWeight: 'bold'}}>{ score> (allQuestions.length/2) ? 'Congratulations!' : 'Oops!' }</Text>
                         
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            marginVertical: 20
                        }}>
                         <Text style={{
                             fontSize: 30,
                             color: score> (allQuestions.length/2) ? COLORS.success : COLORS.error
                         }}>{score}</Text>
                         <Text style={{
                             fontSize: 20, color: COLORS.black
                         }}>/ { allQuestions.length }</Text>
                        </View>
                        {/* Retry Quiz button */}
                        <TouchableOpacity
                        onPress={() => RankUser(name, score, value)}
                        style={{
                            backgroundColor: COLORS.accent,
                            padding: 20, width: '100%', borderRadius: 20
                        }}>
                            <Text style={{
                                textAlign: 'center', color: COLORS.white, fontSize: 20
                            }}>Go to main menu</Text>
                        </TouchableOpacity>

                    </View>
                    :
                    <View style={{
                     backgroundColor: COLORS.white,
                     width: '90%',
                     borderRadius: 20,
                     padding: 20,
                     alignItems: 'center'
                 }}>
                     {game == 2? <>
                         {player1score> player2score?<>
                         <Text style={{fontSize: 30, fontWeight: 'bold'}}>{name} Won!</Text>
                         
                         <View style={{
                             flexDirection: 'row',
                             justifyContent: 'flex-start',
                             alignItems: 'center',
                             marginVertical: 20
                         }}>
                         <Text style={{
                             fontSize: 30,
                             color: player1score> (allQuestions.length/4) ? COLORS.success : COLORS.error
                         }}>{player1score}</Text>
                         <Text style={{
                             fontSize: 20, color: COLORS.black
                         }}>/ { allQuestions.length/2 }</Text>
                         </View>
                         </> 
                         : <>
                         {player2score > player1score?
                         <><Text style={{fontSize: 30, fontWeight: 'bold'}}>{name2} Won!</Text>
                         
                         <View style={{
                             flexDirection: 'row',
                             justifyContent: 'flex-start',
                             alignItems: 'center',
                             marginVertical: 20
                         }}>
                         <Text style={{
                             fontSize: 30,
                             color: player2score> (allQuestions.length/4) ? COLORS.success : COLORS.error
                         }}>{player2score}</Text>
                         <Text style={{
                             fontSize: 20, color: COLORS.black
                         }}>/ { allQuestions.length/2 }</Text>
                         </View>
                         </> : 
                         <><Text style={{fontSize: 30, fontWeight: 'bold'}}>It's a Draw!</Text>
                         
                         <View style={{
                             flexDirection: 'row',
                             justifyContent: 'flex-start',
                             alignItems: 'center',
                             marginVertical: 20
                         }}>
                         <Text style={{
                             fontSize: 30,
                             color: player1score> (allQuestions.length/4) ? COLORS.success : COLORS.error
                         }}>{player1score}</Text>
                         <Text style={{
                             fontSize: 30,
                             color: COLORS.black
                         }}> / </Text>
                         <Text style={{
                             fontSize: 30,
                             color: player2score> (allQuestions.length/4) ? COLORS.success : COLORS.error
                         }}>{player2score}</Text>
                         </View>
                         </>}
                     </>}
                     </> : 
                     <>  
                         <Text style={{fontSize: 30, fontWeight: 'bold'}}>{score > allQuestions.length/2? 'Congratulations!' : 'Oops!'}</Text>
                         
                         <View style={{
                             flexDirection: 'row',
                             justifyContent: 'flex-start',
                             alignItems: 'center',
                             marginVertical: 20
                         }}>
                         <Text style={{
                             fontSize: 30,
                             color: score> (allQuestions.length/2) ? COLORS.success : COLORS.error
                         }}>{score}</Text>
                         <Text style={{
                             fontSize: 20, color: COLORS.black
                         }}>/ { allQuestions.length }</Text>
                         </View>
                     </>
                     }
                     {/* Retry Quiz button */}
                     <TouchableOpacity
                     onPress={() => RankUser(name, score, value)}
                     style={{
                         backgroundColor: COLORS.accent,
                         padding: 20, width: '100%', borderRadius: 20
                     }}>
                         <Text style={{
                             textAlign: 'center', color: COLORS.white, fontSize: 20
                         }}>Go to main menu</Text>
                     </TouchableOpacity>

                 </View>
                 }
                </View>
            </Modal>

            {/* Background Image */}
            <Image
             source={require('../assets/DottedBG.png')}
             style={{
                 width: SIZES.width,
                 height: "100%",
                 zIndex: -1,
                 position: 'absolute',
                 bottom: 0,
                 left: 0,
                 right: 0,
                 opacity: 0.5
             }}
             />

        </View>
    </SafeAreaView>
 )
}

export default Quiz

const styles = StyleSheet.create({
    text: {
        fontFamily:"Roboto",
        fontSize: 20,
        color: COLORS.white,
        marginLeft: 20
    },
})