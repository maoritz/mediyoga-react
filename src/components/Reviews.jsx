import React, { useEffect,useState } from 'react'
import { randomNumber } from '../utils/randomNumber'

function Testimonials() {

  const [review, setReview] = useState('')
  const [name,setName] = useState('')

  useEffect(() => {
    async function showReviewDetails() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/comments");
        const reviewsArray = await response.json();
        const arrayLength = reviewsArray.length
        const randomNumber = Math.floor(Math.random()* arrayLength);
        const review = reviewsArray[randomNumber];
        
        setReview(review.body)
        setName(review.name)
        
      }catch (err) {
        console.log(err);
      }
    }
    showReviewDetails()
  }, [])


  
  return (
  <section className="comments-section">
      <div className="comments-container">
          <div className="js--customer-comment">
            <p>
              {review}
            </p>
          </div>
          <div className="customer-image"> 
              <img src={`src/assets/images/comment-${randomNumber}.png`} alt="Author image" />
          </div>
          <cite className="js--costumer-name">
              {name}
          </cite>
          <div className="custumer">Costumer</div>
      </div>
  </section>
  )
}

export default Testimonials