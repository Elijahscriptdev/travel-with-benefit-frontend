import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription text-white'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best travel deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input p-2'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button className='btn-color'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            {/* <Link to='/'>Investors</Link> */}
            <Link to='/terms-and-conditions'>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/contact-us'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/all-destinations'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <a href='https://www.instagram.com/tvwithbenefits'>Instagram</a>
            <a href='https://web.facebook.com/tvwithbenefits?_rdc=1&_rdr'>
              Facebook
            </a>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              TWB
              {/* <i className='fas fa-bus-alt'></i> */}
            </Link>
          </div>
          <small className='website-rights'>TRAVEL © 2020</small>
          <div className='social-icons'>
            <a
              className='social-icon-link facebook'
              href='https://web.facebook.com/tvwithbenefits?_rdc=1&_rdr'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </a>
            <a
              className='social-icon-link instagram'
              href='https://www.instagram.com/tvwithbenefits'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </a>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
