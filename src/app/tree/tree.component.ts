import { Component, OnInit } from '@angular/core';
import { TreeNode } from './tree-node.model';
import { TreeService } from '../tree.service';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
})
export class TreeComponent implements OnInit {
  treeData: TreeNode[] = [];
  newNodeName: string = '';
  selectedNode: TreeNode | null = null;

  constructor(private treeService: TreeService) {}

  ngOnInit(): void {
    this.treeData = this.treeService.getAll();
  }

  addNode(): void {
    if (this.newNodeName.trim() === '') {
      return;
    }

    const newNode: TreeNode = {
      id: Date.now(),
      name: this.newNodeName,
      children: [],
    };

    if (this.selectedNode) {
      if (!this.selectedNode.children) {
        this.selectedNode.children = [];
      }
      this.selectedNode.children.push(newNode);
      this.treeService.updateNode(this.selectedNode);
    } else {
      this.treeService.addNode(newNode);
    }

    this.newNodeName = '';
  }
 

 
  
  selectNode(node: TreeNode): void {
    this.selectedNode = node;
  }

  updateNode(node: TreeNode): void {
    console.log('node', node)
      this.treeService.updateNode(node);
      this.selectedNode = null; // Clear the selected node
    }
  

  deleteNode(node:any): void {
    console.log('node', node)
      this.treeService.deleteNode(node);
      this.selectedNode = null; // Clear the selected node
  }
}
