import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View, Image, Modal, Animated  } from 'react-native'
import { TouchableOpacity } from "react-native"
import { COLORS, SIZES } from '../constants';
import Quiz from './Quiz'
import * as Font from 'expo-font'; 

async function componentDidMount() {
    await Font.loadAsync({
        'Montserrat_Regular': require('../constants/fonts/Montserrat-Regular.ttf'),
        'Montserrat_SemiBold': require('../constants/fonts/Montserrat-SemiBold.ttf'),
        'Montserrat_Bold': require('../constants/fonts/Montserrat-Bold.ttf'),
    });
    this.setState({ fontLoaded: true });
}

function Define2Players({ navigation }) {

    const [playerName, setPlayerName] = useState("")
    const [player2Name, setPlayer2Name] = useState("")
    const [showModal, setShowModal] = useState(false)

    const checkInput = () => {

        if(playerName.trim().length !== 0 && player2Name.trim().length !== 0) {
            navigation.navigate('DefineGame', {game: 2, name: playerName, name2: player2Name});
        } else {
            setShowModal(true);
        }
    }

  return (
    <>
        <View style={styles.container}>
           <Text style={styles.title}>Player's Name</Text>
           <Image
                source={require('../assets/user.png')}
                style={{
                    width: 200,
                    height: 200,
                    marginTop: "10%"
                }}
            />
            <TextInput 
                style={styles.input} 
                placeholder="Player's name" 
                placeholderTextColor="gray"
                onChangeText={(val) => setPlayerName(val)}
                />
                <TextInput 
                style={styles.input} 
                placeholder="Player's 2 name" 
                placeholderTextColor="gray"
                onChangeText={(val) => setPlayer2Name(val)}
                />
            <TouchableOpacity
                // onPress={() =>check if input is valid}
                title="Submit"
                onPress={checkInput}
                style={styles.btn}>
                    <Text style={styles.text}>Next</Text>
            </TouchableOpacity>
            <Modal
               animationType="slide"
               transparent={true}
               visible={showModal}
               >
                   <View style={{
                       flex: 1,
                       backgroundColor: COLORS.primary,
                       alignItems: 'center',
                       justifyContent: 'center'
                   }}>
                       <View style={{
                           backgroundColor: COLORS.white,
                           width: '90%',
                           borderRadius: 20,
                           padding: 20,
                           alignItems: 'center'
                       }}>
                           <Text style={{fontSize: 30, fontWeight: 'bold'}}>Player Name can't be empty!</Text>

                           <View style={{
                               flexDirection: 'row',
                               justifyContent: 'flex-start',
                               alignItems: 'center',
                               marginVertical: 20
                           }}>
                           </View>
                           {/* Retry Quiz button */}
                           <TouchableOpacity
                           onPress={() => setShowModal(false)}
                           style={{
                               backgroundColor: COLORS.accent,
                               padding: 20, width: '100%', borderRadius: 20
                           }}>
                               <Text style={{
                                   textAlign: 'center', color: COLORS.white, fontSize: 20
                               }}>Go back!</Text>
                           </TouchableOpacity>
                       </View>
                   </View>
               </Modal>
        </View>
    </>
  )
}

export default Define2Players;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#252c4a',
        alignItems: 'center',
        width: "100%"
    },
    btn: {
        marginTop: 100,
        width: "80%",
        textAlign: "center",
        backgroundColor: COLORS.accent,
        paddingVertical: 15,
        borderRadius: 5
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
    input: {
        width: "80%",
        paddingVertical: 20,
        backgroundColor: "#fff",
        marginTop: 20,
        borderRadius: 30,
        fontSize: 20,
        paddingLeft: 20
},

})