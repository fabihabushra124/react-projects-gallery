import car1 from "../assets/images/car1_choose_us.png";
import car2 from "../assets/images/car2_choose_us.png";
import car3 from "../assets/images/car3_choose_us.png";
import car4 from "../assets/images/car4_choose_us.png";
import blueWallet from "../assets/images/icons/blue-wallet.png";
import blueUserTick from "../assets/images/icons/blue-user-tick.png";
import blue24Support from "../assets/images/icons/blue-24-support.png";
import blueMessages from "../assets/images/icons/blue-messages.png";

const WhyChoose = () => {
  const causeesToChoose = [
    {
      icon: blueWallet,
      title: "Best price guaranteed",
      text: `Find a lower price? We’ll refund you 100%
    of the difference.`,
    },
    {
      icon: blueUserTick,
      title: "Experience driver",
      text: `Don’t have driver? Don’t worry, we have many
    experienced driver for you.`,
    },
    {
      icon: blue24Support,
      title: "24 hour car delivery",
      text: `Book your car anytime and we will deliver it
    directly to you.`,
    },
    {
      icon: blueMessages,
      title: "24/7 technical support",
      text: `Have a question? Contact Rentcars support
    any time when you have problem.`,
    },
  ];
  return (
    <section id="whychoose">
      <div className="container-fluid">
        <div className="text-center">
          <h2 className="blue-h">why chooose us</h2>
        </div>
        <div className="row pt-4">
          <div className="col-lg-6 p-0 order-lg-1 order-2 mt-lg-0 mt-3 pe-3">
            <div className="d-flex align-items-end h-100">
              <div
                id="carouselExampleSlidesOnly"
                className="carousel slide carousel-fade"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={car1} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={car2} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={car3} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={car4} className="d-block w-100" alt="..." />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 order-lg-2 order-1 px-3">
            <h3 className="sub-h mb-3">
              We offer the best experience <br /> with our rental deals
            </h3>
            {causeesToChoose.map((cause, inx) => (
              <div key={inx} className="d-flex align-items-center mb-4">
                <div className="icon">
                  <img
                    src={cause.icon}
                    width="24"
                    style={{ margin: "auto" }}
                    alt=""
                  />
                </div>
                <div className="text">
                  <h5>{cause.title}</h5>
                  <p>{cause.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
