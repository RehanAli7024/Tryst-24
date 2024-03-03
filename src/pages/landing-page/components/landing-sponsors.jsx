import { useEffect, useState, useRef } from "react";
import "./landing-sponsors.css";  // Updated CSS file
import SponsorCard from "../../../components/SponsorCard/SponsorCard";
import TechMaghi from "../../../assets/sponsors/tm.webp";
import Samsung from "../../../assets/sponsors/samsung.webp";
import Remarkskill from "../../../assets/sponsors/remarkskill.webp";
import RobocapLeague from "../../../assets/sponsors/robocap.webp";
import EdutechLife from "../../../assets/sponsors/edutech.webp";
import Techobyte from "../../../assets/sponsors/techobyte.webp";
import Robosapiens from "../../../assets/sponsors/robosapiens.webp";
import Wingfotech from "../../../assets/sponsors/wingfotech.webp";
import Orkes from "../../../assets/sponsors/orkes.webp";
import JagranJosh from "../../../assets/sponsors/jagran.webp";
import UnStop from "../../../assets/sponsors/unstop.webp";
import SilliconIndia from "../../../assets/sponsors/siliconindia.webp";

const sponsorsUp1 = [
  {
    index: 1,
    name: "Samsung",
    image: Samsung,
  },
  {
    index: 2,
    name: "TechMaghi",
    image: TechMaghi,
  },
  {
    index: 3,
    name: "Remarkskill",
    image: Remarkskill,
  },
  {
    index: 4,
    name: "Robocap League",
    image: RobocapLeague,
  },
];

const sponsorsUp2 = [
  {
    index: 1,
    name: "Edutech Life",
    image: EdutechLife,
  },
  {
    index: 2,
    name: "Techobyte",
    image: Techobyte,
  },
  {
    index: 3,
    name: "Robosapiens",
    image: Robosapiens,
  },
  {
    index: 4,
    name: "Wingfotech",
    image: Wingfotech,
  },
];

const Sponsors = () => {
  const [animationInterval, setAnimationInterval] = useState(null);
  const textRef = useRef(null);

  useEffect(() => {
    // ---------------------------------- Scroller Animation ----------------------------------
    const scrollers = document.querySelectorAll(".sponser-scroller"); // Updated class name
    if (window.innerWidth > 768) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector(
          ".sponser-scroller__inner"
        ); // Updated class name
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
    // --------------------------------------------------------- Scroller Animation --------------------------------------------------------
    // Intersection Observer setup

    // --------------------------------------------------- Font animation--------------------------------------------------------------------
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting) {
          // Start animation when the target is in the viewport
          handleMouseOver();
        }
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    // Observe the target element
    observer.observe(textRef.current);

    // Cleanup the observer when component unmounts
    return () => {
      observer.disconnect();
    };
  }, [textRef]);

  const handleMouseOver = () => {
    let iteration = 0;

    clearInterval(animationInterval);

    setAnimationInterval(
      setInterval(() => {
        textRef.current.innerText = textRef.current.innerText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return textRef.current.dataset.value[index];
            }

            return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
          })
          .join("");

        if (iteration >= textRef.current.dataset.value.length) {
          clearInterval(animationInterval);
        }

        iteration += 1 / 3;
      }, 30)
      //   -----------------------------------------------------------------------Font ANimation--------------------------------------------------
    );
  };

  return (
    <div className="sponser-landing-comp">  {/* Updated class name */}
      <div
        className="sponser-landing-heading text-animation"  // Updated class name
        data-value="SPONSORS"
        onMouseOver={handleMouseOver}
        ref={textRef} // Add ref to the text element
      >
        SPONSORS
      </div>
      <div className="sponser-landing-sponsors-container">  {/* Updated class name */}
        <div
          className={
            window.innerWidth < 768
              ? "sponser-landing-sponsors-container-top-boss "
              : "sponser-landing-sponsors-container-top-boss sponser-scroller"  // Updated class name
          }
          data-direction="right"
          data-speed="slow"
        >
          <div
            className={
              window.innerWidth < 768
                ? "sponser-landing-sponsors-container-top "
                : "sponser-landing-sponsors-container-top sponser-scroller__inner"  // Updated class name
            }
          >
            {sponsorsUp1.map((sponsor) => (
              <div className="sponser-landing-sponsor-card" key={sponsor.index}>  {/* Updated class name */}
                <SponsorCard sponsor={sponsor} />
              </div>
            ))}
          </div>
        </div>
        <div
          className={
            window.innerWidth < 768
              ? "sponser-landing-sponsors-container-bottom-boss "
              : "sponser-landing-sponsors-container-bottom-boss sponser-scroller"  // Updated class name
          }
          data-direction="left"
          data-speed="slow"
        >
          <div
            className={
              window.innerWidth < 768
                ? "sponser-landing-sponsors-container-bottom "
                : "sponser-landing-sponsors-container-bottom sponser-scroller__inner"  // Updated class name
            }
          >
            {sponsorsUp2.map((sponsor) => (
              <div className="sponser-landing-sponsor-card" key={sponsor.index}>  {/* Updated class name */}
                <SponsorCard sponsor={sponsor} />
              </div>
            ))}
          </div>
        </div>
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