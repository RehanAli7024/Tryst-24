import { useEffect, useState, useRef } from "react";
import "./landing-speakers.css";
import SpeakerCard from "../../../components/SpeakerCard/SpeakerCard.jsx";
import BillGates from "../../../assets/speakers/BillGates.webp";
import CarlPei from "../../../assets/speakers/CarlPei.webp";
import SamarSingla from "../../../assets/speakers/SamarSingla.webp";
import NityaSharma from "../../../assets/speakers/NityaSharma.webp";
import DrTanuJain from "../../../assets/speakers/DrTanuJain.webp";
import AbhiNiyu from "../../../assets/speakers/AbhiAndNiyu.webp";

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
    // Text animation
    const [animationInterval, setAnimationInterval] = useState(null);
    const textRef = useRef(null);

    const [animationDone, setAnimationDone] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const target = entries[0];
                if (target.isIntersecting) {
                    // Start animation when the target is in the viewport
                    if (!animationDone) {
                        handleMouseOver();
                        setAnimationDone(true);
                    }
                }
            },
            { threshold: 0.5 } // Adjust the threshold as needed
        );

        // Observe the target element
        observer.observe(textRef.current);

        // Cleanup the observer when the component unmounts
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
        );
    };

    //Slider animation

    // const [hovered, setHovered] = useState(false);

    // const setHover = (value) => {
    //     setHovered(value);
    // };

    useEffect(() => {
        const container = document.querySelector('.landing-speakers-container');

        if (container) {
            container.scrollLeft = container.scrollWidth * 0.4;
        }

        if (window.innerWidth > 768) {
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
                className="landing-heading text-animation"
                data-value="SPEAKERS"
                onMouseOver={handleMouseOver}
                ref={textRef}
            >
                SPEAKERS
            </div>
            <div className="landing-speakers-container scroller">
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
