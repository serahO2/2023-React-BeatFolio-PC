import React from 'react';
import { styled } from 'styled-components';

export default function Wrap({ children, mrg }) {
    return <Wrapper mrg={mrg}>{children}</Wrapper>;
}

const Wrapper = styled.div`
    padding: ${(props) => props.mrg};
`;
