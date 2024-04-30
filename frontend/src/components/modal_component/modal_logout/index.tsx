import ReactDOM from "react-dom";

import {
    ActionsLogout,
    BodyModal,
    ContainerConfirm,
    Overlay,
} from "./styles";
import { ModalProps } from "../types";
import { useGlobalContext } from "../../../context/AuthProvider/useGlobalContext";
import ButtonConponent from "../../buttom_component";


export function ModalLogout({
    isModalActive,
    closeModal,
    title,
    message,
}: ModalProps) {
    const modalRoot = document.getElementById("modal") as HTMLElement;

    const {
        Logout,
    } = useGlobalContext();

    function handleLogout() {
        Logout();
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
                        >
                            <h1 style={{ fontSize: 18 }}>{title}</h1>
                        </div>
                    ) : (
                        <h1>Sair do sistema</h1>
                    )}
                    {message ? (
                        <BodyModal style={{ color: "#7D7D8E", fontSize: 14 }}>{message}</BodyModal>
                    ) : (
                        <BodyModal style={{ color: "#7D7D8E", fontSize: 14 }}>
                            Você tem certeza que deseja sair do sistema?
                        </BodyModal>
                    )}
                </div>
                <ActionsLogout>
                    <ButtonConponent
                        variant="outlined"
                        value="Não"
                        width="150px"
                        onClick={closeModal}
                    />
                    <ButtonConponent
                        value="Sim"
                        width="150px"
                        onClick={() => {
                            handleLogout();
                        }}
                    />
                </ActionsLogout>
            </ContainerConfirm>
        </Overlay>,
        modalRoot,
    );
}
