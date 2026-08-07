const http = require('http');
const PORT = process.env.PORT || 3000;
const CONFIG = {
  serviceName: process.env.SERVICE_NAME || 'cloud-dashboard',
  region: process.env.REGION || 'us-east-1',
  version: process.env.VERSION || '1.0.0'
};

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  if (req.url === '/info') {
    res.end(JSON.stringify({ ...CONFIG, pid: process.pid, node: process.version }));
    return;
  }
  res.end(JSON.stringify({ status: 'healthy', timestamp: new Date().toISOString(), service: CONFIG.serviceName }));
});

server.listen(PORT, () => {
  console.log(`${CONFIG.serviceName} (v${CONFIG.version}) listening on port ${PORT} in ${CONFIG.region}`);
});
