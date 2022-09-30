import React from 'react'

const FormInput = (props) => {
  return (
    <div className="mb-1">
            <label
              htmlFor="email"
              className=" text-sm font-semibold text-gray-900"
            >
             {props.label}
            </label>
            <input
              type={props.type}
              onChange={(e) => props.setVal(e.target.value)}
              className=" w-full py-[0.2rem] mt-2 text-gray-900 bg-white border-b rounded-md focus:border-primary focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 text-xs"
            />
          </div>
  )
}

export default FormInput