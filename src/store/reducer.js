import { combineReducers } from 'redux-immutable';
//redux-immutable提供一个combineReducers()函数，将stroe中最外层的reducer中的state转化为immutable对象
import { reducer as headerReducer } from '../component/header/store';
import { reducer as homeReducer } from '../page/home/store';
import { reducer as detailsReducer } from '../page/details/store';
import { reducer as loginReducer } from '../page/login/store';

const reducer = combineReducers({
    header:headerReducer,
    home:homeReducer,
    detail:detailsReducer,
    login:loginReducer
})
export default reducer;