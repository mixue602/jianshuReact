
import axios from 'axios';

import * as actionType from './actionType';

export const loginData =(success) =>({
    type:actionType.CHANHELOGIN,
    success:true
})
export const logout = () =>({
    type:actionType.LOGOUT,
    value:false
})
export const login = (account,password) =>{
    return (dispatch) =>{
        axios.get('/api/login.json?account=' + account + '&password=' + password).then((res) =>{
            const result =res.data.data;
            if(result){
                dispatch(loginData(result))
            }else{
                alert('登录失败')
            }
            
        })
        
    }
}