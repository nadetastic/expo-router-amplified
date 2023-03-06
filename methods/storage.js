import { Storage } from 'aws-amplify';

export async function getObject(object,setAlert) {
    try {
        const item = await Storage.get(object.key,setAlert);
        console.log(item)
        setAlert({msg:item})
        return
    } catch (error) {
        console.log('Error getting object', error);
        setAlert({msg:error})
        return;
    }
}

export async function listObjects(setAlert) {
    try {
        const items = await Storage.list('');
        setAlert({msg:items})
        return;
    } catch (error) {
        console.log('Error listing objects', error);
        setAlert({msg:error})
        return;
    }
}

export async function putObject(object,setAlert) {
    try {
        const data = await Storage.put(object.key, object.content);
        console.log(data)
        setAlert({msg:data})
        return;
    } catch (error) {
        console.log('Error putting object', error);
        setAlert({msg:error})
        return;
    }
}

export async function removeObject(object,setAlert) {
    try {
        const data = await Storage.remove(object.key);
        console.log(data)
        setAlert({msg:data})
        return;
    } catch (error) {
        console.log('Error removing object', error);
        setAlert({msg:error})
        return;
    }
}