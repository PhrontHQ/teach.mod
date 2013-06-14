montageDefine("80f62d3","docs/montage-bootstrapping.html",{text:'<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=utf-8>\n    <meta name=viewport content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">\n    <meta http-equiv=X-UA-Compatible content="chrome=1">\n\n    <title>Montage Bootstrapping - Montage Docs</title>\n\n    <link rel=stylesheet href="http://fonts.googleapis.com/css?family=Open+Sans:400,700">\n    <link rel=stylesheet href="../stylesheets/normalize.css">\n    <link rel=stylesheet href="../stylesheets/base.css">\n    <link rel=stylesheet href="../stylesheets/pages.css">\n    <link rel=stylesheet href="../stylesheets/solarized.css">\n\n    <!--[if lt IE 9]><script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->\n</head>\n<body class=docs>\n\n    <header class="header header-pages pushed">\n        <div class=header-container>\n            <a href="/"><img class=logo src="../images/logo-pages.png" alt=Montage></a>\n            <nav class=nav>\n                <a class=nav-item href="/apps">Apps</a>\n                <a class="nav-item active" href="/docs">Docs</a>\n                <a class=nav-item href="/apis">APIs</a>\n            </nav>\n        </div>\n    </header>\n\n    <section id=docs>\n        <article>\n            <div class=markdown-body>\n\n<p>This document will describe the bootstrapping process for Montage.</p>\n\n<p>After setting up some variables <code>exports.initMontage</code> is called. This calls <code>getPlatform</code> which returns an object with platform specific functions (currently the browser and node are supported).</p>\n\n<h2>browser, in development mode, non-optimized (un-mopped)<a class=anchor id="browser,-in-development-mode,-non-optimized-(un-mopped)" href="#browser,-in-development-mode,-non-optimized-(un-mopped)"></a>\n</h2>\n\n<h3>platform.bootstrap<a class=anchor id=platform.bootstrap href="#platform.bootstrap"></a>\n</h3>\n\n<p><code>platform.bootstrap</code> is called with a callback to use when the initial bootstraping has finished. This kicks off the browser process. The parameters are retrieved from the <code>data-</code> attributes of the script tag that loads <code>montage.js</code>. A "resolve" function is also created that will return an absolute path from a given relative path, using the location of the document as the base. This is implemented by using <code>&lt;base&gt;</code> and <code>&lt;a&gt;</code> elements, and using the interaction of these elements in the browser to do the actual resolution.</p>\n\n<p>Next we add a listener for <code>DOMContentLoaded</code>, which will call <code>callbackIfReady</code> when done.</p>\n\n<p>Montage needs 3 files for further bootstrapping: <code>require.js</code> and <code>browser.js</code> from Mr to set up the CommonJS module system in the browser and <code>q.js</code> to add support for promises. These are loaded by injecting script tags. We know when they are loaded because each of the files call a global <code>bootstrap</code> function with their id and a function that returns their exports when ready. <strong>Mopped</strong>: If the package is Mopped then these files will be available in the bootstrapping bundle, and so no script tags are injected.</p>\n\n<p>The global <code>bootstrap</code> function keeps track of the 3 files and once all three have loaded calls the <code>allModulesLoaded</code> function.</p>\n\n<p><code>allModulesLoaded</code> uses a miniature <code>require</code> implementation called <code>bootRequire</code> to set up the promise and require/browser modules. Finally it calls <code>callbackIfReady</code>.</p>\n\n<p><code>callbackIfReady</code> checks that both the DOM and the modules are loaded, and if so calls the callback given to this function.</p>\n\n<h3>callback<a class=anchor id=callback href="#callback"></a>\n</h3>\n\n<p>First we set up the config object to load the Montage package. This involves setting up the loader that lets the us load ".reel" files directly (e.g. <code>require("montage/ui/text.reel")</code>), and compilers that attach Montage metadata to the exports of any loaded module (<code>SerializationCompiler</code>) and export the HTML of loaded HTML files as <code>content</code> (<code>TemplateCompiler</code>).</p>\n\n<p><a id=un-mopped-load-montage href="#mopped-callback">If mopped, bundles are loaded at this point.</a></p>\n\n<p>We then use <code>Require</code> to load the Montage package. Once this promise has completed we have the require function for Montage, <code>montageRequire</code>. We use this to load the Q (Promise) package so that we have complete information about the Promise package. We then insert the already loaded promise module into it, so that it isn\'t requested again. We set up the linter, to give us informative errors when there\'s a syntax error in a loaded file.</p>\n\n<p>At this point there is code to handle controlling the Montage bootstrapper from a remote frame, for example for testing. This won\'t be covered here.</p>\n\n<p>If there was a <code>data-auto-package</code> attribute we create inject a fake package description so that a package.json is not needed, otherwise we check if location is a json file (set through a <code>data-package</code> attribute) and if so inject it directly. Finally, we load the application package.</p>\n\n<p>Once this is complete we have the <code>montageRequire</code> and the <code>applicationRequire</code> and we use these to finish initializing Montage in <code>initMontage</code></p>\n\n<h3>initMontage<a class=anchor id=initMontage href="#initMontage"></a>\n</h3>\n\n<p>Here we load the last of Montage\'s essential dependencies and once they have completed we configure the application. This involves setting up the stack trace length (set to 0 for optimization), event manager and calling <code>montageWillLoad</code>, again for testing.</p>\n\n<p>Next we check to see if the <code>package.json</code> specified an application prototype to use, otherwise we use "core/application". Once this is loaded will call <code>_load</code> on the application object which in the default implementation loads the Montage component and template modules, and causes any serialization in this HTML page to be parsed.</p>\n\n<p>Finally, we check if a <code>data-module</code> attribute was given and if so load this module.</p>\n\n<p>The bootstrapping is complete. The serialization has created components for the user to interact with, or the loaded module is doing its thing.</p>\n\n<h2>browser, in deployment mode, optimized (mopped)<a class=anchor id="browser,-in-deployment-mode,-optimized-(mopped)" href="#browser,-in-deployment-mode,-optimized-(mopped)"></a>\n</h2>\n\n<p>When Mopped the bootstrapping bundle defines a global <code>BUNDLE</code> array, which contains a list of bundle filenames to load.</p>\n\n<h3>platform.bootstrap<a class=anchor id=platform.bootstrap href="#platform.bootstrap"></a>\n</h3>\n\n<p>As the normal bootstrap, except the 3 bootstrapping modules needed will be available in the bootstrapping bundle, and so no script tags are injected.</p>\n\n<h3>callback <a id=mopped-callback></a><a class=anchor id=callback- href="#callback-"></a>\n</h3>\n\n<p>Before loading the Montage package the <code>BUNDLE</code> variable is checked. If it exists then a script tag is injected for each of the filenames in the array. Each bundle calls a global <code>bundleLoaded</code> function with its name. A <code>preloaded</code> promise is added to the config object that is resolved once all of the bundles have loaded. Mr waits on this promise before proceeding, which means that the Montage package is not loaded until all the bundles have loaded.</p>\n\n<p>This is where the differences in un-mopped and mopped bootstrapping end.</p>\n\n<p><a href="#un-mopped-load-montage">Return to regular bootstrapping</a></p>\n\n<h2>Node<a class=anchor id=Node href="#Node"></a>\n</h2>\n\n<p>To do.</p>\n\n                </div>\n        </article>\n    </section>\n\n    <section id=next class=next>\n        <article>\n            <h3 class=title>More help?</h3>\n            <div class=cols>\n                <div class="col col-1-2">\n                    <p>Can\'t find what you are looking for? Get in touch, we\'re more than happy in helping answer your questions.\n                    </p>\n                </div>\n                <aside class="col col-1-2">\n                    <p><strong>Have feedback or ideas?</strong> Let us know by creating a new <a href="https://github.com/montagejs/montage/issues" target=_blank>issue</a>, join us in <a href="http://webchat.freenode.net/?channels=montage" target=_blank>IRC</a> or post questions to our <a href="https://groups.google.com/forum/?fromgroups#!forum/montagejs" target=_blank>Google Group</a>. We\'re also on <a href="https://twitter.com/montagejs" target=_blank>Twitter</a> and <a href="https://plus.google.com/116915300739108010954/" target=_blank>Google+</a>.\n                    </p>\n                </aside>\n            </div>\n        </article>\n    </section>\n\n\n    <section id=social class=social>\n        <article>\n\n            <div class="button-group github">\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=watch&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=fork&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n            </div>\n\n\n            <div class="button-group twitter">\n                <a href="https://twitter.com/share" class=twitter-share-button data-via=montagejs data-count=none>Tweet</a>\n                <script>!function(e,n,s){var a,t=e.getElementsByTagName(n)[0];e.getElementById(s)||(a=e.createElement(n),a.id=s,a.src="//platform.twitter.com/widgets.js",t.parentNode.insertBefore(a,t))}(document,"script","twitter-wjs");</script>\n                <a href="https://twitter.com/montagejs" class=twitter-follow-button data-show-count=false data-show-screen-name=false>Follow @montagejs</a>\n                <script>!function(e,n,s){var a,t=e.getElementsByTagName(n)[0];e.getElementById(s)||(a=e.createElement(n),a.id=s,a.src="//platform.twitter.com/widgets.js",t.parentNode.insertBefore(a,t))}(document,"script","twitter-wjs");</script>\n            </div>\n\n            <div class="button-group g-plus">\n                \n                <script src="https://apis.google.com/js/plusone.js"></script>\n                \n                <div class=g-plusone data-size=medium data-annotation=inline data-width=200></div>\n                \n                <script>gapi.plusone.go();</script>\n            </div>\n\n        </article>\n    </section>\n\n\n    <footer class=footer>\n        2013 montagejs.org - <a href="https://github.com/montagejs/montagejs.org">Contributions</a> to this page are welcomed.\n    </footer>\n\n\n    \n    <script>var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-35717912-1"]),_gaq.push(["_trackPageview"]),function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)}();</script>\n\n</body>\n</html>'});