 import { useState, useEffect } from 'react'
import { Days_of_the_week } from '../navbar/Days_of_the_week';
import { MealCard } from '../navbar/Mealcard';
import { Link } from 'react-router-dom';
export const Mealplanner = () => {

    const [meals, setMeals] = useState([]);
    const [error, setError] = useState(null);
    const [selectedDay, setSelectedDay] = useState(null);

    useEffect(() => {
        const fetchMeals = async () => {
            try {
                const response = await fetch("https://meal-planner-backend-t2sb.onrender.com/meal/");
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await response.json();
                setMeals(data);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchMeals();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    const daysOfWeek = ["MON", "TUE", "WED", "THUR", "FRI", "SAT", "SUN"];
    const handleDayClick = (day) => {
        setSelectedDay(day);
    };

    const mealTime = ["Morning", "Lunch", "Dinner"];
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Group meals by their time
    const mealsByTime = mealTime.reduce((acc, time) => {
        acc[time.toLowerCase()] = shuffle(meals.filter(meal => meal.time.toLowerCase() === time.toLowerCase()));
        return acc;
    }, {});

    // Distribute meals across days and times
    const mealsByDay = Array.from({ length: daysOfWeek.length }, (_, dayIndex) => {
        return mealTime.reduce((acc, time, timeIndex) => {
            const mealsForTime = mealsByTime[time.toLowerCase()];
            if (mealsForTime.length > 0) {
                const mealIndex = dayIndex % mealsForTime.length;
                acc[time.toLowerCase()] = [mealsForTime[mealIndex]];
            }
            return acc;
        }, {});
    });
    // Get meals for the selected day
    const filteredMeals = mealsByDay[selectedDay ? daysOfWeek.indexOf(selectedDay) : 0];

    return (
        <div className="dark:bg-dm text-dm dark:text-white pt-6">
            <h1 className="font-bold text-center text-4xl dark:text-pickle-lg underline underline-offset-8 font-serif">My Meal Plan</h1>
            <Days_of_the_week days={daysOfWeek} onClick={handleDayClick} />
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
                {mealTime.map(time => (
                    <div key={time} className='text-center '>
                        <h2 className='font-bold text-xl font-serif'>{time}</h2>
                        {filteredMeals[time.toLowerCase()] && filteredMeals[time.toLowerCase()].map((meal) => (
                            <MealCard key={meal.id} meal={meal} />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}