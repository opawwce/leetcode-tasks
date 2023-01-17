// 2236. Root Equals Sum of Children


// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var checkTree = function (root) {

    let tree = new TreeNode(root[0], root[1], root[2]);
    return tree.val == tree.left + tree.right;

    // idk why this worked in leetcode compilator but my version above not worked
    // return root.val == root.left.val + root.right.val;
};

console.log(checkTree([10, 4, 6]));   // true
console.log(checkTree([5, 3, 1]));   // false