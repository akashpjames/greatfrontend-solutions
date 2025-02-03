/**
 * Given the root of a binary tree, determine the depth of the tree, which is defined as the number of nodes
 * along the longest path from the root to the most distant leaf node.
 */

// TC O(n) SC O(h)
export default function binaryTreeMaximumDepth(root) {
    // if(!root) return depth;
    if (!root) return 0;

    // recursive solution
    // return Math.max(binaryTreeMaximumDepth(root.left), binaryTreeMaximumDepth(root.right));

    // iterative solution
    const qu = [{ node: root, depth: 1 }];
    let maxDepth = 0;
    while (qu.length) {
        const { node, depth } = qu.shift();
        maxDepth = Math.max(maxDepth, depth);
        node.left && qu.push({ node: node.left, depth: depth + 1 });
        node.right && qu.push({ node: node.right, depth: depth + 1 });
    }
    return maxDepth;
}