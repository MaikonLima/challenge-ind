export type ModalProps = {
    isModalActive?: any;
    handleCancel?: () => void;
    handleClose?: () => void;
    title?: string;
    message?: string;
    keyId?: number;
    closeModal?: () => void;
};
