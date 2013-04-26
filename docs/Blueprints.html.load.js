montageDefine("cb78b6f","docs/Blueprints.html",{text:'<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=utf-8>\n    <meta name=viewport content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">\n    <meta http-equiv=X-UA-Compatible content="chrome=1">\n\n    <title>Blueprints - Montage Docs</title>\n\n    <link rel=stylesheet href="http://fonts.googleapis.com/css?family=Open+Sans:400,700">\n    <link rel=stylesheet href="../stylesheets/normalize.css">\n    <link rel=stylesheet href="../stylesheets/base.css">\n    <link rel=stylesheet href="../stylesheets/pages.css">\n    <link rel=stylesheet href="../stylesheets/solarized.css">\n\n    <!--[if lt IE 9]><script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->\n</head>\n<body class=docs>\n\n    <header class="header header-pages pushed">\n        <div class=header-container>\n            <a href="/"><img class=logo src="../images/logo-pages.png" alt=Montage></a>\n            <nav class=nav>\n                <a class=nav-item href="/apps">Apps</a>\n                <a class="nav-item active" href="/docs">Docs</a>\n                <a class=nav-item href="/apis">APIs</a>\n            </nav>\n        </div>\n    </header>\n\n    <section id=docs>\n        <article>\n            <div class=markdown-body>\n\n<h1>Blueprints<a class=anchor id=Blueprints href="#Blueprints"></a>\n</h1>\n\n<p>Montage blueprints are a mechanism to add metadata about application objects. Currently, blueprints are supported for components and controllers. They will serve a leading role in the data layer (not yet available). A blueprint adds information about the object, its properties, and its associations with other objects.</p>\n\n<p>Blueprints are grouped in binders. For components and controllers Montage creates a default blueprint that ensures uniqueness of the blueprints when deserialized. Blueprints are typically deserialized from a JSON file but can be created by code if necessary.</p>\n\n<h2>Component or Controller Blueprints<a class=anchor id=Component-or-Controller-Blueprints href="#Component-or-Controller-Blueprints"></a>\n</h2>\n\n<p>The most common way to access a blueprint for a component or controller is by accessing the <code>blueprint</code> property of the component or controller directly. This returns a promise for the deserialized blueprint.</p>\n\n<p>The blueprint for an object provides a list of property blueprints that describe each of the object\'s properties. Property blueprints can be logically grouped by functionality for convenience.\nThe blueprint also provides validation rules to govern optional and required bindings. These validation rules verify that the component or controller is bound correctly.</p>\n\n<h2>Property Blueprints<a class=anchor id=Property-Blueprints href="#Property-Blueprints"></a>\n</h2>\n\n<p>A property blueprint describes a single property of an object. In addition to the name of a property the blueprint defines the cardinality, value type, and allowed values. The cardinality defines the number of values that can be associated to a property.</p>\n\n<h2>Association Blueprints<a class=anchor id=Association-Blueprints href="#Association-Blueprints"></a>\n</h2>\n\n<p>An association is a property that defines a relation between two application objects. It defines the target blueprint of the association.</p>\n\n<h2>Validation Rules Objects<a class=anchor id=Validation-Rules-Objects href="#Validation-Rules-Objects"></a>\n</h2>\n\n<p>TDB</p>\n\n<h2>Creating Blueprints<a class=anchor id=Creating-Blueprints href="#Creating-Blueprints"></a>\n</h2>\n\n<p>Although most developers will only interact with pre-existing blueprints deserialized from a file, it is quite easy to create a blueprint in memory:</p>\n\n<p></p><div class=highlight><pre>          <span class=kd>var</span> <span class=nx>companyBinder</span> <span class=o>=</span> <span class=nx>BlueprintBinder</span><span class=p>.</span><span class=nx>create</span><span class=p>().</span><span class=nx>initWithName</span><span class=p>(</span><span class=s2>"CompanyBinder"</span><span class=p>);</span>\n\n          <span class=kd>var</span> <span class=nx>personBlueprint</span> <span class=o>=</span> <span class=nx>companyBinder</span><span class=p>.</span><span class=nx>addBlueprintNamed</span><span class=p>(</span><span class=s2>"Person"</span><span class=p>,</span> <span class=s2>"meta/blueprint/person"</span><span class=p>);</span>\n          <span class=nx>personBlueprint</span><span class=p>.</span><span class=nx>addToOnePropertyBlueprintNamed</span><span class=p>(</span><span class=s2>"name"</span><span class=p>);</span>\n          <span class=nx>personBlueprint</span><span class=p>.</span><span class=nx>addToManyPropertyBlueprintNamed</span><span class=p>(</span><span class=s2>"phoneNumbers"</span><span class=p>);</span>\n\n          <span class=kd>var</span> <span class=nx>companyBlueprint</span> <span class=o>=</span> <span class=nx>companyBinder</span><span class=p>.</span><span class=nx>addBlueprintNamed</span><span class=p>(</span><span class=s2>"Company"</span><span class=p>,</span> <span class=s2>"meta/blueprint/company"</span><span class=p>);</span>\n          <span class=nx>companyBlueprint</span><span class=p>.</span><span class=nx>addToOnePropertyBlueprintNamed</span><span class=p>(</span><span class=s2>"name"</span><span class=p>);</span>\n\n          <span class=nx>companyBlueprint</span><span class=p>.</span><span class=nx>addToManyAssociationBlueprintNamed</span><span class=p>(</span><span class=s2>"employees"</span><span class=p>,</span> <span class=nx>personBlueprint</span><span class=p>.</span><span class=nx>addToOneAssociationBlueprintNamed</span><span class=p>(</span><span class=s2>"employer"</span><span class=p>));</span>\n\n          <span class=kd>var</span> <span class=nx>projectBlueprint</span> <span class=o>=</span> <span class=nx>companyBinder</span><span class=p>.</span><span class=nx>addBlueprintNamed</span><span class=p>(</span><span class=s2>"Project"</span><span class=p>,</span> <span class=s2>"meta/blueprint/project"</span><span class=p>);</span>\n          <span class=nx>projectBlueprint</span><span class=p>.</span><span class=nx>addToOnePropertyBlueprintNamed</span><span class=p>(</span><span class=s2>"name"</span><span class=p>);</span>\n          <span class=nx>projectBlueprint</span><span class=p>.</span><span class=nx>addToOnePropertyBlueprintNamed</span><span class=p>(</span><span class=s2>"startDate"</span><span class=p>);</span>\n          <span class=nx>projectBlueprint</span><span class=p>.</span><span class=nx>addToOnePropertyBlueprintNamed</span><span class=p>(</span><span class=s2>"endDate"</span><span class=p>);</span>\n\n          <span class=nx>companyBlueprint</span><span class=p>.</span><span class=nx>addToManyAssociationBlueprintNamed</span><span class=p>(</span><span class=s2>"projects"</span><span class=p>,</span> <span class=nx>personBlueprint</span><span class=p>.</span><span class=nx>addToOneAssociationBlueprintNamed</span><span class=p>(</span><span class=s2>"company"</span><span class=p>));</span>\n\n          <span class=nx>personBlueprint</span><span class=p>.</span><span class=nx>addToManyAssociationBlueprintNamed</span><span class=p>(</span><span class=s2>"projects"</span><span class=p>,</span> <span class=nx>projectBlueprint</span><span class=p>.</span><span class=nx>addToManyAssociationBlueprintNamed</span><span class=p>(</span><span class=s2>"contributors"</span><span class=p>));</span>\n\n          <span class=nx>BlueprintBinder</span><span class=p>.</span><span class=nx>manager</span><span class=p>.</span><span class=nx>addBlueprintBinder</span><span class=p>(</span><span class=nx>companyBinder</span><span class=p>);</span>\n</pre></div>\n\n<p>For components we can simplify. If we build the Button blueprint for example we can see how it flows.\n</p><div class=highlight><pre>          <span class=kd>var</span> <span class=nx>serializer</span> <span class=o>=</span> <span class=nx>Serializer</span><span class=p>.</span><span class=nx>create</span><span class=p>().</span><span class=nx>initWithRequire</span><span class=p>(</span><span class=nx>require</span><span class=p>);</span>\n\n          <span class=c1>//Create a new empty blueprint with the button identifier as a name.</span>\n          <span class=kd>var</span> <span class=nx>newBlueprint</span> <span class=o>=</span> <span class=nx>Blueprint</span><span class=p>.</span><span class=nx>create</span><span class=p>().</span><span class=nx>initWithName</span><span class=p>(</span><span class=nx>button</span><span class=p>.</span><span class=nx>identifier</span><span class=p>);</span>\n\n          <span class=c1>// Then creat all the property description we need</span>\n          <span class=kd>var</span> <span class=nx>autofocus</span> <span class=o>=</span> <span class=nx>newBlueprint</span><span class=p>.</span><span class=nx>addToOnePropertyBlueprintNamed</span><span class=p>(</span><span class=s2>"autofocus"</span><span class=p>);</span>\n          <span class=nx>autofocus</span><span class=p>.</span><span class=nx>valueType</span> <span class=o>=</span> <span class=s2>"string"</span><span class=p>;</span>\n          <span class=nx>autofocus</span><span class=p>.</span><span class=nx>helpKey</span> <span class=o>=</span> <span class=s2>"Specifies that a button should automatically get focus when the page loads"</span><span class=p>;</span>\n\n          <span class=kd>var</span> <span class=nx>enabled</span> <span class=o>=</span> <span class=nx>newBlueprint</span><span class=p>.</span><span class=nx>addToOnePropertyBlueprintNamed</span><span class=p>(</span><span class=s2>"enabled"</span><span class=p>);</span>\n          <span class=nx>enabled</span><span class=p>.</span><span class=nx>valueType</span> <span class=o>=</span> <span class=s2>"boolean"</span><span class=p>;</span>\n          <span class=nx>enabled</span><span class=p>.</span><span class=nx>helpKey</span> <span class=o>=</span> <span class=s2>"Specifies that a button should be enabled"</span><span class=p>;</span>\n\n          <span class=kd>var</span> <span class=nx>form</span> <span class=o>=</span> <span class=nx>newBlueprint</span><span class=p>.</span><span class=nx>addToOnePropertyBlueprintNamed</span><span class=p>(</span><span class=s2>"form"</span><span class=p>);</span>\n          <span class=nx>form</span><span class=p>.</span><span class=nx>valueType</span> <span class=o>=</span> <span class=s2>"string"</span><span class=p>;</span>\n          <span class=nx>form</span><span class=p>.</span><span class=nx>helpKey</span> <span class=o>=</span> <span class=s2>"Specifies one or more forms the button belongs to"</span><span class=p>;</span>\n\n          <span class=kd>var</span> <span class=nx>formaction</span> <span class=o>=</span> <span class=nx>newBlueprint</span><span class=p>.</span><span class=nx>addToOnePropertyBlueprintNamed</span><span class=p>(</span><span class=s2>"formaction"</span><span class=p>);</span>\n          <span class=nx>formaction</span><span class=p>.</span><span class=nx>valueType</span> <span class=o>=</span> <span class=s2>"url"</span><span class=p>;</span>\n          <span class=nx>formaction</span><span class=p>.</span><span class=nx>helpKey</span> <span class=o>=</span> <span class=s2>"Specifies where to send the form-data when a form is submitted. Only for type=\'submit\'"</span><span class=p>;</span>\n\n          <span class=kd>var</span> <span class=nx>formenctype</span> <span class=o>=</span> <span class=nx>newBlueprint</span><span class=p>.</span><span class=nx>addToOnePropertyBlueprintNamed</span><span class=p>(</span><span class=s2>"formenctype"</span><span class=p>);</span>\n          <span class=nx>formenctype</span><span class=p>.</span><span class=nx>valueType</span> <span class=o>=</span> <span class=s2>"enum"</span><span class=p>;</span>\n          <span class=nx>formenctype</span><span class=p>.</span><span class=nx>enumValues</span> <span class=o>=</span> <span class=p>[</span><span class=s2>"application/x-www-form-urlencoded"</span><span class=p>,</span> <span class=s2>"multipart/form-data"</span><span class=p>,</span> <span class=s2>"text/plain"</span><span class=p>];</span>\n          <span class=nx>formenctype</span><span class=p>.</span><span class=nx>helpKey</span> <span class=o>=</span> <span class=s2>"Specifies how form-data should be encoded before sending it to a server. Only for type=\'submit\'"</span><span class=p>;</span>\n\n          <span class=kd>var</span> <span class=nx>formmethod</span> <span class=o>=</span> <span class=nx>newBlueprint</span><span class=p>.</span><span class=nx>addToOnePropertyBlueprintNamed</span><span class=p>(</span><span class=s2>"formmethod"</span><span class=p>);</span>\n          <span class=nx>formmethod</span><span class=p>.</span><span class=nx>valueType</span> <span class=o>=</span> <span class=s2>"enum"</span><span class=p>;</span>\n          <span class=nx>formmethod</span><span class=p>.</span><span class=nx>enumValues</span> <span class=o>=</span> <span class=p>[</span><span class=s2>"get"</span><span class=p>,</span> <span class=s2>"post"</span><span class=p>];</span>\n          <span class=nx>formmethod</span><span class=p>.</span><span class=nx>helpKey</span> <span class=o>=</span> <span class=s2>"Specifies how to send the form-data (which HTTP method to use). Only for type=\'submit\'"</span><span class=p>;</span>\n\n          <span class=kd>var</span> <span class=nx>formnovalidate</span> <span class=o>=</span> <span class=nx>newBlueprint</span><span class=p>.</span><span class=nx>addToOnePropertyBlueprintNamed</span><span class=p>(</span><span class=s2>"formnovalidate"</span><span class=p>);</span>\n          <span class=nx>formnovalidate</span><span class=p>.</span><span class=nx>valueType</span> <span class=o>=</span> <span class=s2>"boolean"</span><span class=p>;</span>\n          <span class=nx>formnovalidate</span><span class=p>.</span><span class=nx>helpKey</span> <span class=o>=</span> <span class=s2>"Specifies that the form-data should not be validated on submission. Only for type=\'submit\'"</span><span class=p>;</span>\n\n          <span class=kd>var</span> <span class=nx>formtarget</span> <span class=o>=</span> <span class=nx>newBlueprint</span><span class=p>.</span><span class=nx>addToOnePropertyBlueprintNamed</span><span class=p>(</span><span class=s2>"formtarget"</span><span class=p>);</span>\n          <span class=nx>formtarget</span><span class=p>.</span><span class=nx>valueType</span> <span class=o>=</span> <span class=s2>"string"</span><span class=p>;</span>\n          <span class=nx>formtarget</span><span class=p>.</span><span class=nx>helpKey</span> <span class=o>=</span> <span class=s2>"Specifies where to display the response after submitting the form. Only for type=\'submit\'"</span><span class=p>;</span>\n\n          <span class=kd>var</span> <span class=nx>name</span> <span class=o>=</span> <span class=nx>newBlueprint</span><span class=p>.</span><span class=nx>addToOnePropertyBlueprintNamed</span><span class=p>(</span><span class=s2>"name"</span><span class=p>);</span>\n          <span class=nx>name</span><span class=p>.</span><span class=nx>valueType</span> <span class=o>=</span> <span class=s2>"string"</span><span class=p>;</span>\n          <span class=nx>name</span><span class=p>.</span><span class=nx>helpKey</span> <span class=o>=</span> <span class=s2>"Specifies a name for the button"</span><span class=p>;</span>\n\n          <span class=kd>var</span> <span class=nx>label</span> <span class=o>=</span> <span class=nx>newBlueprint</span><span class=p>.</span><span class=nx>addToOnePropertyBlueprintNamed</span><span class=p>(</span><span class=s2>"label"</span><span class=p>);</span>\n          <span class=nx>label</span><span class=p>.</span><span class=nx>valueType</span> <span class=o>=</span> <span class=s2>"string"</span><span class=p>;</span>\n          <span class=nx>label</span><span class=p>.</span><span class=nx>helpKey</span> <span class=o>=</span> <span class=s2>""</span><span class=p>;</span>\n\n          <span class=kd>var</span> <span class=nx>type</span> <span class=o>=</span> <span class=nx>newBlueprint</span><span class=p>.</span><span class=nx>addToOnePropertyBlueprintNamed</span><span class=p>(</span><span class=s2>"type"</span><span class=p>);</span>\n          <span class=nx>type</span><span class=p>.</span><span class=nx>valueType</span> <span class=o>=</span> <span class=s2>"enum"</span><span class=p>;</span>\n          <span class=nx>type</span><span class=p>.</span><span class=nx>enumValues</span> <span class=o>=</span> <span class=p>[</span><span class=s2>"button"</span><span class=p>,</span> <span class=s2>"reset"</span><span class=p>,</span> <span class=s2>"submit"</span><span class=p>];</span>\n          <span class=nx>type</span><span class=p>.</span><span class=nx>helpKey</span> <span class=o>=</span> <span class=s2>"Specifies the type of button"</span><span class=p>;</span>\n\n          <span class=kd>var</span> <span class=nx>value</span> <span class=o>=</span> <span class=nx>newBlueprint</span><span class=p>.</span><span class=nx>addToOnePropertyBlueprintNamed</span><span class=p>(</span><span class=s2>"value"</span><span class=p>);</span>\n          <span class=nx>value</span><span class=p>.</span><span class=nx>valueType</span> <span class=o>=</span> <span class=s2>"string"</span><span class=p>;</span>\n          <span class=nx>value</span><span class=p>.</span><span class=nx>helpKey</span> <span class=o>=</span> <span class=s2>"Specifies an initial value for the button"</span><span class=p>;</span>\n\n          <span class=c1>// And assign the property in groups following the logic for user presentation</span>\n          <span class=nx>newBlueprint</span><span class=p>.</span><span class=nx>addPropertyBlueprintToGroupNamed</span><span class=p>(</span><span class=nx>newBlueprint</span><span class=p>.</span><span class=nx>propertyBlueprintForName</span><span class=p>(</span><span class=s2>"label"</span><span class=p>),</span> <span class=s2>"base"</span><span class=p>);</span>\n          <span class=nx>newBlueprint</span><span class=p>.</span><span class=nx>addPropertyBlueprintToGroupNamed</span><span class=p>(</span><span class=nx>newBlueprint</span><span class=p>.</span><span class=nx>propertyBlueprintForName</span><span class=p>(</span><span class=s2>"type"</span><span class=p>),</span> <span class=s2>"base"</span><span class=p>);</span>\n          <span class=nx>newBlueprint</span><span class=p>.</span><span class=nx>addPropertyBlueprintToGroupNamed</span><span class=p>(</span><span class=nx>newBlueprint</span><span class=p>.</span><span class=nx>propertyBlueprintForName</span><span class=p>(</span><span class=s2>"name"</span><span class=p>),</span> <span class=s2>"base"</span><span class=p>);</span>\n          <span class=nx>newBlueprint</span><span class=p>.</span><span class=nx>addPropertyBlueprintToGroupNamed</span><span class=p>(</span><span class=nx>newBlueprint</span><span class=p>.</span><span class=nx>propertyBlueprintForName</span><span class=p>(</span><span class=s2>"enabled"</span><span class=p>),</span> <span class=s2>"base"</span><span class=p>);</span>\n          <span class=nx>newBlueprint</span><span class=p>.</span><span class=nx>addPropertyBlueprintToGroupNamed</span><span class=p>(</span><span class=nx>newBlueprint</span><span class=p>.</span><span class=nx>propertyBlueprintForName</span><span class=p>(</span><span class=s2>"autofocus"</span><span class=p>),</span> <span class=s2>"base"</span><span class=p>);</span>\n          <span class=nx>newBlueprint</span><span class=p>.</span><span class=nx>addPropertyBlueprintToGroupNamed</span><span class=p>(</span><span class=nx>newBlueprint</span><span class=p>.</span><span class=nx>propertyBlueprintForName</span><span class=p>(</span><span class=s2>"form"</span><span class=p>),</span> <span class=s2>"form"</span><span class=p>);</span>\n          <span class=nx>newBlueprint</span><span class=p>.</span><span class=nx>addPropertyBlueprintToGroupNamed</span><span class=p>(</span><span class=nx>newBlueprint</span><span class=p>.</span><span class=nx>propertyBlueprintForName</span><span class=p>(</span><span class=s2>"formaction"</span><span class=p>),</span> <span class=s2>"form"</span><span class=p>);</span>\n          <span class=nx>newBlueprint</span><span class=p>.</span><span class=nx>addPropertyBlueprintToGroupNamed</span><span class=p>(</span><span class=nx>newBlueprint</span><span class=p>.</span><span class=nx>propertyBlueprintForName</span><span class=p>(</span><span class=s2>"formenctype"</span><span class=p>),</span> <span class=s2>"form"</span><span class=p>);</span>\n          <span class=nx>newBlueprint</span><span class=p>.</span><span class=nx>addPropertyBlueprintToGroupNamed</span><span class=p>(</span><span class=nx>newBlueprint</span><span class=p>.</span><span class=nx>propertyBlueprintForName</span><span class=p>(</span><span class=s2>"formmethod"</span><span class=p>),</span> <span class=s2>"form"</span><span class=p>);</span>\n          <span class=nx>newBlueprint</span><span class=p>.</span><span class=nx>addPropertyBlueprintToGroupNamed</span><span class=p>(</span><span class=nx>newBlueprint</span><span class=p>.</span><span class=nx>propertyBlueprintForName</span><span class=p>(</span><span class=s2>"formnovalidate"</span><span class=p>),</span> <span class=s2>"form"</span><span class=p>);</span>\n          <span class=nx>newBlueprint</span><span class=p>.</span><span class=nx>addPropertyBlueprintToGroupNamed</span><span class=p>(</span><span class=nx>newBlueprint</span><span class=p>.</span><span class=nx>propertyBlueprintForName</span><span class=p>(</span><span class=s2>"formtarget"</span><span class=p>),</span> <span class=s2>"form"</span><span class=p>);</span>\n          <span class=nx>button</span><span class=p>.</span><span class=nx>blueprint</span> <span class=o>=</span> <span class=nx>newBlueprint</span><span class=p>;</span>\n          \n          <span class=c1>// Use the blueprint. </span>\n          <span class=c1>// Careful that the blueprint method return a promise.</span>\n          <span class=kd>var</span> <span class=nx>blueprintPromise</span> <span class=o>=</span> <span class=nx>button</span><span class=p>.</span><span class=nx>blueprint</span><span class=p>;</span>\n          <span class=k>return</span> <span class=nx>blueprintPromise</span><span class=p>.</span><span class=nx>then</span><span class=p>(</span><span class=kd>function</span> <span class=p>(</span><span class=nx>blueprint</span><span class=p>)</span> <span class=p>{</span>\n              <span class=kd>var</span> <span class=nx>serializedDescription</span> <span class=o>=</span> <span class=nx>serializer</span><span class=p>.</span><span class=nx>serializeObject</span><span class=p>(</span><span class=nx>blueprint</span><span class=p>);</span>\n              <span class=nx>console</span><span class=p>.</span><span class=nx>log</span><span class=p>(</span><span class=nx>serializedDescription</span><span class=p>);</span>\n          <span class=p>});</span>\n</pre></div>\n\n                </div>\n        </article>\n    </section>\n\n    <section id=next class=next>\n        <article>\n            <h3 class=title>More help?</h3>\n            <div class=cols>\n                <div class="col col-1-2">\n                    <p>Can\'t find what you are looking for? Get in touch, we\'re more than happy in helping answer your questions.\n                    </p>\n                </div>\n                <aside class="col col-1-2">\n                    <p><strong>Have feedback or ideas?</strong> Let us know by creating a new <a href="https://github.com/montagejs/montage/issues" target=_blank>issue</a>, join us in <a href="http://webchat.freenode.net/?channels=montage" target=_blank>IRC</a> or post questions to our <a href="https://groups.google.com/forum/?fromgroups#!forum/montagejs" target=_blank>Google Group</a>. We\'re also on <a href="https://twitter.com/montage_js" target=_blank>Twitter</a> and <a href="https://plus.google.com/116915300739108010954/" target=_blank>Google+</a>.\n                    </p>\n                </aside>\n            </div>\n        </article>\n    </section>\n\n\n    <section id=social class=social>\n        <article>\n\n            <div class="button-group github">\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=watch&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=fork&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n            </div>\n\n\n            <div class="button-group twitter">\n                <a href="https://twitter.com/share" class=twitter-share-button data-via=montage_js data-count=none>Tweet</a>\n                <script>!function(e,t,n){var r,i=e.getElementsByTagName(t)[0];e.getElementById(n)||(r=e.createElement(t),r.id=n,r.src="//platform.twitter.com/widgets.js",i.parentNode.insertBefore(r,i))}(document,"script","twitter-wjs")</script>\n                <a href="https://twitter.com/montage_js" class=twitter-follow-button data-show-count=false data-show-screen-name=false>Follow @montage_js</a>\n                <script>!function(e,t,n){var r,i=e.getElementsByTagName(t)[0];e.getElementById(n)||(r=e.createElement(t),r.id=n,r.src="//platform.twitter.com/widgets.js",i.parentNode.insertBefore(r,i))}(document,"script","twitter-wjs")</script>\n            </div>\n\n            <div class="button-group g-plus">\n                \n                <script src="https://apis.google.com/js/plusone.js">"explicit"</script>\n                \n                <div class=g-plusone data-size=medium data-annotation=inline data-width=200></div>\n                \n                <script>gapi.plusone.go()</script>\n            </div>\n\n        </article>\n    </section>\n\n\n    <footer class=footer>\n        2013 montagejs.org - <a href="https://github.com/montagejs/montagejs.org">Contributions</a> to this page are welcomed.\n    </footer>\n\n\n    \n    <script>var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-35717912-1"]),_gaq.push(["_trackPageview"]),function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}()</script>\n\n</body>\n</html>'})