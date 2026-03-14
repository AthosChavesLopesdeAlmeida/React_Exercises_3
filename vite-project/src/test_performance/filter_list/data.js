const categories = ['Work', 'Personal', 'Health', 'Finance']

export const items = Array.from({ length: 200 }, (_, i) => ({
  id: i + 1,
  name: `Item ${i + 1}`,
  category: categories[i % categories.length]
}))