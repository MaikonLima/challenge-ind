import { useState } from "react";
import Dashboard from "../dashboard";
import { Box, Tab, Tabs } from "@mui/material";
import { Container, DivTitle } from "./styles";
import { Title } from "../dashboard/styles";
import Users from "../users";
import { ModalLogout } from "../../components/modal_component/modal_logout";
import { CustomTabPanel, a11yProps } from "../../components/tab_component";
import { ModalAlert } from "../../components/alert_dialog_component";

export default function BasicTabs() {
    const [value, setValue] = useState(0);
    const [modalLogout, setModalLogout] = useState<any>(false);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    function handleCloseLogoutModal() {
        setModalLogout(false);
    }

    return (
        <Container >
            <ModalAlert
                open={modalLogout}
                isConfirm={true}
                title="Sair do sistemas?"
                content="Tem certeza que deseja sair do sistema?"
                handleClose={(result) => {
                    if (result) handleCloseLogoutModal();
                    setModalLogout(false);
                }}
            />
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1 }}>
                    <Tabs value={value} onChange={handleChange}>
                        <Tab label="Dashboard" {...a11yProps(0)} />
                        <Tab label="Usuários" {...a11yProps(1)} />
                        <Tab label="Logout" onClick={() => {
                            setModalLogout(true);
                        }} {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <DivTitle>
                        <Title>Dashboard</Title>
                    </DivTitle>
                    <Box sx={{ width: '100%', marginTop: .5 }}>
                        <Dashboard />
                    </Box>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <DivTitle>
                        <Title>Usuários</Title>
                    </DivTitle>
                    <Box sx={{ width: '100%', marginTop: .5 }}>
                        <Users />
                    </Box>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>

                </CustomTabPanel>
            </Box>
        </Container>
    );
}