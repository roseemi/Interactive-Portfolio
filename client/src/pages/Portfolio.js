import '../styles/portfolio.css';
import c from '../assets/c.svg';
import mysql from '../assets/mysql.svg';
import visual_studio_code from '../assets/visual_studio_code.svg';
import intellijidea from '../assets/intellijidea.svg';
import phpstorm from '../assets/phpstorm.svg';

function Portfolio() {
    return (
        <main>
            <section className="hero" id="home">
                <div>
                    <h1 id="portfolio-header">Emily Rose</h1>
                    <h2 id="portfolio-subheader">Software Developer</h2>
                </div>
                <div>
                    <h3>Graduating from Computer Programming in August 2024</h3>
                    <p>rose.emi.dr@gmail.com</p>
                    <p>Greater Toronto Area</p>
                    <a className="portfolio-link" href="https://www.linkedin.com/in/emil-rose/">LinkedIn</a>
                    <a className="portfolio-link" href="https://github.com/roseemi/">Github</a>
                </div>
                <span className="spinner" id="spinner-one"></span>
                <span className="spinner" id="spinner-two"></span>
                <span className="arrow" id="arrow-one"></span>
                <span className="arrow" id="arrow-two"></span>
            </section>
            <section className="about" id="profile">
                <div>
                    <div className="line"></div>
                    <p>Hello! I'm <span>Emily</span>, a <span>Computer Programming</span> student at <span>Georgian College</span>, which I will soon be graduating from later this year with a <span>Diploma of Computer Programming</span>.
                        I previously studied and graduated from the <span>University of Toronto</span> and graduated with a <span>Bachelor Honours of Arts in Cognitive Science</span>, where I studied human and AI cognition.
                        My cumulative education at both institutions makes me a <span>strong software developer</span> with notable proficiency in <span>Java, JavaScript, C#, and CSS</span>.
                        I am currently <span>open for full-time software developer positions</span>. Feel free to reach out to me at any of my <a href="#home">contact methods</a>.
                    </p>
                    <div className="line"></div>
                </div>
            </section>
            <section className="portfolio" id="projects">
                <div className="showcase">
                    <div className="tile lazy-background">
                        <div>
                            <h3>Honeypot Database App</h3>
                            <p>Developed for Bell's Geekfest 2023 Hackathon which won 2nd place, this application helps preserve online data privacy by redirecting malicious actors attempting a SQL injection to a decoy database.</p>
                            <a href="https://github.com/JayCBreak/bellHackathon2023" title="Image by vectorjuice on Freepik" className="portfolio-project-link">Github: <i className="fas fa-code"></i></a>
                            <ul>
                                <li className="project-list-item">Java</li>
                                <li className="project-list-item">FXML</li>
                                <li className="project-list-item">MySQL</li>
                                <li className="project-list-item">CSS</li>
                            </ul>
                        </div>
                    </div>
                    <div className="tile lazy-background">
                        <div>
                            <h3>Travel E-Commerce</h3>
                            <p>Collects data from travel APIs, populates a database, and "sells" various travel packages.
                                Fully supports client sessions, a cart system, an auto-email system, and working Stripe integration.
                            </p>
                            <a href="https://github.com/kaseadoun/kanoo-ecommerce" title="Image by vectorjuice on Freepik" className="portfolio-project-link">Github: <i className="fas fa-code"></i></a>
                            <ul>
                                <li className="project-list-item">C#</li>
                                <li className="project-list-item">ASP.NET</li>
                                <li className="project-list-item">MySQL</li>
                                <li className="project-list-item">JSON</li>
                                <li className="project-list-item">CSS</li>
                                <li className="project-list-item">JavaScript</li>
                            </ul>
                        </div>
                    </div>
                    <div className="tile">
                        <div>
                            <h3>Quiz Formatter</h3>
                            <p>This python script will format a quiz inside a Word document when you run it. It will standardise the styling, spacing, and structure of the document.</p>
                            <a href="https://github.com/roseemi/Quiz-Formatter" title="Image by vectorjuice on Freepik" className="portfolio-project-link">Github: <i className="fas fa-code"></i></a>
                            <ul>
                                <li className="project-list-item">Python</li>
                            </ul>
                        </div>
                    </div>
                    <div className="tile">
                        <div>
                            <h3>Classroom Organiser</h3>
                            <p>An intractable application with a graphical interface that takes a student name, associates it with a colour, and assigns them a random seat in the classNameroom.</p>
                            <a href="https://github.com/roseemi/classNameroom-Organiser" title="Image by vectorjuice on Freepik" className="portfolio-project-link">Github: <i className="fas fa-code"></i></a>
                            <ul>
                                <li className="project-list-item">Java</li>
                                <li className="project-list-item">FXML</li>
                            </ul>
                        </div>
                    </div>
                    <div className="tile">
                        <div>
                            <h3>Retro Storefront</h3>
                            <p>A multipage website all about Beanie Babies. Contains a storefront for browsing products. This is unofficial, and no products are able to be bought.</p>
                            <a href="https://github.com/roseemi/Retro-E-Commerce" title="Image by vectorjuice on Freepik" className="portfolio-project-link">Github: <i className="fas fa-code"></i></a>
                            <ul>
                                <li className="project-list-item">HTML</li>
                                <li className="project-list-item">CSS</li>
                                <li className="project-list-item">JavaScript</li>
                            </ul>
                        </div>
                    </div>
                    <div className="tile">
                        <div>
                            <h3>Discord Bot</h3>
                            <p>This discord bot is a light-hearted pick-me-up bot that will say kind things to the user on command, made for use in small personal servers.</p>
                            <a href="https://github.com/roseemi/Emotional-Support-Discord-Bot" title="Image by vectorjuice on Freepik" className="portfolio-project-link">Github: <i className="fas fa-code"></i></a>
                            <ul>
                                <li className="project-list-item">Python</li>
                                <li className="project-list-item">Discord API</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="skills" id="skills">
                <h3>Technologies</h3>
                <div className="technologies">
                    <div className="icon-container"><i className="fa-brands fa-java fa"></i>Java</div>
                    <div className="icon-container"><img src={c} className="icon" alt="C#" />C#</div>
                    <div className="icon-container"><i className="fa-brands fa-python fa"></i>Python</div>
                    <div className="icon-container"><i className="fa-brands fa-js fa"></i>JavaScript</div>
                    <div className="icon-container"><i className="fa-brands fa-html5 fa"></i>HTML5</div>
                    <div className="icon-container"><i className="fa-brands fa-css3 fa"></i>CSS3</div>
                    <div className="icon-container"><i className="fa-brands fa-php fa"></i>PHP</div>
                    <div className="icon-container"><img src={mysql} className="icon" alt="MySQL" />MySQL</div>
                    <div className="icon-container"><i className="fa-brands fa-github fa"></i>Github</div>
                    <div className="icon-container"><img src={visual_studio_code} className="icon" alt="VS Code" />VS Code</div>
                    <div className="icon-container"><img src={intellijidea} className="icon" alt="IntelliJ" />IntelliJ</div>
                    <div className="icon-container"><img src={phpstorm} className="icon" alt="PHPStorm" />PHPStorm</div>

                </div>
            </section>
            <footer>
                <div className="contacts">

                </div>
                <div className="extra">
                    <p>Design and code by Emily Rose</p>
                    <p>Vector illustrations by <a href="https://www.freepik.com/author/vectorjuice">VectorJuice</a> on FreePik</p>
                </div>
            </footer>
        </main>
    );
}

export default Portfolio;