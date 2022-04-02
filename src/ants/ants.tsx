import React from 'react';
import AntData from '../data/ant-data';
import Ant from './ant';

interface Props  {
    antData: AntData[]
};

const Ants = ({ antData }: Props) => (
    <div>
        {antData.map(ant => <Ant {...ant} />)}
    </div>
);

export default Ants;