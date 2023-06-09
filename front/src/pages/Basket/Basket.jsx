import axios from "axios"
import { useEffect , useState } from "react"

function Basket(){
    const [products , setProducts ] = useState([])
    const [adress , setAdress ] = useState([])
    const [to , setto ] = useState(false)
    function getBzsket(){
        setProducts(JSON.parse(localStorage.getItem("basket")))
    }
    useEffect(()=>{
        getBzsket()
    },[])
    

    function remove(id){
        var list = JSON.parse(localStorage.getItem("basket")) 
        for(var i = 0 ; i < list.length ; i++){
            if(id === list[i]._id){
                list.splice(i ,1)
            }
        }
        localStorage.setItem('basket' , JSON.stringify(list))
        getBzsket()
    }


    function order(){
        axios.post("http://localhost:3636/auth/user/verify" , {
            token : localStorage.getItem("token")
        }).then(({data})=>{
            var pm = products.map((e)=>{
                return {
                    name: e.name,
                    price: e.price,
                    id: e._id,
                    adress : adress
                  }
             })
            axios.post("http://localhost:3636/order" ,pm ).then(()=>{
          alert("successs")
        })
        })
    }

    return (
        <div>
            {
                !to ?  <div>
                {products.length > 0 ? <div> {products.map((e)=>{
                     return <li>{e.name} <button onClick={()=>{remove(e._id)}}>remove</button></li>
                 })}</div> : <div><h1>cheeeey7aaa</h1></div>}
                 <button onClick={()=>{setto(true)}}>confirrrrrrmmmmmmm</button>
             </div> : <div>
                <h1>give me you adress</h1>
                <input type="text" onClick={(e)=>{setAdress(e.target.value)}} />
                <button onClick={()=>{order()}}>confiiiirm</button>
             </div>
            }
        </div>
    )
}

export default Basket