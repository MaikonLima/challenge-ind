import { useState } from "react";
import Dashboard from "../dashboard";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { Container, DivTitle } from "./styles";
import { Title } from "../dashboard/styles";
import Users from "../users";
import { ModalLogout } from "../../components/modal_component/modal_logout";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 1 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

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
            <ModalLogout
                title={"Logout do sistema"}
                isModalActive={modalLogout}
                closeModal={handleCloseLogoutModal}
            />
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1 }}>
                    <Tabs value={value} onChange={handleChange}>
                        <Tab label="Dashboard" {...a11yProps(0)} />
                        <Tab label="Usuários" {...a11yProps(1)} />
                        <Tab label="Logout" {...a11yProps(2)} />
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