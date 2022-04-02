import React, { useEffect, useState } from 'react';
import AntData from '../data/ant-data-type';
import WinChance from '../data/win-chance-type';
import getWinChance from '../data/get-win-chance';
import Ant from './ant';

interface Props  {
    antData: AntData[]
};

const startRace = (antData: AntData[], setWinChances: (c: WinChance[]) => void) => {
    let chances = new Array<WinChance>();
    setWinChances(chances);

    antData.forEach(ant =>
        getWinChance()((chanceValue: number) => {
            const newChance = { name: ant.name, chance: chanceValue };
            setWinChances([...chances, newChance]);
            chances.push(newChance);
        })
    );
};

const Ants = ({ antData }: Props) => {
    const [winChances, setWinChances] = useState<WinChance[]>()
    return (
        <div>
            {antData.map((ant, i) => {
                const winChance = winChances?.find(c => c.name === ant.name)?.chance;
                return <Ant data={ant} winChance={winChance} hasStarted={!!winChances} key={i} />
            })}
            <button onClick={() => startRace(antData, setWinChances)}>Start Race</button>
        </div >
    );
}

export default Ants;