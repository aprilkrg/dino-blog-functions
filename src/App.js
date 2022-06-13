import './App.css';
import Post from "../src/components/Post"

const posts = [
  {
    title: 'Dinosaurs are awesome',
    author: 'Stealthy Stegosaurus',
    body: 'Check out this body property!',
    comments: [
      'First!',
      'Second!',
      'Third!'
    ]
  }, 
  {
    title: 'Dinosaurs are neat',
    author: 'Mr. T-Rex',
    body: 'I pity the fool that doesn\'t think dinosaurs are neat!',
    comments: [
      'Wow!',
      'Amazing!',
      '🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥'
    ]
  }
]

const App = () => {
  const postComponents = posts.map((post, index) => {
    return(
        <Post
            post={post}
            key={`post-${index}`}
        />
    )
})
  return (
    <div className="App">
      <h1>Dinos Functional</h1>
      {postComponents}
    </div>
  );
}

export default App;
