import React from 'react';
import UserCardItem from '../Card/UserCardItem';
import styled from 'styled-components';

export default function UserCardListEx() {
    const userCardData = [
        {
            name: 'Diana Campos',
            userImg: '../img/temp/winner-user.png',
            bpmNum: '24',
            redcheck: true,
            winNum: '24',
            awardsMoney: '1억 4200만원',
            awardsNum: '24',
        },
        {
            name: 'Diana Campos',
            userImg: '../img/temp/winner-user.png',
            bpmNum: '24',
            redcheck: true,
            winNum: '24',
            awardsMoney: '1억 4200만원',
            awardsNum: '99',
        },
        {
            name: 'Diana Campos',
            userImg: '../img/temp/winner-user.png',
            bpmNum: '24',
            redcheck: true,
            winNum: '24',
            awardsMoney: '1억 4200만원',
            awardsNum: '45',
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
