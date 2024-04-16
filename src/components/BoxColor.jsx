
function boxColor ({color, value}) {
  const notColor = `I'm not a ${value} color`
  const yesColor = `Yes, I'm ${value} color`
  
  return (
    <div className={`box ${color}`} 
      style={
        {backgroundColor: value=== color ? color : 'transparent', 
        color: value=== color ? 'white': color }} >
        <p>{value !== color ? notColor : yesColor}</p>
    </div> 
  )
}
export default boxColor;  
