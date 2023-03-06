import { Button, Text, View, TextInput } from "react-native";
import { useState, useContext } from "react";
import { signIn, signUp, signOut, socialSignIn, currentUser, confirmSignUp } from "../methods/auth";
import styles from "../styles";
import { AlertContext } from "../context/alert";

export default function Home() {

    const { alert,setAlert } = useContext(AlertContext);
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
        <TextInput style={styles.input}
            autoCapitalize='none'
            onChangeText={(authCode) => setUserInfo({...userInfo, authCode})}
            placeholder={'Auth Code'}
        />

        <Button title="Sign In" onPress={() => signIn(userInfo,setAlert) }   />
        <Button title="Sign Up" onPress={() => signUp(userInfo,setAlert)} />
        <Button title="Confirm Sign Up" onPress={() => confirmSignUp(userInfo,setAlert)} />
        <Button title="Sign Out" onPress={() => signOut(setAlert)} />
        <Button title="Sign In with Google" onPress={() => socialSignIn('Google')} />
        <Button title="Sign In with Apple" onPress={() => socialSignIn('SignInWithApple')} />
        <Button title="Current User" onPress={() => currentUser(setAlert)} />
        <Text>{ userInfo ? JSON.stringify(userInfo) : '' }</Text>
        <Text>{ alert ? JSON.stringify(alert) : '' }</Text>
    </View>
  );
}