# TouchTunes NodeJS Test

This repository is used to complete the NodeJS coding test given out to TouchTunes applicants.

## Getting Started

NodeJS currently doesn't support ES6 modules, i.e.:

```
// bad
import express from 'express';

// good
const express = require('express');
```

They will support it eventually. The workaround is to use the `--experimental-modules` option with the `node` command, and use the `.mjs` extension for any files using ES6 import statements.

### Running

```
cd src
node --experimental-modules index.mjs
```

### Docker

```
docker image build -t touchtunes .
docker container run -it -p 3000:3000 touchtunes
```

## Author

**Vartan Benohanian**

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
