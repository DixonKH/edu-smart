import { LessonCategory, LessonLevel, LessonStatus } from "../enums/lesson.enum";

export interface Lessons {
	lessonCategory: LessonCategory;
	lessonStatus: LessonStatus;
	lessonTittle: string;
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

export interface LessonInput {
    lessonCategory: LessonCategory;
    lessonLevel: LessonLevel;
    lessonTitle: string;
    lessonDesc: string;
    lessonVideo: string;
}

export interface LessonUpdate {
    lessonCategory?: LessonCategory;
    lessonLevel?: LessonLevel;
    lessonTitle?: string;
    lessonDesc?: string;
    lessonVideo?: string;
}