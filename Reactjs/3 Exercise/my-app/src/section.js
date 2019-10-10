import React from 'react';
import './section.css';

function Section() {
    return (
        <React.Fragment>
            <section id="css">
                <h3> <i class="fab fa-css3-alt fa-5x"></i></h3>
                <article class="css">
                    Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML.[1] CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.[2]
                    CSS is designed to enable the separation of presentation and content, including layout, colors, and fonts.[3] This separation can improve content accessibility, provide more flexibility and control in the specification of presentation characteristics, enable multiple web pages to share formatting by specifying the relevant CSS in a separate .css file, and reduce complexity and repetition in the structural content.
                    Separation of formatting and content also makes it feasible to present the same markup page in different styles for different rendering methods, such as on-screen, in print, by voice (via speech-based browser or screen reader), and on Braille-based tactile devices. CSS also has rules for alternate formatting if the content is accessed on a mobile device.[4]
                    The name cascading comes from the specified priority scheme to determine which style rule applies if more than one rule matches a particular element. This cascading priority scheme is predictable.
                    The CSS specifications are maintained by the World Wide Web Consortium (W3C). Internet media type (MIME type) text/css is registered for use with CSS by RFC 2318 (March 1998). The W3C operates a free CSS validation service for CSS documents.[5]
                    In addition to HTML, other markup languages support the use of CSS including XHTML, plain XML, SVG, and XUL.
                </article>
            </section>
            <section id="javascript">
                <h3><i class="fab fa-js-square fa-5x"></i></h3>
                <article class="java">
                    JavaScript (/ˈdʒɑːvəˌskrɪpt/),[8] often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification. It is a programming language that is characterized as dynamic, weakly typed, prototype-based and multi-paradigm.
                    Alongside HTML and CSS, JavaScript is one of the core technologies of the World Wide Web.[9] JavaScript enables interactive web pages and is an essential part of web applications. The vast majority of websites use it,[10] and major web browsers have a dedicated JavaScript engine to execute it.
                    As a multi-paradigm language, JavaScript supports event-driven, functional, and imperative (including object-oriented and prototype-based) programming styles. It has APIs for working with text, arrays, dates, regular expressions, and the DOM, but the language itself does not include any I/O, such as networking, storage, or graphics facilities. It relies upon the host environment in which it is embedded to provide these features.
              </article>
            </section>
            </React.Fragment>
    );
}

export default Section;