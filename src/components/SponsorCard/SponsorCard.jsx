import "./SponsorCard.css"

function SponsorCard({sponsor}){
    return (
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
    )
};

export default SponsorCard;