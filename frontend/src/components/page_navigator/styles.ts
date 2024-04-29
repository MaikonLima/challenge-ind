import { IconButton } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: ${({ theme }: any) => theme.spacing.small};
`;

export const CurrentPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 36px;
  height: 36px;

  font-size: ${({ theme }: any) => theme.fonts.size.small};

  color: ${({ theme }: any) => theme.colors.text.default.light};
  border-radius: ${({ theme }: any) => theme.shapes.radius.small};
`;

export const Navigator = styled(IconButton)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 36px;
    height: 36px;

    background-color: ${({ theme }) => theme.colors.primary};

    border-radius: 50%;

    border: 2px solid #d9e1e7;
    opacity: 1;

    opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};
  }
`;

export const TotalPages = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fonts.size.small};
`;

export const Icon = styled.img`
  width: ${({ pagination }: any) => (pagination ? "7px" : "auto")};
  height: ${({ pagination }: any) => (pagination ? "12px" : "auto")};
`;
