import ProjectCard from "./ProjectCard";
import FoodtruxBanner from "../../assets/img/foodtrux-small.jpg?react";
import FoodtruxIcon from "../../assets/img/foodtrux.svg?react";
import Dobartekbanner from "../../assets/img/dobartek-small.jpg?react";
import DobartekIcon from "../../assets/img/dobar-tek-logo.svg?react";
import McKinseybanner from '../../assets/img/mckinsey-large.jpg?react';
import McKinseyIcon from "../../assets/img/mckinsey.svg?react";
import HajdukBanner from "../../assets/img/Homepage-HajdukBanner.png?react";
import HajdukIcon from "../../assets/img/Hajduk.svg?reatc";
import NutricionistBanner from "../../assets/img/nutricionist-small.jpg?react";
import NutricionistIcon from "../../assets/img/nutricionist.svg?react";
import BitcoinBanner from "../../assets/img/bitcoin-store-large.jpg?react";
import BitcoinIcon from "../../assets/img/Bitcoin-store.svg?react";

function ProjectCardLayout() {
    return (
        <>
           <div className="projects-grid">
           <ProjectCard
                projectLink="/foodtrux"
                projectBanner={FoodtruxBanner}
                projectIcon={FoodtruxIcon}
                projectIitle="Foodtrux Apps"
                projectDesc="Discover food trucks near you"
                gridClass="grid-6"
            />
            <ProjectCard
                projectLink="/dobartek"
                projectBanner={Dobartekbanner}
                projectIcon={DobartekIcon}
                projectIitle="Dobartek Apps"
                projectDesc="Food delivery service"
                gridClass="grid-6"
            />
             <ProjectCard
                projectLink="/mckinsey"
                projectBanner={McKinseybanner}
                projectIcon={McKinseyIcon}
                projectIitle="McKinsey&Co"
                projectDesc="Expense and travel management app"
                gridClass="grid-12"
            />
             <ProjectCard
                projectLink="/hajduk"
                projectBanner={HajdukBanner}
                projectIcon={HajdukIcon}
                projectIitle="HNK Hajduk Split"
                projectDesc="The most significant foodball club in Croatia"
                gridClass="grid-6"
            />
             <ProjectCard
                projectLink="/nutricionist"
                projectBanner={NutricionistBanner}
                projectIcon={NutricionistIcon}
                projectIitle="Nutricionist"
                projectDesc="Digitalisation of nutritionist practice using Mobile and Web Apps"
                gridClass="grid-6"
            />
             <ProjectCard
                projectLink="/bitcoin-store"
                projectBanner={BitcoinBanner}
                projectIcon={BitcoinIcon}
                projectIitle="Bitcoin Store"
                projectDesc="Buy and sell Bitcoin and other crypto"
                gridClass="grid-12"
            />
           </div>
        </>
    );
}

export default ProjectCardLayout;