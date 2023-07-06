import React from 'react';
import styled from 'styled-components';

export const BadgeRedCheck = () => {
    return <CheckIcon></CheckIcon>;
};

const CheckIcon = styled.span`
    display: inline-flex;
    width: 18px;
    height: 18px;
    background: url('../img/icon/icon-red-check-16-px@2x.png') no-repeat center/cover;
    margin-left: 6px;
`;
