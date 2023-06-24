import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { REMOVE } from "../Redux/actions/action";

const Cardsdetails = () => {
    //redux and here dispatch is used to send actions to store
    const dispatch=useDispatch();
    const remove=(id)=>{
        dispatch(REMOVE(id));
    }
    //redux
    return (
        <>
            <div className="container mt-2">
                <h2>Items Details</h2>
            </div>
            <section className="container mt-2" style={{ boxShadow: '0 0 10px 10px rgba(138, 152, 167, 0.447)', padding: '2rem' }} >
                <div className="itemsdetails ml-3" style={{ display: 'flex', fontSize: '20px', textAlign: 'left' }}>
                    <div>
                        <img alt="/" src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    </div>
                    <div style={{ padding: '2rem' }}>
                        <table className="table mt-4" >
                            <tr>
                                <td>
                                    <p><strong>Restaurant:</strong>Masala Theory</p>
                                    <p><strong>Price:</strong>₹350</p>
                                    <p><strong>Dishes:</strong>North Indian,Biryani,Mughlai</p>
                                    <p><strong>Total:</strong>₹350</p>
                                    <Link to="/">
                                        <p ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-bar-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5ZM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5Z" />
                                        </svg><strong>Back</strong></p>
                                    </Link>
                                </td>
                                <td>
                                    <p><strong>Rating:</strong><span>3.5 ★★★★</span></p>
                                    <p><strong>Remove:</strong><svg onClick={(e)=>remove(e.id)} style={{ color: 'red',cursor:'pointer' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16"><path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" /></svg></p>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Cardsdetails;