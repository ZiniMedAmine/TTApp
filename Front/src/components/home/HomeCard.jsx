import "./HomeCard.css";

function HomeCard(props) {
    return (
        <div className="home-card d-block mx-auto my-2 ">
          <div className="p-4">
          <img src={props.img} alt={props.title} className="cardicons mb-3 colorful"/>
          <img src={props.imgWhite} alt={props.title} className="cardicons mb-3 white"/>

          <h4 className="cardtxt">{props.title}</h4>
          </div>
        </div>
    )
}
export default HomeCard;