import { Controller } from '@rester/core';
import { Course } from './course.model';
import { CourseEntity } from './course.entity';

// insert, delete, update, select
// one, more

@Controller()
export class CourseController {

  async selectOneByID(id: Course['id']) {
    return CourseEntity.findOne(id);
  }

}