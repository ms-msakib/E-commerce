import { Fragment } from "react";
import {Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import './navigation.styles.scss'
const Navigation = () => {
    return (
      <Fragment>
        <div className="navigation">
          <Link className="logo-container" to='/'>
          <CrwnLogo className="logo"/>
          </Link>
          <div className="links-conatiner">
            <Link className="nav-links-container" to='/Shop'>
                Shop
            </Link>
            <Link className="nav-links-container" to='/Sign-In'>
                SignIn
            </Link>
          </div>
        </div>
        <Outlet />
        </Fragment>
    )
  };
export default Navigation;