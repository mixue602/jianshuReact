import styled from 'styled-components';
import LogoImg from '../../static/logo.png';

export const HeaderWrapper = styled.div`
    height:58px;
    border-bottom:1px solid #f0f0f0;
    display:flex;
`;

export const Logo =styled.div`
    flex: 0 1 100px;
    height:58px;
    width:200px;
    background:url(${LogoImg}) no-repeat;
    background-size:contain;
`;

export const Nav =styled.div`
    flex-grow: 1;
    height:100%;
    margin:0 auto;
`;

export const NavItem =styled.div`
    height:58px;
    line-height:58px;
    font-size:17px;
    cursor:pointer;   
    color:#333;
    &.left{
        float:left;
        margin-left:40px;
    }
    &.right{
        float:right;
        margin-right:40px;
        color:#969696;
    }
    &.active{
        color:#ea6f5a;
    }
`;

export const NavSearch =styled.input.attrs({
    placeholder:'搜索'
})`
    margin-left:40px;
    width:160px;
    padding:0px 40px 0 20px;
    height:38px;
    margin-top:9px;
    border:none;
    outline:none;
    border-radius:19px;
    background:#eee;
    box-sizing:border-box;
    &::placeholder{
        color:#999;
    }
    &.focused{
        width:200px;
    }
    &.slide-enter{
        transition:all .2s ease-out;
    }
    &.slide-enter-active{
        width:200px;
    }
    &.slide-exit{
        transition:all .2s ease-out;
    }
    &.slide-exit-active{
        width:160px;
    }
`;

export const Addition =styled.div`
    flex:0 1 300px;
    height:58px;
`;

export const Button =styled.div`
    float:right;
    margin-top:9px;
    height:38px;
    line-height:38px;
    text-align:center;
    border-radius:19px;
    border:1px solid #ec6149;
    margin-right:20px;
    padding:0 15px;
    font-size:14px;
    cursor:pointer;
    &.reg{
        color:#ec6149;
    }
    &.writting{
        color:#fff;
        background:#ec6149;
    }
`;

export const SearchWrapper=styled.div`
    float:left;
    position:relative;
    z-index:10;
    .iconfont{
        position:absolute;
        right:5px;
        bottom:5px;
        background:none;
        width:30px;
        height:30px;
        line-height:30px;
        text-align:center;
        border-radius:15px;
        &.focused{
            background:#777;
        }
    }
`;

export const SearchInfo = styled.div`
    position:absolute;   
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    margin-top: 9px;
    width: 250px;
    left: 40px;
    background:#fff;
    padding:10px;
`;

export const SearchSwitch = styled.span`
    float:right;
    font-size:12px;
    cursor:pointer;
`;

export const SearchList = styled.div`
    overflow:hidden;
    margin-top:10px;
`;

export const SearchInfoItem = styled.a`
    float:left;
    line-height:20px;
    padding:0 5px;
    font-size:12px;
    border:1px solid #ddd;
    color:#969696;
    border-radius:2px;
    margin-right:10px;
    margin-bottom:10px;
`
