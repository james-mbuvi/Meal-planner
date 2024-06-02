import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Preferences = () => {
  const [preferences, setPreferences] = useState({
    dietary_preference: [],
    dietary_restriction: [],
    cuisine_preference: [],
    meal_type_preference: [],
  });

  const handleCheckboxChange = (event, category) => {
    const { value, checked } = event.target;
    setPreferences((prevState) => ({
      ...prevState,
      [category]: checked
        ? [...prevState[category], value]
        : prevState[category].filter((item) => item !== value),
    }));
  };


  return (
    <div className="display-flex  dark:bg-dm text-dm dark:text-white ">
      <h1 className="text-center text-xl mb-6underline">
        MEAL PLAN PREFERENCES
      </h1>

      <div className=" ml-4 mb-6">
        <p>1. What is your dietery preferenes?</p>
        <div className="span my-2">
          <input
            type="checkbox"
            id="vegetarian"
            name="dietary_preference"
            value="vegetarian"
            className="mr-2"
            onChange={(e) => handleCheckboxChange(e, "dietary_preference")}
          />
          <label for="vegetarian" className="mr-5">
            Vegeterian
          </label>

          <input
            type="checkbox"
            id="Omnivore"
            name="dietary_preferance"
            value="Omnivore"
            className="mr-2"
            onChange={(e) => handleCheckboxChange(e, "dietary_preference")}
          />
          <label for="Omnivore" className="mr-5">
            Omnivore
          </label>
        </div>

        <div className="span my-2">
          <input
            type="checkbox"
            id="vegan"
            name="dietary_preference"
            value="vegan"
            className="mr-2"
            onChange={(e) => handleCheckboxChange(e, "dietary_preference")}
          />
          <label for="vegan" className="mr-5">
            Vegan
          </label>

          <input
            type="checkbox"
            id="Pascaterian"
            name="dietary_preferance"
            value="Pascaterian"
            className="mr-2"
            onChange={(e) => handleCheckboxChange(e, "dietary_preference")}
          />
          <label for="Pascaterian" className="mr-5">
            Pascaterian
          </label>
        </div>
      </div>

      <div className=" ml-4 mb-6">
        <p>2. Do you have any food allergies or dietary restrictions??</p>
        <div className="span my-2">
          <input
            type="checkbox"
            id="Gluten_free"
            name="dietary_restrictions"
            value="Gluten_free"
            className="mr-2"
            onChange={(e) => handleCheckboxChange(e, "dietary_restrictions")}
          />
          <label for="Gluten_free" className="mr-5">
            Gluten_free
          </label>

          <input
            type="checkbox"
            id="Nut_free"
            name="dietary_restrictions"
            value="Nut_free"
            className="mr-2"
            onChange={(e) => handleCheckboxChange(e, "dietary_restrictions")}
          />
          <label for="Nut_free" className="mr-5">
            Nut_free
          </label>
        </div>

        <div className="span my-2">
          <input
            type="checkbox"
            id="Dairy_free"
            name="dietary_restrictions"
            value="Dairy_free"
            className="mr-2"
            onChange={(e) => handleCheckboxChange(e, "dietary_restrictions")}
          />
          <label for="Dairy_free" className="mr-5">
            Dairy_free
          </label>

          <input
            type="checkbox"
            id="None"
            name="dietary_restrictions"
            value="None"
            className="mr-2"
            onChange={(e) => handleCheckboxChange(e, "dietary_restrictions")}
          />
          <label for="None" className="mr-5">
            None
          </label>
        </div>
      </div>

      <div className=" ml-4 mb-6">
        <p>3. Which cuisine do you prefer??</p>
        <div className="span my-2">
          <input
            type="checkbox"
            id="Mexican"
            name="cuisine_preference"
            value="Mexican"
            className="mr-2"
            onChange={(e) => handleCheckboxChange(e, "cuisine_preference")}
          />
          <label for="Mexican" className="mr-5">
            Mexican
          </label>

          <input
            type="checkbox"
            id="Asian"
            name="cuisine_preference"
            value="Asian"
            className="mr-2"
            onChange={(e) => handleCheckboxChange(e, "cuisine_preference")}
          />
          <label for="Asian" className="mr-5">
            Asian
          </label>
        </div>

        <div className="span my-2">
          <input
            type="checkbox"
            id="Mediterranean"
            name="cuisine_preference"
            value="Mediterranean"
            className="mr-2"
            onChange={(e) => handleCheckboxChange(e, "cuisine_preference")}
          />
          <label for="Mediterranean" className="mr-5">
            Mediterranean
          </label>

          <input
            type="checkbox"
            id="Kenyan"
            name="cuisine_preference"
            value="Kenyan"
            className="mr-2"
            onChange={(e) => handleCheckboxChange(e, "cuisine_preference")}
          />
          <label for="Kenyan" className="mr-5">
            Kenyan
          </label>
        </div>
      </div>

      <div className="ml-4 mb-6">
        <p>4. Which of the following meal preferences best describes you?</p>
        <div className="span my-2">
          <input
            type="checkbox"
            id="Prefers quick and easy meal"
            name="meal_type_preference"
            value="Prefers quick and easy meal"
            className="mr-2"
            onChange={(e) => handleCheckboxChange(e, "meal_type_preference")}
          />
          <label for="Prefers quick and easy meal" className="mr-5">
            Prefers quick and easy meal
          </label>

          <input
            type="checkbox"
            id="Needs meals that are kid-friendly"
            name="meal_type_preference"
            value="Needs meals that are kid-friendly"
            className="mr-2"
            onChange={(e) => handleCheckboxChange(e, "meal_type_preference")}
          />
          <label for="Needs meals that are kid-friendly" className="mr-5">
            Needs meals that are kid-friendly
          </label>
        </div>

        <div className="span my-2">
          <input
            type="checkbox"
            id="Enjoys cooking elaborate meals"
            name="meal_type_preference"
            value="Enjoys cooking elaborate meals"
            className="mr-2"
            onChange={(e) => handleCheckboxChange(e, "meal_type_preference")}
          />
          <label for="Enjoys cooking elaborate meals" className="mr-5">
            Enjoys cooking elaborate meals
          </label>

          <input
            type="checkbox"
            id="Require meals suitable for meal prep and batch cooking"
            name="meal_type_preference"
            value="Require meals suitable for meal prep and batch cooking"
            className="mr-2"
            onChange={(e) => handleCheckboxChange(e, "meal_type_preference")}
          />
          <label
            for="Require meals suitable for meal prep and batch cooking"
            className="mr-5"
          >
            Require meals suitable for meal prep and batch cooking
          </label>
        </div>
      </div>

      <div className="display-flex ml-24 justify-center my-8">
        <button className="bg-pickle p-6 py-3 rounded-xl">
          <Link to="/MyMealPlan">Submit</Link>
        </button>
      </div>
    </div>
  );
}
