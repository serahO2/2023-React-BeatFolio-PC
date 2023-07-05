import React, { Children } from 'react';
import styled from 'styled-components';

export default function TagList() {
    const tag = [
        { tagName: 'Banking' },
        { tagName: '인공지능' },
        { tagName: '은행' },
        { tagName: '관리자' },
        { tagName: '동영상' },
        { tagName: '쇼핑몰' },
        { tagName: '커머스' },
        { tagName: '쇼핑몰' },
        { tagName: '브랜딩' },
        { tagName: '대시보드' },
        { tagName: '마케팅' },
        { tagName: 'UIUX' },
        { tagName: 'UIUX' },
        { tagName: '대시보드' },
        { tagName: '은행' },
    ];

    return (
        <List>
            {tag.map((item, index) => (
                <Item key={index}>{item.tagName}</Item>
            ))}
        </List>
    );
}

const Item = styled.button`
    background-color: rgba(30, 35, 42, 0.7);
    color: #fff;
    font-size: 16px;
    padding: 10px 20px;
    border-radius: 20px;
    margin: 0 10px 10px 0;
    line-height: 20px;
`;

const List = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding-right: 100px;
`;
