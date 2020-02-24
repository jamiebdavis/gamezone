import React, { useState } from "react";
import {
    StyleSheet,  View,  Text,   FlatList, TouchableOpacity, Modal, TouchableWithoutFeedBack  } from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../shared/card";
import { MaterialIcons } from "expo/vector-icons";
import ReviewForm from "./reviewForm";


export default function Home({ navigation }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [reviews, setReviews] = useState([
        {
            title: "Zelda, Breath of Fresh Air",
            rating: 5,
            body: "lorem ipsum",
            key: "1"
        },
        {
            title: "Gotta Catch Them All (again)",
            rating: 4,
            body: "lorem ipsum",
            key: "2"
        },
        {
            title: 'Not So "Final" Fantasy',
            rating: 3,
            body: "lorem ipsum",
            key: "3"
        }
    ]);

    const addReview = review => {
        review.key = Math.random().toString();
        setReviews(currentReviews => {
            return [review, ...reviews];
        });
        setModalOpen(false);
    };

    return (
        <View style={globalStyles.container}>
            <TouchableWithoutFeedBack onPress={Keyboard.dismiss}>
                <Modal visable={modalOpen} animationType="slide">
                    <View style={styles.modelContent}>
                        <MaterialIcons
                            name="close"
                            size={24}
                            onPress={() => setModalOpen(false)}
                            style={{ ...styles.modalToggle, ...styles.modalClose }}
                        />
                        <ReviewForm addReview={addReview} />
                    </View>
                </Modal>
            </TouchableWithoutFeedBack>

            <MaterialIcons
                name="add"
                size={24}
                onPress={() => setModalOpen(true)}
                style={styles.modalToggle}
            />

            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate("ReviewDetails", item)}
                    >
                        <Card>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColour: "#f2f2f2",
        padding: 10,
        borderRadius: 10,
        alignSelf: "center"
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0
    },
    modelContent: {
        flex: 1
    }
});
