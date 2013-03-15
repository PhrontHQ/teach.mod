montageDefine("5e61a4c","docs/Spec:-Checkbox.html",{text:'<!doctype html>\n<html>\n<head>\n    <meta charset=utf-8>\n    <meta name=viewport content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">\n    <meta http-equiv=X-UA-Compatible content="chrome=1">\n    \n    <title>Spec: Checkbox - Montage Docs</title>\n    \n    <link rel=stylesheet href="http://fonts.googleapis.com/css?family=Open+Sans:400,700">\n    <link rel=stylesheet href="../stylesheets/normalize.css">\n    <link rel=stylesheet href="../stylesheets/base.css">\n    <link rel=stylesheet href="../stylesheets/pages.css">\n    <link rel=stylesheet href="../stylesheets/solarized.css">\n        \n    <!--[if lt IE 9]><script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->    \n</head>\n<body class=docs>\n  \n    <header class="header header-pages pushed">\n        <div class=header-container>\n            <a href="/"><img class=logo src="../images/logo-pages.png" alt=Montage></a>\n            <nav class=nav>\n                <a class=nav-item href="/apps">Apps</a>\n                <a class="nav-item active" href="/docs">Docs</a>\n            </nav>\n        </div>\n    </header>\n    \n    <section id=docs>\n        <article>\n            <div class=markdown-body>\n\n<p>Checkbox Component</p>\n\n<p>Checkbox Component wraps a HTML <input type="”checkbox”"> element and provides data binding support. Checkbox extends from CheckInput.</p>\n\n<p>Properties</p>\n\n<p>checked</p>\n\n<p>Data Type = boolean, Default value = false\nWhether the radio button is checked or not. Takes it’s value from the presence (true) or absence (false) of the checked attribute.</p>\n\n<p>Standard Attributes for HTML Input element\n<a href="http://www.w3.org/TR/html5/the-input-element.html#the-input-element">http://www.w3.org/TR/html5/the-input-element.html#the-input-element</a></p>\n\n<p>autofocus</p>\n\n<p>Data Type = string, Default value = false\ndisabled</p>\n\n<p>Data Type = boolean, Default value = null\nform</p>\n\n<p>Data Type = string, Default value = null\nname</p>\n\n<p>Data Type = string, Default value = null\nreadonly</p>\n\n<p>Data Type = boolean, Default value = null\ntitle</p>\n\n<p>Data Type = string, Default value = null\nvalue</p>\n\n<p>Data Type = string, Default value = on</p>\n\n<p>Events</p>\n\n<p>action</p>\n\n<p>Triggered when the user changes the value of this radio button, i.e. if the radio button is unchecked due to the user checking another radio button, then the action will not be triggered.\nMarkup &amp; Serialization</p>\n\n<p><label>\n      <input type=checkbox id=check1 name=checkbox-group>\n      Option #1\n</label>\n<label>\n    <input type=checkbox id=check2 name=checkbox-group checked=checked>\n    Option #2\n</label></p>\n\n<p>"check1": {\n            "module": "montage/ui/checkbox.reel",\n            "name": "Checkbox",\n            "properties": {\n                "element": {"#": "check1"}\n            },\n            "bindings": {\n                "checked": {\n                    "boundObject": {"@": "check3"},\n                    "boundObjectPropertyPath": "checked",\n                    "oneway": true\n                }\n            }\n        },</p>\n\n<p>Notes</p>\n\n<ul>\n<li>ArrayController - parse Array with the same # as the # in the organizedObjects with either a null/undefined value to indicate deselected state OR the actual value to indicate selection.</li>\n<li>Repetition - Add selectionAtCurrentIteration/isCurrentIterationSelected</li>\n<li>Checkbox - Add a “input” property to bind to the objectAtIterationIndex of the repetition</li>\n<li>Checkbox - Add a “output”  property to bind to the isCurrentIterationSelected of the repetition\ninput === output if it’s checked, null if isn’t</li>\n</ul>\n\n                </div>\n        </article>\n    </section>\n\n    <section id=next class=next>\n        <article>\n            <h3 class=title>More help?</h3>\n            <div class=cols>\n                <div class="col col-1-2">\n                    <p>Can\'t find what you are looking for? Get in touch, we\'re more than happy in helping answer your questions.\n                    </p>\n                </div>\n                <aside class="col col-1-2">\n                    <p><strong>Have feedback or ideas?</strong> Let us know by creating a new <a href="https://github.com/montagejs/montage/issues" target=_blank>issue</a>, join us in <a href="http://webchat.freenode.net/?channels=montage" target=_blank>IRC</a> or post questions to our <a href="https://groups.google.com/forum/?fromgroups#!forum/montagejs" target=_blank>Google Group</a>. We\'re also on <a href="https://twitter.com/montage_js" target=_blank>Twitter</a> and <a href="https://plus.google.com/116915300739108010954/" target=_blank>Google+</a>.\n                    </p>\n                </aside>\n            </div>\n        </article>\n    </section>\n\n    \n    <section id=social class=social>\n        <article>\n            \n            <div class="button-group github">\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=watch&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=fork&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n            </div>\n            \n            \n            <div class="button-group twitter">\n                <a href="https://twitter.com/share" class=twitter-share-button data-via=montage_js data-count=none>Tweet</a>\n                <script>!function(e,t,n){var r,i=e.getElementsByTagName(t)[0];e.getElementById(n)||(r=e.createElement(t),r.id=n,r.src="//platform.twitter.com/widgets.js",i.parentNode.insertBefore(r,i))}(document,"script","twitter-wjs")</script>\n                <a href="https://twitter.com/montage_js" class=twitter-follow-button data-show-count=false data-show-screen-name=false>Follow @montage_js</a>\n                <script>!function(e,t,n){var r,i=e.getElementsByTagName(t)[0];e.getElementById(n)||(r=e.createElement(t),r.id=n,r.src="//platform.twitter.com/widgets.js",i.parentNode.insertBefore(r,i))}(document,"script","twitter-wjs")</script>\n            </div>\n            \n            <div class="button-group g-plus">\n                \n                <script src="https://apis.google.com/js/plusone.js">"explicit"</script>\n                \n                <div class=g-plusone data-size=medium data-annotation=inline data-width=200></div>\n                \n                <script>gapi.plusone.go()</script>\n            </div>\n            \n        </article>\n    </section>\n        \n    \n    <footer class=footer>\n        2013 montagejs.org - <a href="https://github.com/montagejs/montagejs.org">Contributions</a> to this page are welcomed.\n    </footer>\n        \n    \n    \n    <script>var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-35717912-1"]),_gaq.push(["_trackPageview"]),function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}()</script>\n    \n</body>\n</html>'})