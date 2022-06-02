import React, { useEffect, useState } from 'react';
import { Container, Header} from 'semantic-ui-react';
import getPrediction from '../lib/requestData/getPrediction';

const AppPage = () => {
  const [result, setResult] = useState(null);
  useEffect( async () => {
    result = await getPrediction();
    setResult(result);
  })
  return (
    <Container>
      <Header>
        {JSON.stringify(result)}
      </Header>          
    </Container>
  )
}

export default AppPage
