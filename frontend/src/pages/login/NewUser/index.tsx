import { ChangeEvent, FormEvent, useState } from "react";
import { IErrors } from "../../../utils/errors-valitade";
import Api from "../../../services/api";
import { toast } from "react-toastify";
import { Form, useNavigate } from "react-router-dom";
import { BoxName, PageActions, Title, Wrapper } from "../../users/NewUser/styles";
import { DefaultInput } from "../../../components/input_component";
import ButtonConponent from "../../../components/buttom_component";
import { BoxForm } from "../styles";

export default function NewUserLogin() {
    const [errors, setErrors] = useState<Array<IErrors>>([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState<any>();
    const [surname, setSurname] = useState<any>();
    const [password, setPassword] = useState<any>();
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    async function onSaveFields() {
        const body = {
            "users_status": true,
            "users_name": name,
            "users_surname": surname,
            "users_email": email,
            "users_password": password,
            "users_access_level": 1,
            "users_create_date": new Date(),
            "user_profile_id": 1
        };

        await Api.post("users/new", body)
            .then(async (res) => {
                toast.success("Registro feito com sucesso!");
            })
            .catch((error) => {
                const msg = error.response.data.message;
                toast.error(msg);
            })
    }

    const isFormValid =
        errors.length === 0 &&
        name &&
        email &&
        password;

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        onSaveFields();
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    function redirectToLogin() {
        navigate('/');
    }

    return (
        <Wrapper>
            <div style={{ display: "flex", paddingLeft: "none"}}>
                <Title>Novo Usuário</Title>
            </div>
            <BoxForm component="form" onSubmit={() => handleSubmit}>
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

                <PageActions>
                    <ButtonConponent
                        variant="outlined"
                        value="Cancelar"
                        type="button"
                        width="150px"
                        onClick={() => {
                            redirectToLogin()
                        }}
                    />

                    <ButtonConponent
                        disabled={!isFormValid}
                        width="150px"
                        value="Cadastrar"
                    />
                </PageActions>
            </BoxForm>
        </Wrapper>
    );
}