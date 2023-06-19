import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { TouchableOpacity } from "react-native"
import { COLORS, SIZES } from '../constants';
import Quiz from './Quiz'
import FixedQuiz from './FixedQuiz';
import * as Font from 'expo-font'; 

async function componentDidMount() {
    await Font.loadAsync({
        'Montserrat_Regular': require('../constants/fonts/Montserrat-Regular.ttf'),
        'Montserrat_SemiBold': require('../constants/fonts/Montserrat-SemiBold.ttf'),
        'Montserrat_Bold': require('../constants/fonts/Montserrat-Bold.ttf'),
    });
    this.setState({ fontLoaded: true });
}

function StartScreen({ navigation }) {

  return (
    <>
        <View style={styles.container}>
            <Image
                source={require('../assets/weird.png')}
                style={{
                    width: 400,
                    height: 380,
                    backgroundColor: "#fff",
                    marginTop: "-10%"
                }}
            />
            <TouchableOpacity
                onPress={() =>navigation.navigate('DefinePlayer')}
                style={styles.btn}>
                    <Text style={styles.text}>Singleplayer</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() =>navigation.navigate('Define2Player')}
                style={styles.btn}>
                    <Text style={styles.text}>Multiplayer</Text>
            </TouchableOpacity>
        </View>
    </>
  )
}

export default StartScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#252c4a',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%"
    },
    btn: {
        marginTop: 15,
        width: "80%",
        textAlign: "center",
        backgroundColor: COLORS.accent,
        paddingVertical: 15,
        borderRadius: 5,
        maxWidth: 400
    },
    text: {
        fontSize: 20,
        color: COLORS.white,
        marginLeft: 20
    }
})