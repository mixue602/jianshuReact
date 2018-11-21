import axios from 'axios';
import * as actionType from './actionType';
import { fromJS } from 'immutable';

export const homeInfoType= (result) =>({
    type:actionType.CHANGE_HOME_DATA,
    topicList:result.topicList,
    listData:result.listData,
    RecommendLst:result.RecommendLst,
    WriterList:result.WriterList,
    bannerList:result.bannerList,

});

export const getHomeInfo =() =>{
    return (dispatch) =>{
        axios.get('/api/home.json').then((res) =>{
            const data =res.data.data;
           
            dispatch(homeInfoType(data));
        });
    }
};

export const addHomeList =(list,nextpage) =>({
    type:actionType.ADD_ARTICLE_LIST,
    list:fromJS(list),
    nextpage
});

export const moreList =(page) =>{
    return (dispatch) =>{
        axios.get('/api/homeAddList.json?page='+page).then((res) =>{
            const data =res.data.data.listData;
            dispatch(addHomeList(data,page + 1));
        });
    }
};

export const toggleTopShow =(show) =>({
    type:actionType.CHANGE_BACKTO_SHOW,
    show
});
