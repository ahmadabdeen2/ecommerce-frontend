import {createContext, useState, useContext, useEffect } from 'react'
import Swal from 'sweetalert2'
const GlobalContext = createContext([[], () => {}])
const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
const login_url = `${API_ENDPOINT}/core/api-token-auth/`
const signup_url = `${API_ENDPOINT}/core/users/`
const products_url = `${API_ENDPOINT}/products/products/`

export const GlobalProvider = ({ children }) => {
    const [darkTheme, setDarkTheme] = useState(false)
    const [auth,setAuth] = useState(localStorage.getItem('token') || null)
    const [products,setProducts] = useState([])
    const [cart, setCart] = useState(JSON.parse(window.sessionStorage.getItem('cart')) || [])
    const [userDetails, setUserDetails] = useState([]);
    
    const LogoutUser = (data)=> {
        localStorage.removeItem('token')
        setAuth(null)
        Swal.fire({
            title: 'Success',
            text: 'You have been logged out',
            icon: 'success',
            confirmButtonText: 'Ok'
        })
    }


    useEffect(() => {
        let getData = async () =>{
        let data = await getProducts()
        setProducts(data)
        await getUserDetails()
        }
        getData()
    },[])

    const getProducts = async () => {
        let response = await fetch(products_url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        let data = await response.json()
        return data
    }

    const getUserDetails = async () => {
        if(auth){
        let response = await fetch(`${API_ENDPOINT}/core/get_my_details/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: auth,
          },
        });
        let data = await response.json();
        if (data) {
          setUserDetails(data);
          localStorage.setItem("userDetails", JSON.stringify(data));
        } else {
          alert("Invalid Credentials");
        }
    } else {
        setUserDetails([])
    }
      };

 


    return (
        <GlobalContext.Provider value ={{darkTheme, userDetails, setUserDetails,  setProducts, getProducts, setDarkTheme, products, login_url, auth, setAuth, signup_url, LogoutUser, cart, setCart}}>
        {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext)

