function Certification(props) {
    return (
        <div className="certification">
            <p>{props.name}</p>
            <a href>From {props.issuer}</a>
            <img src={props.certImagen} alt={props.alt} />
        </div>
    )
}

function CertificationBoard() {
    return (
        <div id="boardContainer">
            <div className="certificationBoard" id="board0">
                <Certification name="Responsive Web Design" issuer="FreeCodeCamp" certImagen="./imagen/Certificate - ResponsiveWebDesign.png" alt="Responsive Web Design Certificate" />
                <Certification name="JavaScript Algorithms and Data Structures" issuer="FreeCodeCamp" certImagen="./imagen/Certificate - JavaScriptAlgorithmsAndDataStructures.png" alt="JavaScript Algorithms Certificate" />
                <Certification name="Front End Libraries" issuer="FreeCodeCamp" certImagen="./imagen/Certificate - ResponsiveWebDesign.png" alt="Front End Libraries Certificate" />
            </div>
            <div className="certificationBoard" id="board1">
                <Certification name="C# Tutorial" issuer="Sololearn" certImagen="./imagen/Certificate - CSharp Tutorial.png" alt="C# Tutorial Certificate" />
                <Certification name="HTML Fundamentals" issuer="Sololearn" certImagen="./imagen/Certificate - HTML Fundamentals.png" alt="HTML Fundamentals Certificate" />
                <Certification name="CSS Fundamentals" issuer="Sololearn" certImagen="./imagen/Certificate - CSS Fundamentals.png" alt="CSS Fundamentals Certificate" />
            </div>
        </div>
    )
}



ReactDOM.render(<CertificationBoard />, document.getElementById('certificationsContainer'));