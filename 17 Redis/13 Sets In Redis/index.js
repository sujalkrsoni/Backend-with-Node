// What is a Redis Set?
//     -> A set of unique, unordered strings
//     -> Great for: tags, unique users, membership checks
//     -> Fast operations: add, remove, check in O(1) time

// Common Commands
//     SADD myset "apple" "banana" → Add items
//     SREM myset "banana" → Remove item
//     SMEMBERS myset → Get all items
//     SISMEMBER myset "apple" → Check if exists (1 or 0)
//     SCARD myset → Count elements
//     SPOP myset → Remove & return random item
//     SRANDMEMBER myset → Get random item (without removing)