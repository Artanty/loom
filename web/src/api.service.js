const API_URL = process.env.REACT_APP_BACKEND_URL;

export const fetchData = async () => {
  try {
    const response = await fetch(`${API_URL}/api/data`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
};