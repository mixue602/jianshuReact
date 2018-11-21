//import React, { Component } from 'react';//Component和PureComponent的区别。PureComponent内在底层实现了shouldComponentUpdate方法，不需要再手写
import React, { PureComponent } from 'react';
import 'antd/dist/antd.css';
import Topic from './components/topic';
import List from './components/List';
import Recommend from './components/recommend';
import Writer from './components/writer';
import Banner from './components/banner';
import { HomeWrapper, HomeLeft, HomeRight,BacktoTop } from './style';
import { connect } from 'react-redux';
import { actionCreators } from './store'

class Home extends PureComponent {
    render() {
        return(
            <HomeWrapper>
                <HomeLeft>
                    <Banner />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
                {
                    this.props.showScroll ? <BacktoTop onClick={this.BacktoTop}>返回<br/>顶部</BacktoTop> : null
                }
                
            </HomeWrapper>
        )
    }
    BacktoTop(){
        window.scrollTo(0,0)
    }

    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvents();
    }
    bindEvents() {
        window.addEventListener('scroll',this.props.changeBacktoTopshow)
    }
    componentWillUnmount(){//组件被销毁的时候把scroll事件也销毁
        window.removeEventListener('scroll',this.props.changeBacktoTopshow)
    }
};
const matStateFromProps =(state) =>({
    showScroll:state.getIn(['home','showScroll'])
})

const mapDispatchFromProps =(dispatch) =>({
    changeHomeData() {
        dispatch(actionCreators.getHomeInfo());
    },
    changeBacktoTopshow(){
        if(document.body.scrollTop  > 100){
            dispatch(actionCreators.toggleTopShow(true))
        }else{
            dispatch(actionCreators.toggleTopShow(false))
        }
    }
})

export default connect(matStateFromProps,mapDispatchFromProps)(Home);