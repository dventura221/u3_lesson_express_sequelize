const Router = require('express').Router()
const controller = require('../controllers/CommentController')
// You Do
// Implement Crud Operations For Comments
Router.get('/view/:comment_id', controller.GetCommentDetails)
Router.post('/:owner_id/:twert_id', controller.CreateComment)
Router.put('/:comment_id', controller.UpdateComment)
Router.delete('/:comment_id', controller.DeleteComment)
// You Do
module.exports = Router
