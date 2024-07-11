document.addEventListener('DOMContentLoaded', () => {
  try {
  const getFactsButton = document.getElementById(`getFacts`);
  getFactsButton.addEventListener(`click`, async (event) =>{
    event.preventDefault();

    const getFactRequest = await fetch(`https://catfact.ninja/fact?max_length=140`);
    const response = await getFactRequest.json();
    //console.log(response) 
    
    const factList = document.getElementById(`listFacts`);
    const newFact = document.createElement('li');
    newFact.textContent = response.fact;
    factList.appendChild(newFact);

  });


  //https://catfact.ninja/docs/api-docs.json
  }catch(err){
    console.log(err);
  }
});