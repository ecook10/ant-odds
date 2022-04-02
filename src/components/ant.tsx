import React from 'react';
import AntDataType from '../types/ant-data-type';
import RaceStatus from '../types/race-status';

import './ant.css';

interface Props extends AntDataType {
    winChance?: number;
    status: RaceStatus;
};

const getDisplayChance = (winChance?: number) => {
    if (!winChance) return 'Calculating...';
    else return winChance.toFixed(3);
};

const Ant = ({ name, length, color, weight, winChance, status }: Props) => (
    <div className="ant">
        <p className="name">{name}</p>
        <div className="stats">
            <span>Length: {length}</span>
            <span>Color: {color}</span>
            <span>Weight: {weight}</span>
        </div>
        { status !== RaceStatus.NotStarted && <p className="chance">Win Likelihood: {getDisplayChance( winChance)}</p> }
    </div>
);

export default Ant;