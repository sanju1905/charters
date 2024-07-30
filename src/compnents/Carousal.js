import React from 'react'
import image from '../assets/jet.jpg';
import image2 from '../assets/flight.jpg'
import image3 from '../assets/fav.png'
const Carousal = () => {
  return (

<div >
  <div>
  <div id="carouselExampleFade" className="carousel slide carousel-fade bg-white"
    data-bs-ride="carousel"
    data-bs-interval="500" >
    <div class="carousel-inner">
      <div class="carousel-item active ">
        <img src={image} class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src={image2} class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src={image} class="d-block w-100" alt="..."/>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  </div>
  {/* <div class="col-12 col-lg-6 ml2">
    <h1 class="animate__animated animate__bounce display-5 text-primary fw-bold mb-3 text-center animate__infinite ">PLAN YOUR TRIP</h1>
    <p class="lead text-center">At My Air Deal, we specialize in providing exclusive access to private flights, including empty legs and charters. Our mission is to offer unparalleled convenience, luxury, and affordability for travelers seeking a premium flying experience without the premium price tag.</p>
    <div class="d-grid gap-2 d-md-flex justify-content-md-start text-center m-5">
      <a href="/charters" class="btn btn-primary btn-dark btn-lg px-5 me-md-2">Charters</a>
      <a href="/emptylegs" class="btn btn-outline-secondary btn-lg px-4 me-md-2">EmptyLegs</a>
    </div>
  </div> */}
  <hr></hr>
</div>

  )
}

export default Carousal
