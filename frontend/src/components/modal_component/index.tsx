import ReactDOM from "react-dom";

import {
    Actions,
    ButtonClose,
    ButtonModalNo,
    ButtonModalYes,
    ContainerConfirm,
    DivMain,
    Overlay,
} from "./styles";
import { ModalProps } from "./types";

export const Modal = ({
    isModalActive,
    handleCancel,
    handleClose,
    title,
    message,
}: ModalProps) => {
    const modalRoot = document.getElementById("modal") as HTMLElement;

    if (!isModalActive) {
        return null;
    }

    return ReactDOM.createPortal(
        <Overlay>
            <ContainerConfirm>
                <ButtonClose onClick={handleCancel}>
                    &#10006;
                </ButtonClose>
                <div className="text-group">
                    {title ? (
                        <DivMain>
                            <h1
                                style={{
                                    fontSize: 18,

                                    color: "#06152B",
                                }}
                            >
                                {title}
                            </h1>
                        </DivMain>
                    ) : (
                        <h1>{"modal-confirm"}</h1>
                    )}
                    {message ? (
                        <div
                            style={{
                                textAlign: "left",
                                wordBreak: "break-word",
                            }}
                        >
                            <p
                                style={{
                                    color: "#7D7D8E",
                                    paddingLeft: "30px",
                                    width: "100%",
                                    marginTop: -10,
                                    marginBottom: -5,
                                    paddingRight: "20px",
                                    fontWeight: 600,
                                }}
                            >
                                {message}
                            </p>
                        </div>
                    ) : (
                        <div style={{ textAlign: "left" }}>
                            <p
                                style={{
                                    color: "#7D7D8E",
                                    fontSize: 14,
                                    paddingLeft: "30px",
                                    width: "90%",
                                }}
                            >
                                {"Modall"}
                            </p>
                        </div>
                    )}
                </div>
                <Actions>
                    <ButtonModalNo
                        style={{
                            width: "5rem",
                            height: "2rem",
                            color: "#7D7D8E",
                            backgroundColor: "transparent",
                            border: "none",
                            fontSize: 16,
                        }}
                        onClick={handleCancel}
                    >
                        Não
                    </ButtonModalNo>

                    <ButtonModalYes
                        style={{
                            width: "5rem",
                            height: "2rem",
                            color: "#FF9C1A",
                            backgroundColor: "transparent",
                            border: "none",
                            fontSize: 16,
                        }}
                        onClick={handleClose}
                    >
                        Sim
                    </ButtonModalYes>
                </Actions>
            </ContainerConfirm>
        </Overlay>,
        modalRoot,
    );
};
