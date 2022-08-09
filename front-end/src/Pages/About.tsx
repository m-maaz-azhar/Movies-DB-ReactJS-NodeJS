import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "./style.scss";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="about">
        <section
          className="about-heading"
          data-aos="fade-down"
          data-aos-duration={1500}
        >
          <h1>ABOUT US</h1>
        </section>
        <section className="main-about-section">
          <div className="row">
            <div className="who-we-are" data-aos="fade-down">
              <h2>- Who We Are -</h2>
              <p>
                We are an online database of information related to films,
                television programs, home videos, video games, and streaming
                content online – including cast, production crew and personal
                biographies, plot summaries, trivia, ratings, and fan and
                critical reviews. An additional fan feature, message boards, was
                abandoned in February 2017. Originally a fan-operated website.
              </p>
            </div>
            <br />
            <div className="our-mission" data-aos="fade-left">
              <h2>- Our Mission -</h2>
              <p>
                Our mission is to be the most comprehensive source of
                entertainment information and to accurately represent cast and
                crew listings on a production's original release.
              </p>
            </div>
            <br />
            <div className="founded-on" data-aos="fade-up">
              <svg
                width="2.5em"
                height="2.5em"
                viewBox="0 0 16 16"
                className="bi bi-calendar-month-fill"
                fill="#BD0224"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zM2.56 12.332l.54-1.602h1.984l.54 1.602h.718L4.444 7h-.696L1.85 12.332h.71zm1.544-4.527L4.9 10.18H3.284l.8-2.375h.02zm5.746.422h-.676v2.543c0 .652-.414 1.023-1.004 1.023-.539 0-.98-.246-.98-1.012V8.227h-.676v2.746c0 .941.606 1.425 1.453 1.425.656 0 1.043-.28 1.188-.605h.027v.539h.668V8.227zm1.273 4.41c.075.332.422.636.985.636.648 0 1.07-.378 1.07-1.023v-.605h-.02c-.163.355-.613.648-1.171.648-.957 0-1.64-.672-1.64-1.902v-.34c0-1.207.675-1.887 1.64-1.887.558 0 1.004.293 1.195.64h.02v-.577h.648v4.03c0 1.052-.816 1.579-1.746 1.579-1.043 0-1.574-.516-1.668-1.2h.687zm2.055-2.535c0-.832-.414-1.36-1.062-1.36-.692 0-1.098.492-1.098 1.36v.253c0 .852.406 1.364 1.098 1.364.671 0 1.062-.516 1.062-1.364v-.253z"
                />
              </svg>
              <br />
              <h2>Founded on 1st Aug , 2020</h2>
              <br />
              <p>
                <i>in Karachi, Pakistan</i>
              </p>
              <br />
              <p>
                - <strong>By ABC CORPS</strong> -
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
