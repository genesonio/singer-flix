import { ResourceWithOptions } from "adminjs";
import { Category, Exercise } from "../../models";
import { categoryResourceOptions } from "./category";
import { exerciseResourceOptions } from "./exercise";

export const adminJsResource: ResourceWithOptions[] = [
  {
    resource: Category,
    options: categoryResourceOptions
  },
  {
    resource: Exercise,
    options: exerciseResourceOptions
  }
]
