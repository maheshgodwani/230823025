import './Story.css';
function Story(props) {
    return(
        <div className="story-container">
      <img
        className="story-image"
        src={props.simg}
        alt="Story Image"
      />
      <div className="story-footer">
        <img className="imag1" src={props.pimg} alt="User Profile" />
        <h3>{props.name}</h3>
      </div>
    </div>
    );
}

export default Story;