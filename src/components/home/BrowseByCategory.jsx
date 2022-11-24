import React from "react";
import { Link } from "react-router-dom";

const BrowseByCategory = () => {
  return (
    <section id="section-category" className="no-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              data-aos="fade-in"
              data-aos-easing="ease-in-out"
              data-aos-duration="900"
              data-aos-delay="0"
              className="text-center"
            >
              <h2>Browse by category</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="0"
            data-aos-easing="ease-in-out"
            data-aos-duration="200"
            className="col-md-2 col-sm-4 col-6 mb-sm-30"
          >
            <Link to="/explore" className="icon-box style-2 rounded">
              <i className="fa fa-image"></i>
              <span>Art</span>
            </Link>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-easing="ease-in-out"
            data-aos-duration="200"
            className="col-md-2 col-sm-4 col-6 mb-sm-30"
          >
            <Link to="/explore" className="icon-box style-2 rounded">
              <i className="fa fa-music"></i>
              <span>Music</span>
            </Link>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-easing="ease-in-out"
            data-aos-duration="200"
            className="col-md-2 col-sm-4 col-6 mb-sm-30"
          >
            <Link to="/explore" className="icon-box style-2 rounded">
              <i className="fa fa-search"></i>
              <span>Domain Names</span>
            </Link>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="150"
            data-aos-easing="ease-in-out"
            data-aos-duration="200"
            className="col-md-2 col-sm-4 col-6 mb-sm-30"
          >
            <Link to="/explore" className="icon-box style-2 rounded">
              <i className="fa fa-globe"></i>
              <span>Virtual Worlds</span>
            </Link>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-easing="ease-in-out"
            data-aos-duration="200"
            className="col-md-2 col-sm-4 col-6 mb-sm-30"
          >
            <Link to="/explore" className="icon-box style-2 rounded">
              <i className="fa fa-vcard"></i>
              <span>Trading Cards</span>
            </Link>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="250"
            data-aos-easing="ease-in-out"
            data-aos-duration="200"
            className="col-md-2 col-sm-4 col-6 mb-sm-30"
          >
            <Link to="/explore" className="icon-box style-2 rounded">
              <i className="fa fa-th"></i>
              <span>Collectibles</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrowseByCategory;
