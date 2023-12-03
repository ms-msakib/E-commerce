import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import Signupform from "../sign-up-form/sign-up-form.component";

const Authentication = () => {

    const logGoogleUser = async () =>{
        const {user} = await signInWithGooglePopup();
       const userDocRef = await createUserDocumentFromAuth(user);
    }

    return(
        <div>
            <h1>sign in page</h1>
            <button onClick={logGoogleUser}>Sign In</button>
            <Signupform/>
        </div>
       
    ); 
};
export default Authentication;