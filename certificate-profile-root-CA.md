
## Self-Signed Root CA Certificate Profile

| **Field** |       |       | **Value**                             |
| :-------- | :---: | :---: | :-------------------------------     |
| Version   |       |       | v3(2)                                 |
| Serial Number   |       |       | Must be a unique positive integer with a minimum of 64 bits  |
| Issuer Signature Algorithm   |       |       |  sha256 WithRSAEncryption {1 2 840 113549 1 1 11}  |
| Issuer Distinguished Name   |       |       |  Unique X.500 Issuing CA DN as specified in Section 7.1.4 of this CP <br> (cn=Federal Device Root CA x, o=U.S. Government, c=US) where x is optional and may vary if this CA performs a rekey |
| Validity Period   |       |       |  Expressed in UTC Time for dates until end of 2049 and Generalized Time for dates thereafter <br> No longer than 20 years from date of issue  |
| Subject Distinguished Name   |       |       |   Matches the Issuer DN   |
| Subject Public Key Information   |       |       |   4096 bit modulus, rsaEncryption {1 2 840 113549 1 1 1}   |
| Issuer Signature   |       |       |   sha256 WithRSAEncryption {1 2 840 113549 1 1 11}    |
|               |                 |              |                                       |
| **Extension** |  **Required**   | **Critical** | **Value**                             |
| subjectInfoAccess  | Mandatory | False |  id-ad-caRepository (1.3.6.1.5.5.7.48.5) <br> At least one instance of this access method that includes the URI name form to specify the location of an HTTP accessible location where CA certificates issued by the subject of this certificate may be found. This extension is required to assist in monitoring CAs. |
| basicConstraints   | Mandatory | True |  cA=True <br> Pathlen is not present |
| Subject Key Identifier   | Mandatory | False |  Octet String <br> Derived using SHA-1 hash of the public key  |
| Key Usage   | Mandatory | True | c=yes; keyCertSign, crlSign, digitalSignature and / or non-repudiation if the CA uses its key to sign OCSP responses   |
| Extended Key Usage   |       |       | Not present |
| Certificate Policies   |       |       | Not present |
| Subject Alternative Name   |       |       | Not present | 
| Authority Information Access   |       |       | Not present |
| CRL Distribution Points   |       |       | Not present |  

