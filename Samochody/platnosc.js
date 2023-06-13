
  document.addEventListener('DOMContentLoaded', function() {
    var carData = sessionStorage.getItem('carData');
  
    if (carData) {
      var car = JSON.parse(carData);
      document.getElementById('img').src = car.img;
      document.getElementById('marka').textContent = 'Marka: ' + car.marka;
      document.getElementById('model').textContent = 'Model: ' + car.model;
  
      var cenaElement = document.getElementById('cena');
  
      function obliczSumeCen() {
        var sumaCen = parseInt(car.cena);
  
        var checkbox1 = document.getElementById('checkbox1');
        if (checkbox1.checked) {
          sumaCen += parseInt(checkbox1.getAttribute('data-koszt'));
        }
  
        var checkbox2 = document.getElementById('checkbox2');
        if (checkbox2.checked) {
          sumaCen += parseInt(checkbox2.getAttribute('data-koszt'));
        }
  
        var checkbox3 = document.getElementById('checkbox3');
        if (checkbox3.checked) {
          sumaCen += parseInt(checkbox3.getAttribute('data-koszt'));
        }
  
        cenaElement.textContent = 'Cena: ' + sumaCen + 'zł';
  
        sessionStorage.setItem('sumaCen', sumaCen);
      }
  
      var checkboxes = document.querySelectorAll('input[type="checkbox"]');
      checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', obliczSumeCen);
      });
  
      obliczSumeCen();
    } else {
      window.location.href = 'index.html';
    }
  
    var formData = sessionStorage.getItem('formData');
    if (formData) {
      var formFields = JSON.parse(formData);
      document.getElementById('imie').value = formFields.imie;
      document.getElementById('nazwisko').value = formFields.nazwisko;
      document.getElementById('miasto').value = formFields.miasto;
      document.getElementById('ulica').value = formFields.ulica;
    }
    var sumaCen = sessionStorage.getItem('sumaCen');

    if (sumaCen) {
      document.getElementById('cena').textContent = 'Cena: ' + sumaCen + 'zł';
    } else {
      window.location.href = 'index.html';
    }
  
    var platnoscForm = document.getElementById('platnoscForm');
    platnoscForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      var imie = document.getElementById('imie').value;
      var nazwisko = document.getElementById('nazwisko').value;
      var miasto = document.getElementById('miasto').value;
      var ulica = document.getElementById('ulica').value;
      var opcja = document.querySelector('input[name="opcje"]:checked').value;
      var checkbox1 = document.getElementById('checkbox1').checked;
      var checkbox2 = document.getElementById('checkbox2').checked;
      var checkbox3 = document.getElementById('checkbox3').checked;
      var checkbox4 = document.getElementById('checkbox4').checked;
  

      window.location.href = 'dziekujemy.html';
  
      document.getElementById('imie').value = '';
      document.getElementById('nazwisko').value = '';
      document.getElementById('miasto').value = '';
      document.getElementById('ulica').value = '';
    });
  });