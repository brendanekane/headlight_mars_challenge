import fetch from 'node-fetch';

// API calls

export const getBotsUtil = () => {
  return fetch('http://headlight-tournament-5.herokuapp.com/bots')
    .then(response => response.json());
};

export const getNodesUtil = () => {
  return fetch('http://headlight-tournament-5.herokuapp.com/nodes')
    .then(response => response.json());
};
