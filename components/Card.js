import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import Button from "./Button";
import { colors } from "../styles/colors";
import { Entypo } from '@expo/vector-icons';

export default function Card(props) {
    const { navigation, item, onPress } = props;
    return (

<TouchableOpacity onPress={onPress} style={styles.itemWrapperStyle}>
    <View style={styles.groupImageStyle}>
      <Image style={styles.itemImageStyle} source={{ uri: `https://www.maiia.com/files/${item.center.publicInformation.mainPicture ? item.center.publicInformation.mainPicture.s3Id : "75615d2b-b293-4a9a-952f-62665f29bd5e-pharmacie-de-l-aquarius-paris.jpg"}` }} />
      <Text style={styles.firstTextImageStyle}>Lun.</Text>
      <Text style={styles.secondTextImageStyle}>13/09</Text>
    </View>
    <View style={styles.contentWrapperStyle}>
      <Text style={styles.txtNameStyle} numberOfLines={1}>{`${item.center.name}`}</Text>
      <Text style={styles.txtAddressStyle} numberOfLines={1}>{`${item.center.publicInformation.address.city} ${item.center.publicInformation.address.zipCode}`} </Text>
      <View style={styles.localisationStyle}>
        <Entypo name="location-pin" size={20} color={colors.text} />
        <Text style={styles.txtDistanceStyle}>à 752 mètres</Text>
      </View>
      <View style={styles.timeButtonStyle}>
        <Button title='9:12' color={colors.secondary} />
        <Button title='-' color={colors.gray} />
        <Button title='9:12' color={colors.secondary} />
      </View>
    </View>
  </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    itemWrapperStyle: {
        flexDirection: "row",
        marginHorizontal: 16,
        marginVertical: 16,
        paddingHorizontal: 16,
        paddingVertical: 16,
        borderRadius: 10,
        borderBottomWidth: 1,
        borderColor: colors.gray,
        backgroundColor: 'white'
    
      },
      groupImageStyle: {
        flexDirection: 'column',
        marginRight: 16,
        justifyContent: 'center',
        alignItems: 'center'
      },
      firstTextImageStyle: {
        textAlign: 'center',
        alignSelf: 'center',
        marginTop: 15,
        fontSize: 18,
        color: colors.primary,
    
      },
    
      secondTextImageStyle: {
        textAlign: 'center',
        alignSelf: 'center',
        color: colors.text,
    
      },
      itemImageStyle: {
        width: 80,
        height: 80,
        borderRadius: 50,
        fontWeight: 'bold'
      },
      contentWrapperStyle: {
        justifyContent: "flex-start",
        flexShrink: 1,
      },
    
      txtNameStyle: {
        fontWeight: 'bold',
        fontSize: 22,
        color: colors.primary,
    
      },
      txtAddressStyle: {
        paddingTop: 5,
        fontSize: 20,
      },
      txtDistanceStyle: {
        paddingLeft: 10,
        color: colors.text,
      },
      loaderStyle: {
        marginVertical: 16,
        alignItems: "center",
      },
      localisationStyle: {
        paddingTop: 5,
        flexDirection: "row",
        alignItems: "center",
      },
      timeButtonStyle: {
        paddingTop: 25,
        flexDirection: "row",
        width: '100%',
        alignItems: "stretch",
        justifyContent: "space-between"
      },
});