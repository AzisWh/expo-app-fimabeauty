import React, { useState } from "react";
import { TextInput, TextInputProps } from "react-native";

const Appinput = ({ updateInputval, name, value, secure }) => {
  const [focused, setFocused] = useState<boolean>(false);

  const changeValue = (e: any) => {
    updateInputval(e, name);
  };
  return (
    <TextInput
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(true)}
      onChangeText={(e) => changeValue(e)}
      placeholderTextColor={"#626262"}
      placeholder={name.toUpperCase()}
      secureTextEntry={secure ? secure : false}
      style={[
        {
          fontSize: 14,
          padding: 20,
          backgroundColor: "#f1f4ff",
          borderRadius: 10,
          marginVertical: 10,
          borderColor: "#c2c2c2",
          borderWidth: 3,
        },
        focused && {
          borderColor: "#fdcc2d",
          borderWidth: 3,
          shadowColor: "#fdcc2d",
          shadowOffset: { width: 4, height: 10 },
          shadowOpacity: 0.2,
          shadowRadius: 10,
        },
      ]}
    />
  );
};

export default Appinput;
