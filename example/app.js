const { Configurator, ProseEditorPackage, EditorSession } = window.substance

const ProseLoader = {
  load(html) {
    let configurator = new Configurator()
    configurator.import(ProseEditorPackage)
    let importer = configurator.createImporter('html')
    let doc = importer.importDocument(html)
    let editorSession = new EditorSession(doc, { configurator })
    return editorSession
  }
}

window.onload = () => {
  const vfs = window.vfs
  const { VfsLoader } = window.rdc
  const loaders = { 'prose': ProseLoader }
  let loader = new VfsLoader(vfs, loaders)
  loader.load('data/hello-world')
    .then((dc) => {
      debugger
    })
}