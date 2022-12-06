const pregnancyStatus = `<Bundle xmlns="http://hl7.org/fhir">
<type value="searchset" />
<total value="3" />
<link>
    <relation value="self" />
    <url value="https://epicproxy-pub-np.et1089.epichosted.com/FHIRTSTProxy/api/FHIR/R4/Observation?Patient=Tf5.ZeveEK7VrNQFwxGf0XZYhGlRZGTItrDPRZT4qcg8B&amp;category=social-history" />
</link>
<entry>
    <link>
        <relation value="self" />
        <url value="https://epicproxy-pub-np.et1089.epichosted.com/FHIRTSTProxy/api/FHIR/R4/Observation/e26WU404.JfAy3h3jnrhXnEOe7b7azofcvnyocxUSd.FkLbgjXqnribM9z1eX8LKV3" />
    </link>
    <fullUrl value="https://epicproxy-pub-np.et1089.epichosted.com/FHIRTSTProxy/api/FHIR/R4/Observation/e26WU404.JfAy3h3jnrhXnEOe7b7azofcvnyocxUSd.FkLbgjXqnribM9z1eX8LKV3" />
    <resource>
        <Observation>
            <id value="e26WU404.JfAy3h3jnrhXnEOe7b7azofcvnyocxUSd.FkLbgjXqnribM9z1eX8LKV3" />
            <status value="final" />
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/observation-category" />
                    <code value="social-history" />
                    <display value="Social History" />
                </coding>
                <text value="Social History" />
            </category>
            <code>
                <coding>
                    <system value="http://loinc.org" />
                    <code value="72166-2" />
                    <display value="Tobacco smoking status" />
                </coding>
                <coding>
                    <system value="http://snomed.info/sct" />
                    <code value="365980008" />
                    <display value="Finding of tobacco use and exposure (finding)" />
                </coding>
                <text value="Smoking History" />
            </code>
            <subject>
                <reference value="Patient/eDztn7dvVx2ozfDgKYSmiWg3" />
                <display value="Banff, Bonnie" />
            </subject>
            <issued value="2022-07-06T04:00:00Z" />
            <valueCodeableConcept>
                <coding>
                    <system value="http://snomed.info/sct" />
                    <code value="266927001" />
                    <display value="Tobacco smoking consumption unknown" />
                </coding>
                <text value="Never Assessed" />
            </valueCodeableConcept>
        </Observation>
    </resource>
    <search>
        <mode value="match" />
    </search>
</entry>
<entry>
    <link>
        <relation value="self" />
        <url value="https://epicproxy-pub-np.et1089.epichosted.com/FHIRTSTProxy/api/FHIR/R4/Observation/eZ7NTlmwb1Dxlb.VpWl3-ofxVt3oWUrKiBzydBrsW2.VicPIEDXcUaCjxQ9GH8SN13" />
    </link>
    <fullUrl value="https://epicproxy-pub-np.et1089.epichosted.com/FHIRTSTProxy/api/FHIR/R4/Observation/eZ7NTlmwb1Dxlb.VpWl3-ofxVt3oWUrKiBzydBrsW2.VicPIEDXcUaCjxQ9GH8SN13" />
    <resource>
        <Observation>
            <id value="eZ7NTlmwb1Dxlb.VpWl3-ofxVt3oWUrKiBzydBrsW2.VicPIEDXcUaCjxQ9GH8SN13" />
            <status value="final" />
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/observation-category" />
                    <code value="social-history" />
                    <display value="Social History" />
                </coding>
                <text value="Social History" />
            </category>
            <code>
                <coding>
                    <system value="http://loinc.org" />
                    <code value="82810-3" />
                    <display value="Pregnancy status" />
                </coding>
                <text value="Pregnancy status" />
            </code>
            <subject>
                <reference value="Patient/eDztn7dvVx2ozfDgKYSmiWg3" />
                <display value="Banff, Bonnie" />
            </subject>
            <encounter>
                <reference value="Encounter/e7ICbfIAGEynVPSt2eVMdpQ3" />
                <display value="Hospital Encounter" />
            </encounter>
            <effectiveDateTime value="2022-07-06" />
            <issued value="2022-07-06T13:04:28Z" />
            <performer>
                <reference value="Practitioner/ed8rSVHcvJduQD-pC4BGMEg3" />
                <display value="Erica Chiu" />
            </performer>
            <valueCodeableConcept>
                <coding>
                    <system value="http://snomed.info/sct" />
                    <code value="373066001" />
                    <display value="Yes" />
                </coding>
                <text value="Yes" />
            </valueCodeableConcept>
            <derivedFrom>
                <reference value="Observation/eZ7NTlmwb1Dxlb.VpWl3-oSwVZQU1MiLwM1qPJy3mCoWaInjDZyxw8QCjJOIP8k-N3" />
                <display value="Menstrual status" />
            </derivedFrom>
        </Observation>
    </resource>
    <search>
        <mode value="match" />
    </search>
</entry>
<entry>
    <link>
        <relation value="self" />
        <url value="https://epicproxy-pub-np.et1089.epichosted.com/FHIRTSTProxy/api/FHIR/R4/Observation/eZ7NTlmwb1Dxlb.VpWl3-oSwVZQU1MiLwM1qPJy3mCoWaInjDZyxw8QCjJOIP8k-N3" />
    </link>
    <fullUrl value="https://epicproxy-pub-np.et1089.epichosted.com/FHIRTSTProxy/api/FHIR/R4/Observation/eZ7NTlmwb1Dxlb.VpWl3-oSwVZQU1MiLwM1qPJy3mCoWaInjDZyxw8QCjJOIP8k-N3" />
    <resource>
        <Observation>
            <id value="eZ7NTlmwb1Dxlb.VpWl3-oSwVZQU1MiLwM1qPJy3mCoWaInjDZyxw8QCjJOIP8k-N3" />
            <status value="final" />
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/observation-category" />
                    <code value="social-history" />
                    <display value="Social History" />
                </coding>
                <text value="Social History" />
            </category>
            <code>
                <coding>
                    <system value="http://loinc.org" />
                    <code value="3146-8" />
                    <display value="Menstrual status" />
                </coding>
                <text value="Menstrual status" />
            </code>
            <subject>
                <reference value="Patient/eDztn7dvVx2ozfDgKYSmiWg3" />
                <display value="Banff, Bonnie" />
            </subject>
            <encounter>
                <reference value="Encounter/e7ICbfIAGEynVPSt2eVMdpQ3" />
                <display value="Hospital Encounter" />
            </encounter>
            <effectiveDateTime value="2022-07-06" />
            <issued value="2022-07-06T13:04:28Z" />
            <performer>
                <reference value="Practitioner/ed8rSVHcvJduQD-pC4BGMEg3" />
                <display value="Erica Chiu" />
            </performer>
            <valueCodeableConcept>
                <coding>
                    <system value="urn:oid:1.2.840.114350.1.13.535.3.7.4.698084.18940" />
                    <code value="4" />
                    <display value="Pregnant" />
                </coding>
                <text value="Pregnant" />
            </valueCodeableConcept>
        </Observation>
    </resource>
    <search>
        <mode value="match" />
    </search>
</entry>
</Bundle>`

export default pregnancyStatus;