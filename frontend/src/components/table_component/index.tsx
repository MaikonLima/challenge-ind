import React, { forwardRef, useEffect, useState } from 'react';
import {
    Actions,
    ContainerWrapper,
    Empty,
    Progress,
    TableBox,
    Wrapper
} from './styles';
import { Box, Checkbox, FormControlLabel } from '@mui/material';
import { TableProps } from './types';
import LoaderLocal from '../loader_local';
import { organizeData } from './organizedData';

import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export const Table = forwardRef<HTMLTableElement, TableProps>(
    (
        {
            id,
            data,
            headers,
            enableActions,
            checkBox,
            emptyMessage,
            instruction,
            loading,
            otherColor,
            textColor,
            onEdit,
            onDetail,
            onRepair,
            onDelete,
            emptyImage,
            desableCheck,
            checkState,
            checkStateAll,
            onCheck,
            onCheckAll
        },
        ref
    ) => {
        const [organizedData, indexedHeader] = organizeData(data, headers);

        return (
            <>
                {data?.length !== 0 && (
                    <Wrapper>
                        <ContainerWrapper>
                            <TableBox ref={ref} id={id}>
                                <thead>
                                    <tr>
                                        {checkBox && (
                                            <th key={'all'} style={{ textAlign: 'left' }}>
                                                <Box sx={{ display: 'flex' }}>
                                                    <FormControlLabel
                                                        label={''}
                                                        control={
                                                            <Checkbox
                                                                disabled={desableCheck}
                                                                color="success"
                                                                disableRipple
                                                                onClick={() => onCheckAll && onCheckAll()}
                                                                checked={checkStateAll}
                                                            />
                                                        }
                                                    />
                                                    <p
                                                        style={{
                                                            fontSize: '16px',
                                                            margin: '0px 40px 0px 0px'
                                                        }}
                                                    >
                                                        "Ações"
                                                    </p>
                                                </Box>
                                            </th>
                                        )}

                                        {headers?.map((header) => (
                                            <th
                                                key={header.key}
                                                style={{
                                                    paddingLeft: headers.length === 1 ? '3rem' : '',
                                                    width: header.columnWidth ? header.columnWidth : '',
                                                    textAlign: header.leftHeader ? 'left' : 'center',
                                                    backgroundColor: otherColor,
                                                    color: textColor
                                                }}
                                            >
                                                <p
                                                    style={{
                                                        fontSize: '16px',
                                                        margin: '0px 40px 0px 0px'
                                                    }}
                                                >
                                                    {header.value}
                                                </p>
                                            </th>
                                        ))}

                                        {enableActions && (
                                            <th style={{ width: '170px' }} className="center">
                                                <p
                                                    style={{
                                                        fontSize: '16px',
                                                        textAlign: 'center',
                                                    }}
                                                >
                                                    Ações
                                                </p>
                                            </th>
                                        )}
                                    </tr>
                                </thead>

                                <tbody>
                                    {organizedData?.map((row: any, i: number) => (
                                        <tr key={i}>
                                            {checkBox &&
                                                (
                                                    <td key="all" style={{ textAlign: 'center' }}>
                                                        <FormControlLabel
                                                            label={''}
                                                            control={
                                                                <Checkbox
                                                                    color="success"
                                                                    sx={{
                                                                        color: '#B6BCCC',
                                                                        '& .MuiSvgIcon-root': { fontSize: 28 },
                                                                        p: '0px 0px 0px 40px',
                                                                        m: '0'
                                                                    }}
                                                                    disableRipple
                                                                    onClick={() =>
                                                                        onCheck && onCheck(row.$original)
                                                                    }
                                                                    checked={checkState?.some(
                                                                        (item: any) =>
                                                                            item === row.$original.inspection_id
                                                                    )}
                                                                />
                                                            }
                                                        />
                                                    </td>
                                                )}
                                            {Object.keys(row).map((item) => {
                                                if (item === '$original') return null;
                                                const { columnWidth, leftBody } = indexedHeader[item];
                                                return (
                                                    <td
                                                        key={item}
                                                        style={{
                                                            paddingLeft: headers.length === 1 ? '3rem' : '',
                                                            width: columnWidth ? columnWidth : '',
                                                            textAlign: leftBody ? 'left' : 'center',
                                                        }}
                                                    >
                                                        {row[item]}
                                                    </td>
                                                );
                                            })}
                                            {enableActions && (
                                                <td>
                                                    <Actions
                                                        style={{
                                                            width: '100%',
                                                            justifyContent:
                                                                onDetail || onRepair || onDelete
                                                                    ? 'center'
                                                                    : 'flex-end',
                                                            paddingRight: headers.length === 1 ? '5rem' : ''
                                                        }}
                                                    >
                                                        {onDetail && (
                                                            <div>
                                                                <button
                                                                    style={{ cursor: 'pointer' }}
                                                                    onClick={() => onDetail(row.$original)}
                                                                >
                                                                    <RemoveRedEyeIcon />
                                                                </button>
                                                            </div>
                                                        )}
                                                        {onEdit && (
                                                            <div>
                                                                <button
                                                                    style={{ cursor: 'pointer' }}
                                                                    onClick={() => onEdit(row.$original)}
                                                                >
                                                                    <EditIcon />
                                                                </button>
                                                            </div>
                                                        )}
                                                        {onDelete && (
                                                            <div>
                                                                <button
                                                                    style={{ cursor: 'pointer' }}
                                                                    onClick={() => onDelete(row.$original)}
                                                                >
                                                                    <DeleteIcon />
                                                                </button>
                                                            </div>
                                                        )}
                                                    </Actions>
                                                </td>
                                            )}
                                        </tr>
                                    ))}
                                </tbody>
                            </TableBox>

                            {loading && (
                                <Progress>
                                    <LoaderLocal />
                                </Progress>
                            )}
                        </ContainerWrapper>
                    </Wrapper>
                )}

                {data?.length === 0 && (
                    <Wrapper>
                        <TableBox ref={ref} id={id}>
                            <thead>
                                <tr>
                                    <th
                                    />
                                </tr>
                            </thead>
                        </TableBox>
                        <Empty style={{ borderRadius: '10px' }}>
                            <img
                                src={emptyImage}
                                alt={emptyMessage ? emptyMessage : ''}
                                width={300}
                                height={250}
                            />
                            <h2> {emptyMessage}</h2>
                            <p>{instruction}</p>
                        </Empty>
                    </Wrapper>
                )}
            </>
        );
    }
);

Table.displayName = 'Table';
export default Table;
