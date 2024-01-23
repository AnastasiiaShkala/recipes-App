import { useEffect, useState } from 'react';
import './App.css';
import video from './assets/cookbook.mp4';
import MyRecipesComponent from './MyRecipesComponent';
import recipeSearch from './assets/recipe-search.png';


function App() {
  const MY_ID="033955dc";
  const MY_KEY="fb4854bd88eeb3ea5a03288d9c2ef87f";

  const [mySearch, setMySearch] = useState('');
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState('tomato');

  useEffect(() => {
    const getRecipe = async () => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
      const data = await response.json();
      console.log(data)
      setMyRecipes(data.hits);
    }
    getRecipe()
  }, [wordSubmitted])

  const myRecipeSearch = (e) => {
    setMySearch(e.target.value)
  }

  const finalSearch = (e) => {
    e.preventDefault()
    setWordSubmitted(mySearch)
  }
  useEffect(() => {
    const videoElement = document.querySelector('video');
    if (videoElement) {
      videoElement.playbackRate = 0.2;
    }
  }, []);

  return (
   
    
  <div className="App">

<div className='container'>
    <h1>Find a Recipe</h1>
    </div>
    
    <div className='container'>
     <form onSubmit={finalSearch}>
         <input className='search' onChange={myRecipeSearch} value={mySearch}/>
     </form>
    </div>

    <div className='container'>
     <button onClick={finalSearch}>
         <img src={recipeSearch} width='84px' alt="icon"/>
     </button>
    </div>
<div className="container">
     <video autoPlay muted loop>
     <source src={video} type="video/mp4" />
     </video>
     
    </div>

   
    {myRecipes.map((element, index) => (
      <MyRecipesComponent key={index}
      label={element.recipe.label} 
      url={element.recipe.url}       
      image={element.recipe.image} 
      calories={element.recipe.calories} 
      ingredientLines={element.recipe.ingredientLines}/>    
    ))}
    
</div>


  );
}

export default App;
