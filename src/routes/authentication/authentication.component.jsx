import Signupform from "../../components/sign-up-form/sign-up-form.component";
import SignInform from "../../components/sign-in-form/sign-in-form.component";
import './authentication.styles.scss'


const Authentication = () => {

    

    return(
        <div className="authentication-container">
            
            <SignInform/>
            <Signupform/>
        </div>
       
    ); 
};
export default Authentication;