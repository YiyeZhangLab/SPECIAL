const conditionXML = `<Bundle xmlns="http://hl7.org/fhir">
<type value="searchset" />
<total value="48" />
<link>
    <relation value="self" />
    <url value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition?patient=eZ5-7rYdWqgv3jSgIvx.SPw3&amp;category=encounter-diagnosis" />
</link>
<entry>
    <link>
        <relation value="self" />
        <url value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/ejfhyCtPxusbaWaQRKlBQV6LLDg5BFzfVP-addkBOIvnu6EtLcwN8Tkna95oMl5iRy4cY9mJsn-Z1U36H.hTI7Q3" />
    </link>
    <fullUrl value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/ejfhyCtPxusbaWaQRKlBQV6LLDg5BFzfVP-addkBOIvnu6EtLcwN8Tkna95oMl5iRy4cY9mJsn-Z1U36H.hTI7Q3" />
    <resource>
        <Condition>
            <id value="ejfhyCtPxusbaWaQRKlBQV6LLDg5BFzfVP-addkBOIvnu6EtLcwN8Tkna95oMl5iRy4cY9mJsn-Z1U36H.hTI7Q3" />
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/condition-category" />
                    <code value="encounter-diagnosis" />
                    <display value="Encounter Diagnosis" />
                </coding>
                <text value="Encounter Diagnosis" />
            </category>
            <category>
                <coding>
                    <system value="http://open.epic.com/FHIR/StructureDefinition/condition-category" />
                    <code value="visit-diagnosis" />
                    <display value="Visit Diagnosis" />
                </coding>
                <text value="Visit Diagnosis" />
            </category>
            <code>
                <coding>
                    <system value="http://snomed.info/sct" />
                    <code value="235595009" />
                    <display value="Gastroesophageal reflux disease (disorder)" />
                </coding>
                <coding>
                    <system value="http://hl7.org/fhir/sid/icd-9-cm/diagnosis" />
                    <code value="530.81" />
                    <display value="Gastroesophageal reflux" />
                </coding>
                <coding>
                    <system value="urn:oid:2.16.840.1.113883.6.90" />
                    <code value="K21.9" />
                    <display value="Gastroesophageal reflux" />
                </coding>
                <text value="Gastroesophageal reflux" />
            </code>
            <subject>
                <reference value="Patient/eZ5-7rYdWqgv3jSgIvx.SPw3" />
                <display value="Ambulatory, Oliver" />
            </subject>
            <encounter>
                <reference value="Encounter/eMzyDlmy1Q5tpYyoogb5arQ3" />
            </encounter>
        </Condition>
    </resource>
    <search>
        <mode value="match" />
    </search>
</entry>
<entry>
    <link>
        <relation value="self" />
        <url value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/ejfhyCtPxusbaWaQRKlBQV0-WHJqQ2q1Q1BptQKEi.BeYfUVDEiltP59qqQP9D6SHSDkiUxZDjCyPC6JsTkxCUQ3" />
    </link>
    <fullUrl value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/ejfhyCtPxusbaWaQRKlBQV0-WHJqQ2q1Q1BptQKEi.BeYfUVDEiltP59qqQP9D6SHSDkiUxZDjCyPC6JsTkxCUQ3" />
    <resource>
        <Condition>
            <id value="ejfhyCtPxusbaWaQRKlBQV0-WHJqQ2q1Q1BptQKEi.BeYfUVDEiltP59qqQP9D6SHSDkiUxZDjCyPC6JsTkxCUQ3" />
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/condition-category" />
                    <code value="encounter-diagnosis" />
                    <display value="Encounter Diagnosis" />
                </coding>
                <text value="Encounter Diagnosis" />
            </category>
            <category>
                <coding>
                    <system value="http://open.epic.com/FHIR/StructureDefinition/condition-category" />
                    <code value="visit-diagnosis" />
                    <display value="Visit Diagnosis" />
                </coding>
                <text value="Visit Diagnosis" />
            </category>
            <code>
                <coding>
                    <system value="http://snomed.info/sct" />
                    <code value="13644009" />
                    <display value="Hypercholesterolemia (disorder)" />
                </coding>
                <coding>
                    <system value="http://hl7.org/fhir/sid/icd-9-cm/diagnosis" />
                    <code value="272.0" />
                    <display value="Hypercholesteremia" />
                </coding>
                <coding>
                    <system value="urn:oid:2.16.840.1.113883.6.90" />
                    <code value="E78.00" />
                    <display value="Hypercholesteremia" />
                </coding>
                <text value="Hypercholesteremia" />
            </code>
            <subject>
                <reference value="Patient/eZ5-7rYdWqgv3jSgIvx.SPw3" />
                <display value="Ambulatory, Oliver" />
            </subject>
            <encounter>
                <reference value="Encounter/ea1zIYBJ.q65kb66PFFH3fQ3" />
            </encounter>
        </Condition>
    </resource>
    <search>
        <mode value="match" />
    </search>
</entry>
<entry>
    <link>
        <relation value="self" />
        <url value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/ejfhyCtPxusbaWaQRKlBQV.gvAhEiKyDfAaIAXZ.SPDGl0FXMTpC5WYegDN7cBqoExRh4AAC90rOO96fSzUY5oA3" />
    </link>
    <fullUrl value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/ejfhyCtPxusbaWaQRKlBQV.gvAhEiKyDfAaIAXZ.SPDGl0FXMTpC5WYegDN7cBqoExRh4AAC90rOO96fSzUY5oA3" />
    <resource>
        <Condition>
            <id value="ejfhyCtPxusbaWaQRKlBQV.gvAhEiKyDfAaIAXZ.SPDGl0FXMTpC5WYegDN7cBqoExRh4AAC90rOO96fSzUY5oA3" />
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/condition-category" />
                    <code value="encounter-diagnosis" />
                    <display value="Encounter Diagnosis" />
                </coding>
                <text value="Encounter Diagnosis" />
            </category>
            <category>
                <coding>
                    <system value="http://open.epic.com/FHIR/StructureDefinition/condition-category" />
                    <code value="visit-diagnosis" />
                    <display value="Visit Diagnosis" />
                </coding>
                <text value="Visit Diagnosis" />
            </category>
            <code>
                <coding>
                    <system value="http://snomed.info/sct" />
                    <code value="59621000" />
                    <display value="Essential hypertension (disorder)" />
                </coding>
                <coding>
                    <system value="http://hl7.org/fhir/sid/icd-9-cm/diagnosis" />
                    <code value="401.9" />
                    <display value="Essential hypertension" />
                </coding>
                <coding>
                    <system value="urn:oid:2.16.840.1.113883.6.90" />
                    <code value="I10" />
                    <display value="Essential hypertension" />
                </coding>
                <text value="Essential hypertension" />
            </code>
            <subject>
                <reference value="Patient/eZ5-7rYdWqgv3jSgIvx.SPw3" />
                <display value="Ambulatory, Oliver" />
            </subject>
            <encounter>
                <reference value="Encounter/eCFwr4h8.hFjATpEey0na3A3" />
            </encounter>
        </Condition>
    </resource>
    <search>
        <mode value="match" />
    </search>
</entry>
<entry>
    <link>
        <relation value="self" />
        <url value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/ejfhyCtPxusbaWaQRKlBQV4J9qCXrFCYj-bjb9Az0nW3uHHEybqP0uEJN91twLq1Q.6O-9sFnIMHTOhEQjr.qeQ3" />
    </link>
    <fullUrl value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/ejfhyCtPxusbaWaQRKlBQV4J9qCXrFCYj-bjb9Az0nW3uHHEybqP0uEJN91twLq1Q.6O-9sFnIMHTOhEQjr.qeQ3" />
    <resource>
        <Condition>
            <id value="ejfhyCtPxusbaWaQRKlBQV4J9qCXrFCYj-bjb9Az0nW3uHHEybqP0uEJN91twLq1Q.6O-9sFnIMHTOhEQjr.qeQ3" />
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/condition-category" />
                    <code value="encounter-diagnosis" />
                    <display value="Encounter Diagnosis" />
                </coding>
                <text value="Encounter Diagnosis" />
            </category>
            <category>
                <coding>
                    <system value="http://open.epic.com/FHIR/StructureDefinition/condition-category" />
                    <code value="visit-diagnosis" />
                    <display value="Visit Diagnosis" />
                </coding>
                <text value="Visit Diagnosis" />
            </category>
            <code>
                <coding>
                    <system value="http://snomed.info/sct" />
                    <code value="10509002" />
                    <display value="Acute bronchitis (disorder)" />
                </coding>
                <coding>
                    <system value="http://hl7.org/fhir/sid/icd-9-cm/diagnosis" />
                    <code value="466.0" />
                    <display value="Acute bronchitis" />
                </coding>
                <coding>
                    <system value="urn:oid:2.16.840.1.113883.6.90" />
                    <code value="J20.9" />
                    <display value="Acute bronchitis" />
                </coding>
                <text value="Acute bronchitis" />
            </code>
            <subject>
                <reference value="Patient/eZ5-7rYdWqgv3jSgIvx.SPw3" />
                <display value="Ambulatory, Oliver" />
            </subject>
            <encounter>
                <reference value="Encounter/ecrVZiytW622Oa4bXdySeLQ3" />
            </encounter>
        </Condition>
    </resource>
    <search>
        <mode value="match" />
    </search>
</entry>
<entry>
    <link>
        <relation value="self" />
        <url value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/ejfhyCtPxusbaWaQRKlBQV.F4qX.26xFADYTN6JonZgonZwIf5sCFr-MY9V0jlUhLui0JTvdhPnAY2Tnqzm2ZSQ3" />
    </link>
    <fullUrl value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/ejfhyCtPxusbaWaQRKlBQV.F4qX.26xFADYTN6JonZgonZwIf5sCFr-MY9V0jlUhLui0JTvdhPnAY2Tnqzm2ZSQ3" />
    <resource>
        <Condition>
            <id value="ejfhyCtPxusbaWaQRKlBQV.F4qX.26xFADYTN6JonZgonZwIf5sCFr-MY9V0jlUhLui0JTvdhPnAY2Tnqzm2ZSQ3" />
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/condition-category" />
                    <code value="encounter-diagnosis" />
                    <display value="Encounter Diagnosis" />
                </coding>
                <text value="Encounter Diagnosis" />
            </category>
            <category>
                <coding>
                    <system value="http://open.epic.com/FHIR/StructureDefinition/condition-category" />
                    <code value="visit-diagnosis" />
                    <display value="Visit Diagnosis" />
                </coding>
                <text value="Visit Diagnosis" />
            </category>
            <code>
                <coding>
                    <system value="http://snomed.info/sct" />
                    <code value="66857006" />
                    <display value="Hemoptysis (disorder)" />
                </coding>
                <coding>
                    <system value="http://hl7.org/fhir/sid/icd-9-cm/diagnosis" />
                    <code value="786.3" />
                    <display value="Hemoptysis" />
                </coding>
                <text value="Hemoptysis" />
            </code>
            <subject>
                <reference value="Patient/eZ5-7rYdWqgv3jSgIvx.SPw3" />
                <display value="Ambulatory, Oliver" />
            </subject>
            <encounter>
                <reference value="Encounter/euaFKJJ8tq5MdaE7s35nR-w3" />
            </encounter>
        </Condition>
    </resource>
    <search>
        <mode value="match" />
    </search>
</entry>
<entry>
    <link>
        <relation value="self" />
        <url value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/epRksINO6oVal3KYeT6V0OeiRPK5bKjb4MrG2Cs2zQQ9cd6YHR1WKFDS.YhsU1eRnGxDNUq1Wrh4f8cLRByipGw3" />
    </link>
    <fullUrl value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/epRksINO6oVal3KYeT6V0OeiRPK5bKjb4MrG2Cs2zQQ9cd6YHR1WKFDS.YhsU1eRnGxDNUq1Wrh4f8cLRByipGw3" />
    <resource>
        <Condition>
            <id value="epRksINO6oVal3KYeT6V0OeiRPK5bKjb4MrG2Cs2zQQ9cd6YHR1WKFDS.YhsU1eRnGxDNUq1Wrh4f8cLRByipGw3" />
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/condition-category" />
                    <code value="encounter-diagnosis" />
                    <display value="Encounter Diagnosis" />
                </coding>
                <text value="Encounter Diagnosis" />
            </category>
            <category>
                <coding>
                    <system value="http://open.epic.com/FHIR/StructureDefinition/condition-category" />
                    <code value="visit-diagnosis" />
                    <display value="Visit Diagnosis" />
                </coding>
                <text value="Visit Diagnosis" />
            </category>
            <code>
                <coding>
                    <system value="http://snomed.info/sct" />
                    <code value="10509002" />
                    <display value="Acute bronchitis (disorder)" />
                </coding>
                <coding>
                    <system value="http://hl7.org/fhir/sid/icd-9-cm/diagnosis" />
                    <code value="466.0" />
                    <display value="Acute bronchitis" />
                </coding>
                <coding>
                    <system value="urn:oid:2.16.840.1.113883.6.90" />
                    <code value="J20.9" />
                    <display value="Acute bronchitis" />
                </coding>
                <text value="Acute bronchitis" />
            </code>
            <subject>
                <reference value="Patient/eZ5-7rYdWqgv3jSgIvx.SPw3" />
                <display value="Ambulatory, Oliver" />
            </subject>
            <encounter>
                <reference value="Encounter/ePDHZt9z45OWfzDyaw-4OkQ3" />
            </encounter>
        </Condition>
    </resource>
    <search>
        <mode value="match" />
    </search>
</entry>
<entry>
    <link>
        <relation value="self" />
        <url value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/epRksINO6oVal3KYeT6V0OZrvyozFIsNOIoE2Z3TTOIe8qeuaj3.fWhMrPYV3GAjYyPqt4Fjlp5N3kG2dILgMBg3" />
    </link>
    <fullUrl value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/epRksINO6oVal3KYeT6V0OZrvyozFIsNOIoE2Z3TTOIe8qeuaj3.fWhMrPYV3GAjYyPqt4Fjlp5N3kG2dILgMBg3" />
    <resource>
        <Condition>
            <id value="epRksINO6oVal3KYeT6V0OZrvyozFIsNOIoE2Z3TTOIe8qeuaj3.fWhMrPYV3GAjYyPqt4Fjlp5N3kG2dILgMBg3" />
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/condition-category" />
                    <code value="encounter-diagnosis" />
                    <display value="Encounter Diagnosis" />
                </coding>
                <text value="Encounter Diagnosis" />
            </category>
            <category>
                <coding>
                    <system value="http://open.epic.com/FHIR/StructureDefinition/condition-category" />
                    <code value="visit-diagnosis" />
                    <display value="Visit Diagnosis" />
                </coding>
                <text value="Visit Diagnosis" />
            </category>
            <code>
                <coding>
                    <system value="http://snomed.info/sct" />
                    <code value="195381005" />
                    <display value="Non-neoplastic nevus (disorder)" />
                </coding>
                <coding>
                    <system value="http://hl7.org/fhir/sid/icd-9-cm/diagnosis" />
                    <code value="448.1" />
                    <display value="Nevus, non-neoplastic" />
                </coding>
                <coding>
                    <system value="urn:oid:2.16.840.1.113883.6.90" />
                    <code value="I78.1" />
                    <display value="Nevus, non-neoplastic" />
                </coding>
                <text value="Nevus, non-neoplastic" />
            </code>
            <subject>
                <reference value="Patient/eZ5-7rYdWqgv3jSgIvx.SPw3" />
                <display value="Ambulatory, Oliver" />
            </subject>
            <encounter>
                <reference value="Encounter/eCg0NHdWVhrSXK9yLu6RpYA3" />
            </encounter>
        </Condition>
    </resource>
    <search>
        <mode value="match" />
    </search>
</entry>
<entry>
    <link>
        <relation value="self" />
        <url value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/epRksINO6oVal3KYeT6V0OY92kppuYu7A6l3WYvrzveh10WXxdQDzsILEd.Z9QIta.UDjv6Eyn7NsCtEHSF6A2A3" />
    </link>
    <fullUrl value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/epRksINO6oVal3KYeT6V0OY92kppuYu7A6l3WYvrzveh10WXxdQDzsILEd.Z9QIta.UDjv6Eyn7NsCtEHSF6A2A3" />
    <resource>
        <Condition>
            <id value="epRksINO6oVal3KYeT6V0OY92kppuYu7A6l3WYvrzveh10WXxdQDzsILEd.Z9QIta.UDjv6Eyn7NsCtEHSF6A2A3" />
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/condition-category" />
                    <code value="encounter-diagnosis" />
                    <display value="Encounter Diagnosis" />
                </coding>
                <text value="Encounter Diagnosis" />
            </category>
            <category>
                <coding>
                    <system value="http://open.epic.com/FHIR/StructureDefinition/condition-category" />
                    <code value="visit-diagnosis" />
                    <display value="Visit Diagnosis" />
                </coding>
                <text value="Visit Diagnosis" />
            </category>
            <code>
                <coding>
                    <system value="http://snomed.info/sct" />
                    <code value="262965006" />
                    <display value="Strain of back muscle (disorder)" />
                </coding>
                <coding>
                    <system value="http://hl7.org/fhir/sid/icd-9-cm/diagnosis" />
                    <code value="847.9" />
                    <display value="Back strain" />
                </coding>
                <coding>
                    <system value="urn:oid:2.16.840.1.113883.6.90" />
                    <code value="S39.012A" />
                    <display value="Back strain" />
                </coding>
                <text value="Back strain" />
            </code>
            <subject>
                <reference value="Patient/eZ5-7rYdWqgv3jSgIvx.SPw3" />
                <display value="Ambulatory, Oliver" />
            </subject>
            <encounter>
                <reference value="Encounter/eYVA7gAsu8YV3eIfpjFrw2A3" />
            </encounter>
        </Condition>
    </resource>
    <search>
        <mode value="match" />
    </search>
</entry>
<entry>
    <link>
        <relation value="self" />
        <url value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/epRksINO6oVal3KYeT6V0OWDnbUBara9d9LrEqpgKOBRbhDT4Plehv8dHdmrJ4iJCCZBEWAEzouLhr0MQlh.6zw3" />
    </link>
    <fullUrl value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/epRksINO6oVal3KYeT6V0OWDnbUBara9d9LrEqpgKOBRbhDT4Plehv8dHdmrJ4iJCCZBEWAEzouLhr0MQlh.6zw3" />
    <resource>
        <Condition>
            <id value="epRksINO6oVal3KYeT6V0OWDnbUBara9d9LrEqpgKOBRbhDT4Plehv8dHdmrJ4iJCCZBEWAEzouLhr0MQlh.6zw3" />
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/condition-category" />
                    <code value="encounter-diagnosis" />
                    <display value="Encounter Diagnosis" />
                </coding>
                <text value="Encounter Diagnosis" />
            </category>
            <category>
                <coding>
                    <system value="http://open.epic.com/FHIR/StructureDefinition/condition-category" />
                    <code value="visit-diagnosis" />
                    <display value="Visit Diagnosis" />
                </coding>
                <text value="Visit Diagnosis" />
            </category>
            <code>
                <coding>
                    <system value="http://snomed.info/sct" />
                    <code value="267432004" />
                    <display value="Pure hypercholesterolemia (disorder)" />
                </coding>
                <coding>
                    <system value="http://hl7.org/fhir/sid/icd-9-cm/diagnosis" />
                    <code value="272.0" />
                    <display value="Pure hypercholesterolemia" />
                </coding>
                <coding>
                    <system value="urn:oid:2.16.840.1.113883.6.90" />
                    <code value="E78.00" />
                    <display value="Pure hypercholesterolemia" />
                </coding>
                <text value="Pure hypercholesterolemia" />
            </code>
            <subject>
                <reference value="Patient/eZ5-7rYdWqgv3jSgIvx.SPw3" />
                <display value="Ambulatory, Oliver" />
            </subject>
            <encounter>
                <reference value="Encounter/eLO6vQBkc35URoxKeu1Avcw3" />
            </encounter>
        </Condition>
    </resource>
    <search>
        <mode value="match" />
    </search>
</entry>
<entry>
    <link>
        <relation value="self" />
        <url value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/epRksINO6oVal3KYeT6V0OTkBd9tuFQkcO0lMtFcVHp9X1-Mi13I8b6kLuFMhMSQyQZpTRhAz1xWEiaseWcBpww3" />
    </link>
    <fullUrl value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/epRksINO6oVal3KYeT6V0OTkBd9tuFQkcO0lMtFcVHp9X1-Mi13I8b6kLuFMhMSQyQZpTRhAz1xWEiaseWcBpww3" />
    <resource>
        <Condition>
            <id value="epRksINO6oVal3KYeT6V0OTkBd9tuFQkcO0lMtFcVHp9X1-Mi13I8b6kLuFMhMSQyQZpTRhAz1xWEiaseWcBpww3" />
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/condition-category" />
                    <code value="encounter-diagnosis" />
                    <display value="Encounter Diagnosis" />
                </coding>
                <text value="Encounter Diagnosis" />
            </category>
            <category>
                <coding>
                    <system value="http://open.epic.com/FHIR/StructureDefinition/condition-category" />
                    <code value="visit-diagnosis" />
                    <display value="Visit Diagnosis" />
                </coding>
                <text value="Visit Diagnosis" />
            </category>
            <code>
                <coding>
                    <system value="http://snomed.info/sct" />
                    <code value="59621000" />
                    <display value="Essential hypertension (disorder)" />
                </coding>
                <coding>
                    <system value="http://hl7.org/fhir/sid/icd-9-cm/diagnosis" />
                    <code value="401.9" />
                    <display value="Essential hypertension" />
                </coding>
                <coding>
                    <system value="urn:oid:2.16.840.1.113883.6.90" />
                    <code value="I10" />
                    <display value="Essential hypertension" />
                </coding>
                <text value="Essential hypertension" />
            </code>
            <subject>
                <reference value="Patient/eZ5-7rYdWqgv3jSgIvx.SPw3" />
                <display value="Ambulatory, Oliver" />
            </subject>
            <encounter>
                <reference value="Encounter/eLO6vQBkc35URoxKeu1Avcw3" />
            </encounter>
            <note>
                <text value="Diagnosed age 54. Initially treated with sodium restriction, diet, exercise. Diuretics started ~1988, taken sporadically since that time. Patient admits to poor compliance with med regimen. No history to suggest end organ damage or coronary artery disease. Cardiovascular risk factors include 20 pk yr hx of smoking and hypercholesterolemia." />
            </note>
        </Condition>
    </resource>
    <search>
        <mode value="match" />
    </search>
</entry>
<entry>
    <link>
        <relation value="self" />
        <url value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/epRksINO6oVal3KYeT6V0OdYUW.yiluKxVhAbp0S4ZEUi6FPgm9UkMxA2B4H7xIWCmgwB2qs-zZNDt8uuEz1syQ3" />
    </link>
    <fullUrl value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/epRksINO6oVal3KYeT6V0OdYUW.yiluKxVhAbp0S4ZEUi6FPgm9UkMxA2B4H7xIWCmgwB2qs-zZNDt8uuEz1syQ3" />
    <resource>
        <Condition>
            <id value="epRksINO6oVal3KYeT6V0OdYUW.yiluKxVhAbp0S4ZEUi6FPgm9UkMxA2B4H7xIWCmgwB2qs-zZNDt8uuEz1syQ3" />
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/condition-category" />
                    <code value="encounter-diagnosis" />
                    <display value="Encounter Diagnosis" />
                </coding>
                <text value="Encounter Diagnosis" />
            </category>
            <category>
                <coding>
                    <system value="http://open.epic.com/FHIR/StructureDefinition/condition-category" />
                    <code value="visit-diagnosis" />
                    <display value="Visit Diagnosis" />
                </coding>
                <text value="Visit Diagnosis" />
            </category>
            <code>
                <coding>
                    <system value="http://snomed.info/sct" />
                    <code value="235595009" />
                    <display value="Gastroesophageal reflux disease (disorder)" />
                </coding>
                <coding>
                    <system value="http://hl7.org/fhir/sid/icd-9-cm/diagnosis" />
                    <code value="530.81" />
                    <display value="GERD (gastroesophageal reflux disease)" />
                </coding>
                <coding>
                    <system value="urn:oid:2.16.840.1.113883.6.90" />
                    <code value="K21.9" />
                    <display value="GERD (gastroesophageal reflux disease)" />
                </coding>
                <text value="GERD (gastroesophageal reflux disease)" />
            </code>
            <subject>
                <reference value="Patient/eZ5-7rYdWqgv3jSgIvx.SPw3" />
                <display value="Ambulatory, Oliver" />
            </subject>
            <encounter>
                <reference value="Encounter/eLO6vQBkc35URoxKeu1Avcw3" />
            </encounter>
            <note>
                <text value="GERD, diagnosed by EGD. Symptoms well controlled with intermittent use of H2 blockers" />
            </note>
        </Condition>
    </resource>
    <search>
        <mode value="match" />
    </search>
</entry>
<entry>
    <link>
        <relation value="self" />
        <url value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/epRksINO6oVal3KYeT6V0OTzes4ekUIqtek0NDNrMOQXI55Yn5GX1eso6V6ZIPE4KCw2JensvRz.S.FBVFeT9jw3" />
    </link>
    <fullUrl value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/epRksINO6oVal3KYeT6V0OTzes4ekUIqtek0NDNrMOQXI55Yn5GX1eso6V6ZIPE4KCw2JensvRz.S.FBVFeT9jw3" />
    <resource>
        <Condition>
            <id value="epRksINO6oVal3KYeT6V0OTzes4ekUIqtek0NDNrMOQXI55Yn5GX1eso6V6ZIPE4KCw2JensvRz.S.FBVFeT9jw3" />
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/condition-category" />
                    <code value="encounter-diagnosis" />
                    <display value="Encounter Diagnosis" />
                </coding>
                <text value="Encounter Diagnosis" />
            </category>
            <category>
                <coding>
                    <system value="http://open.epic.com/FHIR/StructureDefinition/condition-category" />
                    <code value="visit-diagnosis" />
                    <display value="Visit Diagnosis" />
                </coding>
                <text value="Visit Diagnosis" />
            </category>
            <code>
                <coding>
                    <system value="http://snomed.info/sct" />
                    <code value="110483000" />
                    <display value="Tobacco user (finding)" />
                </coding>
                <coding>
                    <system value="http://hl7.org/fhir/sid/icd-9-cm/diagnosis" />
                    <code value="305.1" />
                    <display value="Tobacco use disorder" />
                </coding>
                <coding>
                    <system value="urn:oid:2.16.840.1.113883.6.90" />
                    <code value="F17.200" />
                    <display value="Tobacco use disorder" />
                </coding>
                <text value="Tobacco use disorder" />
            </code>
            <subject>
                <reference value="Patient/eZ5-7rYdWqgv3jSgIvx.SPw3" />
                <display value="Ambulatory, Oliver" />
            </subject>
            <encounter>
                <reference value="Encounter/eLO6vQBkc35URoxKeu1Avcw3" />
            </encounter>
        </Condition>
    </resource>
    <search>
        <mode value="match" />
    </search>
</entry>
<entry>
    <link>
        <relation value="self" />
        <url value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/epRksINO6oVal3KYeT6V0OR0t6YVBHhtCWQiDd7y7of1B7ZkiYw-znXlBFxieEzu9DqBzQI8Efg.ez8j5PwdB9w3" />
    </link>
    <fullUrl value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/epRksINO6oVal3KYeT6V0OR0t6YVBHhtCWQiDd7y7of1B7ZkiYw-znXlBFxieEzu9DqBzQI8Efg.ez8j5PwdB9w3" />
    <resource>
        <Condition>
            <id value="epRksINO6oVal3KYeT6V0OR0t6YVBHhtCWQiDd7y7of1B7ZkiYw-znXlBFxieEzu9DqBzQI8Efg.ez8j5PwdB9w3" />
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/condition-category" />
                    <code value="encounter-diagnosis" />
                    <display value="Encounter Diagnosis" />
                </coding>
                <text value="Encounter Diagnosis" />
            </category>
            <category>
                <coding>
                    <system value="http://open.epic.com/FHIR/StructureDefinition/condition-category" />
                    <code value="visit-diagnosis" />
                    <display value="Visit Diagnosis" />
                </coding>
                <text value="Visit Diagnosis" />
            </category>
            <code>
                <coding>
                    <system value="http://snomed.info/sct" />
                    <code value="40930008" />
                    <display value="Hypothyroidism (disorder)" />
                </coding>
                <coding>
                    <system value="http://hl7.org/fhir/sid/icd-9-cm/diagnosis" />
                    <code value="244.9" />
                    <display value="Unspecified hypothyroidism" />
                </coding>
                <coding>
                    <system value="urn:oid:2.16.840.1.113883.6.90" />
                    <code value="E03.9" />
                    <display value="Unspecified hypothyroidism" />
                </coding>
                <text value="Unspecified hypothyroidism" />
            </code>
            <subject>
                <reference value="Patient/eZ5-7rYdWqgv3jSgIvx.SPw3" />
                <display value="Ambulatory, Oliver" />
            </subject>
            <encounter>
                <reference value="Encounter/eLO6vQBkc35URoxKeu1Avcw3" />
            </encounter>
        </Condition>
    </resource>
    <search>
        <mode value="match" />
    </search>
</entry>
<entry>
    <link>
        <relation value="self" />
        <url value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/epRksINO6oVal3KYeT6V0OacJDa4L.jh-Eidkb8LKkYXMMpYE3yoNlZiwLhyxrHNCsFtKPG8.IcaqS-oSovxllQ3" />
    </link>
    <fullUrl value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/epRksINO6oVal3KYeT6V0OacJDa4L.jh-Eidkb8LKkYXMMpYE3yoNlZiwLhyxrHNCsFtKPG8.IcaqS-oSovxllQ3" />
    <resource>
        <Condition>
            <id value="epRksINO6oVal3KYeT6V0OacJDa4L.jh-Eidkb8LKkYXMMpYE3yoNlZiwLhyxrHNCsFtKPG8.IcaqS-oSovxllQ3" />
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/condition-category" />
                    <code value="encounter-diagnosis" />
                    <display value="Encounter Diagnosis" />
                </coding>
                <text value="Encounter Diagnosis" />
            </category>
            <category>
                <coding>
                    <system value="http://open.epic.com/FHIR/StructureDefinition/condition-category" />
                    <code value="visit-diagnosis" />
                    <display value="Visit Diagnosis" />
                </coding>
                <text value="Visit Diagnosis" />
            </category>
            <code>
                <coding>
                    <system value="http://snomed.info/sct" />
                    <code value="13644009" />
                    <display value="Hypercholesterolemia (disorder)" />
                </coding>
                <coding>
                    <system value="http://hl7.org/fhir/sid/icd-9-cm/diagnosis" />
                    <code value="272.0" />
                    <display value="Hypercholesteremia" />
                </coding>
                <coding>
                    <system value="urn:oid:2.16.840.1.113883.6.90" />
                    <code value="E78.00" />
                    <display value="Hypercholesteremia" />
                </coding>
                <text value="Hypercholesteremia" />
            </code>
            <subject>
                <reference value="Patient/eZ5-7rYdWqgv3jSgIvx.SPw3" />
                <display value="Ambulatory, Oliver" />
            </subject>
            <encounter>
                <reference value="Encounter/ekeSET-l9Zek5puNZoKfCUA3" />
            </encounter>
        </Condition>
    </resource>
    <search>
        <mode value="match" />
    </search>
</entry>
<entry>
    <link>
        <relation value="self" />
        <url value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/epRksINO6oVal3KYeT6V0OZjcH1sgYMx7wiatyPwr11JRh2mByYPnsSLz-Y284TBhZ4cVwNGcmKgd6hgVz5011A3" />
    </link>
    <fullUrl value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/epRksINO6oVal3KYeT6V0OZjcH1sgYMx7wiatyPwr11JRh2mByYPnsSLz-Y284TBhZ4cVwNGcmKgd6hgVz5011A3" />
    <resource>
        <Condition>
            <id value="epRksINO6oVal3KYeT6V0OZjcH1sgYMx7wiatyPwr11JRh2mByYPnsSLz-Y284TBhZ4cVwNGcmKgd6hgVz5011A3" />
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/condition-category" />
                    <code value="encounter-diagnosis" />
                    <display value="Encounter Diagnosis" />
                </coding>
                <text value="Encounter Diagnosis" />
            </category>
            <category>
                <coding>
                    <system value="http://open.epic.com/FHIR/StructureDefinition/condition-category" />
                    <code value="visit-diagnosis" />
                    <display value="Visit Diagnosis" />
                </coding>
                <text value="Visit Diagnosis" />
            </category>
            <code>
                <coding>
                    <system value="http://snomed.info/sct" />
                    <code value="235595009" />
                    <display value="Gastroesophageal reflux disease (disorder)" />
                </coding>
                <coding>
                    <system value="http://hl7.org/fhir/sid/icd-9-cm/diagnosis" />
                    <code value="530.81" />
                    <display value="GERD (gastroesophageal reflux disease)" />
                </coding>
                <coding>
                    <system value="urn:oid:2.16.840.1.113883.6.90" />
                    <code value="K21.9" />
                    <display value="GERD (gastroesophageal reflux disease)" />
                </coding>
                <text value="GERD (gastroesophageal reflux disease)" />
            </code>
            <subject>
                <reference value="Patient/eZ5-7rYdWqgv3jSgIvx.SPw3" />
                <display value="Ambulatory, Oliver" />
            </subject>
            <encounter>
                <reference value="Encounter/ekeSET-l9Zek5puNZoKfCUA3" />
            </encounter>
            <note>
                <text value="GERD, diagnosed by EGD. Symptoms well controlled with intermittent use of H2 blockers" />
            </note>
        </Condition>
    </resource>
    <search>
        <mode value="match" />
    </search>
</entry>
<entry>
    <link>
        <relation value="self" />
        <url value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/eBU5I8Jv5EOdsC9i64bVExGqhMWU.vaI9fgczxoJPNmxVKAsRFk5zK1WcdSMFzDWi1KMNJjmdhrmJV.R-l94ifA3" />
    </link>
    <fullUrl value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/eBU5I8Jv5EOdsC9i64bVExGqhMWU.vaI9fgczxoJPNmxVKAsRFk5zK1WcdSMFzDWi1KMNJjmdhrmJV.R-l94ifA3" />
    <resource>
        <Condition>
            <id value="eBU5I8Jv5EOdsC9i64bVExGqhMWU.vaI9fgczxoJPNmxVKAsRFk5zK1WcdSMFzDWi1KMNJjmdhrmJV.R-l94ifA3" />
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/condition-category" />
                    <code value="encounter-diagnosis" />
                    <display value="Encounter Diagnosis" />
                </coding>
                <text value="Encounter Diagnosis" />
            </category>
            <category>
                <coding>
                    <system value="http://open.epic.com/FHIR/StructureDefinition/condition-category" />
                    <code value="visit-diagnosis" />
                    <display value="Visit Diagnosis" />
                </coding>
                <text value="Visit Diagnosis" />
            </category>
            <code>
                <coding>
                    <system value="http://snomed.info/sct" />
                    <code value="59621000" />
                    <display value="Essential hypertension (disorder)" />
                </coding>
                <coding>
                    <system value="http://hl7.org/fhir/sid/icd-9-cm/diagnosis" />
                    <code value="401.9" />
                    <display value="Essential hypertension" />
                </coding>
                <coding>
                    <system value="urn:oid:2.16.840.1.113883.6.90" />
                    <code value="I10" />
                    <display value="Essential hypertension" />
                </coding>
                <text value="Essential hypertension" />
            </code>
            <subject>
                <reference value="Patient/eZ5-7rYdWqgv3jSgIvx.SPw3" />
                <display value="Ambulatory, Oliver" />
            </subject>
            <encounter>
                <reference value="Encounter/ePKrjA1p6AYv9tCNxh1EJjw3" />
            </encounter>
            <note>
                <text value="Diagnosed age 54. Initially treated with sodium restriction, diet, exercise. Diuretics started ~1988, taken sporadically since that time. Patient admits to poor compliance with med regimen. No history to suggest end organ damage or coronary artery disease. Cardiovascular risk factors include 20 pk yr hx of smoking and hypercholesterolemia." />
            </note>
        </Condition>
    </resource>
    <search>
        <mode value="match" />
    </search>
</entry>
<entry>
    <link>
        <relation value="self" />
        <url value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/eBU5I8Jv5EOdsC9i64bVExOGbq57Etsm0MY6JVTvQBESn2x91LzvtTN6okXlYT4bIIVJ2h8W1uSs1SIkl4TnAqA3" />
    </link>
    <fullUrl value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/eBU5I8Jv5EOdsC9i64bVExOGbq57Etsm0MY6JVTvQBESn2x91LzvtTN6okXlYT4bIIVJ2h8W1uSs1SIkl4TnAqA3" />
    <resource>
        <Condition>
            <id value="eBU5I8Jv5EOdsC9i64bVExOGbq57Etsm0MY6JVTvQBESn2x91LzvtTN6okXlYT4bIIVJ2h8W1uSs1SIkl4TnAqA3" />
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/condition-category" />
                    <code value="encounter-diagnosis" />
                    <display value="Encounter Diagnosis" />
                </coding>
                <text value="Encounter Diagnosis" />
            </category>
            <category>
                <coding>
                    <system value="http://open.epic.com/FHIR/StructureDefinition/condition-category" />
                    <code value="visit-diagnosis" />
                    <display value="Visit Diagnosis" />
                </coding>
                <text value="Visit Diagnosis" />
            </category>
            <code>
                <coding>
                    <system value="http://snomed.info/sct" />
                    <code value="235595009" />
                    <display value="Gastroesophageal reflux disease (disorder)" />
                </coding>
                <coding>
                    <system value="http://hl7.org/fhir/sid/icd-9-cm/diagnosis" />
                    <code value="530.81" />
                    <display value="GERD (gastroesophageal reflux disease)" />
                </coding>
                <coding>
                    <system value="urn:oid:2.16.840.1.113883.6.90" />
                    <code value="K21.9" />
                    <display value="GERD (gastroesophageal reflux disease)" />
                </coding>
                <text value="GERD (gastroesophageal reflux disease)" />
            </code>
            <subject>
                <reference value="Patient/eZ5-7rYdWqgv3jSgIvx.SPw3" />
                <display value="Ambulatory, Oliver" />
            </subject>
            <encounter>
                <reference value="Encounter/ePKrjA1p6AYv9tCNxh1EJjw3" />
            </encounter>
            <note>
                <text value="GERD, diagnosed by EGD. Symptoms well controlled with intermittent use of H2 blockers" />
            </note>
        </Condition>
    </resource>
    <search>
        <mode value="match" />
    </search>
</entry>
<entry>
    <link>
        <relation value="self" />
        <url value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/eBU5I8Jv5EOdsC9i64bVExBtgYfsM38dHCNmIi34NN3sQpTpz4gSTi.nmjPj3QY14RIEbD-8jNE8X-a0rEWohjg3" />
    </link>
    <fullUrl value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/eBU5I8Jv5EOdsC9i64bVExBtgYfsM38dHCNmIi34NN3sQpTpz4gSTi.nmjPj3QY14RIEbD-8jNE8X-a0rEWohjg3" />
    <resource>
        <Condition>
            <id value="eBU5I8Jv5EOdsC9i64bVExBtgYfsM38dHCNmIi34NN3sQpTpz4gSTi.nmjPj3QY14RIEbD-8jNE8X-a0rEWohjg3" />
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/condition-category" />
                    <code value="encounter-diagnosis" />
                    <display value="Encounter Diagnosis" />
                </coding>
                <text value="Encounter Diagnosis" />
            </category>
            <category>
                <coding>
                    <system value="http://open.epic.com/FHIR/StructureDefinition/condition-category" />
                    <code value="visit-diagnosis" />
                    <display value="Visit Diagnosis" />
                </coding>
                <text value="Visit Diagnosis" />
            </category>
            <code>
                <coding>
                    <system value="http://snomed.info/sct" />
                    <code value="233604007" />
                    <display value="Pneumonia (disorder)" />
                </coding>
                <coding>
                    <system value="http://hl7.org/fhir/sid/icd-9-cm/diagnosis" />
                    <code value="486" />
                    <display value="Pneumonia" />
                </coding>
                <coding>
                    <system value="urn:oid:2.16.840.1.113883.6.90" />
                    <code value="J18.9" />
                    <display value="Pneumonia" />
                </coding>
                <text value="Pneumonia" />
            </code>
            <subject>
                <reference value="Patient/eZ5-7rYdWqgv3jSgIvx.SPw3" />
                <display value="Ambulatory, Oliver" />
            </subject>
            <encounter>
                <reference value="Encounter/ePKrjA1p6AYv9tCNxh1EJjw3" />
            </encounter>
        </Condition>
    </resource>
    <search>
        <mode value="match" />
    </search>
</entry>
<entry>
    <link>
        <relation value="self" />
        <url value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/eBU5I8Jv5EOdsC9i64bVExM9kH0Z1VOLdSOYeFFEWd610j7IkOOlXTWnnCYdc1Pu9cYCZX8um-icn6TA.3Mlv1w3" />
    </link>
    <fullUrl value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/eBU5I8Jv5EOdsC9i64bVExM9kH0Z1VOLdSOYeFFEWd610j7IkOOlXTWnnCYdc1Pu9cYCZX8um-icn6TA.3Mlv1w3" />
    <resource>
        <Condition>
            <id value="eBU5I8Jv5EOdsC9i64bVExM9kH0Z1VOLdSOYeFFEWd610j7IkOOlXTWnnCYdc1Pu9cYCZX8um-icn6TA.3Mlv1w3" />
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/condition-category" />
                    <code value="encounter-diagnosis" />
                    <display value="Encounter Diagnosis" />
                </coding>
                <text value="Encounter Diagnosis" />
            </category>
            <category>
                <coding>
                    <system value="http://open.epic.com/FHIR/StructureDefinition/condition-category" />
                    <code value="visit-diagnosis" />
                    <display value="Visit Diagnosis" />
                </coding>
                <text value="Visit Diagnosis" />
            </category>
            <code>
                <coding>
                    <system value="http://snomed.info/sct" />
                    <code value="110483000" />
                    <display value="Tobacco user (finding)" />
                </coding>
                <coding>
                    <system value="http://hl7.org/fhir/sid/icd-9-cm/diagnosis" />
                    <code value="305.1" />
                    <display value="Tobacco use disorder" />
                </coding>
                <coding>
                    <system value="urn:oid:2.16.840.1.113883.6.90" />
                    <code value="F17.200" />
                    <display value="Tobacco use disorder" />
                </coding>
                <text value="Tobacco use disorder" />
            </code>
            <subject>
                <reference value="Patient/eZ5-7rYdWqgv3jSgIvx.SPw3" />
                <display value="Ambulatory, Oliver" />
            </subject>
            <encounter>
                <reference value="Encounter/ePKrjA1p6AYv9tCNxh1EJjw3" />
            </encounter>
        </Condition>
    </resource>
    <search>
        <mode value="match" />
    </search>
</entry>
<entry>
    <link>
        <relation value="self" />
        <url value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/eBU5I8Jv5EOdsC9i64bVExNJoiEjVr0kZQM0XwS3ZMz2O3i9rTRze1-CajtD18ITjj0NHvKOYLM9b8RHmz8sT1w3" />
    </link>
    <fullUrl value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/eBU5I8Jv5EOdsC9i64bVExNJoiEjVr0kZQM0XwS3ZMz2O3i9rTRze1-CajtD18ITjj0NHvKOYLM9b8RHmz8sT1w3" />
    <resource>
        <Condition>
            <id value="eBU5I8Jv5EOdsC9i64bVExNJoiEjVr0kZQM0XwS3ZMz2O3i9rTRze1-CajtD18ITjj0NHvKOYLM9b8RHmz8sT1w3" />
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/condition-category" />
                    <code value="encounter-diagnosis" />
                    <display value="Encounter Diagnosis" />
                </coding>
                <text value="Encounter Diagnosis" />
            </category>
            <category>
                <coding>
                    <system value="http://open.epic.com/FHIR/StructureDefinition/condition-category" />
                    <code value="visit-diagnosis" />
                    <display value="Visit Diagnosis" />
                </coding>
                <text value="Visit Diagnosis" />
            </category>
            <code>
                <coding>
                    <system value="http://snomed.info/sct" />
                    <code value="13644009" />
                    <display value="Hypercholesterolemia (disorder)" />
                </coding>
                <coding>
                    <system value="http://hl7.org/fhir/sid/icd-9-cm/diagnosis" />
                    <code value="272.0" />
                    <display value="Hypercholesteremia" />
                </coding>
                <coding>
                    <system value="urn:oid:2.16.840.1.113883.6.90" />
                    <code value="E78.00" />
                    <display value="Hypercholesteremia" />
                </coding>
                <text value="Hypercholesteremia" />
            </code>
            <subject>
                <reference value="Patient/eZ5-7rYdWqgv3jSgIvx.SPw3" />
                <display value="Ambulatory, Oliver" />
            </subject>
            <encounter>
                <reference value="Encounter/ePKrjA1p6AYv9tCNxh1EJjw3" />
            </encounter>
        </Condition>
    </resource>
    <search>
        <mode value="match" />
    </search>
</entry>
<entry>
    <link>
        <relation value="self" />
        <url value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/eBU5I8Jv5EOdsC9i64bVExOGbq57Etsm0MY6JVTvQBES66yy0qt1YPrPlzBOpM0cO5YKfwgJcw8ZVm4u7pO3fUw3" />
    </link>
    <fullUrl value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/eBU5I8Jv5EOdsC9i64bVExOGbq57Etsm0MY6JVTvQBES66yy0qt1YPrPlzBOpM0cO5YKfwgJcw8ZVm4u7pO3fUw3" />
    <resource>
        <Condition>
            <id value="eBU5I8Jv5EOdsC9i64bVExOGbq57Etsm0MY6JVTvQBES66yy0qt1YPrPlzBOpM0cO5YKfwgJcw8ZVm4u7pO3fUw3" />
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/condition-category" />
                    <code value="encounter-diagnosis" />
                    <display value="Encounter Diagnosis" />
                </coding>
                <text value="Encounter Diagnosis" />
            </category>
            <category>
                <coding>
                    <system value="http://open.epic.com/FHIR/StructureDefinition/condition-category" />
                    <code value="visit-diagnosis" />
                    <display value="Visit Diagnosis" />
                </coding>
                <text value="Visit Diagnosis" />
            </category>
            <code>
                <coding>
                    <system value="http://snomed.info/sct" />
                    <code value="235595009" />
                    <display value="Gastroesophageal reflux disease (disorder)" />
                </coding>
                <coding>
                    <system value="http://hl7.org/fhir/sid/icd-9-cm/diagnosis" />
                    <code value="530.81" />
                    <display value="GERD (gastroesophageal reflux disease)" />
                </coding>
                <coding>
                    <system value="urn:oid:2.16.840.1.113883.6.90" />
                    <code value="K21.9" />
                    <display value="GERD (gastroesophageal reflux disease)" />
                </coding>
                <text value="GERD (gastroesophageal reflux disease)" />
            </code>
            <subject>
                <reference value="Patient/eZ5-7rYdWqgv3jSgIvx.SPw3" />
                <display value="Ambulatory, Oliver" />
            </subject>
            <encounter>
                <reference value="Encounter/ePKrjA1p6AYv9tCNxh1EJjw3" />
            </encounter>
            <note>
                <text value="GERD, diagnosed by EGD. Symptoms well controlled with intermittent use of H2 blockers" />
            </note>
        </Condition>
    </resource>
    <search>
        <mode value="match" />
    </search>
</entry>
<entry>
    <link>
        <relation value="self" />
        <url value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/eBU5I8Jv5EOdsC9i64bVExGqhMWU.vaI9fgczxoJPNmzMij75Pge2Rqqfotod3gZl58jeWVfcd6IEWjhSsLvZHw3" />
    </link>
    <fullUrl value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/eBU5I8Jv5EOdsC9i64bVExGqhMWU.vaI9fgczxoJPNmzMij75Pge2Rqqfotod3gZl58jeWVfcd6IEWjhSsLvZHw3" />
    <resource>
        <Condition>
            <id value="eBU5I8Jv5EOdsC9i64bVExGqhMWU.vaI9fgczxoJPNmzMij75Pge2Rqqfotod3gZl58jeWVfcd6IEWjhSsLvZHw3" />
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/condition-category" />
                    <code value="encounter-diagnosis" />
                    <display value="Encounter Diagnosis" />
                </coding>
                <text value="Encounter Diagnosis" />
            </category>
            <category>
                <coding>
                    <system value="http://open.epic.com/FHIR/StructureDefinition/condition-category" />
                    <code value="visit-diagnosis" />
                    <display value="Visit Diagnosis" />
                </coding>
                <text value="Visit Diagnosis" />
            </category>
            <code>
                <coding>
                    <system value="http://snomed.info/sct" />
                    <code value="59621000" />
                    <display value="Essential hypertension (disorder)" />
                </coding>
                <coding>
                    <system value="http://hl7.org/fhir/sid/icd-9-cm/diagnosis" />
                    <code value="401.9" />
                    <display value="Essential hypertension" />
                </coding>
                <coding>
                    <system value="urn:oid:2.16.840.1.113883.6.90" />
                    <code value="I10" />
                    <display value="Essential hypertension" />
                </coding>
                <text value="Essential hypertension" />
            </code>
            <subject>
                <reference value="Patient/eZ5-7rYdWqgv3jSgIvx.SPw3" />
                <display value="Ambulatory, Oliver" />
            </subject>
            <encounter>
                <reference value="Encounter/ePKrjA1p6AYv9tCNxh1EJjw3" />
            </encounter>
            <note>
                <text value="Diagnosed age 54. Initially treated with sodium restriction, diet, exercise. Diuretics started ~1988, taken sporadically since that time. Patient admits to poor compliance with med regimen. No history to suggest end organ damage or coronary artery disease. Cardiovascular risk factors include 20 pk yr hx of smoking and hypercholesterolemia." />
            </note>
        </Condition>
    </resource>
    <search>
        <mode value="match" />
    </search>
</entry>
<entry>
    <link>
        <relation value="self" />
        <url value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/eBU5I8Jv5EOdsC9i64bVExPly.vUo0bHSuASTuiNOP8Kl-R4.L0emnlByRW7apuakwqfvdEcq8tjh4Lb-n1DQPg3" />
    </link>
    <fullUrl value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/eBU5I8Jv5EOdsC9i64bVExPly.vUo0bHSuASTuiNOP8Kl-R4.L0emnlByRW7apuakwqfvdEcq8tjh4Lb-n1DQPg3" />
    <resource>
        <Condition>
            <id value="eBU5I8Jv5EOdsC9i64bVExPly.vUo0bHSuASTuiNOP8Kl-R4.L0emnlByRW7apuakwqfvdEcq8tjh4Lb-n1DQPg3" />
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/condition-category" />
                    <code value="encounter-diagnosis" />
                    <display value="Encounter Diagnosis" />
                </coding>
                <text value="Encounter Diagnosis" />
            </category>
            <category>
                <coding>
                    <system value="http://open.epic.com/FHIR/StructureDefinition/condition-category" />
                    <code value="visit-diagnosis" />
                    <display value="Visit Diagnosis" />
                </coding>
                <text value="Visit Diagnosis" />
            </category>
            <code>
                <coding>
                    <system value="http://snomed.info/sct" />
                    <code value="40930008" />
                    <display value="Hypothyroidism (disorder)" />
                </coding>
                <coding>
                    <system value="http://hl7.org/fhir/sid/icd-9-cm/diagnosis" />
                    <code value="244.9" />
                    <display value="Unspecified hypothyroidism" />
                </coding>
                <coding>
                    <system value="urn:oid:2.16.840.1.113883.6.90" />
                    <code value="E03.9" />
                    <display value="Unspecified hypothyroidism" />
                </coding>
                <text value="Unspecified hypothyroidism" />
            </code>
            <subject>
                <reference value="Patient/eZ5-7rYdWqgv3jSgIvx.SPw3" />
                <display value="Ambulatory, Oliver" />
            </subject>
            <encounter>
                <reference value="Encounter/ePKrjA1p6AYv9tCNxh1EJjw3" />
            </encounter>
        </Condition>
    </resource>
    <search>
        <mode value="match" />
    </search>
</entry>
<entry>
    <link>
        <relation value="self" />
        <url value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/eBU5I8Jv5EOdsC9i64bVExFx9bCgZqB4c0vAckyrSk-XJ1FneCgEbRGxFxAFLiV19xYYHvrEVbgN1E5TIR07vpg3" />
    </link>
    <fullUrl value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/eBU5I8Jv5EOdsC9i64bVExFx9bCgZqB4c0vAckyrSk-XJ1FneCgEbRGxFxAFLiV19xYYHvrEVbgN1E5TIR07vpg3" />
    <resource>
        <Condition>
            <id value="eBU5I8Jv5EOdsC9i64bVExFx9bCgZqB4c0vAckyrSk-XJ1FneCgEbRGxFxAFLiV19xYYHvrEVbgN1E5TIR07vpg3" />
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/condition-category" />
                    <code value="encounter-diagnosis" />
                    <display value="Encounter Diagnosis" />
                </coding>
                <text value="Encounter Diagnosis" />
            </category>
            <category>
                <coding>
                    <system value="http://open.epic.com/FHIR/StructureDefinition/condition-category" />
                    <code value="visit-diagnosis" />
                    <display value="Visit Diagnosis" />
                </coding>
                <text value="Visit Diagnosis" />
            </category>
            <code>
                <coding>
                    <system value="http://snomed.info/sct" />
                    <code value="312342009" />
                    <display value="Infective pneumonia (disorder)" />
                </coding>
                <coding>
                    <system value="http://hl7.org/fhir/sid/icd-9-cm/diagnosis" />
                    <code value="486" />
                    <display value="Pneumonia, organism unspecified" />
                </coding>
                <coding>
                    <system value="urn:oid:2.16.840.1.113883.6.90" />
                    <code value="J18.9" />
                    <display value="Pneumonia, organism unspecified" />
                </coding>
                <text value="Pneumonia, organism unspecified" />
            </code>
            <subject>
                <reference value="Patient/eZ5-7rYdWqgv3jSgIvx.SPw3" />
                <display value="Ambulatory, Oliver" />
            </subject>
            <encounter>
                <reference value="Encounter/eNe1jQk.aQ2zyZwPEjBTURw3" />
            </encounter>
        </Condition>
    </resource>
    <search>
        <mode value="match" />
    </search>
</entry>
<entry>
    <link>
        <relation value="self" />
        <url value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/eBU5I8Jv5EOdsC9i64bVExKKH1z5WbkmIdQoOxccoW7wGm-KHP2H0Lh3cInb1ZsfLnzp6LIFokjiDgfWcsAWlVA3" />
    </link>
    <fullUrl value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/eBU5I8Jv5EOdsC9i64bVExKKH1z5WbkmIdQoOxccoW7wGm-KHP2H0Lh3cInb1ZsfLnzp6LIFokjiDgfWcsAWlVA3" />
    <resource>
        <Condition>
            <id value="eBU5I8Jv5EOdsC9i64bVExKKH1z5WbkmIdQoOxccoW7wGm-KHP2H0Lh3cInb1ZsfLnzp6LIFokjiDgfWcsAWlVA3" />
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/condition-category" />
                    <code value="encounter-diagnosis" />
                    <display value="Encounter Diagnosis" />
                </coding>
                <text value="Encounter Diagnosis" />
            </category>
            <category>
                <coding>
                    <system value="http://open.epic.com/FHIR/StructureDefinition/condition-category" />
                    <code value="visit-diagnosis" />
                    <display value="Visit Diagnosis" />
                </coding>
                <text value="Visit Diagnosis" />
            </category>
            <code>
                <coding>
                    <system value="http://snomed.info/sct" />
                    <code value="235595009" />
                    <display value="Gastroesophageal reflux disease (disorder)" />
                </coding>
                <coding>
                    <system value="http://hl7.org/fhir/sid/icd-9-cm/diagnosis" />
                    <code value="530.81" />
                    <display value="GERD (gastroesophageal reflux disease)" />
                </coding>
                <coding>
                    <system value="urn:oid:2.16.840.1.113883.6.90" />
                    <code value="K21.9" />
                    <display value="GERD (gastroesophageal reflux disease)" />
                </coding>
                <text value="GERD (gastroesophageal reflux disease)" />
            </code>
            <subject>
                <reference value="Patient/eZ5-7rYdWqgv3jSgIvx.SPw3" />
                <display value="Ambulatory, Oliver" />
            </subject>
            <encounter>
                <reference value="Encounter/eNe1jQk.aQ2zyZwPEjBTURw3" />
            </encounter>
            <note>
                <text value="GERD, diagnosed by EGD. Symptoms well controlled with intermittent use of H2 blockers" />
            </note>
        </Condition>
    </resource>
    <search>
        <mode value="match" />
    </search>
</entry>
<entry>
    <link>
        <relation value="self" />
        <url value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/elH-95LvIFKacj9S4zrPxLGv6p9M-0YctqKihgMXR7pN.mpnYcm0AF2tlhc5H20SLkEFpW2fc9Mzu8N2GBEoqNA3" />
    </link>
    <fullUrl value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/elH-95LvIFKacj9S4zrPxLGv6p9M-0YctqKihgMXR7pN.mpnYcm0AF2tlhc5H20SLkEFpW2fc9Mzu8N2GBEoqNA3" />
    <resource>
        <Condition>
            <id value="elH-95LvIFKacj9S4zrPxLGv6p9M-0YctqKihgMXR7pN.mpnYcm0AF2tlhc5H20SLkEFpW2fc9Mzu8N2GBEoqNA3" />
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/condition-category" />
                    <code value="encounter-diagnosis" />
                    <display value="Encounter Diagnosis" />
                </coding>
                <text value="Encounter Diagnosis" />
            </category>
            <category>
                <coding>
                    <system value="http://open.epic.com/FHIR/StructureDefinition/condition-category" />
                    <code value="visit-diagnosis" />
                    <display value="Visit Diagnosis" />
                </coding>
                <text value="Visit Diagnosis" />
            </category>
            <code>
                <coding>
                    <system value="http://snomed.info/sct" />
                    <code value="10509002" />
                    <display value="Acute bronchitis (disorder)" />
                </coding>
                <coding>
                    <system value="http://hl7.org/fhir/sid/icd-9-cm/diagnosis" />
                    <code value="466.0" />
                    <display value="Acute bronchitis" />
                </coding>
                <coding>
                    <system value="urn:oid:2.16.840.1.113883.6.90" />
                    <code value="J20.9" />
                    <display value="Acute bronchitis" />
                </coding>
                <text value="Acute bronchitis" />
            </code>
            <subject>
                <reference value="Patient/eZ5-7rYdWqgv3jSgIvx.SPw3" />
                <display value="Ambulatory, Oliver" />
            </subject>
            <encounter>
                <reference value="Encounter/e0VBlSREDUme5QWqIol-rzQ3" />
            </encounter>
        </Condition>
    </resource>
    <search>
        <mode value="match" />
    </search>
</entry>
<entry>
    <link>
        <relation value="self" />
        <url value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/egbXzndOTe5kKcGWjhnOZpWLrhY25Cd-qUNtAHtERehKfAwkDnYfQp0SEoMDwJfhWPEe17GFjraZ.jN6dSr14.w3" />
    </link>
    <fullUrl value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/egbXzndOTe5kKcGWjhnOZpWLrhY25Cd-qUNtAHtERehKfAwkDnYfQp0SEoMDwJfhWPEe17GFjraZ.jN6dSr14.w3" />
    <resource>
        <Condition>
            <id value="egbXzndOTe5kKcGWjhnOZpWLrhY25Cd-qUNtAHtERehKfAwkDnYfQp0SEoMDwJfhWPEe17GFjraZ.jN6dSr14.w3" />
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/condition-category" />
                    <code value="encounter-diagnosis" />
                    <display value="Encounter Diagnosis" />
                </coding>
                <text value="Encounter Diagnosis" />
            </category>
            <category>
                <coding>
                    <system value="http://open.epic.com/FHIR/StructureDefinition/condition-category" />
                    <code value="visit-diagnosis" />
                    <display value="Visit Diagnosis" />
                </coding>
                <text value="Visit Diagnosis" />
            </category>
            <code>
                <coding>
                    <system value="http://snomed.info/sct" />
                    <code value="235595009" />
                    <display value="Gastroesophageal reflux disease (disorder)" />
                </coding>
                <coding>
                    <system value="http://hl7.org/fhir/sid/icd-9-cm/diagnosis" />
                    <code value="530.81" />
                    <display value="GERD (gastroesophageal reflux disease)" />
                </coding>
                <coding>
                    <system value="urn:oid:2.16.840.1.113883.6.90" />
                    <code value="K21.9" />
                    <display value="GERD (gastroesophageal reflux disease)" />
                </coding>
                <text value="GERD (gastroesophageal reflux disease)" />
            </code>
            <subject>
                <reference value="Patient/eZ5-7rYdWqgv3jSgIvx.SPw3" />
                <display value="Ambulatory, Oliver" />
            </subject>
            <encounter>
                <reference value="Encounter/es6Jfy--QxPFWvXbevtFhEA3" />
            </encounter>
            <note>
                <text value="GERD, diagnosed by EGD. Symptoms well controlled with intermittent use of H2 blockers" />
            </note>
        </Condition>
    </resource>
    <search>
        <mode value="match" />
    </search>
</entry>
<entry>
    <link>
        <relation value="self" />
        <url value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/egbXzndOTe5kKcGWjhnOZpQCyDn48nUJ9bm9ilZEetrHekvnv6WNKdDwIO.dM.Wn-d5IO3MFnItkNfr7-MwgdRw3" />
    </link>
    <fullUrl value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/egbXzndOTe5kKcGWjhnOZpQCyDn48nUJ9bm9ilZEetrHekvnv6WNKdDwIO.dM.Wn-d5IO3MFnItkNfr7-MwgdRw3" />
    <resource>
        <Condition>
            <id value="egbXzndOTe5kKcGWjhnOZpQCyDn48nUJ9bm9ilZEetrHekvnv6WNKdDwIO.dM.Wn-d5IO3MFnItkNfr7-MwgdRw3" />
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/condition-category" />
                    <code value="encounter-diagnosis" />
                    <display value="Encounter Diagnosis" />
                </coding>
                <text value="Encounter Diagnosis" />
            </category>
            <category>
                <coding>
                    <system value="http://open.epic.com/FHIR/StructureDefinition/condition-category" />
                    <code value="visit-diagnosis" />
                    <display value="Visit Diagnosis" />
                </coding>
                <text value="Visit Diagnosis" />
            </category>
            <code>
                <coding>
                    <system value="http://snomed.info/sct" />
                    <code value="40930008" />
                    <display value="Hypothyroidism (disorder)" />
                </coding>
                <coding>
                    <system value="http://hl7.org/fhir/sid/icd-9-cm/diagnosis" />
                    <code value="244.9" />
                    <display value="Unspecified hypothyroidism" />
                </coding>
                <coding>
                    <system value="urn:oid:2.16.840.1.113883.6.90" />
                    <code value="E03.9" />
                    <display value="Unspecified hypothyroidism" />
                </coding>
                <text value="Unspecified hypothyroidism" />
            </code>
            <subject>
                <reference value="Patient/eZ5-7rYdWqgv3jSgIvx.SPw3" />
                <display value="Ambulatory, Oliver" />
            </subject>
            <encounter>
                <reference value="Encounter/es6Jfy--QxPFWvXbevtFhEA3" />
            </encounter>
        </Condition>
    </resource>
    <search>
        <mode value="match" />
    </search>
</entry>
<entry>
    <link>
        <relation value="self" />
        <url value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/egbXzndOTe5kKcGWjhnOZpQWW3coz2-pUUkWPSMjuMaQjX9jYpLcRH9PiJah5f34o8.0U6BwhsCQIiMgVzvNIsw3" />
    </link>
    <fullUrl value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/egbXzndOTe5kKcGWjhnOZpQWW3coz2-pUUkWPSMjuMaQjX9jYpLcRH9PiJah5f34o8.0U6BwhsCQIiMgVzvNIsw3" />
    <resource>
        <Condition>
            <id value="egbXzndOTe5kKcGWjhnOZpQWW3coz2-pUUkWPSMjuMaQjX9jYpLcRH9PiJah5f34o8.0U6BwhsCQIiMgVzvNIsw3" />
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/condition-category" />
                    <code value="encounter-diagnosis" />
                    <display value="Encounter Diagnosis" />
                </coding>
                <text value="Encounter Diagnosis" />
            </category>
            <category>
                <coding>
                    <system value="http://open.epic.com/FHIR/StructureDefinition/condition-category" />
                    <code value="visit-diagnosis" />
                    <display value="Visit Diagnosis" />
                </coding>
                <text value="Visit Diagnosis" />
            </category>
            <code>
                <coding>
                    <system value="http://snomed.info/sct" />
                    <code value="59621000" />
                    <display value="Essential hypertension (disorder)" />
                </coding>
                <coding>
                    <system value="http://hl7.org/fhir/sid/icd-9-cm/diagnosis" />
                    <code value="401.9" />
                    <display value="Essential hypertension" />
                </coding>
                <coding>
                    <system value="urn:oid:2.16.840.1.113883.6.90" />
                    <code value="I10" />
                    <display value="Essential hypertension" />
                </coding>
                <text value="Essential hypertension" />
            </code>
            <subject>
                <reference value="Patient/eZ5-7rYdWqgv3jSgIvx.SPw3" />
                <display value="Ambulatory, Oliver" />
            </subject>
            <encounter>
                <reference value="Encounter/es6Jfy--QxPFWvXbevtFhEA3" />
            </encounter>
            <note>
                <text value="Diagnosed age 54. Initially treated with sodium restriction, diet, exercise. Diuretics started ~1988, taken sporadically since that time. Patient admits to poor compliance with med regimen. No history to suggest end organ damage or coronary artery disease. Cardiovascular risk factors include 20 pk yr hx of smoking and hypercholesterolemia." />
            </note>
        </Condition>
    </resource>
    <search>
        <mode value="match" />
    </search>
</entry>
<entry>
    <link>
        <relation value="self" />
        <url value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/egbXzndOTe5kKcGWjhnOZpe6PhlBj6emgJU95vutCpidhe3bL6I3eIUIaCmzCzVC81Idefs-TbZdjWUq5gbY.mQ3" />
    </link>
    <fullUrl value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/egbXzndOTe5kKcGWjhnOZpe6PhlBj6emgJU95vutCpidhe3bL6I3eIUIaCmzCzVC81Idefs-TbZdjWUq5gbY.mQ3" />
    <resource>
        <Condition>
            <id value="egbXzndOTe5kKcGWjhnOZpe6PhlBj6emgJU95vutCpidhe3bL6I3eIUIaCmzCzVC81Idefs-TbZdjWUq5gbY.mQ3" />
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/condition-category" />
                    <code value="encounter-diagnosis" />
                    <display value="Encounter Diagnosis" />
                </coding>
                <text value="Encounter Diagnosis" />
            </category>
            <category>
                <coding>
                    <system value="http://open.epic.com/FHIR/StructureDefinition/condition-category" />
                    <code value="visit-diagnosis" />
                    <display value="Visit Diagnosis" />
                </coding>
                <text value="Visit Diagnosis" />
            </category>
            <code>
                <coding>
                    <system value="http://snomed.info/sct" />
                    <code value="59621000" />
                    <display value="Essential hypertension (disorder)" />
                </coding>
                <coding>
                    <system value="http://hl7.org/fhir/sid/icd-9-cm/diagnosis" />
                    <code value="401.9" />
                    <display value="Essential hypertension" />
                </coding>
                <coding>
                    <system value="urn:oid:2.16.840.1.113883.6.90" />
                    <code value="I10" />
                    <display value="Essential hypertension" />
                </coding>
                <text value="Essential hypertension" />
            </code>
            <subject>
                <reference value="Patient/eZ5-7rYdWqgv3jSgIvx.SPw3" />
                <display value="Ambulatory, Oliver" />
            </subject>
            <encounter>
                <reference value="Encounter/e44ZnB2sYFixA0o3AgqsRJw3" />
            </encounter>
            <note>
                <text value="Diagnosed age 54. Initially treated with sodium restriction, diet, exercise. Diuretics started ~1988, taken sporadically since that time. Patient admits to poor compliance with med regimen. No history to suggest end organ damage or coronary artery disease. Cardiovascular risk factors include 20 pk yr hx of smoking and hypercholesterolemia." />
            </note>
        </Condition>
    </resource>
    <search>
        <mode value="match" />
    </search>
</entry>
<entry>
    <link>
        <relation value="self" />
        <url value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/egbXzndOTe5kKcGWjhnOZpXi4K0WlT24abnxh1YsvHTjcGMuBwJRKYo6BsMcySaaM766NCA.myk6hCU9kZERYQg3" />
    </link>
    <fullUrl value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/egbXzndOTe5kKcGWjhnOZpXi4K0WlT24abnxh1YsvHTjcGMuBwJRKYo6BsMcySaaM766NCA.myk6hCU9kZERYQg3" />
    <resource>
        <Condition>
            <id value="egbXzndOTe5kKcGWjhnOZpXi4K0WlT24abnxh1YsvHTjcGMuBwJRKYo6BsMcySaaM766NCA.myk6hCU9kZERYQg3" />
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/condition-category" />
                    <code value="encounter-diagnosis" />
                    <display value="Encounter Diagnosis" />
                </coding>
                <text value="Encounter Diagnosis" />
            </category>
            <category>
                <coding>
                    <system value="http://open.epic.com/FHIR/StructureDefinition/condition-category" />
                    <code value="visit-diagnosis" />
                    <display value="Visit Diagnosis" />
                </coding>
                <text value="Visit Diagnosis" />
            </category>
            <code>
                <coding>
                    <system value="http://snomed.info/sct" />
                    <code value="235595009" />
                    <display value="Gastroesophageal reflux disease (disorder)" />
                </coding>
                <coding>
                    <system value="http://hl7.org/fhir/sid/icd-9-cm/diagnosis" />
                    <code value="530.81" />
                    <display value="GERD (gastroesophageal reflux disease)" />
                </coding>
                <coding>
                    <system value="urn:oid:2.16.840.1.113883.6.90" />
                    <code value="K21.9" />
                    <display value="GERD (gastroesophageal reflux disease)" />
                </coding>
                <text value="GERD (gastroesophageal reflux disease)" />
            </code>
            <subject>
                <reference value="Patient/eZ5-7rYdWqgv3jSgIvx.SPw3" />
                <display value="Ambulatory, Oliver" />
            </subject>
            <encounter>
                <reference value="Encounter/e44ZnB2sYFixA0o3AgqsRJw3" />
            </encounter>
            <note>
                <text value="GERD, diagnosed by EGD. Symptoms well controlled with intermittent use of H2 blockers" />
            </note>
        </Condition>
    </resource>
    <search>
        <mode value="match" />
    </search>
</entry>
<entry>
    <link>
        <relation value="self" />
        <url value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/egbXzndOTe5kKcGWjhnOZpb6S7xFAqwnepRtoHl82a.XxnPKGbZCMZjIwH90fkt81E8LMmeLEbNcL417Fbz-2Tw3" />
    </link>
    <fullUrl value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/egbXzndOTe5kKcGWjhnOZpb6S7xFAqwnepRtoHl82a.XxnPKGbZCMZjIwH90fkt81E8LMmeLEbNcL417Fbz-2Tw3" />
    <resource>
        <Condition>
            <id value="egbXzndOTe5kKcGWjhnOZpb6S7xFAqwnepRtoHl82a.XxnPKGbZCMZjIwH90fkt81E8LMmeLEbNcL417Fbz-2Tw3" />
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/condition-category" />
                    <code value="encounter-diagnosis" />
                    <display value="Encounter Diagnosis" />
                </coding>
                <text value="Encounter Diagnosis" />
            </category>
            <category>
                <coding>
                    <system value="http://open.epic.com/FHIR/StructureDefinition/condition-category" />
                    <code value="visit-diagnosis" />
                    <display value="Visit Diagnosis" />
                </coding>
                <text value="Visit Diagnosis" />
            </category>
            <code>
                <coding>
                    <system value="http://snomed.info/sct" />
                    <code value="40930008" />
                    <display value="Hypothyroidism (disorder)" />
                </coding>
                <coding>
                    <system value="http://hl7.org/fhir/sid/icd-9-cm/diagnosis" />
                    <code value="244.9" />
                    <display value="Unspecified hypothyroidism" />
                </coding>
                <coding>
                    <system value="urn:oid:2.16.840.1.113883.6.90" />
                    <code value="E03.9" />
                    <display value="Unspecified hypothyroidism" />
                </coding>
                <text value="Unspecified hypothyroidism" />
            </code>
            <subject>
                <reference value="Patient/eZ5-7rYdWqgv3jSgIvx.SPw3" />
                <display value="Ambulatory, Oliver" />
            </subject>
            <encounter>
                <reference value="Encounter/e44ZnB2sYFixA0o3AgqsRJw3" />
            </encounter>
        </Condition>
    </resource>
    <search>
        <mode value="match" />
    </search>
</entry>
<entry>
    <link>
        <relation value="self" />
        <url value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/elGpDm00U8BcCeBLMu6yI9K5VFpZxla6VyfVsDT1L5S7pR4sDu2PVI1BEhYlvDUnvFv4BqzAaN47YFIylhQRZeg3" />
    </link>
    <fullUrl value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/elGpDm00U8BcCeBLMu6yI9K5VFpZxla6VyfVsDT1L5S7pR4sDu2PVI1BEhYlvDUnvFv4BqzAaN47YFIylhQRZeg3" />
    <resource>
        <Condition>
            <id value="elGpDm00U8BcCeBLMu6yI9K5VFpZxla6VyfVsDT1L5S7pR4sDu2PVI1BEhYlvDUnvFv4BqzAaN47YFIylhQRZeg3" />
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/condition-category" />
                    <code value="encounter-diagnosis" />
                    <display value="Encounter Diagnosis" />
                </coding>
                <text value="Encounter Diagnosis" />
            </category>
            <category>
                <coding>
                    <system value="http://open.epic.com/FHIR/StructureDefinition/condition-category" />
                    <code value="visit-diagnosis" />
                    <display value="Visit Diagnosis" />
                </coding>
                <text value="Visit Diagnosis" />
            </category>
            <code>
                <coding>
                    <system value="http://snomed.info/sct" />
                    <code value="40930008" />
                    <display value="Hypothyroidism (disorder)" />
                </coding>
                <coding>
                    <system value="http://hl7.org/fhir/sid/icd-9-cm/diagnosis" />
                    <code value="244.9" />
                    <display value="Unspecified hypothyroidism" />
                </coding>
                <coding>
                    <system value="urn:oid:2.16.840.1.113883.6.90" />
                    <code value="E03.9" />
                    <display value="Unspecified hypothyroidism" />
                </coding>
                <text value="Unspecified hypothyroidism" />
            </code>
            <subject>
                <reference value="Patient/eZ5-7rYdWqgv3jSgIvx.SPw3" />
                <display value="Ambulatory, Oliver" />
            </subject>
            <encounter>
                <reference value="Encounter/e-ilXavMa00uYN178z9uEaQ3" />
            </encounter>
        </Condition>
    </resource>
    <search>
        <mode value="match" />
    </search>
</entry>
<entry>
    <link>
        <relation value="self" />
        <url value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/elGpDm00U8BcCeBLMu6yI9In.7Zvf8m9NDebKwxyiw9BPh8Ll3YqGaM.4Lk58PFdcUa1lvJMTq5ieG43MmaE4gQ3" />
    </link>
    <fullUrl value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/elGpDm00U8BcCeBLMu6yI9In.7Zvf8m9NDebKwxyiw9BPh8Ll3YqGaM.4Lk58PFdcUa1lvJMTq5ieG43MmaE4gQ3" />
    <resource>
        <Condition>
            <id value="elGpDm00U8BcCeBLMu6yI9In.7Zvf8m9NDebKwxyiw9BPh8Ll3YqGaM.4Lk58PFdcUa1lvJMTq5ieG43MmaE4gQ3" />
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/condition-category" />
                    <code value="encounter-diagnosis" />
                    <display value="Encounter Diagnosis" />
                </coding>
                <text value="Encounter Diagnosis" />
            </category>
            <category>
                <coding>
                    <system value="http://open.epic.com/FHIR/StructureDefinition/condition-category" />
                    <code value="visit-diagnosis" />
                    <display value="Visit Diagnosis" />
                </coding>
                <text value="Visit Diagnosis" />
            </category>
            <code>
                <coding>
                    <system value="http://snomed.info/sct" />
                    <code value="127279002" />
                    <display value="Injury of lower extremity (disorder)" />
                </coding>
                <coding>
                    <system value="http://hl7.org/fhir/sid/icd-9-cm/diagnosis" />
                    <code value="844.9" />
                    <display value="Sprain and strain of unspecified site of knee and leg" />
                </coding>
                <coding>
                    <system value="urn:oid:2.16.840.1.113883.6.90" />
                    <code value="IMO0002" />
                    <display value="Sprain and strain of unspecified site of knee and leg" />
                </coding>
                <text value="Sprain and strain of unspecified site of knee and leg" />
            </code>
            <subject>
                <reference value="Patient/eZ5-7rYdWqgv3jSgIvx.SPw3" />
                <display value="Ambulatory, Oliver" />
            </subject>
            <encounter>
                <reference value="Encounter/eHh4jJzTbOUhWyo8wHw6wKg3" />
            </encounter>
        </Condition>
    </resource>
    <search>
        <mode value="match" />
    </search>
</entry>
<entry>
    <link>
        <relation value="self" />
        <url value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/elGpDm00U8BcCeBLMu6yI9JlvKEJvS33nBDYBOBihG.7cKyM93dcttVpRHsJwWXVNhNaHmXGybG9JxBNtzc03gQ3" />
    </link>
    <fullUrl value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/elGpDm00U8BcCeBLMu6yI9JlvKEJvS33nBDYBOBihG.7cKyM93dcttVpRHsJwWXVNhNaHmXGybG9JxBNtzc03gQ3" />
    <resource>
        <Condition>
            <id value="elGpDm00U8BcCeBLMu6yI9JlvKEJvS33nBDYBOBihG.7cKyM93dcttVpRHsJwWXVNhNaHmXGybG9JxBNtzc03gQ3" />
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/condition-category" />
                    <code value="encounter-diagnosis" />
                    <display value="Encounter Diagnosis" />
                </coding>
                <text value="Encounter Diagnosis" />
            </category>
            <category>
                <coding>
                    <system value="http://open.epic.com/FHIR/StructureDefinition/condition-category" />
                    <code value="visit-diagnosis" />
                    <display value="Visit Diagnosis" />
                </coding>
                <text value="Visit Diagnosis" />
            </category>
            <code>
                <coding>
                    <system value="http://snomed.info/sct" />
                    <code value="127279002" />
                    <display value="Injury of lower extremity (disorder)" />
                </coding>
                <coding>
                    <system value="http://hl7.org/fhir/sid/icd-9-cm/diagnosis" />
                    <code value="844.9" />
                    <display value="Sprain and strain of unspecified site of knee and leg" />
                </coding>
                <coding>
                    <system value="urn:oid:2.16.840.1.113883.6.90" />
                    <code value="IMO0002" />
                    <display value="Sprain and strain of unspecified site of knee and leg" />
                </coding>
                <text value="Sprain and strain of unspecified site of knee and leg" />
            </code>
            <subject>
                <reference value="Patient/eZ5-7rYdWqgv3jSgIvx.SPw3" />
                <display value="Ambulatory, Oliver" />
            </subject>
            <encounter>
                <reference value="Encounter/e08LiVGrJd564L0CPdzDQNA3" />
            </encounter>
        </Condition>
    </resource>
    <search>
        <mode value="match" />
    </search>
</entry>
<entry>
    <link>
        <relation value="self" />
        <url value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/elGpDm00U8BcCeBLMu6yI9PJ7BDp.M.XDXcDcO9PvXTYuwdrR7aIB-x-4gdg4BGskFb2GWm.FqchqAewEKADYpA3" />
    </link>
    <fullUrl value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/elGpDm00U8BcCeBLMu6yI9PJ7BDp.M.XDXcDcO9PvXTYuwdrR7aIB-x-4gdg4BGskFb2GWm.FqchqAewEKADYpA3" />
    <resource>
        <Condition>
            <id value="elGpDm00U8BcCeBLMu6yI9PJ7BDp.M.XDXcDcO9PvXTYuwdrR7aIB-x-4gdg4BGskFb2GWm.FqchqAewEKADYpA3" />
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/condition-category" />
                    <code value="encounter-diagnosis" />
                    <display value="Encounter Diagnosis" />
                </coding>
                <text value="Encounter Diagnosis" />
            </category>
            <category>
                <coding>
                    <system value="http://open.epic.com/FHIR/StructureDefinition/condition-category" />
                    <code value="visit-diagnosis" />
                    <display value="Visit Diagnosis" />
                </coding>
                <text value="Visit Diagnosis" />
            </category>
            <code>
                <coding>
                    <system value="http://snomed.info/sct" />
                    <code value="59621000" />
                    <display value="Essential hypertension (disorder)" />
                </coding>
                <coding>
                    <system value="http://hl7.org/fhir/sid/icd-9-cm/diagnosis" />
                    <code value="401.9" />
                    <display value="Essential hypertension" />
                </coding>
                <coding>
                    <system value="urn:oid:2.16.840.1.113883.6.90" />
                    <code value="I10" />
                    <display value="Essential hypertension" />
                </coding>
                <text value="Essential hypertension" />
            </code>
            <subject>
                <reference value="Patient/eZ5-7rYdWqgv3jSgIvx.SPw3" />
                <display value="Ambulatory, Oliver" />
            </subject>
            <encounter>
                <reference value="Encounter/ebOyIiDy6BxfgfDpUaaX-Zg3" />
            </encounter>
            <note>
                <text value="Diagnosed age 54. Initially treated with sodium restriction, diet, exercise. Diuretics started ~1988, taken sporadically since that time. Patient admits to poor compliance with med regimen. No history to suggest end organ damage or coronary artery disease. Cardiovascular risk factors include 20 pk yr hx of smoking and hypercholesterolemia." />
            </note>
        </Condition>
    </resource>
    <search>
        <mode value="match" />
    </search>
</entry>
<entry>
    <link>
        <relation value="self" />
        <url value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/elGpDm00U8BcCeBLMu6yI9PFr03xF0HEQo9yT98nZbx5PjWBl..PoSK5TyhlKF-jcdqWLbo6vzwG4FFNMHwEtNA3" />
    </link>
    <fullUrl value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/elGpDm00U8BcCeBLMu6yI9PFr03xF0HEQo9yT98nZbx5PjWBl..PoSK5TyhlKF-jcdqWLbo6vzwG4FFNMHwEtNA3" />
    <resource>
        <Condition>
            <id value="elGpDm00U8BcCeBLMu6yI9PFr03xF0HEQo9yT98nZbx5PjWBl..PoSK5TyhlKF-jcdqWLbo6vzwG4FFNMHwEtNA3" />
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/condition-category" />
                    <code value="encounter-diagnosis" />
                    <display value="Encounter Diagnosis" />
                </coding>
                <text value="Encounter Diagnosis" />
            </category>
            <category>
                <coding>
                    <system value="http://open.epic.com/FHIR/StructureDefinition/condition-category" />
                    <code value="visit-diagnosis" />
                    <display value="Visit Diagnosis" />
                </coding>
                <text value="Visit Diagnosis" />
            </category>
            <code>
                <coding>
                    <system value="http://snomed.info/sct" />
                    <code value="235595009" />
                    <display value="Gastroesophageal reflux disease (disorder)" />
                </coding>
                <coding>
                    <system value="http://hl7.org/fhir/sid/icd-9-cm/diagnosis" />
                    <code value="530.81" />
                    <display value="GERD (gastroesophageal reflux disease)" />
                </coding>
                <coding>
                    <system value="urn:oid:2.16.840.1.113883.6.90" />
                    <code value="K21.9" />
                    <display value="GERD (gastroesophageal reflux disease)" />
                </coding>
                <text value="GERD (gastroesophageal reflux disease)" />
            </code>
            <subject>
                <reference value="Patient/eZ5-7rYdWqgv3jSgIvx.SPw3" />
                <display value="Ambulatory, Oliver" />
            </subject>
            <encounter>
                <reference value="Encounter/ebOyIiDy6BxfgfDpUaaX-Zg3" />
            </encounter>
            <note>
                <text value="GERD, diagnosed by EGD. Symptoms well controlled with intermittent use of H2 blockers" />
            </note>
        </Condition>
    </resource>
    <search>
        <mode value="match" />
    </search>
</entry>
<entry>
    <link>
        <relation value="self" />
        <url value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/elGpDm00U8BcCeBLMu6yI9DeDLbotiI-igMFMrKkPmCxoFPWi2wMe.GsVfRm6IaxzopCuFBYyexdaibjd8.6Zuw3" />
    </link>
    <fullUrl value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/elGpDm00U8BcCeBLMu6yI9DeDLbotiI-igMFMrKkPmCxoFPWi2wMe.GsVfRm6IaxzopCuFBYyexdaibjd8.6Zuw3" />
    <resource>
        <Condition>
            <id value="elGpDm00U8BcCeBLMu6yI9DeDLbotiI-igMFMrKkPmCxoFPWi2wMe.GsVfRm6IaxzopCuFBYyexdaibjd8.6Zuw3" />
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/condition-category" />
                    <code value="encounter-diagnosis" />
                    <display value="Encounter Diagnosis" />
                </coding>
                <text value="Encounter Diagnosis" />
            </category>
            <category>
                <coding>
                    <system value="http://open.epic.com/FHIR/StructureDefinition/condition-category" />
                    <code value="visit-diagnosis" />
                    <display value="Visit Diagnosis" />
                </coding>
                <text value="Visit Diagnosis" />
            </category>
            <code>
                <coding>
                    <system value="http://snomed.info/sct" />
                    <code value="40930008" />
                    <display value="Hypothyroidism (disorder)" />
                </coding>
                <coding>
                    <system value="http://hl7.org/fhir/sid/icd-9-cm/diagnosis" />
                    <code value="244.9" />
                    <display value="Unspecified hypothyroidism" />
                </coding>
                <coding>
                    <system value="urn:oid:2.16.840.1.113883.6.90" />
                    <code value="E03.9" />
                    <display value="Unspecified hypothyroidism" />
                </coding>
                <text value="Unspecified hypothyroidism" />
            </code>
            <subject>
                <reference value="Patient/eZ5-7rYdWqgv3jSgIvx.SPw3" />
                <display value="Ambulatory, Oliver" />
            </subject>
            <encounter>
                <reference value="Encounter/ebOyIiDy6BxfgfDpUaaX-Zg3" />
            </encounter>
        </Condition>
    </resource>
    <search>
        <mode value="match" />
    </search>
</entry>
<entry>
    <link>
        <relation value="self" />
        <url value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/elGpDm00U8BcCeBLMu6yI9B6ILca.ldDOsqTOFbS1lDTmcBFOgRX9u4RE.fIUm0VissDgYCM44sO.O4.D-EEL1Q3" />
    </link>
    <fullUrl value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/elGpDm00U8BcCeBLMu6yI9B6ILca.ldDOsqTOFbS1lDTmcBFOgRX9u4RE.fIUm0VissDgYCM44sO.O4.D-EEL1Q3" />
    <resource>
        <Condition>
            <id value="elGpDm00U8BcCeBLMu6yI9B6ILca.ldDOsqTOFbS1lDTmcBFOgRX9u4RE.fIUm0VissDgYCM44sO.O4.D-EEL1Q3" />
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/condition-category" />
                    <code value="encounter-diagnosis" />
                    <display value="Encounter Diagnosis" />
                </coding>
                <text value="Encounter Diagnosis" />
            </category>
            <category>
                <coding>
                    <system value="http://open.epic.com/FHIR/StructureDefinition/condition-category" />
                    <code value="visit-diagnosis" />
                    <display value="Visit Diagnosis" />
                </coding>
                <text value="Visit Diagnosis" />
            </category>
            <code>
                <coding>
                    <system value="http://snomed.info/sct" />
                    <code value="59621000" />
                    <display value="Essential hypertension (disorder)" />
                </coding>
                <coding>
                    <system value="http://hl7.org/fhir/sid/icd-9-cm/diagnosis" />
                    <code value="401.9" />
                    <display value="Essential hypertension" />
                </coding>
                <coding>
                    <system value="urn:oid:2.16.840.1.113883.6.90" />
                    <code value="I10" />
                    <display value="Essential hypertension" />
                </coding>
                <text value="Essential hypertension" />
            </code>
            <subject>
                <reference value="Patient/eZ5-7rYdWqgv3jSgIvx.SPw3" />
                <display value="Ambulatory, Oliver" />
            </subject>
            <encounter>
                <reference value="Encounter/edJpvKZmCPIxNxI-D-9jboQ3" />
            </encounter>
            <note>
                <text value="Diagnosed age 54. Initially treated with sodium restriction, diet, exercise. Diuretics started ~1988, taken sporadically since that time. Patient admits to poor compliance with med regimen. No history to suggest end organ damage or coronary artery disease. Cardiovascular risk factors include 20 pk yr hx of smoking and hypercholesterolemia." />
            </note>
        </Condition>
    </resource>
    <search>
        <mode value="match" />
    </search>
</entry>
<entry>
    <link>
        <relation value="self" />
        <url value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/elGpDm00U8BcCeBLMu6yI9GSROvDu4RoafqwY4U1vPf0B5EoPV1rCOrCVH1ZmVkd7hM1dHQKXEQxVY79TohO-PA3" />
    </link>
    <fullUrl value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/elGpDm00U8BcCeBLMu6yI9GSROvDu4RoafqwY4U1vPf0B5EoPV1rCOrCVH1ZmVkd7hM1dHQKXEQxVY79TohO-PA3" />
    <resource>
        <Condition>
            <id value="elGpDm00U8BcCeBLMu6yI9GSROvDu4RoafqwY4U1vPf0B5EoPV1rCOrCVH1ZmVkd7hM1dHQKXEQxVY79TohO-PA3" />
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/condition-category" />
                    <code value="encounter-diagnosis" />
                    <display value="Encounter Diagnosis" />
                </coding>
                <text value="Encounter Diagnosis" />
            </category>
            <category>
                <coding>
                    <system value="http://open.epic.com/FHIR/StructureDefinition/condition-category" />
                    <code value="visit-diagnosis" />
                    <display value="Visit Diagnosis" />
                </coding>
                <text value="Visit Diagnosis" />
            </category>
            <code>
                <coding>
                    <system value="http://snomed.info/sct" />
                    <code value="110483000" />
                    <display value="Tobacco user (finding)" />
                </coding>
                <coding>
                    <system value="http://hl7.org/fhir/sid/icd-9-cm/diagnosis" />
                    <code value="305.1" />
                    <display value="Tobacco use disorder" />
                </coding>
                <coding>
                    <system value="urn:oid:2.16.840.1.113883.6.90" />
                    <code value="F17.200" />
                    <display value="Tobacco use disorder" />
                </coding>
                <text value="Tobacco use disorder" />
            </code>
            <subject>
                <reference value="Patient/eZ5-7rYdWqgv3jSgIvx.SPw3" />
                <display value="Ambulatory, Oliver" />
            </subject>
            <encounter>
                <reference value="Encounter/edJpvKZmCPIxNxI-D-9jboQ3" />
            </encounter>
            <note>
                <text value="Started smoking age 16, smoking 1-15 ppd. Has made several half-hearted attempts to quit but has never been successful for longer than a few days. Only smoker in the family" />
            </note>
        </Condition>
    </resource>
    <search>
        <mode value="match" />
    </search>
</entry>
<entry>
    <link>
        <relation value="self" />
        <url value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/elGpDm00U8BcCeBLMu6yI9BPL8AeS9J5GmJRkl5..R0sNQyca1pC69x6N4P3fEeC1OonTOhIgnTS.zaZEfQYNTQ3" />
    </link>
    <fullUrl value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/elGpDm00U8BcCeBLMu6yI9BPL8AeS9J5GmJRkl5..R0sNQyca1pC69x6N4P3fEeC1OonTOhIgnTS.zaZEfQYNTQ3" />
    <resource>
        <Condition>
            <id value="elGpDm00U8BcCeBLMu6yI9BPL8AeS9J5GmJRkl5..R0sNQyca1pC69x6N4P3fEeC1OonTOhIgnTS.zaZEfQYNTQ3" />
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/condition-category" />
                    <code value="encounter-diagnosis" />
                    <display value="Encounter Diagnosis" />
                </coding>
                <text value="Encounter Diagnosis" />
            </category>
            <category>
                <coding>
                    <system value="http://open.epic.com/FHIR/StructureDefinition/condition-category" />
                    <code value="visit-diagnosis" />
                    <display value="Visit Diagnosis" />
                </coding>
                <text value="Visit Diagnosis" />
            </category>
            <code>
                <coding>
                    <system value="http://snomed.info/sct" />
                    <code value="243876005" />
                    <display value="Screening status (finding)" />
                </coding>
                <coding>
                    <system value="http://hl7.org/fhir/sid/icd-9-cm/diagnosis" />
                    <code value="V76.51" />
                    <display value="Screen for colon cancer" />
                </coding>
                <coding>
                    <system value="urn:oid:2.16.840.1.113883.6.90" />
                    <code value="Z12.11" />
                    <display value="Screen for colon cancer" />
                </coding>
                <text value="Screen for colon cancer" />
            </code>
            <subject>
                <reference value="Patient/eZ5-7rYdWqgv3jSgIvx.SPw3" />
                <display value="Ambulatory, Oliver" />
            </subject>
            <encounter>
                <reference value="Encounter/eusguAs7d-rcMgfpZo6sJGA3" />
            </encounter>
        </Condition>
    </resource>
    <search>
        <mode value="match" />
    </search>
</entry>
<entry>
    <link>
        <relation value="self" />
        <url value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/eh8OUeGWAtnDo9VfNzyrFhh9KtWR3RKw82TuBvcjuArruZBEIjWPLJNvFsk.Q-CP2T7PSmq3mPM7S6bsWaSBS3Q3" />
    </link>
    <fullUrl value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/eh8OUeGWAtnDo9VfNzyrFhh9KtWR3RKw82TuBvcjuArruZBEIjWPLJNvFsk.Q-CP2T7PSmq3mPM7S6bsWaSBS3Q3" />
    <resource>
        <Condition>
            <id value="eh8OUeGWAtnDo9VfNzyrFhh9KtWR3RKw82TuBvcjuArruZBEIjWPLJNvFsk.Q-CP2T7PSmq3mPM7S6bsWaSBS3Q3" />
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/condition-category" />
                    <code value="encounter-diagnosis" />
                    <display value="Encounter Diagnosis" />
                </coding>
                <text value="Encounter Diagnosis" />
            </category>
            <category>
                <coding>
                    <system value="http://open.epic.com/FHIR/StructureDefinition/condition-category" />
                    <code value="visit-diagnosis" />
                    <display value="Visit Diagnosis" />
                </coding>
                <text value="Visit Diagnosis" />
            </category>
            <code>
                <coding>
                    <system value="http://snomed.info/sct" />
                    <code value="59621000" />
                    <display value="Essential hypertension (disorder)" />
                </coding>
                <coding>
                    <system value="http://hl7.org/fhir/sid/icd-9-cm/diagnosis" />
                    <code value="401.9" />
                    <display value="Essential hypertension" />
                </coding>
                <coding>
                    <system value="urn:oid:2.16.840.1.113883.6.90" />
                    <code value="I10" />
                    <display value="Essential hypertension" />
                </coding>
                <text value="Essential hypertension" />
            </code>
            <subject>
                <reference value="Patient/eZ5-7rYdWqgv3jSgIvx.SPw3" />
                <display value="Ambulatory, Oliver" />
            </subject>
            <encounter>
                <reference value="Encounter/etAH1R5CawHsErIfQmzoxpQ3" />
            </encounter>
            <note>
                <text value="Diagnosed age 54. Initially treated with sodium restriction, diet, exercise. Diuretics started ~1988, taken sporadically since that time. Patient admits to poor compliance with med regimen. No history to suggest end organ damage or coronary artery disease. Cardiovascular risk factors include 20 pk yr hx of smoking and hypercholesterolemia." />
            </note>
        </Condition>
    </resource>
    <search>
        <mode value="match" />
    </search>
</entry>
<entry>
    <link>
        <relation value="self" />
        <url value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/eh8OUeGWAtnDo9VfNzyrFhvHkz9hhjxT93Y5CZ-a5u2M3n-0xHYNBZiglq6wqiJqfAucUsjRJFSMHHZcC607mPw3" />
    </link>
    <fullUrl value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/eh8OUeGWAtnDo9VfNzyrFhvHkz9hhjxT93Y5CZ-a5u2M3n-0xHYNBZiglq6wqiJqfAucUsjRJFSMHHZcC607mPw3" />
    <resource>
        <Condition>
            <id value="eh8OUeGWAtnDo9VfNzyrFhvHkz9hhjxT93Y5CZ-a5u2M3n-0xHYNBZiglq6wqiJqfAucUsjRJFSMHHZcC607mPw3" />
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/condition-category" />
                    <code value="encounter-diagnosis" />
                    <display value="Encounter Diagnosis" />
                </coding>
                <text value="Encounter Diagnosis" />
            </category>
            <category>
                <coding>
                    <system value="http://open.epic.com/FHIR/StructureDefinition/condition-category" />
                    <code value="visit-diagnosis" />
                    <display value="Visit Diagnosis" />
                </coding>
                <text value="Visit Diagnosis" />
            </category>
            <code>
                <coding>
                    <system value="http://snomed.info/sct" />
                    <code value="110483000" />
                    <display value="Tobacco user (finding)" />
                </coding>
                <coding>
                    <system value="http://hl7.org/fhir/sid/icd-9-cm/diagnosis" />
                    <code value="305.1" />
                    <display value="Tobacco use disorder" />
                </coding>
                <coding>
                    <system value="urn:oid:2.16.840.1.113883.6.90" />
                    <code value="F17.200" />
                    <display value="Tobacco use disorder" />
                </coding>
                <text value="Tobacco use disorder" />
            </code>
            <subject>
                <reference value="Patient/eZ5-7rYdWqgv3jSgIvx.SPw3" />
                <display value="Ambulatory, Oliver" />
            </subject>
            <encounter>
                <reference value="Encounter/etAH1R5CawHsErIfQmzoxpQ3" />
            </encounter>
            <note>
                <text value="Started smoking age 16, smoking 1-15 ppd. Has made several half-hearted attempts to quit but has never been successful for longer than a few days. Only smoker in the family" />
            </note>
        </Condition>
    </resource>
    <search>
        <mode value="match" />
    </search>
</entry>
<entry>
    <link>
        <relation value="self" />
        <url value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/eh8OUeGWAtnDo9VfNzyrFhq0kHvBGnstj9NvFxjBsFzOrTtf0iZ4hutpWa73EbzApnZPiL3jdTRF.JMFybU-EHw3" />
    </link>
    <fullUrl value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/eh8OUeGWAtnDo9VfNzyrFhq0kHvBGnstj9NvFxjBsFzOrTtf0iZ4hutpWa73EbzApnZPiL3jdTRF.JMFybU-EHw3" />
    <resource>
        <Condition>
            <id value="eh8OUeGWAtnDo9VfNzyrFhq0kHvBGnstj9NvFxjBsFzOrTtf0iZ4hutpWa73EbzApnZPiL3jdTRF.JMFybU-EHw3" />
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/condition-category" />
                    <code value="encounter-diagnosis" />
                    <display value="Encounter Diagnosis" />
                </coding>
                <text value="Encounter Diagnosis" />
            </category>
            <category>
                <coding>
                    <system value="http://open.epic.com/FHIR/StructureDefinition/condition-category" />
                    <code value="visit-diagnosis" />
                    <display value="Visit Diagnosis" />
                </coding>
                <text value="Visit Diagnosis" />
            </category>
            <code>
                <coding>
                    <system value="http://snomed.info/sct" />
                    <code value="40930008" />
                    <display value="Hypothyroidism (disorder)" />
                </coding>
                <coding>
                    <system value="http://hl7.org/fhir/sid/icd-9-cm/diagnosis" />
                    <code value="244.9" />
                    <display value="Unspecified hypothyroidism" />
                </coding>
                <coding>
                    <system value="urn:oid:2.16.840.1.113883.6.90" />
                    <code value="E03.9" />
                    <display value="Unspecified hypothyroidism" />
                </coding>
                <text value="Unspecified hypothyroidism" />
            </code>
            <subject>
                <reference value="Patient/eZ5-7rYdWqgv3jSgIvx.SPw3" />
                <display value="Ambulatory, Oliver" />
            </subject>
            <encounter>
                <reference value="Encounter/etAH1R5CawHsErIfQmzoxpQ3" />
            </encounter>
        </Condition>
    </resource>
    <search>
        <mode value="match" />
    </search>
</entry>
<entry>
    <link>
        <relation value="self" />
        <url value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/eh8OUeGWAtnDo9VfNzyrFhpwHBMt-nFRfWjVKf7XAvrsxTmlxCLD70YGLpTlCxy57U0Qa9vSajV0-U6Bb7RBqqA3" />
    </link>
    <fullUrl value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/eh8OUeGWAtnDo9VfNzyrFhpwHBMt-nFRfWjVKf7XAvrsxTmlxCLD70YGLpTlCxy57U0Qa9vSajV0-U6Bb7RBqqA3" />
    <resource>
        <Condition>
            <id value="eh8OUeGWAtnDo9VfNzyrFhpwHBMt-nFRfWjVKf7XAvrsxTmlxCLD70YGLpTlCxy57U0Qa9vSajV0-U6Bb7RBqqA3" />
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/condition-category" />
                    <code value="encounter-diagnosis" />
                    <display value="Encounter Diagnosis" />
                </coding>
                <text value="Encounter Diagnosis" />
            </category>
            <category>
                <coding>
                    <system value="http://open.epic.com/FHIR/StructureDefinition/condition-category" />
                    <code value="visit-diagnosis" />
                    <display value="Visit Diagnosis" />
                </coding>
                <text value="Visit Diagnosis" />
            </category>
            <code>
                <coding>
                    <system value="http://snomed.info/sct" />
                    <code value="59621000" />
                    <display value="Essential hypertension (disorder)" />
                </coding>
                <coding>
                    <system value="http://hl7.org/fhir/sid/icd-9-cm/diagnosis" />
                    <code value="401.9" />
                    <display value="Essential hypertension" />
                </coding>
                <coding>
                    <system value="urn:oid:2.16.840.1.113883.6.90" />
                    <code value="I10" />
                    <display value="Essential hypertension" />
                </coding>
                <text value="Essential hypertension" />
            </code>
            <subject>
                <reference value="Patient/eZ5-7rYdWqgv3jSgIvx.SPw3" />
                <display value="Ambulatory, Oliver" />
            </subject>
            <encounter>
                <reference value="Encounter/e4HmDpgXalRt8NNfFivM0Qg3" />
            </encounter>
        </Condition>
    </resource>
    <search>
        <mode value="match" />
    </search>
</entry>
<entry>
    <link>
        <relation value="self" />
        <url value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/eh8OUeGWAtnDo9VfNzyrFhsDouHvv0cNgx8ohkp.LcnGqoRizp-v4n35gTS0VrsvONVtqc8ho6zvGcJ5kZlTE7g3" />
    </link>
    <fullUrl value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/eh8OUeGWAtnDo9VfNzyrFhsDouHvv0cNgx8ohkp.LcnGqoRizp-v4n35gTS0VrsvONVtqc8ho6zvGcJ5kZlTE7g3" />
    <resource>
        <Condition>
            <id value="eh8OUeGWAtnDo9VfNzyrFhsDouHvv0cNgx8ohkp.LcnGqoRizp-v4n35gTS0VrsvONVtqc8ho6zvGcJ5kZlTE7g3" />
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/condition-category" />
                    <code value="encounter-diagnosis" />
                    <display value="Encounter Diagnosis" />
                </coding>
                <text value="Encounter Diagnosis" />
            </category>
            <category>
                <coding>
                    <system value="http://open.epic.com/FHIR/StructureDefinition/condition-category" />
                    <code value="visit-diagnosis" />
                    <display value="Visit Diagnosis" />
                </coding>
                <text value="Visit Diagnosis" />
            </category>
            <code>
                <coding>
                    <system value="http://snomed.info/sct" />
                    <code value="110483000" />
                    <display value="Tobacco user (finding)" />
                </coding>
                <coding>
                    <system value="http://hl7.org/fhir/sid/icd-9-cm/diagnosis" />
                    <code value="305.1" />
                    <display value="Tobacco use disorder" />
                </coding>
                <coding>
                    <system value="urn:oid:2.16.840.1.113883.6.90" />
                    <code value="F17.200" />
                    <display value="Tobacco use disorder" />
                </coding>
                <text value="Tobacco use disorder" />
            </code>
            <subject>
                <reference value="Patient/eZ5-7rYdWqgv3jSgIvx.SPw3" />
                <display value="Ambulatory, Oliver" />
            </subject>
            <encounter>
                <reference value="Encounter/e4HmDpgXalRt8NNfFivM0Qg3" />
            </encounter>
        </Condition>
    </resource>
    <search>
        <mode value="match" />
    </search>
</entry>
<entry>
    <link>
        <relation value="self" />
        <url value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/eh8OUeGWAtnDo9VfNzyrFhjZCK3BFoxrx5XeKMLvCfCZaXXo1.wpDjceXxlC8wyOdJ6bVUkKfXXAKhkjmkwUfPw3" />
    </link>
    <fullUrl value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/eh8OUeGWAtnDo9VfNzyrFhjZCK3BFoxrx5XeKMLvCfCZaXXo1.wpDjceXxlC8wyOdJ6bVUkKfXXAKhkjmkwUfPw3" />
    <resource>
        <Condition>
            <id value="eh8OUeGWAtnDo9VfNzyrFhjZCK3BFoxrx5XeKMLvCfCZaXXo1.wpDjceXxlC8wyOdJ6bVUkKfXXAKhkjmkwUfPw3" />
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/condition-category" />
                    <code value="encounter-diagnosis" />
                    <display value="Encounter Diagnosis" />
                </coding>
                <text value="Encounter Diagnosis" />
            </category>
            <category>
                <coding>
                    <system value="http://open.epic.com/FHIR/StructureDefinition/condition-category" />
                    <code value="visit-diagnosis" />
                    <display value="Visit Diagnosis" />
                </coding>
                <text value="Visit Diagnosis" />
            </category>
            <code>
                <coding>
                    <system value="http://snomed.info/sct" />
                    <code value="235595009" />
                    <display value="Gastroesophageal reflux disease (disorder)" />
                </coding>
                <coding>
                    <system value="http://hl7.org/fhir/sid/icd-9-cm/diagnosis" />
                    <code value="530.81" />
                    <display value="GERD (gastroesophageal reflux disease)" />
                </coding>
                <coding>
                    <system value="urn:oid:2.16.840.1.113883.6.90" />
                    <code value="K21.9" />
                    <display value="GERD (gastroesophageal reflux disease)" />
                </coding>
                <text value="GERD (gastroesophageal reflux disease)" />
            </code>
            <subject>
                <reference value="Patient/eZ5-7rYdWqgv3jSgIvx.SPw3" />
                <display value="Ambulatory, Oliver" />
            </subject>
            <encounter>
                <reference value="Encounter/e4HmDpgXalRt8NNfFivM0Qg3" />
            </encounter>
        </Condition>
    </resource>
    <search>
        <mode value="match" />
    </search>
</entry>
<entry>
    <link>
        <relation value="self" />
        <url value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/eBU5I8Jv5EOdsC9i64bVExFx9bCgZqB4c0vAckyrSk-XJ1FneCgEbRGxFxAFLiV19dXqf0-9g.oPy5yJx-5PwEA3" />
    </link>
    <fullUrl value="https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Condition/eBU5I8Jv5EOdsC9i64bVExFx9bCgZqB4c0vAckyrSk-XJ1FneCgEbRGxFxAFLiV19dXqf0-9g.oPy5yJx-5PwEA3" />
    <resource>
        <Condition>
            <id value="eBU5I8Jv5EOdsC9i64bVExFx9bCgZqB4c0vAckyrSk-XJ1FneCgEbRGxFxAFLiV19dXqf0-9g.oPy5yJx-5PwEA3" />
            <verificationStatus>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/condition-ver-status" />
                    <version value="4.0.0" />
                    <code value="confirmed" />
                    <display value="Confirmed" />
                </coding>
                <text value="Confirmed" />
            </verificationStatus>
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/condition-category" />
                    <code value="encounter-diagnosis" />
                    <display value="Encounter Diagnosis" />
                </coding>
                <text value="Encounter Diagnosis" />
            </category>
            <category>
                <coding>
                    <system value="http://open.epic.com/FHIR/StructureDefinition/condition-category" />
                    <code value="discharge-diagnosis" />
                    <display value="Discharge Diagnosis" />
                </coding>
                <text value="Discharge Diagnosis" />
            </category>
            <code>
                <coding>
                    <system value="http://snomed.info/sct" />
                    <code value="312342009" />
                    <display value="Infective pneumonia (disorder)" />
                </coding>
                <coding>
                    <system value="http://hl7.org/fhir/sid/icd-9-cm/diagnosis" />
                    <code value="486" />
                    <display value="Pneumonia, organism unspecified" />
                </coding>
                <coding>
                    <system value="urn:oid:2.16.840.1.113883.6.90" />
                    <code value="J18.9" />
                    <display value="Pneumonia, organism unspecified" />
                </coding>
                <text value="Pneumonia, organism unspecified" />
            </code>
            <subject>
                <reference value="Patient/eZ5-7rYdWqgv3jSgIvx.SPw3" />
                <display value="Ambulatory, Oliver" />
            </subject>
            <encounter>
                <reference value="Encounter/eNe1jQk.aQ2zyZwPEjBTURw3" />
            </encounter>
            <note>
                <text value="pneumonia" />
            </note>
        </Condition>
    </resource>
    <search>
        <mode value="match" />
    </search>
</entry>
</Bundle>`

export default conditionXML;