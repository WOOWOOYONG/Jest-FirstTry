const fetchData = require('./async');

test('it should return a todo', async () => {
  const todo = await fetchData(1);
  expect(todo.id).toBe(1);
});
