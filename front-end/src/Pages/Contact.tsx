import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "./style.scss";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      center: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

export default function Contact() {
  let handleSubmit = (e: any) => {
    e.preventDefault();
    let name = e.target.name.value;
    let email = e.target.email.value;
    let phone = e.target.phone.value;
    let message = e.target.message.value;

    fetch("http://localhost:8080/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          alert("Message sent successfully");
        } else {
          alert("Error sending message");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Navbar />
      <main className="contact">
        <section
          className="contact-heading"
          data-aos="fade-down"
          data-aos-duration={1500}
        >
          <h1>CONTACT US</h1>
        </section>
        <section className="main-contact-section">
          <div>
            <div>
              <form onSubmit={handleSubmit}>
                <div id="contact">
                  {/*-CONTACT FORM START-*/}
                  <div id="form" data-aos="fade-right" data-aos-duration={1500}>
                    <h2>CONTACT NOW</h2>
                    <input placeholder="Your Name" type="text" name="name" />
                    <br />
                    <input
                      placeholder="Your E-Mail Address"
                      type="email"
                      name="email"
                    />
                    <br />
                    <input
                      placeholder="Your Phone No. (optional)"
                      type="number"
                      name="phone"
                    />
                    <br />
                    <textarea
                      cols={70}
                      id="message-box"
                      placeholder="Type Your Message Here"
                      defaultValue={""}
                      name="message"
                    />
                    <br />
                    <input id="button" type="submit" defaultValue="SEND" />
                  </div>
                  {/*-CONTACT FORM END-*/}
                  {/*-SOCIAL MEDIA SECTION START-*/}
                  <div
                    id="social"
                    data-aos="fade-left"
                    data-aos-duration={1500}
                  >
                    <h2>SOCIAL MEDIA</h2>
                    <p>Stay Connected, Stay Tunned</p>
                    <br />
                    <ul>
                      <li>
                        <a
                          href="https://www.facebook.com/m.Maaz.Azhar"
                          target="blank"
                          style={{ background: "#3B5998" }}
                        >
                          FACEBOOK
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/m.maaz.azhar/"
                          target="blank"
                          style={{ background: "#e4405f" }}
                        >
                          INSTAGRAM
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://twitter.com/m_maaz_azhar"
                          target="blank"
                          style={{ background: "#55acee" }}
                        >
                          TWITER
                        </a>
                      </li>
                      <li>
                        <a
                          href="http://www.linkedin.com/in/maaz-azher/"
                          target="blank"
                          style={{ background: "#0077B5" }}
                        >
                          LINKED IN
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/*-SOCIAL MEDIA SECTION END-*/}
                </div>
              </form>
            </div>
            <div></div>
          </div>
          <center>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7236.183079677126!2d67.04015254917437!3d24.92895129596013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f9b59133921%3A0xc443b311fafafc9a!2sPAF-KIET%20North%20Nazimbad%20Campus!5e0!3m2!1sen!2s!4v1604507014425!5m2!1sen!2s"
              width={600}
              height={450}
              frameBorder={0}
              style={{ border: 0 }}
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
              title="map"
            />
          </center>
        </section>
      </main>
      <Footer />
    </>
  );
}
