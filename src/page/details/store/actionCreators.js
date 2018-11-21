
import axios from 'axios';
import { fromJS } from 'immutable';
import * as actionType from './actionType';

export const detailData =(data) =>({
    type:actionType.GETDETAILDATA,
    title:fromJS(data.title),
    content:fromJS(data.content)
})
export const getDetailsDate = (id) =>{
    return (dispatch) =>{
        axios.get('/api/detail.json?id='+id).then((res) =>{
            dispatch(detailData(res.data.data))
        })
        
    }
}