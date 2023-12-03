import CATEGORIES_ACTION_TYPES from './categories.types';
import { createAction } from '../../utils/reducer/reducer.utils';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

export const setCategoriesMap = (categoriesMap) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP, categoriesMap);

export const fetchCategoriesStart = () => 
   createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = () => 
   createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS);

export const fetchCategoriesFailed = (error) => 
   createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);


export const fetchCategoriesAsync = () => async (dispatch) => {
  // console.log('Dispatching action for category fetch')
  dispatch (fetchCategoriesStart())
  try {
    const categoriesArray = await getCategoriesAndDocuments('documents');
    // console.log('$$$$$$$$$$$$$$$',categoriesArray);
    dispatch(fetchCategoriesSuccess(categoriesArray));
  }
  catch (error){
    dispatch (fetchCategoriesFailed(error))

  }
  
  
}