function CertificationBoards() {
    let certificationCollection = [];
    certificationCollection.push(new certf("Responsive Web Design", "FreeCodeCamp", './imagen/Certificate - ResponsiveWebDesign.png', "Responsive Web Design Certificate"));
    certificationCollection.push(new certf("JavaScript Algorithms and Data Structures", "FreeCodeCamp", './imagen/Certificate - JavaScriptAlgorithmsAndDataStructures.png', "JavaScript Algorithms Certificate"));
    certificationCollection.push(new certf("Front End Libraries", "FreeCodeCamp", './imagen/Certificate - ResponsiveWebDesign.png', "Front End Libraries Certificate"));
    certificationCollection.push(new certf("C# Tutorial", "Sololearn", './imagen/Certificate - CSharp Tutorial.png', "C# Tutorial Certificate"));
    certificationCollection.push(new certf("HTML Fundamentals", "Sololearn", './imagen/Certificate - HTML Fundamentals.png', "HTML Fundamentals Certificate"));
    certificationCollection.push(new certf("CSS Fundamentals", "Sololearn", './imagen/Certificate - CSS Fundamentals.png', "CSS Fundamentals Certificate"));

    return (
        <div>
            <CertificationBoard id="board1" certf0={certificationCollection[0]} certf1={certificationCollection[1]} certf2={certificationCollection[2]} />
            <CertificationBoard id="board2" certf0={certificationCollection[3]} certf1={certificationCollection[4]} certf2={certificationCollection[5]} />
        </div>
    );
}

class certf {
    constructor(name, issuer, certificationImagen, altImagen) {
        this.name = name;
        this.issuer = issuer;
        this.certificationImagen = certificationImagen;
        this.altImagen = altImagen;
    }
}

function Certification(props) {
    return (
        <div className="certification">
            <p>{props.name}</p>
            <a href>From {props.issuer}</a>
            <img src={props.certImagen} alt={props.alt} />
        </div>
    )
}

function CertificationBoard(props) {
    return (
        <div className="certificationBoard" >
            <Certification name={props.certf0.name} issuer={props.certf0.issuer} certImagen={props.certf0.certificationImagen} alt={props.certf0.altImagen} />
            <Certification name={props.certf1.name} issuer={props.certf1.issuer} certImagen={props.certf1.certificationImagen} alt={props.certf1.altImagen} />
            <Certification name={props.certf2.name} issuer={props.certf2.issuer} certImagen={props.certf2.certificationImagen} alt={props.certf2.altImagen} />
        </div>
    )
}

ReactDOM.render(<CertificationBoards />, document.getElementById('certificationsContainer'));