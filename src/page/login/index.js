import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';//重定向
import { actionCreators } from './store';
import { withRouter } from 'react-router-dom';//使用了按需加载react-loadable之后，页面或者不到路由传递的参数，借助withRouter来获取
import { 
    LoginWarpper,
    Input,
    Button
} from './style';



class Login extends PureComponent {
    render() {     
        const { loginStatus } = this.props;
        if(!loginStatus){
            return(
                <LoginWarpper>
                <Input placeholder="账户" ref={(input) => {this.account =input}}/>
                <Input placeholder="密码" type="password" ref={(input) => {this.password =input}} />
                <Button onClick={() => this.props.login(this.account,this.password)}>登录</Button>
                </LoginWarpper>
            )
        }else{
            return <Redirect to="/" />
        }
    }
    
};

const mapStateFromProps = (state) =>({
    loginStatus:state.getIn(['login','login'])
});
const mapDispatch =(dispatch) =>({

    login(accountElement,passwordElement){
        dispatch(actionCreators.login(accountElement.value,passwordElement.value))
    }
});

export default connect(mapStateFromProps,mapDispatch)(withRouter(Login));