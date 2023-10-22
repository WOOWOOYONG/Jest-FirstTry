const fetchData = require('./async');
const axios = require('axios')

test('it should return a todo', async () => {
  const todo = await fetchData(1);
  expect(todo.id).toBe(1);
});

test('mock axios', async () => {
  const spy = jest.spyOn(axios, 'get').mockReturnValueOnce({
    data: {
      id: 1,
      todo: 'Do Homework!',
    },
  });
  const res = await fetchData(1);
  expect(res.todo).toBe('Do Homework!');
  spy.mockRestore();
});