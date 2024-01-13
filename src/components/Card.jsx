

const Card =  ({propsPic}) => {
    console.log(propsPic)
  return (
    <div>
        <img src={propsPic.src.small} alt="" />
        <p>{propsPic.alt}</p>
        
    </div>
  )
}

export default Card