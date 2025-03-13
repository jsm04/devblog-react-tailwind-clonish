import { faker } from '@faker-js/faker';
import { Article, Blog, DbRecord } from '../types';

export function createBlog(): DbRecord<Blog> {
	return {
		id: faker.database.mongodbObjectId(),
		profile: faker.image.avatar(),
		date: faker.date.recent().toISOString(),
		author: faker.person.fullName(),
		title: faker.lorem.lines(1),
		content: faker.lorem.paragraph(10)
	};
}

export function createFeed(): DbRecord<Article> {
	return {
		id: faker.database.mongodbObjectId(),
		profile: faker.image.avatar(),
		date: faker.date.recent().toISOString(),
		author: faker.person.fullName(),
		title: faker.lorem.lines(1),
		content: faker.lorem.paragraph(10),
		image: faker.image.url(),
		readTime: faker.number.int({ min: 1, max: 99 }).toString(),
		tag: faker.word.noun()
	};
}

export const GenerateFakeBlogs = () => Array.from({ length: 10 }, () => createBlog());
export const GenerateFakeFeed = () => Array.from({ length: 10 }, () => createFeed());

console.log(JSON.stringify(GenerateFakeFeed()));
