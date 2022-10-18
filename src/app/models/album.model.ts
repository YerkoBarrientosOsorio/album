import { PhotoModel } from "./photo.model";

export class AlbumModel {
    constructor(
        public photos: PhotoModel[]
    ){}
}