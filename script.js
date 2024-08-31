const sportSelector = document.getElementById('sportSelector');
  const rules = document.querySelectorAll('.game_rule ul');

  sportSelector.addEventListener('change', function () {
    // Hide all the rules
    rules.forEach(rule => {
      rule.style.display = 'none';
    });

    // Show the selected sport's rules
    const selectedSport = sportSelector.value;
    if (selectedSport !== 'disable') {
      const selectedRule = document.getElementById(`${selectedSport}`);
      if (selectedRule) {
        selectedRule.style.display = 'block';
      }
    }
  });

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  document.addEventListener("DOMContentLoaded", (event) => {

    const params = new URLSearchParams(window.location.search);
    const sport = params.get('sport');
    document.getElementById('sportSelector').value = capitalizeFirstLetter(sport);

    const selectedSport = sportSelector.value;
    if (selectedSport !== 'disable') {
      const selectedRule = document.getElementById(`${selectedSport}`);
      if (selectedRule) {
        selectedRule.style.display = 'block';
      }
    }
});


// // show/hide forms
// document.getElementById("schoolBtn").addEventListener("click", function () {
//   document.getElementById("schoolForm").style.display = "block";
//   document.getElementById("studentForm").style.display = "none";
// });

// document.getElementById("studentBtn").addEventListener("click", function () {
//   document.getElementById("studentForm").style.display = "block";
//   document.getElementById("schoolForm").style.display = "none";
// });







