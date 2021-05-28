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
            <Certification name="Responsive Web Design" issuer="FreeCodeCamp" certImagen="./imagen/Certificate - ResponsiveWebDesign.png" alt="Responsive Web Design Certificate"/>
            <Certification name="JavaScript Algorithms and Data Structures" issuer="FreeCodeCamp" certImagen="./imagen/Certificate - JavaScriptAlgorithmsAndDataStructures.png" alt="JavaScript Algorithms Certificate"/>
            <Certification name="Front End Libraries" issuer="FreeCodeCamp" certImagen="./imagen/Certificate - ResponsiveWebDesign.png" alt="Front End Libraries Certificate"/>
        </div>
    )
}

ReactDOM.render(<CertificationBoard />, document.getElementById('certificationBoard1'));