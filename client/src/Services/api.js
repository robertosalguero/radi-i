const BASE_URL = 'http://localhost:3000/api';

export function fetchPlacements() {
    return fetch(BASE_URL + '/placements')
        .then(res => res.json())
        .catch(err => {
            console.log(err);
        });
}

export function fetchUser(id) {
    return fetch(BASE_URL + '/users/' + id)
        .then(res => res.json())
        .catch(err => {
            console.log(err);
        });
}


export function registerUser(data) {
    const opts = {
        method: 'POST',
        body: JSON.stringify(data),
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    };

    return fetch(`${BASE_URL}/users`, opts)
        .then(resp => {
            if (!resp.ok) {
                throw new Error(resp.statusText)
            }
            return resp.json();
        });

}

export function userLogin(user) {
    const opts = {
        method: 'POST',
        body: JSON.stringify(user),
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    };

    return fetch(`${BASE_URL}/user_token`, opts)
        .then(resp => {
            if (!resp.ok) {
                throw new Error(resp.statusText)
            }
            return resp.json();
        });

}

export function editUser(data) {
    const opts = {
      method: 'PUT',
      body: JSON.stringify(data),
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    };
  
    return fetch(`${BASE_URL}/users/${data.auth.id}`, opts)
        .then(resp => resp.json());
  }

export function deleteAccount(id) {
    const opts = {
        method: 'DELETE',
    }
    return fetch(`${BASE_URL}/users/${id}`, opts)
        .catch(err => {
            throw Error(err);
        });
}