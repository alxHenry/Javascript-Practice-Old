let BTNode = require('../src/Helpers/BTNode');
let InOrder = require('../src/Trees/InOrder');
let MinimalTreeCreator = require('../src/Trees/MinimalTreeCreator');
let DepthLinkedLists = require('../src/Trees/DepthLinkedLists');
let BalancedChecker = require('../src/Trees/BalancedChecker');
let IsBST = require('../src/Trees/IsBST');

describe("Trees test suite", function() {
   describe("InOrder traversal", function() {
       it("should print in the correct order", function() {
           let head = new BTNode("5");
           head.left = new BTNode("3");
           head.left.left = new BTNode("1");
           head.left.right = new BTNode("4");
           head.right = new BTNode("7");
           head.right.left = new BTNode("6");

           let traverser = new InOrder(head);
           traverser.runTraversal();
           expect(traverser.output).toEqual("134567");
       });
   });

    describe("Minimal tree creator", function() {
        it("should return a correct tree", function() {
            let arr = [1,2,3,4,5,6];
            let creator = new MinimalTreeCreator(arr);
            let result = creator.create();
            expect(result.value).toEqual(3);
            expect(result.left.value).toEqual(1);
            expect(result.left.right.value).toEqual(2);
            expect(result.right.value).toEqual(5);
            expect(result.right.left.value).toEqual(4);
            expect(result.right.right.value).toEqual(6);
        });
    });

    describe("Depth linked lists", function() {
        it("should create a linked list for each depth of a tree", function() {
            let tester = new DepthLinkedLists();
            let head = new BTNode("5");
            head.left = new BTNode("3");
            head.left.left = new BTNode("1");
            head.left.right = new BTNode("4");
            head.right = new BTNode("7");
            head.right.left = new BTNode("6");

            let linkedLists = tester.getDepthLists(head);
            expect(linkedLists[0].value).toEqual("5");
            expect(linkedLists[1].value).toEqual("3");
            expect(linkedLists[1].next.value).toEqual("7");
            expect(linkedLists[2].value).toEqual("1");
            expect(linkedLists[2].next.value).toEqual("4");
            expect(linkedLists[2].next.next.value).toEqual("6");
        });
    });

    describe("Balanced tree checker", function() {
        let tester = new BalancedChecker();

        it("should return true for a balanced tree", function() {
            let head = new BTNode("5");
            head.left = new BTNode("3");
            head.left.left = new BTNode("1");
            head.left.right = new BTNode("4");
            head.right = new BTNode("7");
            head.right.left = new BTNode("6");

            let isBalanced = tester.isBalanced(head);
            expect(isBalanced).toEqual(true);
        });

        it("should return false for an ubalanced tree", function() {
            let head = new BTNode("5");
            head.left = new BTNode("3");
            head.right = new BTNode("7");
            head.right.right = new BTNode("7");
            head.right.right.right = new BTNode("7");
            head.right.left = new BTNode("6");
            head.right.left.left = new BTNode("4");

            let isBalanced = tester.isBalanced(head);
            expect(isBalanced).toEqual(false);
        });
    });

    describe("BST checker", function() {
        it("should return true fro a valid BST", function() {
            let tester = new IsBST();
            let head = new BTNode("5");
            head.left = new BTNode("3");
            head.right = new BTNode("7");
            head.right.left = new BTNode("6");

            expect(tester.checkTree(head)).toEqual(true);
        });

        it("should return false for an invalid BST", function() {
            let tester = new IsBST();
            let head = new BTNode("5");
            head.left = new BTNode("3");
            head.right = new BTNode("7");
            head.right.left = new BTNode("4");

            expect(tester.checkTree(head)).toEqual(false);
        });
    });
});