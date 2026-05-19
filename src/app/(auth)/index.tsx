import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Platform, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const AuthPage = () => {
    const router = useRouter();
    const { width } = useWindowDimensions();

    // States
    const [email, setEmail] = useState("ank@ank.com");
    const [password, setPassword] = useState("ank12345");
    const [name, setName] = useState(""); // Needed only for Sign Up
    const [isSignUp, setSignUp] = useState(false);

    const handleAuthAction = () => {
        // 1. Basic empty fields validation check
        if (!email || !password || (isSignUp && !name)) {
            alert("Please fill in all details");
            return;
        }

        if (isSignUp) {

            console.log("Registering User:", { name, email, password });
            alert("Registration Successful! Please switch to login mode.");
            setSignUp(false);
        } else {

            if (email.trim() === "ank@ank.com" && password === "ank12345") {
                console.log("Login successful! Navigating to dashboard...");
                router.replace("/(home)");
            } else {
                alert("Invalid Credentials! Please enter correct details.");
            }
        }
    };
    return (
        <SafeAreaView style={styles.container}>

            {/* Header / Welcome Container */}
            <View style={styles.welcomeContainer}>
                <Text style={styles.title}>
                    {isSignUp ? "Hurry Up! Food getting cold! 🍕" : "Welcome Back! 👋"}
                </Text>
                <Text style={styles.subTitle}>
                    {isSignUp ? "Join us to get the best food deals!" : "Login to your account"}
                </Text>
            </View>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
                {/* Form Container */}
                <View style={[styles.formContainer, { width: width * 0.9 }]}>
                    {isSignUp && (
                        <View style={styles.inputWrapper}>
                            <Text style={styles.inputLabel}>Full Name</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Enter your name"
                                placeholderTextColor="#999"
                                value={name}
                                onChangeText={setName}
                            />
                        </View>
                    )}

                    <View style={styles.inputWrapper}>
                        <Text style={styles.inputLabel}>Email Address</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your email"
                            placeholderTextColor="#999"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            value={email}
                            onChangeText={setEmail}
                        />
                    </View>

                    <View style={styles.inputWrapper}>
                        <Text style={styles.inputLabel}>Password</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your password"
                            placeholderTextColor="#999"
                            secureTextEntry
                            autoCapitalize="none"
                            value={password}
                            onChangeText={setPassword}
                        />
                    </View>


                    {/* Forgot Password Link (Only shows on Login state) */}
                    {!isSignUp && (
                        <TouchableOpacity
                            onPress={() => router.push("/(auth)/forgot-password")}
                            style={styles.forgotPasswordContainer}
                        >
                            <Text style={styles.forgotText}>Forgot Password?</Text>
                        </TouchableOpacity>
                    )}

                    {/* Primary Action Button */}
                    <TouchableOpacity style={styles.primaryButton} onPress={handleAuthAction}>
                        <Text style={styles.primaryButtonText}>
                            {isSignUp ? "Create Account" : "Sign In"}
                        </Text>
                    </TouchableOpacity>

                    {/* Toggle Link */}
                    <View style={styles.toggleContainer}>
                        <Text style={styles.toggleText}>
                            {isSignUp ? "Already have an account? " : "New to the app? "}
                        </Text>
                        <TouchableOpacity onPress={() => setSignUp(!isSignUp)}>
                            <Text style={styles.toggleLink}>
                                {isSignUp ? "Login" : "Register here"}
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default AuthPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF8F5', // Soft Warm Cream Ivory background
        alignItems: 'center',
        justifyContent: 'center',
    },
    welcomeContainer: {
        marginBottom: 40,
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#222',
        textAlign: 'center',
        marginBottom: 8,
    },
    subTitle: {
        fontSize: 15,
        color: '#666',
        textAlign: 'center',
    },
    formContainer: {
        backgroundColor: '#FFF',
        borderRadius: 20,
        padding: 24,
        shadowColor: '#FF4500',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 12,
        elevation: 4,
    },
    inputWrapper: {
        marginBottom: 18,
    },
    inputLabel: {
        fontSize: 14,
        fontWeight: '600',
        color: '#444',
        marginBottom: 6,
    },
    input: {
        backgroundColor: '#F7F7F7',
        borderWidth: 1,
        borderColor: '#EAEAEA',
        borderRadius: 12,
        paddingVertical: 12,
        paddingHorizontal: 16,
        fontSize: 15,
        color: '#222',
    },
    forgotPasswordContainer: {
        alignSelf: 'flex-end',
        marginBottom: 24,
    },
    forgotText: {
        color: '#FF4500', // Signature Delivery Zomato/Swiggy Orange
        fontWeight: '600',
        fontSize: 14,
    },
    primaryButton: {
        backgroundColor: '#FF4500',
        borderRadius: 12,
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#FF4500',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 3,
    },
    primaryButtonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    toggleContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    toggleText: {
        fontSize: 14,
        color: '#666',
    },
    toggleLink: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#FF4500',
    },
});