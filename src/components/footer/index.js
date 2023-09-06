import { useMemo } from "react";
import { FooterStyled } from "./style";
import { Link, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { InstaIcon, TIcon, YouTubeIcon } from "../icon";
import Selectors from "../../redux/selectors";
import locale from "../../localization/locale.json";
import { api } from "../../api";
import { toast } from "react-toastify";

const Footer = () => {
  const { pathname } = useLocation();
  const lang = Selectors.useLang();
  const user = Selectors.useUser();
  const langData = useMemo(() => locale[lang]["footer"], [lang]);
  const { categories } = Selectors.useCategories();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, product_id, form) => {
    data.product_id = product_id;
    !product_id && delete data.product_id;
    data.phone = "998" + data.phone;
    api
      .application_add(data)
      .then(({ data }) => {
        toast.success(data?.message);
        reset();
        form?.target?.removeAttribute("data-prod-id");
      })
      .catch(({ response: { data } = { data: { message: "Network error"} } }) => {
        console.log(data);
        toast.error(data?.message || JSON.stringify(data));
      });
  };

  const links = [
    [
      // {
      //   name: langData.organizations,
      //   link: "/organizations",
      // },
      // {
      //   name: langData.landlords,
      //   link: "/landlords",
      // },
      // {
      //   name: langData.contacts,
      //   link: "/contacts",
      // },
    ],
    [
      {
        name: langData.about_us,
        link: "/about-us",
      },
      {
        name: langData.news,
        link: "/news",
      },
      {
        name: langData.our_address,
        link: "/our-address",
      },
      // {
      //   name: langData.our_stores,
      //   link: "/our-stores",
      // },
      // {
      //   name: langData.sales,
      //   link: "/sales",
      // },
      // {
      //   name: langData.vacancies,
      //   link: "/vacancies",
      // },
      // {
      //   name: langData.batteries_lion,
      //   link: "/batteries-lion",
      // },
      // {
      //   name: langData.hand_tools,
      //   link: "/hand-tools",
      // },
      // {
      //   name: langData.branches,
      //   link: "/branches",
      // },
      // {
      //   name: langData.certificates,
      //   link: "/certificates",
      // },
    ],
  ];

  const isRight = useMemo(
    () => pathname === "/" || ["category"].includes(pathname?.split("/")[1]),
    [pathname]
  );

  const isNight = useMemo(() => {
    const result = ["banner"].includes(pathname?.split("/")[1]);
    result
      ? (document.body.style.backgroundColor = "#192128")
      : document.body.removeAttribute("style");
    return result;
  }, [pathname]);

  return (
    <FooterStyled
      style={isRight ? {} : { marginRight: "auto" }}
      className={isNight ? "isNight" : ""}
    >
      {langData.desc.map((text, key) => (
        <p key={key} className="desc">
          {text}
        </p>
      ))}
      <form
        onSubmit={(e) => {
          handleSubmit((data) =>
            onSubmit(data, e.target.attributes?.["data-prod-id"]?.value, e)
          )(e);
        }}
        className="contact"
        id="contact-form"
      >
        <h1 className="title">{langData.contact.title}</h1>
        <div className="col">
          <label className={`input_card ${errors.fullName ? "error" : ""}`}>
            <p>{langData.contact.name}</p>
            <input
              type="text"
              placeholder="John Doe"
              defaultValue={user?.fullName}
              {...register("fullName", { required: true })}
            />
          </label>
          <div className="row">
            <label
              className={`row_input input_card ${errors.phone ? "error" : ""}`}
            >
              <span>+998</span>
              <input
                type="tel"
                defaultValue={user?.phone?.replace("998", "")}
                placeholder="771234567"
                {...register("phone", {
                  required: true,
                  maxLength: {
                    value: 9,
                  },
                  minLength: {
                    value: 9,
                  },
                  pattern: {
                    value: /^(0|[1-9]\d*)(\.\d+)?$/,
                  },
                })}
              />
            </label>
            <label className={"input_card"}>
              <p>{langData.contact.email}</p>
              <input
                type="email"
                placeholder="ok@gmail.com"
                {...register("email")}
              />
            </label>
          </div>
        </div>
        <button>{langData.contact.submit}</button>
        <img src={require("../../images/footer-drell.png")} alt="img" />
      </form>
      <nav aria-label="nav-link">
        <div className="block">
          <div className="title_link">{langData.info_contact}</div>
          <ul className="mini-list">
            <span>{langData.hotline}</span>
            <a href="tel:+998 90 000 50 20">90 000 50 20</a>
          </ul>
          <ul className="mini-list">
            <span>{langData.contact.email}</span>
            <a href="mailto:ubaytools@info.com">ubaytools@info.com</a>
          </ul>
          <ul className="list">
            {links[0].map((link) => (
              <Link key={link.link} to={link.link}>
                {link.name}
              </Link>
            ))}
          </ul>
        </div>
        <div className="block">
          <div className="title_link">{langData.about_company}</div>
          <ul className="list">
            {links[1].map((link) => (
              <Link key={link.link} to={link.link}>
                {link.name}
              </Link>
            ))}
          </ul>
        </div>
        <div className="block">
          <div className="title_link">{langData.products}</div>
          <ul className="list">
            {categories.map((link) => (
              <Link key={link._id} to={`/category/${link.seo}`}>
                {link[lang === "uz" ? "title_uz" : "title"]}
              </Link>
            ))}
          </ul>
        </div>
        <div className="block">
          <div className="title_link">{langData.we_are_social}</div>
          <div className="row_links">
            <a
              target="_blank"
              rel="noreferrer nooperer"
              href="https://www.youtube.com/@ubaytools"
            >
              <YouTubeIcon />
            </a>
            <a
              target="_blank"
              rel="noreferrer nooperer"
              href="https://www.instagram.com/ubaytools.uz/"
            >
              <InstaIcon />
            </a>
            <a
              target="_blank"
              rel="noreferrer nooperer"
              href="https://t.me/ubay_tools"
            >
              <TIcon />
            </a>
          </div>
          <ul className="mini-list">
            <a href={"#pay"}>{langData.payment}</a>
            <div className="payments">
              <img src={require("../../images/click.png")} alt="payment" />
              <img src={require("../../images/uzum.png")} alt="payment" />
            </div>
          </ul>
        </div>
      </nav>
      <div className="copyright">
        <span>Copyright © Ubaytools | Designed by</span>
        <span>abba marketing</span>
        <span>- Powered by</span>
        <span>ABBA</span>
      </div>
    </FooterStyled>
  );
};

export default Footer;
