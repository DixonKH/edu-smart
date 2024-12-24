import { MemberAuthType, MemberCategory, MemberStatus, MemberType } from "../enums/member.enum";

export interface Member {
	_id: string;
	memberType: MemberType;
	memberStatus: MemberStatus;
	memberAuthType: MemberAuthType;
	memberCategory?: MemberCategory;
	memberPhone: string;
	memberNick: string;
	memberPassword?: string;
	memberFullName?: string;
	memberImage: string;
	memberAddress?: string;
	memberDesc?: string;
	memberExperience?: string;
	memberLocation?: string;
	memberLinks?: string;
	memberLessons?: string;
	memberArticles?: string;
	deletedAt: Date;
	createdAt: Date;
	accessToken?: string;
}

export interface TotalCounter {
	total: number;
}

export interface Members {
	list: Member[];
	metaCounter: TotalCounter[];
}

export interface MemberInput {
    memberType?: MemberType;
    memberAuthType?: MemberAuthType;
    memberCategory?: MemberCategory;
    memberPhone: string;
    memberNick: string;
    memberPassword: string;
    memberFullName?: string;
    memberImage?: string;
    memberAddress?: string;
    memberDesc?: string;
    memberExperience?: string;
    memberLocation?: string;
    memberLinks?: string;
    memberLessons?: string;
}

export interface LoginInput {
    memberPhone: string;
    memberPassword: string;
}


