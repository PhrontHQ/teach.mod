montageDefine("fa336f5","docs/spec:-component-draw-cycle.html",{text:'<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=utf-8>\n    <meta name=viewport content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">\n    <meta http-equiv=X-UA-Compatible content="chrome=1">\n\n    <title>Spec: Component draw cycle - Montage Docs</title>\n\n    <link rel=stylesheet href="http://fonts.googleapis.com/css?family=Open+Sans:400,700">\n    <link rel=stylesheet href="../stylesheets/normalize.css">\n    <link rel=stylesheet href="../stylesheets/base.css">\n    <link rel=stylesheet href="../stylesheets/pages.css">\n    <link rel=stylesheet href="../stylesheets/solarized.css">\n\n    <!--[if lt IE 9]><script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->\n</head>\n<body class=docs>\n\n    <header class="header header-pages pushed">\n        <div class=header-container>\n            <a href="/"><img class=logo src="../images/logo-pages.png" alt=Montage></a>\n            <nav class=nav>\n                <a class=nav-item href="/apps">Apps</a>\n                <a class="nav-item active" href="/docs">Docs</a>\n                <a class=nav-item href="/apis">APIs</a>\n            </nav>\n        </div>\n    </header>\n\n    <section id=docs>\n        <article>\n            <div class=markdown-body>\n\n<p>Component Draw Cycle    Editor Heather Douglass</p>\n\n<p>Index\nIntroduction\nFunctional Description\nAPI\nExamples\nIntegration\nDependencies\nConcerns\n\nIntroduction</p>\n\n<p>When building HTML5 applications, especially on mobile, performance is important.  One area that can be especially critical is DOM manipulation/reading.  Repeatedly manipulating/reading the DOM causing style reflows can slow down an application considerably, even on a desktop machine#.  Montage tries to alleviate this by delaying DOM manipulation in order to batch changes and limit the number of reflows.\nFunctional Description</p>\n\n<p>Montage implements delayed DOM manipulation in order to batch changes to the DOM thereby improving performance.  This is implemented through a series of callbacks that the framework calls on a component.  To participate in this cycle a component should first implement three methods as necessary, willDraw, draw and didDraw.  Which methods need to be implemented is dependent on what the component wants to do.  The Montage framework will call these methods at the appropriate times.  These methods should never be called directly by components.  To improve performance there are restrictions about what sort of actions should be taken in each method.  First, a component should not perform any DOM manipulation outside of the draw method.  DOM manipulation includes element style changes and/or appending or removing elements from the DOM.  Second, any reading of the DOM for measurements, such as offsetWidth, should only be performed in the willDraw or didDraw methods and never in the draw method.  By implementing DOM manipulation/reading for components as described this will limit the amount of reflows by the browser which will help to improve performance.\n    The second thing that a component needs to do when it wants these three methods to be called is to set a property on itself, needsDraw, to true.  Setting this property to true will alert the framework that this component wants to participate in the next draw cycle.  Draw cycles are scheduled using either a setTimeout or requestAnimationFrame if it’s available.\n    During a draw cycle the component hierarchy is explored starting from the root component.  Only components that have indicated they want to draw or have a child that wants to draw are explored.  Components can block exploration of their children by returning false from their canDraw method.   As the component tree is explored a list is built of the components which have set their needsDraw property to true.  As components are added to this list, if this is the first time that the component is being drawn, then the component will have its prepareForDraw method called.  This method is only called the first time a component is participating in a draw cycle.  Once the hierarchy has been explored the framework iterates through the generated list calling willDraw on each component in it.  As a result of calling willDraw on the components in this list other components that are not currently in the list of components to draw may have had their needsDraw property set to true.  Once all the components in the initial list have had willDraw called on them the component hierarchy is explored again to add any components that need to be drawn as a result of calling willDraw on the initial list.  willDraw is then called on any newly added components and this process is repeated until no new components have been added to the list of components to draw.  After this point any component that has needsDraw set to true during the remainder of the draw cycle will be part of the next draw cycle.  It will not be added to the currently executing cycle.  Next, the generated list is sorted by where the component was in the component hierarchy.  This is to ensure that child components are always drawn before their parent component.  The sorted list is iterated over in reverse order and draw is called on each component in the list.  Last, the same generated list is iterated over again and didDraw is called on each component in the list.  During the iteration if it has been the first draw for any component in the list that component will dispatch a custom event with a type of firstDraw immediately after its didDraw method has been called.</p>\n\n<p>Debug flag for erroring on DOM manipulation outside of draw\nComponent loading in relation to draw, canDrawGate API, blockDrawGate API?\nAPI</p>\n\n<p>On Component</p>\n\n<p>needsDraw\nSet this property to true when the component needs its draw callbacks called</p>\n\n<p>canDraw()\nThis method controls whether a component participates in the currently executing draw cycle and whether or not its children are explored when the initial list for a cycle is built.  It must return false if the component and its children should not participate in the cycle and true if they should.</p>\n\n<p>prepareForDraw()\nThis method can be used to execute code before the first draw of a component.  When this method is called the element for the associated component will already be part of the DOM.  This makes this method an appropriate place to add event listeners on DOM elements in the component or perform any other action that should only be performed once during a component’s lifecycle.</p>\n\n<p>childComponentWillPrepareForDraw(child)</p>\n\n<p>willDraw(timestamp)</p>\n\n<p>draw(timestamp)</p>\n\n<p>didDraw(timestamp)</p>\n\n<p>Registered property descriptor addition</p>\n\n<p>needsDraw \nproperty descriptor addition\nExamples</p>\n\n<p>Remove if unnecessary\nIntegration</p>\n\n<p>Remove if unnecessary\nDependencies</p>\n\n<p>Remove if unnecessary\nConcerns</p>\n\n<p>With the current design ordering of draw calls between parents and children cannot be guaranteed [04/10/2012 Resolved: the list is now sorted to guarantee that child components draw before their parent component.]\nComponent hierarchy is lost when the list is flattened for drawing\nUp For Discussion</p>\n\n<p>The current design loses the hierarchy of components once the components that want to draw are flattened into a single list, what are the ways around this?  Does there need to be a way around it?\nShould drawing take place from root to leaf, or leaf to root?  In some cases parents want to draw before their children, for example a layout component that wants to set bounds for its children, and in other cases parents want to draw after their children, such as the flow component where the parent flow component has to make updates in its draw based on what its child repetition component has just drawn\nThe concept of having needsDraw=true in the willDraw adding the newly requested component to the currently executing draw was introduced before composers were implemented.  Now that composers exist and are able to act before the willDraw calls are made should a needsDraw set in the willDraw schedule a new draw loop instead of adding the component to the currently executing loop?  This will fix being able to guarantee the order of draw calls between parents and children during a loop.</p>\n\n<p>Meeting Notes 04/04/2012\n    The draw cycle was discussed in a meeting with Javier, Jean-François, François, Afonso, Stuart, Kishore and Heather.  The following decisions were made</p>\n\n<pre><code>1. The component order for willDraw and didDraw is not important, but the order for draw is and it will be leaf to root, i.e. children draw before their parents.\n2. The ability to schedule a component to draw as part of the currently executing cycle during the willDraw phase is necessary and worth the performance implications.\n</code></pre>\n\n                </div>\n        </article>\n    </section>\n\n    <section id=next class=next>\n        <article>\n            <h3 class=title>More help?</h3>\n            <div class=cols>\n                <div class="col col-1-2">\n                    <p>Can\'t find what you are looking for? Get in touch, we\'re more than happy in helping answer your questions.\n                    </p>\n                </div>\n                <aside class="col col-1-2">\n                    <p><strong>Have feedback or ideas?</strong> Let us know by creating a new <a href="https://github.com/montagejs/montage/issues" target=_blank>issue</a>, join us in <a href="http://webchat.freenode.net/?channels=montage" target=_blank>IRC</a> or post questions to our <a href="https://groups.google.com/forum/?fromgroups#!forum/montagejs" target=_blank>Google Group</a>. We\'re also on <a href="https://twitter.com/montagejs" target=_blank>Twitter</a> and <a href="https://plus.google.com/116915300739108010954/" target=_blank>Google+</a>.\n                    </p>\n                </aside>\n            </div>\n        </article>\n    </section>\n\n\n    <section id=social class=social>\n        <article>\n\n            <div class="button-group github">\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=watch&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=fork&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n            </div>\n\n\n            <div class="button-group twitter">\n                <a href="https://twitter.com/share" class=twitter-share-button data-via=montagejs data-count=none>Tweet</a>\n                <script>!function(e,t,n){var o,a=e.getElementsByTagName(t)[0];e.getElementById(n)||(o=e.createElement(t),o.id=n,o.src="//platform.twitter.com/widgets.js",a.parentNode.insertBefore(o,a))}(document,"script","twitter-wjs");</script>\n                <a href="https://twitter.com/montagejs" class=twitter-follow-button data-show-count=false data-show-screen-name=false>Follow @montagejs</a>\n                <script>!function(e,t,n){var o,a=e.getElementsByTagName(t)[0];e.getElementById(n)||(o=e.createElement(t),o.id=n,o.src="//platform.twitter.com/widgets.js",a.parentNode.insertBefore(o,a))}(document,"script","twitter-wjs");</script>\n            </div>\n\n            <div class="button-group g-plus">\n                \n                <script src="https://apis.google.com/js/plusone.js"></script>\n                \n                <div class=g-plusone data-size=medium data-annotation=inline data-width=200></div>\n                \n                <script>gapi.plusone.go();</script>\n            </div>\n\n        </article>\n    </section>\n\n\n    <footer class=footer>\n        2013 montagejs.org - <a href="https://github.com/montagejs/montagejs.org">Contributions</a> to this page are welcomed.\n    </footer>\n\n\n    \n    <script>var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-35717912-1"]),_gaq.push(["_trackPageview"]),function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}();</script>\n\n</body>\n</html>'});