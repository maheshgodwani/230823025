// import React, { useEffect, useRef } from 'react';
// import Story from './story.js';
// import './App.css';
// import './Story.css';

// const App = () => {
//   return (
//     <>
//       {/* <div className="main">
//         <div className="scrollmenu" id="scrollmenu">
//           <Story name="MHS Patel" pimg="https://media.licdn.com/dms/image/D4D03AQGVl11fuDsJWQ/profile-displayphoto-shrink_200_200/0/1709208456970?e=2147483647&v=beta&t=6BzKtR0oFBrggQAI47Hf3w1LxHNWYsI8SpkV2Q8ixjw" simg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3GBuo5fELJCr7nJ293kFWoKG4-0Lz0-M4Ww&usqp=CAU"/>
//           <Story name="Ravi" pimg="https://media.licdn.com/dms/image/D4D03AQGVl11fuDsJWQ/profile-displayphoto-shrink_200_200/0/1709208456970?e=2147483647&v=beta&t=6BzKtR0oFBrggQAI47Hf3w1LxHNWYsI8SpkV2Q8ixjw" simg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3GBuo5fELJCr7nJ293kFWoKG4-0Lz0-M4Ww&usqp=CAU"/>
//           <Story name="Meru" pimg="https://media.licdn.com/dms/image/D4D03AQGVl11fuDsJWQ/profile-displayphoto-shrink_200_200/0/1709208456970?e=2147483647&v=beta&t=6BzKtR0oFBrggQAI47Hf3w1LxHNWYsI8SpkV2Q8ixjw" simg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3GBuo5fELJCr7nJ293kFWoKG4-0Lz0-M4Ww&usqp=CAU"/>
//           <Story name="MHS Patel" pimg="https://media.licdn.com/dms/image/D4D03AQGVl11fuDsJWQ/profile-displayphoto-shrink_200_200/0/1709208456970?e=2147483647&v=beta&t=6BzKtR0oFBrggQAI47Hf3w1LxHNWYsI8SpkV2Q8ixjw" simg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3GBuo5fELJCr7nJ293kFWoKG4-0Lz0-M4Ww&usqp=CAU"/>
//           <Story name="Ravi" pimg="https://media.licdn.com/dms/image/D4D03AQGVl11fuDsJWQ/profile-displayphoto-shrink_200_200/0/1709208456970?e=2147483647&v=beta&t=6BzKtR0oFBrggQAI47Hf3w1LxHNWYsI8SpkV2Q8ixjw" simg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3GBuo5fELJCr7nJ293kFWoKG4-0Lz0-M4Ww&usqp=CAU"/>
//           <Story name="Meru" pimg="https://media.licdn.com/dms/image/D4D03AQGVl11fuDsJWQ/profile-displayphoto-shrink_200_200/0/1709208456970?e=2147483647&v=beta&t=6BzKtR0oFBrggQAI47Hf3w1LxHNWYsI8SpkV2Q8ixjw" simg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3GBuo5fELJCr7nJ293kFWoKG4-0Lz0-M4Ww&usqp=CAU"/>
//           <Story name="MHS Patel" pimg="https://media.licdn.com/dms/image/D4D03AQGVl11fuDsJWQ/profile-displayphoto-shrink_200_200/0/1709208456970?e=2147483647&v=beta&t=6BzKtR0oFBrggQAI47Hf3w1LxHNWYsI8SpkV2Q8ixjw" simg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3GBuo5fELJCr7nJ293kFWoKG4-0Lz0-M4Ww&usqp=CAU"/>
//           <Story name="Ravi" pimg="https://media.licdn.com/dms/image/D4D03AQGVl11fuDsJWQ/profile-displayphoto-shrink_200_200/0/1709208456970?e=2147483647&v=beta&t=6BzKtR0oFBrggQAI47Hf3w1LxHNWYsI8SpkV2Q8ixjw" simg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3GBuo5fELJCr7nJ293kFWoKG4-0Lz0-M4Ww&usqp=CAU"/>
//           <Story name="Meru" pimg="https://media.licdn.com/dms/image/D4D03AQGVl11fuDsJWQ/profile-displayphoto-shrink_200_200/0/1709208456970?e=2147483647&v=beta&t=6BzKtR0oFBrggQAI47Hf3w1LxHNWYsI8SpkV2Q8ixjw" simg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3GBuo5fELJCr7nJ293kFWoKG4-0Lz0-M4Ww&usqp=CAU"/>
//           <Story name="MHS Patel" pimg="https://media.licdn.com/dms/image/D4D03AQGVl11fuDsJWQ/profile-displayphoto-shrink_200_200/0/1709208456970?e=2147483647&v=beta&t=6BzKtR0oFBrggQAI47Hf3w1LxHNWYsI8SpkV2Q8ixjw" simg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3GBuo5fELJCr7nJ293kFWoKG4-0Lz0-M4Ww&usqp=CAU"/>
//           <Story name="Ravi" pimg="https://media.licdn.com/dms/image/D4D03AQGVl11fuDsJWQ/profile-displayphoto-shrink_200_200/0/1709208456970?e=2147483647&v=beta&t=6BzKtR0oFBrggQAI47Hf3w1LxHNWYsI8SpkV2Q8ixjw" simg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3GBuo5fELJCr7nJ293kFWoKG4-0Lz0-M4Ww&usqp=CAU"/>
//           <Story name="Meru" pimg="https://media.licdn.com/dms/image/D4D03AQGVl11fuDsJWQ/profile-displayphoto-shrink_200_200/0/1709208456970?e=2147483647&v=beta&t=6BzKtR0oFBrggQAI47Hf3w1LxHNWYsI8SpkV2Q8ixjw" simg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3GBuo5fELJCr7nJ293kFWoKG4-0Lz0-M4Ww&usqp=CAU"/>
//           <Story name="MHS Patel" pimg="https://media.licdn.com/dms/image/D4D03AQGVl11fuDsJWQ/profile-displayphoto-shrink_200_200/0/1709208456970?e=2147483647&v=beta&t=6BzKtR0oFBrggQAI47Hf3w1LxHNWYsI8SpkV2Q8ixjw" simg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3GBuo5fELJCr7nJ293kFWoKG4-0Lz0-M4Ww&usqp=CAU"/>
//           <Story name="Ravi" pimg="https://media.licdn.com/dms/image/D4D03AQGVl11fuDsJWQ/profile-displayphoto-shrink_200_200/0/1709208456970?e=2147483647&v=beta&t=6BzKtR0oFBrggQAI47Hf3w1LxHNWYsI8SpkV2Q8ixjw" simg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3GBuo5fELJCr7nJ293kFWoKG4-0Lz0-M4Ww&usqp=CAU"/>
//           <Story name="Meru" pimg="https://media.licdn.com/dms/image/D4D03AQGVl11fuDsJWQ/profile-displayphoto-shrink_200_200/0/1709208456970?e=2147483647&v=beta&t=6BzKtR0oFBrggQAI47Hf3w1LxHNWYsI8SpkV2Q8ixjw" simg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3GBuo5fELJCr7nJ293kFWoKG4-0Lz0-M4Ww&usqp=CAU"/>
//           <Story name="MHS Patel" pimg="https://media.licdn.com/dms/image/D4D03AQGVl11fuDsJWQ/profile-displayphoto-shrink_200_200/0/1709208456970?e=2147483647&v=beta&t=6BzKtR0oFBrggQAI47Hf3w1LxHNWYsI8SpkV2Q8ixjw" simg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3GBuo5fELJCr7nJ293kFWoKG4-0Lz0-M4Ww&usqp=CAU"/>
//           <Story name="Ravi" pimg="https://media.licdn.com/dms/image/D4D03AQGVl11fuDsJWQ/profile-displayphoto-shrink_200_200/0/1709208456970?e=2147483647&v=beta&t=6BzKtR0oFBrggQAI47Hf3w1LxHNWYsI8SpkV2Q8ixjw" simg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3GBuo5fELJCr7nJ293kFWoKG4-0Lz0-M4Ww&usqp=CAU"/>
//           <Story name="Meru" pimg="https://media.licdn.com/dms/image/D4D03AQGVl11fuDsJWQ/profile-displayphoto-shrink_200_200/0/1709208456970?e=2147483647&v=beta&t=6BzKtR0oFBrggQAI47Hf3w1LxHNWYsI8SpkV2Q8ixjw" simg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3GBuo5fELJCr7nJ293kFWoKG4-0Lz0-M4Ww&usqp=CAU"/>
//         </div>
//       </div>  */}

