// import React from "react";
// // import { motion } from "framer-motion";
// import Slider from "react-animated-slider";
// import "react-animated-slider/build/horizontal.css";
// // import styled, { keyframes } from 'styled-components';
// // import slideInDown from 'react-animations/lib/slide-in-down';

// // const AnimatedComponent = styled.div`
// //   animation: 4.5s ${keyframes(slideInDown)};
// // `;

// function Destinations() {
//   const slides = [
//     {
//       title: "First item",
//       description: "Lorem ipsum",
//       image: "https://res.cloudinary.com/elijjaaahhhh/image/upload/v1608075439/WhatsApp_Image_2020-12-16_at_12.35.47_AM_ygmdk1.jpg",
//     },
//     {
//       title: "Second item",
//       description: "Lorem ipsum",
//       image: "https://i.imgur.com/DCdBXcq.jpg",
//     },
//     {
//       title: "First item",
//       description: "Lorem ipsum",
//       image: "https://i.imgur.com/DCdBXcq.jpg",
//     },
//     {
//       title: "Second item",
//       description: "Lorem ipsum",
//       image: "https://i.imgur.com/DCdBXcq.jpg",
//     },
//     {
//       title: "First item",
//       description: "Lorem ipsum",
//       image: "https://i.imgur.com/DCdBXcq.jpg",
//     },
//     {
//       title: "Second item",
//       description: "Lorem ipsum",
//       image: "https://i.imgur.com/DCdBXcq.jpg",
//     },
//   ];
//   return (
//     <div>
//       <h1>List all Destinations</h1>
//       {/* <AnimatedComponent>I am animated</AnimatedComponent> */}
//       <Slider autoplay={1000} animateOut>
//         {slides.slice(0, 3).map((slide, index) => (
//           <div
//             style={{
//               background: `url('${slide.image}') no-repeat center center`,
//               height: "auto",
//               width: "90vw",
//               margin: "0 auto",
//             }}
//             key={index}
//           >
//             <h2>{slide.title}</h2>
//             <div>{slide.description}</div>
//           </div>
//         ))}
//       </Slider>
//       {/* <motion.div
//         initial={{
//           opacity: 0,
//           x: 200,
//         }}
//         animate={{
//           opacity: 1,
//           x: 0,
//         }}
//         transition={{
//             duration: 1
//         }}
//       >
//         <div class='card col-4'>
//           <div class='card-body'>
//             <h5 class='card-title'>Card title</h5>
//             <h6 class='card-subtitle mb-2 text-muted'>Card subtitle</h6>
//             <p class='card-text'>
//               Some quick example text to build on the card title and make up the
//               bulk of the card's content.
//             </p>
//             <a href='#' class='card-link'>
//               Card link
//             </a>
//             <a href='#' class='card-link'>
//               Another link
//             </a>
//           </div>
//         </div>
//       </motion.div>

//       <div>
//         <div class='card col-4'>
//           <div class='card-body'>
//             <h5 class='card-title'>Card title</h5>
//             <h6 class='card-subtitle mb-2 text-muted'>Card subtitle</h6>
//             <p class='card-text'>
//               Some quick example text to build on the card title and make up the
//               bulk of the card's content.
//             </p>
//             <a href='#' class='card-link'>
//               Card link
//             </a>
//             <a href='#' class='card-link'>
//               Another link
//             </a>
//           </div>
//         </div>
//       </div> */}

//       {/* <motion.div
//         initial={{
//           opacity: 0,
//           x: 200,
//         }}
//         animate={{
//           opacity: 1,
//           x: 0,
//         }}
//         transition={{
//             duration: 1
//         }}
//       >
//         <div class='card col-4'>
//           <div class='card-body'>
//             <h5 class='card-title'>Card title</h5>
//             <h6 class='card-subtitle mb-2 text-muted'>Card subtitle</h6>
//             <p class='card-text'>
//               Some quick example text to build on the card title and make up the
//               bulk of the card's content.
//             </p>
//             <a href='#' class='card-link'>
//               Card link
//             </a>
//             <a href='#' class='card-link'>
//               Another link
//             </a>
//           </div>
//         </div>
//       </motion.div> */}
//     </div>
//   );
// }

// export default Destinations;
