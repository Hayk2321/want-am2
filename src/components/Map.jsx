import React from "react";
import Cards from "./Cards";
import cards from "./Database";
export default class nkarelEl extends React.Component{
    render() {
        
        return (

            <div className="el">
                {
                    cards.map((el) => {
                        return (
                            <Cards name={el.name} img={el.img} price={el.price} key={el.id} />
                        )
                    })
                }
            </div>

        )

    }

}