import React from 'react';
import { styled } from 'styled-components';

export default function RollingBottom() {
    return (
        <Wrapper>
            <div className="track">
                <div className="txt">
                    LET’S ENJOYTHE BEATFOLIO ∙ LET’S ENJOY THE BEATFOLIO ∙ LET’S ENJOY THE BEATFOLIO LET’S
                    ENJOYTHE CONTEST LET’S ENJOYTHE CONTEST
                </div>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    height: 40px;
    padding: 13px 0;
    background-image: linear-gradient(to left, #deb76d 0%, #de6d6d 69%, #8484e3 100%);
    overflow: hidden;
    .track {
        width: 100%;
        position: absolute;
        white-space: nowrap;
        will-change: transform;
        animation: marquee 60s linear infinite;
        /* overflow: hidden; */
    }
    .txt {
        display: block;
        font-size: 12px;
        line-height: 14px;
        letter-spacing: 12px;
        color: #111;
    }
    @keyframes marquee {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(-50%);
        }
    }
    @media (hover: hover) and (min-width: 700px) {
        .animated-title .content {
            -webkit-transform: translateY(calc(100% - 8rem));
            transform: translateY(calc(100% - 8rem));
        }
    }
`;
