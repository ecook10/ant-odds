import React, { useState } from 'react';
import AntDataType from './types/ant-data-type';
import RaceContent from './components/race-content';
import LoadAnts from './components/load-ants';

import './App.css';

const App = () => {
    const [antData, setAntData] = useState<AntDataType[]>();
    return (
        <div className="app">
            <h1>KAntTucky Derby Sportsbook</h1>
            { !!antData ? <RaceContent antData={antData} /> : <LoadAnts setAntData={setAntData} />}
        </div>
    );
};

export default App;
