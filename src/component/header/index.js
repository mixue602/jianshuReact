//import React,{ Component } from 'react';//无状态组件不需要component
import React, { Component } from 'react';//无状态组件不需要component
import { connect } from "react-redux";
import { CSSTransition } from 'react-transition-group';
import { 
    HeaderWrapper, 
    Logo, 
    Nav, 
    NavItem, 
    NavSearch, 
    Addition, 
    Button, 
    SearchWrapper,
    SearchInfo,
    SearchSwitch,
    SearchList,
    SearchInfoItem,
 } from './style.js';
import { Link } from 'react-router-dom';
import { actionCreators } from './store';
import { actionCreators as loginactionCreators } from '../../page/login/store';

class Header extends Component{//可以改成无状态组件
    render() {
        const { focused, handleInputFocus, handleInputBlur, list, login, logout } = this.props;
        console.log(login)
        return(
            <HeaderWrapper>
                <Link to="/">
                    <Logo />
                </Link>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    {
                        login ? <NavItem className="left" onClick={logout}>退出</NavItem> : <Link to="/login"><NavItem className="left">登录</NavItem></Link>
                    }
                                       
                    <NavItem className="right">下载</NavItem>
                    <NavItem className="right"><i className="iconfont">&#xe636;</i></NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch 
                                className={focused ? "focused" : ""}
                                onFocus={() => handleInputFocus(list)}
                                onBlur={handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i className={focused ? "focused iconfont" : "iconfont"}>&#xe6cf;</i>
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className="writting"><i className="iconfont">&#xe624;</i>写文章</Button>
                    <Button className="reg">注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
    getListArea(){
        const { focused, totalPage, list, page, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;//结构赋值
        const pageList = [];
        const newList = list.toJS();//从immutable对象转换成普通对象
        //if(newList.length){//有数据再处理
            for(let i = (page-1) * 10; i < page * 10 ; i++){
                if(i<newList.length){ 
                    pageList.push(
                        <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                    )
                }
            }
        //};
        if(focused || mouseIn){
            return (
                <SearchInfo 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    热门搜索
                    <SearchSwitch onClick={() => handleChangePage(page,totalPage)}>换一批</SearchSwitch>
                    <SearchList>
                        {pageList}
                    </SearchList>
                </SearchInfo>
            )
        }else{
            return null;
        }
    }
}

// const Header =(props) =>{//无状态组件
//     return (
//         <HeaderWrapper>
//             <Logo />
//             <Nav>
//                 <NavItem className="left active">首页</NavItem>
//                 <NavItem className="left">登录</NavItem>                    
//                 <NavItem className="right">下载</NavItem>
//                 <NavItem className="right"><i className="iconfont">&#xe636;</i></NavItem>
//                 <SearchWrapper>
//                     <CSSTransition
//                         in={props.focused}
//                         timeout={200}
//                         classNames="slide"
//                     >
//                         <NavSearch 
//                             className={props.focused ? "focused" : ""}
//                             onFocus={props.handleInputFocus}
//                             onBlur={props.handleInputBlur}
//                         ></NavSearch>
//                     </CSSTransition>
//                     <i className={props.focused ? "focused iconfont" : "iconfont"}>&#xe6cf;</i>
//                     {getListArea(props.focused)}
//                 </SearchWrapper>
//             </Nav>
//             <Addition>
//                 <Button className="writting"><i className="iconfont">&#xe624;</i>写文章</Button>
//                 <Button className="reg">注册</Button>
//             </Addition>
//         </HeaderWrapper>
//     )
// }
const mapStateToProps = (state) =>{
    return{
        //focused:state.header.focused
        focused:state.get('header').get('focused'),
        list:state.getIn(['header','list']),
        page:state.getIn(['header','page']),
        mouseIn:state.getIn(['header','mouseIn']),
        totalPage:state.getIn(['header','totalPage']),
        login:state.getIn(['login','login'])
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        handleInputFocus(list){
            (list.size === 0) && dispatch(actionCreators.getList());//排发一个方法，方法里发送请求
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur())
        },
        handleMouseEnter(){//鼠标进入浮层
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage(page,totalPage){
            if(page < totalPage){
                dispatch(actionCreators.changePage(page + 1));
            }else{
                dispatch(actionCreators.changePage(1));
            }           
        },
        logout(){
            dispatch(loginactionCreators.logout())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);