export const paginationReducer = (state = {page: 1, pageSize: 3}, action) => {
  switch(action.type) {
    case 'CHANGE_PAGE':
      return {...state, page: action.page}
    case 'CHANGE_PAGESIZE':
      return {...state, pageSize: action.pageSize}
    default:
      return state
  }
}