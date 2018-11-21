import * as actionType from './actionType';
import axios from 'axios';
import { fromJS } from 'immutable';

const changeList =(data) =>({
    type:actionType.CHANGELIST,
    data:fromJS(data),//所有传值要改为immutable的对象
    totalPage:Math.ceil(data.length / 10)

});

export const searchFocus = () =>({
    type:actionType.SEARCH_FOCUS
});

export const searchBlur = () =>({
    type:actionType.SEARCH_BLUR
});

export const mouseEnter = () =>({
    type:actionType.MOUSE_ENTER
});

export const mouseLeave = () =>({
    type:actionType.MOUSE_LEAVE
});

export const changePage = (page) =>({
    type:actionType.CHANGE_PAGE,
    page
});
export const getList =() =>{
    return (dispatch) =>{
        axios.get('/api/headerList.json').then((res) =>{
            const data = res.data;
            dispatch(changeList(data.data));
        }).catch(() =>{

        })
    }
};