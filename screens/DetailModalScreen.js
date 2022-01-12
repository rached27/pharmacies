import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import { colors } from "../styles/colors";
import { useSelector } from 'react-redux'

const DetailModalScreen = ({ route, navigation }) => {
  //Get pharmacyId from Page screen
  const { pharmacyId } = route.params;
  //Get get pharmacy by id from the store
  const pharmacy = useSelector(state =>
    state.myReducer.pharmacies.find(pharmacy => pharmacy.id === pharmacyId)
  )

  //Get current weekday
  let weekday = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'][new Date().getDay()]

  //Check if pharmacy is open
  const verifyDisponibility = (pharmacy) => {
    var time_start = new Date();
    var time_now = new Date();
    var time_end = new Date();

    //Get startTime from the pharmacy object
    var value_start = pharmacy.center.publicInformation.officeInformation.openingSchedules[weekday].schedules[0].startTime.split(':');
    //Get endTime from the pharmacy object
    var value_end = pharmacy.center.publicInformation.officeInformation.openingSchedules[weekday].schedules[0].endTime.split(':');

    //Set hours and minutes for time_start
    time_start.setHours(value_start[0], value_start[1], 0);
    //Set hours and minutes for time_now
    time_now.setHours(time_now.getHours(), time_now.getMinutes(), 0)
    //Set hours and minutes for time_end
    time_end.setHours(value_end[0], value_end[1], 0)

    //Compare in milliseconds
    if ((time_now - time_start > 0) && (time_end - time_now > 0)) {
      //Open
      navigation.setOptions({
        title: "Ouvert",
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      });
      return true;
    }
    else {
      //Closed
      navigation.setOptions({
        title: "Fermé",
        headerStyle: {
          backgroundColor: colors.secondary,
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      });
    }
    return true;
  }

  useEffect(() => {
    verifyDisponibility(pharmacy)
  }, [pharmacy]);
  return (

    <View style={styles.container}>
      <ScrollView>
        <View style={styles.body}>
          <Image style={styles.pharmacyImg} source={{ uri: `https://www.maiia.com/files/${pharmacy.center.publicInformation.mainPicture ? pharmacy.center.publicInformation.mainPicture.s3Id : "75615d2b-b293-4a9a-952f-62665f29bd5e-pharmacie-de-l-aquarius-paris.jpg"}` }} />
          <Text style={styles.name}>{pharmacy.center.name}</Text>
          <Text style={styles.address}>{pharmacy.center.publicInformation.address.fullAddress}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  body: {
    alignItems: 'center',
    marginHorizontal: 30,
  },
  pharmacyImg: {
    width: 200,
    height: 200,
  },
  name: {
    fontSize: 28,
    textAlign: 'center',
    color: colors.text,
    fontWeight: 'bold'
  },
  address: {
    marginTop: 10,
    fontSize: 18,
    color: colors.primary,
    textAlign: 'center',
    fontWeight: 'bold'
  },
});

export default DetailModalScreen;
