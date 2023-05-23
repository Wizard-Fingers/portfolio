import Button from "../components/button";
import pointer2 from "../../assets/images/pointer-2.png";
const Introduction = () => {
  const startYear = 2020; // Replace with your starting year

  // Calculate the number of years you've been learning
  const currentYear = new Date().getFullYear();
  const numYears = currentYear - startYear;

  return (
    <div className="mt-[5rem]">
      <div className="flex justify-center">
        <div className="heading text-white p-2 ">
          <div>
            <h3 className="text-4xl flex items-center justify-center">
              <span className="accent written text-6xl">
                {numYears} {numYears > 1}
              </span>
              <span className="heading pr-4 mb-4">+</span>
            </h3>
            <div className="heading mt-4 sm:text-center">
              <p>Years of Working Experience</p>
            </div>
          </div>
        </div>

        <div className="heading text-white p-2 ml-5">
          <div>
            <h3 className="text-4xl flex items-center justify-center">
              <span className="accent written text-6xl">40</span>
              <span className="heading pl-3 mb-4">+</span>
            </h3>
            <div className="heading mt-4 sm:text-center">
              <p>Projects Completed</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-gray-400 py-12 text m-2 md:">
        <p>
          Welcome to my portfolio!
          <br />
          <br />
          I&apos;m a passionate self-taught Frontend Developer with a
          fundamental approach to crafting exceptional web experiences. I
          embarked on this incredible journey by graduating from a reputable
          Bootcamp, where I immersed myself in the world of coding and
          discovered my true passion.
        </p>
        <br />
        <p>
          Throughout my {numYears}
          {numYears > 1}-year adventure, I&apos;ve been fortunate enough to
          collaborate with dynamic international Startups in the Netherlands and
          New Jersey. These experiences have not only expanded my technical
          skills but also broadened my cultural horizons and ignited my
          creativity.
        </p>
        <br />
        <p>
          Now, I find myself proudly contributing my expertise to an established
          company in Swindon, where I continue to grow as a professional and
          embrace new challenges. I thrive on the fast-paced nature of the tech
          industry and constantly seek opportunities for growth and innovation.
        </p>
        <br />
        <p>
          In my quest for excellence, I&apos;ve collaborated closely with SEO
          Accessibility and Digital Marketing teams, refining my skills in
          optimizing user experiences and ensuring the highest standards of
          quality. I believe that good UI and UX practices are essential in
          creating memorable and impactful digital solutions.
        </p>
        <br />
        <p>
          With a diverse background spanning App Development, SaaS, and my
          current foray into the captivating realm of K commerce, I bring a
          unique perspective to every project I undertake.
        </p>
        <br />
        <p>
          I&apos;m not just a developer, but also a creative problem solver who
          is deeply committed to bringing your ideas to life.
          <br />
          <br />
          Let&apos;s connect and embark on an exciting journey together!
        </p>
        <br />
        <div className="w-full flex justify-center">
          <img
            src={pointer2}
            alt="pointer"
            className="w-[4rem] h-[4.5rem] pb-3"
          />
        </div>
        <div className="flex justify-center">
          <Button>Get in touch</Button>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
