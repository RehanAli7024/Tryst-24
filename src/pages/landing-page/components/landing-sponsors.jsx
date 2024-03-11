import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import "./landing-sponsors.css";
import "../../../components/SponsorCard/SponsorCard.css"
// import SponsorCard from "../../../components/SponsorCard/SponsorCard";
import TechMaghi from "../../../assets/sponsors/tm.webp";
import Samsung from "../../../assets/sponsors/samsung.webp";
import Remarkskill from "../../../assets/sponsors/remarkskill.webp";
import RobocapLeague from "../../../assets/sponsors/robocap.webp";
import EdutechLife from "../../../assets/sponsors/edutech.webp";
import Techobyte from "../../../assets/sponsors/techobyte.webp";
import Robosapiens from "../../../assets/sponsors/robosapiens.webp";
import Wingfotech from "../../../assets/sponsors/wingfotech.webp";

const SPONSORS = {
  sponsorsUp1: [
    { index: 1, name: "Samsung", image: Samsung },
    { index: 2, name: "TechMaghi", image: TechMaghi },
    { index: 3, name: "Remarkskill", image: Remarkskill },
    { index: 4, name: "Robocap League", image: RobocapLeague },
  ],
  sponsorsUp2: [
    { index: 1, name: "Edutech Life", image: EdutechLife },
    { index: 2, name: "Techobyte", image: Techobyte },
    { index: 3, name: "Robosapiens", image: Robosapiens },
    { index: 4, name: "Wingfotech", image: Wingfotech },
  ],
};

const Sponsors = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [intervalId, setIntervalId] = useState(null);
  const [ref, inView] = useInView({ triggerOnce: true });

  const handleMouseOver = (event) => {
    let iteration = 0;

    clearInterval(intervalId);

    const newIntervalId = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return event.target.dataset.value[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= event.target.dataset.value.length) {
        clearInterval(newIntervalId);
      }

      iteration += 1 / 3;
    }, 50);

    setIntervalId(newIntervalId);
  };

  useEffect(() => {
    const h1Elements = document.querySelectorAll(".sponser-landing-heading");

    h1Elements.forEach((element) => {
      element.addEventListener("mouseover", handleMouseOver);
    });

    return () => {
      h1Elements.forEach((element) => {
        element.removeEventListener("mouseover", handleMouseOver);
      });
      clearInterval(intervalId);
    };
  }, [intervalId]);

  useEffect(() => {
    if (inView) {
      const h1Element = document.querySelector(".sponser-landing-heading");
      h1Element.dispatchEvent(new Event("mouseover"));
    }
  }, [inView]);

  useEffect(() => {
    const scrollers = document.querySelectorAll(".sponser-scroller");

    if (window.innerWidth > 768) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector(".sponser-scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        Array.from({ length: 3 }, () => {
          scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
          });
        });
      });
    }
  }, []);

  return (
    <div className="sponser-landing-comp">
      <div className="text-animation" ref={ref}>
        <div className="sponser-landing-heading landing-heading" data-value="SPONSORS">
          SPONSORS
        </div>
      </div>
      <div className="sponser-landing-sponsors-container">
        {Object.values(SPONSORS).map((sponsorsList, i) => (
          <div
            key={`sponsorsUp${i + 1}`}
            className={`${window.innerWidth < 768
              ? "sponser-landing-sponsors-container-top-boss "
              : "sponser-landing-sponsors-container-top-boss sponser-scroller"
              }`}
            data-direction={i === 0 ? "right" : "left"}
            data-speed="slow"
          >
            <div
              className={`${window.innerWidth < 768
                ? "sponser-landing-sponsors-container-top "
                : "sponser-landing-sponsors-container-top sponser-scroller__inner"
                }`}
            >
              {sponsorsList.map((sponsor) => (
                <div key={sponsor.index} className="sponser-landing-sponsor-card">
                  {/* <SponsorCard sponsor={sponsor} /> */}
                  <div key={sponsor.index} className="sponsor-container" id={`sponsor${sponsor.index}`}>
                    <div className="sponsor-heading">{sponsor.header}</div>
                    <div className="sponsor-box-container sponsor-shape">
                      <div className="sponsor-box sponsor-shape">
                        <div className="sponsor-box-img-div">
                          <img src={sponsor.image} alt={sponsor.name} className="sponsor-box-img" />
                        </div>
                        <div className="sponsor-box-text">{sponsor.name}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;






// const sponsorsUp3 = [
//   {
//     index: 1,
//     name: "Orkes",
//     image: Orkes,
//   },
//   {
//     index: 2,
//     name: "Jagran Josh",
//     image: JagranJosh,
//   },
//   {
//     index: 3,
//     name: "UnStop",
//     image: UnStop,
//   },
//   {
//     index: 4,
//     name: "SilliconIndia",
//     image: SilliconIndia,
//   },
// ];