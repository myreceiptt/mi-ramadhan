// /src/app/terms/page.tsx

// External libraries
import React from "react";
import Image from "next/image";
import Link from "next/link";

// Blockchain configurations
import {
  entityAddress,
  entityAlias1,
  entityAlias2,
  entityDate,
  entityEmail,
  entityMonth,
  entityName,
  entityYear,
} from "@/config/osloid";

export default function Terms() {
  return (
    <>
      {/* Top Image */}
      <header className="w-full flex items-center justify-center bg-back-ground py-4 px-4 md:px-20">
        <Link href="/">
          <Image
            src="/images/bukhari-fa-login-04-crop.png"
            alt="Bukhari Islamic Art Banner with Partners Logo."
            width={1080}
            height={149}
            className="object-contain w-full max-w-max"
            priority
          />
        </Link>
      </header>

      {/* Content Section */}
      <div className="flex flex-col items-center gap-8 px-4 md:px-20 py-8">
        <main className="w-full max-w-3xl space-y-8">
          {/* Title */}
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal text-hitam-judul-body">
              Terms of Use
            </h1>
            <span className="text-xs leading-10 text-icon-wording">
              &#9673; &#9673; &#9673; &#9673;
            </span>
            <h2 className="text-sm font-medium text-icon-wording">
              Last updated on {entityMonth} {entityDate}, {entityYear}.
            </h2>
          </div>

          {/* Policy Overview */}
          <section className="space-y-4">
            <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-hitam-judul-body uppercase">
              Overview
            </h3>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              This web application and/or mobile application is operated by
              {entityName}. Throughout the application, the terms
              &quot;we,&quot; &quot;us,&quot; and &quot;our&quot; refer to{" "}
              {entityName}, also referred to as {entityAlias1} and{" "}
              {entityAlias2}. {entityName} offers this application, including
              all information, tools, and services available from this
              application to you, the user, conditioned upon your acceptance of
              all terms, conditions, policies, and notices stated here.
            </p>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              By visiting our application and/or purchasing something from us,
              you engage in our &quot;Service&quot; and agree to be bound by the
              following terms and conditions of use (&quot;Terms of
              Service,&quot; &quot;Terms of Use,&quot; &quot;Terms&quot;),
              including those additional terms, conditions, and policies
              referenced herein and/or available by hyperlink. These Terms and
              Conditions of Use apply to all users of the application,
              including, without limitation, users who are browsers,
              aggregators, vendors, and/or customers.
            </p>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              By visiting the application of our product&apos;s merchants, in
              particular OpenSea.io, you also agree to be bound by their terms
              and conditions of use.
            </p>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              Please read these Terms carefully before accessing or using our
              application or buying any of our products. By accessing or using
              any part of the application, you agree to be bound by these Terms.
              If you do not agree to all the terms and conditions of this
              agreement, you may not access the application or use any services.
              If these Terms are considered an offer, acceptance is expressly
              limited to these Terms.
            </p>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              Any new features or tools added to the current application shall
              also be subject to the Terms. You can review the most current
              version of the Terms at any time on this page. We reserve the
              right to update, change, or replace any part of these Terms by
              posting updates and/or changes to our application. It is your
              responsibility to check this page periodically for changes. Your
              continued use of or access to the application after we post any
              changes constitutes acceptance of those changes. Our application
              is hosted on Vercel.com.
            </p>
          </section>
          <section className="space-y-4">
            <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-hitam-judul-body uppercase">
              SECTION 1 - ONLINE TERMS
            </h3>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              By agreeing to these Terms, you represent that you are at least
              the age of majority in your state or province of residence. You
              may not use our products or services for any illegal or
              unauthorized purpose, nor may you, in the use of the Service,
              violate any laws in your jurisdiction (including, but not limited
              to, copyright laws).
            </p>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              The headings in this agreement are included for convenience only
              and will not limit or otherwise affect these Terms.
            </p>
          </section>
          <section className="space-y-4">
            <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-hitam-judul-body uppercase">
              SECTION 2 - GENERAL CONDITIONS
            </h3>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              You must not transmit any worms, viruses, or any code of a
              destructive nature. A breach or violation of any of the Terms will
              immediately terminate our services to you.
            </p>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              You agree not to reproduce, duplicate, copy, sell, resell, or
              exploit any portion of the Service, the use of the Service, access
              to the Service, or any contact on the application through which
              the Service is provided, without express written permission from
              us.
            </p>
          </section>
          <section className="space-y-4">
            <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-hitam-judul-body uppercase">
              SECTION 3 - ACCURACY, COMPLETENESS, AND TIMELINESS OF INFORMATION
            </h3>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              We are not responsible if the information made available on this
              application is not accurate, complete, or current. The material on
              this application is provided for general information only and
              should not be relied upon or used as the sole basis for making
              decisions without consulting primary, more accurate, more
              complete, or more timely sources of information. Any reliance on
              the material in this application is at your own risk.
            </p>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              We reserve the right to modify the contents of this application at
              any time, but we are not obligated to update any information. You
              agree that it is your responsibility to monitor changes to our
              application.
            </p>
          </section>
          <section className="space-y-4">
            <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-hitam-judul-body uppercase">
              SECTION 4 - MODIFICATIONS TO THE INFORMATION, SERVICE, AND PRICES
            </h3>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              Information, services, and prices are subject to change without
              notice. We reserve the right at any time to modify or discontinue
              the Service (or any part or content thereof) without notice at any
              time.
            </p>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              We shall not be liable to you or any third party for any
              modification, price change, suspension, or discontinuance of the
              Service.
            </p>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              Prices for our products on merchant applications to which our
              links point, such as OpenSea.io, may be subject to change. Please
              note that we are not responsible for any of our products offered
              on OpenSea.io or other merchant applications when such offers
              originate from third parties (secondary market).
            </p>
          </section>
          <section className="space-y-4">
            <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-hitam-judul-body uppercase">
              SECTION 5 - PRODUCTS OR SERVICES (if applicable)
            </h3>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              Certain products or services may be available exclusively online
              through the application.
            </p>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              We have made every effort to display the colors and images of our
              products on our application as accurately as possible. However, we
              cannot guarantee that your computer monitor&apos;s display of any
              color will be accurate. We also do not warrant that the quality of
              any products, services, information, or other material purchased
              or obtained by you will meet your expectations or that any errors
              in the Service will be corrected.
            </p>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              In particular, we currently offer the possibility to search or
              preview our products on our application. Please note that we
              reserve the right to discontinue such service and functionality,
              as well as any other service that we provide.
            </p>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              We may also publish content on our social media accounts for
              information, promotion, and/or member discussions. Please note
              that we reserve the right to reject or ban any member that
              infringes on our rules. Ownership of any of our products does not
              confer the owner any right of access to such social media
              accounts, and we may block or ban the access of anyone we see fit,
              for any reason, and without any warning or notice. We may also
              terminate such accounts at any time at our sole discretion and
              without prior notice.
            </p>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              Characteristics of the products, such as traits, tiers, and/or
              grades, as well as their respective rarities and probabilistic
              distributions at token issuance, file artwork reveal, or later,
              and/or overall, may change or be changed according to
              circumstances and at our sole discretion.
            </p>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              We may at times offer the service of integrating one of our
              products, such as an artwork, into an original NFT that you own in
              your crypto wallet. When selecting the NFT to integrate, please
              ensure that you own all copyrights and licenses concerning this
              original NFT, including for such purposes. You warrant that you
              will not resell or transfer such merged NFT to a third party
              without also transferring the original NFT to the same third party
              unless your license for use and copyright allows you to do so. The
              use of such service and the resulting product, as well as its
              trade or transfers, are done under your sole responsibility and
              liability.
            </p>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              You accept that there are no explicit or implicit obligations for
              {entityName} to undertake activities or work during your period of
              control of the NFT artworks, and in particular:
            </p>
            <ul className="list-disc list-outside space-y-2">
              <li className="text-sm font-medium text-icon-wording leading-relaxed">
                There is no obligation for {entityName} to provide or maintain
                any service.
              </li>
              <li className="text-sm font-medium text-icon-wording leading-relaxed">
                There is no obligation for {entityName} to provide any work.
              </li>
              <li className="text-sm font-medium text-icon-wording leading-relaxed">
                There is no obligation for {entityName} to change the form or
                functionality of that artwork.
              </li>
              <li className="text-sm font-medium text-icon-wording leading-relaxed">
                There is no obligation for {entityName} to support or maintain
                any value of the NFT and associated artworks.
              </li>
              <li className="text-sm font-medium text-icon-wording leading-relaxed">
                There is no obligation for {entityName} to produce any marketing
                effort to promote the NFTs, the artworks, the brand name, or
                anything related to the NFT that you bought from us.
              </li>
            </ul>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              As a result, you agree that you do not have any expectation of
              work to be produced by {entityName} in connection to the NFTs that
              you bought from us.
            </p>
          </section>
          <section className="space-y-4">
            <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-hitam-judul-body uppercase">
              SECTION 6 – CRYPTO ITEMS
            </h3>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              You accept and acknowledge:
            </p>
            <ol className="list-decimal list-outside space-y-2">
              <li className="text-sm font-medium text-icon-wording leading-relaxed">
                When purchasing one of our NFTs from us (meaning any
                blockchain-tracked, non-fungible token that we have produced and
                that we offer through a merchant application), you acquire a
                non-exclusive, worldwide, royalty-free license to use and copy,
                and display the related artwork associated with the NFT for your
                own personal, non-commercial use. However, you do not own the
                underlying copyright in the content the NFT is associated with,
                nor any copyright related to the component images and graphics,
                technology, or process used in the making of the artwork or the
                NFT. Furthermore, you are receiving the NFT and license “as is.”
                You can use the artwork when you are on a marketplace that
                allows the purchase and sale of your token, as long as the
                marketplace cryptographically verifies that you are the owner.
                You can also use your artwork to commercialize your merchandise,
                provided that you do not earn more than US$100,000 in revenue
                each year from doing so. However, you cannot modify the artwork,
                use the artwork to sell or promote third-party products, or use
                the artwork in connection with images of hatred, violence, or
                any other inappropriate behavior. You cannot try to trademark
                the artwork or otherwise acquire intellectual property rights in
                it.
              </li>
              <li className="text-sm font-medium text-icon-wording leading-relaxed">
                The license granted in Section 6-1 above only applies to the
                extent that you continue to own the relevant NFT. If at any time
                you trade, donate, give away, transfer, or otherwise dispose of
                your NFT for any reason, the license granted in Section 6-1 will
                immediately expire without notice, and you will have no further
                rights to the artwork of this NFT.
              </li>
              <li className="text-sm font-medium text-icon-wording leading-relaxed">
                The prices of crypto items are extremely volatile, and the
                prices of other digital items can adversely affect the prices of
                NFTs. We cannot guarantee that any purchaser of a crypto item
                will not lose money. In particular, many factors may affect the
                prices of NFTs, including (but not limited to) buyers’ interest,
                market fluctuation, technological changes, and the regulatory
                environment.
              </li>
              <li className="text-sm font-medium text-icon-wording leading-relaxed">
                We do not represent that our NFTs constitute a valuable purchase
                or that their value may increase with time. Please do not buy
                any of our products with any expectation of profit. When
                purchasing any of our NFTs, you accept and confirm that you do
                not expect profit. The NFTs that you buy from us are not
                investment contracts, and we disclaim any claims associated with
                any speculation you or other users may engage in connection with
                these NFTs. You are fully aware that the value of the NFTs may
                drop to zero and that they may become unsellable due to lack of
                demand. As a result, you are fully aware that you may lose the
                entirety of the value spent, as well as gas costs, transfer
                costs, and other purchasing costs.
              </li>
              <li className="text-sm font-medium text-icon-wording leading-relaxed">
                You are solely responsible if any taxes apply to your crypto
                items and transactions. We are not responsible for determining
                the taxes that may apply to you.
              </li>
              <li className="text-sm font-medium text-icon-wording leading-relaxed">
                We do not store or send your crypto items. Any transfer of
                crypto items occurs within the supporting blockchain.
              </li>
              <li className="text-sm font-medium text-icon-wording leading-relaxed">
                There are risks associated with using an Internet-based
                currency, including, but not limited to, the risks of hardware,
                software, and Internet connections; the risk of malicious
                software introduction; and the risk that third parties may
                obtain unauthorized access to information stored within your
                wallet. You accept and acknowledge that {entityName} will not be
                responsible for any communication failures, disruptions, errors,
                distortions, or delays that you may experience when using our
                services or products, however caused.
              </li>
              <li className="text-sm font-medium text-icon-wording leading-relaxed">
                The regulatory regime governing NFTs and cryptocurrencies is
                uncertain, and new regulations or policies may adversely affect
                the services and products that we provide.
              </li>
              <li className="text-sm font-medium text-icon-wording leading-relaxed">
                There are risks associated with purchasing user-generated
                content, including, but not limited to, the risk of purchasing
                mislabeled assets, assets that are vulnerable to metadata decay,
                assets on smart contracts with bugs, and assets that may become
                non-transferable. Assets that you purchase may become
                inaccessible on our application or merchants’ applications.
                Under no circumstances shall the inability to view your assets
                serve as grounds for a claim against us.
              </li>
              <li className="text-sm font-medium text-icon-wording leading-relaxed">
                Please note that we reserve the right to amend our offers as
                described on this application, our social media accounts, our
                whitepaper, our about page, and/or other places where we
                advertise our products, including, but not limited to, the
                number of products on offer, the roadmap and calendars, and/or
                prices.
              </li>
              <li className="text-sm font-medium text-icon-wording leading-relaxed">
                You are also aware that there are fraud risks in buying NFTs,
                and you need to exercise great caution when accessing our links
                and applications. In particular, we are not responsible for any
                losses that you may suffer as a result of responding to third
                parties impersonating us or our application, or from parties
                offering copies of our artworks. In particular, we are not
                responsible for any third party contacting you with a direct
                message on your social media accounts, any third-party link in
                any message on your social media accounts, or any third-party
                link on any messaging or social media application or service,
                nor are we responsible for any losses that you may suffer as a
                result of responding to their solicitations.
              </li>
            </ol>
          </section>
          <section className="space-y-4">
            <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-hitam-judul-body uppercase">
              SECTION 7 - THIRD-PARTY LINKS
            </h3>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              Certain content, products, and services available via our Service
              may include materials from third parties.
            </p>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              Third-party links on this application may direct you to
              third-party applications that are not affiliated with us. We are
              not responsible for examining or evaluating the content or
              accuracy, and we do not warrant and will not have any liability or
              responsibility for any third-party materials or applications, or
              any other materials, products, or services of third parties.
            </p>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              We are not liable for any harm or damages related to the purchase
              or use of goods, services, resources, content, or any other
              transactions made in connection with any third-party applications.
              Please review the third party&apos;s policies and practices
              carefully and make sure you understand them before you engage in
              any transaction. Complaints, claims, concerns, or questions
              regarding third-party products should be directed to the third
              party.
            </p>
          </section>
          <section className="space-y-4">
            <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-hitam-judul-body uppercase">
              SECTION 8 - PERSONAL INFORMATION
            </h3>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              Your submission of personal information through the store is
              governed by our Privacy Policy. To view our Privacy Policy, please
              visit the Privacy section of our application.
            </p>
          </section>
          <section className="space-y-4">
            <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-hitam-judul-body uppercase">
              SECTION 9 - ERRORS, INACCURACIES, AND OMISSIONS
            </h3>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              Occasionally, there may be information on our application or in
              the Service that contains typographical errors, inaccuracies, or
              omissions that may relate to product descriptions, pricing,
              promotions, offers, or availability. We reserve the right to
              correct any errors, inaccuracies, or omissions, and to change or
              update information or cancel any information in the Service or on
              any related application that is inaccurate at any time without
              prior notice (including after you have purchased one of our NFTs).
            </p>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              We undertake no obligation to update, amend, or clarify
              information in the Service or on any related application,
              including, without limitation, pricing information, except as
              required by law. No specified update or refresh date applied in
              the Service or on any related application should be taken to
              indicate that all information in the Service or on any related
              application has been modified or updated.
            </p>
          </section>
          <section className="space-y-4">
            <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-hitam-judul-body uppercase">
              SECTION 10 - PROHIBITED USES
            </h3>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              In addition to other prohibitions as set forth in the Terms of
              Service, you are prohibited from using the application or its
              content: (a) for any unlawful purpose; (b) to solicit others to
              perform or participate in any unlawful acts; (c) to violate any
              international, federal, provincial, or state regulations, rules,
              laws, or local ordinances; (d) to infringe upon or violate our
              intellectual property rights or the intellectual property rights
              of others; (e) to harass, abuse, insult, harm, defame, slander,
              disparage, intimidate, or discriminate based on gender, sexual
              orientation, religion, ethnicity, race, age, national origin, or
              disability; (f) to submit false or misleading information; (g) to
              upload or transmit viruses or any other type of malicious code
              that will or may be used in any way that will affect the
              functionality or operation of the Service, any related
              application, other applications, or the Internet; (h) to collect
              or track the personal information of others; (i) to spam, phish,
              pharm, pretext, spider, crawl, or scrape; (j) for any obscene or
              immoral purpose; or (k) to interfere with or circumvent the
              security features of the Service, any related application, other
              applications, or the Internet. We reserve the right to terminate
              your use of the Service or any related application for violating
              any of the prohibited uses.
            </p>
          </section>
          <section className="space-y-4">
            <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-hitam-judul-body uppercase">
              SECTION 11 - DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY
            </h3>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              We do not guarantee, represent, or warrant that your use of our
              Service will be uninterrupted, timely, secure, or error-free.
            </p>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              We do not warrant that the results that may be obtained from the
              use of the Service will be accurate or reliable.
            </p>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              You agree that, from time to time, we may remove the Service for
              indefinite periods or cancel the Service at any time without
              notice to you. You expressly agree that your use of, or inability
              to use, the Service is at your sole risk. The Service and all
              products and services delivered to you through the Service are
              (except as expressly stated by us) provided &quot;as is&quot; and
              &quot;as available&quot; for your use, without any
              representations, warranties, or conditions of any kind, either
              express or implied, including all implied warranties or conditions
              of merchantability, merchantable quality, fitness for a particular
              purpose, durability, title, and non-infringement.
            </p>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              In no case shall {entityName}, our directors, officers, employees,
              affiliates, agents, contractors, interns, shareholders, suppliers,
              service providers, or licensees be liable for any injury, loss,
              claim, or any direct, indirect, incidental, punitive, special, or
              consequential damages of any kind, including, without limitation,
              lost profits, lost revenue, lost savings, loss of data,
              replacement costs, or any similar damages, whether based in
              contract, tort (including negligence), strict liability, or
              otherwise, arising from your use of the Service or any products
              procured using the Service or from us, or for any other claim
              related in any way to your use of the Service or any product,
              including, but not limited to, any errors or omissions in any
              content, or any loss or damage of any kind incurred as a result of
              the use of the Service or any content (or product) posted,
              transmitted, or otherwise made available via the Service, even if
              advised of their possibility. Because some countries, states, or
              jurisdictions do not allow the exclusion or the limitation of
              liability for consequential or incidental damages, in such states
              or jurisdictions, our liability shall be limited to the maximum
              extent permitted by law.
            </p>
          </section>
          <section className="space-y-4">
            <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-hitam-judul-body uppercase">
              SECTION 12 – INDEMNIFICATION
            </h3>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              You agree to indemnify, defend, and hold harmless {entityName} and
              our parent, subsidiaries, affiliates, partners, officers,
              directors, shareholders, agents, contractors, licensees, service
              providers, subcontractors, suppliers, interns, and employees from
              any claim or demand, including reasonable attorneys’ fees, made by
              any third party due to or arising out of your breach of these
              Terms, the documents they incorporate by reference, or your
              violation of any law or the rights of a third party.
            </p>
          </section>
          <section className="space-y-4">
            <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-hitam-judul-body uppercase">
              SECTION 13 – SEVERABILITY
            </h3>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              If any provision of these Terms is determined to be unlawful,
              void, or unenforceable, such provision shall nonetheless be
              enforceable to the fullest extent permitted by applicable law, and
              the unenforceable portion shall be deemed severed from these
              Terms. Such determination shall not affect the validity and
              enforceability of any other remaining provisions.
            </p>
          </section>
          <section className="space-y-4">
            <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-hitam-judul-body uppercase">
              SECTION 14 - ENTIRE AGREEMENT
            </h3>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              The failure of us to exercise or enforce any right or provision of
              these Terms shall not constitute a waiver of such right or
              provision. These Terms, and any policies or operating rules posted
              by us on this application or in respect to the Service, constitute
              the entire agreement and understanding between you and us and
              govern your use of the Service, superseding any prior or
              contemporaneous agreements, communications, and proposals, whether
              oral or written, between you and us (including, but not limited
              to, any prior versions of the Terms). Any ambiguities in the
              interpretation of these Terms shall not be construed against the
              drafting party.
            </p>
          </section>
          <section className="space-y-4">
            <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-hitam-judul-body uppercase">
              SECTION 15 - GOVERNING LAW & DISPUTES
            </h3>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              These Terms and any separate agreements whereby we provide you
              Services shall be governed by and construed under the laws of the
              Republic of Indonesia.
            </p>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              Waiver:
            </p>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              The parties (you and us) hereby waive their rights to go to court
              and have a trial in front of a judge or a jury. In addition, all
              claims must be arbitrated or litigated on an individual basis and
              not on a class basis, and claims of more than one customer cannot
              be arbitrated or litigated jointly or consolidated with those of
              any other customer or user.
            </p>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              Claims Settlement:
            </p>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              In case of any dispute, all parties should try to resolve their
              differences in connection with the Terms of Use or any product or
              service provided by us through informal discussion and
              negotiation, or the Republic of Indonesia Small Claims Tribunal.
            </p>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              You hereby waive your rights—constitutional, statutory, and
              otherwise—to go to court and have a trial in front of a judge or a
              jury. In addition, all claims must be arbitrated or litigated on
              an individual basis and not on a class basis, and claims of more
              than one customer cannot be arbitrated or litigated jointly or
              consolidated with those of any other customer or user.
            </p>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              All claims and disputes that cannot be settled informally or
              through the Republic of Indonesia Small Claims Tribunal shall be
              resolved by binding arbitration, as described below. This
              arbitration agreement applies to you and {entityName}, including
              its directors, officers, employees, affiliates, agents,
              contractors, interns, shareholders, suppliers, service providers,
              licensees, successors, or assigns.
            </p>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              Before either party seeks arbitration, the party must send a
              Notice of Dispute describing the nature and basis of the claim or
              dispute and the requested relief. A Notice of Dispute to{" "}
              {entityName} should be sent by registered mail to our address in
              the real world at {entityAddress}. If the claim is unresolved
              within 30 days, either party may begin an arbitration proceeding.
              Any dispute, controversy, difference, or claim arising out of or
              relating to this contract—including the existence, validity,
              interpretation, performance, breach, or termination thereof, or
              any dispute regarding non-contractual obligations arising out of
              or relating to it—shall be referred to and finally resolved by
              arbitration administered by the BANI Arbitration Center
              (https://baniarbitration.org/) under the BANI Administered
              Arbitration Rules in force when the Notice of Arbitration is
              submitted.
            </p>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              The law of this arbitration clause shall be the law of the
              Republic of Indonesia. The seat of arbitration shall be Indonesia.
              The number of arbitrators shall be three. The arbitration
              proceedings shall be conducted in English. The decisions of the
              BANI Arbitration Center shall be binding on each party and final,
              and all aspects of the arbitration proceeding—including, but not
              limited to, the award of the arbitrator—shall be strictly
              confidential.
            </p>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              In any case, any claim against us shall not exceed the amount you
              paid us for the services and products in the six months preceding
              your claim, and within the maximum amount corresponding to the
              maximum quantity of NFTs you may buy from us as shown on our
              application.
            </p>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              Small Claims Tribunal:
            </p>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              Notwithstanding the foregoing, either you or {entityName}
              may bring an individual action in the Small Claims Tribunal of the
              Republic of Indonesia.
            </p>
          </section>
          <section className="space-y-4">
            <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-hitam-judul-body uppercase">
              SECTION 16 - CHANGES TO TERMS AND CONDITIONS OF USE
            </h3>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              You can review the most current version of the Terms and
              Conditions of Use at any time on this page.
            </p>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              We reserve the right, at our sole discretion, to update, change,
              or replace any part of these Terms by posting updates and changes
              to our website. It is your responsibility to check our website
              periodically for changes. Your continued use of or access to our
              website or the Service following the posting of any changes to
              these Terms constitutes acceptance of those changes.
            </p>
          </section>
          <section className="space-y-4">
            <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-hitam-judul-body uppercase">
              SECTION 17 - CONTACT INFORMATION
            </h3>
            <p className="text-sm font-medium text-icon-wording leading-relaxed">
              Questions about the Terms should be sent to us at: {entityEmail}.
            </p>
          </section>
        </main>
      </div>

      {/* Bottom Image */}
      <footer className="w-full bg-hitam-judul-body py-4 px-4 md:px-20">
        <div className="w-full border-t border-border-tombol mt-4 pt-4 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4">
          {/* Copyrights (Left on lg, Center on md) */}
          <div className="w-full text-xs text-center sm:text-left text-icon-wording">
            <p>
              © 2025 Harmoni Istiqlal X Bukhari Creative Group. All rights
              reserved.
            </p>
            <div className="flex justify-center sm:justify-start gap-4 mt-2">
              <Link
                href="/terms"
                target="_blank"
                className="text-xs text-center sm:text-left text-back-ground">
                Terms of Service
              </Link>
              <Link
                href="/privacy"
                target="_blank"
                className="text-xs text-center sm:text-left text-back-ground">
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Logo & Powered By (Right on lg, Center on md) */}
          <div className="w-full flex justify-center sm:justify-end">
            <Image
              src="/images/bukhari-fa-logo-footer.png"
              alt="Harmoni Istiqlal X Bukhari Creative Group"
              width={768}
              height={60}
            />
          </div>
        </div>
      </footer>
    </>
  );
}
