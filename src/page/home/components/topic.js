//import React, { Component } from 'react';//Component和PureComponent的区别。PureComponent内在底层实现了shouldComponentUpdate方法，不需要再手写
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { TopicWarpper, TopicItem } from '../style';

class Topic extends PureComponent {
    render() {
        return(
            <TopicWarpper>
                {this.props.list.map((item) =>{
                    return (
                        <TopicItem key={item.get('id')}>
                            <img className='topicImg' alt='' src={item.get('imgUrl')} />
                            {item.get('title')}
                        </TopicItem>
                    )
                })}               
            </TopicWarpper>
        )
    }

};
const mapStateToProps=(state) =>({
    //list:state.get('home').get('topicList')
    list:state.getIn(['home','topicList'])
})

export default connect(mapStateToProps,null)(Topic);