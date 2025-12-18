import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Alert,
  // ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const router = useRouter();

  const validateEmail = (email:string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSignIn = () => {
    // Reset errors
    setEmailError('');
    setPasswordError('');

    let isValid = true;

    // Validate email
    if (!email.trim()) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      isValid = false;
    }

    // Validate password
    if (!password.trim()) {
      setPasswordError('Password is required');
      isValid = false;
    }

    if (isValid) {
      console.log('Sign in with:', email, password);
      Alert.alert('Success', 'Signing in...');
      // Add your authentication logic here
    }
  };

  const handleMagicLink = () => {
    // Reset errors
    setEmailError('');

    // Validate email only for magic link
    if (!email.trim()) {
      setEmailError('Email is required to send magic link');
      return;
    }

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    console.log('Sending magic link to:', email);
    Alert.alert('Success', `Magic link sent to ${email}`);
    // Add magic link logic here
  };

  const handleForgotPassword = () => {
    console.log('Forgot password');
    // Add forgot password logic here
  };

  const handleSignUp = () => {
    router.replace('/signup');
  };
  const onBackHandler = () => {
    console.log("Back pressed");
    router.replace('/');
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar barStyle="light-content" backgroundColor="#3b4d6b" /> */}
      
      {/* Header */}
      <View style={styles.header} />

      {/* Content */}
      <View style={styles.content}>
        {/* User Icon */}
        <View style={styles.iconContainer}>
          <View style={styles.userIcon}>
            <View style={styles.userIconCircle} />
            <View style={styles.userIconBody} />
          </View>
        </View>

        {/* Sign in Title */}
        <Text style={styles.title}>Sign in</Text>

        {/* Email Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email Address *</Text>
          <TextInput
            style={[styles.input, emailError ? styles.inputError : null]}
            value={email}
            onChangeText={(text) => {
              setEmail(text);
              setEmailError('');
            }}
            placeholder="roshanaale54@gmail.com"
            placeholderTextColor="#999"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
        </View>

        {/* Password Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password *</Text>
          <TextInput
            style={[styles.input, passwordError ? styles.inputError : null]}
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              setPasswordError('');
            }}
            placeholder="••••••••••"
            placeholderTextColor="#999"
            secureTextEntry
          />
          {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
        </View>

        {/* Sign In Button */}
        <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
          <Text style={styles.signInButtonText}>SIGN IN</Text>
        </TouchableOpacity>

        {/* Magic Link Button */}
        <TouchableOpacity style={styles.magicLinkButton} onPress={handleMagicLink}>
          <Text style={styles.magicLinkButtonText}>SIGN IN WITH MAGIC LINK</Text>
        </TouchableOpacity>

        {/* Bottom Links */}
        <View style={styles.bottomLinks}>
          <TouchableOpacity onPress={onBackHandler}>
            <Text style={styles.linkText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSignUp}>
            <Text style={styles.linkText}>Dont have an account? Sign Up</Text>
          </TouchableOpacity>
        </View>

        {/* Forgot Password */}
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPassword}>Forgot Password ?</Text>
        </TouchableOpacity>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Copyright © <Text style={styles.footerLink}>Expense Share</Text> 2025.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    // backgroundColor: '#3b4d6b',
    // paddingVertical: 16,
    marginTop:40
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  userIcon: {
    width: 80,
    height: 80,
    backgroundColor: '#9c27b0',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  userIconCircle: {
    width: 28,
    height: 28,
    backgroundColor: '#fff',
    borderRadius: 14,
    marginTop: 15,
  },
  userIconBody: {
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 25,
    marginTop: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    padding: 12,
    fontSize: 16,
    color: '#333',
  },
  inputError: {
    borderColor: '#d32f2f',
  },
  errorText: {
    color: '#d32f2f',
    fontSize: 12,
    marginTop: 4,
  },
  signInButton: {
    backgroundColor: '#1976d2',
    borderRadius: 4,
    padding: 14,
    alignItems: 'center',
    marginTop: 10,
  },
  signInButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  magicLinkButton: {
    backgroundColor: '#9c27b0',
    borderRadius: 4,
    padding: 14,
    alignItems: 'center',
    marginTop: 12,
  },
  magicLinkButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  bottomLinks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  linkText: {
    color: '#1976d2',
    fontSize: 14,
  },
  forgotPassword: {
    color: '#1976d2',
    fontSize: 14,
    marginTop: 10,
  },
  footer: {
    marginTop: 'auto',
    paddingVertical: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#666',
  },
  footerLink: {
    color: '#1976d2',
  },
});