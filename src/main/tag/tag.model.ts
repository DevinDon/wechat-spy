/**
 * Q&A tag.
 */
export interface Tag {

  name: string;

  group?: string;

  comment?: string;

}

export type TagNameField = Tag['name'];
