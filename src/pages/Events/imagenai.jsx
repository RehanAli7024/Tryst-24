import "./imagen.css";
import Placeholder from "./img_placeholder.png";
const imagenai =() => {

    return (
        <>
            <div className="imagen_box">
                <div className="imagen_title">
                    Imagen Ai
                </div>
                <div className="how_to_use">
                    How to Play?
                </div>
                <div className="bullet_box">
                    <div className="bullet">
                        1. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti earum quo aut, alias exercitationem libero.
                    </div>
                    <div className="bullet">
                        1. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti earum quo aut, alias exercitationem libero.
                    </div>
                    <div className="bullet">
                        1. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti earum quo aut, alias exercitationem libero.
                    </div>
                    <div className="bullet">
                        1. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti earum quo aut, alias exercitationem libero.
                    </div>
                </div>

                <div className="imagebox">
                    <div className="image_topic">Lorem</div>
                    <div className="image_desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, error.</div>
                    <div className="imagebox_main">
                        <img src={Placeholder} alt="" />
                        <img src={Placeholder} alt="" />
                    </div>
                </div>
                <div className="imagebox">
                    <div className="image_topic">Lorem</div>
                    <div className="image_desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, error.</div>
                    <div className="imagebox_main">
                        <img src={Placeholder} alt="" />
                        <img src={Placeholder} alt="" />
                    </div>
                </div>
                <div className="imagebox">
                    <div className="image_topic">Lorem</div>
                    <div className="image_desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, error.</div>
                    <div className="imagebox_main">
                        <img src={Placeholder} alt="" />
                        <img src={Placeholder} alt="" />
                    </div>
                </div>
                <div className="imagebox">
                    <div className="image_topic">Lorem</div>
                    <div className="image_desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, error.</div>
                    <div className="imagebox_main">
                        <img src={Placeholder} alt="" />
                        <img src={Placeholder} alt="" />
                    </div>
                </div>
            </div>
            
        </>
    );
};
export default imagenai;