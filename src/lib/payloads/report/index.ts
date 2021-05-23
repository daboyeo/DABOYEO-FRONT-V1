export interface ReportListItem {
  report_id: number;
  reporter_name: string;
  reporter_id: string;
  reporter_profile_uri: string;
  content: string;
  tags: string[];
  image_uris: string[];
  num_of_sympathy: number;
  is_sympathy: boolean;
  created_at: string;
  updated_at: string;
  location: string;
}

export interface Comment {
  comment_id: number;
  profile_uri: string;
  name: string;
  content: string;
  user_id: number;
}

export interface ReportManagement {
  tags: string[];
  files: File[];
  content: string;
  location: string;
}

export interface ReportReq {
  tags: string[];
  image_uris: string[];
  content: string;
  location: string;
}

export interface Location {
  latitude: number;
  longitude: number;
}
export interface CommentReq {
  id: number;
  content: string;
}

export interface GetReportOption {
  user?: string;
  query?: string;
  tag?: string;
}

export interface KakaoMapLocation extends Location {
  address: string;
  place: string;
}

export interface ReportDetail extends ReportListItem {
  comments: Comment[];
}
