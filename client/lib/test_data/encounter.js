const encounterXML = `<Bundle xmlns="http://hl7.org/fhir">
<type value="searchset" />
<total value="1" />
<link>
    <relation value="self" />
    <url value="https://epicproxy-pub-np.et1089.epichosted.com/FHIRTSTProxy/api/FHIR/R4/Encounter?subject=Patient/TuIsFeHJGysga1t2g3n1BXL2cr9kG6ZShbwg3YwKrfHwB" />
</link>
<entry>
    <link>
        <relation value="self" />
        <url value="https://epicproxy-pub-np.et1089.epichosted.com/FHIRTSTProxy/api/FHIR/R4/Encounter/exry2qRp88Nrh5wQkZ.LMaw3" />
    </link>
    <fullUrl value="https://epicproxy-pub-np.et1089.epichosted.com/FHIRTSTProxy/api/FHIR/R4/Encounter/exry2qRp88Nrh5wQkZ.LMaw3" />
    <resource>
        <Encounter>
            <id value="exry2qRp88Nrh5wQkZ.LMaw3" />
            <identifier>
                <use value="usual" />
                <system value="urn:oid:1.2.840.114350.1.13.535.3.7.3.698084.8" />
                <value value="1103600483" />
            </identifier>
            <status value="in-progress" />
            <class>
                <system value="urn:oid:1.2.840.114350.1.72.1.7.7.10.696784.13260" />
                <code value="3" />
                <display value="Admission" />
            </class>
            <type>
                <coding>
                    <system value="urn:oid:1.2.840.114350.1.13.535.3.7.10.698084.10110" />
                    <code value="103" />
                    <display value="Emergency" />
                </coding>
                <text value="Emergency" />
            </type>
            <type>
                <coding>
                    <system value="urn:oid:1.2.840.114350.1.13.535.3.7.10.698084.30" />
                    <code value="3" />
                    <display value="Hospital Encounter" />
                </coding>
                <text value="Hospital Encounter" />
            </type>
            <type>
                <coding>
                    <system value="urn:oid:1.2.840.114350.1.13.535.3.7.10.698084.18875" />
                    <code value="3" />
                    <display value="Emergency" />
                </coding>
                <text value="Emergency" />
            </type>
            <serviceType>
                <coding>
                    <system value="urn:oid:1.2.840.114350.1.13.535.3.7.10.698084.18886" />
                    <code value="120" />
                    <display value="Obstetrics &amp; Gynecology" />
                </coding>
                <text value="Obstetrics &amp; Gynecology" />
            </serviceType>
            <subject>
                <reference value="Patient/e3WP-SI--5jGsomn9yE06eg3" />
                <display value="Bmh, Obstetrics" />
            </subject>
            <episodeOfCare>
                <reference value="EpisodeOfCare/e97CdRlIknhIMfLe9lBreRw3" />
                <type value="EpisodeOfCare" />
                <display value="May 2022" />
            </episodeOfCare>
            <period>
                <start value="2022-05-26T16:20:00Z" />
            </period>
            <account>
                <identifier>
                    <system value="urn:oid:1.2.840.114350.1.13.535.3.7.2.726582" />
                    <value value="800000000136" />
                </identifier>
                <display value="BMH,OBSTETRICS" />
            </account>
            <location>
                <location>
                    <reference value="Location/e38kED6VkpMesJ5NduIxJLsAciIos0K1bjnrYhthXv6I3" />
                    <display value="BMH CP 4 LABOR AND DELIVERY" />
                </location>
                <period>
                    <start value="2022-05-26T16:20:00Z" />
                </period>
            </location>
            <location>
                <location>
                    <reference value="Location/e38kED6VkpMesJ5NduIxJLsAciIos0K1bjnrYhthXv6I3" />
                    <display value="BMH CP 4 LABOR AND DELIVERY" />
                </location>
            </location>
            <location>
                <location>
                    <reference value="Location/eAgnjZwU16.nq7FCmSggn8w3" />
                    <display value="NYP/NYP MEDICAL GROUP" />
                </location>
            </location>
            <location>
                <location>
                    <reference value="Location/exQoOHufMODDe4I8SLx-9vQ3" />
                    <display value="LR08" />
                </location>
                <physicalType>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/location-physical-type" />
                        <code value="ro" />
                        <display value="Room" />
                    </coding>
                    <text value="Room" />
                </physicalType>
            </location>
            <location>
                <location>
                    <identifier>
                        <system value="urn:oid:1.2.840.114350.1.13.535.3.7.2.666968" />
                        <value value="214910" />
                    </identifier>
                    <display value="LR08 / LR08-A" />
                </location>
                <physicalType>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/location-physical-type" />
                        <code value="bd" />
                        <display value="Bed" />
                    </coding>
                    <text value="Bed" />
                </physicalType>
            </location>
        </Encounter>
    </resource>
    <search>
        <mode value="match" />
    </search>
</entry>
</Bundle>`

export default encounterXML;