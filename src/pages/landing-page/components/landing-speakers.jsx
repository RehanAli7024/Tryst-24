import { useEffect, useState, useRef } from "react";
import "./landing-speakers.css";
import SpeakerCard from "../../../components/SpeakerCard/SpeakerCard.jsx";
import BillGates from "../../../assets/speakers/BillGates.webp";
import CarlPei from "../../../assets/speakers/CarlPei.webp";
import SamarSingla from "../../../assets/speakers/SamarSingla.webp";
import NityaSharma from "../../../assets/speakers/NityaSharma.webp";
import DrTanuJain from "../../../assets/speakers/DrTanuJain.webp";
import AbhiNiyu from "../../../assets/speakers/AbhiAndNiyu.webp";
import { useInView } from "react-intersection-observer";

const speakers = [
    {
        index: 1,
        name: "Bill Gates",
        position: "Founder",
        company: "Microsoft",
        image: BillGates,
    },
    {
        index: 2,
        name: "Carl Pei",
        position: "Co-Founder",
        company: "OnePlus and Nothing",
        image: CarlPei,
    },
    {
        index: 3,
        name: "Samar Singla",
        position: "Co-Founder",
        company: "Jugnoo",
        image: SamarSingla,
    },
    {
        index: 4,
        name: "Nitya Sharma",
        position: "Founder",
        company: "Simpl",
        image: NityaSharma,
    },
    {
        index: 5,
        name: "Dr. Tanu Jain",
        position: "Former",
        company: "IAS Officer",
        image: DrTanuJain,
    },
    {
        index: 6,
        name: "Abhi and Niyu",
        position: "Content",
        company: "Creators",
        image: AbhiNiyu,
    },
];

const Speakers = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const [intervalId, setIntervalId] = useState(null);
    const [ref, inView] = useInView({ triggerOnce: true });

    useEffect(() => {
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

        const h1Elements = document.querySelectorAll(".landing-heading-Speakers");

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
            // Start the animation when in view
            const h1Element = document.querySelector(".landing-heading-Speakers");
            h1Element.dispatchEvent(new Event("mouseover"));
        }
    }, [inView]);


    useEffect(() => {
        const container = document.querySelector('.landing-speakers-container');

        if (container) {
            container.scrollLeft = container.scrollWidth * 0.4;
        }

        if (window.innerWidth > 0) {
            addAnimation();
        }
    }, []);

    const addAnimation = () => {
        const scrollers = document.querySelectorAll(".scroller");

        scrollers.forEach((scroller) => {
            scroller.setAttribute("data-animated", true);

            const scrollerInner = scroller.querySelector(".scroller__inner");
            const scrollerContent = Array.from(scrollerInner.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                duplicatedItem.setAttribute("aria-hidden", true);
                scrollerInner.appendChild(duplicatedItem);
            });

            scroller.addEventListener("mouseout", () => {
                scrollerInner.style.animationPlayState = "running";
            });

            // Add event listeners for hover
            scroller.addEventListener("mouseover", () => {
                scrollerInner.style.animationPlayState = "paused";
            });
        });
    };

    return (
        <div className="landing-comp">
            <div
                className="landing-heading text-animation landing-heading-Speakers"
                data-value="SPEAKERS"
                ref={ref}
            >
                SPEAKERS
            </div>
            <div className="landing-speakers-container scroller" data-speed="slow">
                <div className="landing-speakers-cards scroller__inner" id="landing-speakers-cards">
                    {speakers.map((speaker) => (
                        <div className="landing-speaker-card" key={speaker.index}>
                            <SpeakerCard speaker={speaker} />
                        </div>
                    ))}
                    {speakers.map((speaker) => (
                        <div className="landing-speaker-card" key={speaker.index}>
                            <SpeakerCard speaker={speaker} />
                        </div>
                    ))}
                    {speakers.map((speaker) => (
                        <div className="landing-speaker-card" key={speaker.index}>
                            <SpeakerCard speaker={speaker} />
                        </div>
                    ))}
                    {speakers.map((speaker) => (
                        <div className="landing-speaker-card" key={speaker.index}>
                            <SpeakerCard speaker={speaker} />
                        </div>
                    ))}
                    {speakers.map((speaker) => (
                        <div className="landing-speaker-card" key={speaker.index}>
                            <SpeakerCard speaker={speaker} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Speakers;