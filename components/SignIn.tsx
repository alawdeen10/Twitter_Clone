import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Pressable,
} from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../services/firebase";
import { useNavigation } from "@react-navigation/native";
import logo from "../assets/images/twitter.png";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigation = useNavigation();

  const handleSignIn = () => {
    console.log(email, password);
    setError("");
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigation.navigate("Login");
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  const goToLogIn = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.register}>
      <Image source={logo} style={{ width: 68, height: 68 }} />
      <Text style={styles.registerHead}>Sign In</Text>
      <TextInput
        placeholder="Email"
        onChangeText={setEmail}
        style={styles.registerEmail}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
        style={styles.registerPassword}
      />
      {error && <Text style={{ color: "red", marginBottom: 10 }}>{error}</Text>}
      <Pressable style={styles.log_button} onPress={handleSignIn}>
        <Text style={{ color: "#ffffff", fontWeight: "bold", fontSize: 20 }}>
          Sign In
        </Text>
      </Pressable>
      <Text onPress={goToLogIn} style={styles.registerLogin}>
        Already have an account ? Click here
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  register: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  registerHead: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#00c3ff",
  },
  registerEmail: {
    padding: 15,
    borderWidth: 2,
    borderColor: "#00c3ff",
    backgroundColor: "#ffffff",
    width: "80%",
    marginBottom: 20,
    borderRadius: 30,
  },
  registerPassword: {
    padding: 15,
    borderWidth: 2,
    borderColor: "#00c3ff",
    backgroundColor: "#ffffff",
    width: "80%",
    marginBottom: 20,
    borderRadius: 30,
  },
  registerLogin: {
    marginTop: 15,
  },
  log_button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00c3ff",
    borderColor: "#ffffff",
    borderWidth: 2,
    width: "75%",
    height: 50,
    borderRadius: 30,
  },
});

export default SignIn;
