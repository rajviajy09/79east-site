import "./ArrowButton2.css";

type ArrowButton2Props = {
  name: string;
  href?: string;
};

export default function ArrowButton2({ name, href }: ArrowButton2Props) {
  return (
    <div className="btn2-group">
      <a href={href} className="btn2-icon-link w-inline-block cursor-pointer">
        <div className="btn2-icon-content">
          <div className="btn2-icon-content__mask">
            <span
              data-button2-anim-target=""
              className="btn2-icon-content__text font-semibold uppercase"
            >
              {name}
            </span>
          </div>
          <div data-icon-size="normal" className="btn2-icon-icon">
            <div
              data-button2-anim-target=""
              className="btn2-icon-icon__bg"
            ></div>
            <div className="btn2-icon-icon__wrap">
              <div className="btn2-icon-icon__list">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  viewBox="0 0 10 8"
                  fill="none"
                  data-button2-anim-target=""
                  className="btn2-icon-icon__arrow"
                >
                  <path
                    d="M4.45231 0.385986H6.02531L9.30131 3.99999L6.02531 7.61399H4.45231L7.40331 4.58499H0.695312V3.42799H7.41631L4.45231 0.385986Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  viewBox="0 0 10 8"
                  fill="none"
                  data-button2-anim-target=""
                  className="btn2-icon-icon__arrow"
                >
                  <path
                    d="M4.45231 0.385986H6.02531L9.30131 3.99999L6.02531 7.61399H4.45231L7.40331 4.58499H0.695312V3.42799H7.41631L4.45231 0.385986Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  viewBox="0 0 10 8"
                  fill="none"
                  data-button2-anim-target=""
                  className="btn2-icon-icon__arrow"
                >
                  <path
                    d="M4.45231 0.385986H6.02531L9.30131 3.99999L6.02531 7.61399H4.45231L7.40331 4.58499H0.695312V3.42799H7.41631L4.45231 0.385986Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div
            data-button2-anim-target=""
            className="btn2-icon-content__bg"
          ></div>
        </div>
      </a>
    </div>
  );
}