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
        React.createElement(Certification, { name: "C# Tutorial", issuer: "Sololearn", certImagen: "./imagen/Certificate - CSharp Tutorial.png", alt: "C# Tutorial Certificate" }),
        React.createElement(Certification, { name: "HTML Fundamentals", issuer: "Sololearn", certImagen: "./imagen/Certificate - HTML Fundamentals.png", alt: "HTML Fundamentals Certificate" }),
        React.createElement(Certification, { name: "CSS Fundamentals", issuer: "Sololearn", certImagen: "./imagen/Certificate - CSS Fundamentals.png", alt: "CSS Fundamentals Certificate" })
    );
}

ReactDOM.render(React.createElement(CertificationBoard, null), document.getElementById('certificationBoard2'));