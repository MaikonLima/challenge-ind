import ReactDOM from "react-dom";

import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

import {
    ActionsLogout,
    ButtonModalNo,
    ButtonModalYes,
    ContainerConfirm,
    Overlay,
} from "./styles";
import { ModalProps } from "../types";

export function ModalLogout({
    isModalActive,
    closeModal,
    title,
    message,
}: ModalProps) {
    const modalRoot = document.getElementById("modal") as HTMLElement;

    // const { Logout } = useAuthGlobal();

    function handleLogout() {
        // Logout();
    }

    if (!isModalActive) {
        return null;
    }

    return ReactDOM.createPortal(
        <Overlay>
            <ContainerConfirm>
                <button className="close-icon" onClick={closeModal}>
                    &#10006;
                </button>
                <div className="text-group">
                    {title ? (
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                            }}
                        >
                            <ErrorOutlineIcon
                                style={{
                                    marginRight: 7,
                                }}
                            />
                            <h1 style={{ fontSize: 18 }}>{title}</h1>
                        </div>
                    ) : (
                        <h1>Sair do sistema</h1>
                    )}
                    {message ? (
                        <p>{message}</p>
                    ) : (
                        <p
                            style={{
                                color: "#7D7D8E",
                                fontSize: 14,
                                marginRight: 50,
                            }}
                        >
                            Você tem certeza que deseja sair do sistema?
                        </p>
                    )}
                </div>
                <ActionsLogout>
                    <ButtonModalNo
                        style={{
                            width: "5rem",
                            height: "2rem",
                            color: "#7D7D8E",
                            backgroundColor: "transparent",
                            border: "none",
                        }}
                        onClick={closeModal}
                    >
                        Não
                    </ButtonModalNo>
                    <ButtonModalYes
                        style={{
                            width: `${({ fullWidth }: any) =>
                                fullWidth && "100%"}`,
                            height: `${({ fullWidth }: any) =>
                                fullWidth && "100%"}`,
                            color: "#1976d2",
                            backgroundColor: "transparent",
                            border: "none",
                        }}
                        onClick={() => {
                            // closeModal();
                            handleLogout();
                        }}
                    >
                        Sim
                    </ButtonModalYes>
                </ActionsLogout>
            </ContainerConfirm>
        </Overlay>,
        modalRoot,
    );
}
