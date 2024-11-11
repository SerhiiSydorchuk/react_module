import {IComment} from "./IComment";

export interface IPostWithComments {
	id: number;
	title: string;
	body: string;
	tags: string[];
	reactions: IPostReactions;
	views: number;
	userId: number;
	comments: IComment[];
}
export interface IPostReactions {
	likes: number;
	dislikes: number;
}