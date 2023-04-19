import React from "react";
import scss from "./Contact.module.scss";
import { BsArrowRight } from "react-icons/bs";

const Contact = () => {
  return (
    <section style={{ backgroundColor: "white", color: "rgba(0, 0, 0, 0.8)" }}>
      <div className={scss.page}>
        <div className={scss.sectionTitle}>
          <h3>Send me a message!</h3>
          <hr />
          <p>Got a question, proposal or just want to say hello? Go ahead.</p>
        </div>

        {/* <div className={scss.form}>
          <article>
            <div id={scss.firstInput}>
              <input type="text" name="name" id="name" />
              <span>Enter your name</span>
            </div>
            <div id={scss.secondInput}>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address"
              />
            </div>
          </article>

          <article>
            <div>
              <input
                type="text"
                name="message"
                id="message"
                placeholder="Enter your message, question or something ..."
              />
            </div>
            <div>
              <button>SEND MESSAGE</button>
            </div>
          </article>
        </div> */}

        <form className={scss.form}>
          <div className={scss.row}>
            <label htmlFor="" className={scss.halfWidth}>
              <input type="text" placeholder="&nbsp;" />
              <span>Enter your name</span>
            </label>
            <label htmlFor="" className={scss.halfWidth}>
              <input type="email" placeholder="&nbsp;" />
              <span>Enter your email address</span>
            </label>
          </div>
          <div className={scss.row}>
            <label htmlFor="" className={scss.fullfWidth}>
              <input type="text" placeholder="&nbsp;" />
              <span>Enter your message, question or something ...</span>
            </label>
          </div>
          <button type="submit">
            <p>SEND MESSAGE</p>{" "}
            <BsArrowRight size={30} style={{ paddingLeft: "8px" }} />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
