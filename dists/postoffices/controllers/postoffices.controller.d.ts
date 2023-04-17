import { PostofficesService } from '../services/postoffices.service';
import { CreatePostofficeDto } from '../dto/create-postoffice.dto';
import { UpdatePostofficeDto } from '../dto/update-postoffice.dto';
export declare class PostofficesController {
    private readonly postofficesService;
    constructor(postofficesService: PostofficesService);
    create(createPostofficeDto: CreatePostofficeDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePostofficeDto: UpdatePostofficeDto): string;
    remove(id: string): string;
}
