import axios from "axios";

// const BASE_URL = "http://localhost:5000/chintu/media";
const BASE_URL = "https://chintu-verse-bff.onrender.com/chintu/media";

export const uploadMedia = async (formData) => {
  try {
    const res = await axios.post(`${BASE_URL}/upload`, formData);
    return res.data;
  } catch (err) {
    console.error("Upload failed:", err);
    return null;
  }
};

export const fetchMedia = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/getmedia`);
    console.log("Fetched media:", res.data); // ✅ Check if it's an array
    return res.data;
  } catch (err) {
    console.error("Fetch failed:", err);
    return [];
  }
};