// const scrollMenuRef = useRef(null);

// useEffect(() => {
//   const handleWheel = (event) => {
//     event.preventDefault();
//     scrollMenuRef.current.scrollLeft += event.deltaY;
//   };

//   const scrollMenu = scrollMenuRef.current;
//   if (scrollMenu) {
//     scrollMenu.addEventListener('wheel', handleWheel);

//     // Cleanup function
//     return () => {
//       scrollMenu.removeEventListener('wheel', handleWheel);
//     };
//   }
// }, []);


// <div className="main">
//       <div className="scrollmenu" ref={scrollMenuRef}>
//         <Story
//           storyTitle="MHS Patel"
//           storyImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3GBuo5fELJCr7nJ293kFWoKG4-0Lz0-M4Ww&usqp=CAU"
//           profileImage="https://media.licdn.com/dms/image/D4D03AQGVl11fuDsJWQ/profile-displayphoto-shrink_200_200/0/1709208456970?e=2147483647&v=beta&t=6BzKtR0oFBrggQAI47Hf3w1LxHNWYsI8SpkV2Q8ixjw"
//         />
//         <Story
//           storyTitle="MHS Patel"
//           storyImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3GBuo5fELJCr7nJ293kFWoKG4-0Lz0-M4Ww&usqp=CAU"
//           profileImage="https://media.licdn.com/dms/image/D4D03AQGVl11fuDsJWQ/profile-displayphoto-shrink_200_200/0/1709208456970?e=2147483647&v=beta&t=6BzKtR0oFBrggQAI47Hf3w1LxHNWYsI8SpkV2Q8ixjw"
//         />
//         <Story
//           storyTitle="MHS Patel"
//           storyImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3GBuo5fELJCr7nJ293kFWoKG4-0Lz0-M4Ww&usqp=CAU"
//           profileImage="https://media.licdn.com/dms/image/D4D03AQGVl11fuDsJWQ/profile-displayphoto-shrink_200_200/0/1709208456970?e=2147483647&v=beta&t=6BzKtR0oFBrggQAI47Hf3w1LxHNWYsI8SpkV2Q8ixjw"
//         />
//         <Story
//           storyTitle="MHS Patel"
//           storyImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3GBuo5fELJCr7nJ293kFWoKG4-0Lz0-M4Ww&usqp=CAU"
//           profileImage="https://media.licdn.com/dms/image/D4D03AQGVl11fuDsJWQ/profile-displayphoto-shrink_200_200/0/1709208456970?e=2147483647&v=beta&t=6BzKtR0oFBrggQAI47Hf3w1LxHNWYsI8SpkV2Q8ixjw"
//         />
//         <Story
//           storyTitle="MHS Patel"
//           storyImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3GBuo5fELJCr7nJ293kFWoKG4-0Lz0-M4Ww&usqp=CAU"
//           profileImage="https://media.licdn.com/dms/image/D4D03AQGVl11fuDsJWQ/profile-displayphoto-shrink_200_200/0/1709208456970?e=2147483647&v=beta&t=6BzKtR0oFBrggQAI47Hf3w1LxHNWYsI8SpkV2Q8ixjw"
//         />
//         <Story
//           storyTitle="MHS Patel"
//           storyImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3GBuo5fELJCr7nJ293kFWoKG4-0Lz0-M4Ww&usqp=CAU"
//           profileImage="https://media.licdn.com/dms/image/D4D03AQGVl11fuDsJWQ/profile-displayphoto-shrink_200_200/0/1709208456970?e=2147483647&v=beta&t=6BzKtR0oFBrggQAI47Hf3w1LxHNWYsI8SpkV2Q8ixjw"
//         />
//         <Story
//           storyTitle="MHS Patel"
//           storyImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3GBuo5fELJCr7nJ293kFWoKG4-0Lz0-M4Ww&usqp=CAU"
//           profileImage="https://media.licdn.com/dms/image/D4D03AQGVl11fuDsJWQ/profile-displayphoto-shrink_200_200/0/1709208456970?e=2147483647&v=beta&t=6BzKtR0oFBrggQAI47Hf3w1LxHNWYsI8SpkV2Q8ixjw"
//         />
//         <Story
//           storyTitle="MHS Patel"
//           storyImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3GBuo5fELJCr7nJ293kFWoKG4-0Lz0-M4Ww&usqp=CAU"
//           profileImage="https://media.licdn.com/dms/image/D4D03AQGVl11fuDsJWQ/profile-displayphoto-shrink_200_200/0/1709208456970?e=2147483647&v=beta&t=6BzKtR0oFBrggQAI47Hf3w1LxHNWYsI8SpkV2Q8ixjw"
//         />
//         <Story
//           storyTitle="MHS Patel"
//           storyImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3GBuo5fELJCr7nJ293kFWoKG4-0Lz0-M4Ww&usqp=CAU"
//           profileImage="https://media.licdn.com/dms/image/D4D03AQGVl11fuDsJWQ/profile-displayphoto-shrink_200_200/0/1709208456970?e=2147483647&v=beta&t=6BzKtR0oFBrggQAI47Hf3w1LxHNWYsI8SpkV2Q8ixjw"
//         />
//         <Story
//           storyTitle="MHS Patel"
//           storyImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3GBuo5fELJCr7nJ293kFWoKG4-0Lz0-M4Ww&usqp=CAU"
//           profileImage="https://media.licdn.com/dms/image/D4D03AQGVl11fuDsJWQ/profile-displayphoto-shrink_200_200/0/1709208456970?e=2147483647&v=beta&t=6BzKtR0oFBrggQAI47Hf3w1LxHNWYsI8SpkV2Q8ixjw"
//         />
//         <Story
//           storyTitle="MHS Patel"
//           storyImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3GBuo5fELJCr7nJ293kFWoKG4-0Lz0-M4Ww&usqp=CAU"
//           profileImage="https://media.licdn.com/dms/image/D4D03AQGVl11fuDsJWQ/profile-displayphoto-shrink_200_200/0/1709208456970?e=2147483647&v=beta&t=6BzKtR0oFBrggQAI47Hf3w1LxHNWYsI8SpkV2Q8ixjw"
//         />
//         <Story
//           storyTitle="MHS Patel"
//           storyImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3GBuo5fELJCr7nJ293kFWoKG4-0Lz0-M4Ww&usqp=CAU"
//           profileImage="https://media.licdn.com/dms/image/D4D03AQGVl11fuDsJWQ/profile-displayphoto-shrink_200_200/0/1709208456970?e=2147483647&v=beta&t=6BzKtR0oFBrggQAI47Hf3w1LxHNWYsI8SpkV2Q8ixjw"
//         />
//         <Story
//           storyTitle="MHS Patel"
//           storyImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3GBuo5fELJCr7nJ293kFWoKG4-0Lz0-M4Ww&usqp=CAU"
//           profileImage="https://media.licdn.com/dms/image/D4D03AQGVl11fuDsJWQ/profile-displayphoto-shrink_200_200/0/1709208456970?e=2147483647&v=beta&t=6BzKtR0oFBrggQAI47Hf3w1LxHNWYsI8SpkV2Q8ixjw"
//         />
//         <Story
//           storyTitle="MHS Patel"
//           storyImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3GBuo5fELJCr7nJ293kFWoKG4-0Lz0-M4Ww&usqp=CAU"
//           profileImage="https://media.licdn.com/dms/image/D4D03AQGVl11fuDsJWQ/profile-displayphoto-shrink_200_200/0/1709208456970?e=2147483647&v=beta&t=6BzKtR0oFBrggQAI47Hf3w1LxHNWYsI8SpkV2Q8ixjw"
//         />
//         <Story
//           storyTitle="MHS Patel"
//           storyImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3GBuo5fELJCr7nJ293kFWoKG4-0Lz0-M4Ww&usqp=CAU"
//           profileImage="https://media.licdn.com/dms/image/D4D03AQGVl11fuDsJWQ/profile-displayphoto-shrink_200_200/0/1709208456970?e=2147483647&v=beta&t=6BzKtR0oFBrggQAI47Hf3w1LxHNWYsI8SpkV2Q8ixjw"
//         />
//         <Story
//           storyTitle="MHS Patel"
//           storyImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3GBuo5fELJCr7nJ293kFWoKG4-0Lz0-M4Ww&usqp=CAU"
//           profileImage="https://media.licdn.com/dms/image/D4D03AQGVl11fuDsJWQ/profile-displayphoto-shrink_200_200/0/1709208456970?e=2147483647&v=beta&t=6BzKtR0oFBrggQAI47Hf3w1LxHNWYsI8SpkV2Q8ixjw"
//         />
//         <Story
//           storyTitle="MHS Patel"
//           storyImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3GBuo5fELJCr7nJ293kFWoKG4-0Lz0-M4Ww&usqp=CAU"
//           profileImage="https://media.licdn.com/dms/image/D4D03AQGVl11fuDsJWQ/profile-displayphoto-shrink_200_200/0/1709208456970?e=2147483647&v=beta&t=6BzKtR0oFBrggQAI47Hf3w1LxHNWYsI8SpkV2Q8ixjw"
//         />
//         <Story
//           storyTitle="MHS Patel"
//           storyImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3GBuo5fELJCr7nJ293kFWoKG4-0Lz0-M4Ww&usqp=CAU"
//           profileImage="https://media.licdn.com/dms/image/D4D03AQGVl11fuDsJWQ/profile-displayphoto-shrink_200_200/0/1709208456970?e=2147483647&v=beta&t=6BzKtR0oFBrggQAI47Hf3w1LxHNWYsI8SpkV2Q8ixjw"
//         />
//         <Story
//           storyTitle="MHS Patel"
//           storyImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3GBuo5fELJCr7nJ293kFWoKG4-0Lz0-M4Ww&usqp=CAU"
//           profileImage="https://media.licdn.com/dms/image/D4D03AQGVl11fuDsJWQ/profile-displayphoto-shrink_200_200/0/1709208456970?e=2147483647&v=beta&t=6BzKtR0oFBrggQAI47Hf3w1LxHNWYsI8SpkV2Q8ixjw"
//         />
//         <Story
//           storyTitle="MHS Patel"
//           storyImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3GBuo5fELJCr7nJ293kFWoKG4-0Lz0-M4Ww&usqp=CAU"
//           profileImage="https://media.licdn.com/dms/image/D4D03AQGVl11fuDsJWQ/profile-displayphoto-shrink_200_200/0/1709208456970?e=2147483647&v=beta&t=6BzKtR0oFBrggQAI47Hf3w1LxHNWYsI8SpkV2Q8ixjw"
//         />
//         <Story
//           storyTitle="MHS Patel"
//           storyImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3GBuo5fELJCr7nJ293kFWoKG4-0Lz0-M4Ww&usqp=CAU"
//           profileImage="https://media.licdn.com/dms/image/D4D03AQGVl11fuDsJWQ/profile-displayphoto-shrink_200_200/0/1709208456970?e=2147483647&v=beta&t=6BzKtR0oFBrggQAI47Hf3w1LxHNWYsI8SpkV2Q8ixjw"
//         />
//         <Story
//           storyTitle="MHS Patel"
//           storyImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3GBuo5fELJCr7nJ293kFWoKG4-0Lz0-M4Ww&usqp=CAU"
//           profileImage="https://media.licdn.com/dms/image/D4D03AQGVl11fuDsJWQ/profile-displayphoto-shrink_200_200/0/1709208456970?e=2147483647&v=beta&t=6BzKtR0oFBrggQAI47Hf3w1LxHNWYsI8SpkV2Q8ixjw"
//         />
//         <Story
//           storyTitle="MHS Patel"
//           storyImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3GBuo5fELJCr7nJ293kFWoKG4-0Lz0-M4Ww&usqp=CAU"
//           profileImage="https://media.licdn.com/dms/image/D4D03AQGVl11fuDsJWQ/profile-displayphoto-shrink_200_200/0/1709208456970?e=2147483647&v=beta&t=6BzKtR0oFBrggQAI47Hf3w1LxHNWYsI8SpkV2Q8ixjw"
//         />
//         {/* Add more Story components with different props */}
//       </div>
//     </div>
//     </>
//   );
// }

