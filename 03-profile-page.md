---
layout: base
title: Certificate Profiles
permalink: /certificateprofiles/

subnav:
  - text: Self-Signed Root CA
    href: "#self-signed-root-ca-certificate-profile"
  - text: Subordinate CA
    href: "#intermediate-or-subordinate-ca-certificate-profile"
  - text: Server Authentication
    href: "#server-authentication-certificate-profile"
  - text: Delegated OCSP Responder
    href: "#delegated-ocsp-responder-certificate-profile"
  - text: OCSP Response Profile
    href: "#ocsp-response-profile"
  - text: CRL Profile
    href: "#crl-profile"

---
{% capture certprofile %}{{ site.repo_url }}/certificate-profile-root-CA.md{% endcapture %}

These profiles are in draft and will be added as an Appendix to the Certificate Policy.  In cases where the profiles and Section 7 of the Certificate Policy are in conflict, Section 7 takes precedence and is authoritative.

Four certificate profiles covered by this Certificate Policy are defined.  

- [Self-Signed Root CA Certificate Profile](#self-signed-root-ca-certificate-profile)
- [Intermediate or Subordinate CA Certificate Profile](#intermediate-or-subordinate-ca-certificate-profile)
- [Server Authentication Certificate Profile](#server-authentication-certificate-profile)
- [Delegated OCSP Responder Certificate Profile](#delegated-ocsp-responder-certificate-profile)

In addition, there are two profiles covering the OCSP _Responses_ and the Certificate Revocation Lists.

- [OCSP Response Profile](#ocsp-response-profile)
- [CRL Profile](#crl-profile)

{% include_relative certificate-profile-root-CA.md %}  
{% include_relative certificate-profile-subordinate-CA.md %}  
{% include_relative certificate-profile-server-authentication.md %}  
{% include_relative certificate-profile-OCSP-responder.md %}  

{% include_relative ocsp-response-profile.md %}  
{% include_relative crl-profile.md %}
