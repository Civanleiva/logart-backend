import jwt from "jsonwebtoken";

export const generateToken = (user) => {
  return jwt.sign(
    {
      __id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "30d",
    }
  );
};

export const isAuth = (req, res, next) => {
  const auth = req.headers.authorization;

  if (auth) {
    const token = auth.slice(7, auth.length);
    jwt.verify(token, process.env.JWT_SECRET || 'secret', (err, decode) => {
      if (err) {
        res.status(401).send({message: 'Token inválido'});
      } else {
        req.user = decode;
        next();
      }
    });
  } else {
    res.status(401).send({message: 'Token inexistente'});
  }
}