# Overview
This repository is for the open development of an x509 Certificate Policy for the US Federal Government.  This repository supports the efforts to establish a new Public Trust Device Root and an issuing certification authority infrastructure focused on .gov and .mil websites.

For information on US Federal Executive Branch policy for websites and HTTPS, please review the Memorandum 15-13 HTTPS Everywhere documentation. (https://https.cio.gov).

## Scope
The scope of the effort includes:

* TLS certificates only
* Webservices on the Internet
* Certificate Transparency (CT)
* No Name Redaction
* Name Constraints for .gov and .mil

## Repository organization
This repository supports the development and version control for the Certificate Policy and Certificate Profiles, and the distribution of the policy and profiles digitally on a website.  The Certificate Policy and Certificate Profiles are located in this top folder.  All other folders contain information for the website.  

- [Certificate Policy](certificate-policy.md)

Certificate profiles:
- [Self-Signed Root CA Certificate Profile](certificate-profile-root-CA.md)
- [Intermediate or Subordinate CA Certificate Profile](certificate-profile-subordinate-CA.md)
- [Server Authentication Certificate Profile](certificate-profile-server-authentication.md)
- [Delegated OCSP Responder Certificate Profile](certificate-profile-OCSP-responder.md)

Profiles for the OCSP _Responses_ and the Certificate Revocation Lists.
- [OCSP Response Profile](ocsp-response-profile.md)
- [CRL Profile](crl-profile.md)

## Contributing

For information on how to contribute to the site, review [How to Comment](HOWTOCOMMENT.md/). The source repository exists [here](https://github.com/uspki/policies/).

Direct changes and line edits to the content may be submitted through a pull request or by opening Issues for discussion. You do not need to install any software to submit content.

## Maintainers

This repository is for open and transparent public reviews and contributions.  The General Services Administration is supporting this effort and maintains the repository for the US Federal Government.

Please contact eric.mill at gsa dot gov or lachelle.levan at gsa dot gov with questions.

### Public domain

This work is based on the CA/Browser Forum Baseline Requirements,  which is licensed under the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).

All contributions to this project waive copyright and related rights in the work worldwide through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/). Any original contributions by United States government employees are automatically in the public domain within the United States.

As stated in [CONTRIBUTING](CONTRIBUTING.md):

> All contributions to this project will be released into the public domain  worldwide through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> By submitting a pull request, you are agreeing to comply with this waiver of copyright interest.
