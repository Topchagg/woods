import '../styles/sections/grid.css'

const Grid = (props) => {
    return (
        <div className="grid-wrapper">
            {props.data.map((object) => {
                <propsComponent {...object}/>
            })}
        </div>
    )
}

export default Grid