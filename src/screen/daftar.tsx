import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Appinput from "../components/appinput";
import auth from "@react-native-firebase/auth";
import firebaseConfig from "../database/firebase";

const Daftar: React.FC<Props> = ({ navigation: { navigate } }) => {
  const [values, setValue] = useState({ name: "", email: "", password: "" });
  const updateInputval = (val, key) => {
    const value = { ...values };
    value[key] = val;
    setValue({ ...value });
  };

  const handleDaftar = async () => {
    console.log("value ", values);
    if (!values.email && !values.password && !values.name) {
      Alert.alert("Enter a required field");
      return false;
    }
    // try {
    //   const userCredential = await auth().createUserWithEmailAndPassword(values.email, values.password);

    //   const user = userCredential.user;

    //   console.log("User registered successfully:", user);
    //   Alert.alert("Registration Successful!");
    // } catch (error) {
    //   console.error("Error registering user:", error.message);
    //   Alert.alert("Registration Failed", error.message);
    // }
  };

  return (
    <SafeAreaView>
      <View style={{ padding: 20 }}>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 30, fontWeight: "bold", paddingTop: 130 }}>Daftar Disini</Text>
        </View>
        <View style={{ marginVertical: 30 }}>
          <Appinput placeholder="Nama" name="name" value={values.name} updateInputval={updateInputval} />
          <Appinput placeholder="Email" name="email" value={values.email} updateInputval={updateInputval} />
          <Appinput placeholder="Password" name="password" value={values.password} updateInputval={updateInputval} secure={true} />
        </View>
        <TouchableOpacity onPress={() => handleDaftar()} style={{ padding: 20, borderRadius: 10, marginVertical: 30, backgroundColor: "#f6880c", shadowOffset: { width: 4, height: 10 }, shadowOpacity: 0.3, shadowRadius: 10 }}>
          <Text style={{ color: "#fff", textAlign: "center", fontSize: 20 }}>Daftar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigate("Login");
          }}
          style={{ padding: 20, borderRadius: 10 }}
        >
          <Text style={{ color: "#000", textAlign: "center", fontSize: 20 }}>Sudah Punya Akun?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Daftar;
