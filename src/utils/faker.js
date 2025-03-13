import { faker } from '@faker-js/faker';

console.log(generate(30, createFeed));

function generate(amount = 1, fn) {
	const data = [];

	let idx = 0;

	while (idx < amount) {
		data.push(fn());
		idx++;
	}

	return amount > 1 ? data : data[0];
}

function createBlog() {
	return {
		profile: faker.image.avatar(),
		date: new Date(faker.date.recent()),
		author: faker.name.fullName(),
		title: faker.lorem.lines(1),
		content: faker.lorem.paragraph(10)
	};
}
function createFeed() {
	return {
		profile: faker.image.avatar(),
		date: new Date(faker.date.recent()),
		author: faker.name.fullName(),
		title: faker.lorem.lines(1),
		image: faker.image.image(),
		content: faker.lorem.paragraph(10),
		readTime: faker.random.numeric(2),
		tag: faker.random.word()
	};
}
