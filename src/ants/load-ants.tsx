import React from 'react';
import AntData from '../data/ant-data';
import getAntData from '../data/get-ant-data';

const loadData = async (setAntData: (d: AntData[]) => void) => {
    const data = await getAntData();
    setAntData(data);
};

interface Props {
    setAntData: (a: AntData[]) => void
};

const LoadAnts = ({ setAntData }: Props) =>
    <button onClick={() => loadData(setAntData)}></button>;

export default LoadAnts;