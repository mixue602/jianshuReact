//import React, { Component } from 'react';//Component和PureComponent的区别。PureComponent内在底层实现了shouldComponentUpdate方法，不需要再手写
import React, { PureComponent } from 'react';
import { WriterWarpper, WriterItem } from '../style';
import { connect } from 'react-redux';

class Wriper extends PureComponent {
    render() {
        return(
            <div>
                <WriterWarpper>
                    {
                        this.props.WriterList.map((item) =>{
                            return (
                                <WriterItem key={item.get('id')}>
                                    <a href={item.get('Href')} title={item.get('title')} className="userImg"><img src={item.get('imgUrl')} alt=""/></a>
                                    <div className="userMesg">
                                        <a href={item.get('Href')} className="title">{item.get('title')}</a>
                                        <p className="desc">{item.get('design')}</p>
                                    </div>
                                    <a href={item.get('Href')} className="btnFollow">+关注</a>
                                </WriterItem>
                            )
                        })
                    }
                </WriterWarpper>
            </div>
        )
    }
};

const mapStateFromProps = (state) =>({
    WriterList:state.getIn(['home','WriterList'])
})

export default connect(mapStateFromProps,null)(Wriper);