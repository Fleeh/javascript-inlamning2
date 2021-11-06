import React, { useState, useEffect } from 'react'
import Link from './Link'

const Linkme = () => {

    const [signup] = useState([])

    

    return (

            <div className="row row-cols-1 row-cols-md-2 g-4">
                
            {
                signup.map(signup => (
                    <div key={signup.id} className="col">
                     <Link item={signup} />
                    </div>
                    ))
            }

             </div>
    )
}

export default Linkme