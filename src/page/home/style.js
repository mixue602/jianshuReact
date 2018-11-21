import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width:960px;
    margin:0px auto;
    overflow:hidden;
`;
export const HomeLeft = styled.div`
    float:left;
    width:625px;
    margin-left:15px;
    padding-top:30px;
    .banner-img{
        width:625px;
        height:270px;
    }
`;

export const HomeRight = styled.div`
    float:right;
    padding-top:30px;
    width:240px;
`;

export const TopicWarpper = styled.div`
    overflow:hidden;
    margin-left:-18px;
    padding-bottom:20px;
    margin-top:20px;
    border-bottom:1px solid #d7d7d7;
`;

export const TopicItem = styled.div`
    display:inline-block;
    margin-left:18px;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    height:32px;
    line-height:32px;
    color:#000;
    padding-right:10px;
    overflow:hidden;
    .topicImg{
        vertical-align: top;
        display:inline;
        width:32px;
        height:32px;
        margin-right:10px;
    }
`;

export const  ListItem = styled.div`
    margin-top:20px;
    width:625px;
    border-bottom:1px solid #d7d7d7;
    padding-bottom:20px;
    .listimg{
        float:right;
        width:125px;
        height:100px;
    }
    .list_title{
        margin-right:20px;
        color:#333;
        font:bold 17px/27px "-apple-system,SF UI Text,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif"
    }
    .list_design{
        margin-right:20px;
        ling-height:24px;
        color:#999;
    }
`;

export const RecommendBox = styled.div`
    overflow:hidden;
`; 

export const RecommendWrapper =styled.a`
    float:left;
    width:100%;
    height:50px;
    overflow:hidden;
    margin-bottom:10px;
`;

export const WriterWarpper =styled.ul`
    clear:both;
    margin-top:20px;
`;

export const WriterItem = styled.li`
    position:relative;
    margin-top:10px;
    overflow:hidden;
    .userImg{
        width:48px;
        height:48px;
        float:left;
        margin-right:10px;
    }
    .userImg img{
        width:48px;
        height:48px;
        border-radius:50%;
    }
    .userMesg{
        float:left;
        .title{
            font:14px/24px 'Microsoft YaHei';
            margin-right:50px;
        }
        .desc{
            font-size:12px;
            color:#969696
        }
    }
    .btnFollow{
        position:absolute;
        top:2px;
        right:0px;
        color:#42c02e;
    }
`;

export const LoadMoreBtn =styled.div`
        width: 100%;
        height: 40px;
        margin: 30px auto 60px;
        padding: 10px 15px;
        text-align: center;
        font-size: 15px;
        border-radius: 20px;
        color: #fff;
        background-color: #a5a5a5;
        display: block;
        cursor:pointer;
        :hover{
            background-color:#9b9b9b;
        }
`;

export const BacktoTop =styled.div`
        width:50px;
        height:50px;
        line-height:23px;
        border:1px solid #d7d7d7;
        text-align:center;
        cursor:pointer;
        position:fixed;
        right:100px;
        bottom:100px;
        background:#fff;
`;