export type BaseEntity = {
  id: string;
  createdAt: number;
};

// 全てのエンティティにBaseEntityのプロパティを追加する
export type Entity<T> = {
  [K in keyof T]: T[K];
} & BaseEntity;

// ユーザーのエンティティ
export type User = Entity<{
  password: string;
  loginStatus: boolean;
  lastLoginTime: number;
}>;

// ユーザーのレスポンス
export type UserResponse = {
  user: User;
};
