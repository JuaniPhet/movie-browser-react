import Hero from "./Hero";

const AboutView = () => {
  return (
    <>
      <Hero text="Why we exist" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              Mollit consequat id irure minim. Pariatur minim ut laboris minim
              elit. Anim ea amet aliquip amet excepteur ex. Anim labore
              adipisicing qui ex consequat velit pariatur dolore aliqua veniam
              officia dolore. Tempor id irure laboris dolore elit ut dolor.
              Mollit consequat id irure minim.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutView;
