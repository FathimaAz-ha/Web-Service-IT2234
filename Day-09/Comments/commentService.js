const comments = require('./commentsdb')
const users = require('../User/usersdb')

function getComments(id)
{
    let result = []

    comments.forEach(comment => {
        if (comment.postId === id)
        {
            let commentator = users.find(user => user.id === comment.userId)
            result.push({
                commentator: commentator.fullName,
                comment: comment.content
            })
        }
    })

    return result;
}


module.exports = { getComments }