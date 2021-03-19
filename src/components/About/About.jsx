import React, { useContext, useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image'
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { resume } = about;

  const data = useStaticQuery(graphql`
    query AboutUs {
      prismicHomeBodyAboutUs {
        items {
          description {
            text
          }
          lawyer {
            fixed(width: 350, height: 350) {
              ...GatsbyPrismicImageFixed
            }
          }
          lawyer_role {
            text
          }
          name {
            text
          }
        }
        primary {
          aboutus_title {
            text
          }
        }
      }
    }
  `);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title={data.prismicHomeBodyAboutUs.primary.aboutus_title.text} />
          { data.prismicHomeBodyAboutUs.items.map(lawyer => (
            <Row className="about-wrapper" style={{ marginBottom: '8rem'}}>
              <Col md={6} sm={12}>
                <Fade bottom duration={1000} delay={600} distance="30px">
                  <div className="about-wrapper__image">
                    <Img className="rounded shadow-lg" key={lawyer.name.text} fixed={lawyer.lawyer.fixed} />
                  </div>
                </Fade>
              </Col>
              <Col className="about-info__container" md={6} sm={12}>
                <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
                  <div className="about-wrapper__info">
                    <h3 className="about-wrapper__info-text-title">{lawyer.name.text}</h3>
                    <h2 className="about-wrapper__info-text-sub-title">{lawyer.lawyer_role.text}</h2>
                    <p className="about-wrapper__info-text">
                      {lawyer.description.text + '.'}
                    </p>
                    {resume && (
                      <span className="d-flex mt-3">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn cta-btn--resume"
                          href={resume}
                        >
                          Resume
                        </a>
                      </span>
                    )}
                  </div>
                </Fade>
              </Col>
            </Row>
            ))}
      </Container>
    </section>
  );
};

export default About;
