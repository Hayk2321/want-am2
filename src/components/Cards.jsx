import "../css/Cards.css"
function Cards(props) {
    return (
        <>
            <div className="cards">
                <div className="card">
                    <img id="logo3" src={props.img} alt="logo" />
                    <p id="name3">{props.name}</p>
                    <button id="button3">{props.price}</button>

                </div>
                
            </div>
            
        </>
    )
}
export default Cards