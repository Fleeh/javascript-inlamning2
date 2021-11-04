import React from 'react'
import Navbar from '../components/navbar/Navbar';
import Linkme from '../components/link/Linkme';


const Products = () => {
    return (
        <>
                <Navbar />
                <div className="container mt-5">
                    <Linkme />
                    <div className="container">
     <div className="header">
        <h2>Create Account</h2>
    </div>
    <form className="form" id="form" novalidate>
        <div className="form-control">
            <label>Förnamn</label>
            <input type="text" placeholder="Rasmus" id="username" />
            <i className="fas fa-check-circle"></i>
            <i className="fas fa-exclamation-circle"></i>
            <small>Error Message</small>
        </div>

        <div className="form-control">
            <label>Efternamn</label>
            <input type="text" placeholder="Henriksson" id="lastname" />
            <i className="fas fa-check-circle"></i>
            <i className="fas fa-exclamation-circle"></i>
            <small>Error Message</small>
        </div>

        <div className="form-control">
            <label>E-postadress</label>
            <input type="email" placeholder="turboralle@hotmail.com" id="email" />
            <i className="fas fa-check-circle"></i>
            <i className="fas fa-exclamation-circle"></i>
            <small>Error Message</small>
        </div>

        <div className="form-control">
            <label>Adress</label>
            <input type="text" placeholder="Svanåallén 2" id="adress" />
            <i className="fas fa-check-circle"></i>
            <i className="fas fa-exclamation-circle"></i>
            <small>Error Message</small>
        </div>

        <div className="form-control">
            <label>Postnummer</label>
            <input type="number" placeholder="70232" id="zipcode" />
            <i className="fas fa-check-circle"></i>
            <i className="fas fa-exclamation-circle"></i>
            <small>Error Message</small>
        </div>

        <div className="form-control">
            <label>Födelsedatum</label>
            <input type="date" placeholder="1995-03-03" id="birth" />
            <i className="fas fa-check-circle"></i>
            <i className="fas fa-exclamation-circle"></i>
            <small>Error Message</small>
        </div>

        <div className="form-control">
            <label>Lösenord</label>
            <input type="password" placeholder="lol123" id="password" />
            <i className="fas fa-check-circle"></i>
            <i className="fas fa-exclamation-circle"></i>
            <small>Error Message</small>
        </div>

        <div className="form-control">
            <label>Bekräfta Lösenord</label>
            <input type="password" placeholder="lol123" id="password2" />
            <i className="fas fa-check-circle"></i>
            <i className="fas fa-exclamation-circle"></i>
            <small>Error Message</small>
        </div>

       <button>Lämna in</button>
    </form>
</div>
                </div>
        </>
        
    )
}

export default Products