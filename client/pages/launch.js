import React, { useEffect } from 'react';
import { Container, Header} from 'semantic-ui-react';
import FHIR from "fhirclient"

const LaunchPage = () => {
  // TODO: change client_id and scope, so that it contains permission for conditions and encounters
  useEffect(() => {
    FHIR.oauth2.authorize({
      'client_id': '9135d0e7-e64e-4201-80f9-4f02f2596584',
      'scope':  'PATIENT.READ, PATIENT.SEARCH, OBSERVATION.READ, OBSERVATION.SEARCH ',
      'redirect_uri': 'https://epic.gordongao1.repl.co/app.html'
    })
    // FHIR.oauth2.authorize({
    //   'client_id': '614e923c-d975-4c6c-9cae-a33571857703',
    //   'scope':  'PATIENT.READ, PATIENT.SEARCH, OBSERVATION.READ, OBSERVATION.SEARCH, CONDITION.SEARCH, ENCOUNTER.READ',
    //   'redirect_uri': 'https://epic.ichiyoz.repl.co/app.html'
    // })
  })
  return (
    <Container
      text
      textAlign='center'
    >
      <Header
        as='h1'
        style={{
          fontSize: '6em',
          marginTop: '1em',
          fontFamily: 'Optima, sans-serif',
          color: '#01A7AD'
        }}
      >
        Loading...
      </Header>
    </Container>
  );
}

export default LaunchPage;