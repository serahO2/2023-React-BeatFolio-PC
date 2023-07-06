import React from 'react';
import { styled } from 'styled-components';

export default function ExplainBox() {
    return (
        <BoxWrapper>
            <Wrapper icon="icon1" className="ex-box">
                <Title>
                    프리미엄
                    <br />
                    경기 광고 배너
                </Title>
                <Icon icon="icon1"></Icon>
            </Wrapper>
            <Wrapper icon="icon2" className="ex-box">
                <Title>
                    비트폴리오의
                    <br />
                    안전한 정산 시스템에
                    <br />
                    대해 설명해드립니다.
                </Title>
                <Icon icon="icon2"></Icon>
            </Wrapper>
            <Wrapper icon="icon3" className="ex-box">
                <Title>
                    AI 평가시스템
                    <br />
                    체험하기
                </Title>
                <Icon icon="icon3"></Icon>
            </Wrapper>
        </BoxWrapper>
    );
}

const BoxWrapper = styled.div`
    display: flex;
    align-items: start;
    margin-top: 56px;
    > div + div {
        margin-left: 30px;
    }
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    width: 380px;
    height: 325px;
    background: #0a0a0a;
    padding: 40px;
    border-radius: 20px;

    &:first-child {
        animation: box-up-down 4s ease-in-out 0.5s infinite;
    }

    &:nth-child(2) {
        margin-top: 122px;
        animation: box-up-down 4s ease-in-out 1s infinite;
    }

    &:nth-child(3) {
        margin-top: 57px;
        animation: box-up-down 4s ease-in-out 1.5s infinite;
    }

    @keyframes box-up-down {
        0% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-50px);
        }
        100% {
            transform: translateY(0px);
        }
    }
`;
const Title = styled.div`
    display: block;
    font-size: 32px;
    font-weight: 600;
    color: #04acff;
`;
const Icon = styled.div`
    position: absolute;
    bottom: 40px;
    right: 40px;
    width: 45px;
    height: 45px;

    background: ${(props) => {
        if (props.icon === 'icon1') {
            return "url('../img/icon/gray-icon-01.png') no-repeat center / cover;";
        } else if (props.icon === 'icon2') {
            return "url('../img/icon/gray-icon-02.png') no-repeat center / cover;";
        } else return "url('../img/icon/gray-icon-03.png') no-repeat center / cover;";
    }};
`;
