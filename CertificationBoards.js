function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CertificationBoards() {
    var certificationCollection = [];
    certificationCollection.push(new certf("Responsive Web Design", "FreeCodeCamp", './imagen/Certificate - ResponsiveWebDesign.png', "Responsive Web Design Certificate"));
    certificationCollection.push(new certf("JavaScript Algorithms and Data Structures", "FreeCodeCamp", './imagen/Certificate - JavaScriptAlgorithmsAndDataStructures.png', "JavaScript Algorithms Certificate"));
    certificationCollection.push(new certf("Front End Libraries", "FreeCodeCamp", './imagen/Certificate - ResponsiveWebDesign.png', "Front End Libraries Certificate"));
    certificationCollection.push(new certf("C# Tutorial", "Sololearn", './imagen/Certificate - CSharp Tutorial.png', "C# Tutorial Certificate"));
    certificationCollection.push(new certf("HTML Fundamentals", "Sololearn", './imagen/Certificate - HTML Fundamentals.png', "HTML Fundamentals Certificate"));
    certificationCollection.push(new certf("CSS Fundamentals", "Sololearn", './imagen/Certificate - CSS Fundamentals.png', "CSS Fundamentals Certificate"));

    return React.createElement(
        "div",
        null,
        React.createElement(CertificationBoard, { id: "board1", certf0: certificationCollection[0], certf1: certificationCollection[1], certf2: certificationCollection[2] }),
        React.createElement(CertificationBoard, { id: "board2", certf0: certificationCollection[3], certf1: certificationCollection[4], certf2: certificationCollection[5] })
    );
}

var certf = function certf(name, issuer, certificationImagen, altImagen) {
    _classCallCheck(this, certf);

    this.name = name;
    this.issuer = issuer;
    this.certificationImagen = certificationImagen;
    this.altImagen = altImagen;
};

function Certification(props) {
    return React.createElement(
        "div",
        { className: "certification" },
        React.createElement(
            "p",
            null,
            props.name
        ),
        React.createElement(
            "a",
            { href: true },
            "From ",
            props.issuer
        ),
        React.createElement("img", { src: props.certImagen, alt: props.alt })
    );
}

function CertificationBoard(props) {
    return React.createElement(
        "div",
        { className: "certificationBoard" },
        React.createElement(Certification, { name: props.certf0.name, issuer: props.certf0.issuer, certImagen: props.certf0.certificationImagen, alt: props.certf0.altImagen }),
        React.createElement(Certification, { name: props.certf1.name, issuer: props.certf1.issuer, certImagen: props.certf1.certificationImagen, alt: props.certf1.altImagen }),
        React.createElement(Certification, { name: props.certf2.name, issuer: props.certf2.issuer, certImagen: props.certf2.certificationImagen, alt: props.certf2.altImagen })
    );
}

ReactDOM.render(React.createElement(CertificationBoards, null), document.getElementById('certificationsContainer'));