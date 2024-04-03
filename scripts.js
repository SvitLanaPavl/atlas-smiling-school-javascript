$(document).ready(function(){
  $('.carousel-slick').slick({
    infinite: false,
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
            $('.carousel-quote').append(item);
          });
          $('.carousel-quote').slick('unslick'); // Remove Slick from the carousel
        $('.carousel-quote').slick({ // Reinitialize Slick
          infinite: false,
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
  function getStarRating(rating) {
    let stars = '';
    for (var i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars += '<img src="images/star_on.png" alt="star on" width="15px">';
      } else {
        stars += '<img src="images/star_off.png" alt="star off" width="15px">';
      }
    }
    return stars;
  }
  function fetchVideos() {
    $('.loader').show();
    setTimeout(function() {
      $.ajax({
        url: 'https://smileschool-api.hbtn.info/popular-tutorials',
        method: 'GET',
        success: function(data) {
          $('.loader').hide();
          data.forEach(function(video) {
            let videoItem = `
              <div class="col-12 col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center justify-content-md-end justify-content-lg-center">
                <div class="card">
                  <img src="${video.thumb_url}" class="card-img-top" alt="Video thumbnail">
                  <div class="card-img-overlay text-center">
                    <img src="images/play.png" alt="Play" width="64px" class="align-self-center play-overlay">
                  </div>
                  <div class="card-body">
                    <h5 class="card-title font-weight-bold">${video.title}</h5>
                    <p class="card-text text-muted">${video['sub-title']}</p>
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
            `;
            $('.carousel-video').append(videoItem);
        })
        $('.carousel-video').slick('unslick'); // Remove Slick from the carousel
        $('.carousel-video').slick({ // Reinitialize Slick
          infinite: false,
          slidesToShow: 4,
          slidesToScroll: 1,
          responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
        });
    },
    error: function(xhr, status, error) {
      $('.loader').hide();
      console.error(error);
    }
  })}, 2000);
  }
  function fetchLatest() {
    $('.loader').show();
    setTimeout(function() {
      $.ajax({
        url: 'https://smileschool-api.hbtn.info/latest-videos',
        method: 'GET',
        success: function(data) {
          $('.loader').hide();
          data.forEach(function(video) {
            let videoItem = `
              <div class="col-12 col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center justify-content-md-end justify-content-lg-center">
                <div class="card">
                  <img src="${video.thumb_url}" class="card-img-top" alt="Video thumbnail">
                  <div class="card-img-overlay text-center">
                    <img src="images/play.png" alt="Play" width="64px" class="align-self-center play-overlay">
                  </div>
                  <div class="card-body">
                    <h5 class="card-title font-weight-bold">${video.title}</h5>
                    <p class="card-text text-muted">${video['sub-title']}</p>
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
            `;
            $('.carousel-video').append(videoItem);
        })
        $('.carousel-video').slick('unslick'); // Remove Slick from the carousel
        $('.carousel-video').slick({ // Reinitialize Slick
          infinite: false,
          slidesToShow: 4,
          slidesToScroll: 1,
          responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
        });
    },
    error: function(xhr, status, error) {
      $('.loader').hide();
      console.error(error);
    }
  })}, 2000);
  }
  
  function fetchCourses(searchVal, topicFilter, sortBy) {
    $('.video-count').hide();
    $('.loader').show();
    $('.courses .row').empty();
    setTimeout(function() {
      $.ajax({
        url: 'https://smileschool-api.hbtn.info/courses',
        method: 'GET',
        data: {
          q: searchVal,
          topic: topicFilter,
          sort: sortBy
        },
        success: function(response) {
          $('.video-count').hide();
          $('.loader').hide();
          let courses = response.courses;
          let videoCount = courses.length;
          $('.video-count').text(videoCount === 1 ? '1 video' : videoCount + ' videos');
          $('.courses .row').empty();
          courses.forEach(function(course) {
            let videoItem = `
            <div class="col-12 col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center justify-content-md-end justify-content-lg-center">
              <div class="card">
                <img src="${course.thumb_url}" class="card-img-top" alt="Video thumbnail">
                <div class="card-img-overlay text-center">
                  <img src="images/play.png" alt="Play" width="64px" class="align-self-center play-overlay">
                </div>
                <div class="card-body">
                  <h5 class="card-title font-weight-bold">${course.title}</h5>
                  <p class="card-text text-muted">${course['sub-title']}</p>
                  <div class="creator d-flex align-items-center">
                   <img src="${course.author_pic_url}" alt="Creator of Video" width="30px" class="rounded-circle">
                   <h6 class="pl-3 m-0 main-color">${course.author}</h6>
                  </div>
                  <div class="info pt-3 d-flex justify-content-between">
                   <div class="rating">
                      ${getStarRating(course.star)}
                   </div>
                   <span class="main-color">${course.duration}</span>
                  </div>
                </div>
              </div>
            </div>
            `;
            $('.courses .row').append(videoItem);
          });
          if (videoCount > 0) {
            $('.video-count').text(videoCount === 1 ? '1 video' : videoCount + ' videos').show();
        }
        },
        error: function(xhr, status, error) {
          $('.loader').hide();
          console.error(error);
        }
      });
    }, 2000);
    
  }
  $('.search-text-area').on('input', function() {
    let searchVal = $(this).val();
    fetchCourses(searchVal, '', '');
  });
  $('.search .dropdown-menu .dropdown-item').on('click', function() {
    let topicFilter = $(this).text();
    console.log('Text changed');
    $('.search .expertness span').text(topicFilter);
    
    fetchCourses('', topicFilter, '');
  });
  
  $(document).on('click', '.dropdown-sort .dropdown-item', function() {
    let sortBy = $(this).text();
    $('.dropdown-sort .btn span').text(sortBy);
    fetchCourses('', '', sortBy);
  });
  
  fetchLatest();
  fetchVideos();
  fetchQuotes();
  fetchCourses('', '', '');
});