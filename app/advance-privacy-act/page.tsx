import type { Metadata } from "next"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
export const metadata: Metadata = {
  title: "Privacy Policy | DataLabs",
  description: "DataLabs Privacy Policy - Learn how we collect, use, and protect your personal information.",
}

export default function AdvancePrivacyAct() {
    const dataCategories = [
    {
      category: "A. Identifiers",
      examples:
        "A real name, alias, postal address, unique personal identifier, online identifier, Internet Protocol address, email address, account name, Social Security number, driver's license number, passport number, or other similar identifiers.",
      collected: "Yes",
    },
    {
      category:
        "B. Personal information categories listed in the California Customer Records statute (Cal. Civ. Code § 1798.80(e))",
      examples:
        "A name, signature, Social Security number, physical characteristics or description, address, telephone number, passport number, driver's license or state identification card number, insurance policy number, education, employment, employment history, bank account number, credit card number, debit card number, or any other financial information, medical information, or health insurance information. Some personal information included in this category may overlap with other categories.",
      collected: "Yes",
    },
    {
      category: "C. Protected classification characteristics under California or federal law",
      examples:
        "Age (40 years or older), race, color, ancestry, national origin, religion, marital status, medical condition, physical or mental disability, sex (including gender, gender identity, gender expression, pregnancy or childbirth and related medical conditions), sexual orientation, veteran or military status, genetic information (including familial genetic information).",
      collected: "No",
    },
    {
      category: "D. Commercial information",
      examples:
        "Records of personal property, products or services purchased, obtained, or considered, or other purchasing or consuming histories or tendencies.",
      collected: "Yes",
    },
    {
      category: "E. Biometric information",
      examples:
        "Genetic, physiological, behavioral, and biological characteristics, or activity patterns used to extract a template or other identifier or identifying information, such as, fingerprints, faceprints, and voiceprints, iris or retina scans, keystroke, gait, or other physical patterns, and sleep, health, or exercise data.",
      collected: "No",
    },
    {
      category: "F. Internet or other similar network activity",
      examples:
        "Browsing history, search history, information on a consumer's interaction with a website, application, or advertisement.",
      collected: "Yes",
    },
    {
      category: "G. Geolocation data",
      examples: "Physical location or movements.",
      collected: "No",
    },
    {
      category: "H. Sensory data",
      examples: "Audio, electronic, visual, thermal, olfactory, or similar information.",
      collected: "No",
    },
    {
      category: "I. Professional or employment-related information",
      examples: "Current or past job history or performance evaluations.",
      collected: "Yes",
    },
    {
      category:
        "J. Non-public personal information (as defined in the Gramm-Leach-Bliley Act (15 U.S.C. § 6809(4)) and California Financial Information Privacy Act (Cal. Fin. Code § 4052(n)(2)))",
      examples:
        "Profile reflecting a person's preferences, characteristics, psychological trends, predispositions, behavior, attitudes, intelligence, abilities, and aptitudes.",
      collected: "No",
    },
    {
      category: "K. Inferences drawn from other personal information",
      examples:
        "Profile reflecting a person's preferences, characteristics, psychological trends, predispositions, behavior, attitudes, intelligence, abilities, and aptitudes.",
      collected: "No",
    },
  ]
  return (
    <div className="bg-white text-gray-800">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 py-12 sm:py-16 mt-20 sm:mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">
            Advance Privacy Act
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 leading-relaxed text-justify text-base sm:text-lg">
        <p>
            <strong>
                Advance Privacy Act of 2018. Effective January 1, 2020.
            </strong>
        </p>
        <p>
            This Privacy Notice for California Residents is provided as part of our compliance with the requirements of the California Consumer Privacy Act of 2018 (the “CCPA”) and supplements the information contained in the v0DataLabs Privacy Policy.  It applies solely to individual residents of the State of California.
        </p>
        <p>
            Certain exemptions apply to your rights and v0DataLabs’s obligations under the CCPA. These rights and requirements may not apply in certain situations depending on your relationship with v0DataLabs, v0DataLabs’s other legal obligations, and as otherwise provided for in the CCPA.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Legal Entities</h2>
        <p>
        v0DataLabs doing business as “v0DataLabs” and its subsidiaries and affiliates (collectively “us”, “we” and/or “v0DataLabs”).
        </p>

        <h2 className="text-2xl font-semibold mt-6">Applicability</h2>
        <p>
            Your privacy is important to us. This CCPA disclosure explains how the legal entity listed above collects, uses and discloses personal information relating to California residents.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Introduction</h2>
        <p>
           Under the CCPA, ‘Personal Information’ is information that identifies, relates to, or could reasonably be linked directly or indirectly with a particular California resident.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Information We Collect </h2>
        <p>
          We provide business-to-business products and services.  As part of providing those products and services, we collect Personal Information. In particular, we have collected the following categories of Personal Information from California residents within the last twelve (12) months:
        </p>
        <div className="w-full max-w-6xl mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Personal Information Categories</h1>
        <p className="text-muted-foreground">
          Categories of personal information we collect and whether we have collected such information in the preceding
          12 months.
        </p>
      </div>

      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="font-semibold text-left w-1/4">Category</TableHead>
              <TableHead className="font-semibold text-left w-1/2">Examples</TableHead>
              <TableHead className="font-semibold text-center w-1/4">Collected</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dataCategories.map((item, index) => (
              <TableRow key={index} className={`border-b ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                <TableCell className="font-medium align-top p-4 whitespace-normal">{item.category}</TableCell>
                <TableCell className="align-top p-4 text-sm leading-relaxed">{item.examples}</TableCell>
                <TableCell className="align-top p-4 text-center">
                  <Badge variant="outline" className="bg-white text-black border-gray-300">
                    {item.collected}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
    <p>Under the CCPA, Personal Information does not include:</p>
    <ul className="list-disc ml-6 space-y-2">
            <li>Publicly available information from government records.</li>
            <li>Deidentified or aggregated consumer information.</li>
            <li>Information from individuals who are not residents of California.</li>
            <li>Information regarding businesses.</li>
            <li>Information excluded from the CCPA’s scope, like:</li>
            <ul className="list-disc ml-6 space-y-2">
                <li>Health or medical information covered by the Health Insurance Portability and Accountability Act of 1996 (HIPPA) and the California Confidentiality of Medical Information Act (CMIA) or clinical trial data;</li>
                <li>Personal Information covered by certain sector-specific privacy laws, including the Fair Credit reporting Act (FRCA), the Gramm-Leach-Bliley Act (GLBA) or California Financial Information Privacy Act (FIPA), and the Driver’s Privacy.</li>
            </ul>
    </ul>

        <h2 className="text-2xl font-semibold mt-6">Sources of Personal Information</h2>
        <p>
          The categories of sources from whom we collected this Personal Information are:
        </p>
        <ul className="list-disc ml-6 space-y-2">
            <li>Directly from a California resident or the individual’s representatives</li>
            <li>Service Providers, Consumer Data Resellers and other third parties</li>
            <li>Public Record Sources (Federal, State or Local Government Sources)</li>
            <li>Our Affiliates</li>
            <li>Website/Mobile App Activity/Social Media</li>
            <li>Client-Directed Third Parties or Institutions representing a Client/Prospective Client</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">Use of Personal Information</h2>
        <p>
         We may use or disclose the Personal Information we collect for one or more of the following business purposes:
        </p>
        <ul className="list-disc ml-6 space-y-2">
            <li>To fulfill or meet the reason you provided the information</li>
            <li>To provide, support, personalize, and develop our products and services</li>
            <li>To create, maintain, customize, and secure your account with us</li>
            <li>To provide you with support and to respond to your inquiries, including to investigate and address your concerns and monitor and improve our responses</li>
            <li>To carry out our obligations and enforce our rights arising from any contracts entered into between you and us, including for billing and collections</li>
            <li>To improve our website and present its content to you</li>
            <li>For testing, research, analysis and product development</li>
            <li>To respond to law enforcement requests and as required by applicable law, court order, or governmental regulations</li>
            <li>To evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of our assets, whether as an ongoing concern or as part of bankruptcy, liquidation, or similar proceeding, in which personal information held by us is among the assets transferred</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">Disclosure of Personal Information</h2>
        <p>
         The categories of third parties to whom we disclosed Personal Information for our business purposes described in this privacy disclosure are:
        </p>
        <ul className="list-disc ml-6 space-y-2">
            <li>Our Affiliates and Subsidiaries</li>
            <li>Vendors and Service Providers who provide services such as website hosting, data analysis, payment processing, information technology and related infrastructure, customer service, email delivery, auditing, marketing and marketing research activities</li>
            <li>Partners and Third Parties who provide services such as payment, banking and communication infrastructure, storage, legal expertise, tax expertise, notaries and auditors, who promote v0DataLabs and its financial services and products to customers and other prospective customers</li>
            <li>Other Third Parties who enable customers to conduct transactions online and via mobile devices (at the direction of the customer)</li>
            <li>Government Agencies as required by laws and regulations</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">Your Rights Regarding Personal Information</h2>
        <p>
             Up to two times in a 12-month period, you have the right to request that we disclose  the following to you regarding our collection and use of your Personal Information in the past 12 months:
        </p>

        <ul className="list-decimal ml-6 space-y-2">
            <li>Categories of personal information we collected about you during the preceding 12 months.</li>
            <li>Categories of sources from which we collected the personal information during the preceding 12 months.</li>
            <li>Business or commercial purpose for collecting or selling your personal information during the preceding 12 months.</li>
            <li>Categories of third parties with whom we share the personal information during the preceding 12 months.</li>
            <li>Specific pieces of personal information we collected about you during the preceding 12 months.</li>
            <li>Categories of personal information we have sold/transferred and categories of third parties to whom the information was sold/transferred to during the preceding 12 months.</li>
            <li>Categories of personal information we disclosed about you for a business purpose during the preceding 12 months.</li>
        </ul>

        <p>
           You have the right to opt-out of the sale/transfer of your Personal Information unless it is necessary for our business purposes.
        </p>
        <p>
            You have the right to request the deletion of your personal information unless it is necessary for our business purposes.
        </p>
        <p>
            In addition, you have the right to ask us one time each year if we have shared personal information with third parties for their direct marketing purposes.
        </p>
        <p>
            While we do not sell Personal Information for monetary value, we may disclose Personal Information to third parties, such as our dealers, in such a way that may be considered a sale of Personal Information under CCPA. To stop such sales or the sharing of personal information, please submit a verifiable consumer request via email to us at <a className="text-purple-600 underline" href="mailto:info@datalabs.ai
">info@datalabs.ai
</a> with the following subject line: CCPA Request. 
        </p>
        <p>
            We will not discriminate against you because you exercised your rights.
        </p>

        <h2 className="text-2xl font-semibold mt-6">How to Exercise Your Rights</h2>
        <p>
            To exercise the access, data portability, and deletion rights described above, please submit a verifiable consumer request via email to us at <a className="text-purple-600 underline" href="mailto:info@datalabs.ai">info@datalabs.ai</a> with the following subject line: CCPA Request.
        </p>
        <p>
            Only you or a person registered with the California Secretary of State that you authorize to act on your behalf may make a verifiable consumer request related to your personal information. You may also make a verifiable consumer request on behalf of your minor child.
        </p>
        <p>
            The verifiable consumer request must:
        </p>
        <ul className="list-disc  ml-6 space-y-2">
            <li>Provide sufficient information that allows us to reasonably verify you are the person about whom we collected personal information or an authorized representative.</li>
            <li>Describe your request with sufficient detail that allows us to properly understand, evaluate, and respond to it.</li>
        </ul>

        <p>
            We will try to respond to a verifiable consumer request within 45 days of its receipt. If we require more time (up to 90 days), we will inform you of the reason and extension period in writing (either by mail or electronically).
        </p>

        <p>
            The response we provide will also explain the reasons we cannot comply with a request, if applicable. For data portability requests, we will select a format to provide your personal information that is readily useable and should allow you to transmit the information from one entity to another entity. We do not charge a fee to process or respond to your verifiable consumer request unless it is excessive, repetitive, or manifestly unfounded. If we determine that the request warrants a fee, we will tell you why we made that decision and provide you with a cost estimate before completing your request.
        </p>

        <p>
            You may exercise your right to opt out of the sale of personal information through an authorized agent. An authorized agent must be registered with the California Secretary of State. If a consumer uses an authorized agent to exercise these opt out rights, then we may require the customer to verify their own identity with us and acknowledge that they provided the agent with written permission to act on the consumer’s behalf. 
        </p>

        <h2 className="text-2xl font-semibold mt-6">Policy Updates</h2>
        <p>
          We will review this policy on no less than an annual basis and may update it at any time to reflect changes to our information practices.
        </p>
      </div>
    </div>
  )
}
