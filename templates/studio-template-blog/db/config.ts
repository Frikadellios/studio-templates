import { NOW, column, defineDb, defineTable } from 'astro:db';

const Blog = defineTable({
	columns: {
		id: column.number({ primaryKey: true }),
		title: column.text(),
		description: column.text(),
		slug: column.text({ optional: true }),
		publishedAt: column.date({ default: NOW }),
		updatedAt: column.date({ optional: true }),
		heroImage: column.text({
			default: '/blog-placeholder-1.jpg',
		}),
		content: column.text({ multiline: true }),
	},
});

// https://astro.build/db/config
export default defineDb({
	tables: {
		Blog,
	},
});
