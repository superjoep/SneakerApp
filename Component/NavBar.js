import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

export default class NavBar extends React.Component {
    render() {
        return (
            <Appbar style={styles.bottom}>
                <Appbar.Action icon="add" onPress={() => console.log('Adding sneaker')} />
                <Appbar.Action icon="edit" onPress={() => console.log('Edit Sneaker')} />
                <Appbar.Action icon="delete" onPress={() => console.log('Delete sneaker')} />

            </Appbar>
        );
    }
}

const styles = StyleSheet.create({
    bottom: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
    },
});