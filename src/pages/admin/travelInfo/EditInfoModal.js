// // import { Modal } from "bootstrap";
// import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";

// const EditInfoModal = ({ info, ...rest }) => {
//   const [modalInfo, setModalInfo] = useState([]);

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
//   setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });

//   useEffect(() => {
//     setModalInfo(info);
//   }, []);

  
//   const handleOpen = () => {
//     console.log(modalInfo);
//     // setModalInfo(info);
//   };
  
    
//     const handleSubmit = (e) => {
//     e.preventDefault();
    
//     // console.log({ departure: departure.current?.value });
// };

// return (
//     <div>
//       <button
//         type='button'
//         className='btn btn-primary'
//         data-toggle='modal'
//         data-target='#staticBackdrop'
//         onClick={handleOpen}
//         >
//         Edit
//       </button>

//       <div
//         className='modal fade'
//         id='staticBackdrop'
//         data-backdrop='static'
//         data-keyboard='false'
//         tabindex='-1'
//         aria-labelledby='staticBackdropLabel'
//         aria-hidden='true'
//         >
//         <div className='modal-dialog'>
//           <div className='modal-content'>
//             <div className='modal-header'>
//               <h5 className='modal-title' id='staticBackdropLabel'>
//                 Modal title
//               </h5>
//               <button
//                 type='button'
//                 className='close'
//                 data-dismiss='modal'
//                 aria-label='Close'
//                 >
//                 <span aria-hidden='true'>&times;</span>
//               </button>
//             </div>
//             <div className='modal-body'>
//               <form className='' onSubmit={(e) => handleSubmit(e)}>
//                 <div className='row'>
//                   <div className='col-md-3 my-2'>
//                     <input
//                       type='text'
//                       className=''
//                       value={modalInfo.departure}
//                       name='departure'
//                         // ref={departure}
//                         onChange={(e) => onChange(e)}
//                       placeholder='Departure'
//                       />
//                   </div>
//                   <div className='col-md-3 my-2'>
//                     <input
//                       type='text'
//                       className=''
//                       value={destination}
//                       name='destination'
//                       // ref={destination}
//                       onChange={(e) => onChange(e)}
//                       placeholder='Destination'
//                       />
//                   </div>
//                   <div className='col-md-3 my-2'>
//                     <input
//                       type='text'
//                       className=''
//                       value={bus_type}
//                       name='bus_type'
//                         // ref={bus_type}
//                         onChange={(e) => onChange(e)}
//                         placeholder='Bus'
//                     />
//                   </div>
//                   <div className='col-md-3 my-2'>
//                     <input
//                       type='text'
//                       className=''
//                       value={bus_company}
//                       name='bus_company'
//                       // ref={bus_company}
//                       onChange={(e) => onChange(e)}
//                       placeholder='Company'
//                     />
//                   </div>
//                   <div className='col-md-3 my-2'>
//                     <input
//                       type='text'
//                       className=''
//                       value={price}
//                       name='price'
//                         // ref={price}
//                         onChange={(e) => onChange(e)}
//                         placeholder='price'
//                         />
//                   </div>
//                   <div className='col-md-3 my-2'>
//                     <input
//                       type='text'
//                       className=''
//                       value={travel_date}
//                       name='travel_date'
//                         // ref={travel_date}
//                         onChange={(e) => onChange(e)}
//                       placeholder='Date'
//                       />
//                   </div>
//                   <div className='col-md-3 my-2'>
//                     <input
//                       type='text'
//                       className=''
//                       value={travel_time}
//                       name='travel_time'
//                       // ref={travel_time}
//                         onChange={(e) => onChange(e)}
//                         placeholder='Time'
//                         />
//                   </div>
//                   <div className='modal-footer'>
//                     <button
//                       type='button'
//                       className='btn btn-secondary'
//                       data-dismiss='modal'
//                     >
//                       Close
//                     </button>
//                     <button type='submit' className='btn btn-primary'>
//                       Understood
//                     </button>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EditInfoModal;

// // const departure = useRef(null);
// // const destination = useRef(null);
// // const bus_type = useRef(null);
// // const bus_company = useRef(null);
// // const price = useRef(null);
// // const travel_time = useRef(null);
// // const travel_date = useRef(null);

// // console.log("hmmm", {
//     //   departure: departure.current.value,
//     //   destination: destination.current.value,
//     //   bus_type: bus_type.current.value,
//     //   bus_company: bus_company.current.value,
//     //   price: price.current.value,
//     //   travel_date: travel_date.current.value,
//     //   travel_time: travel_time.current.value,
//     // });