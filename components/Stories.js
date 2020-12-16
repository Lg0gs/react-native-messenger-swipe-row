import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';


const stories = [
    {
        name: 'Create Room',
        avatar: 'camera'
    },
    {
        name: 'გოგა ცერცვაძე',
        avatar: 'https://scontent.ftbs5-2.fna.fbcdn.net/v/t1.0-9/130738909_2424096354403309_7219350113417834856_o.jpg?_nc_cat=101&ccb=2&_nc_sid=09cbfe&_nc_ohc=Awra9X-DUmcAX9uxFZW&_nc_ht=scontent.ftbs5-2.fna&oh=dc1749127fc0c209b64b8709c90bd4c0&oe=5FFEE8DB'
    },
    {
        name: 'Lasha Kakhidze',
        avatar: 'https://scontent.ftbs5-1.fna.fbcdn.net/v/t1.0-9/127882968_3624309267626902_6183040533131635263_o.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=GfI5OffZk_kAX8KSVji&_nc_ht=scontent.ftbs5-1.fna&oh=76d5f43e203053973033ce57e2f558a6&oe=5FFFC0B3'
    },
    {
        name: 'გურამ დგებუაძე',
        avatar: 'https://scontent.ftbs5-2.fna.fbcdn.net/v/t1.0-9/60924255_3319096851449881_3145456467872579584_n.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_ohc=fP8apXNibH8AX-6AFwQ&_nc_ht=scontent.ftbs5-2.fna&oh=2af26f41641bab12f6751df5ddc8380c&oe=5FFE5DF0'
    },
    {
        name: 'Irakli Butskhrikidze',
        avatar: 'https://scontent.ftbs5-1.fna.fbcdn.net/v/t1.0-9/120029132_4403935996348553_3862300022308054071_o.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=M-amFl-TR94AX-k-cD2&_nc_ht=scontent.ftbs5-1.fna&oh=ec6f0e95e6d67b522446806c1f0ca178&oe=5FFCCDA5'
    }
]


export const Stories = () => {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.container}
        >
            {stories.map(story => {
                if (story.avatar === 'camera') {
                    return (
                        <View key={story.avatar} style={{ alignItems: 'center' }}>
                            <View style={styles.addStory}>
                                <Image
                                    source={require('../assets/camera.png')}
                                    resizeMode="contain"
                                    style={{ width: 25, height: 25 }} />
                            </View>
                            <Text
                                numberOfLines={2}
                                style={styles.name}>
                                {story.name}
                            </Text>
                        </View>
                    )
                }

                return (
                    <View key={story.avatar} style={{ alignItems: 'center' }}>
                        <View>
                            <Image
                                source={{ uri: story.avatar }}
                                resizeMode="cover"
                                style={{ width: 56, height: 56, borderRadius: 28, marginHorizontal: 10 }} />
                            <View style={styles.onlineDotContainer}>
                                <View style={styles.onlineDot} />
                            </View>
                        </View>
                        <Text
                            numberOfLines={2}
                            style={styles.name}>
                            {story.name}
                        </Text>
                    </View>
                )
            })}
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingLeft: '3%',
        height: 95,
        marginTop: 15,
        marginBottom: 15
    },
    addStory: {
        width: 56,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 28,
        marginHorizontal: 10,
        backgroundColor: 'rgb(241, 241, 241)'
    },
    name: {
        width: 80,
        marginTop: 5,
        fontSize: 14,
        fontWeight: '400',
        textAlign: 'center',
        color: 'rgb(15, 15, 15)'
    },
    onlineDotContainer: {
        width: 20,
        height: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 5,
        bottom: 0,
        backgroundColor: '#fff'
    },
    onlineDot: {
        width: 13,
        height: 13,
        borderRadius: 6.5,
        backgroundColor: 'rgb(53, 201, 51)'
    }
})