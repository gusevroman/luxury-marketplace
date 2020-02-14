

// Fetch with filters

const filterForm = document.getElementById('filter-form');

filterForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const sex = document.getElementById('sex').value;
  const brand = document.getElementById('brand').value;
  const style = document.getElementById('style').value;
  const category = document.getElementById('category').value;
  

  const url = `/filter?sex=${sex}&brand=${brand}&category=${category}&style=${style}`;

  const response = await fetch(url);
  const filteredGood = await response.json();
  console.log(filteredGood);
  

})



