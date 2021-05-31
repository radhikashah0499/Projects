import React, { useEffect } from "react";
import axios from 'axios';
const Carousel = () => {
  let arr = [];
  var i = 0;
  var imageToDisplay = document.querySelector(".imageToDisplay");

  function carousel() {
    console.log(arr);
    imageToDisplay.src = arr.results[i].urls.small;

    i++;
    if (i > 9) {
      i = 0;
    }

    setTimeout(carousel, 2000);
  }

  useEffect(() => {
    const url =
      "https://api.unsplash.com/search/photos?query=tea&client_id=zvUN8Gy2giDctNcS0CCTrAPZVILi3s6EfbqHpjANEi8&count=10";
      axios.get(url)
      .then(res => {
        arr = res.data;
        console.log(arr);
        carousel();
        
      })

    
  }, []);

  return (
    <div className="page">
      <img className="imageToDisplay" />
    </div>
  );
};

export default Carousel;
