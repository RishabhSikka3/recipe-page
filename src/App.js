import React from "react";
import "./App.css";
import bannerImg from "./assets/images/image-omelette.jpeg";

const preparationSteps = [
  { label: "Total", time: "Approximately 10 minutes" },
  { label: "Preparation", time: "5 minutes" },
  { label: "Cooking", time: "5 minutes" },
];

const ingredients = [
  "2-3 large eggs",
  "Salt, to taste",
  "Pepper, to taste",
  "1 tablespoon of butter or oil",
  "Optional fillings: cheese, diced vegetables, cooked meats, herbs",
];

const instructions = [
  {
    title: "Beat the eggs",
    text: "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.",
  },
  {
    title: "Heat the pan",
    text: "Place a non-stick frying pan over medium heat and add butter or oil.",
  },
  {
    title: "Cook the omelette",
    text: "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.",
  },
  {
    title: "Add fillings (optional)",
    text: "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.",
  },
  {
    title: "Fold and serve",
    text: "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.",
  },
  {
    title: "Enjoy",
    text: "Serve hot, with additional salt and pepper if needed.",
  },
];

const nutrition = [
  { label: "Calories", value: "277kcal" },
  { label: "Carbs", value: "0g" },
  { label: "Protein", value: "20g" },
  { label: "Fat", value: "22g" },
];

function App() {
  return (
    <main className="container">
      <article className="card">
        <img src={bannerImg} alt="" className="banner-img" />
        <section className="content">
          <section className="title">
            <h1 className="heading-text">Simple Omelette Recipe</h1>
            <p className="description">
              An easy and quick dish, perfect for any meal. This classic
              omelette combines beaten eggs cooked to perfection, optionally
              filled with your choice of cheese, vegetables, or meats.
            </p>
          </section>
          <section className="preparation">
            <h2 className="text-semibold">Preparation time</h2>
            <ul>
              {preparationSteps.map((step, index) => (
                <li key={index}>
                  <strong>{step.label}:</strong> {step.time}
                </li>
              ))}
            </ul>
          </section>

          <section className="ingredients">
            <h2 className="sub-heading">Ingredients</h2>
            <ul>
              {ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <hr className="divider" />

          <section className="instructions">
            <h2 className="sub-heading">Instructions</h2>
            <ol>
              {instructions.map((step, index) => (
                <li key={index}>
                  <strong>{step.title}:</strong> {step.text}
                </li>
              ))}
            </ol>
          </section>

          <hr className="divider" />

          <section className="nutrition">
            <h2 className="sub-heading">Nutrition</h2>
            <p className="nutrition-description">
              The table below shows nutritional values per serving without the
              additional fillings.
            </p>
            <ul>
              {nutrition.map((item, index) => (
                <React.Fragment key={index}>
                  <li>
                    <span>{item.label}</span>
                    <span className="values">{item.value}</span>
                  </li>
                </React.Fragment>
              ))}
            </ul>
          </section>
        </section>
      </article>
    </main>
  );
}

export default App;
