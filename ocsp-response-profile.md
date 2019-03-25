### OCSP Response Profile
OCSP responses under this profile are expected to operate using the Static Response model described in RFC 6960 and thus will not support nonce.

| **Field** | **Value and Requirements** |
| :-------- | :------------------------------- |
| Response Status | As specified in RFC 6960 |
| Response Type | id-pkix-ocsp-basic {1.3.6.1.5.5.7.48.1.1} |
| Version | V1 (0x0) |
| Responder ID | By Key <br>Identical to subject key identifier in Responder Certificate |
| Produced At | The time at which the response was encoded and signed |
| Responses | Sequence of one or more Single Response as specified below |
| Signature Algorithm | sha256 WithRSAEncryption {1 2 840 113549 1 1 11} |
| Certificates | Most recent certificate issued to the OCSP Responder by the CA identified by the issuerNameHash and issuerKeyHash in the Single Responses included in the response |

| **Extension** | **Required** | **Critical** | **Value and Requirements** |
| :-------- | :-----: | :-----: | :------------------------------- |
| Nonce | Not Supported | N/A | Nonce is not supported |

#### Single Response

| **Field** | **Value and Requirements** |
| :-------- | :------------------------------- |
| CertID | hashAlgorithm shall be SHA-1<br>The issuerKeyHash and issuerNameHash pair must be identical within all Single Responses appearing in an OCSP Response |
| Certificate Status | See Section 4.9.10 |
| This Update | See Section 4.9.10 for validity period intervals. <br> Status information for DV/OV Server certificates: at least once every 24 hours. <br>Status information for Subordinate CA certificates: Every 31 days, or within 24 hours of revoking a Subordinate CA certificate. |
| Next Update | See Section 4.9.10 for validity period intervals.<br>Status information for DV/OV Server certificates: not more than seven days beyond the value of the thisUpdate field. <br>Status information for Subordinate CA certificates: not more than 32 days beyond the value of the thisUpdate field. |
| Single Extensions | Optional: <br>Transparency Information X.509v3 Extension {1 3 101 75} |
