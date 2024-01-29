import '../styles/sections/grid.css'

const Grid = (props) => {
    
    return (
       
        <div className='grid-wrapper'>
            {props.data.map((object,index) => {
                return (
                    <props.Component key={index} {...object} />
                )
            })}
        </div>
   
    )
}

export default Grid