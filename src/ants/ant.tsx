import React from 'react';
import AntDataType from '../data/ant-data-type';

const Ant = ({ name, length, color, weight }: AntDataType) => (
    <div>
        <p>Name: {name}</p>
        <p>Length: {length}</p>
        <p>Color: {color}</p>
        <p>Weight: {weight}</p>
    </div>
)

export default Ant;