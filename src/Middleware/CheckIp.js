// middleware/checkIp.js
const ipAutorizado = "192.168.1.112"; 

const checkIp = (req, res, next) => {
  let clientIp = req.ip || req.connection.remoteAddress;

  if (clientIp.startsWith("::ffff:")) {
    clientIp = clientIp.replace("::ffff:", "");
  }

  if (clientIp === "::1") {
    clientIp = "192.168.1.112";
  }

  if (clientIp === ipAutorizado) {
    next(); 
  } else {
    res.status(403).json({ message: "Acesso negado: IP não autorizado" });
  }
};

export default checkIp;
