import axios from 'axios';

export default async function getBlogs() {
  try {
    const apiEndpoint = 'https://632878c99a053ff9aab8d2a5.mockapi.io/api/vi/customer';
    const response = await axios.get(apiEndpoint);
    const users = response.data;

    return users;
  } catch (error) {
    throw new Error('Error fetching blogs');
  }
}
