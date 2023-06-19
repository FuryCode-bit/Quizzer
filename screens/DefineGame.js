import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View, Image, Animated, Modal } from 'react-native'
import { TouchableOpacity } from "react-native"
import { COLORS, SIZES } from '../constants';
import PDM from '../data/QuizData';
import SI from '../data/PerguntasSI';
import SimpleSelectButton from 'react-native-simple-select-button';
import * as Font from 'expo-font'; 

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

function DefineGame({ route, navigation }) {

    const { game, name, name2 } = route.params;

    const [textInputValue, setTextInputValue] = React.useState('');
    const [selectedNumber, setSelectedNumber] = useState();
    const [showModal, setShowModal] = useState(false)
    const [data, setData] = useState()

    // const settings = {
    //     sliderWidth: "80%",
    //     data: data,
    //     renderItem: CarouselItem,
    //     hasParallaxImages: true,
    //   };

    const [isButtonSIPressed, setButtonSIPressed] = useState(false);
    const [isButtonPDMPressed, setButtonPDMPressed] = useState(false);

    const randomize = (values) => {
        let currentIndex = values.length;
      
        // While there remain elements to shuffle.
        while (currentIndex !== 0) {
          // Pick a remaining element.
          const randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // Swap the current element with the randomly selected element.
          const temporaryValue = values[currentIndex];
          values[currentIndex] = values[randomIndex];
          values[randomIndex] = temporaryValue;
        }
      
        return values;
      };
  
    const handleButtonSIPress = () => {
        setButtonSIPressed(true);
        setButtonPDMPressed(false);
        setData(randomize(SI));

    };
  
    const handleButtonPDMPress = () => {
        setButtonSIPressed(false);
        setButtonPDMPressed(true);
        setData(randomize(PDM));
    };

    const checkInput = () => {
        if(game == 1) {
            if(textInputValue >= 5 && textInputValue <= 150) {
                navigation.navigate('FixedQuiz', {game: game, name: name, name2: name2, value: textInputValue, questions: data}); 
            } else {
                setShowModal(true)
            }
        } else if(game == 2) {
            if(textInputValue >= 5 && textInputValue <= 15) {
                navigation.navigate('FixedQuiz', {game: game, name: name, name2: name2, value: textInputValue*2, questions: data}); 
            } else {
                setShowModal(true)
            }
        }
    }

  return (
    <>
        <View style={styles.container}>
           <Text style={styles.title}>Game Settings</Text>
           
           <Text style={styles.subtitle}>Number of questions</Text>
           
           <TextInput
            keyboardType='numeric'
            style={styles.input}
            onChangeText={text => setTextInputValue(text)}
            value={textInputValue}
            placeholder="Inserir número de questões"
            />
            
            <SimpleSelectButton
                text="Dispositivos Móveis"
                textSize={14}
                marginTop="30%"
                width="80%"
                textAlign="center"
                paddingVertical={15}
                borderRadius={5}
                maxWidth={400}
                iconName="checkcircleo"
                iconColor="#fff"
                iconSize={14}
                buttonDefaultColor={COLORS.accent}
                buttonSelectedColor="#ff9c5b"
                textDefaultColor="#333"
                textSelectedColor="#fff"
                isChecked={isButtonPDMPressed}
                onPress={handleButtonPDMPress}
            />

            <SimpleSelectButton
                text="Segurança Informática"
                textSize={14}
                marginTop="30%"
                width="80%"
                textAlign="center"
                paddingVertical={15}
                borderRadius={5}
                maxWidth={400}
                iconName="checkcircleo"
                iconColor="#fff"
                iconSize={14}
                buttonDefaultColor={COLORS.accent}
                buttonSelectedColor="#ff9c5b"
                textDefaultColor="#333"
                textSelectedColor="#fff"
                isChecked={isButtonSIPressed}
                onPress={handleButtonSIPress}
            />

            <TouchableOpacity
                // onPress={() =>check if input is valid}
                title="Submit"
                onPress={checkInput}
                style={styles.btn}>
                    <Text style={styles.text}>Next</Text>
            </TouchableOpacity>
        </View>
        <Modal
               animationType="slide"
               transparent={true}
               visible={showModal}
               >
                   <View style={{
                       flex: 1,
                       backgroundColor: COLORS.primary,
                       alignItems: 'center',
                       justifyContent: 'center',
                       height: "100%"
                   }}>
                       <View style={{
                           backgroundColor: COLORS.white,
                           width: '90%',
                           borderRadius: 20,
                           padding: 20,
                           alignItems: 'center'
                       }}>
                            <Text style={{fontSize: 30, fontWeight: 'bold'}}>Valores inválidos!</Text>
                            
                           {/* Go back button */}
                           <TouchableOpacity
                           onPress={() => setShowModal(false)}
                           style={{
                               backgroundColor: COLORS.accent,
                               padding: 20, width: '100%', borderRadius: 20
                           }}>
                               <Text style={{
                                   textAlign: 'center', color: COLORS.white, fontSize: 20
                               }}>Go back</Text>
                           </TouchableOpacity>
                       </View>
                   </View>
               </Modal>
    </>
  )
}

export default DefineGame;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#252c4a',
        alignItems: 'center',
        width: "100%"
    },
    btn: {
        marginTop: "30%",
        width: "80%",
        textAlign: "center",
        backgroundColor: COLORS.accent,
        paddingVertical: 15,
        borderRadius: 5,
        maxWidth: 400
    },
    optBtn: {
        marginTop: "30%",
        width: "50%",
        textAlign: "center",
        backgroundColor: COLORS.accent,
        paddingVertical: 15,
        borderRadius: 5,
        maxWidth: 100
    },
    text: {
        fontSize: 20,
        color: COLORS.white,
        marginLeft: 20
    },
    title: {
        fontSize: 38,
        color: COLORS.white,
        marginTop: 20
    },
    subtitle: {
        fontSize: 26,
        color: COLORS.white,
        marginTop: "40%"
    },
    input: {
        width: "80%",
        marginTop: 20,
        paddingVertical: 20,
        backgroundColor: "#fff",
        borderRadius: 30,
        fontSize: 20,
        paddingLeft: 20,
        paddingRight: 20,
        maxWidth: 400
},

})