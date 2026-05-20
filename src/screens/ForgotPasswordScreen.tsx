import { StyleSheet, Text, View, TextInput, TouchableOpacity, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ForgotPasswordScreen = () => {
    const navigation = useNavigation();
    const { width } = useWindowDimensions();
    const [email, setEmail] = useState("");

    const handleResetInstructions = () => {
        if (!email) {
            alert("Please provide your registered email address.");
            return;
        }
        console.log("Sending OTP code/link to:", email);
        alert(`Password reset code has been successfully sent to ${email}`);
        
        navigation.goBack();
    };

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Text style={styles.backButtonText}>⬅ Back to Login</Text>
            </TouchableOpacity>

            <View style={styles.welcomeContainer}>
                <Text style={styles.title}>Reset Password 🔑</Text>
                <Text style={styles.subTitle}>
                    Don't worry! Enter your registered email address below, and we will send you setup instructions.
                </Text>
            </View>

            <View style={[styles.formContainer, { width: width * 0.9 }]}>
                <View style={styles.inputWrapper}>
                    <Text style={styles.inputLabel}>Registered Email</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="example@gmail.com"
                        placeholderTextColor="#999"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>

                <TouchableOpacity style={styles.primaryButton} onPress={handleResetInstructions}>
                    <Text style={styles.primaryButtonText}>Send Reset Link</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF8F5',
        alignItems: 'center',
        paddingTop: 40,
    },
    backButton: {
        alignSelf: 'flex-start',
        marginLeft: 20,
        marginBottom: 40,
        paddingVertical: 8,
        paddingHorizontal: 12,
    },
    backButtonText: {
        color: '#444',
        fontWeight: '600',
        fontSize: 15,
    },
    welcomeContainer: {
        marginBottom: 30,
        alignItems: 'center',
        paddingHorizontal: 30,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#222',
        textAlign: 'center',
        marginBottom: 10,
    },
    subTitle: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        lineHeight: 20,
    },
    formContainer: {
        backgroundColor: '#FFF',
        borderRadius: 20,
        padding: 24,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 3,
    },
    inputWrapper: {
        marginBottom: 24,
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
    primaryButton: {
        backgroundColor: '#FF4500',
        borderRadius: 12,
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    primaryButtonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
