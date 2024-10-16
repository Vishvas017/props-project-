import './App.css';
import Image  from './image';

function App() {
  return (
    <div className="App" >

      <Image src = "https://i.pinimg.com/736x/74/89/0d/74890d91e11373025d0d437490511acc.jpg"  height= {100} width = {100} title={"DEADPOOL"}></Image>
      <Image src = "https://preview.redd.it/describe-one-thing-you-like-most-about-wolverine-v0-2k6180mxnajb1.jpg?width=640&crop=smart&auto=webp&s=bb8a1cf53dfde39ba3e6f204a1bb6e09d5cc2653"  height= {100} width = {100} title={"Wolverine"}></Image>
      <Image src = "https://m.media-amazon.com/images/M/MV5BYWVjODZjNDgtYjk4ZS00OTg5LTg5NDQtZDMxZDQ4ZmM5MGJmXkEyXkFqcGc@._V1_.jpg"  height= {100} width = {100} title={"ben10"}></Image>

    </div>
  );
  
} 


export default App;