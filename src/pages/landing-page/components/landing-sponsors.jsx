import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import "./landing-sponsors.css";
import "../../../components/SponsorCard/SponsorCard.css";
// import SponsorCard from "../../../components/SponsorCard/SponsorCard";
import Samsung from "../../../assets/sponsors/samsung.webp";
import TechMaghi from "../../../assets/sponsors/tm.webp";
import Remarkskill from "../../../assets/sponsors/remarkskill.webp";
import Robocap from "../../../assets/sponsors/robocap.webp";
import Edutech from "../../../assets/sponsors/edutech.webp";
import Techobyte from "../../../assets/sponsors/techobyte.webp";
import Robosapiens from "../../../assets/sponsors/robosapiens.webp";
import Wingfotech from "../../../assets/sponsors/wingfotech.webp";
import Orkes from "../../../assets/sponsors/orkes.webp";
import Jagran from "../../../assets/sponsors/jagran.webp";
import UnStop from "../../../assets/sponsors/unstop.webp";
import SiliconIndia from "../../../assets/sponsors/siliconindia.webp";
import Nucleus from "../../../assets/sponsors/nucleus.webp";
import Aviakul from "../../../assets/sponsors/aviakul.webp";
import Creya from "../../../assets/sponsors/creya.webp";
import Fetchai from "../../../assets/sponsors/fetchai.webp";
import Intel from "../../../assets/sponsors/intel.webp";
import JungleeGames from "../../../assets/sponsors/jungleegames.webp";
import Kredent from "../../../assets/sponsors/kredent.webp";
import Logiqids from "../../../assets/sponsors/logiqids.webp";
import Medulance from "../../../assets/sponsors/medulance.webp";
import PieMatrix from "../../../assets/sponsors/piematrix.webp";
import Twoss from "../../../assets/sponsors/twoss.webp";
import VirtualNess from "../../../assets/sponsors/virtualness.webp";
import Technocon from "../../../assets/sponsors/technocon.webp";

const SPONSORS = {
  sponsorsUp1: [
    { index: 1, name: "Samsung", image: Samsung },
    { index: 2, name: "TechMaghi", image: TechMaghi },
    { index: 3, name: "Remarkskill", image: Remarkskill },
    { index: 4, name: "Robocap League", image: Robocap },
    { index: 5, name: "Orkes", image: Orkes },
    { index: 6, name: "Jagran Josh", image: Jagran },
    { index: 7, name: "UnStop", image: UnStop },
    { index: 8, name: "SilliconIndia", image: SiliconIndia },
    { index: 9, name: "Nucleus Software", image: Nucleus },
    { index: 10, name: "Aviakul", image: Aviakul },
    { index: 11, name: "Creya", image: Creya },
    { index: 12, name: "Fetchai", image: Fetchai },
  ],
  sponsorsUp2: [
    { index: 1, name: "Edutech Life", image: Edutech },
    { index: 2, name: "Techobyte", image: Techobyte },
    { index: 3, name: "Technocon", image: Technocon },
    { index: 4, name: "Wingfotech", image: Wingfotech },
    { index: 5, name: "Intel", image: Intel },
    { index: 6, name: "Junglee Games", image: JungleeGames },
    { index: 7, name: "Kredent Academy", image: Kredent },
    { index: 8, name: "Logiqids", image: Logiqids },
    { index: 9, name: "Medulance", image: Medulance },
    { index: 10, name: "PieMatrix", image: PieMatrix },
    { index: 11, name: "Twoss", image: Twoss },
    { index: 12, name: "VirtualNess", image: VirtualNess },
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

    if (window.innerWidth > 0) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector(
          ".sponser-scroller__inner"
        );
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
        <div
          className="sponser-landing-heading landing-heading"
          data-value="SPONSORS"
        >
          SPONSORS
        </div>
      </div>
      <div className="sponser-landing-sponsors-container">
        {Object.values(SPONSORS).map((sponsorsList, i) => (
          <div
            key={`sponsorsUp${i + 1}`}
            className={`${
              window.innerWidth < 0
                ? "sponser-landing-sponsors-container-top-boss "
                : "sponser-landing-sponsors-container-top-boss sponser-scroller"
            }`}
            data-direction={i === 0 ? "right" : "left"}
            data-speed="slow"
          >
            <div
              className={`${
                window.innerWidth < 0
                  ? "sponser-landing-sponsors-container-top "
                  : "sponser-landing-sponsors-container-top sponser-scroller__inner"
              }`}
            >
              {sponsorsList.map((sponsor) => (
                <div
                  key={sponsor.index}
                  className="sponser-landing-sponsor-card"
                >
                  {/* <SponsorCard sponsor={sponsor} /> */}
                  <div
                    key={sponsor.index}
                    className="sponsor-container"
                    id={`sponsor${sponsor.index}`}
                  >
                    <div className="sponsor-heading">{sponsor.header}</div>
                    <div className="sponsor-box-container sponsor-shape">
                      <div className="sponsor-box sponsor-shape">
                        <div className="sponsor-box-img-div">
                          <img
                            src={sponsor.image}
                            alt={sponsor.name}
                            className="sponsor-box-img"
                          />
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
