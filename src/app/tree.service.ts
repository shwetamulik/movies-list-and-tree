import { Injectable } from '@angular/core';
import { TreeNode } from '../app/tree/tree-node.model';

@Injectable({
  providedIn: 'root',
})
export class TreeService {
  private treeData: TreeNode[] = [
    {
      id: 1,
      name: 'Root',
      children: [
        { id: 4, name: 'Child 1', children: [] },
        { id: 5, name: 'Child 2', children: [] },
      ],
    },
    { id: 2, name: 'Node 1', children: [] },
    { id: 3, name: 'Node 2', children: [] },
  ];

  // ... (rest of the service)


  getAll(): TreeNode[] {
    return this.treeData;
  }

  addNode(node: TreeNode): void {
    this.treeData.push(node);
  }
  addChildNode(parentNode: TreeNode, childNode: TreeNode): void {
    if (!parentNode.children) {
      parentNode.children = [];
    }
    parentNode.children.push(childNode);
  }
 
 
  
  updateNode(updatedNode: TreeNode): void {
    console.log('updatedNode', updatedNode)
    this.updateNodeRecursively(this.treeData, updatedNode);
  }
  
  private updateNodeRecursively(nodes: TreeNode[], updatedNode: TreeNode): boolean {
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      if (node.id === updatedNode.id) {
        nodes[i] = updatedNode;
        return true;
      }
      if (node.children && node.children.length > 0) {
        if (this.updateNodeRecursively(node.children, updatedNode)) {
          return true;
        }
      }
    }
    return false;
  }
  
  deleteNode(nodeId: number): void {
    console.log('nodeId', nodeId)
    this.deleteNodeRecursively(this.treeData, nodeId);
  }
  
  private deleteNodeRecursively(nodes: TreeNode[], nodeId: number): boolean {
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      if (node.id === nodeId) {
        nodes.splice(i, 1);
        return true;
      }
      if (node.children && node.children.length > 0) {
        if (this.deleteNodeRecursively(node.children, nodeId)) {
          return true;
        }
      }
    }
    return false;
  }
}
