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
        React.createElement(Certification, { name: "Responsive Web Design", issuer: "FreeCodeCamp", certImagen: "./imagen/Certificate - ResponsiveWebDesign.png", alt: "Responsive Web Design Certificate" }),
        React.createElement(Certification, { name: "JavaScript Algorithms and Data Structures", issuer: "FreeCodeCamp", certImagen: "./imagen/Certificate - JavaScriptAlgorithmsAndDataStructures.png", alt: "JavaScript Algorithms Certificate" }),
        React.createElement(Certification, { name: "Front End Libraries", issuer: "FreeCodeCamp", certImagen: "./imagen/Certificate - ResponsiveWebDesign.png", alt: "Front End Libraries Certificate" })
    );
}

ReactDOM.render(React.createElement(CertificationBoard, null), document.getElementById('certificationBoard1'));