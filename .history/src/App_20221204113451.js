// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <div class="container my-5">
	<div class="ombre-externe">
		<div class="ombre-interne">
				<div id="carouselExampleCaptions" class="carousel slide " data-bs-ride="carousel">
					<div class="carousel-inner">
						<div class="carousel-item active">
							<img src="https://nsm09.casimages.com/img/2021/07/21//21072103063525998217500508.jpg" class="d-block w-100 peinture-ombre-interne-fine" alt="...">
							<div class="carousel-caption">
								<h5>
									First slide
								</h5>
								<p>
								</p>
							</div>
						</div>
						<div class="carousel-item">
							<img src="https://nsm09.casimages.com/img/2021/07/21//21072103063625998217500510.jpg" class="d-block w-100" alt="...">
							<div class="carousel-caption">
								<h5>
									Second slide 
								</h5>
								<p>
								</p>
							</div>
						</div>
						<div class="carousel-item">
							<img src="https://nsm09.casimages.com/img/2021/07/21//21072103063625998217500509.jpg" class="d-block w-100" alt="...">
							<div class="carousel-caption">
								<h5>
									Third slide
								</h5>
								<p> 
								</p>
							</div>
						</div>
					</div>
					<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
						<span class="carousel-control-prev-icon" aria-hidden="true"></span>
						<span class="visually-hidden">Previous</span>
					</button>
					<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
						<span class="carousel-control-next-icon" aria-hidden="true"></span>
						<span class="visually-hidden">Next</span>
					</button>
				</div>
		</div>
		<!-- ombre-interne -->
	</div>
	<!-- ombre-externe -->
</div>


    <div className="blackbang">Lovely</div>
    </>
  );
}

export default App;
