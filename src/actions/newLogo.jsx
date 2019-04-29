import { NEW_LOGO } from './types';

export const newLogo = (logoImg) => dispatch => {
    dispatch({
        type: NEW_LOGO,
        payload: logoImg
    })
};