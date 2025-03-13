export type Article = {
	profile: string;
	author: string;
	title: string;
	image: string;
	content: string;
	readTime: string;
	tag: string;
};

export type Blog = {
	profile: string;
	author: string;
	title: string;
	date: string;
	content: string;
};

export type DbRecord<T> = T & {
	id: string;
	date: string;
};

