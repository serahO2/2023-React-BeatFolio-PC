import React from 'react';
import { styled } from 'styled-components';

export default function LayoutInput() {
    return (
        <>
            <Input type="text" />
        </>
    );
}

const Input = styled.input`
    width: 400px;
    height: 40px;
    border-radius: 20px;
    box-shadow: 2px 0 8px 1px rgba(255, 255, 255, 0.1);
    background-color: #000;
    background: url('../img/icon/layout-input-search.png') no-repeat 20px center / 24px 24px #000;
    color: #fff;
    padding-left: 60px;
`;
