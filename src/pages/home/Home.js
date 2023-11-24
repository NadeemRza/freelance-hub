import "./home.scss";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slider from "../../components/slider/Slider";
import { cards, projects } from "../../data";
import CategoryCard from "../../components/categoryCard/CategoryCard";
import FeaturedVideo from "../../components/featuredVideo/FeaturedVideo";
import FeaturedImage from "../../components/featuredImage/FeaturedImage";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { SwiperSlide } from "swiper/react";

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slider slidesToShow={5}>
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <CategoryCard item={card} />
          </SwiperSlide>
        ))}
      </Slider>
      <FeaturedVideo />
      <FeaturedImage />
      <Slider slidesToShow={4}>
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <ProjectCard item={project} />
          </SwiperSlide>
        ))}
      </Slider>
    </div>
  );
};

export default Home;
