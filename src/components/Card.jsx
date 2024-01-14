

const Card =  ({propsPic}) => {
    console.log(propsPic)
  return (
    <div className="gallery">

        <div className="card">
        <img src={propsPic.src.small} alt="" />
        <p>{propsPic.alt}</p>
        </div>
    </div>
  )
}

export default Card