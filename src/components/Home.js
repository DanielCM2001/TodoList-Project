import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HeaderImg from "../assets/img/BannerImage.png";
import { ArrowRightCircle } from "react-bootstrap-icons";

/**
 * @summary
 * This component renders a banner section for the home page with a brief message and a
 * link to a to-do list page, as well as an accompanying image.
 */

function Home() {
  /**
   * @description
   * Component uses Bootstrap classes to ensure that the page is responsive and
   * displays properly on different screen sizes.
   */
  return (
    <section className="banner" id="home">
      <Container>
        <Row>
          <Col xs={12} md={6} xl={7}>
            <h1>One simple to do list for you</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
              numquam, consequuntur aliquam delectus vitae sit. Molestiae
              adipisci amet nostrum temporibus!
            </p>

            <a href="/todo">
              <button>
                Start To Do List <ArrowRightCircle size={25} />
              </button>
            </a>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={HeaderImg} alt="Headder image" width="350px" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
