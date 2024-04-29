import { ApiProperty } from "@nestjs/swagger"

export class FilterPagination {

    @ApiProperty({ required: false, default: 1 })
    page: number;

    @ApiProperty({ required: false, default: 5 })
    limit: number;

    @ApiProperty({ required: false, default: 'DESC', enum: ['ASC', 'DESC'] })
    sort: string;

    orderBy: string;

    offset: number;
}