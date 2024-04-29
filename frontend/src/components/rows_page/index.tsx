import { MenuItem, ThemeProvider, Typography } from "@mui/material";
import { SelectMUI } from "./styles";
import { RowsPageProps } from "./types";
import { muiThemeDefault } from "../../styles/themes/materialUI";

function RowsPerPage({ limits, initial, onChange }: RowsPageProps) {
    return (
        <ThemeProvider theme={muiThemeDefault}>
            <Typography variant="subtitle2" color="initial">
                Itens por página:
            </Typography>

            <SelectMUI id="currentPage" value={initial} onChange={onChange}>
                {limits?.map((page, index) => (
                    <MenuItem value={page} key={index}>
                        {page}
                    </MenuItem>
                ))}
            </SelectMUI>
        </ThemeProvider>
    );
}

export default RowsPerPage;
