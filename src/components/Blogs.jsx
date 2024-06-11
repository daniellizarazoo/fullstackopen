import { Fragment } from "react";

const Blog = ({blogs}) => {
    
        if(blogs.length>0){
            const blog = blogs.map((blog)=>{
                return(
                    <Fragment key={blog.id}>
                        <li key={blog.id} className="blog-item">
                        <h2 className="blog-title">{blog.title}</h2>
                        <p className="blog-author">Author: {blog.author}</p>
                        <a href={blog.url} className="blog-url" target="_blank" rel="noopener noreferrer">
                            {blog.url}
                        </a>
                        <p className="blog-likes">Likes: {blog.likes}</p>
                        </li>
                    </Fragment>
                )
            })
        
            return <ul>{blog}</ul>
        } else {
            return null
        }
    
}

export default Blog;