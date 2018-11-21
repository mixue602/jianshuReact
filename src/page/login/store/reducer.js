
import { fromJS } from 'immutable';
import * as actionType from './actionType';
const defaultState =fromJS({
    login:false
});

export default (state =defaultState,action) =>{
    switch(action.type){   
        case  actionType.CHANHELOGIN:
            return state.set('login',action.success);
        case actionType.LOGOUT:
            return state.set('login',action.value);
        default:
            return state;
    }

}