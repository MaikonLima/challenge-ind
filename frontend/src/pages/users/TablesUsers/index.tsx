
import { useEffect, useState } from "react";
import { TableModelsProps } from "./types";
import { ContainerWrapper, CurrentPage, NavigatorButton, PaginationContainer, PaginationWrapper, TableActions, TableContainer, TotalPages } from "./styles";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import EmptyTable from "../../../components/empty_table";
import moment from "moment";

export default function TableUsers({
    data,
    currentPage,
    totalPages,
    onPageChange,
    onEdit,
    onDetail,
    onDelete,
}: TableModelsProps) {
    const [actualPage, setActualPageModel] = useState(currentPage);

    useEffect(() => {
        setActualPageModel(currentPage);
    }, [currentPage]);

    function onNext() {
        setActualPageModel((prev) => {
            if (prev === totalPages) {
                return prev;
            }
            onPageChange && onPageChange(prev + 1);
            return prev + 1;
        });
    }

    function onPrevious() {
        setActualPageModel((prev) => {
            if (prev === 1) {
                return prev;
            }
            onPageChange && onPageChange(prev - 1);
            return prev - 1;
        });
    }

    return (
        <ContainerWrapper>
            <TableContainer>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Estatus</th>
                        <th>Data de criação</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((users, index) => (
                        <tr key={index}>
                            <td>{users.users_name} {users.users_surname}</td>
                            <td>{users.users_email}</td>
                            <td>{users.users_status === true ? "Ativo" : "Inativo"}</td>
                            <td>{moment(users.users_create_date).format("DD/MM/YYYY")}</td>
                            <td>
                                <TableActions>
                                    <button onClick={() => onDetail(users.user_id)}>
                                        <RemoveRedEyeIcon />
                                    </button>

                                    <button onClick={() => onEdit(users.user_id)}>
                                        <EditIcon />
                                    </button>

                                    <button onClick={() => onDelete(users.user_id)}>
                                        <DeleteIcon />
                                    </button>
                                </TableActions>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </TableContainer>

            {data?.length === 0 && <EmptyTable />}

            {data?.length > 0 && (
                <PaginationWrapper>
                    <PaginationContainer>
                        <NavigatorButton onClick={onPrevious}>
                            <ArrowBackIosIcon sx={{ color: "#0000008A", fontSize: 12 }} />
                        </NavigatorButton>

                        <CurrentPage>{actualPage}</CurrentPage>

                        <NavigatorButton onClick={onNext}>
                            <ArrowForwardIosIcon sx={{ color: "#0000008A", fontSize: 12 }} />
                        </NavigatorButton>

                        <TotalPages>de {totalPages}</TotalPages>
                    </PaginationContainer>
                </PaginationWrapper>
            )}
        </ContainerWrapper>
    );
};