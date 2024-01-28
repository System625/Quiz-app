import { useState } from 'react'
import icon  from "../../images/icon.png";

function App() {

  return (
    <>
      <div className='bg-[#001e4d] min-h-[100vh]'>
        <div className='bg-[#fff] w-[90%] max-w-[600px] mx-auto my-0 rounded-[10px] p-[30px] relative top-[100px]'>
          <h1 className='text-[25px] font-semibold text-[#001e4d] border-b-[1px] border-[#333] pb-[30px]'>
            Simple Quiz
          </h1>
          <div className='py-[20px] px-0'>
            <h2 id='question' className='text-[18px] text-[#001e4d] font-semibold mb-3'>Question goes here</h2>
            <div id='answer-buttons'>
              <button className='bg-[#fff] text-[#222] font-medium w-[100%] border-[1px] border-[#222] p-[10px] my-[10px] mt-0 text-left rounded cursor-pointer transition-all duration-[0.3s] hover:bg-[#222] hover:text-[#fff]'>
                Answer 1
              </button>
              <button className='bg-[#fff] text-[#222] font-medium w-[100%] border-[1px] border-[#222] p-[10px] my-[10px] mt-0 text-left rounded cursor-pointer transition-all duration-[0.3s] hover:bg-[#222] hover:text-[#fff]'>
                Answer 2
              </button>
              <button className='bg-[#fff] text-[#222] font-medium w-[100%] border-[1px] border-[#222] p-[10px] my-[10px] mt-0 text-left rounded cursor-pointer transition-all duration-[0.3s] hover:bg-[#222] hover:text-[#fff]'>
                Answer 3
              </button>
              <button className='bg-[#fff] text-[#222] font-medium w-[100%] border-[1px] border-[#222] p-[10px] my-[10px] mt-0 text-left rounded cursor-pointer transition-all duration-[0.3s] hover:bg-[#222] hover:text-[#fff]'>
                Answer 4
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
