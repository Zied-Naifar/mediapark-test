import unsplash from "../../utils/unsplash";

export const fetchImages = async (payload): Promise<any> => {
  const result = await unsplash.search
    .photos(payload)
    .then((res) => res.json());

  return result;
};

export const likeOrDislike = async (payload): Promise<any> => {
  const { id, type } = payload;
  let result;
  if (type === "like") {
    result = await unsplash.photos.likePhoto(id).then((res) => res.json());
  } else {
    result = await unsplash.photos.unlikePhoto(id).then((res) => res.json());
  }

  return result;
};