// export default App;

import React, { useEffect, useRef } from 'react';
import Story from './story.js';
import './App.css';
import './Story.css';

const App = () => {
  const scrollMenuRef = useRef(null);

  useEffect(() => {
    const handleWheel = (event) => {
      event.preventDefault();
      scrollMenuRef.current.scrollLeft += event.deltaY;
    };

    const scrollMenu = scrollMenuRef.current;
    if (scrollMenu) {
      scrollMenu.addEventListener('wheel', handleWheel);

      // Cleanup function
      return () => {
        scrollMenu.removeEventListener('wheel', handleWheel);
      };
    }
  }, []);

  return (
    <div className="main">
      <div className="scrollmenu" ref={scrollMenuRef}>
        {[...Array(20)].map((_, index) => ( // Create 20 Story components
          <Story
            key={index}
            storyTitle={`Story ${index + 1}`}
            storyImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3GBuo5fELJCr7nJ293kFWoKG4-0Lz0-M4Ww&usqp=CAU"
            profileImage="https://media.licdn.com/dms/image/D4D03AQGVl11fuDsJWQ/profile-displayphoto-shrink_200_200/0/1709208456970?e=2147483647&v=beta&t=6BzKtR0oFBrggQAI47Hf3w1LxHNWYsI8SpkV2Q8ixjw"
            />
        ))}
      </div>
    </div>
  );
}

export default App;
