import React from 'react'
import { addWatch } from '../server-actions/addWatch'

type Props = {}

const WatchForm = (props: Props) => {
  return (
    <form action={addWatch} className='mb-6'>
      <div className='mb-4'>
        <label htmlFor='brand' className='block text-white mb-2'>Brand</label>
        <input
          type='text'
          id='brand'
          name='brand'
          className='shadow appearance-none border border-gray-600 bg-gray-700 rounded-full py-2 px-3 text-white'
          required />
      </div>
      <div className='mb-4'>
        <label htmlFor='model'>Model</label>
        <input
          type='text'
          className='shadow appearance-none border border-gray-600 bg-gray-700 rounded-full py-2 px-3 text-white'
          id='model'
          name='model'
          required />
      </div>
      <div className='mb-4'>
        <label htmlFor='reference_number'>Reference Number</label>
        <input
          className='shadow appearance-none border border-gray-600 bg-gray-700 rounded-full py-2 px-3 text-white'
          type='text' id='reference_number' name='reference_number' required />
      </div>
      <button type='submit' className='bg-gray-600 hover:bg-gray-300 text-white hover:text-black font-bold py-2 px-4 rounded'>
        Add Watch
      </button>
    </form>
  )
}

export default WatchForm
