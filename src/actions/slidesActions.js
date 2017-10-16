import api from '../helpers/api';
import {
  FETCHED_SLIDES,
  SLIDES_FETCH_FAILED,
  SLIDES_FETCH_START
} from './types';

export const getSlides = () => {
  return dispatch => {
    dispatch({ type: SLIDES_FETCH_START });
    api.post('functions/feed/profile/load-batch', {
      isThumbnailsOnly:  true,
      limit:  5,
      userId:  318381,
      _version: '5.0.5',
      _method: 'POST',
      _SessionToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOjI3MDc3OTgsImV4cCI6MTUzOTUzNTI1OTM2OH0.UK2qP1yk9QLk_Bkx1Ly0RPaitRYtec8ojZhzYRc0D-g'
    })
    .then(response => {
      if(response.ok) {
        if(response.data) {
          dispatch({ type: FETCHED_SLIDES, data: response.data.result.posts });
        } else {
          dispatch({ type: SLIDES_FETCH_FAILED, error: 'Couldn\'nt load data' });
        }
      } else {
        let err = response.status === 404 ? 'User not found.' : response.problem;
        dispatch({ type: SLIDES_FETCH_FAILED, error: err });
      }
    })
  }
}