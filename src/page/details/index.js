import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { withRouter } from 'react-router-dom';//使用了按需加载react-loadable之后，页面或者不到路由传递的参数，借助withRouter来获取
import { 
    DetailsWarpper, 
    DetaileLeft, 
    DetaileRight,
    DetailTitle,
    DetailContent
} from './style';



class Details extends Component {
    render() {
        //获取地址栏里传来的参数方法一：直接传参的例如、detail/1这样取{this.props.match.params.xx}
        //方法二：如果是detail?id=1这样取 this.props.location.search 。不推荐，取到的值是?id=1
        const { title, content } = this.props;
        return(
            <DetailsWarpper>
                <DetaileLeft>
                    <DetailTitle>{title}</DetailTitle>
                    <DetailContent dangerouslySetInnerHTML={{__html:content}}></DetailContent>
                </DetaileLeft>
                <DetaileRight>right</DetaileRight>
            </DetailsWarpper>
        )
    }
    componentDidMount(){
        this.props.getDetialsData(this.props.match.params.id)
    }
};

const mapStateFromProps = (state) =>({
    title:state.getIn(['detail','title']),
    content:state.getIn(['detail','content'])
});

const mapDispatchFromProps =(dispatch) =>({
    getDetialsData(id){
        dispatch(actionCreators.getDetailsDate(id))
    }
})

export default connect(mapStateFromProps,mapDispatchFromProps)(withRouter(Details));