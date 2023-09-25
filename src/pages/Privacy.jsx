import React, { useRef } from "react";

const Privacy = () => {
  const informationCollectRef = useRef(null);
  const interpretationRef = useRef(null);
  const definitionRef = useRef(null);
  const collectingPersonalDataRef = useRef(null);
  const socialMediaRef = useRef(null);
  const trackTechRef = useRef(null);
  const personalDataRef = useRef(null);
  const disclosureRef = useRef(null);
  const legalRef = useRef(null);
  const securityRef = useRef(null);
  const reviewRef = useRef(null);
  const childPrivacyRef = useRef(null);
  const linkRef = useRef(null);
  const changesRef = useRef(null);
  const contactRef = useRef(null);
  const retentionRef = useRef(null);
  const transferRef = useRef(null);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="flex items-start max-w-screen justify-between mb-[7rem] p-5">
        <div className="hidden lg:flex lg:flex-col bg-base-100 mr-5 lg:rounded-md lg:w-[175vh]">
          <ul className="flex flex-col items-start p-4 text-xl cursor-pointer font-bold">
            <li onClick={() => scrollToRef(informationCollectRef)}>
              Types of Information We Collect
            </li>
            <li className="divider"></li>
            <li onClick={() => scrollToRef(interpretationRef)}>
              Interpretation
            </li>
            <li className="divider"></li>
            <li onClick={() => scrollToRef(definitionRef)}>Definitions</li>
            <li className="divider"></li>
            <li onClick={() => scrollToRef(collectingPersonalDataRef)}>
              Collecting and using your personal data
            </li>
            <li className="divider"></li>
            <li onClick={() => scrollToRef(socialMediaRef)}>
              Information from third-party social media services
            </li>
            <li className="divider"></li>
            <li onClick={() => scrollToRef(trackTechRef)}>
              Tracking technologies and cookies
            </li>
            <li className="divider"></li>
            <li onClick={() => scrollToRef(personalDataRef)}>
              use of your personal data
            </li>
            <li className="divider"></li>
            <li onClick={() => scrollToRef(retentionRef)}>
              Retention of your personal Data
            </li>
            <li className="divider"></li>
            <li onClick={() => scrollToRef(transferRef)}>
              Transfer of your personal data
            </li>
            <li className="divider"></li>
            <li onClick={() => scrollToRef(disclosureRef)}>
              Disclosure of Your Personal Data{" "}
            </li>
            <li className="divider"></li>
            <li onClick={() => scrollToRef(legalRef)}>
              Other legal requirements
            </li>
            <li className="divider"></li>
            <li onClick={() => scrollToRef(securityRef)}>
              Security of Your Personal Data
            </li>
            <li className="divider"></li>
            <li onClick={() => scrollToRef(reviewRef)}>
              Review / Update / Delete collected information about users.
            </li>
            <li className="divider"></li>
            <li onClick={() => scrollToRef(childPrivacyRef)}>
              Children's Privacy
            </li>
            <li className="divider"></li>
            <li onClick={() => scrollToRef(linkRef)}>
              Links to Other Websites
            </li>
            <li className="divider"></li>
            <li onClick={() => scrollToRef(changesRef)}>
              Changes to this Privacy Policy
            </li>
            <li className="divider"></li>
            <li onClick={() => scrollToRef(contactRef)}>Contact Us</li>
          </ul>
        </div>
        <div className="flex flex-col gap-8 items-center text-justify">
          <h1 className="font-bold text-2xl">Privacy Policy</h1>
          <div className="flex flex-col gap-4 items-start w-sm">
            <div ref={informationCollectRef} className="flex flex-col gap-4 ">
              <h1 className="font-bold text-xl">
                Types of Information We Collect
              </h1>
              <p>
                This Privacy Policy defines Our policies and procedures on the
                collection, use and disclosure of the user information when they
                use the Service and tells You about Your privacy rights and how
                the law protects You.
              </p>
              <p>
                We use Your Personal data to provide and improve the Service. By
                using the Service, You agree to the collection and use of
                information in accordance with this Privacy Policy
              </p>
            </div>

            <div ref={interpretationRef} className="flex flex-col gap-4">
              <h1 className="font-bold text-xl">Interpretation</h1>
              <p>
                The words of which the initial letter is capitalized have
                meanings defined under the following conditions. The following
                definitions shall have the same meaning regardless of whether
                they appear in singular or in plural.
              </p>
            </div>

            <div ref={definitionRef} className="flex flex-col gap-4">
              <h1 className="font-bold text-xl">Definitions</h1>
              <p>For the purposes of this Privacy Policy:</p>
              <ul className="flex flex-col gap-4">
                <li>
                  <span className="font-bold">- Account</span> means a unique
                  account created for You to access our Service or parts of our
                  Service.
                </li>
                <li>
                  <span className="font-bold">- Company</span> (referred to as
                  either "the Company", "We", "Us" or "Our" in this Agreement)
                  refers to ICN, Sanepa Height, Lalitpur, Nepal.
                </li>
                <li>
                  <span className="font-bold">- Cookies</span> are small files
                  that are placed on Your computer, mobile device or any other
                  device by a website, containing the details of Your browsing
                  history on that website among its many uses.
                </li>
                <li>
                  <span className="font-bold">- Device</span> are small files
                  that are placed on Your computer, mobile device or any other
                  device by a website, containing the details of Your browsing
                  history on that website among its many uses.
                </li>
                <li>
                  <span className="font-bold">- Personal Data</span> is any
                  information that relates to an identified or identifiable
                  individual.
                </li>
                <li>
                  <span className="font-bold">- Service</span> refers to the
                  website
                </li>
                <li>
                  <span className="font-bold">- Service Provider</span> means
                  any natural or legal person who processes the data on behalf
                  of the Company. It refers to third-party companies or
                  individuals employed by the Company to facilitate the Service,
                  to provide the Service on behalf of the Company, to perform
                  services related to the Service or to assist the Company in
                  analyzing how the Service is used.
                </li>
                <li>
                  <span className="font-bold">- Usage Data</span> refers to data
                  collected automatically, either generated by the use of the
                  Service or from the Service infrastructure itself (for
                  example, the duration of a page visit).
                </li>
                <li>
                  <span className="font-bold">- Website</span> refers to
                  Marketplacenepal, accessible from
                  https://www.marketplacenepal.com
                </li>
                <li>
                  <span className="font-bold">- You</span> means the individual
                  accessing or using the Service, or the company, or other legal
                  entity on behalf of which such individual is accessing or
                  using the Service, as applicable.
                </li>
              </ul>
            </div>
            <div
              ref={collectingPersonalDataRef}
              className="flex flex-col gap-4"
            >
              <h1 className="font-bold text-xl">
                Collecing your Personal Data:
              </h1>
              <p>Types of Data Collected :</p>
              <p>
                <span className="font-bold">- Personal Data</span> While using
                Our Service, We may ask You to provide Us with certain
                personally identifiable information that can be used to contact
                or identify You. Personally identifiable information may
                include, but is not limited to:
              </p>
              <ul>
                <li>- Email Address</li>
                <li>- First Name and Last Name</li>
                <li>- Usage Data</li>
              </ul>
              <p>
                <span className="font-bold">- Usage Data</span> Usage Data is
                collected automatically when using the Service.
              </p>
              <p>
                Usage Data may include information such as Your Device's
                Internet Protocol address (e.g. IP address), browser type,
                browser version, the pages of our Service that You visit, the
                time and date of Your visit, the time spent on those pages,
                unique device identifiers and other diagnostic data.
              </p>
              <p>
                When You access the Service by or through a mobile device, We
                may collect certain information automatically, including, but
                not limited to, the type of mobile device You use, Your mobile
                device unique ID, the IP address of Your mobile device, Your
                mobile operating system, the type of mobile Internet browser You
                use, unique device identifiers and other diagnostic data.
              </p>
              <p>
                We may also collect information that Your browser sends whenever
                You visit our Service or when You access the Service by or
                through a mobile device.
              </p>
            </div>
            <div ref={socialMediaRef} className="flex flex-col gap-4">
              <h1 className="font-bold text-xl">
                Information from Third-Party Social Media Services
              </h1>
              <p>
                The Company allows You to create an account and log in to use
                the Service through the following Third-party Social Media
                Services:
              </p>
              <ul>
                <li>- Google</li>
                <li>- Facebook</li>
              </ul>
              <p>
                If You decide to register through or otherwise grant us access
                to a Third-Party Social Media Service, We may collect Personal
                data that is already associated with Your Third-Party Social
                Media Service's account, such as Your name, Your email address,
                Your activities or Your contact list associated with that
                account.
              </p>
              <p>
                You may also have the option of sharing additional information
                with the Company through Your Third-Party Social Media Service's
                account. If You choose to provide such information and Personal
                Data, during registration or otherwise, You are giving the
                Company permission to use, share, and store it in a manner
                consistent with this Privacy Policy.
              </p>
            </div>
            <div ref={trackTechRef} className="flex flex-col gap-4">
              <h1 className="font-bold text-xl">
                Tracking Technologies and Cookies
              </h1>
              <p>
                We use Cookies and similar tracking technologies to track the
                activity on Our Service and store certain information. Tracking
                technologies used are beacons, tags, and scripts to collect and
                track information and to improve and analyze Our Service. The
                technologies We use may include:
              </p>
              <p>
                <span className="font-bold">- Cookies or Browser Cookies.</span>{" "}
                A cookie is a small file placed on Your Device. You can instruct
                Your browser to refuse all Cookies or to indicate when a Cookie
                is being sent. However, if You do not accept Cookies, You may
                not be able to use some parts of our Service. Unless you have
                adjusted Your browser setting so that it will refuse Cookies,
                our Service may use Cookies.
              </p>
              <p>
                <span className="font-bold">- Flash Cookies.</span> Certain
                features of our Service may use local stored objects (or Flash
                Cookies) to collect and store information about Your preferences
                or Your activity on our Service. Flash Cookies are not managed
                by the same browser settings as those used for Browser Cookies.
                For more information on how You can delete Flash Cookies, please
                read "Where can I change the settings for disabling, or deleting
                local shared objects?" available at{" "}
                <span className="break-all">
                  https://helpx.adobe.com/flash-player/kb/disable-local-shared-objects-flash.html#main_Where_can_I_change_the_settings_for_disabling__or_deleting_local_shared_objects_
                </span>
              </p>
              <p>
                <span className="font-bold">- Web Beacons.</span> Certain
                sections of our Service and our emails may contain small
                electronic files known as web beacons (also referred to as clear
                gifs, pixel tags, and single-pixel gifs) that permit the
                Company, for example, to count users who have visited those
                pages or opened an email and for other related website
                statistics (for example, recording the popularity of a certain
                section and verifying system and server integrity).
              </p>
              <p>
                Cookies can be "Persistent" or "Session" Cookies. Persistent
                Cookies remain on Your personal computer or mobile device when
                You go offline, while Session Cookies are deleted as soon as You
                close Your web browser. You can learn more about cookies here:
                All About Cookies by TermsFeed.
              </p>
              <p>
                We use both Session and Persistent Cookies for the purposes set
                out below:
              </p>
              <ul className="flex flex-col gap-2">
                <li>
                  <span className="font-bold">
                    Necessary / Essential Cookies Type:
                  </span>{" "}
                  Session Cookies
                </li>
                <li>Administered by: Us </li>
                <li>
                  Purpose: These Cookies are essential to provide You with
                  services available through the Website and to enable You to
                  use some of its features. They help to authenticate users and
                  prevent fraudulent use of user accounts. Without these
                  Cookies, the services that You have asked for cannot be
                  provided, and We only use these Cookies to provide You with
                  those services.
                </li>
              </ul>
              <ul className="flex flex-col gap-2">
                <li>
                  <span className="font-bold">
                    Cookies Policy / Notice Acceptance Cookies
                  </span>{" "}
                  Type: Persistent Cookies
                </li>
                <li>Administered By: Us</li>
                <li>
                  Purpose: These Cookies identify if users have accepted the use
                  of cookies on the Website.
                </li>
              </ul>
              <ul className="flex flex-col gap-2">
                <li>
                  <span className="font-bold">Functionality Cookies</span> Type:
                  Persistent Cookies
                </li>
                <li>Administered By: Us</li>
                <li>
                  Purpose: These Cookies allow us to remember choices You make
                  when You use the Website, such as remembering your login
                  details or language preference. The purpose of these Cookies
                  is to provide You with a more personal experience and to avoid
                  You having to re-enter your preferences every time You use the
                  Website. For more information about the cookies we use and
                  your choices regarding cookies, please visit our Cookies
                  Policy or the Cookies section of our Privacy Policy.
                </li>
              </ul>
            </div>
            <div ref={personalDataRef} className="flex flex-col gap-4">
              <h1 className="text-xl font-bold">Use of your Personal Data</h1>
              <p>
                The Company may use Personal Data for the following purposes:
              </p>
              <ul>
                <li>
                  <span className="font-bold">
                    - To provide and maintain our Service:
                  </span>{" "}
                  including to monitor the usage of our Service.
                </li>
                <li>
                  <span className="font-bold">- To manage Your Account:</span>{" "}
                  to manage Your registration as a user of the Service. The
                  Personal Data You provide can give You access to different
                  functionalities of the Service that are available to You as a
                  registered user.
                </li>
                <li>
                  <span className="font-bold">
                    - For the performance of a contract:
                  </span>{" "}
                  the development, compliance and undertaking of the purchase
                  contract for the products, items or services You have
                  purchased or of any other contract with Us through the
                  Service.
                </li>
                <li>
                  <span className="font-bold">- To contact You:</span> To
                  contact You by email, telephone calls, SMS, or other
                  equivalent forms of electronic communication, such as a mobile
                  application's push notifications regarding updates or
                  informative communications related to the functionalities,
                  products or contracted services, including the security
                  updates, when necessary or reasonable for their
                  implementation.
                </li>
                <li>
                  <span className="font-bold">- To provide You</span> with news,
                  special offers and general information about other goods,
                  services and events which we offer that are similar to those
                  that you have already purchased or enquired about unless You
                  have opted not to receive such information.
                </li>
                <li>
                  <span className="font-bold">- To manage Your requests:</span>{" "}
                  To attend and manage Your requests to Us.
                </li>
                <li>
                  <span className="font-bold">- For business transfers:</span>{" "}
                  We may use Your information to evaluate or conduct a merger,
                  divestiture, restructuring, reorganization, dissolution, or
                  other sale or transfer of some or all of Our assets, whether
                  as a going concern or as part of bankruptcy, liquidation, or
                  similar proceeding, in which Personal Data held by Us about
                  our Service users is among the assets transferred.
                </li>
                <li>
                  <span className="font-bold">- For other purposes:</span> We
                  may use Your information for other purposes, such as data
                  analysis, identifying usage trends, determining the
                  effectiveness of our promotional campaigns and to evaluate and
                  improve our Service, products, services, marketing and your
                  experience. We may share Your personal information in the
                  following situations:
                </li>
                <li>
                  <span className="font-bold">- With Service Providers:</span>{" "}
                  We may share Your personal information with Service Providers
                  to monitor and analyze the use of our Service, to contact You.
                </li>
                <li>
                  <span className="font-bold">- For business transfers:</span>{" "}
                  We may share or transfer Your personal information in
                  connection with, or during negotiations of, any merger, sale
                  of Company assets, financing, or acquisition of all or a
                  portion of Our business to another company.
                </li>
                <li>
                  <span className="font-bold">- With Affiliates:</span> We may
                  share Your information with Our affiliates, in which case we
                  will require those affiliates to honor this Privacy Policy.
                  Affiliates include Our parent company and any other
                  subsidiaries, joint venture partners or other companies that
                  We control or that are under common control with Us.
                </li>
                <li>
                  <span className="font-bold">- With business partners:</span>{" "}
                  We may share Your information with Our business partners to
                  offer You certain products, services or promotions.
                </li>
                <li>
                  <span className="font-bold">- With other users:</span> when
                  You share personal information or otherwise interact in the
                  public areas with other users, such information may be viewed
                  by all users and may be publicly distributed outside. If You
                  interact with other users or register through a Third-Party
                  Social Media Service, Your contacts on the Third-Party Social
                  Media Service may see Your name, profile, pictures and
                  description of Your activity. Similarly, other users will be
                  able to view descriptions of Your activity, communicate with
                  You and view Your profile.
                </li>
                <li>
                  <span className="font-bold">- With Your consent:</span> We may
                  disclose Your personal information for any other purpose with
                  Your consent.
                </li>
              </ul>
            </div>
            <div ref={retentionRef} className="flex flex-col gap-4">
              <h1 className="font-bold text-xl">
                Retention of Your Personal Data
              </h1>
              <p>
                The Company will retain Your Personal Data only for as long as
                is necessary for the purposes set out in this Privacy Policy. We
                will retain and use Your Personal Data to the extent necessary
                to comply with our legal obligations (for example, if we are
                required to retain your data to comply with applicable laws),
                resolve disputes, and enforce our legal agreements and policies.
              </p>
              <p>
                The Company will also retain Usage Data for internal analysis
                purposes. Usage Data is generally retained for a shorter period
                of time, except when this data is used to strengthen the
                security or to improve the functionality of Our Service, or We
                are legally obligated to retain this data for longer time
                periods.
              </p>
            </div>
            <div ref={transferRef} className="flex flex-col gap-4">
              <h1 className="font-bold text-xl">
                Transfer of Your Personal Data
              </h1>
              <p>
                Your information, including Personal Data, is processed at the
                Company's operating offices and in any other places where the
                parties involved in the processing are located. It means that
                this information may be transferred to — and maintained on —
                computers located outside of Your state, province, country or
                other governmental jurisdiction where the data protection laws
                may differ than those from Your jurisdiction.
              </p>
              <p>
                Your consent to this Privacy Policy followed by Your submission
                of such information represents Your agreement to that transfer.
              </p>
              <p>
                The Company will take all steps reasonably necessary to ensure
                that Your data is treated securely and in accordance with this
                Privacy Policy and no transfer of Your Personal Data will take
                place to an organization or a country unless there are adequate
                controls in place including the security of Your data and other
                personal information.
              </p>
            </div>
            <div ref={legalRef} className="flex flex-col gap-4">
              <h1 className="font-bold text-xl">Other legal requirements</h1>
              <p>
                The Company may disclose Your Personal Data in the good faith
                belief that such action is necessary to:
              </p>
              <ul>
                <li>- Comply with a legal obligation</li>
                <li>
                  - Protect and defend the rights or property of the Company
                </li>
                <li>
                  - Prevent or investigate possible wrongdoing in connection
                  with the Service
                </li>
                <li>
                  - Protect the personal safety of Users of the Service or the
                  public
                </li>
                <li>- Protect against legal liability</li>
              </ul>
            </div>
            <div ref={securityRef} className="flex flex-col gap-4">
              <h1 className="font-bold text-xl">
                Security of Your Personal Data
              </h1>
              <p>
                The security of Your Personal Data is important to Us, but
                remember that no method of transmission over the Internet, or
                method of electronic storage is 100% secure. While We strive to
                use commercially acceptable means to protect Your Personal Data,
                We cannot guarantee its absolute security.
              </p>
            </div>
            <div ref={reviewRef} className="flex flex-col gap-4">
              <h1 className="font-bold text-xl">
                Review / Update / Delete collected information about users.
              </h1>
              <p>
                Users can edit, update and delete their personal data by going
                to the link mentioned below.
              </p>
              <p className="break-all">
                https://marketplacenepal.com/Users/Profile/profileDetail
              </p>
              <p>
                The collected information about the users remain with us until
                they delete their account from our website.
              </p>
              <p>
                When you delete your account from our website, all the
                information (collected personal informations, posts, images,
                likes,dislikes, comments, shares) associated with the account is
                also deleted.
              </p>
            </div>
            <div ref={childPrivacyRef} className="flex flex-col gap-4">
              <h1 className="font-bold text-xl">Children's Privacy</h1>
              <p>
                Our Service does not address anyone under the age of 13. We do
                not knowingly collect personally identifiable information from
                anyone under the age of 13. If You are a parent or guardian and
                You are aware that Your child has provided Us with Personal
                Data, please contact Us. If We become aware that We have
                collected Personal Data from anyone under the age of 13 without
                verification of parental consent, We take steps to remove that
                information from Our servers.
              </p>
              <p>
                If We need to rely on consent as a legal basis for processing
                Your information and Your country requires consent from a
                parent, We may require Your parent's consent before We collect
                and use that information.
              </p>
            </div>
            <div ref={linkRef} className="flex flex-col gap-4">
              <h1 className="font-bold text-xl">Links to Other Websites</h1>
              <p>
                Our Service may contain links to other websites that are not
                operated by Us. If You click on a third party link, You will be
                directed to that third party's site. We strongly advise You to
                review the Privacy Policy of every site You visit.
              </p>
              <p>
                We have no control over and assume no responsibility for the
                content, privacy policies or practices of any third party sites
                or services.
              </p>
            </div>
            <div ref={changesRef} className="flex flex-col gap-4">
              <h1 className="font-bold text-xl">
                Changes to this Privacy Policy
              </h1>
              <p>
                We may update Our Privacy Policy from time to time. We will
                notify You of any changes by posting the new Privacy Policy on
                this page.
              </p>
              <p>
                We will let You know via email and/or a prominent notice on Our
                Service, prior to the change becoming effective and update the
                "Last updated" date at the top of this Privacy Policy.
              </p>
              <p>
                You are advised to review this Privacy Policy periodically for
                any changes. Changes to this Privacy Policy are effective when
                they are posted on this page
              </p>
            </div>
            <div ref={contactRef} className="flex flex-col gap-4">
              <h1 className="font-bold text-xl">Contact Us</h1>
              <p>
                If you have any questions about this Privacy Policy, You can
                contact us: By email: marketplacenepal@icn.com.np
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;
