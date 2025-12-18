import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  const router = useRouter();
  const handleLogin = () => {
    console.log("Navigate to Login");
    router.replace("/login");
    // navigation.navigate('Login');
  };

  const handleSignUp = () => {
    console.log("Navigate to Sign Up");
    router.replace("/signup");
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <View style={styles.content}>
        {/* Logo/Icon Section */}
        <View style={styles.logoContainer}>
          <View style={styles.logo}>
            <Image
              source={require("@/assets/images/logo.png")}
              style={styles.logoImage}
              resizeMode="contain"
            />
          </View>
          {/* <Text style={styles.appName}>{APP.NAME}</Text> */}
        </View>

        {/* Welcome Section */}
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeTitle}>Welcome!</Text>
          <Text style={styles.welcomeText}>
            Track and split expenses with friends and family effortlessly
          </Text>
        </View>

        {/* Features List */}
        <View style={styles.featuresContainer}>
          <View style={styles.featureItem}>
            <View style={styles.featureIconCircle}>
              <Text style={styles.featureIcon}>✓</Text>
            </View>
            <Text style={styles.featureText}>Split bills easily</Text>
          </View>

          <View style={styles.featureItem}>
            <View style={styles.featureIconCircle}>
              <Text style={styles.featureIcon}>✓</Text>
            </View>
            <Text style={styles.featureText}>Track group expenses</Text>
          </View>

          <View style={styles.featureItem}>
            <View style={styles.featureIconCircle}>
              <Text style={styles.featureIcon}>✓</Text>
            </View>
            <Text style={styles.featureText}>Settle up instantly</Text>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
            <Text style={styles.signUpButtonText}>Create Account</Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <Text style={styles.footer}>
          © 2025 ExpenseShare. All rights reserved.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop:40,  
  },
  content: {
    flex: 1,
    paddingHorizontal: 32,
    justifyContent: "center",
  },
  logoContainer: {
    alignItems: "center",
    // marginBottom: 48,
  },
  logo: {
    width: 200,
    height: 200,
    // backgroundColor: '#e3f2fd',
    backgroundColor: "#fff",
    // borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    overflow: "hidden",
    padding: 20,
  },
  logoImage: {
    width: "100%",
    height: "100%",
  },
  logoIcon: {
    fontSize: 48,
  },
  appName: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1976d2",
  },
  welcomeSection: {
    alignItems: "center",
    marginBottom: 40,
  },
  welcomeTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 12,
  },
  welcomeText: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    lineHeight: 24,
    paddingHorizontal: 16,
  },
  featuresContainer: {
    marginBottom: 48,
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  featureIconCircle: {
    width: 32,
    height: 32,
    backgroundColor: "#4caf50",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  featureIcon: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  featureText: {
    fontSize: 16,
    color: "#333",
  },
  buttonContainer: {
    gap: 16,
    marginBottom: 24,
  },
  loginButton: {
    backgroundColor: "#1976d2",
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  signUpButton: {
    backgroundColor: "#fff",
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#1976d2",
  },
  signUpButtonText: {
    color: "#1976d2",
    fontSize: 18,
    fontWeight: "600",
  },
  footer: {
    fontSize: 12,
    color: "#999",
    textAlign: "center",
    marginTop: "auto",
    marginBottom: 16,
  },
});
