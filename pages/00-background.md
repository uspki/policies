---
layout: base

title: Background
permalink: /
---

Securing Federal Government web services, and delivering information to our consumers and partners in a trusted and privacy-enhancing manner, is a priority for Federal Government teams across all our missions.

 - Office of Management and Budget M-15-13, [“A Policy to Require Secure Connections across Federal Websites and Web Services”](https://https.cio.gov/){:target="_blank"}

Federal Government teams are working to ensure our missions have secure, cost-effective, and stable _services_ to secure these web services.   We have developed this proposed [Certificate Policy]({{site.baseurl}}/certificatepolicy) to address emerging Internet requirements and to support the establishment of a **new** Public Trust Device Public Key Infrastructure (PKI) for .mil and .gov websites.

We welcome and encourage public and community [comment]({{site.baseurl}}/requestcomment) on this draft Certificate Policy.  

- [Scope](#scope)
- [Relationship to Federal Public Key Infrastructure](#relationship-to-federal-public-key-infrastructure)

## Scope
The browser community, commercial and non-profit trust store owners, and Standards Development Organizations have rapidly been adopting emerging technology and new requirements for the public Internet and Hypertext Transfer Protocol (HTTPS).  These requirements are intended to protect consumers, protect website operators from spoofing incidents, and promote an open and transparent trust model across the globe.   These requirements include:

- Requiring Certificate Transparency (CT) starting in April 2018
- Requiring increasingly shorter lifetimes of the validity of certificates used for publicly trusted web services
- Public disclosure of all certificate policies, practices and procedures by all Certification Authorities

This Certificate Policy was developed for Federal Government missions and attempts to address Internet PKI requirements defined and governed by five (5) communities.

- [CA Browser Forum](https://cabforum.org/){:target="_blank"}
- [Microsoft Trust Store Program](https://technet.microsoft.com/en-us/library/cc751157.aspx){:target="_blank"}
- [Apple Trust Store Program](https://www.apple.com/certificateauthority/ca_program.html){:target="_blank"}
- [Mozilla Community and Trust Store Program](https://www.mozilla.org/en-US/about/governance/policies/security-group/certs/){:target="_blank"}
- [Google Chromium](https://sites.google.com/a/chromium.org/dev/Home/chromium-security/certificate-transparency){:target="_blank"}

This Certificate Policy was scoped to encompass:

- _Organizational Validation_ and _Domain Validation_ certificates for domains
- .mil and .gov web services intended to be trusted by the public


## Relationship to Federal Public Key Infrastructure
The Federal Government currently manages the Federal Public Key Infrastructure, a trust framework of over one hundred (100) certification authorities used to issue and manage person identity and enterprise device identity certificates for Federal Government and mission partners. The current Federal Public Key Infrastructure (FPKI) is managed and operated as a _mesh_ public key infrastructure originally intended to establish trust across related communities of interest.

Government teams recognized the need to create a _new_ Certificate Policy and proposed infrastructure focused on Internet PKI requirements.  This draft Certificate Policy and proposed infrastructure will not have cross-certificates with the existing Federal Public Key Infrastructure.  This is one step towards new services intended to support the mission needs, and:

- Remove dependencies between the certificate policies and infrastructures,
- Clearly separate person identity, government enterprise device identity, government code signing, government time stamping, and public trust (Internet) web services,
- Support automation for the missions, and
- Improve customer experience and public transparency for Federal Government Internet Services.

The Federal Public Key Infrastructure Policy Authority will maintain the governance and voting rights to the management of this draft Certificate Policy.   
