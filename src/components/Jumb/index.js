import React from "react";
import imgHero from "../../assets/hero.jpg";
import {scrollToPageSection} from "../../utils/helpers";
import {Element} from "react-scroll";

function Jumb(){

    return (
      <section className="jumb">
        <Element name="scrollToTop"></Element>
        <div className="heroOverlay">
          <img src={imgHero} className="heroHidden" alt="Website development"></img>
          <div className="divHero">
            <h2 className="font-size-hero">
              QUALITY WEBSITE
            </h2>
            <h2 className="font-size-hero">
              DEVELOPMENT
            </h2>
            <div className="font-size-sub-hero">
              I love to create data-driven applications and processes
            </div>
            <div className="button-hero-wrapper font-size-menu">
              <span className="button-hero" onClick={(event)=>{
                  scrollToPageSection(event, "scrollToExpertise");
              }}>
                START HERE
              </span>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Jumb;