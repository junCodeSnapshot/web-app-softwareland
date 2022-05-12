import React from 'react';
import { Container, Row, Col } from 'reactstrap';
const Hero = () => {
    return (
        <section className="section position-relative">
            <Container>
                <Row className="align-items-center">
                    <Col lg={6}>
                        <div className="pr-lg-5">
                            <p className="text-uppercase text-primary font-weight-medium f-14 mb-4">Who we are?</p>
                            <h1 className="mb-4 font-weight-normal line-height-1_4">The best gamming company on <span className="text-primary font-weight-medium">North America</span></h1>
                            <p className="text-muted mb-4 pb-2">We can create the best professionals in the world of e-sports with just a few months in our Bootcamp associated with the LCS <i>(League Championship Series).</i> We have the best positions in national and <b>international </b> competitions.</p>
                            <a href="#" className="btn btn-warning">
                                Sign In Now! <span className="ml-2 right-icon">&#8594;</span>
                            </a>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="mt-5 mt-lg-0">
                            <img src="/assets/champ.jpg" alt="" className="img-fluid mx-auto d-block rimg" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
export default Hero;