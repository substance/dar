# Dar Article

This specification defines strict tagging rules for [JATS](https://jats.nlm.nih.gov/archiving/tag-library/1.1/), with the goal of optimising for machine readability, avoiding redundancy and ensuring reusability. The premise is to have exactly one tagging style per use-case. E.g. there is only one way to tag a reference, author or affiliation. Additionally we define a set of optional extensions to model reproducible elements (cells) in JATS. This work is inspired but not related to [JATS4R](http://jats4r.org/), a similar effort to make JATS more reusable. 

Core elements

[`<aff>`](#aff) [`<article-meta>`](#article-meta) [`<caption>`](#caption) [`<contrib-group>`](#contrib-group) [`<contrib>`](#contrib-contrib-typeperson) [`<disp-quote>`](#disp-quote) [`<fig>`](#fig) [`<fn-group>`](#fn-group) [`<fn>`](#fn) [`<inline-math>`](#inline-math) [`<list>`](#list) [`<media>`](#media) [`<name>`](#name) [`<ref>`](#ref) [`sec`](#sec) [`table-wrap`](#table-wrap)

Reproducible elements

[`<code[specific-use=cell]>`](#codespecific-usecell) [`<fig[fig-type=repro-fig]>`](#figfig-typerepro-fig) [`<named-content[content-type=inline-cell]>`](#named-contentcontent-typeinline-cell)


## Core Elements

### `<aff>`

```
institution[content-type=orgname],
institution[content-type=orgdiv1]?, institution[content-type=orgdiv2]?,
institution[content-type=orgdiv3]?, addr-line[content-type=street-address]?,
addr-line[content-type=complements]?,
city?, state?, postal-code?, country?,
phone?, fax?, email?, uri[content-type=link]?
```

Example:

```xml
<aff id="aff1">
  <institution content-type="orgname">German Primate Center GmbH</institution>
  <institution content-type="orgdiv1">Neurobiology Laboratory</institution>
  <city>Göttingen</city>
  <country>Germany</country>
  <uri content-type="entity">organisation-1</uri>
</aff>
```

### `<article-meta>`

Please note, that so far only `title-group`, `contrib-group`, and `abstract` are fully specified and editable in Texture.

```
article-id?, article-categories?, title-group?, contrib-group[content-type=author],
contrib-group[content-type=editor], author-notes?, pub-date*, volume?, issue?,
isbn, (((fpage, lpage?)?, page-range?) | elocation-id)?, history?, permissions?,
self-uri*, (related-article | related-object)*, abstract?, trans-abstract*,
kwd-group*, funding-group*, conference*, counts?, custom-meta-group?
```

Example shows all editable elements:

```xml
<article-meta>
  <title-group>
    <article-title>Object vision to hand action in macaque parietal, premotor, and motor cortices</article-title>
  </title-group>
  <contrib-group content-type="author">
    ...
  </contrib-group>
  <contrib-group content-type="editor">
    ...
  </contrib-group>
  <aff id="aff1">
    ...
  </aff>
  <aff id="aff2">
    ...
  </aff>
  <pub-date publication-format="print" date-type="pub" iso-8601-date="1999-01-29">
    <day>29</day>
    <month>01</month>
    <year>1999</year>
  </pub-date>
  <volume>318</volume>
  <issue>7187</issue>
  <fpage>837</fpage>
  <lpage>841</lpage>
  <history>
    ...
  </history>
  <abstract>
    <p>Abstract</p>
  </abstract>
</article-meta>
```


### `<caption>`

```
title?, p*
```

### `<collab>`

```
named-content[content-type=name], uri?, contrib-group?
```

*NOTE: Group authors `<collab>` are not yet supported in Texture.*

### `<contrib-group>`

```
(contrib[contrib-type=person|group])*
```

Example for authors / group authors:

```xml
<contrib-group content-type="author">
  <contrib contrib-type="person" equal-contrib="yes">
    <name>
      <surname>Church</surname><given-names>Deanna M.</given-names>
    </name>
    <xref ref-type="aff" rid="aff1"/>
  </contrib>
  <!-- NOTE: Group authors are not yet supported by Texture! -->
  <contrib contrib-type="group" equal-contrib="yes">
    <collab>
      <named-content content-type="name">The Mouse Genome Sequencing Consortium</named-content>
      <uri content-type="entity">organisation-25</uri>
      <contrib-group>
        <contrib>
          <name>
            <surname>Kelly</surname><given-names>Laura A.</given-names>
          </name>
        </contrib>
        <contrib>
          <name>
            <surname>Randall</surname><given-names>Daniel Lee</given-names>
            <suffix>Jr.</suffix>
          </name>
        </contrib>
      </contrib-group>
    </collab>
  </contrib>
</contrib-group>
```

Example for editors:

```xml
<contrib-group content-type="editor">
  <contrib contrib-type="person">
    <name>
      <surname>Kastner</surname><given-names>Sabine</given-names>
    </name>
    <xref ref-type="aff" rid="aff1"/>
    <contrib-id contrib-id-type="entity">person-2</contrib-id>
  </contrib>
</contrib-group>
```

### `<contrib contrib-type="person">`

```
contrib-id[contrib-id-type=orcid]?, contrib-id[contrib-id-type=entity]?, name, email?, xref*
```

### `<contrib contrib-type="group">`

```
collab
```

### `<disp-quote>`

```
p+, attrib?
```

```xml
<disp-quote>
  <p>Curabitur vehicula mattis sodales. Orci varius natoque penatibus.</p>
  <attrib>John Doe</attrib>
</disp-quote>
```

### `<fig>`

```
object-id[pub-id-type=doi]?, label?, caption?, graphic
```

*NOTE: In Texture `<label>` is auto-generated and custom labels will be overriden.*

```xml
<fig id="fig1">
  <object-id pub-id-type="doi">...</object-id>
  <label>Figure 1</label>
  <caption>
    <title>This is the figure that shows everything</title>
    <p>Lorem ipsum</p>
  </caption>
  <graphic xlink:href="images/fig1"/>
</fig>
```

### `<fn-group>`

```
fn*
```

Example:

```xml
<fn-group>
  <fn id="fn1">
    <p>Lorem ipsum dolor sit amet, ea ludus intellegat.</p>
  </fn>
</fn-group>
```

### `<fn>`

```
@id

p*
```


### `<inline-math>`

```
tex-math
```

Example:

```xml
<p>Math as part of the text <inline-formula content-type="math/tex">
  <tex-math>f\in {\mathcal C}^0([0,+\infty )).</tex-math>
</inline-formula>.</p>
```

### `<list>`

*NOTE: Not implemented in Texture yet.*

```
list-item
```

Example for bullet list:

```xml
<list list-type="bullet">
  <list-item>
    <p>item 1</p>
  </list-item>
  <list-item>
    <list list-type="bullet">
      <list-item>
        <p>item 1.1</p>
      </list-item>
    </list>
  </list-item>
</list>
```

### `<list-item>`

```
(list | p)?
```

*NOTE: We allow only one list or paragraph as a child.*

### `<media>`

```
object-id[pub-id-type=doi]?, label?, caption?
```

*NOTE: In Texture `<label>` is auto-generated and custom labels will be overriden.*

Example:

```xml
<media id="media1" mime-subtype="mp4" mimetype="video" xlink:href="elife-15278-media1.mp4">
  <object-id pub-id-type="doi">10.7554/eLife.15278.004</object-id>
  <caption>
    <title>Experimental task.</title>
    <p>A monkey grasped and held highly variable objects presented on a PC-controlled turntable. Note: For presentation purposes, the video was captured in the light.
    </p>
  </caption>
</media>
```

### `<name>`

```
surname?, given-names?, prefix?, suffix?
```

### `<person-group>`

```
(collab, name)*
```

### `<ref>`

All references are expressed as structured `<element-citation>` records. Unlike JATS we define a strict pattern for each `publication-type` value.

Spec for `<element-citation>`:

publication-type|pattern
---|---
book|person-group[person-group-type=author]?, person-group[person-group-type=editor]?, edition?, year?, month?, day?, chapter-title?, source?, publisher-loc*, publisher-name*, fpage?, lpage?, page-range?, page-count?, elocation-id?, pub-id[pub-id-type='doi, pmid, isbn, entity']?
preprint|person-group[person-group-type='author'], article-title, source, year, month?, day?, pub-id[pub-id-type='doi, entity']?
clinicaltrial|person-group[person-group-type=sponsor]?, year?, month?, day?, article-title?, source?,pub-id[pub-id-type='doi, entity']?
confproc|person-group[person-group-type='author']?, article-title?, year?, month?, day?, conf-name?, source?, fpage?, lpage?, page-range?, elocation-id?, pub-id[pub-id-type='doi,entity']?
data|person-group[person-group-type='author']?, data-title?, source?, year?, month?, day?, pub-id[pub-id-type="accession, ark, doi, archive, entity"]?
periodical|person-group[person-group-type=author]?, article-title?, year?, month?, day?, source?, fpage?, lpage?, page-range?, volume?, pub-id[pub-id-type='doi, entity']?
journal|person-group[person-group-type=author]?, person-group[person-group-type=editor]?, year, month?, day?, article-title, source?, volume?, issue?, fpage?, lpage?, page-range?, elocation-id?, comment?, pub-id[pub-id-type='doi, pmid, entity']?
patent|person-group[person-group-type='inventor'], collab[type=assignee]?, article-title?, year?, month?, day?, source?, patent[country='xxx']?
report|person-group[person-group-type='author']?, source?, year?, month?, day?, publisher-name*, publisher-loc*, pub-id[pub-id-type='isbn, entity']?
software|person-group[person-group-type='author']?, year?, month?, day?, source?, version?, publisher-loc*, publisher-name*, pub-id[pub-id-type='doi, entity']?
thesis|person-group[person-group-type='author']?, year?, month?, day?, article-title?, publisher-name*, publisher-loc*, pub-id[pub-id-type='doi, entity']?
webpage|person-group[person-group-type='author']?, article-title?, uri?, year?, month?, day?, publisher-loc*, source?

Example:

```xml
<ref id="r1">
  <element-citation publication-type="book">
    <person-group person-group-type="author">
      <collab>National Research Council</collab>
    </person-group>
    <year iso-8601-date="2003">2003</year>
    <source>Guidelines for the Care and Use of Mammals in Neuroscience and Behavioral Research</source>
    <publisher-loc>Washington, D.C</publisher-loc>
    <publisher-name>National Academies Press</publisher-name>
    <pub-id pub-id-type="doi">10.17226/10732</pub-id>
    <!-- Internal: links an element-citation with a record in the database -->
    <pub-id pub-id-type="entity">book-1</pub-id>
  </element-citation>
</ref>
```

### `<sec>`

We are much stricter as the original JATS, and only allow supported block-level elements.

```
title?, (fig | media | table-wrap | list | p | disp-quote | sec)*
```

### `<table-wrap>`

```
object-id[pub-id-type=doi]?, label?, caption?, table
```

*NOTE: In Texture `<label>` is auto-generated and custom labels will be overriden.*

```xml
<table-wrap id="tbl2" position="float">
  <object-id pub-id-type="doi">10.7554/eLife.10565.006</object-id>
  <label>Table 2.</label>
  <caption>
    <title>Table title</title>
    <p>Sequence identity matrix of the piggyBac inverted terminal repeat sequences and consensus sequences of the MER75 and MER85 human piggyBac-like elements</p>
  </caption>
  <table>...</table>
</table-wrap>
```

## Reproducible Elements

*NOTE: These are considered an extension to JATS. It requires a compatible execution engine to be attached. You can open those documents with Stencila.*

### `code[specific-use=cell]`

```
named-content
```

Example:


```xml
<code specific-use="cell">
  <named-content>
    <alternatives>
      <code specific-use="source" language="javascript" code-type="paused"><![CDATA[x = 5*5]]></code>
      <code specific-use="output" language="json"><![CDATA[{ "value_type": "number", "value": 25}]]></code>
    </alternatives>
  </named-content>
</code>
```

### `named-content[content-type=inline-cell]`

Example:


```xml

<p>We got <named-content content-type="inline-cell">
    <alternatives>
      <code specific-use="source" language="javascript"><![CDATA[5*5]]></code>
      <code specific-use="output" language="json"><![CDATA[{ "value_type": "number", "value": 25}]]></code>
    </alternatives>
  </named-content> apples.
</p>
```


### `code[specific-use=cell] > named-content`:

```
alternatives
```

### `code[specific-use=cell] > named-content > alternatives`

```
code[specific-use=source], code[specific-use=output]
```

### `code[specific-use=cell] > named-content > alternatives > code`

```
#PCDATA
```

### `fig[fig-type=repro-fig]`

```
object-id[pub-id-type=doi]?, caption?, alternatives
```

Example:

```xml
<fig id="f1" fig-type="repro-fig">
  <caption>
    <title>Biodiversity on Mars</title>
    <p>Lorem ipsum</p>
  </caption>
  <alternatives>
    <code specific-use="source" language="mini" code-type="paused"><![CDATA[plot([11,98])]]></code>
    <code specific-use="output" language="json"><![CDATA[{"execution_time": 1, "value_type": "plot-ly", "value": {...} }]]></code>
  </alternatives>
</fig>
```

### `fig[fig-type=repro-fig] > alternatives`

```
code[specific-use=source], code[specific-use=output]
```

### `fig[fig-type=repro-fig] > alternatives > code`

```
@code-type paused|''
#PCDATA
```

