// The process global is available via
// the Node process. It contains information
// all about the currently running node process.
// In this case we only care about the "argv" property
// which contains an array of all the commandline
// arguments passed to initialize this specific
// node instance. This includes the "node" application
// call as well as the file path to the file passed
// to the "node" application call. Plus any arguments
// we specify, such as:
// 	node arguments.js myArgument1 myArgument2
console.log(process.argv);