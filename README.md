# Dar

Dar stands for (Reproducible) Document Archive and specifies a virtual file format that holds multiple digital documents, complete with images and other assets. A Dar consists of a manifest file (`manifest.xml`) that describes the contents.

```xml
<dar>
  <documents>
    <document id="manuscript" name="Reproducible Document Stack" type="article" path="manuscript.xml" />
    <document id="sheet" name="Sheet 1" type="sheet" path="sheet.xml" />
  </documents>
  <assets>
    <asset id="234o23489237498234798" mime-type="image/png" name="Picture 1" path="234o23489237498234798.png"/>
  </assets>
  <runtime>particle-physics@1.0</runtime>
</dar>
```

There are two types of contents:

- Documents:  Those are meant to be manipulated by a visual editor, and typically stored as XML/HTML or JSON.
- Assets: Regular files which can be used from any document. For instance, two documents could embed the same image.

## Designed for research and scientific publishing

Dar is being designed for storing [reproducible research publications](https://elifesciences.org/labs/7dbeb390/reproducible-document-stack-supporting-the-next-generation-research-article), but the underlying concepts are suitable for any kind of digital documents that should be bundled together with their assets.

## Goals

- Establish standardised research publications
- Self-contained archive (includes manuscript, images, source code and data)
- Machine-friendly format to ease development of tools
- Long-term preservation
- Stand-alone, offline execution of reproducible elements
- Language and tool-agnostic (e.g. run Python and/or R, open with Jupyter or Stencila)

## Specifications

The following specifications define a markup language (XML) for research articles and spreadsheets:

- [Dar Article](DarArticle.md): An XML format, based on JATS, the de facto standard for archiving and interchange of scientific open-access contents with XML
- [Dar Sheet](DarSheet.md): A simple XML format to describe sheets (think MS Excel or Google sheets) but designed for reproducible scientific computations

## Editors

The following editors are developed to edit document archives of research projects:

- [Stencila](https://github.com/stencila/stencila): an office suite for reproducible research
- [Texture](https://github.com/substance/texture): an open source manuscript editor designed for publishers

## Examples

These two examples are continuously updated, to reflect the latest versions of the related specifications.

- [Classic Research Manuscript](examples/classic-manuscript): Editable in Texture
- [Reproducible Research Publication](examples/reproducible-publication): Editable and runnable with Stencila

## Status

This is an early stage proposal (alpha) that will be continuously advanced. We are using existing standards when possible (such as JATS-XML for representing articles) and seek for consensus in the research community to offer the most flexible and concise tagging guidelines.

## License

The JATS Standard is copyrighted by NISO, but all of the non-normative 
information found in this repository is in the CC BY-SA 4.0.

More info at https://creativecommons.org/licenses/by-sa/4.0/

## Credits

Dar is developed by the [Substance Consortium](http://substance.io/consortium/), an open community formed by the Public Knowledge Project (PKP), the Collaborative Knowledge Foundation (CoKo), SciELO, Érudit, eLife and Stencila.
