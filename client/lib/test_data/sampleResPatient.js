const sampleResPatient = `<Patient xmlns="http://hl7.org/fhir">
<id value="enxbLovkR6kaDxu1fFCLRLAydXVVtPNSMHFdTCwdSAms3" />
<extension url="http://hl7.org/fhir/us/core/StructureDefinition/us-core-race">
    <extension url="ombCategory">
        <valueCoding>
            <system value="urn:oid:2.16.840.1.113883.6.238" />
            <code value="2028-9" />
            <display value="Asian" />
        </valueCoding>
    </extension>
    <extension url="text">
        <valueString value="Asian" />
    </extension>
</extension>
<extension url="http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity">
    <extension url="ombCategory">
        <valueCoding>
            <system value="urn:oid:2.16.840.1.113883.6.238" />
            <code value="2186-5" />
            <display value="Not Hispanic or Latino" />
        </valueCoding>
    </extension>
    <extension url="text">
        <valueString value="Not Hispanic or Latino" />
    </extension>
</extension>
<extension url="http://open.epic.com/FHIR/StructureDefinition/extension/legal-sex">
    <valueCodeableConcept>
        <coding>
            <system value="urn:oid:1.2.840.114350.1.13.535.2.7.10.698084.130.657370.258999" />
            <code value="male" />
        </coding>
    </valueCodeableConcept>
</extension>
<extension url="http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex">
    <valueCode value="M" />
</extension>
<identifier>
    <use value="usual" />
    <type>
        <text value="BAA" />
    </type>
    <system value="urn:oid:1.2.840.114350.1.13.535.2.7.5.737384.180" />
    <value value="916343486" />
</identifier>
<identifier>
    <use value="usual" />
    <type>
        <text value="WCMC" />
    </type>
    <system value="urn:oid:1.2.840.114350.1.13.535.2.7.5.737384.0" />
    <value value="11723843" />
</identifier>
<identifier>
    <use value="usual" />
    <type>
        <text value="EXTERNAL" />
    </type>
    <system value="urn:oid:1.2.840.114350.1.13.535.2.7.2.698084" />
    <value value="Z11816597" />
</identifier>
<identifier>
    <use value="usual" />
    <type>
        <text value="FDTC" />
    </type>
    <system value="urn:oid:1.2.840.114350.1.13.535.2.7.5.737384.999334707" />
    <value value="A184X000003ILOOAAO" />
</identifier>
<identifier>
    <use value="usual" />
    <type>
        <text value="FHIR" />
    </type>
    <system value="http://open.epic.com/FHIR/StructureDefinition/patient-dstu2-fhir-id" />
    <value value="TYqX76iJYV-ieJD9c368DCEDuN3tTXtfMFF6-jsUUTmIB" />
</identifier>
<identifier>
    <use value="usual" />
    <type>
        <text value="FHIR STU3" />
    </type>
    <system value="http://open.epic.com/FHIR/StructureDefinition/patient-fhir-id" />
    <value value="enxbLovkR6kaDxu1fFCLRLAydXVVtPNSMHFdTCwdSAms3" />
</identifier>
<identifier>
    <use value="usual" />
    <type>
        <text value="INTERNAL" />
    </type>
    <system value="urn:oid:1.2.840.114350.1.13.535.2.7.2.698084" />
    <value value=" Z11816597" />
</identifier>
<identifier>
    <use value="usual" />
    <type>
        <text value="MYCHARTLOGIN" />
    </type>
    <system value="urn:oid:1.2.840.114350.1.13.535.2.7.3.878082.110" />
    <value value="WG222@CORNELL.EDU" />
</identifier>
<identifier>
    <use value="usual" />
    <type>
        <text value="UI" />
    </type>
    <system value="urn:oid:1.2.5.8.2.7" />
    <value value="1400428261" />
</identifier>
<identifier>
    <use value="usual" />
    <type>
        <text value="WPRINTERNAL" />
    </type>
    <system value="urn:oid:1.2.840.114350.1.13.535.2.7.2.878082" />
    <value value="1841884" />
</identifier>
<identifier>
    <use value="usual" />
    <system value="https://open.epic.com/FHIR/StructureDefinition/PayerMemberId" />
    <value value="W266991050" />
</identifier>
<identifier>
    <use value="usual" />
    <system value="https://open.epic.com/FHIR/StructureDefinition/PayerMemberId" />
    <value value="W26699105000" />
</identifier>
<active value="true" />
<name>
    <use value="old" />
    <text value="GAO,GORDON" />
    <family value="Gao" />
    <given value="Gordon" />
</name>
<name>
    <use value="official" />
    <text value="Weidong Gao" />
    <family value="Gao" />
    <given value="Weidong" />
</name>
<name>
    <use value="usual" />
    <text value="Gordon Gao" />
    <family value="Gao" />
    <given value="Gordon" />
</name>
<telecom>
    <system value="phone" />
    <value value="917-415-9681" />
    <use value="home" />
</telecom>
<telecom>
    <system value="phone" />
    <value value="917-415-9681" />
    <use value="mobile" />
</telecom>
<telecom>
    <system value="email" />
    <value value="wg222@cornell.edu" />
</telecom>
<gender value="male" />
<birthDate value="1998-01-10" />
<deceasedBoolean value="false" />
<address>
    <use value="old" />
    <line value="1 E Loop Rd" />
    <city value="NEW YORK" />
    <district value="NEW YORK" />
    <state value="NY" />
    <postalCode value="10044" />
    <country value="USA" />
</address>
<address>
    <use value="old" />
    <line value="1 E LOOP RD APT 19C" />
    <city value="NEW YORK" />
    <district value="NEW YORK" />
    <state value="NY" />
    <postalCode value="10044-1500" />
    <country value="USA" />
</address>
<address>
    <use value="home" />
    <line value="1 E LOOP RD APT 19C" />
    <city value="NEW YORK" />
    <district value="NEW YORK" />
    <state value="NY" />
    <postalCode value="10044-1500" />
    <country value="USA" />
</address>
<maritalStatus>
    <text value="SINGLE" />
</maritalStatus>
<communication>
    <language>
        <coding>
            <system value="urn:ietf:bcp:47" />
            <code value="en" />
            <display value="English" />
        </coding>
        <text value="English" />
    </language>
    <preferred value="true" />
</communication>
<generalPractitioner>
    <reference value="Practitioner/e96DXZcpBmlFtZwubngUbQQ3" />
    <type value="Practitioner" />
    <display value="Gregory Mark Mcwilliams, MD" />
</generalPractitioner>
<managingOrganization>
    <reference value="Organization/ephANB18bwAN8c7LtWcWSiA3" />
    <display value="NYP/WEILL CORNELL MEDICAL COLLEGE" />
</managingOrganization>
</Patient>`

export default sampleResPatient;