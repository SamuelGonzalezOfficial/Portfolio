import React from 'react';
import './Skills.css'

//Icons
import htmlBig from '../../assets/images/html-big.png';
import cssBig from '../../assets/images/css-big.png';
import jsBig from '../../assets/images/javascript-big.png';
import mongoBig from '../../assets/images/mongodb-big.png';
import nodeBig from '../../assets/images/nodejs-big.png';
import reactBig from '../../assets/images/react-big.png';
import git from '../../assets/images/git.png';
import powershellBig from '../../assets/images/powershell-big.png';
import vscBig from '../../assets/images/vsc-big.png';


function Skills(){
    return (
        <section className="skills-container">
            <h2 className="skills-title">
                <span className="key">{"{"}</span> Habilidades <span className="key">{"}"}</span>
            </h2>
            <div className="skills-box">
                <div className="skill">
                    <img src={htmlBig} />
                    <p className="skill-name">HTML5</p>
                </div>
                <div className="skill">
                    <img src={cssBig} />
                    <p className="skill-name">CSS3</p>
                </div>
                <div className="skill">
                    <img src={jsBig} />
                    <p className="skill-name">JavaScript</p>
                </div>
                <div className="skill">
                    <img src={nodeBig} />
                    <p className="skill-name">Node.js</p>
                </div>
                <div className="skill">
                    <img src={mongoBig} />
                    <p className="skill-name">MongoDB</p>
                </div>
                <div className="skill">
                    <img src={reactBig} />
                    <p className="skill-name">React</p>
                </div>
                <div className="skill">
                    <img src={git} />
                    <p className="skill-name">Git</p>
                </div>
                <div className="skill">
                    <img src={powershellBig} />
                    <p className="skill-name">PowerShell</p>
                </div>
                <div className="skill">
                    <img src={vscBig} />
                    <p className="skill-name">Visual Studio Code</p>
                </div>
            </div>
        </section>
    )
}

export { Skills }