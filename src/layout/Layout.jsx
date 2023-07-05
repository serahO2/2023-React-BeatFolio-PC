import React from 'react';
import { styled } from 'styled-components';

export default function Layout({ children }) {
    return <LayoutBox>{children}</LayoutBox>;
}

const LayoutBox = styled.div`
    /* min-width: 1920px; */
    width: 100%;
    background: #000;
    overflow-x: hidden;
`;
