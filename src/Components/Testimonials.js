import React, { useContext } from "react";
import { DataContext } from "../data/DataContext";

const Testimonials = () => {
  const { data, loading, isError } = useContext(DataContext);

  if(loading){
    return <div>Testimonials section is loading..</div>
  }

  if(isError){
    return <div>{isError}</div>
  }

  if (data) {
    var testimonials = data.testimonials.testimonials.map(function (testimonials) {
      return (
        <li key={testimonials.user}>
          <blockquote>
            <p>{testimonials.text}</p>
            <cite>{testimonials.user}</cite>
          </blockquote>
        </li>
      );
    });
  }

  return (
    <section id="testimonials">
      <div className="text-container">
        <div className="row">
          <div className="two columns header-col">
            <h1>
              <span>Client Testimonials</span>
            </h1>
          </div>

          <div className="ten columns flex-container">
            <ul className="slides">{testimonials}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
