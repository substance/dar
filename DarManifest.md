# Dar Manifest

A Dar manifest file (manifest.xml) describes the contents of a project.

```xml
<!DOCTYPE sheet PUBLIC "DarManifest 0.1.0" "http://darformat.org/DarManifest-0.1.0.dtd">
<dar>
  <documents>
    <document id="manuscript" name="Reproducible Document Stack" type="article" path="manuscript.xml" />
    <document id="notebook" name="Methods" type="article" path="notebook.xml"/>
    <document id="sheet" name="Sheet 1" type="sheet" path="sheet.xml" />
  </documents>
  <assets>
    <asset id="234o23489237498234798" mime-type="image/png" name="Picture 1" path="234o23489237498234798.png"/>
  </assets>
  <runtime>sci@0.2.0</runtime>
</dar>
```
