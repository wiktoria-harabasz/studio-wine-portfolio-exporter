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

export function ExportTool() {
  const [loadingType, setLoadingType] = useState<string | null>(null)

  return (
    <div style={{padding: 40}}>
      <h2 style={{marginBottom: 20}}>Export Wine Portfolio</h2>
      <div style={{display: 'flex', gap: 16}}>
        <button disabled={loadingType !== null} onClick={() => downloadExport('private', setLoadingType)}>
          {loadingType === 'private' ? 'Generating…' : 'Export Private Client Portfolio'}
        </button>
        <button disabled={loadingType !== null} onClick={() => downloadExport('horeca', setLoadingType)}>
          {loadingType === 'horeca' ? 'Generating…' : 'Export HoReCa Portfolio'}
        </button>
      </div>
    </div>
  )
}