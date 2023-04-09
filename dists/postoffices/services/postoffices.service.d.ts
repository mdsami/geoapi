import { CreatePostofficeDto } from '../dto/create-postoffice.dto';
import { UpdatePostofficeDto } from '../dto/update-postoffice.dto';
export declare class PostofficesService {
    create(createPostofficeDto: CreatePostofficeDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePostofficeDto: UpdatePostofficeDto): string;
    remove(id: number): string;
}
