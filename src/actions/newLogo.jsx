import { NEW_LOGO } from './types';

export const newLogo = () => dispatch => {
    dispatch({
        type: NEW_LOGO,
        payload: logo
    })
};