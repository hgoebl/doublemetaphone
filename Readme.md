
# DoubleMetaphone
      
  Encode a string into a phonetic one with the Double Metaphone algorithm.

    var DoubleMetaphone = require('../doublemetaphone.js'),
        encoder = new DoubleMetaphone();

    console.log(encoder.doubleMetaphone('Aleksandr'));
    console.log(encoder.doubleMetaphone('Alexander'));
    // { primary: 'ALKS', alternate: 'ALKS' }

    encoder.setMaxCodeLen(7);

    console.log(encoder.doubleMetaphone('Aleksandr'));
    console.log(encoder.doubleMetaphone('Alexander'));
    // { primary: 'ALKSNTR', alternate: 'ALKSNTR' }

## Installation

    $ npm install doublemetaphone

## Information

  * compatible with [Apache Jakarta Commons Codec](http://commons.apache.org/codec/) class DoubleMetaphone, Version 1.5
  * maximum length of codec settable (default=4)

## Running Tests

Running tests should output nothing.

    $ node test/test-doublemetaphone.js

## License 

   Copyright 2011 Heinrich Goebl

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
