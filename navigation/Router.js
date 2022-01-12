import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FontAwesome } from "@expo/vector-icons";
import Home from "../screens/Home";
import Page from "../screens/Page";
import DetailModalScreen from "../screens/DetailModalScreen";
import { colors } from "../styles/colors";

const Router = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />

      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="DetailModalScreen" component={DetailModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => (
  <BottomTab.Navigator
    initialRouteName="Maiia"
    screenOptions={{
      tabBarActiveTintColor: colors.secondary,
    }}
  >
    <BottomTab.Screen
      name="Maiia"
      component={Home}
      options={() => ({
        title: "Test technique Maiia",
        tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTintColor: colors.white,
      })}
    />
    <BottomTab.Screen
      name="Code !"
      component={Page}
      options={{
        title: "Code !",
        tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
      }}
    />
  </BottomTab.Navigator>
);

const TabBarIcon = (props) => {
  return <FontAwesome size={25} {...props} />;
};

export default Router;
