import { User } from '../user.model';
import * as AuthActions from './auth.actions';

export interface State{
    user: User;
}


const initialState = {
    user:null,
};

export function authReducer(state = initialState, action: AuthActions.AuthActions){
    return state;
}