import { API } from "aws-amplify";


const apiName = "expoeas";

export async function get(setAlert){
    try {
        const items = await API.get(apiName, "/items");
        setAlert({msg:items})
        return items;
    } catch (error) {
        console.log("Error getting items", error);
        setAlert({msg:error})
        return error;
    }
}

export async function post(setAlert){
    try {
        const newItem = await API.post(apiName, "/items", {body: {}});
        setAlert({msg:newItem})
        return newItem;
    } catch (error) {
        console.log("Error posting item", error);
        setAlert({msg:error})
        return error;
    }
}

export async function put(setAlert){
    try {
        const updatedItem = await API.put(apiName, "/items");
        setAlert({msg:updatedItem})
        return updatedItem;
    } catch (error) {
        console.log("Error putting item", error);
        setAlert({msg:error})
        return error;
    }
}

export async function del(setAlert){
    try {
        const deletedItem = await API.del(apiName, "/items");
        setAlert({msg:deletedItem})
        return deletedItem;
    } catch (error) {
        console.log("Error deleting item", error);
        setAlert({msg:error})
        return error;
    }
}
