import styled from 'styled-components';

export const DetailsWarpper = styled.div`
    width:960px;
    margin:0px auto;
    overflow:hidden;
`;
export const DetaileLeft = styled.div`
    float:left;
    width:625px;
    margin-left:15px;
    padding-top:30px;
    .banner-img{
        width:625px;
        height:270px;
    }
`;

export const DetaileRight = styled.div`
    float:right;
    padding-top:30px;
    width:240px;
`;

export const DetailTitle = styled.div`
    font:bold 24px/48px 'Microsoft YaHei'
`;

export const DetailContent =styled.div`
    line-height:24px;
    text-indent:20px;
    padding:10px;
`;