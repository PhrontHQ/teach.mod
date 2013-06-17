montageDefine("fa336f5","apps/index.html",{text:'<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=utf-8>\n    <meta name=viewport content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">\n    <meta http-equiv=X-UA-Compatible content="chrome=1">\n\n    <title>Montage Apps</title>\n\n    <link rel=stylesheet href="http://fonts.googleapis.com/css?family=Open+Sans:400,700">\n    <link rel=stylesheet href="../stylesheets/normalize.css">\n    <link rel=stylesheet href="../stylesheets/base.css">\n    <link rel=stylesheet href="../stylesheets/pages.css">\n\n    <!--[if lt IE 9]><script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->\n</head>\n<body>\n\n    <header class=header-pages>\n        <div class=header-container>\n            <a href="/"><img class=logo src="../images/logo-pages.png" alt=Montage></a>\n            <nav class=nav>\n                <a class="nav-item active" href="/apps">Apps</a>\n                <a class=nav-item href="/docs">Docs</a>\n                <a class=nav-item href="/apis">APIs</a>\n            </nav>\n        </div>\n    </header>\n\n    <section id=intro class=intro>\n        <article>\n            <h3 class=title>Made with Montage</h3>\n            <div class=cols>\n                <div class="col col-1-2">\n                    <p>Are you a Chrome or Chrome OS user? You might already be using Montage applications.</p>\n                </div>\n                <aside class="col col-1-2">\n                </aside>\n            </div>\n        </article>\n    </section>\n\n    <section id=TipsTricks class=case>\n        <article>\n            <h3 class=title>Tips &amp; Tricks <span class=case-optimized>(Chrome OS)</span></h3>\n            <div class=cols>\n                <div class="col col-1-2">\n                    <a class=case-thumb href="http://gweb-gettingstartedguide.appspot.com/" target=_blank>\n                        <img class=case-img src="../images/apps/TipsTricks@2x.jpg" alt="Tips&amp;Tricks">\n                    </a>\n                </div>\n                <aside class="col col-1-2">\n                    <img class=case-icon src="../images/apps/TipsTricks-icon.png" alt=icon>\n                    <p>The first experience with a Chrome OS device is a Montage application, <strong>Tips &amp; Tricks</strong>.This is a hosted application with a custom loader. It uses the Montage Flow component and was built in 4.5 dev-months, including UI explorations.</p>\n                    <p>Selecting a topic reveals more information in a light box style interface while providing linear navigation cues on the sides. The topics are presented using Montage’s Flow component which places arbitrary components along a custom 3D bezier path. Thanks to Flow’s frustum culling algorithm, components that are not visible are not rendered improving application initial load and runtime performance.</p>\n                    <p>\n                        <a class="case-launch button--action" href="http://gweb-gettingstartedguide.appspot.com/" target=_blank>Launch</a>\n                    </p>\n                </aside>\n            </div>\n        </article>\n    </section>\n    \n    \n    <section id=scratchpad class=case>\n        <article>\n            <h3 class=title>Scratchpad <span class=case-optimized>(Chrome)</span></h3>\n            <div class=cols>\n                <aside class="col col-1-2">\n                    <img class=case-icon src="../images/apps/scratchpad-icon.png" alt=icon>\n                    <p><strong>Scratchpad 3.0</strong> was the first shipping Montage application. Scratchpad is a notebook Chrome extension developed for Google that synchronizes with Google Drive. This version added new features and updated the visual design.</p>\n                    <p>Thanks to Montage’s modular structure and HTML5 Templates, the skeleton of the app was in place in a single day, which allowed the five person team to work in parallel from the very beginning, focusing on their respective roles.</p>\n                    <p>In addition to streamlining the production, using Montage yielded a 25% reduction in code size.</p>\n                    <p>\n                        <button class="case-launch button--action" disabled=disabled>Scratchpad 3 is now offline</button>\n                    </p>\n                </aside>\n                <div class="col col-1-2">\n                    <a class=case-thumb href="../images/apps/scratchpad@2x.jpg" target=_blank>\n                        <img class=case-img src="../images/apps/scratchpad@2x.jpg" alt=Scratchpad>\n                    </a>\n                </div>\n            </div>\n        </article>\n    </section>\n    \n\n	<section id=gallery class="gallery pushed">\n	    <article>\n	        <h3 class=title>Gallery</h3>\n	        <p>More Apps and demos built with Montage.</p>\n	        <ul class=gallery-list>\n	            <li class=gallery-item>\n	                <a href="popcorn/" target=_blank>\n	                    <figure class=gallery-thumb><img class=gallery-img src="../images/apps/popcorn.jpg" alt=Popcorn></figure>\n	                    <figcaption class=gallery-description>Popcorn (Tablets) <a class=gallery-item-source href="https://github.com/montagejs/popcorn" target=_blank>Source</a></figcaption>\n	                </a>\n	            </li>\n	            <li class=gallery-item>\n	                <a href="calculator/" target=_blank>\n	                    <figure class=gallery-thumb><img class=gallery-img src="../images/apps/calculator.jpg" alt=Calculator></figure>\n	                    <figcaption class=gallery-description>Calculator (Mobile) <a class=gallery-item-source href="https://github.com/montagejs/calculator" target=_blank>Source</a></figcaption>\n	                </a>\n	            </li>\n	            <li class=gallery-item>\n	                <a href="paparazzi/" target=_blank>\n	                    <figure class=gallery-thumb><img class=gallery-img src="../images/apps/paparazzi.jpg" alt=Paparazzi></figure>\n	                    <figcaption class=gallery-description>Paparazzi (Desktop) <a class=gallery-item-source href="https://github.com/montagejs/paparazzi" target=_blank>Source</a></figcaption>\n	                </a>\n	            </li>\n	            <li class=gallery-item>\n	                <a href="carconfigurator/" target=_blank>\n	                    <figure class=gallery-thumb><img class=gallery-img src="../images/apps/carconfigurator.jpg" alt="Car Configurator"></figure>\n	                    <figcaption class=gallery-description>Car Configurator <a class=gallery-item-source href="https://github.com/montagejs/carconfigurator" target=_blank>Source</a></figcaption>\n	                </a>\n	            </li>\n	            <li class=gallery-item>\n	                <a href="photofx/" target=_blank>\n	                    <figure class=gallery-thumb><img class=gallery-img src="../images/apps/photoFX.jpg" alt=photoFX></figure>\n	                    <figcaption class=gallery-description>photoFX (Desktop) <a class=gallery-item-source href="https://github.com/montagejs/photofx" target=_blank>Source</a></figcaption>\n	                </a>\n	            </li>\n	            <li class=gallery-item>\n	                <a href="http://todomvc.com/labs/architecture-examples/montage/" target=_blank>\n	                    <figure class=gallery-thumb><img class=gallery-img src="../images/apps/ToDoMVC.jpg" alt=TodoMVC></figure>\n	                    <figcaption class=gallery-description>TodoMVC <a class=gallery-item-source href="https://github.com/montagejs/todo-mvc" target=_blank>Source</a></figcaption>\n	                </a>\n	            </li>\n	            <li class=gallery-item>\n	                <a href="temp-converter/&quot;" target=_blank>\n	                    <figure class=gallery-thumb><img class=gallery-img src="../images/apps/temp-converter.jpg" alt="Temp Converter"></figure>\n	                    <figcaption class=gallery-description>Temp Converter (WebKit) <a class=gallery-item-source href="https://github.com/montagejs/temp-converter" target=_blank>Source</a></figcaption>\n	                </a>\n	            </li>\n	        </ul>\n	        <p class=note><strong>Note:</strong> Most of these applications are running in development mode so you can view their source. These applications can be made ready for production with <a href="https://github.com/montagejs/mop" target=_blank>Mop, the Montage optimizer</a> which will bundle and minimize the resources into shards.</p>\n	    </article>\n	</section>\n\n\n\n    <section id=next class=next>\n        <article>\n            <h3 class=title>Create Montage Apps</h3>\n            <div class=cols>\n                <div class="col col-1-2">\n                    <p>For more infos how to create your own Montage Apps, head over to the <a href="http://montagejs.org/docs/">Montage Docs</a>. With the <a href="https://github.com/montagejs/minit">Minit</a> (Montage Initializer) tool you can  <a href="http://montagejs.org/docs/Quick-Start.html">kickstart</a> your application by generating all files and basic structure.\n                    </p>\n                </div>\n                <aside class="col col-1-2">\n                    <p><strong>Already created a Montage application?</strong> Let us know on <a href="http://webchat.freenode.net/?channels=montage" target=_blank>IRC</a> or <a href="https://twitter.com/montagejs" target=_blank>Twitter</a> and we might feature it in the gallery.\n                    </p>\n                    <p>Also, get in touch if you struggle somewhere. We\'re eager to hear about your pain points so we can improve the framework.</p>\n                </aside>\n            </div>\n        </article>\n    </section>\n\n    <footer class=footer>\n        2013 montagejs.org - <a href="https://github.com/montagejs/montagejs.org">Contributions</a> to this page are welcomed.\n    </footer>\n\n\n    \n    <script>var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-35717912-1"]),_gaq.push(["_trackPageview"]),function(){var s=document.createElement("script");s.type="text/javascript",s.async=!0,s.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(s,n)}();</script>\n\n</body>\n</html>'});