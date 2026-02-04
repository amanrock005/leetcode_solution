/*
 question 1
 what is the time and space complexity
 of brute force and map based apporach?

 brute force
 TC: O(n^2)
 SC: O(1)

 map base apporach
 TC: O(n)
 SC: O(n) trading memory for time

 question 2
 how does a Map/HashMap work internally? What happens 
 if two keys hash to the same value?

 A hashmap uses a hash function to turn a key into an integer
 index in an underlying array often caled a bucket

 what is hash collision?
 A collions occurs when two different keys result in the same index
 from the hash function. if the array size is 10 and hash function is key % 10 
 14 hashes to index 4
 24 hashes to index 4 

 how collision are handled?
 chaining(most common) each bucket in the array doesn't hold just one value
 it holds a linked list(red-black tree in modern engines) if a collision occurs 
 the new key-value pair is simply added to the list at that index

 open addressing: the map looks for the next available empty slot in the array to store 
 the data

 question 3
 how do collision actually affects the O(1) lookup time in the worst case?

 O(1) lookup is degraded by the hashMap to O(n)
 poor hash function maps every single key to the same index(bucket) which turns the hashMap into a linked list

 average case: O(1) - hash function spreads keys evenly across buckets
 worst case: O(n) - you traverse a long list of items inside single bucket

 how modern engies v8 fix this?
 to prevent a malicious user/ bad hash function from slowing down your app 
 modern implementation use a technique called treeification
 1. intially collision are handled via a linked list
 2. once a bucket reaches certain threshold 8 items the map convert that list
 into balanced binary search tree like red-black tree
 3. this improves look up from O(n) to O(logn)

 question 4
 what hash function does inbuilt javascript Map() uses?
 v8 engine doesn't use a single simple hash function for everything. 
 instead it uses a sophisticated approach called determinstic hash combined 
 with address hashing
 
 since javascript allows everything to be a key(object, function, number,string)
 the engine choose the strategy based on the type of the key

 small integer - the number itself is used as hash with some bit shuffling to ensure even distribution
 strings - v8 calculates a hash based on the character in teh string and caches it on the string object
 object/function - v8 creates hidden unique ID and stores it directly on the object in special internal slot. this ensure the hash remain same even if you change the objects' properties

 question 5
 if the input array is already sorted can it be solved in O(1)
 using two-pointer technique O(n) or binary search O(nlogn)
*/

 function twoSumPointer(nums,target) {
    // TC: O(n) SC: O(1)
    let left = 0;
    let right = nums.length - 1;

    while(left < right) {
        const sum = nums[left] + nums[right];

        if(sum === target) {
            return [left,right];
        } else if(sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return null;
 }

 function twoSumBinarySearch(nums,target) {
    // TC: O(nlogn) SC: O(1)
    function binarySearch(arr,start,target) {
        let left = start;
        let right = arr.length-1;
        while(left <= right) {
            let mid = Math.floor((left+right)/2);
            if(arr[mid] === target) return mid;
            if(arr[mid] < target) left = mid + 1;
            else right = mid -1;
        }
        return -1;
    }
    for(let i=0; i<nums.length; i++) {
        const complement = target - nums[i];
        const foundIndex = binarySearch(nums,i+1,complement);
        if(foundIndex !== -1) {
            return [i,foundIndex];
        }
    }
    return null;
 }

 /*
  question 6
  if the array is too large to fit in RAM but 
  there unlimited disk space how would you find pair?
  hint: external sorting or mapReduce

  question 7
  how would you modify the code to return all unique pairs that sum up to the target

  question 8
  what if the number are very large greater than
  Number.MAX_SAFE_INTEGER? How would you handle BigInt in js

  question 9 distributed two sum
  suppose the numbers are spread across 10 different server. how do you find the pair?
  hint: partitioning/sharding by value and using a distributed cache like redis to check complements

  question 10 
  if you have 8 CPU cores how can you parallelize this search
  hint: worker threads and splitting the search space

  question 11
  design API takes a stream of number and a target
  follow-up: how do you handle statefulness? if the target changes every minutes how do you optimze storage

  question 12 garbage collection
  in a high-frequency trading system creating a new Map for every request might 
  cause GC spike. how do you optimize memory?
  hint: object pooling or using typed array Int32Array if the range of numbers is know

 */