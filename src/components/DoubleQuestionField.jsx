import React from 'react'
import '../style/double-question-field.css'

const DoubleQuestionField = ({children1, children2}) => {
  return (
    <div>
        <button className='double-question-field'>
            <div className='horizontal-question'>{children1}</div>
            <div className='vertical-question'>{children2}</div>
        </button>
    </div>
  )
}

export default DoubleQuestionField
