import { fromJS } from 'immutable';
import * as actionType from './actionType';
const defaultState =fromJS({
    topicList:[],
    listData:[],
    RecommendLst:[],
    WriterList:[],
    bannerList:[],    
    articlePage: 1,
    showScroll:false
});

const changeHomeData = (state,action) =>{
    return state.merge({
        topicList:fromJS(action.topicList),
        listData:fromJS(action.listData),
        RecommendLst:fromJS(action.RecommendLst),
        WriterList:fromJS(action.WriterList),
        bannerList:fromJS(action.bannerList)
    })
};
export default (state = defaultState,action) =>{
    switch(action.type){
        case actionType.CHANGE_HOME_DATA:
            return changeHomeData(state,action);
        case actionType.CHANGE_BACKTO_SHOW:
            return state.set('showScroll',action.show);
        case actionType.ADD_ARTICLE_LIST:
            return  state.merge({
                'listData':state.get('listData').concat(action.list),
                'articlePage':action.nextpage
            });
        default:
            return state;
    }
}