

## Intermediate or Subordinate CA Certificate Profile

| **Field** |       |       | **Value**                             |
| :-------- | :---: | :---: | :-------------------------------     |
| Version   |       |       | V3 (2)                                 |
| Serial Number   |       |       | Must be a unique positive integer with a minimum of 64 bits (minimum of 8 octets), not to exceed 20 octets  |
| Issuer Signature Algorithm   |       |       |  sha256 WithRSAEncryption {1 2 840 113549 1 1 11}  |
| Issuer Distinguished Name   |       |       |  Unique X.500 issuing CA DN as specified in Section 7.1.4 of this CP |
| Validity Period   |       |       |  Encoded as UTCTime for dates through 2049 and GeneralizedTime for dates thereafter <br> No longer than 10 years from date of issue  |
| Subject Distinguished Name   |       |       | Unique X.500 CA DN as specified in Section 7.1.4 of this CP. <br> X.500 Distinguished Name of the owner of the subject public key in the certificate. Distinguished Name shall conform to PrintableString string type in ASN.1 notation. <br>CN value shall not include designations such as "root" or "Root" or other similar designations.  DN shall include o=U.S. Government, c=US <br>Example: cn=US Federal Device Issuing CA1, o=U.S. Government, c=US<br>Subject name should be encoded exactly as it is encoded in the issuer field of certificates issued by the subject. |
| Subject Public Key Information   |       |       |   At least 2048 bit modulus, rsaEncryption {1 2 840 113549 1 1 1}   |
| Issuer Signature   |       |       |   sha256 WithRSAEncryption {1 2 840 113549 1 1 11}    |
|               |                 |              |                                       |
| **Extension** |  **Required**   | **Critical** | **Value**                             |
| subjectInfoAccess  | Mandatory | False |  Present if the subject CA issues subordinate CA certificates <br> Not present if the subject CA only issues subscriber certificates <br> id-ad-caRepository (1.3.6.1.5.5.7.48.5) <br> At least one instance of this access method that includes the URI name form to specify the location of an HTTP accessible location where CA certificates issued by the subject of this certificate may be found. The certificate artifacts served by the HTTP accessible location shall be a single DER encoded certificate as specified in [RFC2585] or a collection of certificates in a BER or DER encoded "certs-only" CMS message as specified in [RFC2797]. This extension is required to assist in monitoring and discovery of, and promote transparency for, the Subordinate/Issuing CAs. |
| basicConstraints   | Mandatory | True |  cA=True <br> Pathlen is not present |
| Subject Key Identifier   | Mandatory | False |  Octet String <br> Derived using SHA-1 hash of the public key  |
| Key Usage   | Mandatory | True | keyCertSign, crlSign, digitalSignature and / or non-repudiation if the CA uses its key to sign OCSP responses   |
| Extended Key Usage   |       | False |   |
| Certificate Policies   |  Mandatory  | False | List of one or more policy OIDs defined or listed  in Section 1.2 of the CP |
| Subject Alternative Name   | Optional | False  |  | 
| Authority Information Access   | Mandatory | False | **Required AIA Fields** <br> **OCSP** <br> Publicly accessible URI of Issuing CA's OCSP responder accessMethod = {1.3.6.1.5.5.7.48.1} <br><br> ** Id-ad-caIssuers** <br> Publicly accessible URI of Issuing CA’s certificate accessMethod = {1.3.6.1.5.5.7.48.2} <br> Shall include at least 1 instance of an HTTP URL |
| CRL Distribution Points   | Mandatory | False | At least one HTTP URI to the location of a publicly accessible CRL. The reasons and cRLIssuer fields must be omitted. |
| nameConstraints           | Optional | False | If present, any combination of permitted and excluded subtrees may appear.  If permitted and excluded subtrees overlap the excluded take precedence.<br> Permitted dnsNames should be included. <br> IP addresses should all be excluded.  |
| IssuerAltName             | Optional | False |  |
| Subject Directory Attributes | Optional | False |  |
| Private Extensions        | Optional | False | Must not cause interoperability issues. Only extensions that have context for use on the public Internet. CA must be aware of reason for including in the certificate. |
| Private Key Usage Period  | Optional | False |  |
| policyConstraints         | Optional | False |  |
| inhibitAnyPolicy          | Optional | False |  |
