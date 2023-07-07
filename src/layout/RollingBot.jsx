import { useRef } from 'react';
import { motion, useTransform, useMotionValue, useAnimationFrame } from 'framer-motion';
import { wrap } from '@motionone/utils';
import { styled } from 'styled-components';

export function ParallaxText({ children, baseVelocity = 100 }) {
    const baseX = useMotionValue(0);

    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        baseX.set(baseX.get() + moveBy);
    });

    return (
        <Parallax className="parallax">
            <motion.div className="scroller" style={{ x }}>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
            </motion.div>
        </Parallax>
    );
}

export default function ParallaxTextBox() {
    return (
        <Wrapper>
            <ParallaxText baseVelocity={-1}>
                LET’S ENJOYTHE BEATFOLIO ∙ LET’S ENJOY THE BEATFOLIO ∙ LET’S ENJOY THE BEATFOLIO LET’S
                ENJOYTHE CONTEST LET’S ENJOYTHE CONTEST
            </ParallaxText>
        </Wrapper>
    );
}

const Parallax = styled.div`
    overflow: hidden;
    letter-spacing: -2px;
    line-height: 0.8;
    margin: 0;
    white-space: nowrap;
    display: flex;
    flex-wrap: nowrap;

    .scroller {
        font-weight: 600;
        text-transform: uppercase;
        font-size: 64px;
        display: flex;
        white-space: nowrap;
        display: flex;
        flex-wrap: nowrap;
    }
    span {
        display: block;
        font-size: 12px;
        line-height: 14px;
        letter-spacing: 12px;
        color: #111;
        font-weight: 400;
    }
`;
const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 40px;
    padding: 13px 0;
    background-image: linear-gradient(to left, #deb76d 0%, #de6d6d 69%, #8484e3 100%);
    overflow: hidden;
`;
