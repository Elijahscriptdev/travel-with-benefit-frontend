// import React, { useState } from "react";
// import { Col, Form } from "react-bootstrap";
// import axios from "axios";
// import "../booking/style.css";
// import TravelInfoTable from "./TravelInfoTable";

// const ListTravelInformation = () => {
//   const [data, setData] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.get(
//         "https://travel-backend-api.herokuapp.com/travel-information"
//       );
//       localStorage.setItem("all-travel-info", JSON.stringify(res.data));
//       const data = JSON.parse(localStorage.getItem("all-travel-info"));
//       console.log(data);
//       setData(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div>
//       <Form className='' onSubmit={(e) => handleSubmit(e)}>
//         <Form.Row>
//           <Col xs={4} md={3} className='text-center my-5'>
//             <button className='btn btn-secondary btn-form'>
//               View All Travel Informations
//             </button>
//           </Col>
//         </Form.Row>
//       </Form>
//       <h2 className='mt-3'>All Travel Informations</h2>
//       <TravelInfoTable data={data} />
//     </div>
//   );
// };

// export default ListTravelInformation;
