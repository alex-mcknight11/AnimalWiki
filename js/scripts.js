
function changeAnimal() {
  $('#raccoonFact').hide();
  $('#bearFact').hide();
  $('#wolfFact').hide();


  const animalOptions = $("#animalOptions").val();

  if (animalOptions==="Raccoon") {
    $('#raccoonFact').toggle();
  } else if (animalOptions==="Bear") {
    $('#bearFact').toggle();

  } else { 
    (animalOptions==="Wolf")
    $('#wolfFact').toggle();
  }
    }

