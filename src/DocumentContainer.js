export default class DocumentContainer {

  constructor(sessions) {
    this.sessions = sessions
    if (!sessions.manifest) throw new Error("'manifest' session is required.")
  }

  getManifest() {
    return this.sessions.manifest.getDocument()
  }

  getDocumentIds() {
    const manifest = getManifest()
    let docs = manifest.findAll('document')
    return docs.map(d => d.id).filter(Boolean)
  }

  getSessionForId(docId) {
    return this.sessions[docId]
  }

}