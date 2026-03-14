import './table.css'
import { rows } from './data'
import { useMemo } from 'react'
import TableRow from './TableRow'
import { useCallback, useState } from 'react'

const DataTable = () => {
  const [filters, setFilters] = useState({
    name: '',
    country: '',
    status: ''
  })
  const [sortConfig, setSortConfig] = useState({
    column: null,
    direction: 'asc'
  })
  const [selectedId, setSelectedId] = useState(null)

  const filteredRows = useMemo(() => {
    let result = rows.filter(row => 
      row.name.toLowerCase().includes(filters.name.toLowerCase()) &&
      row.country.toLowerCase().includes(filters.country.toLowerCase()) &&
      row.status.toLowerCase().includes(filters.status.toLowerCase()) 
    )

    if (sortConfig.column) {
      result = [...result].sort((a, b) => {
        if (a[sortConfig.column] < b[sortConfig.column]) {
          return sortConfig.direction === 'asc' ? -1 : 1
        }
        if (a[sortConfig.column] > b[sortConfig.column]) {
          return sortConfig.direction === 'asc' ? 1 : -1
        }
        return 0
      })
    }

    return result
  }, [filters, sortConfig])

  const handleSelect = useCallback((id) => {
    setSelectedId(id)
  }, [])

  const handleFilterChange = useCallback((field, value) => {
    setFilters(prev => ({...prev, [field]: value}))
  }, [])

  const handleSort = useCallback((column) => {
    setSortConfig(prev => {
      if (prev.column === column) {
        return {column, direction: prev.direction === 'asc' ? 'desc' : 'asc'}
      }
      return {column, direction: 'asc'}
    })
  }, [])

  return (
    <div className="table_wrapper">
      <table className="data_table">
        <thead>
          <tr>
            <th onClick={() => handleSort('id')}>
              ID {sortConfig.column === 'id' ? (sortConfig.direction === 'asc' ? '▲' : '▼') : ''}
            </th>
            <th onClick={() => handleSort('name')}>
              Name {sortConfig.column === 'name' ? (sortConfig.direction === 'asc' ? '▲' : '▼') : ''}
            </th>
            <th onClick={() => handleSort('age')}>
              Age {sortConfig.column === 'age' ? (sortConfig.direction === 'asc' ? '▲' : '▼') : ''}
            </th>
            <th onClick={() => handleSort('country')}>
              Country {sortConfig.column === 'country' ? (sortConfig.direction === 'asc' ? '▲' : '▼') : ''}
            </th>
            <th onClick={() => handleSort('status')}>
              Status {sortConfig.column === 'status' ? (sortConfig.direction === 'asc' ? '▲' : '▼') : ''}
            </th>
            <th>Action</th>
          </tr>
          <tr>
            <th></th>
            <th><input type="text" value={filters.name} placeholder="Filter..." onChange={(e) => handleFilterChange('name', e.target.value)}/></th>
            <th></th>
            <th><input type="text" value={filters.country} placeholder="Filter..." onChange={(e) => handleFilterChange('country', e.target.value)}/></th>
            <th><input type="text" value={filters.status} placeholder="Filter..." onChange={(e) => handleFilterChange('status', e.target.value)}/></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredRows.map((row) => (
            <TableRow key={row.id} row={row} onSelect={handleSelect} isSelected={selectedId === row.id}/>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DataTable