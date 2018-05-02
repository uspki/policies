## General Notes: ##
- To avoid confusion with the actual test CAs that the GSA-MA/DISA engineering teams will be producing, the root/subordinate CAs contain a "100" identifier (e.g. US Federal Test TLS CA 100)
- I deviated in CA naming to add a space between the CA and its numeric identifier. For example, my CAs are labeled like “US Federal Test TLS CA 100”, whereas the CP and profiles state they should look like “US Federal Test TLS CA100”. This is a personal preference.
- TLS certificate SCT data is fake (signed object values are just populated with 0's)
- SIA/AIA/CRLDP URIs are non-functional - and could likely benefit from further standardization
- Keys are generated fresh each time a new batch of certificates is created. 


**_Note:_** *The goal of these certificates is to promote discussion surrounding the existing [certificate profiles](https://github.com/uspki/policies) in hopes of identifying necessary updates.*


## Updates (05/02/2018): ##
* A second Subordinate CA certificate ( 1-subordinate-no-dn-constraints.md -> CN=US Federal Test TLS CA 101) has been issued to more closely align to the existing policy Section 7.1.5 (removes dirName name constraints as seen on CN=US Federal Test TLS CA 100).


## Updates (04/24/2018): ##
* Subordinate CA Profile has been updated to include OCSP Signing EKU per feedback from Santosh.
* The DV-TLS certificate from the first batch of test certificates inadvertantly had a serial number that exceeded 20 octets. This is now corrected.
* "Invalid" TLS certiifcates were generated per feedback from Santosh. These are invalid because they contain IP addresses in the SAN.
  * One certificate with lowest IP V4 address of 0.0.0.0 for each DV/OV
  * One certificate with highest IP V4 address of 255.255.255.255 for each DV/OV
  * One certificate with lowest IP V6 address of 0:0:0:0:0:0:0:0 for each DV/OV
  * One certificate with highest IP V6 address of FFFF:FFFF:FFFF:FFFF:FFFF:FFFF:FFFF:FFFF for each DV/OV
