# en-path

## srelative
    // This fails because the path ends up being 'module.js' which require will interpret as an npm dependency instead of a file path
    const path = require('path');
    const module = require(path.relative(__dirname, 'module.js'));

An enhanced path module that adds a srelative function that ensures all paths are usable by require. You can see it in action here:

    const enPath = require('en-path');
    const module = require(enPath.srelative(__dirname, 'module.js'));
