import * as postService from "../services/post";

export const getPosts = async (req, res) => {
  try {
    const response = await postService.getPostsService();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Fail at post controller" + error,
    });
  }
};

export const getPostsLimit = async (req, res) => {
  const { page, ...query } = req.query;

  // const { offset } = req.query;
  try {
    const response = await postService.getPostsLimitService(page, query);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at post controller: " + error,
    });
  }
};

// export const apiGetPostsLimit = (query) =>
//   new Promise(async (resolve, reject) => {
//     try {
//       const response = await axiosConfig({
//         method: "get",
//         url: `/api/v1/post/limit`,
//         params: query,
//       });
//       resolve(response);
//     } catch (error) {
//       reject(error);
//     }
//   });
