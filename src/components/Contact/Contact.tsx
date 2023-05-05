import React from "react";
import scss from "./Contact.module.scss";
import { BsArrowRight } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section style={{ backgroundColor: "white", color: "rgba(0, 0, 0, 0.8)" }}>
      <div className={scss.page}>
        <div className={scss.sectionTitle}>
          <h3>{t("contactSectionTitle")}</h3>
          <hr />
          <p>{t("contactSectionTitleDescription")}</p>
        </div>

        <form className={scss.form}>
          <div className={scss.row}>
            <label htmlFor="" className={scss.halfWidth}>
              <input type="text" placeholder="&nbsp;" />
              <span>{t("contactYourName")}</span>
            </label>
            <label htmlFor="" className={scss.halfWidth}>
              <input type="email" placeholder="&nbsp;" />
              <span>{t("contactEmailAdress")}</span>
            </label>
          </div>
          <div className={scss.row}>
            <label htmlFor="" className={scss.fullfWidth}>
              <input type="text" placeholder="&nbsp;" />
              <span>{t("contactMessage")}</span>
            </label>
          </div>
          <button type="submit">
            <p>{t("contactSubmit")}</p>{" "}
            <BsArrowRight size={30} style={{ paddingLeft: "8px" }} />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
