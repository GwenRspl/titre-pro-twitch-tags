import { Tag } from './tag.model';

export interface Channel {
    id: number;
    name: string;
    url: string;
    avatar: string;
    followers: number;
    partner: boolean;
    affiliate: boolean;
    //tags: Tag[];

}
