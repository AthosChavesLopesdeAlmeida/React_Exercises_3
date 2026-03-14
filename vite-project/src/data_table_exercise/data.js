const names = ['Alice', 'Bob', 'Carol', 'David', 'Eva', 'Frank', 'Grace', 'Henry', 'Iris', 'Jack']
const countries = ['Brazil', 'USA', 'Germany', 'Japan', 'France', 'Canada', 'Australia', 'India']
const statuses = ['Active', 'Inactive', 'Pending']

export const rows = Array.from({ length: 1000 }, (_, i) => ({
  id: i + 1,
  name: names[i % names.length],
  age: 20 + (i % 43),
  country: countries[i % countries.length],
  status: statuses[i % statuses.length]
}))