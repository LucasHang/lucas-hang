import type { LinksFunction } from "@remix-run/node";
import { RiUserLocationFill } from "@react-icons/all-files/ri/RiUserLocationFill";
import { RiWhatsappFill } from "@react-icons/all-files/ri/RiWhatsappFill";
import { RiMailFill } from "@react-icons/all-files/ri/RiMailFill";
import { RiGithubFill } from "@react-icons/all-files/ri/RiGithubFill";
import { RiLinkedinBoxFill } from "@react-icons/all-files/ri/RiLinkedinBoxFill";

import stylesUrl from "~/styles/contacts.css";
import ContentHeader, {
  links as contentHeaderLinks,
} from "~/components/ContentHeader";
import { useTranslation } from "react-i18next";

export const links: LinksFunction = () => {
  return [...contentHeaderLinks(), { rel: "stylesheet", href: stylesUrl }];
};

export default function Contacts() {
  const { t } = useTranslation();

  return (
    <div className="contacts-container">
      <ContentHeader title={t("question_contact")} />

      <div className="content">
        <h4>{t("contacts_title")}</h4>

        <div className="contacts-links">
          <a
            href="https://goo.gl/maps/ef9sarSe47Y1bfWP8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiUserLocationFill size={20} />
            <div>
              <small>{t("contacts_address")}</small>
              <br />
              <span>Jardim São Paulo, São João Batista - SC</span>
            </div>
          </a>

          <a
            href="https://wa.me/5548991518490"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiWhatsappFill size={20} />
            <div>
              <small>{t("contacts_phone")}</small>
              <br />
              <span>+55 (48) 99151-8490</span>
            </div>
          </a>

          <a href="mailto:lucas.hhang@gmail.com">
            <RiMailFill size={20} />
            <div>
              <small>E-mail</small>
              <br />
              <span>lucas.hhang@gmail.com</span>
            </div>
          </a>

          <a
            href="https://github.com/LucasHang"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiGithubFill size={20} />
            <div>
              <small>GitHub</small>
              <br />
              <span>github.com/LucasHang</span>
            </div>
          </a>

          <a
            href="https://linkedin.com/in/lucas-hang"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiLinkedinBoxFill size={20} />
            <div>
              <small>Linkedin</small>
              <br />
              <span>linkedin.com/in/lucas-hang</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
