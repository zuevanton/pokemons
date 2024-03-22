import { useDispatch, useSelector } from "react-redux"

const changePage = page => ({
  type: 'CHANGE_PAGE',
  page,
})
const NavigateButtons = () => {
  const {page} = useSelector(state => state.pagination)
  const dispatch = useDispatch()

  const loadPrevPokemons = () => {
    dispatch(changePage(page - 1))
  }

  const loadNextPokemons = () => {
    dispatch(changePage(page + 1))
  }

  return (
    <div className='navigate-buttons'>
      <button onClick={loadPrevPokemons}>назад</button>
      <button onClick={loadNextPokemons}>вперед</button>
    </div>
  )
}

export default NavigateButtons;