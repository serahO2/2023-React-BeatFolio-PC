import React from 'react';
import { styled } from 'styled-components';

export default function TitleBox02(props) {
    const { col, icon, children, subtitleBtn, rightBtn } = props;
    return (
        <TitleWrap sty={col} icon={icon} subtitleBtn={subtitleBtn} rightBtn={rightBtn}>
            <Icon icon={icon}></Icon>
            <Title>
                <div>{children}</div>
                {rightBtn && <SubTitle type="button">{rightBtn}</SubTitle>}
            </Title>
            {subtitleBtn && <SubTitle type="button">{subtitleBtn}</SubTitle>}
        </TitleWrap>
    );
}

const TitleWrap = styled.div`
    width: 380px;

    height: fit-content;
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
    font-size: 32px;
    color: #fff;
    font-weight: 600;
    /* display: ${(props) => (props.rightBtn === true ? 'flex' : 'block')};
    justify-content: ${(props) => (props.rightBtn === true ? 'space-between' : 'none')}; */
`;

const SubTitle = styled.button`
    font-size: 24px;
    color: rgba(255, 255, 255, 0.5);
    margin-top: 16px;
    line-height: 30px;
`;
