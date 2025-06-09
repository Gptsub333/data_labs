import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | DataLabs",
  description: "DataLabs Privacy Policy - Learn how we collect, use, and protect your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 py-12 sm:py-16 mt-20 sm:mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">
            Privacy Policy
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 leading-relaxed text-justify text-base sm:text-lg">
        <p>
          This Privacy Policy discloses the privacy practices for <u><a className="text-purple-600 underline" href="https://www.datalabscorp.com/">www.datalabscorp.com</a></u> and applies solely to information collected through this website (Site). The terms “we”, “us”, or “our” in this Site refers to Nexi LLC and its affiliates or subsidiaries that reference or link to this Policy, including but not limited to, Nexi LLC.
        </p>
        <p>
          We reserve the right to change this Privacy Policy from time to time. The Privacy Policy is subject to and incorporates by reference our Terms of Use, including its limitation on liability.
        </p>
        <p>
          Your use of our Site and provision of Personal Information online constitutes acceptance and understanding of this Policy as in effect at the time of your submission.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Types of Personal Information We Collect</h2>
        <p>
         We do not collect Personal Information from visitors to our Site unless you voluntarily decide to transmit it to us through one of the Site features, provided e-mail addresses or as part of an application. Certain features of our Site may require you to create an account. When you create an account with us, we may collect your name, email address, contact information, a username and password that you will use to access your account and other information. In addition, to submit a question, comment, or post to a blog, you may be required to submit your name and email address, and we may also ask you for other optional information, such as your business’s website address.
        </p>
        <p>
            We also collect the following types of information (Personal or otherwise) through the Site:
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Information provided on an application;</li>
          <li>Information to verify an individual’s identity (e.g., social security number, an unexpired government identification with a photo, user name and password, etc.);</li>
          <li>Information about your visits to and use of this Site or the websites of third-party servicers to help us maintain the appropriate features, functionality, and user experience;</li>
          <li>Individual and business financial or credit bureau information;</li>
          <li>Personal Information contained in government filings or legal agreements (e.g., corporate formation agreements, business licenses, lease or loan agreements, and business tax returns);</li>
          <li>Any other Personal Information you submit or upload through our Site or to one of our email addresses, including information you post to our Site in a comment, blog or testimonial;</li>
          <li>The website from which you came to our Site and your IP address, browser type and other information related to the device from which you accessed the Site;</li>
          <li>Your or your business’s geolocation, through various GPS or other geolocator tools that use the IP address of your device to detect a user’s location; and</li>
          <li>Information collected through our Site data or through an ISO (independent sales organization), or other data that we receive from other sources, such as public records, and other background information supplied by information services or third parties.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">What We Do With the Personal Information Collected</h2>
        <p>
          We will use the information you provide to us to evaluate your business’s eligibility for products provided through Nexi, respond to your inquiries, and to provide you with information relating to our company or services that we believe you may find of interest. We may also use that information to market products or services to you by calls or text messages to mobile, cellular or similar devices and by using an automated telephone dialing system and/or artificial voices or prerecorded messages, even if you incur charges for receiving such communications and by any other applicable medium such as mail, email and facsimile.*
        </p>
        <p>We may disclose Personal Information to third parties for the following purposes:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>In response to a subpoena or other legal process by a governmental entity or third party, or if otherwise required by law;</li>
          <li>To protect or enforce our rights or property;</li>
          <li>In the event of the sale or dissolution (bankruptcy) of all of our assets, in which case, you will be notified thereafter by a prominent notice on our Web site of any change in ownership or uses of your personal information, as well as any choices you may have regarding your personal information;</li>
          <li>To third parties involved in the process of providing services to us or you or performing functions on our behalf, such as contractors, customer service providers, credit bureaus, and collection agencies. Those contractors and service providers are permitted to use your Personal Information only for the purpose for which it has been provided and may not disclose it to any other third party except at our express direction and in accordance with this Privacy Policy;</li>
          <li>To our affiliates, subsidiaries and other third parties for marketing, advertising, research or other business purposes;</li>
          <li>To the ISO that referred you to us—for example, in connection with reporting on your progress in the application process or in connection with calculating or reporting on the commission due to the referral source or otherwise;</li>
          <li>To provide information or promotional material that may be of interest to you*;</li>
          <li>To our investors, partners**, or auditors in the course of their review or auditing us;</li>
          <li>To provide products or services requested; and</li>
          <li>To our vendors, who may use the information to further improve their database services to us.</li>
        </ul>
        <p className="italic text-sm">
          *If, at any time, you would like to stop receiving these promotional e-mails, you may follow the opt-out instructions contained in any such e-mail. Please note that it may take up to 10 business days for us to process opt-out requests. If you opt-out of receiving emails or promotions from us, we still may send you e-mails about your account, your application or any products or services you have requested or received from us, or for other customer service purposes.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Cookies and Third-Party Analytics</h2>
        <p>
          A cookie is a text file stored on a site visitor’s hard drive to help us improve your access to our Site and identify repeat visitors to our Site. Usage of a cookie is in no way linked to any personally identifiable information, though we can associate a cookie with any identifying information that is or has been provided to us while visiting our Site. We or our third-party service providers use cookies that remain on your computer for a specified period of time or until they are deleted (persistent cookies). These cookies record clickstream information (data reporting the URLs, or names of the pages, on our Site that have been visited). We may also use cookies that exist only temporarily during an online session (session cookies). These cookies allow us to identify you temporarily as you move through the Site. We also use cookies in the restricted client and sales representative limited-access portions of our Site. Most browsers allow users to refuse cookies, but doing so may impede the functionality of some portions of our Site.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Social Media Widgets</h2>
        <p>
         Our Site includes Social Media Features, such as the Facebook Like button and Widgets, such as the “Share This” button or interactive mini-programs that run on our Site. These Features may collect your IP address, which page you are visiting on our site, and may set a cookie to enable the Feature to function properly. Social Media Features and Widgets are either hosted by a third party or hosted directly on our Site. Your interactions with these Features are governed by the privacy policy of the company providing it.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Third Parties</h2>
        <p>
          We may also engage third parties, including without limitation, Google Analytics and Webtrends to track and analyze Site activity on our behalf.  We use the data collected by such third parties to help us administer and improve the quality of the Site, analyze usage of the Site, and provide a more enhanced user experience on the Site, such as personalizing and delivering relevant offers and content based on user activity on the Site. The use of cookies by our third party partners is not covered by our Privacy Policy, as we do not have access or control over these cookies. We and some of our third party vendors and partners use technologies such as: cookies, beacons, tags and scripts in analyzing trends, administering our site, tracking users’ movements around the site and to gather demographic information about our user base as a whole. We may receive reports based on the use of these technologies by these companies on an individual as well as aggregated basis. If you wish not to be tracked, turn off javascript in your browser. However please note that without javascript turned on, our funding applications may not function as designed.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Security</h2>
        <p>
          Nexi takes reasonable steps to safeguard your Personal Information through physical, electronic, and operational policies and practices. Data can only be read or written through defined service access points, the use of which is password-protected. The physical security of the data is achieved through a combination of network firewalls (there is no direct communication allowed between the database server and the Internet) and servers with operating systems, all housed in a secure facility.
        </p>
        <p>
            Access to the system is controlled. Employees are granted access to Personal Information on a need-to-know basis in order to perform a specific job (for example, billing or customer service).  We use encryption to protect your Personal Information transmitted online, as well as offline. When we contact you about your account or to confirm a funds transfer, we only reference the last four digits of your social security number. The computers/servers in which we store personally identifiable information are kept in a secure environment.
        </p>

        <p>
            We will also ensure the proper disposal of your Personal Information—regardless of the source.
        </p>

        <h2 className="text-2xl font-semibold mt-6">User Access</h2>
        <p>
          If your personal information changes, or if you no longer want updates or to be contacted for new products, you may correct, update, amend, delete/remove or deactivate your contact information by emailing our Customer Support at <a href="mailto:info@datalabs.ai" className="text-purple-600 underline">
            info@datalabs.ai
          </a>{' '}
         or by contacting us by telephone or postal mail at the contact information listed below. We will update your file within 30 calendar days.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Data Retention</h2>
        <p>
         We will retain your information for as long as your account is active and thereafter as long as reasonably useful for internal purposes to improve our services and also to provide you with information in the future regarding our and our partners’ products and services. We may be required to retain your information to comply with our legal obligations, resolve disputes, and ensure the enforcement of agreements.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Information Posted to Our Site</h2>
        <p>
          We may, from time to time, allow users to post information to our Site, such as comments or testimonials. Any information that you post to our Site becomes public information and may be viewable by other users, as well as visitors to our Site (this is not true of uploaded documents as part of the funding process). In addition, your name, as well as other optional information you choose to submit along with the information you post, will be publicly displayed. We are not responsible for the privacy of any information that you choose to post to our Site, or for the accuracy of any information contained in those postings. We cannot prevent such information from being used by others in a manner that may violate this Privacy Policy, the law, or your personal privacy. Your posting of any content to any of the Site is subject to our <a className="text-purple-600 underline" href="/terms-of-use">Terms of Use</a>.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Third-Party Links</h2>
        <p>
          At times, our Site may contain links to other, third-party websites. Any access to and use of such linked websites is not governed by this Privacy Policy but, instead, is governed by the privacy policies of those third-party websites. We are not responsible for the information practices of such third-party websites.
        </p>

        <h2 className="text-2xl font-semibold mt-6">International Users</h2>
        <p>
         The Site is hosted in the United States. If you are accessing the Site from outside the United States, by providing your information to the Site, you are consenting to and authorizing the transfer of your information to the United States for storage, use, processing, maintenance, and onward transfer of such information to other entities regardless of their location in accordance with this Privacy Policy and our <a className="text-purple-600 underline" href="/terms-of-use">Terms of Use</a>. You are also consenting to the application of United States law in all matters concerning the Site.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Session Time-Outs</h2>
        <p>
          We also employ session time-outs to protect your account. You will be logged out of the Site automatically after a specified period of inactivity. This time-out feature reduces the risk of others being able to access your account if you leave your computer unattended.
        </p>

        <h2 className="text-2xl font-semibold mt-6">What You Can Do to Protect Your Personal Information</h2>
        <p>
         In addition to our own efforts, you can take several precautions to protect the security of your computer and Personal Information. For instance, you should create and use a complex password, using numbers, a combination of small and large capital letters, and special characters. You should avoid using any information that others can easily learn about you, such as your mother’s maiden name, a family member’s name or birthday.  We also recommend that you change your password frequently. You should never share your password with anyone, or leave it written down in an unsecure area.
        <br/>
        <br/>
            You can also install and regularly update antivirus and firewall software to protect your computer or device from external attacks by malicious users.  If you use a computer that can be accessed in a public area (e.g., library, coffee shop, etc.), we recommend that you take special precautions to protect the security of your account and Personal Information. When you are finished visiting our Site, you should log out completely, close the browser window and clear the browser’s cache files.
        <br/>
        <br/>
            You should also be aware of fraudulent attempts to gain access to your account information known as “phishing.” Phishing is a tactic used by scammers to lure people to a phony website through the use of a genuine-looking email purporting to be from a legitimate company. Either in the email itself or on this fake website site, scammers will ask for login information to gain access to people’s accounts and withdraw their money. Nexi will never ask you for your login information in the context of any email. In general, you can protect yourself against phishing by never providing login or Personal Information via an email. You should always ensure the Nexi URL that you are provided begins with: <a className="text-purple-600 underline" href="https://www.datalabscorp.com/">https://www.datalabscorp.com/</a>
        </p>

        <h2 className="text-2xl font-semibold mt-6">Your California Privacy Rights</h2>
        <p>
         If you are a California resident, California may provide you with additional rights regarding our use of your personal information. To learn more about your California privacy rights click here.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Changes to This Policy</h2>
        <p>
         We may update this Privacy Policy to reflect changes to our information practices. If we make any material changes we will post a revised policy on this Site prior to the change becoming effective. We encourage you to periodically review this page for the latest information on our privacy practices.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Contact Us</h2>
        <p>
            You may use the following information to contact us with any questions or concerns about this Privacy Policy:
            <br/>
          <strong>Phone:</strong> 609-745-6789<br />
          <strong>Email:</strong>{' '}
          <a href="mailto:info@datalabs.ai" className="text-purple-600 underline">
            info@datalabs.ai
          </a>
        </p>
      </div>
    </div>
  )
}
