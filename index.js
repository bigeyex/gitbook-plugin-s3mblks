var sblocks = require('./sblocks')

module.exports = {
    // Map of hooks
    hooks: {},

    // Map of new blocks
    blocks: {
        mblock: {
            process: function(block) {
                return sblocks.renderSVGString(block.body.replace(/\r\n/g, "\n"));
            }
        }
    },

    // Map of new filters
    filters: {}
};