import React, { useState } from 'react';
import { SafeAreaView, StatusBar} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import data from './data';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { RenderChat } from './components/RenderChat';


export const App = () => {
    const [currentId, setCurrentId] = useState('');

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar barStyle="dark-content" />
            <Header />
            <FlatList
                style={{ marginTop: 0 }}
                showsVerticalScrollIndicator={false}
                data={data}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <RenderChat
                        id={currentId ? currentId : item.id}
                        item={item}
                        updateId={setCurrentId} />
                )} />
            <Footer />
        </SafeAreaView>
    )
}