import React from 'react'
import ReactDOM from 'react-dom'

import DayPickerInput from 'react-day-picker/DayPickerInput'

import 'addstrap/dist/add-style.min.css'
import 'react-day-picker/lib/style.css'

function Example () {
  return (
    <div className='container all'>
      <input type='text' />
      <h3>DayPickerInput</h3>
      <DayPickerInput placeholder='DD/MM/YYYY' format='DD/MM/YYYY' />
    </div>
  )
}

ReactDOM.render(<Example />, document.getElementById('root'))
