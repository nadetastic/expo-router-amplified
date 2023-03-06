import { View, Text, Button, TextInput } from "react-native";
import styles from "../../styles";
import { allTodos, getTodo, createTodo } from "../../methods/api/graphql";
import { AlertContext } from "../../context/alert";
import { useContext,useState } from "react";

const GraphAPI = () => {

    const { alert,setAlert } = useContext(AlertContext);
    const [todo, setTodo] = useState(null);

    return ( 
        <View>
            <Text style={styles.header}>GraphQL API</Text>
            <TextInput style={styles.input}
                autoCapitalize='none'
                onChangeText={(name) => setTodo({...todo, name})}
                placeholder={'Todo Name'}
            />
            <TextInput style={styles.input}
                autoCapitalize='none'
                onChangeText={(description) => setTodo({...todo, description})}
                placeholder={'Todo Description'}
            />
            <TextInput style={styles.input}
                autoCapitalize='none'
                onChangeText={(id) => setTodo({...todo, id})}
                placeholder={'Todo Id for Get and Delete'}
            />
            <Button title="Create Todo" onPress={() => createTodo(todo,setAlert)} />
            <Button title="Get Todo" onPress={() => getTodo(todo,setAlert)} />
            <Button title="Get All Todos" onPress={() => allTodos(setAlert)} />
            <Text>{ alert ? JSON.stringify(alert,null,2) : ''}</Text>
        </View>
     );
}
 
export default GraphAPI;