import React from 'react';
import CountBox from '../contents/CountBox';
import { styled } from 'styled-components';

export default function WinnerCard(props) {
    const { view, like, userImg, userCardImg, color, tit, subtit } = props;
    return (
        <>
            <UserImg>
                <img src={userImg} alt="" />
            </UserImg>
            <CardImg>
                <img src={userCardImg} alt="" />
                <CountBox view={view} like={like} color={color} />
            </CardImg>
            <WinnerTit>
                <Tit className="tit">{tit}</Tit>
                <SubTit className="sub-tit">{subtit}</SubTit>
            </WinnerTit>
        </>
    );
}

const UserImg = styled.div`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 2px solid #0d141c;
    overflow: hidden;
    margin-left: 48px;
    img {
        width: 120px;
        height: 120px;
    }
`;
const CardImg = styled.div`
    position: relative;
    z-index: -1;
    margin-top: -60px;
    width: 1200px;
    height: 520px;
    border-radius: 20px;
    overflow: hidden;
    img {
        width: 100%;
        height: auto;
    }
    .count {
        position: absolute;
        bottom: 40px;
        right: 40px;
        .like-box + .view-box {
            margin-left: 20px;
        }
    }
`;
const WinnerTit = styled.div`
    margin-top: 40px;
    margin-left: 48px;
    .tit + .sub-tit {
        margin-top: 20px;
    }
`;
const Tit = styled.div`
    font-size: 28px;
    line-height: 24px;
    color: #fff;
    font-weight: 400;
`;
const SubTit = styled.div`
    font-size: 24px;
    line-height: 17px;
    color: #72aeff;
    font-weight: 500;
`;
