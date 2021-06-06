
function Skills() {
    return (
        <div>       
        <Skill name="HTML5" logo='./imagen/Skills - HTML kisspng.com.png' alt="HTML icon" />
        <Skill name="CSS" logo='./imagen/Skills - CSS kisspng.com.png' alt="CSS icon"/>
        <Skill name="Javascript" logo='./imagen/Skills - Javascript.png' alt="Javascript icon" />
        <Skill name="React" logo='./imagen/Skills - React.png' alt="React icon" />
        <Skill name="C#" logo='./imagen/Skills - CSharp.png' alt="c sharp icon" />
        <Skill name="XAML" logo='./imagen/Skills - XAML.png' alt="XAML icon" />
        <Skill name="SQLite" logo='./imagen/Skills - SQLite.png' alt="SQLite icon" />
        <Skill name="Universal Windows Platform" logo='./imagen/Skills - Universal Windows Platform Windows Store Logo.png' alt="UWP icon" />
        <Skill name="Windows Presentation Foundation" logo='./imagen/Skills - WPF.png' alt="WPF icon" />  
      </div>
    );
}

function Skill(props) {
    return (
        <div className="skill">
            <img src={props.logo} alt={props.alt} />
            <i>{props.name}</i>
        </div>
    )
}


ReactDOM.render(<Skills />, document.getElementById('skills'));

