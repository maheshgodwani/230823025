import './Story.css';

function Story(props) {
    return(

    <>
      <div className="story-container">
      <img src={props.storyImage} alt="Story" className="story-image" />
      <div className="story-footer">
        <img src={props.profileImage} alt="Profile" className="profile-image" />
        <h3>{props.storyTitle}</h3>
      </div>
    </div>
    </>
    );
}

export default Story;