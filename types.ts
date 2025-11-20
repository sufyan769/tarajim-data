export interface AlgoliaRecord {
  objectID: string;
  book_title: string;
  part_number: number;
  page_number: number;
  text_content: string;
  part_sequence?: number;
  is_split?: boolean;
}

export interface SearchStats {
  processingTimeMS: number;
  nbHits: number;
  page: number;
  nbPages: number;
}