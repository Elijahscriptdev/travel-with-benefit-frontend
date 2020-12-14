// import React, { useRef } from 'react';

// const ModalForm = ({ info }) => {
//   const nameInput = useRef(null);
//   const ageInput = useRef(null);

//   const submitForm = (e) => {
//     const namePattern = /[a-zA-z]/;
//     e.preventDefault();
//     // Validade
//     if (nameInput.current && !nameInput.current.value.match(namePattern)) {
//       // Alert the user that the data is not in a valid format
//       console.log('wrong format');
//       return;
//     }

//     if (ageInput.current && typeof ageInput.current.value !== 'number') {
//       // Alert the user that the data is not in a valid format
//     }

//     console.log({ name: nameInput.current?.value });
//   };

//   return (
//     <form onSubmit={submitForm}>
//       <input type="text" name="name" ref={nameInput} defaultValue={info.name} />
//       <input type="text" name="age" ref={ageInput} defaultValue={info.age} />
//       <button type="submit">submit</button>
//     </form>
//   );
// };

// export default ModalForm;



// // import { Modal } from "bootstrap";
// import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";

// const useForm = (initialValues) => {
//   const [values, setValues] = useState(initialValues);

//   return {
//     values,
//     handleChange: (e) => {
//       setValues({
//         ...values,
//         [e.target.name]: e.target.value,
//       });
//     },
//     reset: () => setValues(initialValues),
//   };
// };

// const EditInfoModal = ({ info, ...rest }) => {
//   const { values, handleChange, reset } = useForm({
//     departure: "",
//     destination: "",
//     bus_type: "",
//     bus_company: "",
//     travel_date: "",
//     travel_time: "",
//     price: "",
//   });
//   //   const [modalInfo, setModalInfo] = useState([]);

//   //   const [formData, setFormData] = useState({
//   //     departure: "",
//   //     destination: "",
//   //     bus_type: "",
//   //     bus_company: "",
//   //     travel_date: "",
//   //     travel_time: "",
//   //     price: "",
//   //   });

//   //   const {
//   //     departure,
//   //     destination,
//   //     bus_type,
//   //     bus_company,
//   //     travel_date,
//   //     travel_time,
//   //     price,
//   //   } = formData;

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prevState) => ({
// //       ...prevState,
// //       [name]: value,
// //     }));
// //   };

//   //   const onChange = (e) =>
//   //   setFormData({
//   //       ...formData,
//   //       [e.target.name]: e.target.value,
//   //     });

// //   useEffect(() => {
// //     setModalInfo(info);
// //   }, []);

//   const handleOpen = () => {
//     // setModalInfo(info);
//     // console.log(modalInfo);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // console.log({ departure: departure.current?.value });
//   };

//   return (
//     <div>
//       <button
//         type='button'
//         className='btn btn-primary'
//         data-toggle='modal'
//         data-target='#staticBackdrop'
//         onClick={handleOpen}
//       >
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
//       >
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
//               >
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
//                       value={values.departure}
//                       name='departure'
//                       // ref={departure}
//                       onChange={handleChange}
//                       placeholder='Departure'
//                     />
//                   </div>
//                   <div className='col-md-3 my-2'>
//                     <input
//                       type='text'
//                       className=''
//                       value={values.destination}
//                       name='destination'
//                       // ref={destination}
//                       onChange={handleChange}
//                       placeholder='Destination'
//                     />
//                   </div>
//                   <div className='col-md-3 my-2'>
//                     <input
//                       type='text'
//                       className=''
//                       value={values.bus_type}
//                       name='bus_type'
//                       // ref={bus_type}
//                       onChange={handleChange}
//                       placeholder='Bus'
//                     />
//                   </div>
//                   <div className='col-md-3 my-2'>
//                     <input
//                       type='text'
//                       className=''
//                       value={values.bus_company}
//                       name='bus_company'
//                       // ref={bus_company}
//                       onChange={handleChange}
//                       placeholder='Company'
//                     />
//                   </div>
//                   <div className='col-md-3 my-2'>
//                     <input
//                       type='text'
//                       className=''
//                       value={values.price}
//                       name='price'
//                       // ref={price}
//                       onChange={handleChange}
//                       placeholder='price'
//                     />
//                   </div>
//                   <div className='col-md-3 my-2'>
//                     <input
//                       type='text'
//                       className=''
//                       value={values.travel_date}
//                       name='travel_date'
//                       // ref={travel_date}
//                       onChange={handleChange}
//                       placeholder='Date'
//                     />
//                   </div>
//                   <div className='col-md-3 my-2'>
//                     <input
//                       type='text'
//                       className=''
//                       value={values.travel_time}
//                       name='travel_time'
//                       // ref={travel_time}
//                       onChange={handleChange}
//                       placeholder='Time'
//                     />
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
// //   departure: departure.current.value,
// //   destination: destination.current.value,
// //   bus_type: bus_type.current.value,
// //   bus_company: bus_company.current.value,
// //   price: price.current.value,
// //   travel_date: travel_date.current.value,
// //   travel_time: travel_time.current.value,
// // });
