//import React, { Component } from 'react';//Component和PureComponent的区别。PureComponent内在底层实现了shouldComponentUpdate方法，不需要再手写
import React, { PureComponent } from 'react';
import { ListItem, LoadMoreBtn } from '../style';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';

class List extends PureComponent {
    render() {
        const { list, addMoreList, page} = this.props;
        return(
            <div>
                {
                    list.map((item,index) =>{
                        let imgUrl='';
                        if(item.get('imgUrl') !==''){
                            imgUrl =<img className="listimg" src={item.get('imgUrl')} alt=""/>;
                        };
                        return (
                            <ListItem key={index}>
                                {imgUrl}
                                <Link to={"/details/"+item.get('id')}>
                                {/* <Link to={"/details?id="+item.get('id')}> */}
                                <span className="list_title" title={item.get('title')}>{item.get('title')}</span>
                                </Link>
                                <p className="list_design">{item.get('design')}</p>
                            </ListItem>
                        )
                        
                    })
                }
                <LoadMoreBtn onClick={() =>addMoreList(page)}>阅读更多</LoadMoreBtn>
            </div>
        )
    }
};

const mapStateToProps =(state) =>({
    list:state.getIn(['home','listData']),
    page:state.getIn(['home','articlePage'])
});

const mapDispatchFromProps =(dispatch) =>({
    addMoreList(page){
        const action = actionCreators.moreList(page);
        dispatch(action);
    }
    
})

export default connect(mapStateToProps,mapDispatchFromProps)(List);