---
layout: page
title: U.S. Federal Public Trust TLS PKI Certificate Profiles
permalink: /certificateprofiles/
sidenav: profile
sticky_sidenav: true

subnav:
  - text: Self-Signed Root CA
    href: "#self-signed-root-ca-certificate-profile"
  - text: Subordinate CA
    href: "#subordinate-ca-certificate-profile"
  - text: Server Authentication
    href: "#server-authentication-certificate-profile"
  - text: Delegated OCSP Responder
    href: "#delegated-ocsp-responder-certificate-profile"
  - text: CRL Profile
    href: "#crl-profile"
  - text: OCSP Response Profile
    href: "#ocsp-response-profile"

---
## Certificate Profiles

{% include alert-info.html heading="Certificate Policy Appendix D" content="The certificate profiles are included as Appendix D in the Certificate Policy.  This page directly references Appendix D content for easier navigation." %}

This section specifies the X.509 version 3 certificate profiles, version 2 Certificate Revocation List (CRL) profile, and Online Certificate Status Protocol (OCSP) Response profile for the U.S. Federal Public Trust TLS PKI Certificate Policy.  In cases where the profiles and Section 7 of this CP are in conflict, Section 7 takes precedence and is authoritative.

Certificates issued under this policy are categorized as CA Certificates, Subscriber Certificates or Infrastructure Certificates. This Certificate Policy defines five (5) different types of certificates (See Section 1.1.3) and four associated certificate profiles.  

| **Category** | **Certificate Type**  | **Profile**  |
| :-------- | :----------------------- | :----------------------- |
| CA Certificate | Root CA Certificate | Self-Signed Root CA Certificate Profile |  
| CA Certificate | Subordinate CA Certificate | Subordinate CA Certificate Profile |
| Subscriber Certificate | Domain Validation TLS Server Authentication Certificates |  Server Authentication Certificate Profile |
| Subscriber Certificate | Organization Validation TLS Server Authentication Certificates |  Server Authentication Certificate Profile |
| Infrastructure Certificate | Delegated OCSP Responder Certificates |  Delegated OCSP Responder Certificate Profile |

There are two profiles covering the Certificate Revocation Lists and OCSP Responses.

| **Type** | **Profile**  |
| :-------- | :----------------------- |
| Certificate Revocation Lists |  CRL Profile |
| Online Certificate Status Protocol (OCSP) Responses | OCSP Response Profile |


{% include_relative certificate-profile-root-CA.md %}  
{% include_relative certificate-profile-subordinate-CA.md %}  
{% include_relative certificate-profile-server-authentication.md %}  
{% include_relative certificate-profile-OCSP-responder.md %}  
{% include_relative crl-profile.md %}
{% include_relative ocsp-response-profile.md %}  
