import {login, logout} from '../../actions/auth';

test ('should login',() => {
    const action = {
        type: 'LOGIN',
        uid: 'A123'
      }    
    const state = login(action.uid);
    expect(state).toEqual(action);
});

test('should generate logout action object', () => {
    const action = logout();
    expect(action).toEqual({
      type: 'LOGOUT'
    });
  });