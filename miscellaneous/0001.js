/*
 input: "  the sky   is blue   ."
 output: "blue is sky the."

 retain the period at the end of the output string
*/

function code1(str) {
    let cleanStr = str.trim().replace(/\s+/g,' ');
    console.log(cleanStr.slice(0,cleanStr.length-1).split(' ').reverse().join(' ') + '.');
}

function code2(str) {
    console.log(str.trim().replace(/\s+/g,' ').slice(0,-1).split(' ').reverse().join(' ') + '.');
}

/*
  question 3 
  implement the solution without using any inbuilt function

*/


/*
  question 4 
  why is chaining many string method potentially expensive in nodejs?
  strings in js are immutable. Every time you call .trim() .replace() nodejs must allocate
  memory for a new string in the Heap. If you are processing millions of log files with this chain
  you could trigger frequent garbage collection GC cycles causing stop the world latency in the API

  question 5
  how would you handle this logic for a 10GB file in nodejs?
  you cannot load 10GB string into memory nodejs has default heap limit of around 1 to 4 GB 
  you must use streams fs.createReadStream you would process the 
  data chunk-by-chunk using a transform stream to avoid a process out of memory crash

  question 6
  you are building a real-time trending-topic service like twitter you need to 
  clean and reverse millions of incoming search string per second to anaylze pattern

  distributed processing pipe
  - ingestion: use apache kafka or AWS kinesis to buffer the raw string
  - processing: use apache Flink or Spark Streaming these tools allow you to run reverse logic across a cluster of hundred of machines
  - store the result in nosql or key value store like redis with an expiration to keep only latest trends

  question 7 
  solve using buffer and stream instead of string function explain how they are better then string function
*/

// code 1
function reverseBuffer(str) {
    // convert string to a mutable buffer
    let buf = Buffer.from(str.trim().replace(/\s+/g,' '));

    // 1.remove the last character i.e full stop 
    let content = buf.subarray(0, buf.length-1);

    // 2.convert to string and use array logic 
    // standard buffer use case i.e not truly in-place 
    let result = content.toString().split(' ').reverse().join(' ') + '.';
    console.log(result);
}

reverseBuffer("   the  sky is blue.");

// code 2
import {Transform} from 'stream';

const reverseStream = new Transform({
    transform(chunk,encoding,callback) {
        let data = chunk.toString();

        let cleaned = data.trim().replace(/\s+/g,' ');
        if(cleaned.endsWith('.')) {
            let reversed = cleaned.slice(0,-1).split(' ').reverse().join(' ') + '.';
            this.push(reversed);
        } else {
            this.push(cleaned.split(' ').reverse().join(' '));
        }

        callback();
    }
})

// code 3 how to do this without .split() or .reverse() to save even more memory
// reading the buffer from right to left (backward) pushing words into a new buffer as you find them

function BufferReverse(str) {
    let input = str.trim().replace(/\s+/g,' ');
    let buf = Buffer.from(input);
    let result = [];
    let wordEnd = buf.length - 2;

    for(let i=buf.length-2; i>=0; i--) {
        if(buf[i] === 32 || i === 0) {
            let start = (i === 0) ? i : i + 1;
            let end = wordEnd + 1;
            result.push(buf.toString('utf8', start, end));
            wordEnd = i - 1;
        }
    }

    console.log(result.join(' ') + '.');
}

BufferReverse("   the  sky is blue.");


// code 4 using two pointer
// step 1 reverse the whole buffer ".eulb si yks eht"
// step 2 reverse each word individually "blue is sky the."

function BufferReverseInPlace(str) {
    // 1. initlal cleanup
    let buf = Buffer.from(str.trim().replace(/\s+/g,' '));

    //helper function to reverse bytes in a specific range
    function reverseRange(b,start,end) {
        while(start < end) {
            let temp = b[start];
            b[start] = b[end];
            b[end] = temp;
            start++;
            end--;
        }
    }

    // 2. reverse everything except the period
    reverseRange(buf, 0, buf.length-2); 

    // 3. revese each wod back to original order
    let start = 0;
    for(let i=0; i<=buf.length-1; i++) {
        if(buf[i] === 32 || i === buf.length-1) {
            let end = (i === buf.length -1) ? i-1 : i-1;
            // do not not reverse the period at the very end
            if(buf[buf.length-1] === 46 && i === buf.length -1) end = i-1;
            reverseRange(buf, start, end);
            start = i+1;
        }
    }

    console.log(buf.toString());
}

BufferReverseInPlace("  the sky is blue.");