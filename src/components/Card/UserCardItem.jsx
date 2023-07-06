import React from 'react';
import BadgeBpm from '../Typography/BadgeBpm';
import { MidDot } from '../Typography/MidDot';
import { styled } from 'styled-components';
import { BadgeRedCheck } from '../Typography/BadgeRedCheck';

export default function UserCardItem(props) {
    const { userImg, name, bpmNum, type, redcheck, winNum, awardsMoney, rank, awardsNum } = props;
    return (
        <Wrapper className="user-card-item">
            <UserImg>
                <img src={userImg} alt="" />
            </UserImg>
            <CardBox>
                <div className="top-box">
                    <div className="name-box">
                        <Name>{name}</Name>
                        {redcheck && <BadgeRedCheck></BadgeRedCheck>}
                    </div>

                    <div className="data-box">
                        <BadgeBpm num={bpmNum} type={type}></BadgeBpm>
                        <MidDot></MidDot>
                        <WinCount winnum={winNum}>우승 {winNum}회</WinCount>
                    </div>
                </div>
                <div className="bot-box">
                    <div className="left">{awardsMoney && <AwardsMoney>{awardsMoney}</AwardsMoney>}</div>
                    <div className="right">
                        {rank && (
                            <Rank>
                                {rank === 1 ? <span className="emoji">🏆</span> : ''}
                                TOP {rank}
                            </Rank>
                        )}
                        {awardsNum && <AwardsNum>{awardsNum}</AwardsNum>}
                    </div>
                </div>
            </CardBox>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    transition: all 0.16s linear;
    &:hover {
        transform: translateY(-8px);
        > div:nth-child(2) {
            box-shadow: 0 1px 10px rgba(0, 0, 0, 0.1);
        }
    }
`;

const UserImg = styled.div`
    width: 60px;
    height: 60px;
    overflow: hidden;
    border-radius: 50%;
    margin-bottom: -30px;
    margin-left: 16px;

    img {
        width: 100%;
        height: auto;
    }
`;

const CardBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 380px;
    height: 160px;
    background: #24282e;
    border-radius: 20px;
    padding: 42px 24px 24px 24px;
    .name-box {
        display: flex;
        align-items: center;
        line-height: 24px;
        & + .data-box {
            margin-top: 4px;
        }
    }
    .top-box {
        .data-box {
            display: flex;
            align-items: center;
        }
    }
    .bot-box {
        display: flex;
        justify-content: space-between;
        align-items: end;

        .right {
            margin-left: auto;
            line-height: 30px;
            width: fit-content;
            .emoji {
                font-size: 20px;
                line-height: 30px;
            }
        }
    }
`;

const Name = styled.div`
    font-size: 18px;
    line-height: 1.33;
    color: #fff;
`;

const WinCount = styled.div`
    font-size: 16px;
    line-height: 21px;
    color: #777;
`;
const AwardsMoney = styled.div`
    font-size: 24px;
    line-height: 30px;
    color: #fff;
    font-weight: 600;
`;
const AwardsNum = styled.div`
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    padding: 11px 8px;
    background-color: #7974ff;
    text-align: center;
    color: #fff;
    font-size: 18px;
    line-height: 18px;
`;
const Rank = styled.div`
    font-size: 24px;
    line-height: 30px;
    color: #fff;
    font-weight: 600;
`;
