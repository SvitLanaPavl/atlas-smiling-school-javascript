$(document).ready(function() {
  $('.loader').show();
  
  setTimeout(function() {
    $.ajax({
      url: 'https://smileschool-api.hbtn.info/quotes',
      method: 'GET',
      success: function(response) {
        $('.loader').hide();
        
        response.forEach(function(quote, index) {
          let activeClass = (index === 0) ? 'active' : '';
          let carouselItem = `
          <div class="carousel-item ${activeClass}">
              <div class="row mx-auto align-items-center">
                <div class="col-12 col-sm-2 col-lg-2 offset-lg-1 text-center">
                  <img src="${quote.pic_url}" class="d-block align-self-center" alt="Carousel Pic ${index + 1}" />
                </div>
                <div class="col-12 col-sm-7 offset-sm-2 col-lg-9 offset-lg-0">
                  <div class="quote-text">
                    <p class="text-white">${quote.text}</p>
                    <h4 class="text-white font-weight-bold">${quote.name}</h4>
                    <span class="text-white">${quote.title}</span>
                  </div>
                </div>
              </div>
            </div>
          `;
          $('.carousel-inner').append(carouselItem);
           $('.carousel-inner').after(`
          <a class="carousel-control-prev arrow-left ml-5" href="#carouselExampleControls" role="button" data-slide="prev">
            <img src="images/arrow_white_left.png" alt="Quote Previous" aria-hidden="true" />
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next arrow-right mr-5" href="#carouselExampleControls" role="button" data-slide="next">
            <img src="images/arrow_white_right.png" alt="Quote Next" aria-hidden="true" />
            <span class="sr-only">Next</span>
          </a>
        `);
        });
      },
      error: function(error) {
        $('.loader'.hide());
        console.log('Error fetching quotes:', error);
      }
    })
  }, 2000);

});