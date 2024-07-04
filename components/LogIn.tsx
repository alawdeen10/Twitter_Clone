import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Pressable,
} from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../services/firebase";
import { useNavigation } from "@react-navigation/native";
import logo from "../assets/images/twitter.png";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigation = useNavigation();

  const handleLogin = () => {
    setError("");
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigation.navigate("Home");
        console.log("Logged in user:", user.email);
      })
      .catch((error) => {
        console.error("Error signing in:", error.message);
        setError(error.message);
      });
  };

  const goToSignIn = () => {
    navigation.navigate("Signin");
  };

  return (
    <View style={styles.register}>
      <Image source={logo} style={{ width: 68, height: 68 }} />
      <Text style={styles.registerHead}>Log In</Text>
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
      <Pressable style={styles.log_button} onPress={handleLogin}>
        <Text style={{ color: "#ffffff", fontWeight: "bold", fontSize: 20 }}>
          Log In
        </Text>
      </Pressable>
      <Text onPress={goToSignIn} style={styles.registerLogin}>
        Create an account? Click here
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

export default LogIn;
