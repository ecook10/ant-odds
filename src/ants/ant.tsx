import React from 'react';
import AntDataType from '../data/ant-data-type';

interface Props {
    data: AntDataType;
    winChance?: number;
    hasStarted: boolean;
};

const getChance = (hasStarted: boolean, winChance?: number) => {
    if (!hasStarted) return 'Race Not Started';
    else if (!winChance) return 'Calculating...';
    else return winChance;
};

const Ant = ({ data: { name, length, color, weight }, winChance, hasStarted }: Props) => (
    <div>
        <p>Name: {name}</p>
        <p>Length: {length}</p>
        <p>Color: {color}</p>
        <p>Weight: {weight}</p>
        <p>Win Likelihood: {getChance(hasStarted, winChance)}</p>
    </div>
);

export default Ant;