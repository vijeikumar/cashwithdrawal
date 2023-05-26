import './index.css'

const DenominationItem = props => {
  const {userDetails, subNum} = props
  const {value} = userDetails

  const subNumber = () => {
    subNum(value)
  }

  return (
    <li className="list-button">
      <button type="button" className="button" onClick={subNumber}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
