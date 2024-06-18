import * as React from 'react';
import { Helmet } from 'react-helmet'
import { SelectInput, useField } from 'payload/components/forms'

export const IconSelectComponent: React.FC<{ path: string }>
  = ({ path }) => {
  const { value, setValue } = useField<string>({ path })
  const [options, setOptions] = React.useState([])

  React.useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/google/material-design-icons/master/font/MaterialIcons-Regular.codepoints')
        const data = await response.text()

        const iconOptions = data.split('\n').map(line => {
          const [label] = line.split(' ')
          let formattedLabel = (label.charAt(0).toUpperCase() + label.slice(1)).replace(/_/g, ' ')
          let value = label
          return { label: formattedLabel, value }
        }).filter(Boolean)
        
        setOptions(iconOptions.sort((a, b) => a.label.localeCompare(b.label)))
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchOptions()
  }, [])

  return (
    <div className="icon-select-field">
      <Helmet>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      </Helmet>

      <div className="icon-select-field-preview-container">
        <div className="icon-select-field-preview">
          {value && (
            <span className="icon-select-field-preview-icon material-symbols-outlined">{value}</span>
          )}
        </div>
      </div>

      <div className="icon-select-field-select-container">
        <label className="field-label">
          Icon
        </label>
        <SelectInput
          className="icon-select"
          path={path}
          name={path}
          options={options}
          value={value}
          onChange={(e) => setValue(e.value)}
        />
        <div className='field-description flex flex-col'>
          Select an icon from the Material Design Icons library
          <a href="https://fonts.google.com/icons" target="_blank" rel="noopener noreferrer">View all icons</a>
        </div>
      </div>
    </div>
  )
}

