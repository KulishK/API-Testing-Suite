const axios = require("axios");

/**
 * Makes a GET request using Axios.
 * @param {string} url - The API endpoint.
 * @param {object} [headers={}] - Optional headers.
 * @returns {Promise<object>} - The response data.
 */
async function getRequest(url, headers = {}) {
  try {
    const response = await axios.get(url, { headers });
    return response.data;
  } catch (error) {
    throw new Error(`GET request failed: ${error.message}`);
  }
}

/**
 * Makes a POST request using Axios.
 * @param {string} url - The API endpoint.
 * @param {object} data - The request payload.
 * @param {object} [headers={}] - Optional headers.
 * @returns {Promise<object>} - The response data.
 */
async function postRequest(url, data, headers = {}) {
  try {
    const response = await axios.post(url, data, { headers });
    return response.data;
  } catch (error) {
    throw new Error(`POST request failed: ${error.message}`);
  }
}

module.exports = {
  getRequest,
  postRequest
};
