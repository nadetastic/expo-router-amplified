import { Auth } from 'aws-amplify';



export async function signIn(userInfo,setAlert) {

    try {
        const user = await Auth.signIn(userInfo.username, userInfo.password);
        console.log(user)
        setAlert({msg:user.attributes.email})
        return
    } catch (error) {
        console.log('error signing in ====>>>>>', error);
        setAlert({msg:error})
        return
    }
}

export async function signOut(setAlert) {
    try {
        await Auth.signOut();
        console.log('success signing out!');
        setAlert({msg:'success signing out!'});
        return
    } catch (error) {
        console.log('error signing out: ', error);
        setAlert({msg:error});
        return
    }
}

export async function signUp(userInfo,setAlert) {
    try {
        const { user } = await Auth.signUp({
            username: userInfo.username,
            password: userInfo.password,
        });
        // console.log(user);
        // return user;
        setAlert({msg:user});
        return
    } catch (error) {
        // console.log('error signing up:', error);
        // return error;
        setAlert({msg:error});
        return
    }
}

export async function confirmSignUp(userInfo,setAlert) {
    try {
        await Auth.confirmSignUp(userInfo.username, userInfo.authCode);
        console.log('success signing up!');
        setAlert({msg:'success signing up!'});
        return;
    } catch (error) {
        console.log('error confirming sign up', error);
        setAlert({msg:error});
        return;
    }
}

export async function socialSignIn(provider) {
    try {
        await Auth.federatedSignIn({ provider: provider });
        return 'Signing in with ' + provider + '...';
    } catch (error) {
        console.log('error signing in', error);
        return error;
    }
}

export async function currentUser(setAlert){

    try {
        const user = await Auth.currentAuthenticatedUser();
        console.log(user)
        setAlert({msg:user.attributes.email});
        return true;
    } catch (error) {
        console.log('error getting current user', error);
        setAlert({msg:error});
        return false;
    }
}