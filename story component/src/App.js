import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Story Component</title>
    <style
      dangerouslySetInnerHTML={{
        __html:
          "\n    body {\n      font-family: Arial, sans-serif;\n      margin: 0;\n      padding: 0;\n      display: flex;\n      justify-content: center;\n    }\n\n    .story-container {\n      width: 160px;\n      overflow: hidden;\n      border-radius: 8px;\n      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n      position: relative;\n    }\n\n    .story-footer {\n      padding: 8px;\n      display: flex;\n      align-items: center;\n      position: absolute;\n      bottom: 0;\n      width: 100%;\n      box-sizing: border-box;\n    }\n\n    .story-footer img {\n      width: 40px;\n      height: 40px;\n      border-radius: 50%;\n      margin-right: 8px;\n    }\n\n    .story-footer h3 {\n      margin: 0;\n      font-size: 14px;\n    }\n\n\n    .story-image {\n      width: 100%;\n      height: 250px;\n      object-fit: cover;\n    }\n    \n\n    \n  "
      }}
    />
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
  </>
  
  );
}

export default App;
