import React from 'react'
import FoodContainer from '../containers/list'
import FoodDetailContainer from '../containers/detail'

const Demo = ({match}) => (
  <div>
    <h3>`You click {match.url}`</h3>
    <h3>`You click {JSON.stringify(match,null,4)}`</h3>
    <h2>List of food</h2>
    < FoodContainer/>
    <h2>Food detail</h2>
    < FoodDetailContainer/>
  </div>
);

export default Demo;