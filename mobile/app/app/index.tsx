import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
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
};

export default function LandingScreen() {
  const [continuePressed, setContinuePressed] = useState(false);
  const [signinPressed, setSigninPressed] = useState(false);
  const [signupPressed, setSignupPressed] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Graduation Projects Gallery</Text>

      <Text style={styles.subtitle}>
        Discover graduation projects, explore categories, and showcase your work.
      </Text>

      <View style={styles.buttons}>
        <Pressable
          style={({ pressed }) => [
            styles.btnPrimary,
            pressed && styles.btnPrimaryPressed,
            continuePressed && styles.btnPrimaryPressed,
          ]}
          onPressIn={() => setContinuePressed(true)}
          onPressOut={() => setContinuePressed(false)}
          onPress={() => router.replace("/(tabs)")}
        >
          <Text style={styles.btnPrimaryText}>Continue</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.btnOutline,
            pressed && styles.btnOutlinePressed,
            signinPressed && styles.btnOutlinePressed,
          ]}
          onPressIn={() => setSigninPressed(true)}
          onPressOut={() => setSigninPressed(false)}
          onPress={() => router.push("/auth/sign-in")}
        >
          <Text style={styles.btnOutlineText}>Sign In</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.btnOutline,
            pressed && styles.btnOutlinePressed,
            signupPressed && styles.btnOutlinePressed,
          ]}
          onPressIn={() => setSignupPressed(true)}
          onPressOut={() => setSignupPressed(false)}
          onPress={() => router.push("/auth/sign-up")}
        >
          <Text style={styles.btnOutlineText}>Create Account</Text>
        </Pressable>
      </View>

      <Text style={styles.footerText}>Powered by your team ✨</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.mainBg,
    padding: 24,
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: COLORS.black,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.black,
    opacity: 0.8,
    marginBottom: 28,
    lineHeight: 22,
  },
  buttons: {
    gap: 12,
  },

  // Primary button (Continue)
  btnPrimary: {
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
    backgroundColor: COLORS.button,
  },
  btnPrimaryPressed: {
    backgroundColor: COLORS.buttonClick,
  },
  btnPrimaryText: {
    color: COLORS.white, // اللون الفاتح في الكلام
    fontSize: 16,
    fontWeight: "700",
  },

  // Outline buttons (Sign in / Sign up)
  btnOutline: {
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.black,
    backgroundColor: "transparent",
  },
  btnOutlinePressed: {
    borderColor: COLORS.buttonHover,
  },
  btnOutlineText: {
    color: COLORS.black,
    fontSize: 16,
    fontWeight: "700",
  },

  footerText: {
    marginTop: 24,
    textAlign: "center",
    color: COLORS.link,
  },
});