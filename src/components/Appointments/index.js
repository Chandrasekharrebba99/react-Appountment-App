// Write your code here
import {v4 as uuidv4} from 'uuid'
import {Component} from 'react'
import {format} from 'date-fns'
import AppointmentItem from '../AppointmentItem'

import './index.css'

const AppointmentList = []
class Appointments extends Component {
  state = {
    AppointmentListState: AppointmentList,
    title: '',
    date: 'dd/mm/yyyy',
  }

  onAddAppointment = event => {
    event.preventDefault()
    const {title, date} = this.state
    const newRecord = {
      id: uuidv4(),
      title,
      date,
      isStar: false,
    }
    this.setState(prevState => ({
      AppointmentListState: [...prevState.AppointmentListState, newRecord],
      title: '',
      date: '',
    }))
  }

  onChangetoFav = () => {
    const {AppointmentListState} = this.state
    const filterdItems = AppointmentListState.filter(
      eachitem => eachitem.isStar,
    )
    this.setState({AppointmentListState: filterdItems})
  }

  onChangetitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeDate = event => {
    const date = event.target.value
    const newDate = date.split('-')
    const year = newDate[0]
    const month = newDate[1]
    const day = newDate[2]
    const finaldate = format(new Date(year, day, month), 'dd MMMM yyyy, EEEE')
    this.setState({date: finaldate})
  }

  toggleIsFavorite = id => {
    this.setState(prevState => ({
      AppointmentListState: prevState.AppointmentListState.map(eachContact => {
        if (id === eachContact.id) {
          //   eachContact.isFavorite = !eachContact.isFavorite
          return {...eachContact, isStar: !eachContact.isStar}
        }
        return eachContact
      }),
    }))
  }

  render() {
    const {AppointmentListState, title, date} = this.state
    console.log(title)

    return (
      <div className="topbg">
        <div className="card">
          <div className="cardtop">
            <div>
              <h1>Add Appointment</h1>
              <div className="inputcard">
                <label htmlFor="titleid">Title</label>
                <input
                  id="titleid"
                  placeholder="Title"
                  value={title}
                  onChange={this.onChangetitle}
                />
                <label htmlFor="dateid">Date</label>
                <input
                  id="dateid"
                  type="date"
                  value={date}
                  onChange={this.onChangeDate}
                />
                <div>
                  <button
                    className="sdv"
                    onClick={this.onAddAppointment}
                    type="button"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
              />
            </div>
          </div>
          <div className="hr"> </div>
          <div className="allappointments">
            <h1>Appointments</h1>
            <button
              type="button"
              onClick={this.onChangetoFav}
              className="staredbtn"
            >
              Starred
            </button>
          </div>
          <div>
            <ul className="inarow">
              {AppointmentListState.map(eachItem => (
                <AppointmentItem
                  toggleIsFavorite={this.toggleIsFavorite}
                  key={eachItem.id}
                  eachItem={eachItem}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
