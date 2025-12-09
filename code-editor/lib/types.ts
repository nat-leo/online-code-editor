export type Difficulty = "easy" | "medium" | "hard";

export interface Problem {
  id: number;

  // Core identity
  title: string;
  slug: string;

  // Content
  description_md: string;
  starter_code?: string | null;
  solution_md?: string | null;
  constraints_md?: string | null;

  // Metadata
  difficulty: Difficulty;
  category_id?: number | null;

  // Search / recommendation features
  tags: string[];
  companies: string[];

  // Stats
  accepted_count: number;
  submitted_count: number;

  // Timestamps (ISO strings from DB)
  created_at: string;
  updated_at: string;
}

export type RawNode = {
  id: string;
  name: string;
  parentId: string | null;
};
