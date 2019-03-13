import {Component} from "react";
import React from "react";
import {StyleSheet, View, FlatList} from "react-native";
import Sneakerdetails from './SneakerDetailsComponent'

export default class SneakerTemplate extends Component {


    render() {
        return (
            <View>
                <FlatList data={this.props.Sneakers}
                          renderItem={({item}) => <Sneakerdetails name={item.name} size={item.size} Inkoop={item.Inkoop} Verkoop={item.Verkoop}/>}
                          keyExtractor={({id}, index) => id} />
            </View>
        );
    }
}


;