import { axiosWithAuth } from '../utils';
import { useHistory } from 'react-router-dom';

export const FETCH_TODO = 'FETCH_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const ACTION_SUCCESS = 'ACTION_SUCCESS';
export const ACTION_FAILURE = 'ACTION_FAILURE';

export const INPUT_CHANGE = 'INPUT_CHANGE';
export const TOGGLE_EDITING = 'TOGGLE_EDITING';
export const TOGGLE_ADDING = 'TOGGLE_ADDING';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';

export const ADD_USER = 'ADD_USER';
export const LOGIN_USER = 'LOGIN_USER';

export const addUser = ( credentials ) => {
  
  return dispatch => {

    console.log(credentials, 'Action from Credentials');
    dispatch({ type: ADD_USER});
    axiosWithAuth()
      .post('/register', credentials)
      .then(res => {
        console.log(res);
        dispatch({ type: ACTION_SUCCESS, payload: res.data});
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: ACTION_FAILURE, payload: err.data });
    });
  };
};

export const loginUser = ( credentials ) => {
  return dispatch => {

    console.log(credentials, 'Action from Credentials');
    dispatch({ type: LOGIN_USER});
    axiosWithAuth()
      .post('/login', credentials)
      .then(res => {
        console.log(res);
        localStorage.setItem('token', res.data.token);
        dispatch({ type: ACTION_SUCCESS });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: ACTION_FAILURE });
    });
  };
};



export const fetchToDo = () => {
    // I'm going to show one of you how to do this, you'll need a GET request for MVP.
};

export const deleteToDo = () => {
    return dispatch => {
      dispatch({ type: DELETE_TODO});
      axiosWithAuth()
        .delete('/users/1/lists/')
        .then(res => {
          // dispatch({ type: ACTION_SUCCESS, payload: res.data});
        })
        .catch(err => {
          console.log(err);
          // dispatch({ type: ACTION_FAILURE, payload: err.data });
      });
  };
};

export const addToDo = () => {
  return dispatch => {
    dispatch({ type: ADD_TODO});
    axiosWithAuth()
      .post('/users/1/lists/3/todos')
      .then(res => {
        console.log(res);
        // dispatch({ type: ACTION_SUCCESS, payload: res.data});
      })
      .catch(err => {
        console.log(err);
        // dispatch({ type: ACTION_FAILURE, payload: err.data });
    });
  };
};

export const editToDo = () => {
  return dispatch => {
    dispatch({ type: EDIT_TODO});
    axiosWithAuth()
      .put('/users/1/lists/1/todos/1')
      .then(res => {
        console.log(res);
        // dispatch({ type: ACTION_SUCCESS, payload: res.data});
      })
      .catch(err => {
        console.log(err);
        // dispatch({ type: ACTION_FAILURE, payload: err.data });
    });
  };
};

export const inputChange = () => {
  return { type: INPUT_CHANGE}
};

export const toggleAdding = () => {
  return { type: TOGGLE_ADDING }
};

export const toggleEditing = () => {
  return { type: TOGGLE_EDITING }
};

export const toggleCompleted = () => {
  return { type: TOGGLE_COMPLETED }
};