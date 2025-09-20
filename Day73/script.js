// console.log("Binary Search Trees");
// class Node {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }
// function sortedArrayToBSTRecur(arr, start, end) {
//   if (start > end) return null;
//   const mid = start + Math.floor((end - start) / 2);
//   const root = new Node(arr[mid]);
//   root.left = sortedArrayToBSTRecur(arr, start, mid - 1);
//   root.right = sortedArrayToBSTRecur(arr, mid + 1, end);
//   return root;
// }
// function sortedArrayToBST(arr) {
//   return sortedArrayToBSTRecur(arr, 0, arr.length - 1);
// }

// function preOrder(root) {
//   if (!root) return;
//   console.log(root.data);
//   preOrder(root.left);
//   preOrder(root.right);
// }
// const arr = [1, 2, 3, 4, 5];
// const root = sortedArrayToBST(arr);
// preOrder(root);

console.log("Knight Travails");
function knightMoves(startPos, desiredPos) {
  if (!isValidPosition(startPos) || !isValidPosition(desiredPos)) {
    console.log("Invalid position");
    return;
  }
  const queue = [startPos];
  const visited = new Set([startPos.toString()]);
  const parent = {};
  parent[startPos.toString()] = null;
  while (queue.length) {
    const curr = queue.shift();
    if (samePos(curr, desiredPos)) {
      // reconstruct path
      let path = [];
      let key = curr.toString();
      while (key !== null) {
        const [x, y] = key.split(",").map(Number);
        path.push([x, y]);
        key = parent[key];
      }
      path.reverse();
      console.log(
        `=> You made it in ${path.length - 1} moves! Here's your path:`
      );
      path.forEach((step) => console.log(step));
      return path;
    }
    for (const move of generateValidMoves(curr)) {
      if (!visited.has(move.toString())) {
        visited.add(move.toString());
        parent[move] = curr.toString();
        queue.push(move);
      }
    }
  }
}
function samePos(a, b) {
  return a[0] === b[0] && a[1] === b[1];
}
function isValidPosition(pos) {
  if (!Array.isArray(pos) || pos.length !== 2) return false;
  const [x, y] = pos;
  return (
    Number.isInteger(x) &&
    Number.isInteger(y) &&
    x >= 0 &&
    x <= 7 &&
    y >= 0 &&
    y <= 7
  );
}
function generateValidMoves([x, y]) {
  const deltas = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];
  return deltas.map(([dx, dy]) => [x + dx, y + dy]).filter(isValidPosition);
}
knightMoves([3, 3], [3, 2]);
