
$(document).ready(function() {
    $('.btn-primary').on('click', function() {
      var parentId = $(this).closest('.car').attr('id');
  
      $.getJSON('samochody.json', function(data) {
        var car = data[parentId];
  
        sessionStorage.setItem('carData', JSON.stringify(car));
  
        window.location.href = 'platnosc.html';
      });
    });
  
    $('#exampleSelect').val('all');
    $('#exampleSelect').on('change', function() {
      var selectedOption = $(this).val();
  
      if (selectedOption === 'all') {
        $('.car').css('display', 'block').removeClass('order-last');
      } else {
        $('.car').css('display', 'none').removeClass('order-last');
        if (selectedOption === 'vm') {
          $('.vw').css('display', 'block');
        } else if (selectedOption === 'ford') {
          $('.ford').css('display', 'block').addClass('order-last');
        } else if (selectedOption === 'toyota') {
          $('.toyota').css('display', 'block').addClass('order-last');
        } else if (selectedOption === 'bmw') {
          $('.bmw').css('display', 'block').addClass('order-last');
        } else if (selectedOption === 'merc') {
          $('.merc').css('display', 'block').addClass('order-last');
        }

      }
    });
  });
  