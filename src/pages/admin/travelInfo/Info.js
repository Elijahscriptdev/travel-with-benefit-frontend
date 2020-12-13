// import React, { useEffect } from "react";
// import { useState } from "react";
// import { Button, Table } from "react-bootstrap";
// import axios from "axios";
// import EditInfoModal from './EditInfoModal'

// const Info = () => {
//   const [info, setInfo] = useState([]);

//   const [formData, setFormData] = useState({
//     departure: "",
//     destination: "",
//     bus_type: "",
//     bus_company: "",
//     travel_date: "",
//     travel_time: "",
//     price: "",
//   });

//   const {
//     departure,
//     destination,
//     bus_type,
//     bus_company,
//     travel_date,
//     travel_time,
//     price,
//   } = formData;

//   const onChange = (e) =>
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });

//   const handleClick = async (e) => {
//     e.preventDefault();
//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };

//     const body = JSON.stringify({
//       departure,
//       destination,
//       bus_type,
//       bus_company,
//       travel_date,
//       travel_time,
//       price,
//     });

//     try {
//       const res = await axios.post(
//         "https://travel-backend-api.herokuapp.com/new-travel-information",
//         body,
//         config
//       );
//       console.log(res);
//       //   localStorage.setItem("Info-data", JSON.stringify(res.data));
//       axios
//         .get("https://travel-backend-api.herokuapp.com/travel-information")
//         .then((response) => {
//           setInfo(response.data);
//         });
//     } catch (error) {
//       console.log(error.response);
//     }
//   };

//   useEffect(() => {
//     axios
//       .get("https://travel-backend-api.herokuapp.com/travel-information")
//       .then((response) => {
//         setInfo(response.data);
//       });
//   }, []);
//   return (
//     <div className='p-5'>
//       <div className='card p-3 my-5'>
//         <form className='' onSubmit={(e) => handleClick(e)}>
//           <div className='row'>
//             <div className='col-md-3 my-2'>
//               <input
//                 type='text'
//                 className=''
//                 value={departure}
//                 name='departure'
//                 // ref={departure}
//                 placeholder='Departure'
//                 onChange={(e) => onChange(e)}
//               />
//             </div>
//             <div className='col-md-3 my-2'>
//               <input
//                 type='text'
//                 className=''
//                 value={destination}
//                 name='destination'
//                 // ref={destination}
//                 placeholder='Destination'
//                 onChange={(e) => onChange(e)}
//               />
//             </div>
//             <div className='col-md-3 my-2'>
//               <input
//                 type='text'
//                 className=''
//                 value={bus_type}
//                 name='bus_type'
//                 // ref={bus_type}
//                 placeholder='Bus'
//                 onChange={(e) => onChange(e)}
//               />
//             </div>
//             <div className='col-md-3 my-2'>
//               <input
//                 type='text'
//                 className=''
//                 value={bus_company}
//                 name='bus_company'
//                 // ref={bus_company}
//                 placeholder='Company'
//                 onChange={(e) => onChange(e)}
//               />
//             </div>
//             <div className='col-md-3 my-2'>
//               <input
//                 type='text'
//                 className=''
//                 value={price}
//                 name='price'
//                 // ref={price}
//                 placeholder='price'
//                 onChange={(e) => onChange(e)}
//               />
//             </div>
//             <div className='col-md-3 my-2'>
//               <input
//                 type='text'
//                 className=''
//                 value={travel_date}
//                 name='travel_date'
//                 // ref={travel_date}
//                 placeholder='Date'
//                 onChange={(e) => onChange(e)}
//               />
//             </div>
//             <div className='col-md-3 my-2'>
//               <input
//                 type='text'
//                 className=''
//                 value={travel_time}
//                 name='travel_time'
//                 // ref={travel_time}
//                 placeholder='Time'
//                 onChange={(e) => onChange(e)}
//               />
//             </div>
//             <div className='col-md-3 my-2'>
//               <button type='submit' className='btn-list'>
//                 Add Travel Info
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th scope='col'>ID</th>
//             <th scope='col'>Country</th>
//             <th scope='col'>Currency</th>
//             <th scope='col'>Currency code</th>
//             <th scope='col'>Currency symbol</th>
//             <th scope='col'>Unicode characters</th>
//             <th scope='col'>HEX Currency code</th>
//             <th scope='col'>HTML Currency symbol</th>
//             <th colSpan={2}>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {info.length > 0 ? (
//             info.map((info) => (
//               <tr key={info.id}>
//                 <td data-label='ID'>{info.id}</td>
//                 <td data-label='Country'>{info.departure}</td>
//                 <td data-label='Currency' data-label='Currency'>
//                   {info.departure}
//                 </td>
//                 <td data-label='Currency code'>{info.departure}</td>
//                 <td data-label='Currency symbol'>{info.departure}</td>
//                 <td data-label='UnicodeX Currency code'>{info.departure}</td>
//                 <td data-label='HEX Currency code'>{info.departure}</td>
//                 <td data-label='HTML Currency code'>{info.departure}</td>
//                 <td colSpan={2}>
//                   <EditInfoModal info={info} key={info.id} />
//                   <Button color='danger' size='sm' info={info} key={info.id}>
//                     Delete
//                   </Button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan={2}>No Travel Information</td>
//             </tr>
//           )}
//         </tbody>
//       </Table>
//     </div>
//   );
// };

// export default Info;
