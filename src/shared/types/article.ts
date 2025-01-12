import { BoardArticleCategory, BoardArticleStatus } from "../enums/article.enum";
import { Direction } from "../enums/common.enum";
import { TotalCounter } from "./member";

export interface BoardArticle {
	_id: string;
	articleCategory: BoardArticleCategory;
	articleStatus: BoardArticleStatus;
	articleTitle: string;
	articleContent: string;
	articleImage?: string;
	articleViews: number;
	articleLikes: number;
	articleComments: number;
	memberId: string;
	createdAt: Date;
	updatedAt: Date;

	/** from aggregation **/
	
	// meLiked?: MeLiked[];
	// memberData?: Member;
}

export interface BoardArticles {
	list: BoardArticle[];
	metaCounter: TotalCounter[];
}

export interface BoardArticleInput {
    articleCategory: BoardArticleCategory;
    articleTitle: string;
    articleContent: string;
    articleImage?: string | File;
    memberId: string;
    createdAt?: Date;
    updatedAt?: Date;

}

export interface BAISearch {
    articlecategory: BoardArticleCategory;
    text?: string;

}

export interface BoardArticleInquiry {
    page: number;
    limit: number;
    sort?: string;
    search?: BAISearch;
    direction?: Direction;
}

export interface ABAISearch {
    articleStatus?: BoardArticleStatus;
    articlecategory?: BoardArticleCategory;
}

export interface AllBoardArticleAdminInquiry {
    page: number;
    limit: number;
    sort?: string;
    search?: ABAISearch;
    direction?: Direction;
}

export interface BoardArticleUpdate {
    _id: string;
    articleCategory?: BoardArticleCategory;
    articleStatus?: BoardArticleStatus;
    articleTitle?: string;
    articleContent?: string;
    articleImage?: string;
}