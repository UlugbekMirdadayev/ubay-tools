import { useMemo } from "react";
import { FooterStyled } from "./style";
import { Link, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { InstaIcon, TIcon, YouTubeIcon } from "../icon";
import Selectors from "../../redux/selectors";
import locale from "../../localization/locale.json";

const Footer = () => {
  const { pathname } = useLocation();
  const lang = Selectors.useLang();
  const langData = useMemo(() => locale[lang]["footer"], [lang]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const links = [
    [
      {
        name: langData.organizations,
        link: "/organizations",
      },

      {
        name: langData.landlords,
        link: "/landlords",
      },

      {
        name: langData.contacts,
        link: "/contacts",
      },
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
        name: langData.our_stores,
        link: "/our-stores",
      },
      {
        name: langData.sales,
        link: "/sales",
      },
      {
        name: langData.vacancies,
        link: "/vacancies",
      },
      {
        name: langData.batteries_lion,
        link: "/batteries-lion",
      },
      {
        name: langData.hand_tools,
        link: "/hand-tools",
      },
      {
        name: langData.branches,
        link: "/branches",
      },
      {
        name: langData.certificates,
        link: "/certificates",
      },
    ],
  ];

  return (
    <FooterStyled path={pathname}>
      {langData.desc.map((text, key) => (
        <p key={key} className="desc">
          {text}
        </p>
      ))}
      <form onSubmit={handleSubmit(onSubmit)} className="contact">
        <h1 className="title">{langData.contact.title}</h1>
        <div className="col">
          <label className={`input_card ${errors.name ? "error" : ""}`}>
            <p>{langData.contact.name}</p>
            <input type="text" placeholder="John Doe" {...register("name", { required: true })} />
          </label>
          <div className="row">
            <label
              className={`row_input input_card ${errors.number ? "error" : ""}`}
            >
              <span>+998</span>
              <input
                type="tel" placeholder="771234567"
                {...register("number", { required: true, maxLength: 9 })}
              />
            </label>
            <label className={`input_card ${errors.email ? "error" : ""}`}>
              <p>{langData.contact.email}</p>
              <input type="email" placeholder="ok@gmail.com" {...register("email", { required: true })} />
            </label>
          </div>
        </div>
        <button>{langData.contact.submit}</button>
        <img
          src="https://ubaytools.com/static/media/form_img.75d3a22d7ad3b67c6633.png"
          alt="img"
        />
      </form>
      <nav aria-label="nav-link">
        <div className="block">
          <div className="title_link">{langData.info_contact}</div>
          <ul className="mini-list">
            <span>{langData.hotline}</span>
            <a href="tel:+998 99 011 89 34">99 011 89 34</a>
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
            {links[0].map((link) => (
              <Link key={link.link} to={link.link}>
                {link.name}
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
              href="https://youtube.com/"
            >
              <YouTubeIcon />
            </a>
            <a
              target="_blank"
              rel="noreferrer nooperer"
              href="https://instagram.com/"
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
              <img
                src="https://ubaytools.com/static/media/click.b1d66da9714e224ee48f.png"
                alt="payment"
              />
              <img
                src="https://ubaytools.com/static/media/uzum.dc3fb82565b308a8ec81.png"
                alt="payment"
              />
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
