import React, { useState, useEffect } from 'react'
import Cards from './Cards'

const Cardgrid = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
       async function fetchData() {
        const res = await fetch("https://ecexam-webapi.azurewebsites.net/api/customers")
        const data = await res.json()
       
    
       setProducts(data)
    }
    fetchData();
    },[])

    return (

            <div className="row row-cols-1 row-cols-md-2 g-4">
                
            {
                products.map(product => (
                    <div key={product.id} className="col">
                     <Cards item={product} />
                    </div>
                    ))
            }

             </div>
    )
}

export default Cardgrid


