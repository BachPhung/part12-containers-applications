const express = require('express');
const { Todo } = require('../mongo')
const redis = require('../redis')
const router = express.Router();

/* GET todos listing. */
router.get('/', async (_, res) => {
  const todos = await Todo.find({})
  res.send(todos);
});

router.get('/:id', async (req, res)=>{
  const id = req.params.id
  const todo = await Todo.findById(id);
  res.send(todo);
})

/* POST todo to listing. */
router.post('/', async (req, res) => {
  const todo = await Todo.create({
    text: req.body.text,
    done: false
  })
  const valueStr = await redis.getAsync("num_todos");
  const value = Number(valueStr) || 0;
  await redis.setAsync("num_todos", value + 1);
  res.send(todo);
});

const singleRouter = express.Router();

const findByIdMiddleware = async (req, res, next) => {
  const { id } = req.params
  req.todo = await Todo.findById(id)
  if (!req.todo) return res.sendStatus(404)

  next()
}

/* DELETE todo. */
singleRouter.delete('/', async (req, res) => {
  await req.todo.delete()  
  res.sendStatus(200);
});

/* GET todo. */
singleRouter.get('/', async (req, res) => {
  res.sendStatus(405); // Implement this
});

/* PUT todo. */
singleRouter.put('/:id', async (req, res) => {
  // res.sendStatus(405); // Implement this
  const body = req.body;
  const id = req.params.id;
  const newTodo = await Todo.findByIdAndUpdate(id, body, {new:true});
  res.send(newTodo);
});

router.use('/:id', findByIdMiddleware, singleRouter)


module.exports = router;
