import { Slot } from "expo-router";
import { View, StatusBar } from 'react-native';
import Navigation from '../components/nav';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AlertProvider } from '../context/alert';

import styles from "../styles";
export default function AppLayout() {
    return (
        <SafeAreaView>
            <View style={styles.container}>
            <Navigation />
            <AlertProvider>
                <Slot />
            </AlertProvider>

            <StatusBar style="auto" />
        </View>
        </SafeAreaView>
    );
}


export const unstable_settings = {
    // Ensure any route can link back to `/`
    initialRouteName: "/auth",
};