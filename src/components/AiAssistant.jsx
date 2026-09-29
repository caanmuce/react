import { useState } from 'react'

function AiAssistant() {
  const [error, setError] = useState('')
  const [suggestion, setSuggestion] = useState('')

  const generateSuggestion = () => {
    if (!error.trim()) return
    setSuggestion('Revisa la línea donde se usa esa variable y confirma que esté definida antes de ejecutar la función. Si llega desde una API, valida también la respuesta antes de acceder a sus propiedades.')
  }

  return (
    <aside className="assistant-panel" id="assistant">
      <div className="assistant-heading"><span className="spark">✦</span><span className="section-kicker">02 / QUICK FIX</span><span className="beta">BETA</span></div>
      <h2>Desbloquea tu código.</h2>
      <p className="assistant-intro">Pega un error y recibe una pista para volver a avanzar.</p>
      <label className="error-label" htmlFor="code-error">¿Qué está fallando?</label>
      <textarea id="code-error" value={error} onChange={(event) => setError(event.target.value)} placeholder="Ej. TypeError: Cannot read properties..." />
      <button className="ai-button" type="button" onClick={generateSuggestion} disabled={!error.trim()}><span>Generar sugerencia</span><span>✦</span></button>
      {suggestion && <div className="suggestion"><span className="suggestion-icon">✦</span><div><strong>Pista de Koronet AI</strong><p>{suggestion}</p></div></div>}
      <p className="privacy-note">Tu código no se guarda ni se comparte.</p>
    </aside>
  )
}

export default AiAssistant
