import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import Animated, { add, block, call, Clock, clockRunning, cond, divide, eq, event, greaterOrEq, greaterThan, lessOrEq, neq, or, set, spring, startClock, stopClock, useCode, useValue } from 'react-native-reanimated';
import { faBars, faBell, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { SearchBar } from './SearchBar';
import { Stories } from './Stories';


const options = [
    {
        backgroundColor: '#e0e0e0',
        translateX: 1,
        icon: faBars,
        color: '#000'
    },
    {
        backgroundColor: '#999',
        translateX: 1.5,
        icon: faBell,
        color: '#000'
    },
    {
        backgroundColor: 'red',
        translateX: 3,
        icon: faTrash,
        color: '#fff'
    },
]


export const RenderChat = ({ id, item, updateId }) => {
    if (item.id === 'search_bar') return <SearchBar />
    if (item.id === 'stories') return <Stories />

    const clock = new Clock();
    const offset = useValue(0);

    const animState = {
        finished: useValue(0),
        position: useValue(0),
        velocity: useValue(0),
        time: useValue(0)
    };

    const animsConfig = {
        damping: 40,
        mass: 9,
        stiffness: 400,
        overshootClamping: true,
        restSpeedThreshold: .1,
        restDisplacementThreshold: 1,
        toValue: useValue(0)
    }

    const onGestureEvent = event([
        {
            nativeEvent: ({ state, translationX, velocityX }) => block([
                // set(animState.velocity, velocityX),
                
                cond(
                    eq(state, State.ACTIVE), [
                        call([], ([]) => updateId(item.id)),
                        cond(
                            lessOrEq(add(translationX, offset), 0), [
                                cond(
                                    greaterOrEq(add(translationX, offset), -240), [
                                        set(animState.position, add(translationX, offset))
                                    ], [
                                        set(animState.position, add(
                                            animState.position, 
                                            divide(add(translationX, offset), 1000)
                                        ))
                                    ]
                                )
                            ]
                        )
                    ], [
                        set(animsConfig.toValue, cond(
                            or(greaterOrEq(add(translationX, offset), -40), greaterThan(velocityX, 500)), [
                                set(offset, 0),
                                0
                            ], [
                                set(offset, -240),
                                -240
                            ]
                        )),
                        startClock(clock),
                    ]
                )
            ])
        }
    ])

    useCode(() => [
        cond(
            clockRunning(clock), [
                spring(clock, animState, animsConfig)
            ]
        ),
        cond(
            animState.finished, [
                stopClock(clock),
                set(animState.finished, 0)
            ]
        )
    ], []);

    useCode(() => [
        cond(
            neq(id, item.id), [
                cond(
                    eq(animsConfig.toValue, -240), [
                        set(offset, 0),
                        set(animsConfig.toValue, 0),
                        startClock(clock)
                    ]
                )
            ]
        ),
    ], [id])

    return (
        <View style={{ marginVertical: 2.5 }}>
            <PanGestureHandler
                minDeltaX={10}
                onGestureEvent={onGestureEvent}
                onHandlerStateChange={onGestureEvent}>
                <Animated.View>
                    {options.map(option => (
                        <Animated.View
                            key={option.backgroundColor}
                            style={[
                                styles.option,
                                {
                                    backgroundColor: option.backgroundColor,
                                    transform: [{
                                        translateX: divide(animState.position, option.translateX)
                                    }]
                                }
                            ]}
                        >
                            <FontAwesomeIcon
                                icon={option.icon}
                                color={option.color}
                                size={25}
                                style={{ marginLeft: 30 }} />
                        </Animated.View>
                    ))}
                    <Animated.View style={[styles.item, { transform: [{ translateX: animState.position }] }]}>
                        <View>
                            <Image
                                source={{ uri: item.avatar }}
                                resizeMode="cover"
                                style={styles.avatar} />
                            {item.isOnline &&
                                <View style={styles.onlineDotContainer}>
                                    <View style={styles.onlineDot} />
                                </View>
                            }
                        </View>
                        <View style={styles.msgContainer}>
                            <View style={{ marginLeft: 10 }}>
                                <Text style={[styles.name, item.unread && { fontWeight: '700' }]}>{item.name}</Text>
                                <Text
                                    style={[
                                        styles.msg,
                                        item.unread && {
                                            fontWeight: 'bold',
                                            color: '#000'
                                        }
                                    ]}>
                                    {`${item.you ? 'You: ' : ''} ${item.msg} ${item.time}`}
                                </Text>
                            </View>
                            {item.unread && <View style={styles.unread} />}
                        </View>
                    </Animated.View>
                </Animated.View>
            </PanGestureHandler>
        </View>
    )
}


const styles = StyleSheet.create({
    item: {
        width: '100%',
        height: 65,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    avatar: {
        width: 58,
        height: 58,
        borderRadius: 29,
        marginLeft: 20
    },
    name: {
        fontSize: 19,
        fontWeight: '500',
        color: 'rgb(14, 14, 14)',
        marginBottom: 2
    },
    msgContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    msg: {
        color: 'rgb(154, 154, 154)',
        marginTop: 2,
        fontSize: 15,
        fontWeight: '300'
    },
    onlineDotContainer: {
        width: 20,
        height: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 0,
        bottom: 0,
        backgroundColor: '#fff'
    },
    onlineDot: {
        width: 13,
        height: 13,
        borderRadius: 6.5,
        backgroundColor: 'rgb(53, 201, 51)'
    },
    option: {
        width: 160,
        height: 70,
        justifyContent: 'center',
        alignItems: 'flex-start',
        position: 'absolute',
        right: -160
    },
    unread: {
        width: 13,
        height: 13,
        borderRadius: 6.5,
        backgroundColor: 'rgb(19, 117, 237)',
        marginRight: '5%'
    }
})