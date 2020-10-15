import { Quality } from '../@type/Quality';
import { QA } from '../qa/qa.model';
import { Record } from '../record/record.model';

/**
 * 讨论
 */
export class Discussion {

  /** 对话列表 */
  private list: Record[] = [];

  /**
   * 获取讨论的主题。
   *
   * @returns {string} 返回讨论主题，默认返回第一条讨论的 `content`，后续可以实现自然语义分析。
   */
  getSubject(): string {
    // return this.list[0].content;
    throw new Error('not implement');
  }

  getResponseTime(): number {
    // const response = this.list.find(record => record.user.type === UserType.Teacher)?.time;
    // return response
    //   ? this.list[0].time.getTime() - response.getTime()
    //   : -1;
    throw new Error('not implement');
  }

  getResponseQuality(): Quality {
    // return {};
    throw new Error('not implement');
  }

  getQAs(): QA[] {
    // return [];
    throw new Error('not implement');
  }

  save() {
    throw new Error('not implement');
  }

}
