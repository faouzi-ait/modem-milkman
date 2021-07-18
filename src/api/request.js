import axios from 'axios';

export const endpoint =
  'https://developertests.z33.web.core.windows.net/ReactTestData.json';

export async function getProducts() {
  try {
    return await axios.get(endpoint);
  } catch (error) {
    return { error };
  }
}
