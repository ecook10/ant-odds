import React, { useState } from 'react';
import AntDataType from './data/ant-data-type';
import Ants from './ants/ants';
import LoadAnts from './ants/load-ants';

const App = () => {
    const [antData, setAntData] = useState<AntDataType[]>();
    return (
        <div>
            <h1>KAntTucky Derby Sportsbook</h1>
            { !!antData ? <Ants antData={antData} /> : <LoadAnts setAntData={setAntData} />}
        </div>
    );
};

export default App;
