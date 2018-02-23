# Dar Sheet

A simple and open XML format for modelling spreadsheets used in reproducible research projects.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE sheet PUBLIC "DarSheet 0.1.0" "http://darformat.org/DarSheet-0.1.0.dtd">
<sheet>
  <meta>
    <columns>
      <col name="temp" type="number"/>
      <col name="sales" type="number"/>
      <col name="sunny" type="string"/>
      <!-- many empty cols to fill the sheet -->
    </columns>
  </meta>
  <data>
    <row>
      <cell src="18"></cell>
      <cell src="50"></cell>
      <cell src="no"></cell>
    </row>
    <row>
      <cell src="20"></cell>
      <cell src="126"></cell>
      <cell src="yes"></cell>
    </row>
    <row>
      <cell src="=sum(A1:A2)"><![CDATA[{"type":"integer","data": 38}]]></cell>
      <cell src="=sum(B1:B2)"><![CDATA[{"type":"integer","data": 176}]]></cell>
      <cell src="=sum(A3:B3)" type="number"><![CDATA[{"type":"integer","data": 214}]]></cell>
    </row>
    <!-- many empty rows to fill the sheet -->
  </data>
</sheet>
```

A complete specification is coming soon.
