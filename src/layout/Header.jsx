import React from 'react';
import { styled } from 'styled-components';
import LayoutInput from '../components/Input/LayoutInput';

export default function Header() {
    return (
        <>
            <HeaderWrap>
                <div className="left">
                    <Logo type="button">BEAT POLIO</Logo>
                    <div className="menu-box">
                        <button type="button">포트폴리오</button>
                        <button type="button">유엑스시티</button>
                    </div>
                </div>
                <div className="right">
                    <button type="button" className="menu">
                        로그인
                    </button>
                    <button type="button" className="menu">
                        회원가입
                    </button>
                    <AlarmIcon type="button"></AlarmIcon>
                    <MyIcon type="button"></MyIcon>
                </div>
                <LayoutInput />
            </HeaderWrap>
        </>
    );
}

const HeaderWrap = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    padding: 0 40px;
    background: rgba(13, 18, 23, 0.4);
    -webkit-backdrop-filter: blur(32px);
    backdrop-filter: blur(32px);

    > div {
        display: flex;
        align-items: center;
    }
    .menu-box {
        display: flex;
        align-items: center;
        margin-left: 53px;
        button + button {
            margin-left: 26px;
        }
        > button {
            font-size: 14px;
            color: rgba(255, 255, 255, 0.4);
        }
    }

    .right {
        .menu {
            font-size: 14px;
            color: #fff;
            & + .menu {
                margin-left: 26px;
            }
        }
        > button + button {
            margin-left: 30px;
        }
    }
    input {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
`;

const Logo = styled.button`
    background-image: linear-gradient(to right, #ff7d7d, #bc60ff 75%, #9494ff 95%);
    font-weight: 700;
    font-size: 20px;
    background-clip: text;
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
`;

const AlarmIcon = styled.button`
    display: block;
    width: 30px;
    height: 30px;
    background: url('../img/icon/layout-btn-alarm.png') no-repeat center / cover;
`;

const MyIcon = styled.button`
    display: block;
    width: 32px;
    height: 32px;
    background: url('../img/icon/layout-btn-mypage.png') no-repeat center / cover;
`;
