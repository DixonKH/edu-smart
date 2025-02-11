import { Direction } from "../enums/common.enum";
import {
  MemberAuthType,
  MemberCategory,
  MemberStatus,
  MemberType,
} from "../enums/member.enum";

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
  memberEmail?: string;
  memberImage: string;
  memberAddress?: string;
  memberDesc?: string;
  memberExperience?: string;
  memberLocation?: string;
  memberLinks?: {
    telegram?: string;
    instagram?: string;
    youtube?: string;
  };
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
  memberEmail?: string;
  memberImage?: string;
  memberAddress?: string;
  memberDesc?: string;
  memberExperience?: string;
  memberLocation?: string;
  memberLinks?: {
    telegram?: string;
    instagram?: string;
    youtube?: string;
  };
  memberLessons?: string;
}

export interface LoginInput {
  memberNick: string;
  memberPassword: string;
}

export interface MemberUpdate {
  _id?: string;
  memberNick?: string;
  memberCategory?: MemberCategory;
  memberStatus?: MemberStatus;
  memberPhone?: string;
  memberFullName?: string;
  memberAddress?: string;
  memberDesc?: string;
  memberImage?: string;
  memberExperience?: string;
  memberLinks?: {
    telegram?: string;
    instagram?: string;
    youtube?: string;
  };
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
    memberType?: MemberType;
    memberStatus?: MemberStatus;
  };
  direction?: Direction;
}
