import React from 'react';
import { styled } from 'styled-components';

export default function Layout({ children }) {
    return <LayoutBox>{children}</LayoutBox>;
}

const LayoutBox = styled.div`
    width: 100%;
    background: #0a0a0a;
    overflow-x: hidden;
`;
