import {useState} from 'react'

const EXPORT_SERVER_URL = 'http://localhost:3001' // swap to your deployed URL later

async function downloadExport(priceType: string, setLoading: (v: boolean) => void) {
  setLoading(true)
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
    setLoading(false)
  }
}

export function ExportTool() {
  const [loading, setLoading] = useState(false)

  return (
    <div style={{padding: 40}}>
      <h2 style={{marginBottom: 20}}>Export Wine Portfolio</h2>
      <div style={{display: 'flex', gap: 16}}>
        <button disabled={loading} onClick={() => downloadExport('private', setLoading)}>
          {loading ? 'Generating…' : 'Export Private Client Portfolio'}
        </button>
        <button disabled={loading} onClick={() => downloadExport('horeca', setLoading)}>
          {loading ? 'Generating…' : 'Export HoReCa Portfolio'}
        </button>
      </div>
    </div>
  )
}