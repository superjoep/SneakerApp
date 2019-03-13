import {Component} from "react";
import React from "react";
import { Text, View} from "react-native";
import { Card, Title, Paragraph } from 'react-native-paper';
export default class SneakerDetailsComponent extends Component {

    data = {
        name: this.props.name,
        size: this.props.size,
        Inkoop: this.props.Inkoop,
        Verkoop: this.props.Verkoop
    };

    render() {
        return (
            <View>

                <Card>
                    <Card.Content>
                        <Title>{this.data.name}</Title>
                        <Paragraph>Maat: {this.data.size}</Paragraph>
                        <Text>InkoopPrijs: €{this.data.Inkoop}</Text>
                        <Text>VerkoopPrijs: €{this.data.Verkoop}</Text>
                        <Text>Winst: €{this.data.Verkoop - this.data.Inkoop}</Text>
                    </Card.Content>
                </Card>
            </View>
        );
    }
}

