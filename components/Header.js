import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';


export const Header = () => {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: 'https://scontent.ftbs5-1.fna.fbcdn.net/v/t1.0-9/122870637_350363562862010_3933229291478053616_o.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_ohc=3Q9AqKb2weIAX8Ow_rj&_nc_ht=scontent.ftbs5-1.fna&oh=f9993ef277c08e3df087bf2dcc5e8973&oe=5FFC7A09' }}
                resizeMode="contain"
                style={styles.avatar} />
            <Text style={styles.title}>Chats</Text>
            <Image
                source={require('../assets/edit.png')}
                resizeMode="contain"
                style={styles.edit} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginLeft: '5%'
    },
    title: {
        fontSize: 21,
        fontWeight: 'bold'
    },
    edit: {
        width: 25,
        height: 25,
        marginRight: '5%'
    }
})