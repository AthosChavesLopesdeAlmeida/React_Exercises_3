import { items } from './data'
import ListItem from './ListItem'
import React, { useCallback, useMemo, useState } from 'react'

const FilteredItems = () => {
  const [selectedId, setSelectedId] = useState(null)
  const [search, setSearch] = useState('')

  const filteredItems = useMemo(() => {
    return items.filter(item => 
      item.name.toLowerCase().includes(search.toLowerCase())
    )
  }, [search])

  const handleSelect = useCallback((id) => {
    setSelectedId(id)
  }, [])

  return (
    <main>
      <header className='header_container'>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search...'/>
        <h3>Showing {filteredItems.length} items</h3>
      </header>
      <section className='items_container'>
        {filteredItems.map((item) => {
          return (
            <ListItem key={item.id} onSelect={handleSelect} isSelected={selectedId === item.id} item={item}/>
          )
        })}
      </section>
    </main>
  )
}

export default FilteredItems