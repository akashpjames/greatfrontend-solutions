/**
 * Given the root node of a binary tree, flip the tree by swapping each node's left and right children, then return the root of the flipped tree.
 * The binary tree is represented by a collection of TreeNodes, where each node has optional left and right child nodes, which are also TreeNodes.
 */
// TC - O(n) and SC O(h) - height of tree for recursion stack
export default function binaryTreeFlip(root) {
    //base case
    if(!root) return root;

    [root.left, root.right] = [root.right, root.left];
    binaryTreeFlip(root.left);
    binaryTreeFlip(root.right);

    return root;
}