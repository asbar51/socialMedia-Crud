import postMessage from "../models/posts.js"

export const getForm = async (req,res) => {
    try {
        const showPosts = await postMessage.find() 
        console.log(showPosts)
        res.status(200).json(showPosts)
    } catch (error) {
        
        res.status(404).json({message: error.message})
    }
}
export const postForm = async (req,res) => {
    const formBody = req.body;
    const newPost = new postMessage(formBody)
    try {
        await newPost.save()
        res.status(201)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}