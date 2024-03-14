import './Story.css';
function Story() {
    return(
        <div className="story-container">
      <img
        className="story-image"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3GBuo5fELJCr7nJ293kFWoKG4-0Lz0-M4Ww&usqp=CAU"
        alt="Story Image"
      />
      <div className="story-footer">
        <img className="imag1" src="https://media.licdn.com/dms/image/D4D03AQGVl11fuDsJWQ/profile-displayphoto-shrink_200_200/0/1709208456970?e=2147483647&v=beta&t=6BzKtR0oFBrggQAI47Hf3w1LxHNWYsI8SpkV2Q8ixjw" alt="User Profile" />
        <h3>MHS Patel</h3>
      </div>
    </div>
    );
}

export default Story;