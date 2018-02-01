---
layout: base

title: Background
permalink: /
---

Securing Federal Government web services and delivering information to our consumers and partners in a trusted and privacy-enhancing manner is a priority for Federal Government teams across all our missions.

Federal Government teams are working to ensure our missions have secure, cost-effective, and stable _services_ to secure these web services.   We developed this [Certificate Policy]({{site.baseurl}}/certificatepolicy) to address Internet PKI requirements and to support the establishment of the **new** U.S. Federal Public Trust TLS Public Key Infrastructure (PKI) for .mil and .gov web services.

We welcome and encourage public and community [comment]({{site.baseurl}}/comment) on this Certificate Policy.  

- [Scope](#scope)
- [Relationship to Federal Public Key Infrastructure](#relationship-to-federal-public-key-infrastructure)

## Scope
The browser community, commercial and non-profit trust store owners, and Standards Development Organizations have rapidly been adopting emerging technology and new requirements for the public Internet and Hypertext Transfer Protocol (HTTPS).  These requirements are intended to protect consumers, protect website operators from spoofing incidents, and promote an open and transparent trust model across the globe.   These requirements include:

- Requiring Certificate Transparency (CT) starting in April 2018
- Requiring increasingly shorter lifetimes of the validity of certificates used for publicly trusted web services
- Public disclosure of all certificate policies, practices and procedures by all Certification Authorities

This Certificate Policy was developed for Federal Government missions and addresses Internet PKI requirements defined and governed by six (6) communities.

- Federal Government security requirements, standards and missions
- [CA Browser Forum](https://cabforum.org/){:target="_blank"}
- [Microsoft Trust Store Program](https://technet.microsoft.com/en-us/library/cc751157.aspx){:target="_blank"}
- [Apple Trust Store Program](https://www.apple.com/certificateauthority/ca_program.html){:target="_blank"}
- [Mozilla Community and Trust Store Program](https://www.mozilla.org/en-US/about/governance/policies/security-group/certs/){:target="_blank"}
- [Google Chromium](https://www.chromium.org/Home/chromium-security/certificate-transparency){:target="_blank"}

This Certificate Policy was scoped to encompass:

- _Organizational Validation_ and _Domain Validation_ certificates for domains
- .mil and .gov web services intended to be trusted by public users, consumers and partners


## Relationship to Federal Public Key Infrastructure
The Federal Government currently manages the Federal Public Key Infrastructure, a trust framework of over one hundred (100) certification authorities used to issue and manage person identity and enterprise device identity certificates for the U.S. Federal Government and mission partners. The current Federal Public Key Infrastructure (FPKI) is managed and operated as a _bridged_ public key infrastructure originally intended to establish trust across related communities of interest.

Government teams recognized the need to create a _new_ Certificate Policy and infrastructure focused on Internet PKI requirements.  The CAs operating under this Certificate Policy in the new infrastructure will not have cross-certificates with any existing Federal Public Key Infrastructure CAs.  This is one step towards new purpose driven services intended to support the mission needs, and:

- Separate the certificate policies and infrastructures
- Delineate person identity, government enterprise device identity, government code signing, government time stamping, and public trust (Internet) web services
- Support automation for the missions
- Improve customer experience and public transparency for Federal Government public web services

The Federal Public Key Infrastructure Policy Authority maintains the governance and voting rights to manage this Certificate Policy.   
