import React from 'react';
import { styled } from 'styled-components';
import Fade from 'react-reveal/Fade';

export default function BoardItem(props) {
    const { tit, date } = props;
    return (
        <>
            <Fade bottom delay={300}>
                <Item>
                    <Title>{tit}</Title>
                    <Date>{date}</Date>
                </Item>
            </Fade>
        </>
    );
}
const BoardListItem = [
    {
        tit: '서버 확장을 위해 서비스가 잠시 중단됩니다.',
        date: '2023. 12. 10',
    },
    {
        tit: 'AI 평가기준이 업데이트 되었습니다.',
        date: '2023. 12. 10',
    },
    {
        tit: '서버 확장을 위해 서비스가 잠시 중단됩니다.',
        date: '2023. 12. 10',
    },
];

export function BoardItemList() {
    return (
        <List className="acting-card-list">
            {BoardListItem.map((data, index) => (
                <BoardItem key={index} tit={data.tit} date={data.date} />
            ))}
        </List>
    );
}

const Item = styled.div`
    display: flex;
    flex-direction: column;
`;

const List = styled.div`
    display: flex;
    flex-direction: column;
    > div + div {
        margin-top: 65px;
    }
`;

const Title = styled.div`
    font-size: 24px;
    line-height: 36px;
    color: #fff;
    font-weight: 400;
`;
const Date = styled.div`
    font-size: 20px;
    line-height: 30px;
    color: #888;
    margin-top: 12px;
`;
