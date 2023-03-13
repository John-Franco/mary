import React, { useState, useEffect } from 'react';
import FabricTable from './FabricTable';
import Layout from "../components/layout/LayoutView";
function App() {
    const [fabricData, setFabricData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/fabrics')
            .then(response => response.json())
            .then(data => setFabricData(data))
            .catch(error => console.log(error));
    }, []);

    return (
        <Layout>
            <FabricTable data={fabricData} setFabricData={setFabricData} />
        </Layout>
    );
}

export default App;
