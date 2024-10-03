import "./TechSkill.style.scss"

const TechSkill = () => {
    return (
        <>
            <div className="skills">
                <p>Tech Stack</p>
                <div className="logos">
                    <ul>
                        <li><img src="https://skillicons.dev/icons?i=html,css,scss,threejs,tailwind&perline=3" alt="skill-icon" /></li>
                        <li><img src="https://skillicons.dev/icons?i=react,nextjs,redux,&perline=3" alt="skill-icon" /></li>
                        <li><img src="https://skillicons.dev/icons?i=js,ts,nestjs,express,nodejs&perline=3" alt="skill-icon" /></li>
                        <li><img src="https://skillicons.dev/icons?i=py,django,flask,tensorflow,pytorch&perline=3" alt="skill-icon" /></li>
                        <li><img src="https://skillicons.dev/icons?i=mongodb,firebase,postgresql,mysql&perline=3" alt="skill-icon" /></li>
                        <li><img src="https://skillicons.dev/icons?i=docker,graphql,nginx,c,cpp,solidity&perline=3" alt="skill-icon" /></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default TechSkill;