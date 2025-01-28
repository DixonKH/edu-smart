import { Direction } from "../enums/common.enum";
import { LessonCategory, LessonLevel, LessonStatus } from "../enums/lesson.enum";
import { TotalCounter } from "./member";

export interface Lesson {
	lessonCategory: LessonCategory;
	lessonLevel: LessonLevel;
	lessonStatus: LessonStatus;
	lessonTitle: string;
	lessonDesc: string;
	lessonViews: number;
	lessonLikes: number;
	lessonComments: number;
	memberId: string;
	createdAt: Date;
	updatedAt: Date;

	/** from aggregation **/
	// meLiked?: MeLiked[];
	// memberData?: Member;
}

export interface Lessons {
	list: Lesson[];
	metaCounter: TotalCounter[];
}

export interface LessonInput {
    lessonCategory: LessonCategory;
    lessonLevel: LessonLevel;
    lessonTitle: string;
    lessonDesc: string;
    lessonVideo?: string | File;
}

export interface LessonUpdate {
    lessonCategory?: LessonCategory;
	lessonStatus?: LessonStatus;
    lessonLevel?: LessonLevel;
    lessonTitle?: string;
    lessonDesc?: string;
    lessonVideo?: string;
}

export interface Lessons {
	list: Lesson[];
	metaCounter: TotalCounter[];
}

export interface LessonSearch {
    text?: string;
}

export interface LessonInquiry {
	page: number;
	limit: number;
	sort?: string;
	search?: LessonSearch;
	direction?: Direction;
}

export interface ABLSSearch {
	text?: string;
    lessonStatus?: LessonStatus;
    lessonCategory?: LessonCategory;
}

export interface AllLessonAdminInquiry {
	page: number;
	limit: number;
	sort?: string;
	search?: ABLSSearch;
	direction?: Direction;
}

