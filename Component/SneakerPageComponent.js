import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import SneakerListComponent from "./SneakerTemplate";

export default class SneakerPageComponent extends Component {

    Sneakers = [
        {
            id: 0,
            name: "Nike Air Force 1",
            size: 37,
            Inkoop: 30,
            Verkoop: 60
        },
        {
            id: 1,
            name: "Nike Air Max 95",
            size: 43,
            Inkoop: 35,
            Verkoop: 55
        },
        {
            id: 2,
            name: "Nike Air Max 01",
            size: 40,
            Inkoop: 70,
            Verkoop: 90
        },
        {
            id: 3,
            name: "Nike Air Max 90",
            size: 42,
            Inkoop: 45.50,
            Verkoop: 60
        },
        {
            id: 3,
            name: "Nike Air Max 90",
            size: 42,
            Inkoop: 20,
            Verkoop: 90
        },
        {
            id: 3,
            name: "Nike Air Max 90",
            size: 42,
            Inkoop: 45.50,
            Verkoop: 60
        },
        {
            id: 3,
            name: "Nike Air Max 90",
            size: 42,
            Inkoop: 45.50,
            Verkoop: 60

        }

    ];

    render() {
        return (
            <View>
                <SneakerListComponent Sneakers={this.Sneakers} />
            </View>
        );
    }
}