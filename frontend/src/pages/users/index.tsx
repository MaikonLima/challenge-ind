import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';
import { toast } from 'react-toastify';
import { ModalEditUser } from './EditUsers';
import { ModalViewUsers } from './ViewUsers';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { ITableHeader } from '../../components/table_component/types';
import Api from '../../services/api';
import Table from '../../components/table_component';
import { CrudActions, Filters, Footer, SpanCounterUser } from './styles';
import { SearchComponent } from '../../components/search_component';
import ButtonConponent from '../../components/buttom_component';
import AddIcon from '@mui/icons-material/Add';
import { ModalRegisterUser } from './NewUser';
import moment from 'moment';
import { ModalAlert } from '../../components/alert_dialog_component';
import EmptyTableImg from '../../assets/empty.jpg';
import { IGetUser } from '../../services/UsersService';
import { Pagination } from '../../components/page_navigator';

export default function Users() {
    const [searchParam, setSearchParam] = useState('');
    const [pageParam, setPageParam] = useState(1);
    const [userId, setUserId] = useState(0);
    const [activeEdit, setActiveEdit] = useState(false);
    const [activeView, setActiveView] = useState(false);
    const [active, setActive] = useState(false);
    const [openModalDelete, setOpenModalDelete] = useState(false);
    const [params, setParams] = useState({
        search_name: "",
    });

    const { data, isLoading, refetch } = useQuery(
        ['users', userId, searchParam, pageParam],
        () => {
            const params = new URLSearchParams();
            params.append('page', pageParam.toString());
            if (searchParam.length > 0) params.append('search_name', searchParam);
            params.append('limit', '5');
            params.append('orderBy', 'NAME');
            params.append('sort', 'ASC');

            return Api.get('users', { params });
        },
        {
            onSuccess: (dataOnSuccess) => {
                const currentPage =
                    dataOnSuccess?.data?.meta?.itemCount === 0 &&
                    dataOnSuccess?.data?.meta?.currentPage >
                    dataOnSuccess?.data?.meta?.totalPages;

                if (currentPage && pageParam !== 1) {
                    setPageParam(pageParam - 1);
                }
            },

            keepPreviousData: true,
            staleTime: 2000
        }
    );

    const headers: ITableHeader[] = [
        {
            key: 'users_name',
            value: "Nome",
            columnWidth: '25%'
        },

        {
            key: 'users_email',
            value: "E-mail",
            columnWidth: '25%'
        },

        {
            key: 'users_create_date',
            value: "Data de criação",
            columnWidth: '25%'
        },
    ];

    const tableData = data?.data?.items?.map((item: any) => {
        return {
            user_id: item?.user_id,
            users_name: item?.users_name,
            users_email: item?.users_email,
            users_create_date: moment(item?.users_create_date).format("DD/MM/YYYY")
        };
    });

    function handleEdit(user: IGetUser) {
        setUserId(user?.user_id);
        setActiveEdit(!activeEdit);
    }

    function handleView(user: IGetUser) {
        setUserId(user?.user_id);
        setActiveView(!activeView);
    }

    const handleDeleteUser = async () => {
        await Api.delete(`users/delete/${userId}`)
            .then(() => {
                refetch();
                toast.success("Usuário apagado com sucesso!");
            })
            .catch((error) => {
                const msg = error.response.data.message
                toast.error(msg);
            });
    };

    const onChangeSearch = (e: any) => {
        const { value } = e.target;

        setSearchParam(value);

        setParams((prev: any) => {
            return {
                ...prev,
                search_name: value,
            };
        });
    };

    return (
        <>
            <ModalRegisterUser
                isModalActive={active}
                closeModal={() => {
                    refetch();
                    setActive(!active);
                }}
            />

            <ModalViewUsers
                isModalActive={activeView}
                closeModal={() => {
                    refetch();
                    setActiveView(!activeView);
                }}
                keyId={userId}
            />

            <ModalEditUser
                isModalActive={activeEdit}
                closeModal={() => {
                    refetch();
                    setActiveEdit(!activeEdit);
                }}
                keyId={userId}
            />
            <ModalAlert
                open={openModalDelete}
                isConfirm={true}
                title="Excluir usuário?"
                content="Tem certeza que deseja excluir usuário?"
                handleClose={(result) => {
                    if (result) handleDeleteUser();
                    setOpenModalDelete(false);
                }}
            />
            <Filters>
                <CrudActions>

                    <SearchComponent
                        placeholder={"Busca de usuários"}
                        onChange={onChangeSearch}
                        value={searchParam}
                        width="300px"
                    />
                </CrudActions>

                <ButtonConponent icon={AddIcon} iconPosition={"StartIcon"} width="200px" value="Novo Usuário" onClick={() => setActive(true)} />
            </Filters>

            <Box>
                <Table
                    setUserId={setUserId}
                    headers={headers}
                    data={tableData}
                    enableActions
                    onEdit={handleEdit}
                    onDetail={handleView}
                    onDelete={() => {
                        setOpenModalDelete(true);
                    }}
                    emptyImage={searchParam.length > 0 ? EmptyTableImg : EmptyTableImg}
                    emptyMessage={searchParam.length > 0 ? "Sem usuários cadastrados" : "Refarça a busca"}
                    instruction={searchParam.length > 0 ? "" : "Instruções de usuários"}
                    loading={isLoading}
                    currentPage={data?.data.meta.currentPage}
                    totalPages={data?.data?.meta.totalPages}
                    onPageChanges={(page) => {
                        setPageParam(page);
                    }}
                />
                {data?.data.items.length > 0 && (
                    <>
                        <Pagination
                            totalData={
                                <>
                                    {data?.data.meta.totalItems > 0 ? (
                                        <SpanCounterUser style={{ color: "#0000008A" }}>
                                            Total de usuários: {data?.data.meta.totalItems}
                                        </SpanCounterUser>
                                    ) : null}
                                </>
                            }
                            currentPage={data?.data.meta.currentPage}
                            totalPages={data?.data?.meta.totalPages}
                            onPageChange={(page) => {
                                setPageParam(page);
                            }}
                        />
                    </>
                )}
            </Box>
        </>
    );
}


