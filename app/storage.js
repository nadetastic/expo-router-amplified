import { Text, View, TextInput, Button } from "react-native";
import { useState,useContext } from "react";
import styles from "../styles";
import { getObject, putObject, listObjects } from "../methods/storage";
import { AlertContext } from "../context/alert";


export default function Storage() {
  const [object, setObject] = useState(null);
  const { alert,setAlert } = useContext(AlertContext);

return (
  <View>
      <Text style={styles.header}>Storage page</Text>

      <TextInput style={styles.input}
          autoCapitalize='none'
          onChangeText={(key) => setObject({...object, key})}
          placeholder={'Key'}
      />
      <TextInput style={styles.input}
          autoCapitalize='none'
          onChangeText={(content) => setObject({...object, content})}
          placeholder={'Content'}
      />

      <Button title="Get Object" onPress={() => getObject(object,setAlert)} />
      <Button title="Put Object" onPress={() => putObject(object,setAlert)} />
      <Button title="List Object" onPress={() => listObjects(setAlert)} />
      <Text>{ object ? JSON.stringify(object,null,2) : '' }</Text>
      <Text>{ alert ? JSON.stringify(alert,null,2) : '' }</Text>
  </View>
);
}
