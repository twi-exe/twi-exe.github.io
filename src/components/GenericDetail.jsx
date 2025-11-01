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
    // glob all markdown files as raw strings so Vite includes them in the bundle
    const mdFiles = import.meta.glob('../content/**/*.md', { as: 'raw' })

    ;(async ()=>{
      try {
        const mod = await import(`../data/${type}.json`)
        if(!mounted) return
        const list = mod.default || mod
        const found = list.find(i => i.slug === slug)

        const mdPath = `../content/${type}/${slug}.md`
        if(mdFiles[mdPath]){
          try{
            const content = await mdFiles[mdPath]()
            if(!mounted) return
            if(found){
              setItem({...found, content: content || found.content})
              return
            }
            setItem({ title: (slug || '').replace(/-/g,' '), content })
            return
          }catch(e){
            console.warn('Failed to load markdown via glob', e)
          }
        }

        setItem(found || null)
      } catch(err){
        console.error('Failed to load data', err)
        if(mounted) setItem(null)
      }
    })()
    return ()=>{ mounted = false }
  },[slug,type])

  if(item === undefined) return (
    <div className="container mx-auto px-4 py-12 text-center">Loading…</div>
  )

  if(item === null) {
    const title = type === 'research' ? 'Research Not Found'
      : type === 'projects' ? 'Project Not Found'
      : type === 'blog' ? 'Blog Post Not Found'
      : 'Not found'

    const message = type === 'research' ? "The research work you're looking for doesn't exist."
      : type === 'projects' ? "The project you're looking for doesn't exist."
      : type === 'blog' ? "The blog post you're looking for doesn't exist."
      : `No ${type.slice(0,-1)} found for “${slug}”.`

    const backLabel = type === 'research' ? 'Back to Research'
      : type === 'projects' ? 'Back to Projects'
      : type === 'blog' ? 'Back to Blog'
      : '← Back'

    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-heading text-rebecca mb-4">{title}</h1>
        <p className="text-gray-300 mb-6">{message}</p>
        <Link to={`/${type}`} className="px-6 py-3 bg-rebecca text-white rounded hover:bg-dim-lilac">{backLabel}</Link>
      </div>
    )
  }

  return (
    <article className="container mx-auto px-4 py-12 max-w-4xl">
      <Link to={`/${type}`} className="text-dim-lilac">← Back</Link>
      <div className="card glass mt-4">
        <h1 className="text-4xl font-bold text-rebecca">{item.title}</h1>
        {item.authors && <div className="text-gray-300 mt-2">{item.authors} · {item.year}</div>}

        <div className="mt-6 prose prose-invert">
          {item.content ? <ReactMarkdown>{item.content}</ReactMarkdown> : <p>{item.description}</p>}
        </div>

        <div className="mt-6 flex gap-3">
          {item.link && <a href={item.link} className="btn-primary" target="_blank" rel="noopener noreferrer">View Project</a>}
          {item.github && <a href={item.github} className="btn-secondary" target="_blank" rel="noopener noreferrer">GitHub</a>}
          <Link to={`/${type}`} className="btn-secondary">More {type.charAt(0).toUpperCase() + type.slice(1)}</Link>
        </div>
      </div>
    </article>
  )
}
