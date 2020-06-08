import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

import { Table } from '../Table';

import {
    ContainerMain,
    ContainerLeft,
    TableContainerStyles,
    ContainerRightStyles,
} from '../../style/style';

const TableContainer = styled.div`${TableContainerStyles};`;
const ContainerRight = styled.div`${ContainerRightStyles};`;


interface TableProps {
    Columns: {
        name: string;
        width: number;
    }[],
    Data: {
        [key: string]: any
    }[],
}

export const Container: React.FC<TableProps> =
    ({ Columns, Data }) => {    
    const [sortBy, setSortBy] = useState(-1);
    const [data, setData] = useState(Data);
    const [isVisible, setIsVisible] = useState(true);

    const sortByColumnIndex = (array: any, index: number) => {
        setIsVisible(false);
        setSortBy(index);
        const columnName = Columns[index].name;
        const sorted = data.sort((a, b) => a[columnName].localeCompare(b[columnName]));
        setData(sorted);
        setTimeout(function(){ setIsVisible(true); }, 300);
    }

    {
        return (
            <ContainerMain>
                <ContainerLeft>
                <TableContainer width={Columns.slice(0, -1).reduce((total, curr) => total + curr.width, 0).toString()}>
                    <Table Columns={Columns.slice(0, -1)}
                        Data={Data}
                        SortByIndex={sortByColumnIndex}
                        SortBy={sortBy} 
                        IsVisible={isVisible}>   
                    </Table>
                </TableContainer>
                </ContainerLeft>

                <ContainerRight width={Columns[Columns.length - 1].width.toString()}>
                    <Table Columns={[Columns[Columns.length - 1]]}
                        Data={Data}
                        SortByIndex={() => sortByColumnIndex(Data, Columns.length - 1)}
                        SortBy={sortBy} 
                        IsVisible={isVisible}>
                    </Table>
                </ContainerRight>
            </ContainerMain>
        )
    }}
