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
            { href: props.href },
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
            React.createElement(Certification, {
                name: "Responsive Web Design",
                issuer: "FreeCodeCamp",
                certImagen: "./imagen/Certificate - ResponsiveWebDesign.png",
                alt: "Responsive Web Design Certificate",
                href: "https://www.freecodecamp.org/fccc7d4b82a-4ffd-4221-b47a-212f1c605b97" }),
            React.createElement(Certification, {
                name: "JavaScript Algorithms and Data Structures",
                issuer: "FreeCodeCamp",
                certImagen: "./imagen/Certificate - JavaScriptAlgorithmsAndDataStructures.png",
                alt: "JavaScript Algorithms Certificate",
                href: "https://www.freecodecamp.org/fccc7d4b82a-4ffd-4221-b47a-212f1c605b97" }),
            React.createElement(Certification, {
                name: "Front End Libraries",
                issuer: "FreeCodeCamp",
                certImagen: "./imagen/Certificate - ResponsiveWebDesign.png",
                alt: "Front End Libraries Certificate",
                href: "https://www.freecodecamp.org/fccc7d4b82a-4ffd-4221-b47a-212f1c605b97" })
        ),
        React.createElement(
            "div",
            { className: "certificationBoard", id: "board1" },
            React.createElement(Certification, {
                name: "C# Tutorial",
                issuer: "Sololearn",
                certImagen: "./imagen/Certificate - CSharp Tutorial.png",
                alt: "C# Tutorial Certificate",
                href: "https://www.sololearn.com/profile/2399481" }),
            React.createElement(Certification, {
                name: "HTML Fundamentals",
                issuer: "Sololearn",
                certImagen: "./imagen/Certificate - HTML Fundamentals.png",
                alt: "HTML Fundamentals Certificate",
                href: "https://www.sololearn.com/profile/2399481" }),
            React.createElement(Certification, {
                name: "CSS Fundamentals",
                issuer: "Sololearn",
                certImagen: "./imagen/Certificate - CSS Fundamentals.png",
                alt: "CSS Fundamentals Certificate",
                href: "https://www.sololearn.com/profile/2399481" })
        )
    );
}

ReactDOM.render(React.createElement(CertificationBoard, null), document.getElementById('certificationsContainer'));