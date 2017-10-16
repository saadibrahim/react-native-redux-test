import api from '../helpers/api';
import {
    FETCHED_USER,
    USER_FETCH_FAILED,
    USER_FETCH_START
} from './types';
import { slidesActions, gridActions } from './'

export const getUser = () => {
  return dispatch => {
    dispatch({ type: USER_FETCH_START });
    api.post('classes/User/318381', {
      _version: '5.0.5',
      _method: 'GET',
      _SessionToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOjI3MDc3OTgsImV4cCI6MTUzOTUzNTI1OTM2OH0.UK2qP1yk9QLk_Bkx1Ly0RPaitRYtec8ojZhzYRc0D-g'
    })
    .then(response => {
      if(response.ok) {
        dispatch(slidesActions.getSlides());
        dispatch(gridActions.getGrid());
        if(response.data) {
          dispatch({ type: FETCHED_USER, data: response.data });
        } else {
          dispatch({ type: USER_FETCH_FAILED, error: 'Couldn\'nt load user data' });
        }
      } else {
        let err = response.status === 404 ? 'User not found.' : response.problem;
        dispatch({ type: USER_FETCH_FAILED, error: err });
      }
    })
  }
}