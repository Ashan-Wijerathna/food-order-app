// 
import React,{useState} from 'react';
import useHttp from '../hooks/useHttp.js';
import MealItem from './MealItem.jsx';
import Error from './Error.jsx';

const requestConfig ={};

export default function Meals() {
  const {
    data:jloadedMeals,
    isLoading,
    error,
  }=useHttp ('http://loaclhost:3000/meals',requestConfig,[] );
  const [loadedMeals, setLoadedMeals] = useState([]);

  if (isLoading){
    return<p className="center">Fetching meals...</p>;
  }

  if (error){
    return <Error title="Failed to fetch meals" message={error}/>;
  }

  // useEffect(() => {
  //   async function fetchMeals() {
  //     const response = await fetch('http://localhost:3000/meals');

  //     if (!response.ok) {
  //       // ...
  //     }

  //     const meals = await response.json();
  //     setLoadedMeals(meals);
  //   }

  //   fetchMeals();
  // }, []);

  return (
    <ul id= "meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}