---
layout: base
title: Request for Comment
permalink: /requestcomment/
---
Comments should be submitted via **[this web form]({{ site.repo }}/issues/new){:target="_blank"}** (GitHub account required) or sent to: **[devicepki@gsa.gov](mailto:devicepki@gsa.gov)**.

Comments received will be publicly posted [to this repository]({{ site.repo }}/issues){:target="_blank"} (along with any included names or affiliations), and comments will be accepted until **October 30, 2017**.

{% include alert-info.html content="A Certificate Policy contains technical, operational, and legal terms intended for a particular audience of readers.  We recognize that a Certificate Policy may not incorporate plain language.  If you have questions or think the intent of any policy statement is not clear, please add an issue or comment. Your comments may help us improve all certificate policies and practices." %}

## Key Questions

1. Certificate Transparency is required in the proposed Certificate Policy and architecture.  
  - Are the requirements and policy statements for certificate transparency clear and accurate?

2. The draft [CA / Browser Forum Baseline Requirements Version 1.5.2](https://cabforum.org/wp-content/uploads/CA-Browser-Forum-BR-1.5.2-redlined.pdf){:target="_blank"} _re-introduces_ the additional seven methods for Section 3.2.2.4 - Validation of Domain Authorization or Control. Adopting automation and reducing the direct and indirect costs of manual procedures is _one_ of our goals.
  - Which of the seven additional methods should be considered for the Federal Public Device PKI Certificate Policy and CAs?
  - Which of the seven additional methods should _not_ be considered for the Federal Public Device PKI Certificate Policy and CAs?

3.  The policy was developed for Federal Government and the operation of a new root and issuing certification authorities. This policy attempts to address Internet PKI requirements defined and governed by five (5) [communities](#references).
  - Are there requirements for transport layer security (TLS) certificates that we have missed?
  - Are there requirements that we have misunderstood?

4. The Certificate Policy was developed for a new public key infrastructure focused on certificates used to identify Federal Government Internet services.  The Certificate Policy attempts to promote a separation between the public key infrastructures used to secure federal _enterprise_ services and devices, and this new infrastructure for certificates to be used for Internet PKI and Public Trust.
  - Are the policy statements clear on the difference between Federal enterprise webservices and devices, and Federal internet webservices and devices?
  - Can the policy statements be improved to allow for more flexibility while not posing any risk or degrading the intent and purpose of Internet PKI and public trust?  
  - Do the policy statements adequately support the use of technical controls to ensure our certification authorities adhere to policies?
  - Should this separation be revisited and if so, what are the mission scenarios?

## References
- [CA / Browser Forum](https://cabforum.org/){:target="_blank"}
- [Microsoft Trust Store Program](https://technet.microsoft.com/en-us/library/cc751157.aspx){:target="_blank"}
- [Apple Trust Store Program](https://www.apple.com/certificateauthority/ca_program.html){:target="_blank"}
- [Mozilla Community and Trust Store Program](https://www.mozilla.org/en-US/about/governance/policies/security-group/certs/){:target="_blank"}
- [Google Chromium Certificate Transparency Policy](https://www.chromium.org/Home/chromium-security/certificate-transparency){:target="_blank"}
