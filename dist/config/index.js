const { env: { NODE_ENV, NODE_ENV_PORT } } = process;

// eslint-disable-next-line
console.log(`
NODE_ENV: ${NODE_ENV}
PORTAL_PORT: ${NODE_ENV_PORT}
`);

module.exports = {
  nodeEnv: NODE_ENV,
  portalPort: NODE_ENV_PORT,
};
