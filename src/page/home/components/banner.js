//import React, { Component } from 'react';//Component和PureComponent的区别。PureComponent内在底层实现了shouldComponentUpdate方法，不需要再手写
import React, { PureComponent } from 'react';
import { Carousel } from 'antd';
import { connect } from 'react-redux';

class Banner extends PureComponent{
    render() {
        return(
            <Carousel autoplay>
                {
                    this.props.bannerList.map((item) =>{
                        return(
                            <div key={item.get('id')}><img className="banner-img" src={item.get('imgUrl')} alt=""/></div>
                        )
                    })
                }
            </Carousel>
        )

    }
};

const mapStateFromProps = (state) =>({
    bannerList:state.getIn(['home','bannerList'])
});
export default connect(mapStateFromProps,null)(Banner);
