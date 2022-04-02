import React, { useState } from 'react';
import AntData from './data/ant-data';
import Ants from './ants/ants';
import LoadAnts from './ants/load-ants';

const App = () => {
    const [antData, setAntData] = useState<AntData[]>();
    return (
        <div>
            <h1>KAntTucky Derby Sportsbook</h1>
            { !!antData ? <Ants antData={antData} /> : <LoadAnts setAntData={setAntData} />}
        </div>
    );
};

export default App;
