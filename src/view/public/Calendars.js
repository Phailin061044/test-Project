// import calendar from 'react-calendar';
import React from 'react'
import { useState } from 'react';
// import 'react-calendar/dist/Calendar.css';
import '../../style/calendar.css';


  
  function Calendars ()   {
    const [date, setDate] = useState(new Date());

    return (
      
      <div className='app justify-content-center'>
      <h1 className='title-content'>ปฎิทินการจอง</h1>
      <div className='calendar-container'>
        <Calendars onChange={setDate} value={date} />
      </div>
      &nbsp;|&nbsp;
      <p className='text-center'>
        <span className='bold'>Selected Date:</span>{' '}
        {date.toDateString()}
      </p>
    </div>
    )
  }
   export default Calendars