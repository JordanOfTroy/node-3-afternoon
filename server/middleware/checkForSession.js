module.exports = (req, res, next) => {
  if (req.session.user) {
    next()
  } else {
    let user = {
      username: '',
      cart: [],
      total: 0.00
    }
    req.session.user =  user
    next()
  }
}