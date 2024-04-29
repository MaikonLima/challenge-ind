import React from "react";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import { Container, CurrentPage, Icon, Navigator, TotalPages } from "./styles";
import { PageNavigatorProps } from "./types";

function PageNavigator({
    currentPage,
    gobackPage,
    nextPage,
    qtdPages,
}: PageNavigatorProps) {
    return (
        <Container>
            <Navigator disabled={currentPage <= 1} onClick={gobackPage}>
                <ArrowBackIosIcon sx={{ color: "#0000008A", fontSize: 12 }} />
            </Navigator>

            <TotalPages>
                {"Página"} {currentPage} {"de"} {qtdPages}
            </TotalPages>

            <Navigator disabled={currentPage >= qtdPages} onClick={nextPage}>
                <ArrowForwardIosIcon sx={{ color: "#0000008A", fontSize: 12 }} />
            </Navigator>
        </Container>
    );
}

export default PageNavigator;
