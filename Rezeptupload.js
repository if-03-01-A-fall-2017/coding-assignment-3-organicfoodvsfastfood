window.onload = function()
{
    let storeButton = document.getElementById("save");
    storeButton.onclick = function()
    {
      let recipe = document.getElementById('recipe');
      let ingredients = document.getElementById('ingredients');

      localStorage.setItem(recipe.id,recipe.value);
      localStorage.setItem(ingredients.id,ingredients.value);
    }

    let loadButton = document.getElementById("load");
    loadButton.onclick = function()
    {
      let recipe = document.getElementById('recipe');
      let ingredients = document.getElementById('ingredients');
      let unemployed = document.getElementById('unemployed');
      let sysadmin = document.getElementById('sysadmin');

      recipe.value = localStorage.getItem(recipe.id);
      ingredients.value = localStorage.getItem(ingredients.id);

    }

    let removeButton = document.getElementById("delete");
    removeButton.onclick = function()
    {
      let recipe = document.getElementById('recipe');
      let ingredients = document.getElementById('ingredients');

      localStorage.removeItem(recipe.id,recipe.value);
      localStorage.removeItem(ingredients.id,ingredients.value);

    }

}
