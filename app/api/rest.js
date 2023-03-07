import { View, Text, Button } from "react-native";
import styles from "../../styles";
import { get, put, del, post } from "../../methods/api/rest";
import { AlertContext } from "../../context/alert";
import { useContext, useState } from "react";

const RestAPI = () => {
    const { alert,setAlert } = useContext(AlertContext);
    const [todo, setTodo] = useState(null);
    return ( 
        <View>
            <Text style={styles.header}>RestAPI</Text>
            <Button title="Get" onPress={() => get(setAlert)} />
            <Button title="Put" onPress={() => put(setAlert)} />
            <Button title="Post" onPress={() => post(setAlert)} />
            <Button title="Delete" onPress={() => del(setAlert)} />
            <Text>{ alert ? JSON.stringify(alert,null,2) : ''}</Text>
        </View>
     );
}
 
export default RestAPI;