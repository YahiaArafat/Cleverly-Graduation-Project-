import React, { useState } from "react";
import Lottie from "lottie-react";

import VisaIcon from '../jsons/VisaCard.json'


function CardForm() {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [submittedData, setSubmittedData] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    setSubmittedData({ name, cardNumber, expiry, cvc });
  }

  return (
    <form className="card-form">
         
          <Lottie className='VisaIcon' animationData={VisaIcon} />
      <h1 className="text-center fw-bold">Credit Card Form</h1>
      <div className="form-group mt-4">
      <div className="mb-3 text-center col-md-12  h5">
                <input
                // onChange={getFormVal}
                  type="text"
                  placeholder="Cardholder_Name"
                  name="Cardholder_Name"
                  className="form-control lapp fw-bold"
                  id="Cardholder_Name"
                />
              </div>
              <div className="mb-3 text-center col-md-12  h5">
                <input
                // onChange={getFormVal}
                  type="text"
                  placeholder="Card_Number"
                  name="Card_Number"
                  className="form-control lapp fw-bold"
                  id="Card_Number"
                />
              </div>
        
              <div className="mb-3 text-center col-md-8  h5">
                <input
                // onChange={getFormVal}
                  type="text"
                  placeholder="MM_YY"
                  name="MM_YY"
                  className="form-control lapp fw-bold"
                  id="MM_YY"
                />
              </div>
              <div className="mb-3 text-center col-md-4  h5">
                <input
                // onChange={getFormVal}
                  type="text"
                  placeholder="CVC"
                  name="CVC"
                  className="form-control lapp fw-bold "
                  id="CVC"
                />
              </div>

      </div>
      <button
        type="submit"
        className="btn btn-primary btnCard bold fw-bold btnn space sizeBot btn-block"
        onClick={handleSubmit}
      >
        Submit
      </button>
      <hr />
    </form>
  );
}

export default CardForm;
