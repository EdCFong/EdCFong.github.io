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
            <Certification name="C# Tutorial" issuer="Sololearn" certImagen="./imagen/Certificate - CSharp Tutorial.png" alt="C# Tutorial Certificate"/>
            <Certification name="HTML Fundamentals" issuer="Sololearn" certImagen="./imagen/Certificate - HTML Fundamentals.png" alt="HTML Fundamentals Certificate"/>
            <Certification name="CSS Fundamentals" issuer="Sololearn" certImagen="./imagen/Certificate - CSS Fundamentals.png" alt="CSS Fundamentals Certificate"/>
        </div>
    )
}

ReactDOM.render(<CertificationBoard />, document.getElementById('certificationBoard2'));