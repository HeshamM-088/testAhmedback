const check_role = async (req, res, next) => {
  const token =
    req.headers["authorization"].split(" ")[1] ||
    req.headers["Authorization"].split(" ")[1];
 // const role = token;
  if (token) {
    return next();
  }
  return res.status(401).json({
    statues: 401,
    data: {
      data: null,
      message: "You are not authorized to perform this action",
    },
  });
};

module.exports = { check_role };

//.....
