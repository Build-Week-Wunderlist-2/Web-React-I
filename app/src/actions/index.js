import { axiosWithAuth } from '../utils';

// Actions
export const ACTION_SUCCESS = 'ACTION_SUCCESS';
export const ACTION_FAILURE = 'ACTION_FAILURE';
export const TOGGLE_EDITING = 'TOGGLE_EDITING';
export const CLEAR_ERROR = 'CLEAR_ERROR';


// LOGGERS
export const DELETE_TODO = 'DELETE_TODO';
export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';

export const toggleRedirect = () => {
  return { type: ACTION_SUCCESS }
}
export const deleteToDoLists = ( listID ) => {
    return dispatch => {
      axiosWithAuth()
        .delete(`/users/${localStorage.getItem('id')}/lists/${listID}`)
        .then(res => {
          // console.log(res, 'server response from delete')
          dispatch({ type: ACTION_SUCCESS });
        })
        .catch(err => {
          console.log(err);
          dispatch({ type: ACTION_FAILURE, payload: err.data });
      });
  };
};


export const deleteToDo = ( listID, toDoID )  => {
  return dispatch => {
    dispatch({ type: DELETE_TODO});
    axiosWithAuth()
      .delete(`/users/${localStorage.getItem('id')}/lists/${listID}/todos/${toDoID}`)
      .then(res => {
        // console.log(res)
        dispatch({ type: ACTION_SUCCESS });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: ACTION_FAILURE, payload: err.data });
    });
};
};


export const addToDoList = ( body ) => {
  return dispatch => {
    axiosWithAuth()
      .post(`/users/${localStorage.getItem('id')}/lists`, body)
      .then(res => {
        // console.log(res);
        dispatch({ type: ACTION_SUCCESS });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: ACTION_FAILURE, payload: err.data });
    });
  };
};


export const addToDo = ( body, listID ) => {
  return dispatch => {
    dispatch({ type: ADD_TODO });
    axiosWithAuth()
      .post(`/users/${localStorage.getItem('id')}/lists/${listID}/todos`, body)
      .then(res => {
        // console.log(res);
        dispatch({ type: ACTION_SUCCESS });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: ACTION_FAILURE, payload: err.data });
    });
  };
};


export const editToDoList = ( body, id ) => {
  return dispatch => {
    console.log(body)
    axiosWithAuth()
      .put(`/users/${localStorage.getItem('id')}/lists/${id}`, body)
      .then(res => {
        // console.log(res);
        dispatch({ type: ACTION_SUCCESS});
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: ACTION_FAILURE, payload: err.data });
    });
  };
};


export const toggleEditing = () => {
  return { type: TOGGLE_EDITING }
};