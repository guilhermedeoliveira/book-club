// RETEST WHEN BREAK DOWN ACTIONS/INDEX.JS IN SEPARETE FILES

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../actions';
import * as types from '../../actions/types';
import nock from 'nock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('auth action', () => {
	afterEach(() => {
		nock.cleanAll();
	});

	it('checks if there is a authenticated user', () => {
		nock('http://localhost:5000')
			.get('/api/current_user')
			.reply(200, { body: {} });

		const expectedActions = [{ type: types.FETCH_USER, payload: '' }];
		const store = mockStore({ auth: {} });

		return store.dispatch(actions.fetchUser()).then(() => {
			// return of async actions
			expect(store.getActions()).toEqual(expectedActions);
		});
	});
});
