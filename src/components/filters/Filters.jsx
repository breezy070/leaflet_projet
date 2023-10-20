import "./filters.scss"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function Filters() {

    

return (
    
    <div className="filters-container">
        <div className="inline">
            <Form.Control size="sm" type="text" placeholder="Location" />
      
            <br></br>
            <Form.Control size="sm" type="text" placeholder="Prix Min" />
            <Form.Control size="sm" type="text" placeholder="Prix Max" />
            <Button variant="primary">Search</Button>{' '}
        </div>   
        <hr></hr>
    </div>
       
  
)
   
}

export default Filters;