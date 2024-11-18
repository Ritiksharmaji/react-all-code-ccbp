import React, { Component } from 'react';
import AppointmentItem from '../AppointmentItem';
import { format } from 'date-fns';
import './index.css';
import { v4 } from 'uuid';

export default class Index extends Component {
  state = {
    appointmentList: [],
    isFavorite: false,
    name: '',
    date: '',
  };

  // Function to add new appointments
  onAddAppointments = (event) => {
    // Prevent form submission default behavior
    event.preventDefault();

    const { name, date } = this.state;

    // Create new appointment object
    const newAppointment = {
      id: v4(),
      name,
      formattedDate: date ? format(new Date(date), 'dd MMMM yyyy, EEEE') : '',
    };

    // Update the appointment list
    this.setState((prevState) => ({
      appointmentList: [...prevState.appointmentList, newAppointment],
      name: '',
      date: '',
    }));
  };

  // Function to handle name input change
  changeInputFiled = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  // Function to handle date input change
  changeDateFiled = (event) => {
    this.setState({
      date: event.target.value,
    });
  };

  render() {
    const { name, date, appointmentList } = this.state;

    console.log('Name:', name);
    console.log('Date:', date);
    console.log('Appointments:', appointmentList);

    return (
      <>
        <div className="appointments-container">
          <div className="card">
            <div className="form-container-card">
              <form onSubmit={this.onAddAppointments}>
                <div className="input-fileds-card">
                  <h1 className="heading">Add Appointment</h1>

                  <label htmlFor="input-appointment-filed">Enter Name</label>
                  <input
                    type="text"
                    id="input-appointment-filed"
                    className="input-class-appointment-filed"
                    onChange={this.changeInputFiled}
                    value={name}
                  />

                  <label htmlFor="input-appointment-date">Enter Date</label>
                  <input
                    type="date"
                    id="input-appointment-date"
                    className="input-class-appointment-search"
                    onChange={this.changeDateFiled}
                    value={date}
                  />

                  <button type="submit" className="appoinment-submit">
                    Submit
                  </button>
                </div>
              </form>

              <div className="image-card">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                  alt="appointments"
                  className="appointments-image"
                />
              </div>
            </div>

            <hr />

            <div className="all-appointmentitem-card">
              <h1 className="heading">Appointments</h1>

              {/* Render appointment items */}
              <ul className='unprder-list-appointmentitem'>
                {appointmentList.map((appointment) => (
                  <AppointmentItem
                    key={appointment.id}
                    name={appointment.name}
                    date={appointment.formattedDate}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}


