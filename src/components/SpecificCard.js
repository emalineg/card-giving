
import { Link } from 'react-router-dom'
function SpecificCard(props) {
    const { id, name, image } = props
  return (
    <div>
      <Link to={`/specific-card/${id}`}>
        <img src={`${process.env.PUBLIC_URL}/${image}`}     
            width="300"
            height="300"
            alt="Hello"
        /> 
      </Link>
      <Link to={`/specific-card/${id}`}>    
        <h1>{name}</h1>
      </Link> 
    </div>
  )
}

export default SpecificCard;