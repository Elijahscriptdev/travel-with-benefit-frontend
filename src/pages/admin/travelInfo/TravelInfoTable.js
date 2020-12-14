// import React from "react";
// import { Button } from "react-bootstrap";
// // import "./style.css";

// const TravelInfoTable = ({ data }) => {
//   return (
//     <table className='table'>
//       <thead>
//         <tr>
//           <th scope='col'>Country</th>
//           <th scope='col'>Currency</th>
//           <th scope='col'>Currency code</th>
//           <th scope='col'>Currency symbol</th>
//           <th scope='col'>Unicode characters</th>
//           <th scope='col'>HEX Currency code</th>
//           <th scope='col'>HTML Currency symbol</th>
//           <th colSpan={2}>Action</th>
//         </tr>
//       </thead>
//       <tbody>
//         {data.length > 0 ? (
//           data.map((info) => (
//             <tr key={info.id}>
//               <td data-label='Country'>{info.departure}</td>
//               <td data-label='Currency' data-label='Currency'>
//                 {info.departure}
//               </td>
//               <td data-label='Currency code'>{info.departure}</td>
//               <td data-label='Currency symbol'>{info.departure}</td>
//               <td data-label='UnicodeX Currency code'>{info.departure}</td>
//               <td data-label='HEX Currency code'>{info.departure}</td>
//               <td data-label='HTML Currency code'>{info.departure}</td>
//               <td colSpan={2}>
//                   <Button color='success' size='sm'>
//                     Edit
//                   </Button>
//                   <Button color='danger' size='sm'>
//                     Delete
//                   </Button>
//                 </td>
//             </tr>
//           ))
//         ) : (
//           <tr>
//             <td colSpan={2}>No Travel Information</td>
//           </tr>
//         )}
//       </tbody>
//     </table>
//   );
// };

// export default TravelInfoTable;
