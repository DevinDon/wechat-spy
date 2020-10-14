import { DELETE, GET, Inject, PathVariable, POST, PUT, RequestBody, View } from '@rester/core';
import { CourseController } from './course.controller';
import { Course } from './course.model';

// add, remove, modify, find(condition), get(random)
// one, more

@View('course')
export class CourseView {

  @Inject()
  private controller!: CourseController;

  @GET('{{id}}')
  async getOneByID(
    @PathVariable('id') id: number
  ) {
    return this.controller.selectOneByID(+id);
  }

}
