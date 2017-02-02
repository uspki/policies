
## CRL Profile

| **Field** |       |       | **Value**                             |
| :-------- | :---: | :---: | :-------------------------------     |
| Version   |       |       | V2 (1)                                 |
| Issuer Signature Algorithm   |       |       |  sha256 WithRSAEncryption {1 2 840 113549 1 1 11}  |
| Issuer Distinguished Name   |       |       |  Distinguished Name of the CA Issuer |
| thisUpdate   |       |       | Expressed in UTC Time for dates until end of 2049 and Generalized Time for dates thereafter  |
| nextUpdate   |       |       | Expressed in UTC Time for dates until end of 2049 and Generalized Time for dates thereafter  |
| Revoked Certificates List   |       |       |  0 or more 2-tuple of certificate serial number and revocation date (Expressed in UTCTime for dates until end of 2049 and GeneralizedTime for dates thereafter )  |
| Issuer Signature   |       |       |   sha256 WithRSAEncryption {1 2 840 113549 1 1 11}    |
|               |                 |              |                                       |
| **CRL Extension** |  **Required**   | **Critical** | **Value**                             |
| CRL Number  | Mandatory | False | Monotonically increasing integer (never repeated) |
| Authority Key Identifier   | Mandatory | False |  Octet String (same as in Authority Key Identifier field in certificates issued by the CA) |
|               |                 |              |                                       |
| **CRL Entry Extension** |  **Required**   | **Critical** | **Value**  
| Reason Code  | Mandatory | False |  Must be included when reason code = key compromise or CA compromise |
| Hold Instruction   | Not Used |  | Only present if reason code = certificate Hold which is not permitted by this CP |
| Issuing Distribution Point  | Not Used |  | Only present if reason code = certificate Hold which is not permitted by this CP |
