import * as actionType from './actionType';
//immutable.js 可以用来管理store中数据，生成immutable对象，因为state是不允许修改的
import { fromJS } from 'immutable';
const defaultState = fromJS({
    focused:false,
    list:[],
    page:1,
    totalPage:1,
    mouseIn:false
});

export default (state = defaultState, action) =>{
    //简写成switch
    // if(action.type ===actionType.SEARCH_FOCUS){
    //     //引入immutable之后就不用再这样写了，immutable可以保证state不被修改
    //     // const newState = JSON.parse(JSON.stringify(state));
    //     // newState.focused = true;
    //     // return newState;
    //     return state.set('focused',true);
    // };

    // if(action.type ===actionType.SEARCH_BLUR){
    //     // const newState = JSON.parse(JSON.stringify(state));
    //     // newState.focused = false;
    //     // return newState;
    //     return state.set('focused',false);
    // };

    // if(action.type ===actionType.CHANGELIST){
    //     return state.set('list',action.data);
    // };

    switch(action.type){
        case actionType.SEARCH_FOCUS:
            return state.set('focused',true);
        case actionType.SEARCH_BLUR:
            return state.set('focused',false);
        case actionType.CHANGELIST:
            return state.merge({//改变多个值的时候
                list:action.data,
                totalPage:action.totalPage
            })
        case actionType.MOUSE_ENTER:
            return state.set('mouseIn',true);
        case actionType.MOUSE_LEAVE:
            return state.set('mouseIn',false);
        case actionType.CHANGE_PAGE:
            return state.set('page',action.page);
        default:
            return state;
    }  
}