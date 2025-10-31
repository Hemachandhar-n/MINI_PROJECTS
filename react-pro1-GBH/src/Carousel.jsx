import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Carousel() {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                {/* ... indicators ... */}
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>

                <div className="carousel-inner" style={{ height: "400px" }}>
                    {/* Slide 1 */}
                    <div className="carousel-item active">
                        {/* ✅ Corrected Path */}
                        <img src="/Images/Carousel/image.png" className="d-block w-100" alt="PC Builds"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>PC Builds</h5>
                            <p>Get your PC builds in your desired assembly.</p>
                        </div>
                    </div>
                    {/* Slide 2 */}
                    <div className="carousel-item">
                        {/* ✅ Corrected Path */}
                        <img src="/Images/Carousel/image copy.png" className="d-block w-100" alt="Hardware"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>HARDWARE & ACCESSORIES</h5>
                            <p>Get your favorite parts to update your PC builds.</p>
                        </div>
                    </div>
                    {/* Slide 3 */}
                    <div className="carousel-item">
                        {/* ✅ Corrected Path */}
                        <img src="/Images/Carousel/freepik__upload__28901.png" className="d-block w-100" alt="Consoles"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>CONSOLE AND HANDHELDS</h5>
                            <p>Relive the stress from work and relax by playing games.</p>
                        </div>
                    </div>
                     {/* Slide 4 */}
                    <div className="carousel-item">
                        {/* ✅ Corrected Path */}
                        <img src="/Images/Carousel/gta 6 banner.png" className="d-block w-100" alt="Games"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>GAMES & CD</h5>
                            <p>Explore a vast library of games for every platform.</p>
                        </div>
                    </div>
                </div>

                {/* ... controls ... */}
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
    );
}

export default Carousel;