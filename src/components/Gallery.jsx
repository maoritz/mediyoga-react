import React, { useState, useEffect } from 'react';


function Gallery() {

    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  

 useEffect(() => {
  async function showYogaImages(){
    try{
      const clientId ='GZ2Wuj8igsOyV5iHNF0FxjoPP2kuxrlYIo2hUNE_3qo'
      let url = `https://api.unsplash.com//search/photos?query=yoga-indoor&orientation=landscape&client_id=${clientId}`
      const response = await fetch(`${url}`);
      const data = await response.json()
      let imagesArray = data.results

      setImages(imagesArray)
      // for (let index = 0; index < imagesArray.length; index++) {
      //   photosContainer.append(`<img src="${imagesArray[index].urls.regular}" alt="${imagesArray[index].alt_description}">`)
      // }
      
      
    }catch (err){
      console.log(err)
    }
  }
  showYogaImages()
  }, []);

  

  return (
    <section className="app-photos">
      <div className="photos-container">
        {images.map(image => {
          return <img src={image.urls.regular} alt={image.alt_description} key={image.id}/>
        })}
      </div>
    </section>
  )
}

export default Gallery