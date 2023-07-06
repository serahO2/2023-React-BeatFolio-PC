import React from 'react';
import styled from 'styled-components';

export default function BadgeBpm(props) {
    const { num, pd } = props;

    return (
        <Badge num={num} className="bpm" pd={pd}>
            <HeartIcon num={num}>
                {num >= 0 && num <= 60 ? '💙' : num >= 61 && num <= 80 ? '💚' : '❤️'}
            </HeartIcon>
            {num}bpm
        </Badge>
    );
}

const Badge = styled.span`
    font-weight: 500;
    display: inline-flex;
    align-items: center;
    padding: ${(props) => props.pd};
    font-size: 16px;

    line-height: 17px;

    color: ${(props) => {
        const num = props.num;
        if (num >= 0 && num <= 60) return '#72aeff';
        if (num >= 61 && num <= 80) return '#119416';
        return '#ee5246';
    }};
`;

const HeartIcon = styled.span`
    font-size: 16px;

    color: ${(props) => {
        const num = props.num;
        if (num >= 0 && num <= 60) return '#72aeff';
        if (num >= 61 && num <= 80) return '#119416';
        return '#ee5246';
    }};
    line-height: 17px;
`;
