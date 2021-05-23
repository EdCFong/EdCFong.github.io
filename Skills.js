
function Skills() {
    return React.createElement(
        "div",
        null,
        React.createElement(Skill, { name: "HTML5", logo: "./imagen/Skills - HTML kisspng.com.png", alt: "HTML icon" }),
        React.createElement(Skill, { name: "CSS", logo: "./imagen/Skills - CSS kisspng.com.png", alt: "CSS icon" }),
        React.createElement(Skill, { name: "Javascript", logo: "./imagen/Skills - Javascript.png", alt: "Javascript icon" }),
        React.createElement(Skill, { name: "React", logo: "./imagen/Skills - React.png", alt: "React icon" }),
        React.createElement(Skill, { name: "C#", logo: "./imagen/Skills - CSharp.png", alt: "c sharp icon" }),
        React.createElement(Skill, { name: "XAML", logo: "./imagen/Skills - XAML.png", alt: "XAML icon" }),
        React.createElement(Skill, { name: "SQLite", logo: "./imagen/Skills - SQLite.png", alt: "SQLite icon" }),
        React.createElement(Skill, { name: "Universal Windows Platform", logo: "./imagen/Skills - Universal Windows Platform Windows Store Logo.png", alt: "UWP icon" }),
        React.createElement(Skill, { name: "Windows Presentation Foundation", logo: "./imagen/Skills - WPF.png", alt: "WPF icon" })
    );
}

function Skill(props) {
    return React.createElement(
        "div",
        { className: "skill" },
        React.createElement("img", { src: props.logo, alt: props.alt }),
        React.createElement(
            "i",
            null,
            props.name
        )
    );
}

ReactDOM.render(React.createElement(Skills, null), document.getElementById('skills'));