import {useState} from 'react'

const EXPORT_SERVER_URL = 'http://localhost:3001'

async function downloadExport(type: string, setLoadingType: (v: string | null) => void) {
    setLoadingType(type)
    try {
      const url = type === 'winedb' ? '/export/winedb' : `/export/full/${type}`
      const filename = type === 'winedb' ? 'wine-database.pdf' : `wine-portfolio-${type}.pdf`
  
      const res = await fetch(`${EXPORT_SERVER_URL}${url}`)
      if (!res.ok) throw new Error('Export failed')
      const blob = await res.blob()
      const blobUrl = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = blobUrl
      a.download = filename
      a.click()
      window.URL.revokeObjectURL(blobUrl)
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

  const exportButtonStyle = {
    padding: '6px 12px',
    border: '1px solid #140a0a',
    color: '#140a0a',
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
        <button
            style={loadingType !== null ? buttonDisabledStyle : exportButtonStyle}
            disabled={loadingType !== null}
            onClick={() => downloadExport('winedb', setLoadingType)}
            >
            {loadingType === 'winedb' ? 'Generating…' : 'Export Wine Database'}
        </button>
      </div>
    </div>
  )     
}

