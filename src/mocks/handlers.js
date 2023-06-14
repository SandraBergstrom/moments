import { rest } from "msw";

const baseURL = "https://drf-api-ci-sb.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 3,
        username: "Sandra",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 3,
        profile_image:
          "https://res.cloudinary.com/sandrabergstrom/image/upload/v1/media/images/pexels-kelly-16241898_xbrblo",
      })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req,res,ctx) => {
    return res(ctx.status(200))
  })
];
