import ReactDOM from "react-dom";
import { BoxName, Form, Overlay, PageActions, Title, Wrapper } from "./styles";
import { DefaultInput } from "../../../components/input_component";
import { Select } from "../../../components/select_component";
import ButtonConponent from "../../../components/buttom_component";
import Api from "../../../services/api";
import { toast } from "react-toastify";
import { ChangeEvent, FormEvent, useState } from "react";
import { IErrors } from "../../../utils/errors-valitade";


export function ModalRegisterUser({ keyId, closeModal, isModalActive }: any) {
    const modalRoot = document.getElementById("modal") as HTMLElement;
    const [errors, setErrors] = useState<Array<IErrors>>([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState<any>();
    const [surname, setSurname] = useState<any>();
    const [password, setPassword] = useState<any>();
    const [showPassword, setShowPassword] = useState(false);

    const isFormValid =
        errors.length === 0 &&
        name &&
        email &&
        password

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    if (!isModalActive) {
        return null;
    }

    function handleCloseModal() {
        closeModal();
    }

    async function onSaveFields() {
        const body = {
            "users_status": true,
            "users_name": name,
            "users_surname": surname,
            "users_email": email,
            "users_password": password,
            "users_access_level": 0,
            "users_create_date": new Date(),

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
                            placeholder="Nome"
                            onChange={
                                (event: ChangeEvent<HTMLInputElement>) => setName(event.target.value)}
                        />


                        <DefaultInput
                            width="100%"
                            type="text"
                            placeholder="Sobrenome"
                            onChange={
                                (event: ChangeEvent<HTMLInputElement>) => setSurname(event.target.value)}
                        />
                    </BoxName>
                    <DefaultInput
                        width="100%"
                        type="email"
                        placeholder="E-mail"
                        onChange={
                            (event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
                    />
                    <DefaultInput
                        width="100%"
                        type="password"
                        placeholder="Senha"
                        showPassword={showPassword}
                        toggleShowPassword={
                            handleShowPassword
                        }
                        onChange={
                            (event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
                    />
                    <Select
                        width="100%"
                        placeholder="Nível de Acesso"
                        values={""}
                        currentValue={""}
                        onChangeValue={() => { }}
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