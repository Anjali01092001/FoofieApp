import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cardsdata from "./Cardsdata";
import { useDispatch } from "react-redux";
import { ADD } from "../Redux/actions/action";

const Cart = () => {
    const [data, setData] = useState(Cardsdata);
    console.log(data);

    // redux
    const dispatch=useDispatch();
    const send=(e)=>{
        dispatch(ADD(e));
        console.log(e);
    }
    // redux

    return (
        <div className="container mt-3">
            <h2>Your Favourite's</h2>
            <div className="row justify-content-center align-items-center">
                {
                    data.map((element, id) => {
                        return (
                            <>
                                <div className="card mx-4 mt-3" style={{ width: "20rem",padding:"1rem", border:"none" ,}}>
                                    <Link to="/carddetails"><img src={element.imgdata} alt="/" className="card-img-top mt-3" style={{height:"16rem" ,width:"22rem"}} /></Link>
                                    
                                    <div className="card-body">
                                        <h5 className="card-title">{element.rname}</h5>
                                        <h5>Price:₹{element.price}</h5>
                                        <Link to="/" className="btn btn-secondary" style={{width:"20rem" }} 
                                        onClick={()=>send()}
                                         >Add TO Cart</Link>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }

            </div>
        </div>
    )
}
export default Cart;