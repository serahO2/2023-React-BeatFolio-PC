import React from 'react';
import { styled } from 'styled-components';
import CountBox from './CountBox';

export default function UserInfo(props) {
    const { img, title, name, like, view } = props;

    return (
        <Wrapper>
            <LeftWrap>
                <UserImg className="img">
                    <img src={img} alt="" />
                </UserImg>
            </LeftWrap>
            <RightWrap>
                <Title className="title">{title}</Title>
                <Name className="name">{name}</Name>
                <CountBox className="count" view={view} like={like}></CountBox>
            </RightWrap>
        </Wrapper>
    );
}
const Wrapper = styled.div`
    display: flex;
`;
const LeftWrap = styled.div`
    margin-right: 12px;
`;
const UserImg = styled.div`
    width: 60px;
    height: 60px;
    border: 2px solid #87b6ff;
    border-radius: 50%;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.4);
    overflow: hidden;
    img {
        width: 100%;
        height: auto;
    }
`;
const RightWrap = styled.div`
    .title {
        color: #fff;
        font-size: 20px;
        line-height: 21px;
    }
    .title + .name {
        margin-top: 12px;
    }
    .name + .count {
        margin-top: 16px;
    }
`;
const Title = styled.div``;
const Name = styled.div`
    font-size: 18px;
    line-height: 18px;
    color: #9198a5;
`;
// const CountBox = styled.div`
//     display: flex;
//     align-items: center;
//     color: #9198a5;

//     .like-box {
//         display: flex;
//         align-items: center;
//         .like-img {
//             display: block;
//             width: 18px;
//             height: 18px;
//             background: url('../img/icon/icon-like.png') no-repeat center / cover;
//             & + .like-count {
//                 margin-left: 4px;
//             }
//         }

//         & + .view-box {
//             margin-left: 12px;
//         }
//     }

//     .view-box {
//         display: flex;
//         align-items: center;
//         .view-img {
//             display: block;
//             width: 18px;
//             height: 18px;
//             background: url('../img/icon/icon-view.png') no-repeat center / cover;

//             & + .view-count {
//                 margin-left: 4px;
//             }
//         }
//     }
// `;
