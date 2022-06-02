import React from 'react';
import { Button, Container, Header, Icon} from 'semantic-ui-react';
import Link from 'next/link'

const IndexPage = () => {
  return (
      <Container
        text
        textAlign='left'
      >
          <Header
            as='h1'
            style={{
              fontSize: '6em',
              marginTop: '1em',
              fontFamily: 'Optima, sans-serif',
              color: '#39634F'
            }}
          > 
            <Header.Content>
              Welcome to
            </Header.Content>
            <Header.Content
              style={{ color: '#01A7AD' }}
            >
              Special
              <Icon name='leaf'/>
            </Header.Content>
            <Header.Content
              style={{
                fontFamily: 'Optima, sans-serif',
                fontSize: '20px',
              }}
            >
              We Help Produce Life
            </Header.Content>
          </Header>
          <Link href="/launch?iss=https://epicproxy-pub.et1089.epichosted.com/FHIRProxy/api/FHIR/R4&aud=">
            <Button
              primary
              as='button'
              circular
              style={{
                fontSize: '1em',
                fontFamily: 'Optima, sans-serif',
                color: 'white',
                marginTop: '1em',
                backgroundColor: '#01A7AD'
              }}
            >
              Get Your Diagnosis
            </Button>
          </Link>
      </Container>
  );
}



export default IndexPage;
