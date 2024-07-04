import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../components/Home";
import SearchScreen from "../../components/SearchScreen";
import SignIn from "../../components/SignIn";
import LogIn from "@/components/LogIn";
import Notification from "@/components/Notification";
import Inbox from "@/components/Inbox";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LogIn} />
        <Stack.Screen name="Signin" component={SignIn} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Bell" component={Notification} />
        <Stack.Screen name="Inbox" component={Inbox} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
