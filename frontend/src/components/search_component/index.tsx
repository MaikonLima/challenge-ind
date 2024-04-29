import searchIcon from "../../assets/icon_search.svg";
import { Input, SearchIcon } from "./styles";

export function SearchComponent({ onChange, value, ...rest }: any) {
    return (
        <>
            <Input onChange={onChange} value={value} {...rest} />
            <SearchIcon src={searchIcon} />
        </>
    );
}
