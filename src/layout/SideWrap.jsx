import React from 'react';
import { styled } from 'styled-components';

export default function SideWrap({ children }) {
    return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
    width: 1484px;
    margin-right: 0;
`;
