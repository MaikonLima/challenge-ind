import { IGetUser } from "../../../services/UsersService";

export type TableModelsProps = {
  data: any[];
  totalPages: number;
  currentPage: number;
  pageSize?: number;

  onDetail: (item?: IGetUser) => void;
  onEdit: (item?: IGetUser) => void;
  onDelete: (item?: IGetUser) => void;

  onPageChange: (page: number) => void;
};
