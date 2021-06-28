const echo = async ctx => {
  ctx.body = '这是一段文字...';
}

const parseParams = async ctx => {
  console.log(ctx.request.files);
  ctx.body = ctx.request.body;
}

const print = async ctx => {
  const { name } = ctx.request.query;
  ctx.body = '打印姓名: ' + name;
}

module.exports = {
  echo,
  parseParams,
  print
}
