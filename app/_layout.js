import { Slot } from "expo-router";
import { ScrollView, StatusBar } from 'react-native';
import Navigation from '../components/nav';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AlertProvider } from '../context/alert';

export const unstable_settings = {
    // Ensure any route can link back to `/`
    initialRouteName: "auth",
};

export default function AppLayout() {
    return (
        <SafeAreaView>
            <Navigation />
            <ScrollView>
                
                <AlertProvider>
                    <Slot />
                </AlertProvider>
                <StatusBar style="auto" />
            </ScrollView>
        </SafeAreaView>
    );
}


