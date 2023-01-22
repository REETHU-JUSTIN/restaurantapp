import React ,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import Restoperation from './Restoperation';
import Restreview from './Restreview';





function Viewrestaurant() {
    const params=useParams()
    console.log(params.id);
        
        const [allRestaurant,setRestaurants] =useState([])
        
        //Function to call API to get all restaurant list from restaurant.json
        
        const getRestaurants = async() => {
            await fetch('/restaurants.json')
            .then((data)=>{
              data.json()
              .then((result)=>{
                setRestaurants(result.restaurants);
            
              })
                
            }) 
            
        }
        console.log(allRestaurant);
        useEffect(()=>{
            getRestaurants()
        },[])

        console.log(allRestaurant);
        const viewrest=allRestaurant.find(item=>item.id==params.id);
        console.log(viewrest)

  return (
    <>
        
    {
        viewrest?(
            <Row>
                <Col>
                <Image src={viewrest.photograph} fluid></Image>
                </Col> 
                <Col>
                <p>ID :{viewrest.id}</p>
                  <h1>Name : {viewrest.name}</h1>
                  <h4>Neighborhood :{viewrest.neighborhood}</h4>
                  <h4>Address :{viewrest.address}</h4>
                  <h4>cuisine_type :{viewrest.cuisine_type}</h4>
                  <Restoperation operate={viewrest.operating_hours}  />
                  <Restreview reviews={viewrest.reviews} />

                </Col>


            </Row>
        ):'null'
    }
    </>
  )
}

export default Viewrestaurant