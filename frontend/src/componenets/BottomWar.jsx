import {Link} from "react-router-dom"
export const BottomWar = ({label,buttonText,to}) => {
  return (
    <div className="py-2 text-sm flex justify-center">
      <div >
        {label}
      </div>
        <Link className="pointer underline pl-3" to={to}>
          {buttonText}
        </Link>
    </div>
  )
}
