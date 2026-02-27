import React from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { router } from "expo-router";

const COLORS = {
  mainBg: "rgb(223, 205, 192)",
  white: "rgb(254, 251, 245)",
  black: "rgb(47, 28, 15)",
  link: "rgb(164, 132, 109)",
  linkHover: "rgb(75, 48, 28)",
  button: "rgb(104, 68, 42)",
  buttonHover: "rgb(75, 48, 28)",
  buttonClick: "rgb(50, 30, 15)",
  inputBg: "rgb(185, 174, 167)",
};

export default function SignUp() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>

      <TextInput
        placeholder="Full Name"
        placeholderTextColor={COLORS.black}
        style={styles.input}
      />

      <TextInput
        placeholder="Email"
        placeholderTextColor={COLORS.black}
        style={styles.input}
      />

      <TextInput
        placeholder="Password"
        placeholderTextColor={COLORS.black}
        secureTextEntry
        style={styles.input}
      />

      <Pressable style={styles.btn} onPress={() => router.replace("/(tabs)")}>
        <Text style={styles.btnText}>Sign Up</Text>
      </Pressable>

      <Pressable onPress={() => router.push("/auth/sign-in")}>
        <Text style={styles.link}>Already have an account? Sign In</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.mainBg,
    padding: 24,
    justifyContent: "center",
    gap: 12,
  },
  title: {
    fontSize: 26,
    fontWeight: "800",
    color: COLORS.black,
    marginBottom: 8,
  },
  input: {
    backgroundColor: COLORS.inputBg,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    color: COLORS.black,
  },
  btn: {
    marginTop: 8,
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
    backgroundColor: COLORS.button,
  },
  btnText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "700",
  },
  link: {
    textAlign: "center",
    color: COLORS.link,
    marginTop: 8,
    fontWeight: "600",
  },
});