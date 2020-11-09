import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather'
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import TabScreen from '../vendor/TabScreen';

function ApprovalsCards() {

    const [hide, setHide] = useState(false);

    function hideCard() { setHide(true); }

    const statement = { sentence: '{0} Material Request', boldText: ['Category'] };

    const applyBoldStyle = text => {
        let numberOfItemsAdded = 0;
        const result = text.sentence.split(/\{\d+\}/);
        text.boldText.forEach((boldText, i) => result.splice(++numberOfItemsAdded + i, 0, <Text style={{ fontWeight: 'bold' }} key={i}>{boldText}</Text>));
        return <Text>{result}</Text>;
    };

    if (!hide) {
        return (
            <View style={styles.listItemContainer}>
                <View style={{ flex: 1, flexDirection: "row" }}>
                    <View style={{ alignItems: "flex-start" }}>
                        <Text style={{ fontSize: 15, color: "black" }}>{applyBoldStyle(statement)}</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: "flex-end" }}>
                        {/* <FontAwesomeIcon icon={faTimes} size={20} color="red" onPress={() => hideCard()} /> */}
                    </View>
                </View>
                <Text style={{ marginTop: 30, fontSize: 20, fontWeight: "bold" }}>+91-9658745896</Text>
                <View style={{ flexDirection: "row", marginTop: 10 }}>
                    <View style={{ alignItems: "flex-start" }}>
                        <Text style={{ fontSize: 16 }}>07/07/2020</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: "flex-end" }}>
                        <Text style={{ fontSize: 16, fontWeight: "bold" }}>₹50,200</Text>
                    </View>
                </View>
            </View>
        );
    }
    else { return null; }
}

export default function NotificationsScreen() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.header}>Notifications</Text>
            </View>
            <View style={styles.searchBox}>
                <TextInput
                    style={styles.searchText}
                    placeholder='Booking ID'
                />
                <View style={styles.searchIcon}>
                    <Feather name='search' size={24} />
                </View>
            </View>
            <TabScreen />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    header: {
        alignSelf: 'center',
        marginTop: '10%',
        color: '#353535',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: '5%'
    },
    searchBox: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '95%',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "grey",
        borderRadius: 50,
        paddingHorizontal: 20,
        zIndex: 2,
    },
    searchText: {
        fontSize: 16,
        color: '#A6BCD0',
        paddingLeft: 10,
        alignItems: "flex-start"
    },
    searchIcon: {
        flex: 1,
        alignItems: "flex-end",
        paddingRight: 10
    },
});