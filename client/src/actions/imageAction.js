import {
  IMAGE_UPLOAD_REQUEST,
  IMAGE_UPLOAD_SUCCESS,
  IMAGE_UPLOAD_FAIL,
} from "../constants/imageConstant";

export const uploadImage = (image) => async (dispatch) => {
  const data = new FormData();
  data.append("file", image);
  data.append("upload_preset", "myCloud");
  data.append("cloud_name", "doz9uitd2");

  try {
    dispatch({ type: IMAGE_UPLOAD_REQUEST });

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/doz9uitd2/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const cloudData = await res.json();
    console.log("cloud images url = ", cloudData);
    dispatch({ type: IMAGE_UPLOAD_SUCCESS, payload: cloudData.url });

    return cloudData.url;
  } catch (error) {
    dispatch({ type: IMAGE_UPLOAD_FAIL, payload: error.message });
    console.error("Internal Server error:", error.message);
  }
};
