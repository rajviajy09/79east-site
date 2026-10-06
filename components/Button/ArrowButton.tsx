import "./ArrowButton.css"
type ArrowButtonProps = {
  name: string;
  href?: string;
};

export default function ArrowButton({ name, href }: ArrowButtonProps) {
    return (
      <div className={`btn-group`}>
        <a href={href} className="btn-icon-link w-inline-block cursor-pointer">
          <div className="btn-icon-content">
            <div className="btn-icon-content__mask">
              <span data-button-anim-target="" className="btn-icon-content__text font-semibold uppercase">
                {name}
              </span>
            </div>
            <div data-icon-size="normal" className="btn-icon-icon">
              <div data-button-anim-target="" className="btn-icon-icon__bg"></div>
              <div className="btn-icon-icon__wrap">
                <div className="btn-icon-icon__list">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 10 8" fill="none" data-button-anim-target="" className="btn-icon-icon__arrow">
                    <path d="M4.45231 0.385986H6.02531L9.30131 3.99999L6.02531 7.61399H4.45231L7.40331 4.58499H0.695312V3.42799H7.41631L4.45231 0.385986Z" fill="currentColor"></path>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 10 8" fill="none" data-button-anim-target="" className="btn-icon-icon__arrow">
                    <path d="M4.45231 0.385986H6.02531L9.30131 3.99999L6.02531 7.61399H4.45231L7.40331 4.58499H0.695312V3.42799H7.41631L4.45231 0.385986Z" fill="currentColor"></path>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 10 8" fill="none" data-button-anim-target="" className="btn-icon-icon__arrow">
                    <path d="M4.45231 0.385986H6.02531L9.30131 3.99999L6.02531 7.61399H4.45231L7.40331 4.58499H0.695312V3.42799H7.41631L4.45231 0.385986Z" fill="currentColor"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div data-button-anim-target="" className="btn-icon-content__bg"></div>
          </div>
        </a>
  
        
      </div>
    );
  }