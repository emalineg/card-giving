import { Link } from 'react-router-dom'
import './SpecificCard.css'

function SpecificCard(props) {
    const { id, image } = props
  return (
    <div className="card-container">
      <Link to={`/specific-card/${id}`}>
        <img src={`${process.env.PUBLIC_URL}/${image}`}     
            width="300"
            height="300"
            alt="Hello"
        /> 
      </Link>
    </div>
  )
}

export default SpecificCard;