import ReactDOM from "react-dom";
import { BoxName, Form, Overlay, PageActions, Title, Wrapper } from "../NewUser/styles";
import { ModalProps } from "../../../components/modal_component/types";
import { DefaultInput } from "../../../components/input_component";
import ButtonConponent from "../../../components/buttom_component";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import LoaderLocal from "../../../components/loader_local";
import { getUser } from "../../../services/UsersService";

export function ModalViewUsers({ keyId, closeModal, isModalActive }: any) {
    const modalRoot = document.getElementById("modal") as HTMLElement;
    const [id, setId] = useState<number | undefined>(0);
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [nivelAcess, setNivelAcess] = useState("");
    const [profile, setProfile] = useState<number>();

    const { data, isLoading, isFetching } = useQuery(
        ["keyId", id],
        () => getUser(id),
        {
            onSuccess: (dataOnSuccess) => {
                setName(dataOnSuccess?.users_name);
                setSurname(dataOnSuccess?.users_surname);
                setEmail(dataOnSuccess?.users_email);
                setNivelAcess(dataOnSuccess?.users_access_level)
                setProfile(dataOnSuccess?.user_profile_id);
            },

            keepPreviousData: false,
        },
    );
    console.log(profile)

    useEffect(() => {
        setId(keyId);
    }, [id, keyId]);

    function handleCloseModal() {
        closeModal();
    }

    if (!isModalActive) {
        return null;
    }

    if (!data || isFetching || isLoading) {
        return <LoaderLocal />;
    }

    function getAcessValue(value: any) {
        if (value === 1) {
            return "Ativo"
        }
        return "Inativo";
    }

    return ReactDOM.createPortal(
        <Overlay>
            <Wrapper>
                <Title>Visualização de usuário</Title>
                <Form>
                    <BoxName>
                        <DefaultInput disabled={true} label="Nome" value={name} width="100%"></DefaultInput>

                        <DefaultInput disabled={true} label="Sobrenome" value={surname} width="100%" />
                    </BoxName>
                    <DefaultInput disabled={true} label="E-mail" value={email} width="100%" />
                    <DefaultInput disabled={true} label="Status" value={getAcessValue(nivelAcess)} width="100%" />
                    <DefaultInput disabled={true} label="Perfil" value={profile === 1? "Usuário comum": "Administrador"} width="100%" />
                    <PageActions>
                        <ButtonConponent
                            variant="outlined"
                            width="150px"
                            value="Voltar"
                            onClick={() =>
                                handleCloseModal()
                            }
                        />
                    </PageActions>
                </Form>
            </Wrapper>
        </Overlay>,
        modalRoot);
};