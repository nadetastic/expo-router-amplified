import { API } from "aws-amplify";


const apiName = "api";

export function get(){
    try {
        const items = API.get(apiName, "/items");
        return items;
    } catch (error) {
        console.log("Error getting items", error);
        return error;
    }
}

export function post(item){
    try {
        const newItem = API.post(apiName, "/items", {body: item});
        return newItem;
    } catch (error) {
        console.log("Error posting item", error);
        return error;
    }
}

export function put(item){
    try {
        const updatedItem = API.put(apiName, `/items/${item.id}`, {body: item});
        return updatedItem;
    } catch (error) {
        console.log("Error putting item", error);
        return error;
    }
}

export function del(item){
    try {
        const deletedItem = API.del(apiName, `/items/${item.id}`);
        return deletedItem;
    } catch (error) {
        console.log("Error deleting item", error);
        return error;
    }
}
