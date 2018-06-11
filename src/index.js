import React from 'react'
import ReactDOM from 'react-dom'
import { DateUtils } from 'react-day-picker'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import dateFnsFormat from 'date-fns/format'
import dateFnsParse from 'date-fns/parse'

import 'addstrap/dist/add-style.min.css'
import 'react-day-picker/lib/style.css'

const FORMAT = 'M/D/YYYY'
const formatDate = (date, format, locale) => dateFnsFormat(date, format, { locale })

const parseDate = (str, format, locale) => {
  const parsed = dateFnsParse(str, format, { locale })
  if (DateUtils.isDate(parsed)) {
    return parsed
  }
  return undefined
}

const Example = () =>
  <div className='container all'>
    <style>{`
      .DayPicker-Day--selected {
        background-color: purple !important;
        border-radius: 0 !important;
      }
    `}</style>
    <DayPickerInput
      placeholder={`${dateFnsFormat(new Date(), FORMAT)}`}
      formatDate={formatDate}
      format={FORMAT}
      parseDate={parseDate}
      dayPickerProps={{
        showOutsideDays: true,
        todayButton: 'Today'
      }}
      keepFocus={false}
      />
  </div>

ReactDOM.render(<Example />, document.getElementById('root'))
