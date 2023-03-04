import { Button, Text, View, TextInput, StyleSheet } from "react-native";
import { useState } from "react";
import { signIn, signUp, signOut, socialSignIn, currentUser } from "../methods/auth";
import styles from "../styles";

export default function Home() {
    const [userInfo, setUserInfo] = useState(null);
  return (
    <View>
        <Text style={styles.header}>Auth page</Text>

        <TextInput style={styles.input}
            autoCapitalize='none'
            onChangeText={(username) => setUserInfo({...userInfo, username})}
            placeholder={'UserName'}
        />
        <TextInput style={styles.input}
            autoCapitalize='none'
            onChangeText={(password) => setUserInfo({...userInfo, password})}
            placeholder={'Password'}
        />

        <Button title="Sign In" onPress={() => signIn(userInfo)} />
        <Button title="Sign Up" onPress={() => signIn(userInfo)} />
        <Button title="Sign Out" onPress={() => signOut()} />
        <Button title="Sign In with Google" onPress={() => socialSignIn('Google')} />
        <Button title="Sign In with Apple" onPress={() => socialSignIn('SignInWithApple')} />
        <Button title="Current User" onPress={() => currentUser()} />
        <Text>{ userInfo ? JSON.stringify(userInfo) : '' }</Text>
    </View>
  );
}