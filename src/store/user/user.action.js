import USER_ACTION_TYPES from './user.types';
import { createAction } from '../../utils/reducer/reducer.utils';

export const setCurrentUser = (user) =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
export const checkUserSession = () => 
createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);

export const googleSignInStart = () => createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);
export const emailSignInStart = (email, password ) => createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, {email, password});
export const signInSuccess = () => createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS);
export const signInFailed = () => createAction(USER_ACTION_TYPES.SIGN_IN_FAILED);
export const signUpStart = () => createAction(USER_ACTION_TYPES.SIGN_UP_START);
export const signUpSuccess = (user, additionalDetails) => createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, {user, additionalDetails});
export const signUpFailed =(error)=> createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error)
export const signOutStart =()=> createAction(USER_ACTION_TYPES.SIGN_OUT_START)
export const signOutSuccess =()=> createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS)
export const signOutFailed =(error)=> createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error)
 
