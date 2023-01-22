import React, { useEffect } from 'react'
import {useState} from 'react'
import Restaurantcards from './Restaurantcards'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { RestaurantListAction } from '../Actions/restaurantlistAction';
import { useDispatch, useSelector } from 'react-redux';



function Restaurantlist() { 
//To hold the value

const [allRestaurant,setRestaurants] =useState([])

//Function to call API to get all restaurant list from restaurant.json

// const getRestaurants = async() => {
//     await fetch('/restaurants.json')
//     .then((data)=>{
//       data.json()
//       .then((result)=>{
//         setRestaurants(result.restaurants);
//         // console.log(result);
//       })
//         // console.log(data);
//     }) 
    
// }
// console.log(allRestaurant);
const dispatch=useDispatch();
const result=useSelector(state=>state.restaurantReducer)
console.log(result);
const {restaurantList} = result

useEffect(()=>{
    // getRestaurants()
    dispatch(RestaurantListAction());
},[])
  return (
    <Row>{
      restaurantList.map(item=>(
        // <h1>{item.name}</h1>

        <Col >
        <Restaurantcards restaurant={item}/>
        </Col>
      ))
}
    </Row>
  )
}


export default Restaurantlist