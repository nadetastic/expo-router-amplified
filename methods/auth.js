import { Auth } from 'aws-amplify';

export async function signIn(userInfo) {

    try {
        const user = await Auth.signIn(userInfo.username, userInfo.password);
        console.log(user)
        return user;
    } catch (error) {
        console.log('error signing in', error);
        return error;
    }
}

export async function signOut() {
    try {
        await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
}

export async function signUp(userInfo) {
    try {
        const { user } = await Auth.signUp({
            username: userInfo.username,
            password: userInfo.password,
        });
        console.log(user);
        return user;
    } catch (error) {
        console.log('error signing up:', error);
        return error;
    }
}

export async function confirmSignUp(userInfo) {
    try {
        await Auth.confirmSignUp(userInfo.username, userInfo.authCode);
    } catch (error) {
        console.log('error confirming sign up', error);
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

export async function currentUser(){
    try {
        const user = await Auth.currentAuthenticatedUser();
        return user;
    } catch (error) {
        console.log('error getting current user', error);
        return error;
    }
}