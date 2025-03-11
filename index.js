const {initializeDatabase} = require("./db/db.connect.js");
const Post = require("./models/post.model.js");
const User = require("./models/user.model.js");

initializeDatabase();

const UserData = {
    name: "John Doe",
    email: "john@example.com",

}
const addUser = async() =>{
    try {
        const newUser = new User(UserData);
        await newUser.save();
        console.log("User added successfully");
    } catch (error) {
        console.error("Error adding user:", error);
    }
}

//addUser();


const PostData = {
    title: "My First Post",
    content: "Good Day.",
    author: "67d05a3fda84e835a3060e27"
};

const addPost = async() =>{
    try {
        const newPost = new Post(PostData);
        await newPost.save();
        console.log("Post added successfully");
    } catch (error) {
        console.log("Error adding post:", error);
    }
}

//addPost();

const getPosts = async() =>{
    try {
        const allPosts = await Post.find().populate("author");
        console.log("All Posts:", allPosts);
    } catch (error) {
        console.log("Error getting posts:", error);
    }
}

getPosts();