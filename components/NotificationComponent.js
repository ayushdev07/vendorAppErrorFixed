import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NotificationComponent = ({ bookingId, Area, Address , Amount}) => {
   
    let address = Address.substring(0,12)+"..."
    let amount = "₹ "  + Amount
    return (
        <View style={styles.mainContainer} >
           <View style={styles.contentBox} >
                <Text style={{ fontSize: 18 }} >Booking ID :</Text>
                <Text style={{ marginStart: '2%', fontSize: 18 }} >{bookingId}</Text>
            </View>
            <View style={styles.contentBox} >
                <Text style={{ fontSize: 18, fontWeight: 'bold' }} >{Area}</Text>
            </View>
            <View style={{flexDirection: 'row',
        marginEnd: '5%',}} >
                <Text style={{ fontSize: 18, color: '#353535', maxWidth: '50%' }} > {address}</Text>
                <View style={styles.filler} />
                <Text style={{ fontSize: 20, marginEnd: '5%', color: '#353535' }} >{amount}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        marginVertical: '4%',
        backgroundColor: '#e3e4e6',
        borderRadius: 15,
        marginHorizontal: '10%',
        flex: 1,
        maxHeight: '20%',
        marginBottom:'3%'
    },
    contentBox: {
        marginStart: '10%',
        flexDirection: 'row',
        marginTop: '5%',
        marginEnd: '5%',
    },
    filler: {
        flex: 1,
        flexDirection: 'row'
    }
})

export default NotificationComponent;
