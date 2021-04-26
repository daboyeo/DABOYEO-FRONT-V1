export interface ReportListItem {
  report_id: number;
  reporter_name: string;
  reporter_profile_uri: string;
  content: string;
  tags: [];
  image_uris: [];
  num_of_sympathy: number;
  is_sympathy: boolean;
  created_at: string;
  updated_at: string;
  location: string;
}
