async function findSubstitute() {
  console.log("Button clicked! findSubstitute function called.");

  const ingredientInput = document.getElementById('ingredientInput').value.trim().toLowerCase();
  const resultDiv = document.getElementById('result');

  try {
    const response = await fetch('ingredients.txt');
    const textData = await response.text();
    const ingredients = JSON.parse(textData);

    if (ingredients[ingredientInput]) {
      resultDiv.innerHTML = `<h3>Substitute for ${ingredientInput}</h3><p>${ingredients[ingredientInput]}</p>`;
    } else {
      resultDiv.innerHTML = `<p class="error">No substitute found for ${ingredientInput}.</p>`;
    }

  } catch (error) {
    console.error("Error fetching or parsing data:", error);
    resultDiv.innerHTML = `<p class="error">There was an error fetching substitution data.</p>`;
  }
}
