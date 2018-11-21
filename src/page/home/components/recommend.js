//import React, { Component } from 'react';//Component和PureComponent的区别。PureComponent内在底层实现了shouldComponentUpdate方法，不需要再手写
import React, { PureComponent } from 'react';
import { RecommendWrapper, RecommendBox } from '../style';
import { connect } from 'react-redux';

class Recommend extends PureComponent {
    render() {
        return(
            <RecommendBox>
            {
                    this.props.RecommendLst.map((item) =>{
                        return(
                            <RecommendWrapper key={item.get('id')}>
                                <img src={item.get('imgurl')} alt="" width="100%" height="50" />
                            </RecommendWrapper>
                        )
                    })
                }
                
            </RecommendBox>
        )
    }
};

const mapStateFromProps = (state) =>({
    RecommendLst:state.getIn(['home','RecommendLst'])
})

export default connect(mapStateFromProps,null)(Recommend);