import { Dispatch, SetStateAction } from 'react';

export interface ITableHeader {
    key: string;
    value: string;
    leftHeader?: boolean;
    leftBody?: boolean;
    columnWidth?: string;
    tab?: boolean;
}

export type TableProps = {
    headers: ITableHeader[];
    data: any[];
    id?: string;
    loading?: boolean;
    emptyMessage?: string | null;
    instruction?: string | null;
    enableActions?: boolean;
    status?: boolean;
    totalPages?: number;
    currentPage?: number;
    otherColor?: string;
    textColor?: string;
    checkBox?: boolean;
    checkState?: number[];
    checkStateAll?: boolean;
    inspectionIds?: number[];
    initialListIds?: any[];
    desableCheck?: boolean;
    totalData?: any;
    onCheck?: (item: any) => void;
    onCheckAll?: () => void;
    onDetail?: (item: any) => void;
    onRepair?: (item: any) => void;
    onResetPassword?: (item: any) => void;
    onChangeStatus?: (item: any) => void;
    onPageChanges?: (page: number) => void;
    onEdit?: (item: any) => void;
    onDelete?: (item: any) => void;

    setUserId: Dispatch<SetStateAction<number>>;
    emptyImage?: any;
};
