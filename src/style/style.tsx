import styled, { keyframes, css } from 'styled-components';


const ContainerMain = styled.div`
    display: flex;
    padding: 50px;
`;

const ContainerLeft = styled.div`
    overflow-x: scroll;
`;

const TableContainerStyles = css`
    display: flex;
    width: ${(props: { width: string }) => (`${props.width}px`)};
`;

const ContainerRightStyles = css`
    width: ${(props: { width: string }) => (`${props.width}px`)};
`;

const TableStyle = styled.table`
    table-layout: fixed;
    font-size: 12px;
    border-spacing: 0;
    border: none;
`;

const TableHeaderCellStyle = css`
    overflow: hidden;
    height: 30px;
    width: ${(props: { width: string, isSorted: boolean }) => (`${props.width}px`)};
    background: ${(props: { width: string, isSorted: boolean }) => (`${props.isSorted ? 'lightgrey': ''}`)};
`;

const TableCell = styled.td`
    overflow: hidden;
    height: 30px;
`;

const showing = keyframes`
    from {
        opacity: 0;
    }
  
    to {
        opacity: 1;
    }
`;

const TableRowStyles = css`
    opacity: 0;
    animation-duration: 3s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    animation-delay: ${(props: { delay: number, isVisible: boolean }) => (`${props.delay}s`)};
    animation-name: ${(props: { delay: number, isVisible: boolean }) => (props.isVisible ? css`${showing}` : '')};
`;

const TableBodyStyles = css`
    display: ${(props: { isVisible: boolean }) => (`${props.isVisible ? '': 'none'}`)};
`;

const Header = styled.header`
    background-color: #282c34;
    min-height: 5vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;

const AppStyles = styled.div`
    text-align: center
`;

export {
    ContainerMain,
    ContainerLeft,
    TableContainerStyles,
    ContainerRightStyles,
    TableStyle,
    TableHeaderCellStyle,
    TableCell,
    TableRowStyles,
    TableBodyStyles,
    Header,
    AppStyles,
}