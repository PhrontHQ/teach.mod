montageDefine("01db155","docs/exploring-components.html",{text:'<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=utf-8>\n    <meta name=viewport content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">\n    <meta http-equiv=X-UA-Compatible content="chrome=1">\n\n    <title>Exploring components - Montage Docs</title>\n\n    <link rel=stylesheet href="http://fonts.googleapis.com/css?family=Open+Sans:400,700">\n    <link rel=stylesheet href="../stylesheets/normalize.css">\n    <link rel=stylesheet href="../stylesheets/base.css">\n    <link rel=stylesheet href="../stylesheets/pages.css">\n    <link rel=stylesheet href="../stylesheets/solarized.css">\n\n    <!--[if lt IE 9]><script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->\n</head>\n<body class=docs>\n\n    <header class="header header-pages pushed">\n        <div class=header-container>\n            <a href="/"><img class=logo src="../images/logo-pages.png" alt=Montage></a>\n            <nav class=nav>\n                <a class=nav-item href="/apps">Apps</a>\n                <a class="nav-item active" href="/docs">Docs</a>\n                <a class=nav-item href="/apis">APIs</a>\n            </nav>\n        </div>\n    </header>\n\n    <section id=docs>\n        <article>\n            <div class=markdown-body>\n\n<p>MontageJS applications consist of a model layer that handles the data and a view layer that reads from the models. Components make up the view portion of a MontageJS application. As a rule, these components are stored in the ui directory of your MontageJS application (which has the benefit that you can use any MontageJS package and easily locate the user interface components it provides).</p>\n\n<p>MontageJS components are encapsulated; the structure (HTML), appearance (CSS), and behavior (JavaScript) that power a user interface component are all located in the same directory, identified with a .reel suffix. For example, the foo-bar component is located in the ui directory of your MontageJS application at <code>montageapp/ui/foo-bar.reel</code> and encapsulates the following files: foo-bar.css, foo-bar.html, and foo-bar.js. Because components are self-contained, it\'s easy to work on, rename, or even remove an individual component without having to find bits and pieces of it scattered across directories.</p>\n\n<p>Montage components are modular; regardless of where a component is used, the same HTML, CSS, and JavaScript will control how that particular component is structured, looks, and behaves.</p>\n\n<blockquote>\n<p><strong>Note</strong>: Out of the box, MontageJS includes three prebuilt widget sets (or themes) for user interface components: Digit, Matte, and Default. Digit is a touch-friendly widget set optimzed for mobile device development. Matte contains desktop-optimized UI components. The Default package contains native UI components. This package lets you wrap HTML5 elements to give them access to Montage features such as data bindings and the Montage event handling model. All styling is left to the user-agent/browser or the author to apply.</p>\n</blockquote>\n\n<p>Let\'s take a closer look at some key features of the HTML, CSS, and JS files included in the FooBar component. First the HTML file. </p>\n\n<p>Every component\'s HTML file is a complete and valid HTML document. The head section includes the component\'s CSS file and a script block, which contains all serialized Montage objects in the document.</p>\n\n<p></p><div class=highlight><pre><span class=nt>&lt;link</span> <span class=na>rel=</span><span class=s>"stylesheet"</span> <span class=na>type=</span><span class=s>"text/css"</span> <span class=na>href=</span><span class=s>"foo-bar.css"</span><span class=nt>&gt;</span>\n<span class=nt>&lt;script </span><span class=na>type=</span><span class=s>"text/montage-serialization"</span><span class=nt>&gt;</span>\n<span class=p>{</span>\n    <span class=s2>"owner"</span><span class=o>:</span> <span class=p>{</span>\n        <span class=s2>"properties"</span><span class=o>:</span> <span class=p>{</span>\n            <span class=s2>"element"</span><span class=o>:</span> <span class=p>{</span><span class=s2>"#"</span><span class=o>:</span> <span class=s2>"foo-bar"</span><span class=p>}</span>\n        <span class=p>}</span>\n    <span class=p>}</span>\n<span class=p>}</span>\n<span class=nt>&lt;/script&gt;</span>\n</pre></div>\n\n<p>For more details on the serialization format refer to <a href="http://montagejs.org/docs/Montage-serialization-format">MontageJS Serialization Format</a>. For now, note the following:</p>\n\n<ul>\n<li>The script type is set to <code>text/montage-serialization</code>.</li>\n<li>The serialization format is JSON, with some enforced semantics.</li>\n<li>\n<code>"owner"</code> is a special label in the serialization that refers to the current component. (Think of it as the equivalent of <code>this</code> in JavaScript.)</li>\n<li>\n<code>{"#": "foo-bar"}</code> refers to the root element in the body of the HTML file, identified with the <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/elements.html#custom-data-attribute">custom data-attribute</a> <code>data-montage-id</code> of <code>foo-bar</code>:</li>\n</ul><p></p><div class=highlight><pre><span class=nt>&lt;body&gt;</span>\n    <span class=nt>&lt;div</span> <span class=na>data-montage-id=</span><span class=s>"foo-bar"</span> <span class=na>class=</span><span class=s>"FooBar"</span><span class=nt>&gt;</span>\n    <span class=nt>&lt;/div&gt;</span>\n<span class=nt>&lt;/body&gt;</span>\n</pre></div>\n\n<blockquote>\n<p><strong>Note:</strong> In the object serialization JSON tree the “#” identifier refers to DOM elements (We also use the “@” identifier, which refers to template objects or other components defined in the object serialization).</p>\n</blockquote>\n\n<p>This means that when you use a FooBar component in a MontageJS application the only portion of its template that will be rendered is the <code>foo-bar</code> element. </p>\n\n<blockquote>\n<div class=note>NOTE: MontageJS components are reusable, that is, you can insert them multiple times in the same document, which is why we use a [custom data-attribute](http://www.whatwg.org/specs/web-apps/current-work/multipage/elements.html#custom-data-attribute), `data-montage-id`, to identify elements and not the document-unique HTML `id` attribute. This also gives you the freedom to use the `id` attribute for styling, whether for performance or legacy reasons.</div>\n</blockquote>\n\n<p>Next, the CSS file: Note that we start off with an almost blank style sheet, waiting for you to bring it to life by adding your meticulously crafted rules. The only content we pass along is the class name of the root element.</p>\n\n<p></p><div class=highlight><pre><span class=nc>.FooBar</span> <span class=p>{</span>\n\n<span class=p>}</span>\n</pre></div>\n\n<p>Note also that the class name is a CamelCase version of the .reel directory name. This is part of our internal <a href=naming-conventions.html>CSS naming convention</a>; it allows us to scope each component\'s CSS so that it doesn\'t "leak out" and accidentally style other components.</p>\n\n<p>Finally, the JS file:</p>\n\n<p></p><div class=highlight><pre><span class=nx>exports</span><span class=p>.</span><span class=nx>FooBar</span> <span class=o>=</span> <span class=nx>Component</span><span class=p>.</span><span class=nx>specialize</span><span class=p>(</span><span class=cm>/** @lends FooBar# */</span> <span class=p>{</span>\n   <span class=nx>constructor</span><span class=o>:</span> <span class=p>{</span>\n       <span class=nx>value</span><span class=o>:</span> <span class=kd>function</span> <span class=nx>FooBar</span><span class=p>()</span> <span class=p>{</span>\n           <span class=k>this</span><span class=p>.</span><span class=kr>super</span><span class=p>();</span>\n       <span class=p>}</span>\n   <span class=p>}</span>\n<span class=p>});</span>\n</pre></div>\n\n<p>The file exports a single object with a CamelCase version of the .reel directory name which inherits MontageJS methods from <code>Component</code>. The first argument provides a way to define the properties (methods and values) that will be available on the instances of the new type being created. The second argument provides a way to define properties of the type itself, they are accessible directly on the type (e.g., <code>Component.method()</code>). </p>\n\n<p><code>this.super()</code> is a special function that will call the parent method with the same name. in this case it will call the constructor function that was defined in the Component type. This is useful to extend a behavior and is similar to its Java counterpart.</p>\n\n<p>When in use, the FooBar component will be rendered in a document using its element from its included template, styled using its included CSS, and given instructions on how to act from its included JavaScript.</p>\n\n                </div>\n        </article>\n    </section>\n\n    <section id=next class=next>\n        <article>\n            <h3 class=title>More help?</h3>\n            <div class=cols>\n                <div class="col col-1-2">\n                    <p>Can\'t find what you are looking for? Get in touch, we\'re more than happy in helping answer your questions.\n                    </p>\n                </div>\n                <aside class="col col-1-2">\n                    <p><strong>Have feedback or ideas?</strong> Let us know by creating a new <a href="https://github.com/montagejs/montage/issues" target=_blank>issue</a>, join us in <a href="http://webchat.freenode.net/?channels=montage" target=_blank>IRC</a> or post questions to our <a href="https://groups.google.com/forum/?fromgroups#!forum/montagejs" target=_blank>Google Group</a>. We\'re also on <a href="https://twitter.com/montagejs" target=_blank>Twitter</a> and <a href="https://plus.google.com/116915300739108010954/" target=_blank>Google+</a>.\n                    </p>\n                </aside>\n            </div>\n        </article>\n    </section>\n\n\n    <section id=social class=social>\n        <article>\n\n            <div class="button-group github">\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=watch&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=fork&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n            </div>\n\n\n            <div class="button-group twitter">\n                <a href="https://twitter.com/share" class=twitter-share-button data-via=montagejs data-count=none>Tweet</a>\n                <script>!function(n,s,e){var a,t=n.getElementsByTagName(s)[0];n.getElementById(e)||(a=n.createElement(s),a.id=e,a.src="//platform.twitter.com/widgets.js",t.parentNode.insertBefore(a,t))}(document,"script","twitter-wjs");</script>\n                <a href="https://twitter.com/montagejs" class=twitter-follow-button data-show-count=false data-show-screen-name=false>Follow @montagejs</a>\n                <script>!function(n,s,e){var a,t=n.getElementsByTagName(s)[0];n.getElementById(e)||(a=n.createElement(s),a.id=e,a.src="//platform.twitter.com/widgets.js",t.parentNode.insertBefore(a,t))}(document,"script","twitter-wjs");</script>\n            </div>\n\n            <div class="button-group g-plus">\n                \n                <script src="https://apis.google.com/js/plusone.js"></script>\n                \n                <div class=g-plusone data-size=medium data-annotation=inline data-width=200></div>\n                \n                <script>gapi.plusone.go();</script>\n            </div>\n\n        </article>\n    </section>\n\n\n    <footer class=footer>\n        2013 montagejs.org - <a href="https://github.com/montagejs/montagejs.org">Contributions</a> to this page are welcomed.\n    </footer>\n\n\n    \n    <script>var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-35717912-1"]),_gaq.push(["_trackPageview"]),function(){var n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(n,s)}();</script>\n\n</body>\n</html>'});