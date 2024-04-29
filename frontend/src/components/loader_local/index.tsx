import {
    Box,
    CircularProgress,
    circularProgressClasses,
} from "@mui/material";
import { Container } from "./styles";
import { ILoaderLocalProps } from "./types";

export default function LoaderLocal({
    loading,
    width,
    size,
    height,
    ...props
}: ILoaderLocalProps) {
    if (loading) {
        return (
            <Container>
                <Box sx={{ position: "relative" }}>
                    <CircularProgress
                        variant="determinate"
                        sx={{
                            color: "#dddddd",
                        }}
                        size={size ? size : 100}
                        thickness={6}
                        {...props}
                        value={100}
                    />

                    <CircularProgress
                        disableShrink
                        variant="indeterminate"
                        sx={{
                            color: "#1976d2",
                            animationDuration: "650ms",
                            position: "absolute",
                            left: 0,
                            [`& .${circularProgressClasses.circle}`]:
                            {
                                strokeLinecap: "round",
                            },
                        }}
                        size={size ? size : 100}
                        thickness={6}
                        {...props}
                    />
                </Box>
            </Container>
        );
    }

    return null;
}
