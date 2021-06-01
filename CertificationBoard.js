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

function CertificationBoard() {
    return React.createElement(
        "div",
        { id: "boardContainer" },
        React.createElement(
            "div",
            { className: "certificationBoard", id: "board0" },
            React.createElement(Certification, { name: "Responsive Web Design", issuer: "FreeCodeCamp", certImagen: "./imagen/Certificate - ResponsiveWebDesign.png", alt: "Responsive Web Design Certificate" }),
            React.createElement(Certification, { name: "JavaScript Algorithms and Data Structures", issuer: "FreeCodeCamp", certImagen: "./imagen/Certificate - JavaScriptAlgorithmsAndDataStructures.png", alt: "JavaScript Algorithms Certificate" }),
            React.createElement(Certification, { name: "Front End Libraries", issuer: "FreeCodeCamp", certImagen: "./imagen/Certificate - ResponsiveWebDesign.png", alt: "Front End Libraries Certificate" })
        ),
        React.createElement(
            "div",
            { className: "certificationBoard", id: "board1" },
            React.createElement(Certification, { name: "C# Tutorial", issuer: "Sololearn", certImagen: "./imagen/Certificate - CSharp Tutorial.png", alt: "C# Tutorial Certificate" }),
            React.createElement(Certification, { name: "HTML Fundamentals", issuer: "Sololearn", certImagen: "./imagen/Certificate - HTML Fundamentals.png", alt: "HTML Fundamentals Certificate" }),
            React.createElement(Certification, { name: "CSS Fundamentals", issuer: "Sololearn", certImagen: "./imagen/Certificate - CSS Fundamentals.png", alt: "CSS Fundamentals Certificate" })
        )
    );
}

ReactDOM.render(React.createElement(CertificationBoard, null), document.getElementById('certificationsContainer'));