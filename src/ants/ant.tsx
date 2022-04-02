import React from 'react';
import AntData from '../data/ant-data';

const Ant = ({ name, length, color, weight }: AntData) => (
    <div>
        <p>Name: {name}</p>
        <p>Length: {length}</p>
        <p>Color: {color}</p>
        <p>Weight: {weight}</p>
    </div>
)

export default Ant;