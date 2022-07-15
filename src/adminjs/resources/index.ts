import { ResourceWithOptions } from "adminjs";
import { Category } from "../../models";
import { categoryResourceOptions } from "./category";

export const adminJsResource: ResourceWithOptions[] = [
  {
    resource: Category,
    options: categoryResourceOptions
  }
]
