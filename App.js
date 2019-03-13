

import React from 'react';
import Component1 from './Component/NavBar'
import Component2 from './Component/NavbarHead'
import Sneaker from './Component/SneakerPageComponent'
import { StyleSheet, ScrollView, View} from 'react-native';

export default class MainPageDetailsComponent extends React.Component {

    render() {
        return (
            <View  style={styles.container}>
            <Component2/>

            <ScrollView style={styles.scrolling}>

                <Sneaker/>

            </ScrollView>
                <Component1/>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'goldenrod',
    },
    scrolling:{
        marginBottom: 50
    }
});