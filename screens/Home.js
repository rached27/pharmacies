import React from "react";
import { StyleSheet, Text, Image, ScrollView } from "react-native";
import { doc } from "../constants/doc";
import { colors } from "../styles/colors";

const Home = () => {
  return (
    <ScrollView style={s.container}>
      <Text style={s.title}>{doc.greeting}</Text>
      <Text style={s.subtitle}>{doc.description}</Text>
      <Text style={s.text}>{doc.info_1}</Text>
      <Text style={s.text}>{doc.info_2}</Text>
      <Image
        style={s.image}
        source={require("../assets/images/card-ui.png")}
        resizeMode="contain"
      />
      <Text style={s.text}>{doc.info_3}</Text>
      <Text style={s.text}>{doc.info_4}</Text>
      <Text style={s.text}>{doc.info_5}</Text>
      <Text style={s.text}>{doc.nb}</Text>
      <Text style={s.subtitle}>{doc.bonus}</Text>
      <Text style={[s.text, { marginBottom: 100 }]}>{doc.bonus_q}</Text>
    </ScrollView>
  );
};

const s = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    color: colors.secondary,
    marginVertical: 20,
  },
  subtitle: {
    fontWeight: "400",
    fontSize: 20,
    textAlign: "center",
    color: colors.secondary,
    marginVertical: 20,
  },
  text: {
    marginBottom: 15,
    color: colors.text,
    fontSize: 15,
  },
  image: {
    width: "100%",
  },
});

export default Home;
