const vitalsigns = `<Bundle xmlns="http://hl7.org/fhir">
<type value="searchset" />
<total value="1" />
<link>
    <relation value="self" />
    <url value="https://epicproxy-pub-np.et1089.epichosted.com/FHIRTSTProxy/api/FHIR/R4/Observation?subject=Patient/TuIsFeHJGysga1t2g3n1BXL2cr9kG6ZShbwg3YwKrfHwB&amp;category=vital-signs" />
</link>
<entry>
    <link>
        <relation value="self" />
        <url value="https://epicproxy-pub-np.et1089.epichosted.com/FHIRTSTProxy/api/FHIR/R4/Observation/egnUrmVstZOsY6UkTCDCq1c59faaQaAyjrkN6is24-pKEuLlXKi8dKiINUKZ-o-UG3" />
    </link>
    <fullUrl value="https://epicproxy-pub-np.et1089.epichosted.com/FHIRTSTProxy/api/FHIR/R4/Observation/egnUrmVstZOsY6UkTCDCq1c59faaQaAyjrkN6is24-pKEuLlXKi8dKiINUKZ-o-UG3" />
    <resource>
        <Observation>
            <id value="egnUrmVstZOsY6UkTCDCq1c59faaQaAyjrkN6is24-pKEuLlXKi8dKiINUKZ-o-UG3" />
            <status value="final" />
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/observation-category" />
                    <code value="vital-signs" />
                    <display value="Vital Signs" />
                </coding>
                <text value="Vital Signs" />
            </category>
            <code>
                <coding>
                    <system value="urn:oid:1.2.840.114350.1.13.535.3.7.2.707679" />
                    <code value="14" />
                    <display value="Weight" />
                </coding>
                <coding>
                    <system value="http://open.epic.com/FHIR/StructureDefinition/observation-flowsheet-id" />
                    <code value="tG1OH-G.ElETlQQX1WyfbNA0" />
                    <display value="Weight" />
                </coding>
                <coding>
                    <system value="urn:oid:1.2.246.537.6.96" />
                    <code value="29463-7" />
                </coding>
                <coding>
                    <system value="http://loinc.org" />
                    <code value="29463-7" />
                    <display value="Body weight" />
                </coding>
                <coding>
                    <system value="http://loinc.org" />
                    <code value="3141-9" />
                    <display value="Body weight Measured" />
                </coding>
                <coding>
                    <system value="http://loinc.org" />
                    <code value="8716-3" />
                    <display value="Vital signs" />
                </coding>
                <text value="Weight" />
            </code>
            <subject>
                <reference value="Patient/e3WP-SI--5jGsomn9yE06eg3" />
                <display value="Bmh, Obstetrics" />
            </subject>
            <encounter>
                <reference value="Encounter/exry2qRp88Nrh5wQkZ.LMaw3" />
                <display value="Hospital Encounter" />
            </encounter>
            <effectiveDateTime value="2022-06-16T18:00:00Z" />
            <issued value="2022-06-16T18:04:22Z" />
            <performer>
                <reference value="Practitioner/ePl1vD4YWONZV.2wbAqGdRg3" />
                <display value="Ayan Roychowdhury, RPh" />
            </performer>
            <valueQuantity>
                <value value="40" />
                <unit value="kg" />
                <system value="http://unitsofmeasure.org" />
                <code value="kg" />
            </valueQuantity>
        </Observation>
    </resource>
    <search>
        <mode value="match" />
    </search>
</entry>
</Bundle>`

export default vitalsigns;