montageDefine("80f62d3","docs/overridable-methods.html",{text:'<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=utf-8>\n    <meta name=viewport content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">\n    <meta http-equiv=X-UA-Compatible content="chrome=1">\n\n    <title>Overridable methods - Montage Docs</title>\n\n    <link rel=stylesheet href="http://fonts.googleapis.com/css?family=Open+Sans:400,700">\n    <link rel=stylesheet href="../stylesheets/normalize.css">\n    <link rel=stylesheet href="../stylesheets/base.css">\n    <link rel=stylesheet href="../stylesheets/pages.css">\n    <link rel=stylesheet href="../stylesheets/solarized.css">\n\n    <!--[if lt IE 9]><script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->\n</head>\n<body class=docs>\n\n    <header class="header header-pages pushed">\n        <div class=header-container>\n            <a href="/"><img class=logo src="../images/logo-pages.png" alt=Montage></a>\n            <nav class=nav>\n                <a class=nav-item href="/apps">Apps</a>\n                <a class="nav-item active" href="/docs">Docs</a>\n                <a class=nav-item href="/apis">APIs</a>\n            </nav>\n        </div>\n    </header>\n\n    <section id=docs>\n        <article>\n            <div class=markdown-body>\n\n<p>You can implement certain methods on your objects and components that will be called. This is a list of them until we have more JSDoc documentation.</p>\n\n<h2>Object<a class=anchor id=Object href="#Object"></a>\n</h2>\n\n<h3>didCreate<a class=anchor id=didCreate href="#didCreate"></a>\n</h3>\n\n<p>Constructor called after the object is created</p>\n\n<h2>component<a class=anchor id=component href="#component"></a>\n</h2>\n\n<h3>prepareForDraw<a class=anchor id=prepareForDraw href="#prepareForDraw"></a>\n</h3>\n\n<p>Called before the first draw of the component. This is where you should write to the DOM for any setup that needs to happen before the first draw. This includes adding any event listeners on your DOM elements, except for touch or mouse event listeners (see prepareForActivationEvents).</p>\n\n<h3>prepareForActivationEvents<a class=anchor id=prepareForActivationEvents href="#prepareForActivationEvents"></a>\n</h3>\n\n<p>Called the first time a touch event or mouse event is received on one of your child elements. This is where you should listen for any events that occur after user interaction.</p>\n\n<h3>willDraw<a class=anchor id=willDraw href="#willDraw"></a>\n</h3>\n\n<p>Called before the <code>draw</code> of the component. This is where you should read any values from the DOM (for example the styles of you element or child elements). See <code>draw</code>.</p>\n\n<h3>draw<a class=anchor id=draw href="#draw"></a>\n</h3>\n\n<p>This is the only place that your component should modify the DOM. By putting DOM reads in <code>willDraw</code> and DOM writes in <code>draw</code> all the reads and all the writes are batched together, which reduces the number of browser repaints and increases the fluidity of your app.</p>\n\n<h3>didDraw<a class=anchor id=didDraw href="#didDraw"></a>\n</h3>\n\n<p>Called after the <code>draw</code> of the component. This is where you should read any values from the DOM (for example the styles of you element or child elements). See <code>draw</code>.</p>\n\n<h3>contentWillChange<a class=anchor id=contentWillChange href="#contentWillChange"></a>\n</h3>\n\n<p>Called before the <code>domContent</code> of the component is changed.</p>\n\n<h3>contentDidChange<a class=anchor id=contentDidChange href="#contentDidChange"></a>\n</h3>\n\n<p>Called after the <code>domContent</code> of the component is changed.</p>\n\n<h3>childComponentWillPrepareForDraw<a class=anchor id=childComponentWillPrepareForDraw href="#childComponentWillPrepareForDraw"></a>\n</h3>\n\n<p>Called before a child component\'s <code>willPrepareForDraw</code>.</p>\n\n<h3>willPrepareForDraw<a class=anchor id=willPrepareForDraw href="#willPrepareForDraw"></a>\n</h3>\n\n<p>Called before the first draw of the component. This is where you should read the DOM for any setup that needs to happen on the first draw.</p>\n\n<h2>template<a class=anchor id=template href="#template"></a>\n</h2>\n\n<h3>deserializedFromTemplate<a class=anchor id=deserializedFromTemplate href="#deserializedFromTemplate"></a>\n</h3>\n\n<p>Called on any object that appears in a template serialization, after it has been deserialized.</p>\n\n<h3>templateDidLoad<a class=anchor id=templateDidLoad href="#templateDidLoad"></a>\n</h3>\n\n<p>Called on the owner of a template, most likely a component, when all the objects in the template have loaded and been instantiated.</p>\n\n                </div>\n        </article>\n    </section>\n\n    <section id=next class=next>\n        <article>\n            <h3 class=title>More help?</h3>\n            <div class=cols>\n                <div class="col col-1-2">\n                    <p>Can\'t find what you are looking for? Get in touch, we\'re more than happy in helping answer your questions.\n                    </p>\n                </div>\n                <aside class="col col-1-2">\n                    <p><strong>Have feedback or ideas?</strong> Let us know by creating a new <a href="https://github.com/montagejs/montage/issues" target=_blank>issue</a>, join us in <a href="http://webchat.freenode.net/?channels=montage" target=_blank>IRC</a> or post questions to our <a href="https://groups.google.com/forum/?fromgroups#!forum/montagejs" target=_blank>Google Group</a>. We\'re also on <a href="https://twitter.com/montagejs" target=_blank>Twitter</a> and <a href="https://plus.google.com/116915300739108010954/" target=_blank>Google+</a>.\n                    </p>\n                </aside>\n            </div>\n        </article>\n    </section>\n\n\n    <section id=social class=social>\n        <article>\n\n            <div class="button-group github">\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=watch&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=fork&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n            </div>\n\n\n            <div class="button-group twitter">\n                <a href="https://twitter.com/share" class=twitter-share-button data-via=montagejs data-count=none>Tweet</a>\n                <script>!function(n,s,e){var a,t=n.getElementsByTagName(s)[0];n.getElementById(e)||(a=n.createElement(s),a.id=e,a.src="//platform.twitter.com/widgets.js",t.parentNode.insertBefore(a,t))}(document,"script","twitter-wjs");</script>\n                <a href="https://twitter.com/montagejs" class=twitter-follow-button data-show-count=false data-show-screen-name=false>Follow @montagejs</a>\n                <script>!function(n,s,e){var a,t=n.getElementsByTagName(s)[0];n.getElementById(e)||(a=n.createElement(s),a.id=e,a.src="//platform.twitter.com/widgets.js",t.parentNode.insertBefore(a,t))}(document,"script","twitter-wjs");</script>\n            </div>\n\n            <div class="button-group g-plus">\n                \n                <script src="https://apis.google.com/js/plusone.js"></script>\n                \n                <div class=g-plusone data-size=medium data-annotation=inline data-width=200></div>\n                \n                <script>gapi.plusone.go();</script>\n            </div>\n\n        </article>\n    </section>\n\n\n    <footer class=footer>\n        2013 montagejs.org - <a href="https://github.com/montagejs/montagejs.org">Contributions</a> to this page are welcomed.\n    </footer>\n\n\n    \n    <script>var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-35717912-1"]),_gaq.push(["_trackPageview"]),function(){var n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(n,s)}();</script>\n\n</body>\n</html>'});