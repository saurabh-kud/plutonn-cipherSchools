
const get2AllComments = async(postId) => {
    
    const data = await comments.find({ postId } );

    const commentdata = data.length > 0 ? data.slice(0, 2);
    
    const getAllReply = await comments.find({ commentId: { $in: commentdata } });

    return getAllReply;




}

 


app.get("/post", (req, res) =.{
    const postId = req.query.id;
     

    const data = get2AllComments(postId);
    res.status(200).send(data);


     

})