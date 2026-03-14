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
      <header>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search...'/>
        <p>Showing {filteredItems.length} items</p>
      </header>
      <section>
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