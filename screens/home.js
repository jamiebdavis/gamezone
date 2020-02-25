import React, {useState} from 'react';
import {
    StyleSheet, View, Text, TouchableOpacity, FlatList, Modal,
    TouchableWithoutFeedback, Keyboard
} from 'react-native';
import {globalStyles} from '../styles/global';
import {MaterialIcons} from '@expo/vector-icons';
import Card from '../shared/card';
import ReviewForm from './reviewForm';

export default function Home({navigation}) {
    const [modalOpen, setModalOpen] = useState(false);
    const [reviews, setReviews] = useState([
        {
            title: 'Metal Gear Solid',
            rating: 5,
            body: 'Metal Gear is a series of action-adventure stealth video games created by Hideo Kojima',
            key: '1'
        },
        {
            title: 'Apex Legends',
            rating: 4,
            body: 'Apex Legends is a free-to-play Battle Royale game where legendary competitors battle for glory, fame, and fortune on the fringes of the Frontier.',
            key: '2'
        },
        {
            title: 'Final Fantasy 7',
            rating: 3,
            body: 'Final Fantasy VII is a 1997 role-playing video game developed by Square for the PlayStation console.',
            key: '3'
        },
        {
            title: 'Tekken',
            rating: 1,
            body: 'is a Japanese media franchise centered on a series of fighting video and arcade games developed and published by Bandai Namco Entertainment.',
            key: '4'
        }
    ]);

    const addReview = (review) => {
        review.key = Math.random().toString();
        setReviews((currentReviews) => {
            return [review, ...currentReviews];
        });
        setModalOpen(false);
    };

    return (
        <View style={globalStyles.container}>

            <Modal visible={modalOpen} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <MaterialIcons
                            name='close'
                            size={24}
                            style={{...styles.modalToggle, ...styles.modalClose}}
                            onPress={() => setModalOpen(false)}
                        />
                        <ReviewForm addReview={addReview}/>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            <MaterialIcons
                name='add'
                size={24}
                style={styles.modalToggle}
                onPress={() => setModalOpen(true)}
            />

            <FlatList data={reviews} renderItem={({item}) => (
                <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                    <Card>
                        <Text style={globalStyles.titleText}>{item.title}</Text>
                    </Card>
                </TouchableOpacity>
            )}/>

        </View>
    );
}

const styles = StyleSheet.create({
    modalToggle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0,
    },
    modalContent: {
        flex: 1,
    }
});