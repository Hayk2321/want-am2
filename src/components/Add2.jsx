import "../css/Add2.css"
export default function Add2 ( {name, price, imageUrl }) {
    return (
      <div className="card22">
        
        
        <img src={imageUrl} alt=""/>
        <div className="card-details">
          <h2>{name}</h2>
          <p className="price55" >{price}</p>
        </div>
      </div>
    );
  };