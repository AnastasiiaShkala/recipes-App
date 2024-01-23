# Recipe Finder App (Educational Project)

This React application, developed as part of an educational project, allows users to search for recipes based on ingredients. The application utilizes the Edamam API to fetch recipe data.

## Technologies Used

- React
- JavaScript
- CSS
- Edamam API

## How it Works

1. **API Key Setup**: The application requires an Edamam API key and ID for accessing recipe data. The key and ID are stored as constants `MY_ID` and `MY_KEY`.

2. **State Management with useState and useEffect**:
   - `mySearch`: Manages the input value for the recipe search.
   - `myRecipes`: Holds the recipe data fetched from the API.
   - `wordSubmitted`: Keeps track of the submitted word for the recipe search.

3. **Fetching Data with useEffect**:
   - The `useEffect` hook is employed to fetch recipe data from the Edamam API whenever the `wordSubmitted` state changes.
   - The `fetch` function is used to make an asynchronous call to the API endpoint.
   - The received data is converted to JSON, and the recipes are stored in the `myRecipes` state.

4. **Search and Form Handling**:
   - The search input field is controlled by the `mySearch` state.
   - The `myRecipeSearch` function updates the `mySearch` state based on the user's input.
   - The `finalSearch` function is triggered when the form is submitted, updating the `wordSubmitted` state.

5. **Video Playback Speed Adjustment**:
   - Another `useEffect` is used to adjust the playback speed of the background video when the component mounts.

6. **Rendering Components with map**:
   - The recipe data stored in `myRecipes` is mapped to individual `MyRecipesComponent` components using the `map` function.
   - Each component receives specific recipe details (label, URL, image, calories, and ingredient lines) as props.

## Components

### App Component (`App.js`)

- The main component that manages the overall structure and state of the application.
- Utilizes various hooks such as `useState` and `useEffect`.

### MyRecipesComponent (`MyRecipesComponent.js`)

- A reusable component responsible for rendering individual recipe details.
- Receives props such as label, URL, image, calories, and ingredient lines.


Feel free to customize and extend the application based on your requirements!

