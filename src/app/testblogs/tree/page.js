import { B } from '@/components/typography/B'
import { Blockquote } from '@/components/typography/Blockquote'
import { H1 } from '@/components/typography/H1'
import { H2 } from '@/components/typography/H2'
import { H3 } from '@/components/typography/H3'
import { H4 } from '@/components/typography/H4'
import { List } from '@/components/typography/List'
import { P } from '@/components/typography/P'
import Section from '@/components/typography/Section'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { TableProperties } from 'lucide-react'
import React from 'react'

export default function Tree() {
  const properties = [
    {
      property: "Node",
      description: "Element containing data and references to children"
    },
    {
      property: "Root",
      description: "Topmost node of the binary tree"
    },
    {
      property: "Leaf Node",
      description: "Node with no children"
    },
    {
      property: "Internal Node",
      description: "Node with at least one child"
    },
    {
      property: "Height",
      description: "Longest path from root to any leaf"
    },
    {
      property: "Depth",
      description: "Number of edges from root to a node"
    },
    {
      property: "Level",
      description: "Same as depth, representing the distance from the root"
    },
    {
      property: "Subtree",
      description: "Tree consisting of a node and its descendants"
    },
    {
      property: "Balanced Binary Tree",
      description: "Tree where the height difference between left and right subtree is ≤ 1"
    },
    {
      property: "Full Binary Tree",
      description: "Tree where every node has 0 or 2 children"
    },
    {
      property: "Complete Binary Tree",
      description: "Tree where all levels are fully filled except possibly the last"
    },
    {
      property: "Perfect Binary Tree",
      description: "Tree where all internal nodes have 2 children and all leaf nodes are at the same level"
    },
    {
      property: "Degenerate Tree",
      description: "Tree where each node has only one child"
    },
    {
      property: "Skewed Binary Tree",
      description: "Tree where nodes are skewed to either left or right"
    },
    {
      property: "Binary Search Tree (BST)",
      description: "Binary tree with ordered values"
    },
    {
      property: "Size",
      description: "Total number of nodes in the tree"
    },
    {
      property: "Max nodes at level l",
      description: "2^l nodes at level l"
    },
    {
      property: "Max nodes in a tree of height h",
      description: "2^(h+1) - 1"
    }
  ]

  return (
    <div>
      <H1>Tree</H1>
      <P>
        Tree is  a hierarchical structure that is used to represent and organize
        data in a way that is easy to navigate and search
      </P>
      <Section>
        <H3>Reasons for Using Tree Data Structure</H3>
        <List>
          <li>
            <P><B>Hierarchical Data Representation: </B> Trees naturally represent data with parent-child relationships (e.g., file systems).</P> 
          </li>
          <li>
            <P><B>Efficient Search and Traversal: </B>Trees, especially binary search trees, allow fast search, insertion, and deletion operations.</P> 
          </li>
          <li>
            <P><B>Flexible Data Storage: </B>Trees handle dynamic data well, unlike arrays that require resizing.</P> 
          </li>
          <li>
            <P><B>Optimized Access: </B>Accessing elements is quick due to the logarithmic depth (in balanced trees).</P> 
          </li>
        </List>
      </Section>
      <Section>
        <H3>Use Cases of Tree Data Structure</H3>
        <List>
          <li>
            <P><B>File System: </B> Organizes directories and files in a hierarchical manner (parent-child relationship).</P> 
          </li>
          <li>
            <P><B>Databases: </B>Used in indexing (B-trees, B+ trees) to optimize search and retrieval operations.</P> 
          </li>
          <li>
            <P><B>Biary Search Trees: </B> Facilitates quick searching, insertion, and deletion of elements.</P> 
          </li>
          <li>
            <P><B>Routing Algorithms (Networking): </B>Used in networking for shortest path algorithms (like spanning trees).</P> 
          </li>
          <li>
            <P><B>AI Decision Making: </B>Decision trees used in machine learning and game theory for decision-making processes.</P> 
          </li>
          <li>
            <P><B>Compression of files: </B>Trees also used to compress file (e.g huffman coding)</P> 
          </li>
          <li>
            <P><B>Tri DAta Structure: </B>Efficiently stores and searches strings, used in applications like autocomplete.</P> 
          </li>
        </List>
      </Section>
      <Section>
        <H3>Basic Terminologies In Tree Data Structure</H3>
        <List>
          <li>
            <P>
              <B>Parent Node: </B> 
              The node which is a predecessor of a node is called the parent node of that node.
            </P> 
          </li>
          <li>
            <P>
              <B>Child Node: </B> 
              The node which is the immediate successor of a node is called the child node of that node.
            </P> 
          </li>
          <li>
            <P>
              <B>Root Node: </B> 
              The topmost node of a tree or the node which does not have any parent node.
            </P> 
          </li>
          <li>
            <P>
              <B>Leaf Node (External Node): </B> 
              The node which do not have any child ndoe.
            </P> 
          </li>
          <li>
            <P>
              <B>Ancestor of a Node: </B> 
              Any predecessor nodes on the path of the root to that node are called Ancesrors of the node.
            </P> 
          </li>
          <li>
            <P>
              <B>Descedant: </B> 
              A node x is a descendant of another node y if any only if y is an ancestor of x.
            </P> 
          </li>
          <li>
            <P>
              <B>Sibling: </B> 
              Children of the same parent node are called siblings.
            </P> 
          </li>
          <li>
            <P>
              <B>Level of the node: </B> 
              The count of edges on the path from the root node to that node.
              The root node has level 0.
            </P> 
          </li>
          <li>
            <P>
              <B>Neighbour of a Node: </B> 
              Parent or child of a node are the neighbor of that node.
            </P> 
          </li>
          <li>
            <P>
              <B>Subtree: </B> 
              Any node of the tree along with its descendant.
            </P> 
          </li>
          <li>
            <P>
              <B>Height: </B> 
              The length of the path from the node to the deepest leaf.
            </P> 
          </li>
          
        </List>
      </Section>
      <Section>
        <H3>Types of Trees <P className="font-normal text-base inline-block">( Based on no of Children )</P> </H3>
        <List>
          <li>Binary Tree</li>
          <li>Ternary Tree</li>
          <li>N-ary Tree</li>
        </List>
      </Section>
      <Section>
        <H3>Types of Binary Tree <P className="font-normal text-base inline-block">( Based on no of Children )</P> </H3>
        <List>
          <li>Full Binary Tree ( Strict Binary Tree )</li>
          <li>Complete Binary Tree </li>
          <li>Perfect Binary Tree</li>
          <li>Hight Balanced Binary Tree</li>
          <li>Skewed Binary Tree</li>
          <li>Ordered Binary Tree</li>
        </List>
        <P><B>Full Binary Tree: </B> Every node has either 0 or 2 children.</P>
        <P><B>Complete Binary Tree: </B> All levels are completely filled except possibly the last, which is filled from the left. </P>
        <P><B>Perfect Binary Tree: </B> All levels are full </P>
        <P><B>Hight Balanced Binary Tree: </B> Average height 0(logn) </P>
        <P><B>Skewed Binary Tree: </B>All nodes have either one or zero child. height O(n)</P>
        <P><B>Ordered Binary Tree: </B>
          Every node has some property. 
        </P>
        <Blockquote> eg. BST ( Binary Search Tree )</Blockquote>
      </Section>
      <Section>
        <H3>Some important properties of Binary Tree</H3>
        <List>
          <li>
            In a Perfect Binary Tree 
            <List>
              <li className=' list-decimal'>Number of nodes = </li>
            </List>
          </li>
        </List>
      </Section>
      <div className='w-full'>
      <Table className=" m-2 w-[100%-0.25rem]  md:w-[70%] shadow-md" >
        <TableCaption>Tree property summery</TableCaption>
        <TableHeader className= " shadow-sm">
          <TableHead >Property</TableHead>
          <TableHead >Description</TableHead>
        </TableHeader>
        <TableBody>
          {properties.map((item, i) => (
            <TableRow key={i}>
              <TableCell className=" font-bold" >{item.property}</TableCell>
              <TableCell>{item.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </div>
    </div>
  )
}
