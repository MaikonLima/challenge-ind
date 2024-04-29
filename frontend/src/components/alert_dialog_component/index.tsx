import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles, createStyles } from "@material-ui/core";
import { AlertDialogProps } from "./types";
import ButtonConponent from "../buttom_component";

const useStyles = makeStyles(() =>
    createStyles({
        title: {
            textAlign: "center",
            fontWeight: "bold",
            padding: "1.5rem",
        },
        content: {
            width: "350px",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            fontFamily: ["sans-serif"].join(","),
            fontWeight: "lighter",
            fontSize: "16px",
        },
        actions: {
            display: "flex",
            justifyContent: "center",
            padding: "2rem",
        },
    })
);

export const ModalAlert = ({
    open,
    title,
    content,
    isConfirm,
    handleClose,
}: AlertDialogProps) => {
    const classes = useStyles();

    return (
        <Dialog open={open}>
            <DialogTitle className={classes.title}>
                <h2>{title}</h2>
            </DialogTitle>

            <DialogContent className={classes.content}>{content}</DialogContent>

            <DialogActions className={classes.actions}>
                <ButtonConponent
                    variant="outlined"
                    value={isConfirm ? "Cancelar" : "OK"}
                    onClick={() => handleClose && handleClose(false)}
                />
                {isConfirm && (
                    <ButtonConponent
                        value="Confirmar"
                        onClick={() => {
                            handleClose && handleClose(true);
                        }}
                    />
                )}
            </DialogActions>
        </Dialog>
    );
};
