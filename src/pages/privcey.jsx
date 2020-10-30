import React from "react";
import { Layout, Menu, Breadcrumb, Divider } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const Privacy = (props) => {
  return (
    <Layout>
      <Layout>
        <Sider width={500} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <Menu.Item key="1" onClick={() => (window.location.href = "#1")}>
              1. WHAT INFORMATION DO WE COLLECT?
            </Menu.Item>
            <Menu.Item key="2" onClick={() => (window.location.href = "#2")}>
              2. HOW DO WE USE YOUR INFORMATION?
            </Menu.Item>
            <Menu.Item key="3" onClick={() => (window.location.href = "#3")}>
              3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?
            </Menu.Item>
            <Menu.Item key="4" onClick={() => (window.location.href = "#4")}>
              4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
            </Menu.Item>
            <Menu.Item key="6" onClick={() => (window.location.href = "#5")}>
              5. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?
            </Menu.Item>
            <Menu.Item key="7" onClick={() => (window.location.href = "#6")}>
              6. WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?
            </Menu.Item>
            <Menu.Item key="8" onClick={() => (window.location.href = "#7")}>
              7. HOW LONG DO WE KEEP YOUR INFORMATION?
            </Menu.Item>
            <Menu.Item key="9" onClick={() => (window.location.href = "#8")}>
              8. HOW DO WE KEEP YOUR INFORMATION SAFE?
            </Menu.Item>
            <Menu.Item key="10" onClick={() => (window.location.href = "#9")}>
              9. WHAT ARE YOUR PRIVACY RIGHTS?
            </Menu.Item>
            <Menu.Item key="11" onClick={() => (window.location.href = "#10")}>
              10. CONTROLS FOR DO-NOT-TRACK FEATURES
            </Menu.Item>
            <Menu.Item key="12" onClick={() => (window.location.href = "#11")}>
              11. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
            </Menu.Item>
            <Menu.Item key="13" onClick={() => (window.location.href = "#12")}>
              12. DO WE MAKE UPDATES TO THIS NOTICE?
            </Menu.Item>
            <Menu.Item key="14" onClick={() => (window.location.href = "#13")}>
              13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
            </Menu.Item>
            <Menu.Item key="15" onClick={() => (window.location.href = "#14")}>
              14. HOW CAN YOU REVIEW, UPDATE OR DELETE THE DATA WE COLLECT FROM
              YOU?
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              maxHeight: "100vh",
            }}
          >
            <Layout>
              <h1 style={{ fontSize: "2em", fontWeight: "bold" }}>
                PRIVACY NOTICE
              </h1>
              <p style={{ opacity: 0.6 }}>Last updated October 21, 2020</p>
              <p>
                Thank you for choosing to be part of our community at Laahnt
                Company. We are committed to protecting your personal
                information and your right to privacy. If you have any questions
                or concerns about this privacy notice, or our practices with
                regards to your personal information, please contact us at
                salehjarad.wrk@gmail.com.
              </p>
              <p>
                When you visit our website
                <a href="#">https://utiny.laahnt.com</a> (the "Website"), and
                more generally, use any of our services (the
                <span style={{ fontWeight: "bold" }}>"Services"</span>, which
                include the Website), we appreciate that you are trusting us
                with your personal information. We take your privacy very
                seriously. In this privacy notice, we seek to explain to you in
                the clearest way possible what information we collect, how we
                use it and what rights you have in relation to it. We hope you
                take some time to read through it carefully, as it is important.
                If there are any terms in this privacy notice that you do not
                agree with, please discontinue use of our Services immediately.
              </p>
              <p>
                This privacy notice applies to all information collected through
                our Services (which, as described above, includes our Website),
                as well as any related services, sales, marketing or events.
              </p>
              <p style={{ fontWeight: "bold" }}>
                Please read this privacy notice carefully as it will help you
                understand what we do with the information that we collect.
              </p>
            </Layout>
            <Divider />
            <Layout id="1">
              <h1 className="pn-head">1. WHAT INFORMATION DO WE COLLECT?</h1>
              <p>
                <span className="spn-bold">In Short:</span> Some information —
                such as your Internet Protocol (IP) address and/or browser and
                device characteristics — is collected automatically when you
                visit our Website. We automatically collect certain information
                when you visit, use or navigate the Website. This information
                does not reveal your specific identity (like your name or
                contact information) but may include device and usage
                information, such as your IP address, browser and device
                characteristics, operating system, language preferences,
                referring URLs, device name, country, location, information
                about how and when you use our Website and other technical
                information. This information is primarily needed to maintain
                the security and operation of our Website, and for our internal
                analytics and reporting purposes. Like many businesses, we also
                collect information through cookies and similar technologies.
              </p>
              <p>The information we collect includes:</p>
              <ul>
                <li>
                  Log and Usage Data. Log and usage data is service-related,
                  diagnostic, usage and performance information our servers
                  automatically collect when you access or use our Website and
                  which we record in log files. Depending on how you interact
                  with us, this log data may include your IP address, device
                  information, browser type and settings and information about
                  your activity in the Website (such as the date/time stamps
                  associated with your usage, pages and files viewed, searches
                  and other actions you take such as which features you use),
                  device event information (such as system activity, error
                  reports (sometimes called 'crash dumps') and hardware
                  settings).
                </li>
                <li>
                  Device Data. We collect device data such as information about
                  your computer, phone, tablet or other device you use to access
                  the Website. Depending on the device used, this device data
                  may include information such as your IP address (or proxy
                  server), device and application identification numbers,
                  location, browser type, hardware model Internet service
                  provider and/or mobile carrier, operating system and system
                  configuration information.
                </li>
                <li>
                  Location Data. We collect location data such as information
                  about your device's location, which can be either precise or
                  imprecise. How much information we collect depends on the type
                  and settings of the device you use to access the Website. For
                  example, we may use GPS and other technologies to collect
                  geolocation data that tells us your current location (based on
                  your IP address). You can opt out of allowing us to collect
                  this information either by refusing access to the information
                  or by disabling your Location setting on your device. Note
                  however, if you choose to opt out, you may not be able to use
                  certain aspects of the Services.
                </li>
              </ul>
            </Layout>
            <Layout id="2">
              <h1 className="pn-head">2. HOW DO WE USE YOUR INFORMATION?</h1>
              <p>
                <span className="spn-bold">In Short:</span> We process your
                information for purposes based on legitimate business interests,
                the fulfillment of our contract with you, compliance with our
                legal obligations, and/or your consent. We use personal
                information collected via our Website for a variety of business
                purposes described below. We process your personal information
                for these purposes in reliance on our legitimate business
                interests, in order to enter into or perform a contract with
                you, with your consent, and/or for compliance with our legal
                obligations. We indicate the specific processing grounds we rely
                on next to each purpose listed below.
              </p>
              <p>We use the information we collect or receive:</p>
              <ul>
                <li>
                  Fulfill and manage your orders. We may use your information to
                  fulfill and manage your orders, payments, returns, and
                  exchanges made through the Website
                </li>
                <li>
                  Administer prize draws and competitions. We may use your
                  information to administer prize draws and competitions when
                  you elect to participate in our competitions.
                </li>
                <li>
                  To deliver and facilitate delivery of services to the user. We
                  may use your information to provide you with the requested
                  service.
                </li>
                <li>
                  To respond to user inquiries/offer support to users. We may
                  use your information to respond to your inquiries and solve
                  any potential issues you might have with the use of our
                  Services.
                </li>
              </ul>
            </Layout>
            <Layout id="3">
              <h1 className="pn-head">
                3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?
              </h1>
              <p>
                <span className="spn-bold">In Short:</span> We only share
                information with your consent, to comply with laws, to provide
                you with services, to protect your rights, or to fulfill
                business obligations.
              </p>
              <p>
                We may process or share your data that we hold based on the
                following legal basis:
              </p>
              <ul>
                <li>
                  Consent: We may process your data if you have given us
                  specific consent to use your personal information for a
                  specific purpose.
                </li>
                <li>
                  Legitimate Interests: We may process your data when it is
                  reasonably necessary to achieve our legitimate business
                  interests.
                </li>
                <li>
                  Performance of a Contract: Where we have entered into a
                  contract with you, we may process your personal information to
                  fulfill the terms of our contract.
                </li>
                <li>
                  Legal Obligations: We may disclose your information where we
                  are legally required to do so in order to comply with
                  applicable law, governmental requests, a judicial proceeding,
                  court order, or legal process, such as in response to a court
                  order or a subpoena (including in response to public
                  authorities to meet national security or law enforcement
                  requirements).
                </li>
                <li>
                  Vital Interests: We may disclose your information where we
                  believe it is necessary to investigate, prevent, or take
                  action regarding potential violations of our policies,
                  suspected fraud, situations involving potential threats to the
                  safety of any person and illegal activities, or as evidence in
                  litigation in which we are involved.
                </li>
              </ul>
              <p>
                More specifically, we may need to process your data or share
                your personal information in the following situations:
              </p>
              <ul>
                <li>
                  Business Transfers. We may share or transfer your information
                  in connection with, or during negotiations of, any merger,
                  sale of company assets, financing, or acquisition of all or a
                  portion of our business to another company.
                </li>
              </ul>
            </Layout>
            <Layout id="4">
              <h1 className="pn-head">
                4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
              </h1>
              <p>
                <span className="spn-bold">In Short:</span> We do not use
                cookies and other tracking technologies to collect and store
                your information.
              </p>
            </Layout>
            <Layout id="5">
              <h1 className="pn-head">
                5. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?
              </h1>
              <p>
                <span className="spn-bold">In Short:</span> We may transfer,
                store, and process your information in countries other than your
                own.
              </p>
              <p>
                Our servers are located in. If you are accessing our Website
                from outside, please be aware that your information may be
                transferred to, stored, and processed by us in our facilities
                and by those third parties with whom we may share your personal
                information (see "WILL YOUR INFORMATION BE SHARED WITH ANYONE?"
                above), in and other countries.
              </p>
            </Layout>
            <Layout id="6">
              <h1 className="pn-head">
                6. WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?
              </h1>
              <p>
                <span className="spn-bold">In Short:</span>We are not
                responsible for the safety of any information that you share
                with third-party providers who advertise, but are not affiliated
                with, our Website.
              </p>
              <p>
                The Website may contain advertisements from third parties that
                are not affiliated with us and which may link to other websites,
                online services or mobile applications. We cannot guarantee the
                safety and privacy of data you provide to any third parties. Any
                data collected by third parties is not covered by this privacy
                notice. We are not responsible for the content or privacy and
                security practices and policies of any third parties, including
                other websites, services or applications that may be linked to
                or from the Website. You should review the policies of such
                third parties and contact them directly to respond to your
                questions.
              </p>
            </Layout>
            <Layout id="7">
              <h1 className="pn-head">
                7. HOW LONG DO WE KEEP YOUR INFORMATION?
              </h1>
              <p>
                <span className="spn-bold">In Short:</span> We do not keep your
                information.
              </p>
            </Layout>
            <Layout id="8">
              <h1 className="pn-head">
                8. HOW DO WE KEEP YOUR INFORMATION SAFE?
              </h1>
              <p>
                <span className="spn-bold">In Short:</span> As we mentioned at
                section (7), we do not keep any of your information
              </p>
            </Layout>
            <Layout id="9">
              <h1 className="pn-head">9. WHAT ARE YOUR PRIVACY RIGHTS?</h1>
              <p>
                <span className="spn-bold">In Short:</span> You may review,
                change, or terminate your account at any time.
              </p>
              <p>
                If you are a resident in the European Economic Area and you
                believe we are unlawfully processing your personal information,
                you also have the right to complain to your local data
                protection supervisory authority. You can find their contact
                details here:
                <a href="http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm">
                  http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm
                </a>
                .
              </p>
              <p>
                If you are a resident in Switzerland, the contact details for
                the data protection authorities are available here:
                <a href="https://www.edoeb.admin.ch/edoeb/en/home.html">
                  https://www.edoeb.admin.ch/edoeb/en/home.html
                </a>
                .
              </p>
            </Layout>
            <Layout id="10">
              <h1 className="pn-head">
                10. CONTROLS FOR DO-NOT-TRACK FEATURES
              </h1>
              <p>
                Most web browsers and some mobile operating systems and mobile
                applications include a Do-Not-Track ("DNT") feature or setting
                you can activate to signal your privacy preference not to have
                data about your online browsing activities monitored and
                collected. At this stage no uniform technology standard for
                recognizing and implementing DNT signals has been finalized. As
                such, we do not currently respond to DNT browser signals or any
                other mechanism that automatically communicates your choice not
                to be tracked online. If a standard for online tracking is
                adopted that we must follow in the future, we will inform you
                about that practice in a revised version of this privacy notice.
              </p>
            </Layout>
            <Layout id="11">
              <h1 className="pn-head">
                11. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
              </h1>
              <p>
                <span className="spn-bold">In Short:</span> Yes, if you are a
                resident of California, you are granted specific rights
                regarding access to your personal information.
              </p>
              <p>
                California Civil Code Section 1798.83, also known as the "Shine
                The Light" law, permits our users who are California residents
                to request and obtain from us, once a year and free of charge,
                information about categories of personal information (if any) we
                disclosed to third parties for direct marketing purposes and the
                names and addresses of all third parties with which we shared
                personal information in the immediately preceding calendar year.
                If you are a California resident and would like to make such a
                request, please submit your request in writing to us using the
                contact information provided below.
              </p>
              <p>
                If you are under 18 years of age, reside in California, and have
                a registered account with the Website, you have the right to
                request removal of unwanted data that you publicly post on the
                Website. To request removal of such data, please contact us
                using the contact information provided below, and include the
                email address associated with your account and a statement that
                you reside in California. We will make sure the data is not
                publicly displayed on the Website, but please be aware that the
                data may not be completely or comprehensively removed from all
                our systems (e.g. backups, etc.).
              </p>
            </Layout>
            <Layout id="12">
              <h1 className="pn-head">
                12. DO WE MAKE UPDATES TO THIS NOTICE?{" "}
              </h1>
              <p>
                <span className="spn-bold">In Short:</span> Yes, we will update
                this notice as necessary to stay compliant with relevant laws.
              </p>
              <p>
                We may update this privacy notice from time to time. The updated
                version will be indicated by an updated "Revised" date and the
                updated version will be effective as soon as it is accessible.
                If we make material changes to this privacy notice, we may
                notify you either by prominently posting a notice of such
                changes or by directly sending you a notification. We encourage
                you to review this privacy notice frequently to be informed of
                how we are protecting your information.
              </p>
            </Layout>
            <Layout if="13">
              <h1 className="pn-head">
                13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
              </h1>
              <p>
                If you have questions or comments about this notice, you may
                email us at salehjarad.wrk@gmail.com.
              </p>
            </Layout>
            <Layout id="14">
              <h1 className="pn-head">
                14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT
                FROM YOU?
              </h1>
              <p>
                Based on the applicable laws of your country, you may have the
                right to request access to the personal information we collect
                from you, change that information, or delete it in some
                circumstances. To request to review, update, or delete your
                personal information, please submit a request form by clicking
                here. We will respond to your request within 30 days.
              </p>
            </Layout>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Privacy;
