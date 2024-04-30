/* eslint-disable react/prop-types */

export const InputBox = ({label,placeholder,onChange}) => {
  return (
    <div className="px-5">
      <div className="text-sm font-medium text-left py-2">
         {label}
      </div>
      <div>
        <input onChange={onChange} placeholder= {placeholder} className="w-full px-2 py-1 text-gray-800 bg-gray-200 rounded-md"></input>
      </div>
    </div>
  )
}
