function SearchBar({ value, onChange }) {
  return (
    <label className="search-field">
      <span className="search-icon">⌕</span>
      <input value={value} onChange={(event) => onChange(event.target.value)} placeholder="Buscar herramienta..." type="search" />
      <kbd>/</kbd>
    </label>
  )
}

export default SearchBar
