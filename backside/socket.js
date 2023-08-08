let io;

module.exports = {
    init: (httpServer, cores) => {
        io = require('socket.io')(httpServer, cores);
        return io;
    },
    getIO: () => {
        if (!io) {
            throw new Error('IO not initialized');
        }
        return io;
    }
};