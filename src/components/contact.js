import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="asy-BoxBorder">
        <div className="contact">
          <div className="card card-gradient">
            <div className="contact-phone" style={{ backgroundColor: "white" }}>
              <h4 className="phone-heading-text" style={{ marginLeft: 5,marginTop: 5 }}>
                Phone
              </h4>
              <div className="card-text">
                <h5
                  className="phone-main-text"
                  style={{ marginLeft: 10, fontSize: "15px" }}
                >
                  +91 8087907260 <br />
                  +91 9423957148
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div class="email" style={{ marginTop: 30 }}>
          <div className="card card-gradient">
            <div className="contact-phone" style={{ backgroundColor: "white" }}>
              <h4 className="phone-heading-text" style={{ marginLeft: 5,marginTop: 5 }}>
                Email
              </h4>
              <div className="card-text">
                <h5
                  className="phone-main-text"
                  style={{ marginLeft: 10, fontSize: "15px" }}
                >
                  aswagaurav3@gmial.com <br />
                  gauravsawa3@gmail.com
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="address" style={{ marginTop: 30 }}>
          <div className="card card-gradient">
            <div className="contact-phone" style={{ backgroundColor: "white" }}>
              <h4 className="phone-heading-text" style={{ marginLeft: 5,marginTop: 5 }}>
                Address
              </h4>
              <div className="card-text">
                <h5
                  className="phone-main-text"
                  style={{ marginLeft: 10, fontSize: "15px" }}
                >
                  Loni Bk, Maharashtra, India
                </h5>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
