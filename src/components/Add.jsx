import React,{useRef , useState} from "react"
import Add2 from "../components/Add2.jsx"
import "../css/Add2.css"
export default function Cards() {
    const nameRef = useRef(null)
    const ageRef = useRef(null)
    const imgRef = useRef(null)
    const [cardValue, setCardValue] = useState([])
  
    function handleClick() {
      setCardValue([...cardValue , {
        name:nameRef.current.value,
        age:ageRef.current.value,
        img:imgRef.current.value
      } ])
      nameRef.current.value = ""
      ageRef.current.value = ""
      imgRef.current.value = ""
    }
    return(
    
        <div className="addCard">
          Name: <input type="text" id="text1"  name="text1" ref={nameRef} />
          
  
         Price: <input type="number" id="text2" name="text2" ref={ageRef} />
          
  
          Image: <input type="text" id="image" name="text3" ref={imgRef} />
          <button onClick={handleClick}>Log</button>
            <div>
            {
            
              cardValue.map((el)=>{
                return(
                  <Add2 name={el.name} age={el.age} imageUrl={el.img} key={el}/>
              )
                
              })
            
            }  
            </div> 
        </div>
    )
        
  }