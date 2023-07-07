import React from 'react';
import { styled } from 'styled-components';

export default function Section(props) {
    const { children, bg, row, align } = props;
    return (
        <Wrap bg={bg} row={row} align={align}>
            <div className="inner">{children}</div>
        </Wrap>
    );
}

const Wrap = styled.div`
    height: 792px;
    height: ${(props) => {
        if (props.bg === 'bg03') {
            return '869px';
        } else return '792px';
    }};

    background: ${(props) => {
        if (props.bg === 'bg01') {
            return '#0A1017';
        } else if (props.bg === 'bg02') {
            return '#0d141c';
        } else if (props.bg === 'bg03') {
            return '#0a0d13';
        } else return 'transparent';
    }};

    .inner {
        width: 1200px;
        margin: 0 auto;

        width: ${(props) => (props.align === 'right' ? '1484px' : '1200px')};
        margin: ${(props) => (props.align === 'right' ? '0 0 auto 0' : '0 auto')};
        margin-left: ${(props) => (props.align === 'unset' ? 'calc((100% - 1200px) / 2);' : '0 auto')};

        padding: 120px 0;
        display: ${(props) => {
            if (props.row === 'true') {
                return 'flex';
            } else return 'block';
        }};
    }
`;
