import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  contact: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  street?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  country?: string;
  contact?: string;
}

interface SignUpScreenProps {
  navigation?: any;
}

export default function SignUpScreen({ navigation }: SignUpScreenProps) {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    street: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
    contact: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

  const countries: string[] = [
    'Choose a country',
    'Australia',
    'United States',
    'United Kingdom',
    'Canada',
    'India',
    'New Zealand',
    'Singapore',
    'Malaysia',
  ];

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // First Name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    // Last Name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Password validation
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    // Confirm Password validation
    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    // Street validation
    if (!formData.street.trim()) {
      newErrors.street = 'Street address is required';
    }

    // City validation
    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    }

    // State validation
    if (!formData.state.trim()) {
      newErrors.state = 'State is required';
    }

    // Postal Code validation
    if (!formData.postalCode.trim()) {
      newErrors.postalCode = 'Postal code is required';
    }

    // Country validation
    if (!formData.country || formData.country === 'Choose a country') {
      newErrors.country = 'Please select a country';
    }

    // Contact validation
    if (!formData.contact.trim()) {
      newErrors.contact = 'Contact number is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string): void => {
    setFormData({ ...formData, [field]: value });
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  const handleSubmit = (): void => {
    if (validateForm()) {
      console.log('Form submitted:', formData);
      Alert.alert('Success', 'Account created successfully!');
      // Add your sign up logic here
      // navigation?.navigate('Home');
    } else {
      Alert.alert('Error', 'Please fill in all required fields correctly');
    }
  };

  const handleBackToLogin = (): void => {
    console.log('Navigate back to login');
    // navigation?.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar barStyle="light-content" backgroundColor="#3b4d6b" /> */}
      
      {/* Header */}
      {/* <View style={styles.header} /> */}

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {/* User Icon */}
          <View style={styles.iconContainer}>
            <View style={styles.userIcon}>
              <View style={styles.userIconCircle} />
              <View style={styles.userIconBody} />
            </View>
          </View>

          {/* Title */}
          <Text style={styles.title}>Sign Up</Text>

          {/* First Name */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>First Name *</Text>
            <TextInput
              style={[styles.input, errors.firstName ? styles.inputError : null]}
              value={formData.firstName}
              onChangeText={(value) => handleInputChange('firstName', value)}
              placeholder="First Name"
              placeholderTextColor="#999"
            />
            {errors.firstName ? <Text style={styles.errorText}>{errors.firstName}</Text> : null}
          </View>

          {/* Last Name */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Last Name *</Text>
            <TextInput
              style={[styles.input, errors.lastName ? styles.inputError : null]}
              value={formData.lastName}
              onChangeText={(value) => handleInputChange('lastName', value)}
              placeholder="Last Name"
              placeholderTextColor="#999"
            />
            {errors.lastName ? <Text style={styles.errorText}>{errors.lastName}</Text> : null}
          </View>

          {/* Email */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email Address *</Text>
            <TextInput
              style={[styles.input, errors.email ? styles.inputError : null]}
              value={formData.email}
              onChangeText={(value) => handleInputChange('email', value)}
              placeholder="roshanaale54@gmail.com"
              placeholderTextColor="#999"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}
          </View>

          {/* Password */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password *</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={[styles.passwordInput, errors.password ? styles.inputError : null]}
                value={formData.password}
                onChangeText={(value) => handleInputChange('password', value)}
                placeholder="••••••••••"
                placeholderTextColor="#999"
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity 
                style={styles.eyeIcon}
                onPress={() => setShowPassword(!showPassword)}
              >
                <Text style={styles.eyeIconText}>{showPassword ? '👁️' : '👁️‍🗨️'}</Text>
              </TouchableOpacity>
            </View>
            {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}
          </View>

          {/* Confirm Password */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Confirm Password *</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={[styles.passwordInput, errors.confirmPassword ? styles.inputError : null]}
                value={formData.confirmPassword}
                onChangeText={(value) => handleInputChange('confirmPassword', value)}
                placeholder="••••••••••"
                placeholderTextColor="#999"
                secureTextEntry={!showConfirmPassword}
              />
              <TouchableOpacity 
                style={styles.eyeIcon}
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <Text style={styles.eyeIconText}>{showConfirmPassword ? '👁️' : '👁️‍🗨️'}</Text>
              </TouchableOpacity>
            </View>
            {errors.confirmPassword ? <Text style={styles.errorText}>{errors.confirmPassword}</Text> : null}
          </View>

          {/* Street */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Street *</Text>
            <TextInput
              style={[styles.input, errors.street ? styles.inputError : null]}
              value={formData.street}
              onChangeText={(value) => handleInputChange('street', value)}
              placeholder="Street Address"
              placeholderTextColor="#999"
            />
            {errors.street ? <Text style={styles.errorText}>{errors.street}</Text> : null}
          </View>

          {/* City */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>City *</Text>
            <TextInput
              style={[styles.input, errors.city ? styles.inputError : null]}
              value={formData.city}
              onChangeText={(value) => handleInputChange('city', value)}
              placeholder="City"
              placeholderTextColor="#999"
            />
            {errors.city ? <Text style={styles.errorText}>{errors.city}</Text> : null}
          </View>

          {/* State */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>State *</Text>
            <TextInput
              style={[styles.input, errors.state ? styles.inputError : null]}
              value={formData.state}
              onChangeText={(value) => handleInputChange('state', value)}
              placeholder="State"
              placeholderTextColor="#999"
            />
            {errors.state ? <Text style={styles.errorText}>{errors.state}</Text> : null}
          </View>

          {/* Postal Code */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Postal Code *</Text>
            <TextInput
              style={[styles.input, errors.postalCode ? styles.inputError : null]}
              value={formData.postalCode}
              onChangeText={(value) => handleInputChange('postalCode', value)}
              placeholder="Postal Code"
              placeholderTextColor="#999"
              keyboardType="numeric"
            />
            {errors.postalCode ? <Text style={styles.errorText}>{errors.postalCode}</Text> : null}
          </View>

          {/* Country Dropdown */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Country *</Text>
            <View style={[styles.pickerContainer, errors.country ? styles.inputError : null]}>
              <Picker
                selectedValue={formData.country}
                onValueChange={(value:any) => handleInputChange('country', value as string)}
                style={styles.picker}
              >
                {countries.map((country, index) => (
                  <Picker.Item key={index} label={country} value={country} />
                ))}
              </Picker>
            </View>
            {errors.country ? <Text style={styles.errorText}>{errors.country}</Text> : null}
          </View>

          {/* Contact */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Contact *</Text>
            <TextInput
              style={[styles.input, errors.contact ? styles.inputError : null]}
              value={formData.contact}
              onChangeText={(value) => handleInputChange('contact', value)}
              placeholder="Contact Number"
              placeholderTextColor="#999"
              keyboardType="phone-pad"
            />
            {errors.contact ? <Text style={styles.errorText}>{errors.contact}</Text> : null}
          </View>

          {/* Submit Button */}
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>SUBMIT</Text>
          </TouchableOpacity>

          {/* Back to Login */}
          <TouchableOpacity onPress={handleBackToLogin} style={styles.backToLogin}>
            <Text style={styles.backToLoginText}>Back to Login</Text>
          </TouchableOpacity>

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Copyright © <Text style={styles.footerLink}>Expense Share</Text> 2025.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#3b4d6b',
    paddingVertical: 16,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 40,
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
    marginBottom: 24,
    color: '#333',
  },
  inputContainer: {
    marginBottom: 16,
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
    backgroundColor: '#fff',
  },
  inputError: {
    borderColor: '#d32f2f',
  },
  errorText: {
    color: '#d32f2f',
    fontSize: 12,
    marginTop: 4,
  },
  passwordContainer: {
    position: 'relative',
  },
  passwordInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    padding: 12,
    paddingRight: 48,
    fontSize: 16,
    color: '#333',
    backgroundColor: '#fff',
  },
  eyeIcon: {
    position: 'absolute',
    right: 12,
    top: 12,
    padding: 4,
  },
  eyeIconText: {
    fontSize: 20,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    backgroundColor: '#fff',
  },
  picker: {
    height: 50,
    color: '#333',
  },
  submitButton: {
    backgroundColor: '#1976d2',
    borderRadius: 4,
    padding: 14,
    alignItems: 'center',
    marginTop: 16,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  backToLogin: {
    alignItems: 'center',
    marginTop: 16,
  },
  backToLoginText: {
    color: '#1976d2',
    fontSize: 14,
  },
  footer: {
    marginTop: 32,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#666',
  },
  footerLink: {
    color: '#1976d2',
  },
})