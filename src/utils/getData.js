import { API_PROFILE } from "./api_profile.js";
export let newsData;

export default async function getData() {
  const searchValue = "ukraine";
  try {
    const response = await fetch(
      `${API_PROFILE.apiUrl}${API_PROFILE.newsPath}?q=${searchValue}&${API_PROFILE.apiKey}`
    );
    const data = await response.json();
    newsData = data;
    return newsData;
  } catch (error) {
    console.error(error);
  }
}
getData();
