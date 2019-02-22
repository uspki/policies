### OCSP Response Profile
OCSP Responders under this profile are expected to operate using the Static Response model described in RFC 6960 and thus will not support nonce.

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
| Certificate Status | Determined by CRL<br>If revoked, revocationReason is included if present on the CRL |
| This Update | Identical to the thisUpdate of the CRL used for determining revocation status |
| Next Update | Before or identical to the nextUpdate field of the CRL used for determining revocation status |
| Single Extensions | Optional: <br>Transparency Information X.509v3 Extension {1 3 101 75} |
