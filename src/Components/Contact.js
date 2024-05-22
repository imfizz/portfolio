import React, { useContext, useState } from "react";
import { DataContext } from "../data/DataContext";

const Contact = () => {
  const { data, loading, isError } = useContext(DataContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  if(loading){
    return <div>About section is loading..</div>
  }

  if(isError){
    return <div>{isError}</div>
  }

  if (data) {
    var contactName = data.main.name;
    var street = data.main.address.street;
    var city = data.main.address.city;
    var state = data.main.address.state;
    var zip = data.main.address.zip;
    var phone = data.main.phone;
    var contactEmail = data.main.email;
    var contactMessage = data.main.contactmessage;
  }

  const submitForm = () => {
    // window.open(
    //   `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(name)}(${encodeURIComponent(email)}): ${encodeURIComponent(message)}`
    // );
    var link = `mailto:${contactEmail}`
             + `?cc=${email}`
             + "&subject=" + encodeURIComponent(subject)
             + "&body=" + encodeURIComponent(message)
    ;

    if(name.length !== 0 && email.length !== 0 && message.length !== 0){
      window.location.href = link;
    }
    
  };

  return (
    <section id="contact">
      <div className="row section-head">
        <div className="two columns header-col">
          <h1>
            <span>Get In Touch.</span>
          </h1>
        </div>

        <div className="ten columns">
          <p className="lead">{contactMessage}</p>
        </div>
      </div>

      <div className="row">
        <div className="eight columns">
          <form onSubmit={submitForm}>
            <fieldset>
              <div>
                <label htmlFor="contactName">
                  Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  size="35"
                  id="contactName"
                  name="contactName"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="contactEmail">
                  Email <span className="required">*</span>
                </label>
                <input
                  type="email"
                  value={email}
                  size="35"
                  id="contactEmail"
                  name="contactEmail"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="contactSubject">Subject</label>
                <input
                  type="text"
                  value={subject}
                  size="35"
                  id="contactSubject"
                  name="contactSubject"
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="contactMessage">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  cols="50"
                  rows="15"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  id="contactMessage"
                  name="contactMessage"
                  required
                ></textarea>
              </div>

              <div>
                <button onClick={submitForm} type="submit" className="submit">
                  Submit
                </button>
              </div>
            </fieldset>
          </form>

          <div id="message-warning"> Error sending your message.</div>
          <div id="message-success">
            <i className="fa fa-check"></i>Your message was sent, thank you!
            <br />
          </div>
        </div>

        <aside className="four columns footer-widgets">
          <div className="widget widget_contact">
            <h4>Contact Info</h4>
            <p className="address">
              {contactName}
              <br />
              {contactEmail}
              <br />
              <br />
              {street} <br />
              {city}, {state} {zip}
              <br />
              <span>{phone}</span>
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Contact;
