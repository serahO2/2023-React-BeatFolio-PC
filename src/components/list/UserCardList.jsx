import React from 'react';
import UserCardItem from '../Card/UserCardItem';
import styled from 'styled-components';

export default function UserCardList() {
    const userCardData = [
        {
            name: 'Diana Campos',
            userImg: '../img/temp/winner-user.png',
            bpmNum: '24',
            redcheck: true,
            winNum: '24',
            rank: 1,
        },
        {
            name: 'Diana Campos',
            userImg: '../img/temp/winner-user.png',
            bpmNum: '24',
            redcheck: true,
            winNum: '24',
            rank: 2,
        },
        {
            name: 'Diana Campos',
            userImg: '../img/temp/winner-user.png',
            bpmNum: '24',
            redcheck: true,
            winNum: '24',
            rank: 3,
        },
    ];

    return (
        <List className="user-card-list">
            {userCardData.map((data, index) => (
                <UserCardItem
                    key={index}
                    name={data.name}
                    userImg={data.userImg}
                    bpmNum={data.bpmNum}
                    redcheck={data.redcheck}
                    winNum={data.winNum}
                    rank={data.rank}
                    awardsMoney={data.awardsMoney}
                    awardsNum={data.awardsNum}
                />
            ))}
        </List>
    );
}

const List = styled.div`
    display: flex;
    align-items: center;
    > div + div {
        margin-left: 30px;
    }
`;
