import React from 'react';
import './main.css';

function Main() {
    return (
        <main>
            <article class="top">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        </article>

            <section id="node">
                <h3><i class="fab fa-node-js fa-5x"></i></h3>
                <article class="node">
                    Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser. JavaScript is used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML and run client-side by a JavaScript engine in the user's web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a "JavaScript everywhere" paradigm,[7] unifying web application development around a single programming language, rather than different languages for server side and client side scripts.
                    Though .js is the standard filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[8]
                    The Node.js distributed development project, governed by the Node.js Foundation,[9] is facilitated by the Linux Foundation's Collaborative Projects program.[10]
                    Corporate users of Node.js software include GoDaddy,[11] Groupon,[12] IBM,[13] LinkedIn,[14][15] Microsoft,[16][17] Netflix,[18] PayPal,[19][20] Rakuten, SAP,[21] Voxer,[22] Walmart,[23] and
                </article>
            </section>

            <details>
                <summary>
                    <i class="fab fa-html5 fa-5x"></i>
                </summary>
                <p class="html">
                    HTML 5 is the fifth and current major version of the HTML standard, and subsumes XHTML. It currently exists in two standardized forms: HTML 5.2 Recommendation[4] by the World Wide Web Consortium (W3C, a broad coalition of organizations), intended primarily for Web content developers; and HTML Living Standard[5] by WHATWG (a small consortium of four browser vendors), intended primarily for browser developers, though it also exists in an abridged Web developer version.[6] There are minor conflicts between the two groups' specifications.
            </p>
                <p class="html">
                    HTML 5 was first released in public-facing form on 22 January 2008,[7] with a major update and "W3C Recommendation" status in October 2014.[2][8] Its goals are to improve the language with support for the latest multimedia and other new features; to keep the language both easily readable by humans and consistently understood by computers and devices such as Web browsers, parsers, etc., without XHTML's rigidity; and to remain backward-compatible with older software. HTML 5 is intended to subsume not only HTML 4, but also XHTML 1 and DOM Level 2 HTML;[9] the HTML 4 and XHTML specs were announced as superseded by HTML 5.2 on 27 March 2018.[10]
                    HTML 5 includes detailed processing models to encourage more interoperable implementations; it extends, improves and rationalizes the markup available for documents, and introduces markup and application programming interfaces (APIs) for complex web applications.[11] For the same reasons, HTML 5 is also a candidate for cross-platform mobile applications, because it includes features designed with low-powered devices in mind.
            </p>
            </details>
        </main>
    );
}

export default Main;