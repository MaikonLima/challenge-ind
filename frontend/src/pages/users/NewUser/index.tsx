import ReactDOM from "react-dom";
import { BoxName, Form, Overlay, PageActions, Title, Wrapper } from "./styles";
import { DefaultInput } from "../../../components/input_component";
import { Select } from "../../../components/select_component";
import ButtonConponent from "../../../components/buttom_component";
import Api from "../../../services/api";
import { toast } from "react-toastify";
import { ChangeEvent, FormEvent, useState } from "react";
import { IErrors } from "../../../utils/errors-valitade";
import { IRole } from "../../../utils/types";


export function ModalRegisterUser({ keyId, closeModal, isModalActive }: any) {
    const modalRoot = document.getElementById("modal") as HTMLElement;
    const [errors, setErrors] = useState<Array<IErrors>>([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState<any>();
    const [surname, setSurname] = useState<any>();
    const [password, setPassword] = useState<any>();
    const [showPassword, setShowPassword] = useState(false);
    const [type, setType] = useState<any>();

    const opcoes: IRole[] = [
        { id: 1, value: "Usuário" },
        { id: 2, value: "Administrador" },
    ];

    const isFormValid =
        errors.length === 0 &&
        name &&
        email &&
        password && type;

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    if (!isModalActive) {
        return null;
    }

    function handleCloseModal() {
        closeModal();
    }

    function handleChange(value: any) {
        setType(value);
    }

    async function onSaveFields() {
        const body = {
            "users_status": true,
            "users_name": name,
            "users_surname": surname,
            "users_email": email,
            "users_password": password,
            "users_access_level": 1,
            "users_create_date": new Date(),
            "user_profile_id": type?.id
        };

        await Api.post("users", body)
            .then(async (res) => {
                toast.success("Dados salvos com sucesso!");
                handleCloseModal();
            })
            .catch((error) => {
                const msg = error.response.data.message;
                toast.error(msg);
            })
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        onSaveFields();
    }

    return ReactDOM.createPortal(
        <Overlay>
            <Wrapper>
                <Title>Novo Usuário</Title>
                <Form onSubmit={handleSubmit}>
                    <BoxName>
                        <DefaultInput
                            width="100%"
                            type="text"
                            label="Nome"
                            placeholder="Nome"
                            onChange={
                                (event: ChangeEvent<HTMLInputElement>) => setName(event.target.value)}
                        />


                        <DefaultInput
                            width="100%"
                            type="text"
                            placeholder="Sobrenome"
                            label="Sobrenome"
                            onChange={
                                (event: ChangeEvent<HTMLInputElement>) => setSurname(event.target.value)}
                        />
                    </BoxName>
                    <DefaultInput
                        width="100%"
                        type="email"
                        placeholder="E-mail"
                        label="E-mail"
                        onChange={
                            (event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
                    />
                    <DefaultInput
                        width="100%"
                        type="password"
                        placeholder="Senha"
                        label="Senha"
                        showPassword={showPassword}
                        toggleShowPassword={
                            handleShowPassword
                        }
                        onChange={
                            (event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
                    />

                    <Select
                        width="100%"
                        id="types"
                        label="Nível de Acesso"
                        required
                        placeholder="Nível de Acesso"
                        values={opcoes}
                        currentValue={type}
                        onChangeValue={handleChange}
                    />
                    <PageActions>
                        <ButtonConponent
                            variant="outlined"
                            value="Cancelar"
                            type="button"
                            width="150px"
                            onClick={() => {
                                handleCloseModal()
                            }}
                        />

                        <ButtonConponent
                            disabled={!isFormValid}
                            type="submit"
                            width="150px"
                            value="Cadastrar"
                        />
                    </PageActions>
                </Form>
            </Wrapper>
        </Overlay>,
        modalRoot
    )
}