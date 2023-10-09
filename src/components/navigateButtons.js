const NavigateButtons = ({next, prev}) => {
  return (
    <div className='navigate-buttons'>
      <button onClick={prev}>назад</button>
      <button onClick={next}>вперед</button>
    </div>
  )
}

export default NavigateButtons;