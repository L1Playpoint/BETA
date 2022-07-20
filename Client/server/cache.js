/**
 * Clusters of Node.js processes can be used to run multiple instances of Node.js
 * that can distribute workloads among their application threads. When process
 * isolation is not needed, use the worker_threads module instead, which allows
 * running multiple application threads within a single Node.js instance.
 *
 * The cluster module allows easy creation of child processes that all share server ports.
 * @documentation https://nodejs.org/api/cluster.html#cluster
 */
 const cluster = require("node:cluster");
 const http = require("node:http");
 const numCPUs = require("node:os").cpus().length;
 const process = require("node:process");
 
 /**
  * @dev Dotenv is a zero-dependency module that loads environment variables from a .env
  * file into process.env. Storing configuration in the environment separate from code is
  * based on The Twelve-Factor App methodology.
  */
 const dotenv = require("dotenv");
 dotenv.config();
 
 const PORT = process.env.PORT || 5000;
 
 if (cluster.isPrimary) {
   console.log(`Primary ${process.pid} is running`);
 
   for (let i = 0; i < numCPUs; i++) cluster.fork();
 
   /**
    * @dev The following events must be added or left as it is,
    * after the research on it's uses and pros in detail.
    * 1. cluster.on('fork')
    * 2. cluster.on('listening')
    * 3. cluster.on('online')
    * 4. cluster.on('disconnect')
    * 5. cluster.on('error')
    * 6. cluster.on('message')
    * 7. cluster.on('setup')
    * * For now only exit event is used since it's the base event used for a normal
    * * server
    */
   cluster.on("exit", (worker, code, signal) => {
     console.log(`worker ${worker.process.pid} died`);
 
     /**
      * @dev
      * code <number> The exit code, if it exited normally.
      * signal <string> The name of the signal (e.g. 'SIGHUP') that caused the process to be killed.
      */
     if (signal) console.log(`worker was killed by signal: ${signal}`);
     else if (code !== 0) console.log(`worker exited with error code: ${code}`);
     else console.log("worker success!");
   });
 } else {
   /**
    * @dev custom express server is integrated with the clustered node server
    * syntax: http.createServer(app);
    */
   const app = require("./app");
   http.createServer(app).listen(PORT, (err) => {
     if (err) throw new Error(err);
     console.log(`Server Running => http://localhost:${PORT}`);
   });

   console.log(`\nWorker ${process.pid} started`);
 }