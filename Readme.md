
# DoubleMetaphone
      
  Encode a string into a phonetic one with the Double Metaphone algorithm.

    var DoubleMetaphone = require('doublemetaphone'),
        encoder = new DoubleMetaphone();

    console.log(encoder.doubleMetaphone('Aleksandr'));
    console.log(encoder.doubleMetaphone('Alexander'));
    // { primary: 'ALKS', alternate: 'ALKS' }

    encoder.setMaxCodeLen(7);

    console.log(encoder.doubleMetaphone('Aleksandr'));
    console.log(encoder.doubleMetaphone('Alexander'));
    // { primary: 'ALKSNTR', alternate: 'ALKSNTR' }

## Installation

### Node.js

    $ npm install doublemetaphone

### Bower

    $ bower install hgoebl/doublemetaphone --save-dev

## Information

  * compatible with [Apache Jakarta Commons Codec](http://commons.apache.org/codec/) class DoubleMetaphone, Version 1.5 - 1.8
  * maximum length of codec settable (default=4)
  * implements the standard (=primary) and alternate encoding
  * runs in node.js and in the browser

## Running Tests

Running tests should output nothing.

    $ npm test

To run tests in a browser, load `test/test-doublemetaphone.html`.

After "RUNNING TEST..." the text should change to "TEST SUCCESSFUL".

## Test Results

Following Browsers has been tested:

 * Chromium 18.0, 25.0 / Linux
 * Chrome 26.0 / Linux
 * Firefox 11.0, 20.0 / Linux
 * Firefox 5.0.1 and 12.0 / Windows XP
 * Firefox 21.0 / Windows 7
 * Chrome 27.0 / Windows 7
 * Safari 5.1.2 / Windows XP
 * Opera 11.11 / Windows XP
 * Epiphany Webbrowser 2.30.2 / Linux
 * Internet Explorer 8.0.6001 / Windows XP
 * Internet Explorer 9.0 / Windows 7

These Browser didn't pass the tests (2 differences compared to commons-codec):

 * Firefox (all tested versions)
 * Opera
 * Internet Explorer (all tested versions)

**Reason:** The correct upper-case conversion of the German "ß" (&szlig;) is "SS". IE, Firefox and Opera do not convert
this character and thus come to different Double Metaphone encodings.

## Credits

This Implementation is based on the algorithm by <CITE>Lawrence Philips</CITE>.

  * Original Article: [http://www.cuj.com/documents/s=8038/cuj0006philips/](http://www.cuj.com/documents/s=8038/cuj0006philips/)
  * Original Source Code: [ftp://ftp.cuj.com/pub/2000/1806/philips.zip](ftp://ftp.cuj.com/pub/2000/1806/philips.zip)

This JavaScript implementation is an almost 1:1 port from [Apache Jakarta Commons Codec](http://commons.apache.org/codec/)
class <tt>DoubleMetaphone</tt>.

The Java library is licensed under [Apache 2.0](http://www.apache.org/licenses/LICENSE-2.0) which is the reason
why this has the same license.

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
