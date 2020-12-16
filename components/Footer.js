import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faComment, faUserFriends } from '@fortawesome/free-solid-svg-icons';


export const Footer = () => {
    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'center' }}>
                <FontAwesomeIcon
                    icon={faComment}
                    color="#000"
                    size={25} />
                <Text style={styles.chat}>Chats</Text>
                <View style={styles.unreadContainer}>
                    <View style={styles.unreadBackground}>
                        <Text style={styles.unreadText}>1</Text>
                    </View>
                </View>
            </View>
            <View style={{ alignItems: 'center' }}>
                <FontAwesomeIcon
                    icon={faUserFriends}
                    color="rgb(144, 156, 165)"
                    size={30} />
                <Text style={[styles.chat, { color: 'rgb(144, 156, 165)' }]}>People</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 55,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    chat: {
        fontSize: 15
    },
    unreadContainer: {
        width: 20,
        height: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: -5,
        right: -5,
        backgroundColor: '#fff'
    },
    unreadBackground: {
        width: 15,
        height: 15,
        borderRadius: 7.5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    },
    unreadText: {
        fontSize: 12,
        fontWeight: '700',
        color: '#fff'
    }
})