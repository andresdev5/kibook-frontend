import { BookStatus } from "@app/enums/book-status.enum";
import { AuthorModel } from "./author.model";

export interface BookModel {
    id: number;
    title: string;
    isbn: string;
    imageUrl: string;
    synopsis: string;
    publisher: string;
    year: number;
    status: BookStatus;
    authors: AuthorModel[];
    genres: string[];
    createdAt: Date;
    updatedAt: Date;
}