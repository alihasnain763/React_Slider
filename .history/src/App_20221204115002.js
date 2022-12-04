// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <div className="container my-5">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
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
							<img src="https://nsm09.casimages.com/img/2021/07/21//21072103063625998217500510.jpg" className="d-block w-100" alt="..." />
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

    </>
  );
}

export default App;
