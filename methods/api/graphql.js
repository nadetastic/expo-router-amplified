import { API } from "aws-amplify";
import * as gql_queries from "../../src/graphql/queries"
import * as gql_mutations from "../../src/graphql/mutations"

export async function allTodos(setAlert) {
    try {
        const items = await API.graphql({
            query: gql_queries.listTodos,
        });
        console.log("Items", items);
        setAlert({msg:items})
        return;
    } catch (error) {
        console.log("Error getting items", error);
        setAlert({msg:">> "+error})
        return;
    }
}

export async function getTodo(todo,setAlert){
    try {
        const item = await API.graphql({
            query: gql_queries.getTodo,
            variables: { id: todo.id },
        });
        console.log("Item", item);
        setAlert({msg:item})
        return;
    } catch (error) {
        console.log("Error getting item", error);
        setAlert({msg:">> "+error})
        return;
    }
}

export async function createTodo(todo,setAlert){
    try {
        const item = await API.graphql({
            query: gql_mutations.createTodo,
            variables: { input: todo },
        });
        console.log("Item", item);
        setAlert({msg:item})
        return;
    } catch (error) {
        console.log("Error creating item", error);
        setAlert({msg:"> "+ error.errors[0].message})
        return;
    }
}