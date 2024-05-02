import React, { ChangeEvent, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Overlay } from "../../../components/modal_component/styles";
import { BoxName, Form, PageActions, Title, Wrapper } from "../NewUser/styles";
import { DefaultInput } from "../../../components/input_component";
import { Select } from "../../../components/select_component";
import ButtonConponent from "../../../components/buttom_component";
import { useQuery } from "react-query";
import { getUser } from "../../../services/UsersService";
import LoaderLocal from "../../../components/loader_local";
import Api from "../../../services/api";
import { toast } from "react-toastify";
import { IErrors } from "../../../utils/errors-valitade";
import { IRole } from "../../../utils/types";


export function ModalEditUser({ keyId, closeModal, isModalActive }: any) {
    const modalRoot = document.getElementById("modal") as HTMLElement;
    const [id, setId] = useState<number | undefined>(0);
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState<Array<IErrors>>([]);
    const [perfil_id, setPerfilId] = useState();
    const [type, setType] = useState<any>();
    const [accessLevel, setAccessLevel] = useState();
    console.log(accessLevel)

    const opcoes: IRole[] = [
        { id: 1, value: "Usuário" },
        { id: 2, value: "Administrador" },
    ];

    const { data, isLoading, isFetching, refetch } = useQuery(
        ["keyId", id],
        () => getUser(id),
        {
            onSuccess: (dataOnSuccess) => {
                setName(dataOnSuccess?.users_name);
                setSurname(dataOnSuccess?.users_surname);
                setEmail(dataOnSuccess?.users_email);
                setAccessLevel(dataOnSuccess?.user_profile_id);
            },

            keepPreviousData: false,
        },
    );

    const isFormValid =
        errors.length === 0 &&
        name?.trim().length >= 5 &&
        (name !== data?.users_name ||
            email !== data?.users_email || surname !== data?.users_surname || perfil_id !== data?.user_profile_id
        );

    useEffect(() => {
        setId(keyId);
    }, [id, keyId]);

    async function onEditUser() {
        const usersPayload = {
            "users_status": true,
            "users_name": name,
            "users_surname": surname,
            "users_email": email,
            "user_profile_id": type
        };

        await Api.put(`users/${keyId}`, usersPayload)
            .then(async () => {
                toast.success("Registro editado com sucesso!");
            })
            .catch((error) => {
                const msg = error.response.data.message;
                toast.error(msg);
            }
            )
    }

    async function handleSubmit(event: any) {
        event.preventDefault();
        onEditUser();
        refetch();
        handleCloseModal();
    }

    if (!isModalActive) {
        return null;
    }

    if (!data || isFetching || isLoading) {
        return <LoaderLocal />;
    }

    function handleCloseModal() {
        closeModal();
    }

    function handleChange(value: any) {
        setType(value);
    }

    function getProfile(value: any) {
        if (value === 1) {
            return "Usuário"
        } else {
            return "Administrador"
        }
    }

    return ReactDOM.createPortal(
        <Overlay>
            <Wrapper>
                <Title>Edição de Usuário</Title>
                <Form
                    autoComplete="off"
                    onSubmit={handleSubmit}
                >
                    <BoxName>
                        <DefaultInput
                            width="100%"
                            type="text"
                            placeholder="Nome"
                            value={name}
                            onChange={(event: ChangeEvent<HTMLInputElement>,) => setName(event.target.value)}
                        />
                        <DefaultInput
                            width="100%"
                            type="text"
                            placeholder="Sobrenome"
                            value={surname}
                            onChange={(event: ChangeEvent<HTMLInputElement>,) => setSurname(event.target.value)}
                        />
                    </BoxName>

                    <DefaultInput
                        width="100%"
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={(event: ChangeEvent<HTMLInputElement>,) => setEmail(event.target.value)}
                    />
                    <Select
                        width="100%"
                        id="types"
                        label="Nível de Acesso"
                        required
                        placeholder="Nível de Acesso"
                        value={getProfile(accessLevel)}
                        values={opcoes}
                        currentValue={perfil_id}
                        onChangeValue={handleChange}
                    />
                    <PageActions>
                        <ButtonConponent
                            variant="outlined"
                            value="Cancelar"
                            type="button"
                            width="150px"
                            onClick={() =>
                                handleCloseModal()
                            }
                        />

                        <ButtonConponent
                            disabled={!isFormValid}
                            onClick={handleSubmit}
                            value="Salvar"
                            width="150px"
                        />
                    </PageActions>
                </Form>
            </Wrapper>
        </Overlay>,
        modalRoot
    );
}