import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Appinput from "../components/appinput";

const Login: React.FC<Props> = ({ navigation: { navigate } }) => {
  const [values, setValue] = useState({ email: "", password: "" });
  const updateInputval = (val, key) => {
    const value = { ...values };
    value[key] = val;
    setValue({ ...value });
  };
  return (
    <SafeAreaView>
      <View style={{ padding: 20 }}>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 30, fontWeight: "bold", paddingTop: 130 }}>Masuk Disini</Text>
        </View>
        <View style={{ marginVertical: 30 }}>
          <Appinput placeholder="Email" name="email" value={values.email} updateInputval={updateInputval} />
          <Appinput placeholder="Password" name="password" value={values.password} updateInputval={updateInputval} secure={true} />
        </View>
        <TouchableOpacity style={{ padding: 20, borderRadius: 10, marginVertical: 30, backgroundColor: "#f6880c", shadowOffset: { width: 4, height: 10 }, shadowOpacity: 0.3, shadowRadius: 10 }}>
          <Text style={{ color: "#fff", textAlign: "center", fontSize: 20 }}>Masuk</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigate("Daftar");
          }}
          style={{ padding: 20, borderRadius: 10 }}
        >
          <Text style={{ color: "#000", textAlign: "center", fontSize: 20 }}>Daftar Disini</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
