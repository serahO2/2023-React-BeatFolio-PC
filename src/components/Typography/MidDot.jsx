import React from 'react';
import { styled } from 'styled-components';

export const MidDot = () => {
    return <Dot />;
};

const Dot = styled.div`
    display: block;
    top: 50%;
    left: -13px;
    transform: translateY(-40%);
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background-color: #767a7f;
    margin: 0 6px;
`;
