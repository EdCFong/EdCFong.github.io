function Certification(props) {
    return (
        <div className="certification">
            <p>{props.name}</p>
            <a href={props.href}>From {props.issuer}</a>
            <img src={props.certImagen} alt={props.alt} />
        </div>
    )
}

function CertificationBoard() {
    return (
        <div id="boardContainer">
            <div className="certificationBoard" id="board0">
                <Certification
                    name="Responsive Web Design"
                    issuer="FreeCodeCamp"
                    certImagen="./imagen/Certificate - ResponsiveWebDesign.png"
                    alt="Responsive Web Design Certificate"
                    href="https://www.freecodecamp.org/fccc7d4b82a-4ffd-4221-b47a-212f1c605b97" />
                <Certification
                    name="JavaScript Algorithms and Data Structures"
                    issuer="FreeCodeCamp"
                    certImagen="./imagen/Certificate - JavaScriptAlgorithmsAndDataStructures.png"
                    alt="JavaScript Algorithms Certificate"
                    href="https://www.freecodecamp.org/fccc7d4b82a-4ffd-4221-b47a-212f1c605b97" />
                <Certification
                    name="Front End Libraries"
                    issuer="FreeCodeCamp"
                    certImagen="./imagen/Certificate - Front End Libraries.png"
                    alt="Front End Libraries Certificate"
                    href="https://www.freecodecamp.org/fccc7d4b82a-4ffd-4221-b47a-212f1c605b97" />
            </div>
            <div className="certificationBoard" id="board1">
                <Certification
                    name="C# Tutorial"
                    issuer="Sololearn"
                    certImagen="./imagen/Certificate - CSharp Tutorial.png"
                    alt="C# Tutorial Certificate"
                    href="https://www.sololearn.com/profile/2399481" />
                <Certification
                    name="HTML Fundamentals"
                    issuer="Sololearn"
                    certImagen="./imagen/Certificate - HTML Fundamentals.png"
                    alt="HTML Fundamentals Certificate"
                    href="https://www.sololearn.com/profile/2399481" />
                <Certification
                    name="CSS Fundamentals"
                    issuer="Sololearn"
                    certImagen="./imagen/Certificate - CSS Fundamentals.png"
                    alt="CSS Fundamentals Certificate"
                    href="https://www.sololearn.com/profile/2399481" />
            </div>
        </div>
    )
}

ReactDOM.render(<CertificationBoard />, document.getElementById('certificationsContainer'));