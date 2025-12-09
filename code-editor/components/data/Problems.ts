import type { Problem } from "@/lib/types"; // wherever your Problem interface lives

export const sampleProblems: Problem[] = [
  {
    id: 1,
    title: "Two Sum",
    slug: "two-sum",
    description_md: `
Given an integer array \`nums\` and an integer \`target\`, find **two distinct indices**
\`i\` and \`j\` such that \`nums[i] + nums[j] === target\`.

Return the pair of indices in any order. You may assume exactly one valid pair exists.
`.trim(),
    starter_code: `function twoSum(nums: number[], target: number): number[] {
  // TODO: implement
  return [];
}`,
    solution_md: `
Use a hash map to store \`value -> index\` while scanning from left to right.

For each \`nums[i]\`, compute \`need = target - nums[i]\`.  
If \`need\` is already in the map, you have found a valid pair.  
Otherwise, store \`nums[i]\` with its index in the map and continue.

Time: O(n), Space: O(n).
`.trim(),
    constraints_md: `
- \`2 <= nums.length <= 10^5\`
- \`-10^9 <= nums[i] <= 10^9\`
- There is exactly one solution.
`.trim(),
    difficulty: "easy",
    category_id: 1, // e.g. Arrays & Hashing
    tags: ["array", "hash-table", "one-pass"],
    companies: ["Google", "Amazon", "Meta"],
    accepted_count: 1500000,
    submitted_count: 2500000,
    created_at: "2025-01-01T00:00:00.000Z",
    updated_at: "2025-01-01T00:00:00.000Z"
  },

  {
    id: 2,
    title: "Add Two Numbers",
    slug: "add-two-numbers",
    description_md: `
You are given two **non-empty** linked lists representing two non-negative integers.
The digits are stored in **reverse order**, and each node contains a single digit.

Add the two numbers and return the sum as a linked list in the same reversed format.
`.trim(),
    starter_code: `class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0;
    this.next = next ?? null;
  }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  // TODO: implement
  return null;
}`,
    solution_md: `
Simulate elementary school addition using two pointers on the lists and a \`carry\`.

At each step:
- Sum the current digits and carry.
- Create a new node with \`sum % 10\`.
- Update \`carry = Math.floor(sum / 10)\`.

Continue while there are nodes or a non-zero carry.

Time: O(max(m, n)), Space: O(max(m, n)).
`.trim(),
    constraints_md: `
- Each linked list represents a non-negative integer.
- No leading zeros unless the number is 0.
`.trim(),
    difficulty: "medium",
    category_id: 2, // Linked List
    tags: ["linked-list", "math"],
    companies: ["Amazon", "Microsoft"],
    accepted_count: 900000,
    submitted_count: 1800000,
    created_at: "2025-01-01T00:00:00.000Z",
    updated_at: "2025-01-01T00:00:00.000Z"
  },

  {
    id: 3,
    title: "Longest Substring Without Repeating Characters",
    slug: "longest-substring-without-repeating-characters",
    description_md: `
Given a string \`s\`, find the length of the **longest substring** that contains
no repeated characters.
`.trim(),
    starter_code: `function lengthOfLongestSubstring(s: string): number {
  // TODO: implement
  return 0;
}`,
    solution_md: `
Use a sliding window with a map from character to its **most recent index**.

Expand the right pointer over the string:
- If the current character was seen inside the current window,
  move the left pointer just past its previous index.
- Track the maximum window length.

Time: O(n), Space: O(min(n, alphabet_size)).
`.trim(),
    constraints_md: `
- \`0 <= s.length <= 10^5\`
- \`s\` consists of standard ASCII characters.
`.trim(),
    difficulty: "medium",
    category_id: 3, // Strings / Sliding Window
    tags: ["string", "sliding-window", "hash-table"],
    companies: ["Google", "Bloomberg", "Uber"],
    accepted_count: 1300000,
    submitted_count: 2800000,
    created_at: "2025-01-01T00:00:00.000Z",
    updated_at: "2025-01-01T00:00:00.000Z"
  },

  {
    id: 4,
    title: "Median of Two Sorted Arrays",
    slug: "median-of-two-sorted-arrays",
    description_md: `
You are given two sorted arrays \`nums1\` and \`nums2\`.  
Return the **median** of the two arrays combined, in \`O(log(m + n))\` time.
`.trim(),
    starter_code: `function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  // TODO: implement
  return 0;
}`,
    solution_md: `
Use binary search on the **smaller** array to find a partition such that:

- All elements on the left side of both arrays are \`<=\` all elements on the right side,
- The left and right sides differ in total size by at most 1.

From that partition, compute the median using the max of left parts and min of right parts.

Time: O(log(min(m, n))), Space: O(1).
`.trim(),
    constraints_md: `
- \`nums1\` and \`nums2\` are individually sorted in non-decreasing order.
- Combined length is at least 1.
`.trim(),
    difficulty: "hard",
    category_id: 1, // Arrays / Binary Search
    tags: ["array", "binary-search", "divide-and-conquer"],
    companies: ["Google", "Meta"],
    accepted_count: 600000,
    submitted_count: 1600000,
    created_at: "2025-01-01T00:00:00.000Z",
    updated_at: "2025-01-01T00:00:00.000Z"
  },

  {
    id: 5,
    title: "Merge Two Sorted Lists",
    slug: "merge-two-sorted-lists",
    description_md: `
Merge two sorted singly-linked lists into **one** sorted list and return its head.
The input lists should be reused; do not allocate extra nodes.
`.trim(),
    starter_code: `class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0;
    this.next = next ?? null;
  }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  // TODO: implement
  return null;
}`,
    solution_md: `
Use a dummy head and a tail pointer.

Compare \`list1.val\` and \`list2.val\` and attach the smaller node to \`tail.next\`,
then advance that list's pointer. Move \`tail\` forward.

At the end, append the remaining list if any.

Time: O(m + n), Space: O(1) additional.
`.trim(),
    constraints_md: `
- Each list is sorted in non-decreasing order.
`.trim(),
    difficulty: "easy",
    category_id: 2, // Linked List
    tags: ["linked-list", "two-pointers"],
    companies: ["Amazon", "Microsoft"],
    accepted_count: 1200000,
    submitted_count: 1900000,
    created_at: "2025-01-01T00:00:00.000Z",
    updated_at: "2025-01-01T00:00:00.000Z"
  },

  {
    id: 6,
    title: "Valid Parentheses",
    slug: "valid-parentheses",
    description_md: `
Given a string containing only the characters \`'()[]{}'\`, determine if the input string
is a **valid** bracket sequence.

A sequence is valid if every opening bracket has a matching closing bracket of the same type,
and the pairs are properly nested.
`.trim(),
    starter_code: `function isValid(s: string): boolean {
  // TODO: implement
  return false;
}`,
    solution_md: `
Use a stack:

- Push the expected closing bracket when you see an opening one.
- When you see a closing bracket, check if it matches the top of the stack.
- The string is valid if the stack is empty at the end and no mismatches occurred.

Time: O(n), Space: O(n).
`.trim(),
    constraints_md: `
- \`0 <= s.length <= 10^5\`
- \`s\` contains only '(', ')', '{', '}', '[' and ']'.
`.trim(),
    difficulty: "easy",
    category_id: 5, // Stack / String
    tags: ["stack", "string"],
    companies: ["Amazon", "Facebook"],
    accepted_count: 1600000,
    submitted_count: 2600000,
    created_at: "2025-01-01T00:00:00.000Z",
    updated_at: "2025-01-01T00:00:00.000Z"
  },

  {
    id: 7,
    title: "Binary Tree Level Order Traversal",
    slug: "binary-tree-level-order-traversal",
    description_md: `
Given the root of a binary tree, return the **level order traversal** of its nodes' values
(as a list of levels from top to bottom).
`.trim(),
    starter_code: `class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val ?? 0;
    this.left = left ?? null;
    this.right = right ?? null;
  }
}

function levelOrder(root: TreeNode | null): number[][] {
  // TODO: implement
  return [];
}`,
    solution_md: `
Use a BFS with a queue.

For each level:
- Take the current queue size.
- Pop that many nodes, record their values, and enqueue their children.

Collect each level's values into a nested array.

Time: O(n), Space: O(n) for the queue and output.
`.trim(),
    constraints_md: `
- Number of nodes in the tree is in \`[0, 10^4]\`.
`.trim(),
    difficulty: "medium",
    category_id: 6, // Tree / BFS
    tags: ["tree", "bfs", "queue"],
    companies: ["Amazon", "Bloomberg"],
    accepted_count: 900000,
    submitted_count: 1400000,
    created_at: "2025-01-01T00:00:00.000Z",
    updated_at: "2025-01-01T00:00:00.000Z"
  },

  {
    id: 8,
    title: "Lowest Common Ancestor of a Binary Search Tree",
    slug: "lowest-common-ancestor-of-a-binary-search-tree",
    description_md: `
Given the root of a **binary search tree** and two nodes \`p\` and \`q\`,
return their **lowest common ancestor** (LCA).

The LCA is the lowest node that has both \`p\` and \`q\` in its subtree
(allowing a node to be an ancestor of itself).
`.trim(),
    starter_code: `class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val ?? 0;
    this.left = left ?? null;
    this.right = right ?? null;
  }
}

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  // TODO: implement
  return null;
}`,
    solution_md: `
Exploit the BST property:

- If both \`p.val\` and \`q.val\` are less than \`root.val\`, go left.
- If both are greater, go right.
- Otherwise, \`root\` is the split point and thus the LCA.

Time: O(h), where \`h\` is the tree height. Space: O(1).
`.trim(),
    constraints_md: `
- All node values are unique.
- \`p\` and \`q\` are guaranteed to exist in the tree.
`.trim(),
    difficulty: "easy",
    category_id: 6, // Tree / BST
    tags: ["tree", "bst"],
    companies: ["Google", "Amazon"],
    accepted_count: 1100000,
    submitted_count: 1500000,
    created_at: "2025-01-01T00:00:00.000Z",
    updated_at: "2025-01-01T00:00:00.000Z"
  },

  {
    id: 9,
    title: "Number of Islands",
    slug: "number-of-islands",
    description_md: `
You are given a 2D grid of characters \`'1'\` (land) and \`'0'\` (water).  
An island is a group of horizontally or vertically connected land cells.

Return the number of distinct islands in the grid.
`.trim(),
    starter_code: `function numIslands(grid: string[][]): number {
  // TODO: implement
  return 0;
}`,
    solution_md: `
Scan the grid. When you see a land cell that has not yet been visited,
start a DFS or BFS from that cell and mark the whole connected component as visited.

Increment a counter for each new component discovered.

Time: O(m * n), Space: O(m * n) in the worst case for the recursion/queue and visited.
`.trim(),
    constraints_md: `
- \`1 <= grid.length, grid[0].length <= 300\`
- \`grid[i][j] \in {'0', '1'}\`
`.trim(),
    difficulty: "medium",
    category_id: 8, // Graph / DFS/BFS
    tags: ["graph", "dfs", "bfs", "matrix"],
    companies: ["Amazon", "Google"],
    accepted_count: 1000000,
    submitted_count: 1900000,
    created_at: "2025-01-01T00:00:00.000Z",
    updated_at: "2025-01-01T00:00:00.000Z"
  },

  {
    id: 10,
    title: "Climbing Stairs",
    slug: "climbing-stairs",
    description_md: `
You are climbing a staircase with \`n\` steps.  
Each move, you can climb either **1** or **2** steps.

Return the number of distinct ways to reach the top.
`.trim(),
    starter_code: `function climbStairs(n: number): number {
  // TODO: implement
  return 0;
}`,
    solution_md: `
This is a Fibonacci-style DP.

Let \`dp[i]\` be the number of ways to reach step \`i\`.

- \`dp[0] = 1\` (one way to stand at the base),
- \`dp[1] = 1\`,
- \`dp[i] = dp[i-1] + dp[i-2]\`.

You can reduce it to O(1) space by keeping only the previous two values.

Time: O(n), Space: O(1).
`.trim(),
    constraints_md: `
- \`1 <= n <= 45\`
`.trim(),
    difficulty: "easy",
    category_id: 10, // DP
    tags: ["dynamic-programming", "fibonacci"],
    companies: ["Amazon", "Microsoft"],
    accepted_count: 1400000,
    submitted_count: 2300000,
    created_at: "2025-01-01T00:00:00.000Z",
    updated_at: "2025-01-01T00:00:00.000Z"
  }
];
