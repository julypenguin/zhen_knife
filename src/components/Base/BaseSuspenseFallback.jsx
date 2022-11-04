import React from 'react'

export default () => (
  <div className='w-screen h-screen flex justify-center items-center'>
    <div className="animate-spin inline-block w-12 h-12 border-[4px] border-current border-t-transparent text-blue-600 rounded-full" role="status" aria-label="loading">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
)