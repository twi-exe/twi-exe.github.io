import React from 'react'
import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

// GenericDetail renders projects, research or blog items by slug.
// Usage: <GenericDetail type="projects" />
export default function GenericDetail({ type }){
  const { slug } = useParams()
  const [item, setItem] = React.useState(undefined)

  React.useEffect(()=>{
    let mounted = true
    import(`../data/${type}.json`).then(mod => {
      if(!mounted) return
      const list = mod.default || mod
      const found = list.find(i => i.slug === slug)
      setItem(found || null)
    }).catch(err => {
      console.error('Failed to load data', err)
      if(mounted) setItem(null)
    })
    return ()=>{ mounted = false }
  },[slug,type])

  if(item === undefined) return (
    <div className="container mx-auto px-4 py-12 text-center">Loading…</div>
  )

  if(item === null) return (
    <div className="container mx-auto px-4 py-12 text-center">
      <h2 className="text-2xl font-heading text-rebecca">Not found</h2>
      <p className="text-gray-300 mt-2">No {type.slice(0,-1)} found for “{slug}”.</p>
      <Link to={`/${type}`} className="mt-4 inline-block text-dim-lilac">← Back</Link>
    </div>
  )

  return (
    <article className="container mx-auto px-4 py-12 max-w-4xl">
      <Link to={`/${type}`} className="text-dim-lilac">← Back</Link>
      <h1 className="text-4xl font-heading text-rebecca mt-4">{item.title}</h1>
      {item.authors && <div className="text-gray-300 mt-2">{item.authors} · {item.year}</div>}

      <div className="mt-6 prose prose-invert">
        {item.content ? <ReactMarkdown>{item.content}</ReactMarkdown> : <p>{item.description}</p>}
      </div>

      <div className="mt-6 flex gap-3">
        {item.github && <a href={item.github} className="bg-rebecca px-4 py-2 rounded text-white" target="_blank" rel="noopener noreferrer">GitHub</a>}
        {item.link && <a href={item.link} className="border px-4 py-2 rounded text-gray-200" target="_blank" rel="noopener noreferrer">External</a>}
      </div>
    </article>
  )
}
