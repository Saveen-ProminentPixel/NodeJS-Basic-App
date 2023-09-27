// const path = require("path");

// console.log(path.basename('/foo/bar/baz/asdf/quux.html'));
// // console.log(process.env.PATH);
// process.env.PATH.split(path.delimiter);

import * as fs from 'node:fs/promises';
// import * as fs from 'node:fs';
import { unlink } from 'node:fs/promises';

try {
  await unlink('/tmp/hello');
  console.log('successfully deleted /tmp/hello');
} catch (error) {
  console.error('there was an error:', error.message);
}