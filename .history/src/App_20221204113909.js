// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <div className="container my-5">
	<div className="ombre-externe">
		<div className="ombre-interne">
				<div id="carouselExampleCaptions" className="carousel slide " data-bs-ride="carousel">
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img src="https://nsm09.casimages.com/img/2021/07/21//21072103063525998217500508.jpg" className="d-block w-100 peinture-ombre-interne-fine" alt="..." />
							<div className="carousel-caption">
								<h5>
									First slide
								</h5>
								<p>
								</p>
							</div>
						</div>
						<div className="carousel-item">
							<img src="https://nsm09.casimages.com/img/2021/07/21//21072103063625998217500510.jpg" className="d-block w-100" alt="...">
							<div className="carousel-caption">
								<h5>
									Second slide 
								</h5>
								<p>
								</p>
							</div>
						</div>
						<div className="carousel-item">
							<img src="https://nsm09.casimages.com/img/2021/07/21//21072103063625998217500509.jpg" className="d-block w-100" alt="..." />
							<div className="carousel-caption">
								<h5>
									Third slide
								</h5>
								<p> 
								</p>
							</div>
						</div>
					</div>
					<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
						<span className="carousel-control-prev-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Previous</span>
					</button>
					<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
						<span className="carousel-control-next-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Next</span>
					</button>
				</div>
		</div>
	</div>
	
</div>


    <div className="blackbang">Lovely</div>
    </>
  );
}

export default App;
