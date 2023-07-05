import React from 'react';
import { styled } from 'styled-components';

export default function Section(props) {
    const { children, bg, row } = props;
    return (
        <Wrap bg={bg} row={row}>
            <div className="inner">{children}</div>
        </Wrap>
    );
}

const Wrap = styled.div`
    display: ${(props) => {
        if (props.row === true) {
            return 'flex';
        } else return 'block';
    }};
    height: 792px;
    background: ${(props) => {
        if (props.bg === 'bg01') {
            return '#0A1017';
        } else if (props.bg === 'bg02') {
            return '#0d141c';
        } else return 'transparent';
    }};

    .inner {
        width: 1200px;
        margin: 0 auto;
        padding: 120px 0;
    }
    .left {
        max-width: 380px;
    }
    .right {
        width: 100%;
    }
`;
