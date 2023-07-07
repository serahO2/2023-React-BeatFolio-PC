import React from 'react';
import { styled } from 'styled-components';
import Fade from 'react-reveal/Fade';

export default function QnAItem(props) {
    const { tit, txt } = props;
    return (
        <Fade bottom delay={500}>
            <Item>
                <Tit>{tit}</Tit>
                <Txt>{txt}</Txt>
            </Item>
        </Fade>
    );
}

export function QnAList() {
    return (
        <List className="acting-card-list">
            <Fade bottom delay={200}>
                <Item>
                    <Tit>BeatFolio 앱 설치는 어떻게 하나요?</Tit>
                    <Txt>네 BeatFolio 앱 설치는 이렇게 저렇게 어떻게 저떻게 하시면 됩니다.</Txt>
                </Item>
            </Fade>
            <Fade bottom delay={500}>
                <Item>
                    <Tit>BeatFolio 서비스 제휴문의는 어떻게 하나요?</Tit>
                    <Txt>네 BeatFolio 서비스 제휴문의는 이렇게 저렇게 어떻게 저떻게 하시면 됩니다.</Txt>
                </Item>
            </Fade>
            <Fade bottom delay={800}>
                <Item>
                    <Tit>BeatFolio 서비스 제휴문의는 어떻게 하나요?</Tit>
                    <Txt>네 BeatFolio 서비스 제휴문의는 이렇게 저렇게 어떻게 저떻게 하시면 됩니다.</Txt>
                </Item>
            </Fade>
            <Fade bottom delay={1100}>
                <Item>
                    <Tit>BeatFolio 서비스 제휴문의는 어떻게 하나요?</Tit>
                    <Txt>네 BeatFolio 서비스 제휴문의는 이렇게 저렇게 어떻게 저떻게 하시면 됩니다.</Txt>
                </Item>
            </Fade>
            <Fade bottom delay={1400}>
                <Item className="last-box">
                    <Tit>BeatFolio 서비스 제휴문의는 어떻게 하나요?</Tit>
                    <Txt>네 BeatFolio 서비스 제휴문의는 이렇게 저렇게 어떻게 저떻게 하시면 됩니다.</Txt>
                </Item>
            </Fade>
        </List>
    );
}
const List = styled.div`
    display: flex;
    align-items: center;
    margin-top: 61px;
    margin-bottom: 120px;
    cursor: pointer;

    > div + div {
        margin-left: 20px;
    }
`;

const Item = styled.div`
    width: 290px;
    height: 270px;
    background: transparent;
    border-radius: 20px;
    padding: 35px 55px 34px 40px;
    border: 1px solid #979797;
    display: flex;
    flex-direction: column;
    &.last-box {
        margin-right: 600px;
    }
`;
const Tit = styled.div`
    font-size: 24px;
    line-height: 36px;
    color: #fff;
`;
const Txt = styled.div`
    font-size: 18px;
    line-height: 27px;
    color: #9198a5;
    margin-top: 12px;
`;
