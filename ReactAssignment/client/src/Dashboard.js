import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import { useState,useEffect } from 'react';

function Dashboard(){
    
    const url = "http://127.0.0.1:5000/products";

    const [products,setProducts] = useState([]);

    //const [emp,setEmp] = useState({No:"",Name: "",Address:""});

//    function FetchRecords(){
//     axios.get(url).then((result)=>{setEmps(result.data)});
//    }  

   function FetchRecords(){
    axios.get(url).then((result)=>{setProducts(result.data)});
   }


//    useEffect(()=>{FetchRecords()},[]);

      useEffect(()=>{FetchRecords()},[]);


    return (
        <div className='container'>
            {/* <div className='table-responsive'>
                <table className="table table-bordered">
                <tbody>
                    <tr>
                        <td>No</td>
                        <td><input type="text" name="No" value/></td>
                        
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td><input type="text" name="Name" value/></td>
                        
                    </tr>
                    <tr>
                        <td>No</td>
                        <td><input type="text" name="Address" value/></td>
                        
                    </tr>
                    <tr>
                        <td></td>
                        <td>

                        </td>
                    </tr>
                </tbody>

                </table>
            </div> */}

            <hr></hr>
            <hr></hr>

            <div className='table-responsive'>
                <table className=' table table-bordered'>
                    <thead>
                        <th>Product Id</th>
                        <th>Product Title</th>
                        <th>Price</th>
                        <th>Stocks</th>
                        <th></th>
                    </thead>
                    <tbody>
                        {
                            products.map((product)=>{
                                return(
                                    <tr>
                                        <td>{product.productid}</td>
                                        <td>{product.producttitle}</td>
                                        <td>{product.price}</td>
                                        <td>{product.stock}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>

                </table>

            </div>

            
            
        </div>
    )
}

export default Dashboard;