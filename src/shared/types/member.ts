import { Direction } from "../enums/common.enum";
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
    memberNick: string;
    memberPassword: string;
}

export interface MemberUpdateInput {
	memberNick?: string;
	memberPhone?: string;
	memberPassword?: string;
	memberAddress?: string;
	memberDesc?: string;
	memberImage?: string;
	memberExperience?: string;
	memberLinks?: string;
	memberLocation?: string;
	memberLessons?: string;
	memberArticles?: string;
  }

export interface TotalCounter {
	total: number;
}

export interface Members {
	list: Member[];
	metaCounter: TotalCounter[];
}

export interface MemberInquery {
	page: number;
	limit: number;
	sort?: string;
	search?: {
		text?: string;
	};
	direction?: Direction;
}



