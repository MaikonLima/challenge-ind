import {
    ContainerEmpty,
    EmptyImageEmpty,
    TitleEmpty,
    DescriptionEmpty,
} from "./styles";
import emptyImage from "../../assets/empty.jpg";

export default function EmptyTable() {
    return (
        <ContainerEmpty>
            <EmptyImageEmpty src={emptyImage} width={200} />
            <TitleEmpty>Sem dados cadastrados!</TitleEmpty>
            <DescriptionEmpty>
                Clique no botão de Cadastrar para começar.
            </DescriptionEmpty>
        </ContainerEmpty>
    );
}
