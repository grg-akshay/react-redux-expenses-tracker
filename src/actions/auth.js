import {firebase, googleAuthProvider} from '../firebase/firebase';

export const login =(uid) =>({
    type: 'LOGIN',
    uid
});

export const startLogin =() =>{  //its an action for sign In the user
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    }
}

export const logout =() =>({
    type: 'LOGOUT'
});


export const startLogout =() =>{    //its an action for sign out the user
    console.log("trying to sign out")
    return () => {
        return firebase.auth().signOut();
    }
}