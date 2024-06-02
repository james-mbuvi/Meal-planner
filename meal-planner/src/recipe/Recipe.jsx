import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(`https://meal-planner-backend-t2sb.onrender.com/meal/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setRecipe(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="flex flex-col shadow-2xl dark:shadow-pickle rounded lg:flex-row gap-[20px]  m-5 dark:bg-dm text-dm dark:text-white px-5 pt-2 ">

      <div className="flex flex-col w-full">
        <div>
          <h1 className="text-5xl font-bold mb-4 dark:text-pickle-lg text-pickle-lg">{recipe.title}</h1>
          <h2 className="text-2xl font-bold mb-2">Ingredients:</h2>
          <ul className="list-disc list-inside mb-4 font-serif">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2">Recipe:</h2>
          <ol className="list-decimal list-inside mb-4 font-serif">
            {recipe.recipe.map((step, index) => (
              <li className="mb-3" key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
      <div className='flex flex-col w-full'>
        <div className="w-full h-1/2">
          <img src={recipe.image} alt={recipe.title} className="w-full h-full object-cover" />
        </div>
        <div className="bg-pickle-lg rounded-lg px-4 py-5 mt-2">
          <h2 className="text-2xl font-bold mb-2 mt-3">Nutritional Values</h2>

          <p className='text-xl '><span className="font-bold text-xl mr-5">Calories:</span> {recipe.nutrition.Calories}</p>
          <p className='text-xl'><span className="font-bold text-xl mr-20">Fat:</span> {recipe.nutrition.Fat}</p>
          <p className='text-xl'><span className="font-bold text-xl mr-12">Carbs:</span> {recipe.nutrition.Carbs}</p>
          <p className='text-xl'> <span className="font-bold text-xl mr-8">Protein:</span> {recipe.nutrition.Protein}</p>
        </div>
      </div>
    </div>
  );
};
