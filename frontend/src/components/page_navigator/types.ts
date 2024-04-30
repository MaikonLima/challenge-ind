export interface IPaginationProps {
    totalPages: number;
    currentPage: number;
    pageSize?: number;

    totalData?: any;

    onPageChange: (page: number) => void;
}
