const cluster = require('cluster');
const os = require('os');

const CPUS = os.cpus();
if (cluster.isMaster) {
  CPUS.forEach(() => {
    cluster.fork();
  });
  cluster.on('listening', (worker) => {
    console.log('Cluster %d connected', worker.process.pid); //eslint-disable-line
  });
  cluster.on('disconnect', (worker) => {
    console.log('Cluster %d disconnected', worker.process.pid); //eslint-disable-line
  });
  cluster.on('exit', (worker) => {
    console.log('Cluster %d is dead', worker.process.pid); //eslint-disable-line
    // if cluster dies new should start
    cluster.fork();
  });
} else {
  console.log('Worker started with pid:', process.pid); //eslint-disable-line
  require('./index'); //eslint-disable-line
}
