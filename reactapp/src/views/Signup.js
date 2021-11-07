import Navbar from '../components/navbar/Navbar';




const Signup = () => {
    return (
        <div>
            <Navbar/>

            <div className="container my-5" />
        <div className="header">
            <h2>Skapa konto</h2>
        </div>
        <form id="regForm" />
            <input id="firstclassName" type="text" className="form-control" placeholder="Förnamn" />
            <div id="error-firstclassName" className="text-danger mb-3 ms-2"></div>
            <small></small>

            <input id="lastclassName" type="text" className="form-control" placeholder="Efternamn" />
            <div id="error-lastclassName" className="text-danger mb-3 ms-2"></div>
            <small></small>

            <input id="email" type="email" className="form-control" placeholder="E-postadress" />
            <div id="error-email" className="text-danger mb-3 ms-2"></div>
            <small></small>

            <input id="password" type="password" className="form-control" placeholder="Password" />
            <div id="error-password" className="text-danger mb-3 ms-2"></div>
            <small></small>

            <input id="confirm-password" type="password" className="form-control" placeholder="Confirm Password" />
            <div id="error-confirm-password" className="text-danger mb-3 ms-2"></div>
            <small></small>

            <input id="birth" type="date" className="form-control" placeholder="Födelsedatum " />
            <div id="error-birth" className="text-danger mb-3 ms-2"></div>
            <small></small>

            <input id="adress" type="text" className="form-control" placeholder="Adress" />
            <div id="error-adress" className="text-danger mb-3 ms-2"></div>
          <small></small>
        

            <input id="zipcode" type="number" className="form-control" placeholder="Postnummer" />
            <div id="error-zipcode" className="text-danger mb-3 ms-2"></div>
            <small></small>

            <button className="btn btn-success" type="submit"> Skicka </button>
            
        

        
    </div>
       
    
    )}
export default Signup