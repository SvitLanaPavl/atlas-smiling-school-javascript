$(document).ready(function(){
  $('.carousel-slick').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
  function fetchQuotes() {
    $('.loader').show();
    setTimeout(function() {
      $.ajax({
        url: 'https://smileschool-api.hbtn.info/quotes',
        method: 'GET',
        success: function(response) {
          $('.loader').hide();
          response.forEach(function(quote, index) {
            let item = `
            <div class="item">
              <div class="row mx-auto align-items-center">
                <div class="col-12 col-sm-2 col-lg-2 offset-lg-1 text-center">
                  <img src="${quote.pic_url}" class="d-block align-self-center" alt="Carousel Pic ${index + 1}" />
                </div>
                <div class="col-12 col-sm-7 offset-sm-2 col-lg-9 offset-lg-0 pl-0 pl-sm-3">
                  <div class="quote-text">
                    <p class="text-white">${quote.text}</p>
                    <h4 class="text-white font-weight-bold">${quote.name}</h4>
                    <span class="text-white">${quote.title}</span>
                  </div>
                </div>
              </div>
            </div>
            `;
            $('#carousel-quote').append(item);
          });
          $('.carousel-slick').slick('unslick'); // Remove Slick from the carousel
        $('.carousel-slick').slick({ // Reinitialize Slick
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1
        });
        },
        error: function(error) {
          $('.loader').hide();
          console.log('Error fetching quotes:', error);
        }
      })
    }, 2000);
  }
  function fetchVideo() {
    $('.loader')
  }

  fetchQuotes();
});