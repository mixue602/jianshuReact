
import { fromJS } from 'immutable';
import * as actionType from './actionType'
const defaultState =fromJS({
    'title':'测试标题',
    'content':''
});

export default (state =defaultState,action) =>{
    switch(action.type){
        case actionType.GETDETAILDATA:
            return state.merge({
                'title':action.title,
                'content':action.content
            });
        default:
            return state;
    }

}