import React, { useEffect, useState } from 'react';
import { sortBy } from 'lodash';
import getWinChance from '../data/get-win-chance';
import AntData from '../types/ant-data-type';
import WinChance from '../types/win-chance-type';
import RaceStatus from '../types/race-status';
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

const getRaceStatus = (antData: AntData[], chances?: WinChance[]) => {
    if (!chances) return RaceStatus.NotStarted
    else if (antData.length === chances.length) return RaceStatus.Completed
    else return RaceStatus.InProgress
}

const RaceContent = ({ antData }: Props) => {
    const [winChances, setWinChances] = useState<WinChance[]>();
    const raceStatus = getRaceStatus(antData, winChances)
    const dataWithChances = antData.map(ant => {
        const winChance = winChances?.find(c => c.name === ant.name);
        return { ...ant, winChance: winChance?.chance }
    });
    const sortedData = sortBy(dataWithChances, d => (d.winChance || 0) * -1);

    return (
        <div className="content">
            <div className="participants">
                <h2>Race Participants</h2>
                {sortedData.map((data, i) =>
                    <Ant {...data} status={raceStatus} key={i} />
                )}
            </div>
            <div className="status">
                <h2>Race Status</h2>
                <p>{raceStatus}</p>
                <button
                    onClick={() => startRace(antData, setWinChances)}
                    disabled={raceStatus === RaceStatus.InProgress}
                >{raceStatus == RaceStatus.Completed ? 'Replay' : 'Start'} Race</button>
            </div>
        </div>
    );
}

export default RaceContent;