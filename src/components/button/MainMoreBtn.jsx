import React from 'react';
import { styled } from 'styled-components';

export default function MainMoreBtn() {
    return <Button type="button">More</Button>;
}

const Button = styled.div`
    width: 104px;
    height: 42px;
    background-color: transparent;
    border: 1px solid #fff;
    border-radius: 30px;
    padding: 6px 28px;
    color: #fff;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
`;
