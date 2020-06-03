const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
      { id: 1, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTOpdZj5ZsyMnSr1VwlpmNgE5jPnc4OhxLlEGSVBFWIes5w6yZ0&usqp=CAU', 
          followed: false, fullName: 'Gennadiy', status: 'I am an owner', location: {city: 'Ulyanovsk', country: 'Russia'} },
      { id: 2, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTOpdZj5ZsyMnSr1VwlpmNgE5jPnc4OhxLlEGSVBFWIes5w6yZ0&usqp=CAU', 
          followed: true, fullName: 'Gohn', status: 'I am an alcocholic', location: {city: 'Moscow', country: 'Russia'} },
      { id: 3, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTOpdZj5ZsyMnSr1VwlpmNgE5jPnc4OhxLlEGSVBFWIes5w6yZ0&usqp=CAU', 
          followed: false, fullName: 'Olga', status: 'I am an housewhife', location: {city: 'Ulyanovsk', country: 'Russia'} },
    ]
  };

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: true};
          }
          return u;
        })
      }

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: false};
          }
          return u;
        })
      }
     
      case SET_USERS: {
        return { ...state, users: [ ...state.users, ...action.users]}
      }

    default:
      return state;
  }

}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})

    

export default usersReducer;