import Header from '../../components/header/Index';
import Footer from '../../components/footer/Index';
import HeroTitle from '../../components/body/HeroTitle';
import ProjectCardLayout from '../../components/body/ProjectCardLayout';
import '../../assets/styles/style.scss';

function Home() {
    return (
        <>
          <Header />
          <span>
            <HeroTitle title="We are  Aras™ Digital Products. Creators of end-to-end  digital products.  Mostly mobile apps.  Not just mobile apps. ↘"/>
          </span>
          <div className="projects">
            <h3>↘ Recent projects</h3>
            <ProjectCardLayout />
          </div>
          <Footer />
        </>
    )
}

export default Home;