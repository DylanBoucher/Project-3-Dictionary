import './App.css';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import React, { useState } from 'react'
import Event from './Event';
import 'react-datepicker/src/stylesheets/datepicker.scss'

const locales = {
  "en-US": require("date-fns/locale/en-US")
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
})

const events = [
  {
    title: "Big Meeting",
    allDay: true,
    start: new Date(2022, 4, 7),
    end: new Date(2022, 4, 10)
  },
  {
    title: "Vacation",
    start: new Date(2022, 4, 20),
    end: new Date(2022, 4, 23)
  },
  {
    title: "Conference",
    allDay: true,
    start: new Date(2022, 4, 25),
    end: new Date(2022, 4, 30)
  },
]

const selected = document.querySelectorAll('.rbc-event')
// selected.addEventListener('click', () => {

// })
console.log(selected)

function Main() {
    const [newEvent, setNewEvent] = useState({title: '', start: '', end: ''})
    const [allEvents, setAllEvents] = useState(events) //Change useState(events) to useState([]) at end

    const click = () => {
        console.log('clicked')
    }


  return (
    <div className="App">
      <h1 className='top-text'>Calendar</h1>
      <Event newEvent={newEvent} setNewEvent={setNewEvent} allEvents={allEvents} setAllEvents={setAllEvents}/>
      <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{height: 800, margin: "25px"}} />
    </div>
  );
}

export default Main;