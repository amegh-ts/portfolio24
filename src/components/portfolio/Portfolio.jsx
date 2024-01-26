import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "ECommerce",
    img: "https://img.freepik.com/free-vector/gradient-sales-representative-illustration_52683-82971.jpg?w=1380&t=st=1706267830~exp=1706268430~hmac=7d1ec860959fba8964c1e4d50f2e63fe846d6b8d5657557f916e7f28a2401da5",
    desc: "An e-commerce website built using React-JS. Website includes features like add to cart , Orders, Categorized products, Seach functionality.",
    link: "https://e-com-meek-tartufo-90018b.netlify.app/home"
  },
  {
    id: 2,
    title: "Portfolio",
    img: "https://img.freepik.com/free-photo/charismatic-attractive-curly-haired-woman-opening-her-mouth-widely-with-satisfaction_176532-7155.jpg?w=1380&t=st=1706267859~exp=1706268459~hmac=ad02e56897a88146a82ee92eb8b9438f783f1d3d1790c3c469246350b361765a",
    desc: "Portfolio design built in React. Features include display of your details in a single page, active navigation to other details without routing.",
    link:"https://portfolio-aesthetic-kitten-092748.netlify.app/",
  },
  {
    id: 3,
    title: "Gusto",
    img: "https://img.freepik.com/free-photo/fresh-gourmet-meal-beef-taco-salad-plate-generated-by-ai_188544-13382.jpg?w=1380&t=st=1706268100~exp=1706268700~hmac=ebb6fbc398f1acf5bb0738f0c934ca6f3b39ccdacc93c34a16ad0b3b2fbbdab2",
    desc: "UI design for a restaurant, built in React. Features includes signup, sign in, user profile, etc.",
    link:"https://gusto-creative-fox-952b9f.netlify.app/"
  },
  {
    id: 4,
    title: "Job.io",
    img: "https://img.freepik.com/free-photo/friendly-partners-handshaking-group-meeting-thanking-successful-teamwork_1163-4691.jpg?w=1380&t=st=1706268285~exp=1706268885~hmac=2f9a0d486a6af62c95bdfcdf165358066ae20c246dae7fc1727cf35627891a38",
    desc: "Work in progress job portal website",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link}>
              <button>See Demo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
