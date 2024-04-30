import ButtonConponent from "../../components/buttom_component";
import { Container } from "./styles";

export function NotFound() {

    function goBack() {
        window.history.back();
    }

    return (
        <Container>
            <h1 style={{ fontSize: 64 }}>404</h1>
            <h2 style={{ fontSize: 32 }}>Página não encontrada</h2>
            <h4 style={{ fontSize: 32, paddingTop: 20 }}>
                Desculpe, não conseguimos encontrar a sua página!
            </h4>

            <ButtonConponent
                secondaryStyle
                value="Retornar"
                width="30%"
                height="66px"
                onClick={goBack}
            />
        </Container>
    );
}
