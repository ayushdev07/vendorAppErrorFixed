import React, { Component } from 'react'
import { View, StyleSheet, Image } from 'react-native'

export default class SplashScreen extends Component {

    async componentDidMount() {
        const data = await this.navigateToHome();
        if (data !== null) { this.props.navigation.navigate('SuperVisorBottom') }
    }

    navigateToHome = async () => {
        const wait = time => new Promise((resolve) => setTimeout(resolve, time));
        return wait(3000).then(() => this.props.navigation.navigate('SuperVisorBottom'))
    };

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../../assets/Splash1.gif')} style={styles.image} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        width: '100%',
        height: 200,
        justifyContent: "center"
    },
});