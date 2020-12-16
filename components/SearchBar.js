import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';


export const SearchBar = () => {
    return (
        <View style={styles.container}>
            <FontAwesomeIcon
                icon={faSearch}
                color="rgb(93, 93, 95)"
                size={19}
                style={{ marginLeft: 15 }} />
            <Text style={styles.search}>Search</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '90%',
        marginLeft: '5%',
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: 'rgb(232, 232, 235)',
    },
    search: {
        fontSize: 17,
        marginLeft: 10,
        color: 'rgb(93, 93, 95)'
    }
})