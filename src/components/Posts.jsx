import Post from "./Post"

const Posts = (props) => {
    const postComponents = props.posts.map((post, index) => {
        return(
            <Post
                post={post}
                key={`post-${index}`}
            />
        )
    })
    return(
        <>
            {postComponents}
        </>
    )
}
export default Posts