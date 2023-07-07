import React from 'react';
import { styled } from 'styled-components';

export default function TitleBox(props) {
    const { col, icon, children, subtitlebtn, rightbtn, rightTxt } = props;
    return (
        <TitleWrap sty={col} icon={icon} subtitlebtn={subtitlebtn} rightbtn={rightbtn}>
            <Icon icon={icon}></Icon>
            <Title>
                <div>{children}</div>
                {rightbtn && <SubTitle type="button">{rightbtn}</SubTitle>}
            </Title>
            <SubBox>
                {subtitlebtn && <SubTitle type="button">{subtitlebtn}</SubTitle>}
                {rightTxt && (
                    <RightTxt>
                        집계기간<span>{rightTxt}</span>
                    </RightTxt>
                )}
            </SubBox>
        </TitleWrap>
    );
}

const TitleWrap = styled.div`
    width: 100%;
`;
const Icon = styled.div`
    width: 38px;
    height: 38px;
    margin-bottom: 16px;

    background: ${(props) => {
        if (props.icon === 'icon1') {
            return 'url(../img/icon/icon-green.png) no-repeat center / cover';
        } else if (props.icon === 'icon2') {
            return 'url(../img/icon/icon-purple.png) no-repeat center / cover';
        } else if (props.icon === 'icon3') {
            return 'url(../img/icon/icon-02.png) no-repeat center / cover';
        } else if (props.icon === 'icon4') {
            return 'url(../img/icon/icon-03.png) no-repeat center / cover';
        } else if (props.icon === 'icon5') {
            return 'url(../img/icon/icon-04.png) no-repeat center / cover';
        } else if (props.icon === 'icon6') {
            return 'url(../img/icon/icon-05.png) no-repeat center / cover';
        } else if (props.icon === 'icon7') {
            return 'url(../img/icon/icon-06.png) no-repeat center / cover';
        } else return 'url(../img/icon/icon-green.png) no-repeat center / cover';
    }};
`;
const Title = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 32px;
    color: #fff;
    font-weight: 600;

    > button {
        margin-left: auto;
        margin-top: 0;
    }
`;
const SubTitle = styled.button`
    font-size: 24px;
    color: rgba(255, 255, 255, 0.5);
    margin-top: 16px;
    line-height: 30px;
`;

const RightTxt = styled.div`
    display: block;
    margin-left: auto;
    font-size: 18px;
    color: rgba(255, 255, 255, 0.5);
    margin-top: 3px;
    line-height: 27px;
    margin-right: 20px;
    span {
        display: inline-flex;
        margin-left: 16px;
    }
`;

const SubBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
`;
