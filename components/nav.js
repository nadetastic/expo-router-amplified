import { View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import styles from "../styles";

const Navigation = () => {
    return (
    <View style={styles.nav}>
        <Link style={styles.navitem} href="/auth">Auth</Link>
        <Link style={styles.navitem} href="/api/rest">API Rest</Link>
        <Link style={styles.navitem} href="/api/graphql">API GraphQL</Link>
        <Link style={styles.navitem} href="/storage">Storage</Link>
    </View> );
}
 
export default Navigation;