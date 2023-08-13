import React, { useEffect, useState } from 'react';
import WorksItems from './WorksItems';
import { projectNav,projectsData } from './data';

const Works = () => {
    const [item, setItem] = useState({ name: "all" });
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        if (item.name === "all") {
            setProjects(projectsData);
        } else {
            const newProjects = projectsData.filter((project) => {
                return project.category.toLowerCase() === item.name;
            });
            setProjects(newProjects);
        }
    }, [item]);
    
    const handleClick = (e, index) => {
        setItem({ name: e.target.textContent.toLowerCase()});
        setActive(index);
    };

    return (
        <div>
            <div className="work__filters">
                {projectNav.map((item, index) => {
                    return (
                        <span
                        onClick={(e) => {
                            handleClick(e, index);
                        }}
                            className={`work__item ${active === index ?
                        "active-work":""}`}
                        key={index}
                    >
                        {item.name}
                        </span>
                    );
                })}
            </div>
            <div className="work__container container grid">
                {projects.map((item) => {
                    return <WorksItems key={item.id} item={item}/>
                })}
            </div>
        </div>
    );
};

export default Works;