import styled from "styled-components";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
    hidden: {
        x: 0,
        y: 0,
        scale: 0,
    },
    visible: {
        x: 0,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            type: "spring",
            bounce: 0.4,
        },
    },
};

export const Overlay = styled.div`
    z-index: 5;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(5px);
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ContainerConfirm = styled(motion.div).attrs(() => ({
    variants: containerVariants,
    initial: "hidden",
    animate: "visible",
}))`
    background: #fff;
    border-radius: 16px;
    width: 400px;
    box-shadow: 0px 3px 6px #0000001c;

    display: flex;
    flex-direction: column;
    padding: 20px 10px 10px 20px;

    text-align: center;

    .text-group {
        h1 {
            padding-bottom: 22px;
            font-size: 26px;
        }

        p {
            font-size: 16px;
        }
    }

    .close-icon {
        color: #737373;
        font-size: 1.2rem;
        border: 0;
        background-color: transparent;
        align-self: flex-end;

        border-radius: 50%;
        width: 10%;
        height: 10%;

        transition: background-color 0.2s ease;
    }
`;

export const ContainerEvaluation = styled(motion.div).attrs(() => ({
    variants: containerVariants,
    initial: "hidden",
    animate: "visible",
}))`
    background: #fff;
    border-radius: 4px;
    width: 603px;
    height: ${({ fullWidth }: any) => fullWidth && "100%"};
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 2px 26px;

    text-align: center;

    .text-group {
        margin-bottom: 28px;

        h1 {
            padding-bottom: 22px;
            font-size: 26px;
        }

        p {
            font-size: 16px;
        }
    }

    .close-icon {
        color: #737373;
        font-size: 1.2rem;
        border: 0;
        background-color: transparent;
        align-self: flex-end;

        border-radius: 50%;
        width: 10%;
        height: 10%;

        transition: background-color 0.2s ease;

        &:hover {
            background-color: #ccc;
        }
    }
`;

export const ContainerFinish = styled(motion.div).attrs(() => ({
    variants: containerVariants,
    initial: "hidden",
    animate: "visible",
}))`
    background: #fff;
    border-radius: 4px;
    width: 568px;
    height: 291px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 2px 26px;

    text-align: center;

    .text-group {
        margin-bottom: 20px;

        h1 {
            font-size: 26px;
        }
    }

    .close-icon {
        color: #737373;
        font-size: 1.2rem;
        border: 0;
        background-color: transparent;
        align-self: flex-end;
        flex-direction: row-reverse;
        justify-content: flex-start;
        align-items: flex-end;

        border-radius: 100%;
        width: 6%;
        height: 10%;

        transition: background-color 0.2s ease;

        &:hover {
            background-color: #ccc;
        }
    }
`;
export const ButtonModalNo = styled.button<any>`
    width: 5rem;
    height: 2rem;
    color: #ff9c1a;
    background-color: transparent;
    border: none;
    &:hover {
        background-color: #ff9c1a;
        opacity: 10;
    }
`;

export const ButtonModalYes = styled.button<any>`
    width: 5rem;
    height: 2rem;
    color: #ff9c1a;
    background-color: transparent;
    border: none;
`;

export const Actions = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
    margin-right: 12.5rem;
    margin-bottom: 10px;
`;

export const ActionsEvaluation = styled.div`
    display: flex;
    align-items: center;
    gap: 22px;
    margin-bottom: 18px;

    button {
        width: 160px;
    }
`;

export const ButtonClose = styled.button<any>`
    color: #d9e1e7;
    font-size: 1.2rem;
    border: 0;
    background-color: transparent;
    -webkit-align-self: flex-end;
    -ms-flex-item-align: end;
    align-self: flex-end;
    border-radius: 50%;
    width: 10%;
    height: 10%;
    -webkit-transition: background-color 0.2s ease;
    transition: background-color 0.2s ease;
`;

export const DivMain = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`;

export const divRight = styled.div``;
