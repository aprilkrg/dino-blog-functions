import './App.css';
import Posts from "../src/components/Posts"

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
  return (
    <div className="App">
      <h1>Dinos Functional</h1>
      <Posts 
        posts={posts}
      />
    </div>
  );
}

export default App;
