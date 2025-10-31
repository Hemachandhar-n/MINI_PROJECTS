import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function Footer() {
  return (
    <div>
      {/* footer section */}
      <footer className="site-footer mt-5">
        <div className="footer-container">
          <div className="footer-links">
            <ul>
              <li><a href="#">GameBuild <span className="text-danger">Haven</span></a></li>
              <li><a href="/cover/index.html">Cover</a></li>
              <li><a href="#">Get the app</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>

            <ul>
              <li><a href="#">Hardware & Accessories</a></li>
              <li><a href="#">Console</a></li>
              <li><a href="#">Help and Support</a></li>
              <li><a href="#">Affiliate</a></li>
              <li><a href="#">Game & CD Packs</a></li>
            </ul>
          </div>

          <div className="footer-bottom">
            <h3 className="footer-logo">
              GameBuild <span className="text-danger">Haven</span>
            </h3>
            <span className="copyright">
              2025 © GameBuild <span className="text-danger">Haven</span>, Inc
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
