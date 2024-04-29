import { DivMain, Formulario, TextMain } from "./styles";
import { useNavigate } from "react-router-dom";
import ButtonConponent from "../../components/buttom_component";
import { DefaultInput } from "../../components/input_component";
import { SubTitle } from "../dashboard/styles";
import usersImage from "../../assets/users_login.svg";
import { ChangeEvent, useEffect, useState } from "react";
import { useGlobalContext } from "../../context/AuthProvider/useGlobalContext";


export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [disableButton, setDisableButton] = useState(true);
    const navigate = useNavigate();


    const {
        loginMutation
    } = useGlobalContext();

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    function HandleLogin(event: React.FormEvent<HTMLDivElement>) {
        event.preventDefault();
        navigate("/home");
        return loginMutation({ username: username, password: password });
    }

    useEffect(() => {
        if (username !== '' && password !== '') {
            setDisableButton(false);
        } else {
            setDisableButton(true);
        }
    }, [username, password]);

    const goToHome = () => {
        navigate("/home");
    };

    return (
        <DivMain>
            <TextMain>
                <img src={usersImage} width={150} />
                <SubTitle>Bem-Vindo ao Sistema de Gerenciamento de Usuários</SubTitle>
            </TextMain>
            <Formulario onSubmit={() => HandleLogin}>
                <DefaultInput
                    type="text"
                    placeholder="E-mail"
                    value={username}
                    onChange={
                        (event: ChangeEvent<HTMLInputElement>) => setUsername(event.target.value)}
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
                        (event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}

                />
            </Formulario>
            <ButtonConponent
                onClick={() => goToHome()}
                variant="contained"
                value="Entrar"
                height="58px"
                type="submit"
            />
        </DivMain>
    )
}