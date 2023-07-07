import React from 'react';
import { styled } from 'styled-components';

export default function ActingCard() {
    return (
        <>
            <Wrapper className="ActingCard">
                <Top className="top">
                    <div className="icon"></div>
                </Top>
                <Mid className="mid">
                    <div className="name"></div>
                    <div className="en-name"></div>
                </Mid>
                <Bot className="bot">
                    <div className="explain"></div>
                </Bot>
            </Wrapper>
            <SubWrapper>
                <div className="tit"></div>
                <div className="sub-tit"></div>
            </SubWrapper>
        </>
    );
}

const Wrapper = styled.div`
    width: 380px;
    height: 547px;
    background: #000;
    border-radius: 20px;
    padding: 60px 40px 40px 40px;
`;
const Top = styled.div`
    .icon {
        width: 90px;
        height: 90px;
        color: ${(props) => {
            if (props.icon === 'icon1') {
                return 'url(../img/temp/acting-icon01.png) no-repeat center / cover';
            } else if (props.icon === 'icon2') {
                return 'url(../img/temp/acting-icon02.png) no-repeat center / cover';
            } else if (props.icon === 'icon3') {
                return 'url(../img/temp/acting-icon03.png) no-repeat center / cover';
            } else return 'url(../img/temp/acting-icon01.png) no-repeat center / cover';
        }};
    }
`;
const Mid = styled.div`
    .name {
        font-size: 32px;
        line-height: 48px;
        color: #fff;
    }
    .en-name {
        font-size: 24px;
        line-height: 40px;
        color: #888;
    }
`;
const Bot = styled.div`
    .explain {
        font-size: 18px;
        line-height: 27px;
        color: #9198a5;
    }
`;
const SubWrapper = styled.div`
    width: 380px;
    height: 87px;
    background: transparent;
`;
