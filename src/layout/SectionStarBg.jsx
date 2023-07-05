import React from 'react';
import { styled } from 'styled-components';

export default function SectionStarBg({ children }) {
    return (
        <Wrapper>
            <Bg />

            <div className="inner">{children}</div>
        </Wrapper>
    );
}
const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 1073px;
    background: url('../img/temp/section-bg.png') no-repeat center / cover;
    .inner {
        position: relative;
        z-index: 10;
        width: 1200px;
        margin: 0 auto;
        > div {
            position: relative;
        }
    }
`;
const Bg = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1073px;
    background-image: linear-gradient(to bottom, #0d141c 10%, #0a0d13 30%, rgba(9, 13, 19, 0) 93%);
`;
