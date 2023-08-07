const { hash, compare } = require("bcryptjs");

async function hashPassword(password) {
  const hashedPassword = await hash(password, 14);
  return hashedPassword
}

async function verifyPassword(password, hashedPassword)  {
  const isVerified = await compare(password, hashedPassword)
  return isVerified
}

export { hashPassword, verifyPassword}