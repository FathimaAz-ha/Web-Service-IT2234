const users = require('./usersdb')
const posts = require('../BlogPosts/postsdb')
const comments = require('../Comments/commentsdb')

function getUserdetails(){
    return users
}

function getCountPost(id){
    
    let postCount = posts.filter(post => post.authorId === id).length
    return postCount

    
}

function getCountComments(id){
    
    let commentCount = comments.filter(comment => comment.userId === id).length
    return commentCount

}

function getUserSummary(id){
    const result = users.find((user) => user.id == id)
  
    result['Number of Posts'] = getCountPost(id) 
    result['Number of Comments'] = getCountComments(id) 
    
    return result
}


module.exports={getUserdetails,getUserSummary,getCountPost,getCountComments}