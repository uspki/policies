## Server Authentication Certificate Profile (Public TLS Certificates)


| **Field** |       |       | **Value**                             |
| :-------- | :---: | :---: | :-------------------------------     |
| Version   |       |       | V3 (2)                                 |
| Serial Number   |       |       | Must be a unique positive integer with a minimum of 64 bits (minimum of 8 octets), not to exceed 20 octets  |
| Issuer Signature Algorithm   |       |       |  sha256 WithRSAEncryption {1 2 840 113549 1 1 11}  |
| Issuer Distinguished Name   |       |       |  Unique X.500 Issuing CA DN as specified in Section 7.1.4 of this CP |
| Validity Period   |       |       |  Encoded as UTCTime for dates through 2049 and GeneralizedTime for dates thereafter <br> No longer than 36 months from date of issue |
| Subject Distinguished Name   |       |       | Unique X.500 CA DN as specified in Section 7.1.4 of this CP <br><br> **Geo-political SDNs:**<br> CN (optional) (deprecated in favor of Subject Alternative Names) If present, MUST contain Fully-Qualified Domain Name that is one of the values contained in the Certificate's subjectAltName extension <br> Organization Name (optional) If present, shall contain U.S. Government (o=U.S. Government) <br> Organization Unit (optional) <br> Country (required) and shall be c=US <br><br>**Domain Component Names:**<br> If present, TLD must be .mil or .gov, and name must contain second level domain IAW registry. <br> Each X.500 DN each RDN is a printableString and contains a single attribute type and attribute value tuple. RDN of type DC are encoded as IA5string. |
| Subject Public Key Information   |       |       |   Public key algorithm associated with the public key.<br>May be either RSA or elliptic curve.<br>RSA Encryption       {1.2.840.113549.1.1.1}<br> Elliptic curve key    {1.2.840.10045.2.1}<br>Parameters:<br>For RSA, parameters field is populated with NULL.<br>For ECC Implicitly specify parameters through an OID associated with a NIST approved curve referenced in 800-78-1:<br>Curve P-256  {1.2.840.10045.3.1.7} <br>Curve P-384 {1.3.132.0.34} <br>Curve P-521 {1.3.132.0.35}<br><br>For RSA public keys, modulus must be 2048, 3072, or 4096 bits, an odd integer, not the power of a prime, with no factors < 752.  Public exponent _e_ shall be an odd positive integer such that 2^16+1 < _e_ < 2^256-1.  (Source:  Appendix A, CA/Browser Forum, Baseline Requirements with NIST FIPS 186-4 clause to be _shall_ over _should_.) <br> For ECC, public key must be at least 224 bits.  |
| Issuer Signature   |       |       |   sha256 WithRSAEncryption {1 2 840 113549 1 1 11}    |
|               |                 |              |                                       |
| **Extension** |  **Required**   | **Critical** | **Value**                             |
| Authority Key Identifier  | Mandatory | False |  Octet String: Derived using the SHA-1 hash of the Issuer’s public key in accordance with RFC 5280.  Must match SKI of issuing CA Certificate|
| basicConstraints   | Mandatory | True | cA=False (Reference Section 7.1.2.3 sub-part d)|
| Subject Key Identifier   | Mandatory | False |  Octet String <br> Derived using SHA-1 hash of the public key  |
| Key Usage   | Mandatory | True | **Required Key Usage:** <br> Digital Signature <br><br> **Optional Key Usage:** <br> Key Encipherment for RSA Keys <br> Key Agreement for Elliptic Curve <br><br>**Prohibited Key Usage:** <br> keyCertSign and cRLSign |
| Extended Key Usage   |       | False | **Required Extended Key Usage:** <br> Server Authentication id-kp-serverAuth {1.3.6.1.5.5.7.3.1} <br><br> **Optional Extended Key Usage:** <br> Client Authentication id-kp-clientAuth {1.3.6.1.5.5.7.3.2} <br> Additional EKUs may be included that are consistent with Server authentication <br><br>**Prohibited Extended Key Usage:** <br> anyEKU EKU {2.5.29.37.0} <br> all others |
| Certificate Policies   |  Mandatory  | False | **Required Certificate Policy Fields:** <br>At least one certificate policy OID defined or listed in Section 1.2 of the CP <br><br>**Optional Certificate Policy Fields:** <br> certificatePolicies:policyQualifiers <br> policyQualifierId   id-qt 1 <br> qualifier:cPSuri |
| Subject Alternative Name   | Optional | False  |  | 
| Authority Information Access   | Mandatory | False | **Required AIA Fields** <br> **OCSP** <br> Publicly accessible URI of Issuing CA's OCSP responder accessMethod = {1.3.6.1.5.5.7.48.1} <br><br> **Id-ad-caIssuers** <br> Publicly accessible URI of Issuing CA’s certificate accessMethod = {1.3.6.1.5.5.7.48.2} <br> At least one instance of this access method shall include the URI name form to specify the certificate artifacts. The certificate artifact(s) served by this HTTP accessible location shall be in a BER or DER encoded "certs-only" CMS message as specified in [RFC2797]. This extension is required to assist in monitoring and discovery and path building. <br>LDAP access methods shall not be included.|
| CRL Distribution Points   | Mandatory | False | At least one HTTP URI to the location of a publicly accessible CRL. The reasons and cRLIssuer fields must be omitted. |
| nameConstraints           | Optional | False | If present, any combination of permitted and excluded subtrees may appear.  If permitted and excluded subtrees overlap the excluded take precedence.<br> Permitted dnsNames should be included. <br> IP addresses should all be excluded.  |
| IssuerAltName             | Optional | False |  |
| Subject Directory Attributes | Optional | False |  |
| Private Extensions        | Optional | False | Must not cause interoperability issues. Only extensions that have context for use on the public Internet. CA must be aware of reason for including in the certificate. |
| Private Key Usage Period  | Optional | False |  |
| Transparency Information  | Mandatory | False | Must include one or more SCTs or inclusion proofs. <br> From RFC 6962-bis (1.3.101.75) contains one or more. <br> "TransItem" structures in a "TransItemList" |

