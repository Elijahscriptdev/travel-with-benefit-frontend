import React, { useRef, useState } from "react";

const RenderButton = ({ bookings, ...rest }) => {
  const [modalData, setModalData] = useState({});
//   const bookingData = JSON.parse(localStorage.getItem("singleBooking"));

  const email = useRef(null);
  const first_name = useRef(null);
  const last_name = useRef(null);
  const booking_ref = useRef(null);
  const departure = useRef(null);
  const destination = useRef(null);
  const bus_type = useRef(null);
  const bus_company = useRef(null);
  const total_price = useRef(null);
  const travel_time = useRef(null);
  const travel_date = useRef(null);
  const seats = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    console.log("working");
    
    setModalData({
      email: bookings.email,
      first_name: bookings.first_name,
      last_name: bookings.first_name,
      booking_ref: bookings.booking_ref,
      departure: bookings.departure,
      destination: bookings.destination,
      bus_type: bookings.bus_type,
      bus_company: bookings.bus_company,
      seats: bookings.seats,
      price: bookings.total_price,
      travel_date: bookings.travel_date,
      travel_time: bookings.travel_time,
    });
};

return (
    <div>
      <button
        type='button'
        className='btn btn-primary'
        data-toggle='modal'
        data-target='#staticBackdrop'
        onClick={(e) => handleClick(e)}
        >
        modal
      </button>

      <div
        className='modal fade'
        id='staticBackdrop'
        data-backdrop='static'
        data-keyboard='false'
        tabIndex='-1'
        aria-labelledby='staticBackdropLabel'
        aria-hidden='true'
        >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='staticBackdropLabel'>
                Modal title
              </h5>
              <button
                type='button'
                className='close'
                data-dismiss='modal'
                aria-label='Close'
                >
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div className='modal-body'>
              <p ref={email}>{bookings.email}</p>
              <br />
              <p ref={booking_ref}>{bookings.booking_ref}</p>
              <br />
              <p ref={first_name}>{bookings.first_name}</p>
              <br />
              <p ref={last_name}>{bookings.last_name}</p>
              <br />
              <p ref={departure}>{bookings.departure}</p>
              <br />
              <p ref={destination}>{bookings.destination}</p>
              <br />
              <p ref={bus_type}>{bookings.bus_type}</p>
              <br />
              <p ref={bus_company}>{bookings.bus_company}</p>
              <br />
              <p ref={travel_date}>{bookings.travel_date}</p>
              <br />
              <p ref={travel_time}>{bookings.travel_time}</p>
              <br />
              <p ref={total_price}>{bookings.total_price}</p>
              <br />
              <p ref={seats}>{bookings.seats}</p>
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-secondary'
                data-dismiss='modal'
                >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenderButton;

// localStorage.setItem(
//   "singleBooking",
//   JSON.stringify({
//     email: bookings.email,
//     first_name: bookings.first_name,
//     last_name: bookings.first_name,
//     booking_ref: bookings.booking_ref,
//     departure: bookings.departure,
//     destination: bookings.destination,
//     bus_type: bookings.bus_type,
//     bus_company: bookings.bus_company,
//     seats: bookings.seats,
//     price: bookings.total_price,
//     travel_date: bookings.travel_date,
//     travel_time: bookings.travel_time,
//   })
// );