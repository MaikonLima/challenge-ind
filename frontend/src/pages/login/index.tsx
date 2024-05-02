import { BoxForm, DivMain, TextMain } from "./styles";
import ButtonConponent from "../../components/buttom_component";
import { DefaultInput } from "../../components/input_component";
import { SubTitle } from "../dashboard/styles";
import usersImage from "../../assets/users_login.svg";
import { FormEvent, useState } from "react";
import { useGlobalContext } from "../../context/AuthProvider/useGlobalContext";
import { useNavigate } from "react-router-dom";
import { IErrors } from "../../utils/errors-valitade";

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState<Array<IErrors>>([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const {
        loginMutation,
    } = useGlobalContext();

    const isFildValid =
        errors.length === 0 && email && password;


    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    
    async function HandleLogin(event: FormEvent<HTMLDivElement>) {
        event.preventDefault();
        loginMutation({ email: email, password: password });
        navigate('/home');
    }

    return (
        <DivMain>
            <TextMain>
                <img src={usersImage} width={150} />
                <SubTitle>Bem-Vindo ao Sistema de Gerenciamento de Usuários</SubTitle>
            </TextMain>
            <BoxForm component="form" onSubmit={HandleLogin}>
                <DefaultInput
                    type="text"
                    placeholder="E-mail"
                    value={email}
                    onChange={
                        (e) => setEmail(e.target.value)}
                />

                <DefaultInput
                    value={password}
                    type="password"
                    placeholder="Password"
                    showPassword={showPassword}
                    toggleShowPassword={
                        handleShowPassword
                    }
                    onChange={
                        (e) => setPassword(e.target.value)}

                />

                <ButtonConponent
                    disabled={!isFildValid}
                    variant="contained"
                    value="Entrar"
                    height="58px"
                    type="submit"
                />
            </BoxForm>
        </DivMain>
    )
}