import React from 'react';
import { styled } from 'styled-components';

export default function CountBox(props) {
    const { like, view, color } = props;

    return (
        <CountBoxWrap className="count" color={color}>
            <div className="like-box">
                <span className="like-img"></span>
                <span className="like-count">{like}</span>
            </div>
            <div className="view-box">
                <span className="view-img"></span>
                <span className="view-count">{view}</span>
            </div>
        </CountBoxWrap>
    );
}

const CountBoxWrap = styled.div`
    display: flex;
    align-items: center;
    color: #9198a5;
    color: ${(props) => {
        if (props.color === 'white') {
            return '#fff';
        } else return '#9198a5';
    }};

    .like-box {
        display: flex;
        align-items: center;
        .like-img {
            display: block;
            width: 18px;
            height: 18px;
            /* background: url('../img/icon/icon-like.png') no-repeat center / cover; */
            background: ${(props) => {
                if (props.color === 'white') {
                    return 'url(../img/icon/icon-like-wh.png) no-repeat center / cover';
                } else return 'url(../img/icon/icon-like.png) no-repeat center / cover';
            }};

            & + .like-count {
                margin-left: 4px;
                font-size: 18px;
                line-height: 18px;
                color: ${(props) => {
                    if (props.color === 'white') {
                        return '#fff';
                    } else return '#9198a5';
                }};
            }
        }

        & + .view-box {
            margin-left: 12px;
        }
    }

    .view-box {
        display: flex;
        align-items: center;
        .view-img {
            display: block;
            width: 18px;
            height: 18px;
            /* background: url('../img/icon/icon-view.png') no-repeat center / cover; */
            background: ${(props) => {
                if (props.color === 'white') {
                    return 'url(../img/icon/icon-view-wh.png) no-repeat center / cover';
                } else return 'url(../img/icon/icon-view.png) no-repeat center / cover';
            }};

            & + .view-count {
                margin-left: 4px;
                font-size: 18px;
                line-height: 18px;
                color: ${(props) => {
                    if (props.color === 'white') {
                        return '#fff';
                    } else return '#9198a5';
                }};
            }
        }
    }
`;
