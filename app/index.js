// import { Redirect } from "expo-router";
import { View, Text } from "react-native"
import styles from "../styles"
import * as Sentry from 'sentry-expo';
export default function Page() {
    // Sentry.captureMessage("Rendering Index Page")
    Sentry.Native.captureMessage("Rendering Index Page")
    return <View>
    <Text style={styles.header}>My App</Text>
    <Text>Use the navigation to move around the app.</Text>
</View>
}