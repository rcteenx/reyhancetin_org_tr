import HeaderTitle from "@/components/templates/headerTitle";
import HeaderImage from "@/components/templates/headerImage";
import PageContent from "@/components/templates/pageContent";

import Support from "@/components/sections/home/x6-support";
import SocialMedia from "@/components/sections/common/z-social-media";

export default function StaticPage() {
  return (
    <>
      <HeaderTitle>İletişim</HeaderTitle>
      <HeaderImage bgImage="iMerhaba">Bize Ulaşın</HeaderImage>

      <PageContent h2Title="İletişim Bilgileri">
        <p>Bize aşağıdaki kanallardan ulaşabilirsiniz.</p>
        <ul>
          <li>
            <dd className="font-semibold">Whatsapp & Telefon:</dd>
            <dt>
              <a href="tel:+905443087402">+90 (544) 308 74 02</a>
            </dt>
          </li>
          <li className="mt-4">
            <dd className="font-semibold">Email:</dd>
            <dt>
              <a href="mailto:rhan.cetinx@gmail.com">rhan.cetinx@gmail.com</a>
            </dt>
          </li>
        </ul>
        <p>Sevgilerle...</p>
        <div id="mc_embed_shell" className="border p-4">
          <div id="mc_embed_signup">
            <form
              action="https://reyhancetin.us13.list-manage.com/subscribe/post?u=4e14d027bae9d27df6700b35d&amp;id=6a82733c5b&amp;f_id=009864e2f0"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              class="validate"
              target="_self"
              novalidate=""
            >
              <div id="mc_embed_signup_scroll">
                <h3>Mail Listemize Üye Olun</h3>

                <div class="sm:flex items-center">
                  <input
                    type="email"
                    name="EMAIL"
                    id="mce-EMAIL"
                    required="required"
                    placeholder="Enter your email"
                    aria-label="Email address"
                    class="w-full px-5 py-3 text-base leading-6 transition duration-150 ease-in-out border-2 rounded-md appearance-none focus:outline-none sm:max-w-xs border-gray-200 text-gray-900 placeholder-gray-500 focus:placeholder-gray-400 bg-white"
                  />
                  <div class="mt-3 sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                    <input
                      type="submit"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                      value="Subscribe"
                      class="block px-5 py-3 text-white transition duration-100 ease-in-out bg-blue-500 border border-transparent rounded shadow-sm hover:bg-blue-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    ></input>
                  </div>
                </div>
              </div>
            </form>
            <p class="mt-3 text-sm leading-5 text-gray-500">
              <a
                href="http://eepurl.com/iTflO-"
                title="Mailchimp - email marketing made easy and fun"
              >
                <span>
                  <img
                    class="refferal_badge"
                    src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg"
                    alt="Intuit Mailchimp"
                    className="w-48"
                  />
                </span>
              </a>
            </p>
          </div>
        </div>
      </PageContent>

      <Support />
      <SocialMedia />
    </>
  );
}
