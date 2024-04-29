export type AlertDialogProps = {
    open: boolean;
    title?: string;
    content?: string;
    isConfirm?: boolean;

    handleClose?: (result: boolean) => void;
};
