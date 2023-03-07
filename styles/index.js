import { StyleSheet } from "react-native";

export default StyleSheet.create({
    header: {
        fontSize: 32,
        textAlign: 'center',
    },
    container: {
        // flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
    },
    nav: {
        // flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    navitem: {
        color: '#888',
        textTransform: 'uppercase',
        padding: 10,
    }
});