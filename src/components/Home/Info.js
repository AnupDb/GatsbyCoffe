import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"

const Info = props => {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="Our Story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium dolore deserunt doloribus, provident quibusdam enim
              fugiat consectetur minus officia nisi temporibus eos dolorem quo
              nemo ullam expedita consequuntur. Officiis corrupti sequi ipsum
              voluptatem possimus ab enim laboriosam natus commodi animi eos et,
              quidem consequatur adipisci, neque incidunt recusandae reiciendis
              odit?
            </p>
            <Link to="/about">
              <button className="btn text-uppercase btn-yellow">
                ABOUT PAGE
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info
