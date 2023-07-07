import React from 'react';
import { styled } from 'styled-components';

export default function Footer() {
    return (
        <Wrapper>
            <div className="left">
                <Button type="button">회사소개</Button>
                <Button type="button">오시는길</Button>
                <Button type="button">이용약관</Button>
                <Button type="button">개인정보처리방침</Button>
                <Button type="button">이메일무단수집거부</Button>
                <Button type="button">사이트맵</Button>
            </div>
            <div className="right">
                <div className="logo"></div>
                <div className="address">주소 : 06041 서울특별시 강남구 도산대로 26길 36</div>
                <div className="copy">COPYRIGHT @ 2023 O2UX All rights reserved.</div>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 1200px;
    margin: 0 auto;
    padding: 80px 0 108px 0;
    display: flex;
    justify-content: space-between;
    > .left {
        display: flex;
        align-items: first baseline;
        > button + button {
            margin-left: 40px;
        }
    }
    > .right {
        display: flex;
        flex-direction: column;
        align-items: end;

        .logo {
            display: block;
            width: 124px;
            height: 34px;
            background: url('../img/icon/logo-o2ux.png') no-repeat center/ cover;
        }
        .address {
            margin-top: 16px;
            font-size: 16px;
            line-height: 27px;
            color: #9198a5;
        }
        .copy {
            margin-top: ;
            font-size: 16px;
            line-height: 27px;
            color: #9198a5;
        }
    }
`;
const Button = styled.button`
    display: block;
    font-size: 18px;
    line-height: 27px;
    color: #fff;
`;
