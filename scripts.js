$(document).ready(function() {
  function fetchQuotes() {
    $('.loader').show();
  $('.carousel-control-prev').css('visibility', 'hidden');
  $('.carousel-control-next').css('visibility', 'hidden');
  
  setTimeout(function() {
    $.ajax({
      url: 'https://smileschool-api.hbtn.info/quotes',
      method: 'GET',
      success: function(response) {
        $('.loader').hide();
        $('.carousel-control-prev').css('visibility', 'visible');
        $('.carousel-control-next').css('visibility', 'visible');
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
          $('#carousel-quote').append(carouselItem);
        });
      },
      error: function(error) {
        $('.loader'.hide());
        console.log('Error fetching quotes:', error);
      }
    })
  }, 2000);
  }
  function fetchVideos() {
    $('.loader').show();
    $.ajax({
      url: 'https://smileschool-api.hbtn.info/popular-tutorials',
      method: 'GET',
      success: function(data) {
        $('.loader').hide();
        $('#carouselInner').empty();
        data.forEach(function(video) {
          let card = `
          <div class="carousel-item">
                <div class="row align-items-center mx-auto">
                  <div class="col-12 col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center justify-content-md-end justify-content-lg-center">
                    <div class="card">
                      <img src="${video.thumb_url}" class="card-img-top" alt="Video thumbnail">
                      <div class="card-img-overlay text-center">
                        <img src="images/play.png" alt="Play" width="64px" class="align-self-center play-overlay">
                      </div>
                      <div class="card-body">
                        <h5 class="card-title font-weight-bold">${video.title}</h5>
                        <p class="card-text text-muted">${video.description}</p>
                        <div class="creator d-flex align-items-center">
                          <img src="${video.author_pic_url}" alt="Creator of Video" width="30px" class="rounded-circle">
                          <h6 class="pl-3 m-0 main-color">${video.author}</h6>
                        </div>
                        <div class="info pt-3 d-flex justify-content-between">
                          <div class="rating">
                            ${getStarRating(video.star)}
                          </div>
                          <span class="main-color">${video.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          `;
          $('#carousel-video').append(card);
        });
        $('.carousel-item').first().addClass('active');
      },
      error: function(xhr, status, error) {
        $('.loader').hide();
        console.error(error);
      }     
    });
  }
  function getStarRating(rating) {
    var stars = '';
    for (var i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars += '<img src="images/star_on.png" alt="star on" width="15px">';
      } else {
        stars += '<img src="images/star_off.png" alt="star off" width="15px">';
      }
    }
    return stars;
  }
  fetchQuotes();
  fetchVideos();
});