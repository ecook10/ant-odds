import React from 'react';
import AntDataType from '../data/ant-data-type';
import getAntData from '../data/get-ant-data';

const loadData = async (setAntData: (d: AntDataType[]) => void) => {
    const data = await getAntData();
    setAntData(data);
};

interface Props {
    setAntData: (a: AntDataType[]) => void
};

const LoadAnts = ({ setAntData }: Props) =>
    <button onClick={() => loadData(setAntData)}>Load Data</button>;

export default LoadAnts;