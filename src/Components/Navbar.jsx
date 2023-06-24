import {useSelector } from "react-redux";

// import { cartreducer } from './../Redux/reducers/reducer';

const Navbar = () => {

    // redux and useselector is like a usecontext
    const getdata=useSelector((state)=>state.cartreducer.carts);
    console.log(getdata);  
    // redux

    return (
        <nav className="navbar bg-dark border-bottom border-bottom-dark" data-bs-theme="dark" >
            <div className="container-fluid">
                <h2 style={{color:'white'}} > <img style={{height:"3rem",borderRadius:"2rem" }} alt="/" src="foodlogo.jpg" /> FOODIE</h2>             
                    <div className="addcart">
                        <button type="button" className="btn btn-light position-relative btn btn-secondary " aria-expanded="false" >
                            <div className="carticon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-cart-check-fill" viewBox="0 0 16 16"><path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z" /></svg>
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{getdata.length} <span className="visually-hidden">unread messages</span>
                                </span>
                            </div>
                        </button>                      
                    </div>
            </div>
        </nav>
    )
}
export default Navbar;