import React from "react";
// import "./style.css";

const TravelInfoTable = ({ data }) => {
  return (
    <table className='table'>
      <thead>
        <tr>
          <th scope='col'>Country</th>
          <th scope='col'>Currency</th>
          <th scope='col'>Currency code</th>
          <th scope='col'>Currency symbol</th>
          <th scope='col'>Unicode characters</th>
          <th scope='col'>HEX Currency code</th>
          <th scope='col'>HTML Currency symbol</th>
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map((info) => (
            <tr key={info.id}>
              <td data-label='Country'>{info.departure}</td>
              <td data-label='Currency' data-label='Currency'>
                {info.departure}
              </td>
              <td data-label='Currency code'>{info.departure}</td>
              <td data-label='Currency symbol'>{info.departure}</td>
              <td data-label='UnicodeX Currency code'>{info.departure}</td>
              <td data-label='HEX Currency code'>{info.departure}</td>
              <td data-label='HTML Currency code'>{info.departure}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={2}>No Travel Information</td>
          </tr>
        )}
      </tbody>
    </table>
    // <table className='table'>
    //   <thead>
    //     <tr>
    //       <th scope='col'>Email</th>
    //       <th scope='col'>First Name</th>
    //       <th scope='col'>Last Name</th>
    //       <th scope='col'>Booking Ref</th>
    //       {/* <th scope="col">Departure</th>
    //       <th scope="col">Destination</th> */}
    //       {/* <th scope="col">Bus</th> */}
    //       <th scope='col'>Company</th>
    //       {/* <th scope="col">Traval Date</th>
    //       <th scope="col">Travel Time</th> */}
    //       <th scope='col'>Price</th>
    //       {/* <th scope="col">Seats</th> */}
    //       <th scope='col'>View</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {data.length > 0 ? (
    //       data.map((bookings) => (
    //         <tr key={bookings.id}>
    //           <td data-label='email'>{bookings.email}</td>
    //           <td data-label='first name'>
    //             {bookings.first_name}
    //           </td>
    //           <td data-label='last name'>{bookings.last_name}</td>
    //           <td data-label='booking ref'>{bookings.booking_ref}</td>
    //           {/* <td data-label="Account">{bookings.departure}</td>
    //           <td data-label="Account">{bookings.destination}</td> */}
    //           {/* <td data-label="Account">{bookings.bus_type}</td> */}
    //           <td data-label='bus company'>{bookings.bus_company}</td>
    //           {/* <td data-label="Account">{bookings.travel_date}</td>
    //           <td data-label="Account">{bookings.travel_time}</td> */}
    //           <td data-label='price'>{bookings.total_price}</td>
    //           {/* <td data-label="Account">{bookings.seats}</td> */}
    //           <td>
    //             <RenderButton bookings={bookings} />
    //             {/* <button
    //               className='button muted-button'
    //               // onClick={() => deleteUser(user.id)}
    //             >
    //               Delete
    //             </button> */}
    //           </td>
    //         </tr>
    //       ))
    //     ) : (
    //       <tr>
    //         <td colSpan={2}>No Booking</td>
    //       </tr>
    //     )}
    //   </tbody>
    // </table>
  );
};

export default TravelInfoTable;
