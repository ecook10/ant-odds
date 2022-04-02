import React from 'react';
import AntDataType from '../data/ant-data-type';
import Ant from './ant';

interface Props  {
    antData: AntDataType[]
};

const Ants = ({ antData }: Props) => (
    <div>
        {antData.map(ant => <Ant {...ant} />)}
    </div>
);

export default Ants;