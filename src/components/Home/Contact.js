import React from "react"
import Title from "../Globals/Title"

const Contact = props => {
  return (
    <section className="contact py-5">
      <Title title="contact us" />

      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <form
            action="https://formspree.io/sunnyoranup@gmail.com"
            method="POST"
          >
            {/*name*/}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="Name"
              />
            </div>
            {/*email*/}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                id="email"
                placeholder="John@example.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">message</label>
              <textarea
                name="message"
                id="message"
                className="form-control"
                rows="5"
                placeholder="Your Message"
              />
            </div>
            <button
              type="submit"
              className="btn btn-yellow btn-block text-capitalize mt-5"
            >
              submit
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
