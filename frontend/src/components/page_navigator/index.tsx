import React, { useEffect, useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { IPaginationProps } from './types';
import {
    CurrentPage,
    NavigatorButton,
    PaginationBox,
    PaginationContainer,
    TotalPages
} from './styles';

export function Pagination({
    currentPage,
    totalPages,
    totalData,
    onPageChange
}: IPaginationProps) {
    const [actualPage, setActualPage] = useState(currentPage);

    useEffect(() => {
        setActualPage(currentPage);
    }, [currentPage]);

    function onNext() {
        setActualPage((prev) => {
            if (prev === totalPages) {
                return prev;
            }
            onPageChange(prev + 1);
            return prev + 1;
        });
    }

    function onPrevious() {
        setActualPage((prev) => {
            if (prev === 1) {
                return prev;
            }
            onPageChange(prev - 1);
            return prev - 1;
        });
    }

    return (
        <>
            <PaginationBox>
                <PaginationContainer>
                    <div style={{ display: 'flex' }}>{totalData}</div>
                </PaginationContainer>
                <PaginationContainer>
                    <NavigatorButton onClick={onPrevious}>
                        <ArrowBackIosIcon style={{ color: "#0000008A" }} />
                    </NavigatorButton>

                    <CurrentPage>{actualPage}</CurrentPage>

                    <NavigatorButton onClick={onNext}>
                        <ArrowForwardIosIcon style={{ color: "#0000008A" }} />
                    </NavigatorButton>

                    <TotalPages>
                        Página {totalPages}
                    </TotalPages>
                </PaginationContainer>
            </PaginationBox>
        </>
    );
}
