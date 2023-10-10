const sizeOptions = [3, 6, 12, 24];

const PageSizeSelect = ({pageSize, onChange}) => {
  return (
    <select name="pageSize" value={pageSize} onChange={e => onChange(e.target.value)}>
      {sizeOptions.map(item => <option key={item} value={item}>{item}</option>)}
    </select>
  )
}

export default PageSizeSelect;