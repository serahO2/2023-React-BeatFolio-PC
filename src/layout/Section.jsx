import React, { useRef } from 'react';
import { styled } from 'styled-components';

export default function Section(props) {
    const { children, bg, row, align } = props;

    const rightRef = useRef(null);

    const handleTouchMove = (e) => {
        if (rightRef.current) {
            rightRef.current.scrollLeft -= e.touches[0].clientX - e.touches[0].clientX;
        }
    };

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
        } else if (props.bg === 'bg04') {
            return '914px';
        } else if (props.bg === 'bg05') {
            return '700px';
        } else return 'unset';
    }};

    background: ${(props) => {
        if (props.bg === 'bg01') {
            return '#0A1017';
        } else if (props.bg === 'bg02') {
            return '#0d141c';
        } else if (props.bg === 'bg03') {
            return '#0a0d13';
        } else if (props.bg === 'bg05') {
            return '#0a1118';
        } else if (props.bg === 'bg06') {
            return '#0e0e0e';
        } else return '#0d141c';
    }};

    .inner {
        width: 1200px;
        margin: 0 auto;
        width: ${(props) =>
            props.align === 'right' ? '1484px' : props.align === 'right02' ? '100%' : '1200px'};
        margin: ${(props) => (props.align === 'right' ? '0 0 auto 0' : '0 auto')};
        margin-left: ${(props) =>
            props.align === 'unset' || props.align === 'right02' ? 'calc((100% - 1200px) / 2)' : '0 auto'};

        padding: 120px 0;
        display: ${(props) => {
            if (props.row === 'true') {
                return 'flex';
            } else return 'block';
        }};
        > .fix-left {
            width: 380px;
        }
        > .right {
            overflow-x: hidden;
            overflow-y: hidden;
            width: ${(props) =>
                props.align === 'right02' ? 'calc(100% - ((100% - 1200px) / 2) + 380px)' : '100%'};
            -webkit-overflow-scrolling: touch;
            scroll-snap-type: x mandatory;
            scroll-padding: 0 8px;
        }
    }
`;
