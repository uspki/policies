## Delegated OCSP Responder Certificate Profile


| **Field** |       |       | **Value**                             |
| :-------- | :---: | :---: | :-------------------------------     |
| Version   |       |       | V3 (2)                                 |
| Serial Number   |       |       | Must be a unique positive integer with a minimum of 64 bits (minimum of 8 octets), not to exceed 20 octets  |
| Issuer Signature Algorithm   |       |       |  sha256 WithRSAEncryption {1 2 840 113549 1 1 11}  |
| Issuer Distinguished Name   |       |       |  Distinguished Name of the Issuing CA for the OCSP responder certificate |
| Validity Period   |       |       |  Encoded as UTCTime for dates through 2049 and GeneralizedTime for dates thereafter <br> No longer than 45 days from date of issue. <br> Goal of certificates is issued every 30 days with a 15 day grace period. Renewed certificates 30 days longer than previous certificate. <br> Rekey <= every 3 years. |
| Subject Distinguished Name   |       |       | Unique X.500 CA DN as specified in Section 7.1.4 of this CP.  CN must include indicator as OCSP Responder <br><br> **Geo-political SDNs:**<br> CN indicates OCSP Responder<br> Organization Name = U.S. Government <br> Organization Unit (optional) <br> Country (required) two-letter ISO 3166-1 country code - US <br><br> (each X.500 DN each RDN is a printableString where possible and contains a single attribute type and attribute value tuple. RDN of type DC are encoded as IA5string.  )   |
| Subject Public Key Information   |       |       |   rsaEncryption {1 2 840 113549 1 1 1}<br>For RSA, parameters field is populated with NULL.<br>Modulus must be 2048, 3072, or 4096 bits, an odd integer, not the power of a prime, with no factors < 752.  Public exponent _e_ shall be an odd positive integer such that 2^16+1 < _e_ < 2^256-1.  (Source:  Appendix A, CA/Browser Forum, Baseline Requirements with NIST FIPS 186-4 clause to be _shall_ over _should_.) |
| Issuer Signature   |       |       |   sha256 WithRSAEncryption {1 2 840 113549 1 1 11}    |
|               |                 |              |                                       |
| **Extension** |  **Required**   | **Critical** | **Value**                             |
| Authority Key Identifier  | Mandatory | False |  Octet String: Derived using the SHA-1 hash of the Issuer’s public key.  Must match SKI of issuing CA Certificate|
| basicConstraints   | Optional | True |  If present: <br>cA=False|
| Subject Key Identifier   | Mandatory | False |  Octet String <br> 20 byte SHA-1 hash of the binary DER encoding of the OCSP Responder public Key  |
| Key Usage   | Mandatory | True | **Required Key Usage:** <br> Digital Signature <br><br>**Prohibited Key Usage:** <br> All others |
| id-pkix-ocsp-nocheck {1.3.6.1.5.5.7.48.1.5} | Mandatory | False | Null |
| Extended Key Usage   |       | False | **Required Extended Key Usage:** <br> id-kp-OCSPSigning {1.3.6.1.5.5.7.3.9} <br> **Prohibited Extended Key Usage:** <br> All others, including anyEKU EKU {2.5.29.37.0} |
| Certificate Policies   |  Mandatory  | False | **Required Certificate Policy Fields:** <br>At least one certificate policy OID defined or listed in Section 1.2 of the CP <br><br>**Optional Certificate Policy Fields:** <br> certificatePolicies:policyQualifiers <br> policyQualifierId   id-qt 1 <br> qualifier:cPSuri |
| Subject Alternative Name   | Optional | False  |  | 
| Authority Information Access   | Mandatory | False | **Required AIA Fields** <br><br> ** Id-ad-caIssuers** <br> Publicly accessible URI of Issuing CA’s certificate accessMethod = {1.3.6.1.5.5.7.48.2} <br> Shall include at least 1 instance of an HTTP URL containing the Issuing CA’s certificate|
| CRL Distribution Points   | Optional | False | At least one HTTP URI to the location of a publicly accessible CRL. The reasons and cRLIssuer fields must be omitted. |
| IssuerAltName             | Not Used |  |  |
| Subject Directory Attributes | Not Used |  |  |
| Private Extensions        | Not Used | False |  |
| Private Key Usage Period  | Optional | False |  |
| nameConstraints           | Not Used |  |  |
| Policy Mapping            | Not Used |  |  |
| Policy Constraints        | Not Used |  |  |
