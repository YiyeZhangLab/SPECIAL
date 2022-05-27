const getObservation = async (myApp) => {
    const loincs = [ encodeURIComponent("http://loinc.org|4548-4") ] //4548-4 = HgA1C  //4544-3 = hematocrit
    const URL = myApp.smart.state.serverUrl+"/Observation?patient="+myApp.smart.patient.id+"&limit=50&code="+loincs.join(",");
    
    const res = await fetch(URL,{
        headers:{  
          "Accept":"application/json+fhir",
          "Authorization":"Bearer "+myApp.smart.state.tokenResponse.access_token
        }
    });

    const Observation = await res.json();

    console.log(`Received ObservationXML: ${Observation}`);
    return Observation;
}

export default getObservation;