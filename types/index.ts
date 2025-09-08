export interface ThemeInterface {
  id: number;
  name: string;
  previews: Record<string, any>[];
}

export interface MetaData {
  school: Record<string, any>;
  theme: ThemeInterface;
}
