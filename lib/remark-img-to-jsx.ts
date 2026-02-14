//@ts-nocheck
import fs from "fs"
import sizeOf from "image-size"
import { Parent } from "unist"
import { visit } from "unist-util-visit"

type ImageNode = {
  type: string
  name?: string
  attributes?: any[]
  url?: string
  alt?: string
  title?: string
}

export default function remarkImgToJsx() {
  return (tree: Parent) => {
    visit(
      tree,
      // Only visit p tags that contain an img element
      (node: any) =>
        node.type === "paragraph" &&
        node.children.some((n: any) => n.type === "image"),
      (node: any) => {
        const imageNode = node.children.find((n: any) => n.type === "image")

        // Only process local images
        if (!imageNode.url.startsWith("/")) {
          return
        }

        // Check if file exists
        const imagePath = `${process.cwd()}/public${imageNode.url}`
        if (!fs.existsSync(imagePath)) {
          return
        }

        const dimensions = sizeOf(imagePath)

        // Convert original node to mdxJsxFlowElement
        ;(imageNode as ImageNode).type = "mdxJsxFlowElement"
        ;(imageNode as ImageNode).name = "Image"
        ;(imageNode as ImageNode).attributes = [
          { type: "mdxJsxAttribute", name: "alt", value: imageNode.alt },
          { type: "mdxJsxAttribute", name: "src", value: imageNode.url },
          {
            type: "mdxJsxAttribute",
            name: "width",
            value: dimensions.width,
          },
          {
            type: "mdxJsxAttribute",
            name: "height",
            value: dimensions.height,
          },
        ]

        // Change node type from p to div to avoid nesting error
        node.type = "div"
        node.children = [imageNode]
      }
    )
  }
}
