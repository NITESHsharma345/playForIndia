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



//  scroll anim,ation start

function textAnim() {
  var reveals = document.querySelectorAll('.amin');
  for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop+100 < windowHeight - elementVisible) {
          reveals[i].classList.add("animshow");
      } else {
         // reveals[i].classList.remove("animshow");
      }
  }
}
window.addEventListener("scroll", textAnim);

//  scroll anim,ation End






