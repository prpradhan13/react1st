import React, { useState } from "react";

const Contact = () => {

  const [data, setData] = useState({
    fname:'',
    lname:'',
    email:'',
    message:''
  })

  const inputEvent = (event) => {
    const {name, value} = event.target;
    setData((preval) => {
      return {
        ...preval,
        [name]: value
      }
    })
  }

  const submit = (e) => {
    e.preventDefault();
    alert(`Hyy, ${data.fname} your data is Submitted successfully`)
  }
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>

      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={submit}>

              <div className="form-group">
                <label for="exampleFormControlInput1">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="fname"
                  value={data.fname}
                  onChange={inputEvent}
                  autoComplete="off"
                />
              </div>

              <div className="form-group mt-2">
                <label for="exampleFormControlSelect1">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="lname"
                  value={data.lname}
                  onChange={inputEvent}
                  autoComplete="off"
                />
              </div>

              <div className="form-group mt-2">
                <label for="exampleFormControlSelect1">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={inputEvent}
                  placeholder="name@example.com"
                  autoComplete="off"
                />
              </div>

              <div className="form-group mt-2">
                <label for="exampleFormControlTextarea1">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  name="message"
                  value={data.message}
                  onChange={inputEvent}
                  placeholder="Type Something..."
                  rows="3"
                  autoComplete="off"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-outline-primary mb-2 mt-2"> Submit </button>

            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
