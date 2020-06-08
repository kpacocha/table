import React, { useState } from 'react';
import styled from 'styled-components';

import {
    TableContainerStyles,
    ContainerRightStyles,
    TableStyle,
    TableHeaderCellStyle,
    TableCell,
    TableRowStyles,
    TableBodyStyles,
} from '../style/style';

const TableHeaderCell = styled.th`${TableHeaderCellStyle};`;
const TableRow = styled.tr`${TableRowStyles};`;
const TableBody = styled.tbody`${TableBodyStyles};`;

const SORTING_DELAY = 0.1;


interface TableProps {
    Columns: {
        name: string;
        width: number;
    }[],
    Data: {
        [key: string]: any
    }[],
    SortByIndex: any,
    SortBy: number,
    IsVisible: boolean
}

export const Table: React.FC<TableProps> =
    ({ Columns, Data, SortByIndex, SortBy, IsVisible }) => {
        return (
            <TableStyle className="table">
    
                <tr className="table-header">
                    {Columns.map((column, index) =>
                        <TableHeaderCell width={column.width.toString()}
                                         isSorted={SortBy === index}
                                         onClick={() => SortByIndex(Columns, index)}>
                                             {column.name}
                        </TableHeaderCell>)}
                </tr>
    
                <TableBody isVisible={IsVisible}>
                {Data.map((record, index) => <TableRow delay={index*SORTING_DELAY} isVisible={IsVisible}>
                    {Columns.map(column =>
                        <TableCell>{record[column.name]}</TableCell>)}
                </TableRow>)}
                </TableBody>
    
            </TableStyle>
        )
    }
