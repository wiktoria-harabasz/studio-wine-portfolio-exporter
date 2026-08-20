import {useState} from 'react'

const EXPORT_SERVER_URL = 'http://localhost:3001'

async function downloadExport(priceType: string, setLoadingType: (v: string | null) => void) {
  setLoadingType(priceType)
  try {
    const res = await fetch(`${EXPORT_SERVER_URL}/export/full/${priceType}`)
    if (!res.ok) throw new Error('Export failed')
    const blob = await res.blob()
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `wine-portfolio-${priceType}.pdf`
    a.click()
    window.URL.revokeObjectURL(url)
  } catch (err) {
    alert('Export failed. Please try again.')
    console.error(err)
  } finally {
    setLoadingType(null)
  }
}

const buttonStyle = {
    padding: '6px 12px',
    backgroundColor: '#140a0a',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontWeight: 700,
    cursor: 'pointer',
    textTransform: 'uppercase',
    fontSize: '14px'
  }

  const buttonDisabledStyle = {
    ...buttonStyle,
    opacity: 0.5,
    cursor: 'not-allowed',
  }

export function ExportTool() {
  const [loadingType, setLoadingType] = useState<string | null>(null)

  

  return (
    <div style={{padding: 40}}>
      <h2 style={{marginBottom: 40, color: '#140a0a', fontSize: '32px', fontWeight: 600, letterSpacing: '-0.5px' }}>Export Wine Portfolio</h2>
      <div style={{display: 'flex', gap: 16}}>
        <button
          style={loadingType !== null ? buttonDisabledStyle : buttonStyle}
          disabled={loadingType !== null}
          onClick={() => downloadExport('private', setLoadingType)}
        >
          {loadingType === 'private' ? 'Generating…' : 'Export Private Client Portfolio'}
        </button>
        <button
          style={loadingType !== null ? buttonDisabledStyle : buttonStyle}
          disabled={loadingType !== null}
          onClick={() => downloadExport('horeca', setLoadingType)}
        >
          {loadingType === 'horeca' ? 'Generating…' : 'Export HoReCa Portfolio'}
        </button>
      </div>
    </div>
  )
}