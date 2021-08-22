import React, { useState } from 'react'

const SingleQuestion = ({ questions, answers, open, close }) => {
  const [answerOpen, setAnswerOpen] = useState(false)

  return (
    <article className='faq__questAns'>
      <div className='faq__questAns__questions'>
        <div>{questions}</div>
        <button
          style={{
            backgroundColor: 'transparent',
            outline: 'none',
            border: 'none',
          }}
          onClick={() => setAnswerOpen(!answerOpen)}>
          {!answerOpen ? (
            <img src={open} alt='open' />
          ) : (
            <img src={close} alt='open' />
          )}
        </button>
      </div>
      {answerOpen && (
        <div className='faq__questAns__answers'>
          <div>{answers}</div>
        </div>
      )}
    </article>
  )
}

export default SingleQuestion
