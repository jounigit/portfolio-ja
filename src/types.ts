/* eslint-disable @typescript-eslint/ban-types */
export enum IRole {
    Editor = 'editor',
    Admin = 'admin'
}

export interface IUser {
    id: string;
    username: string;
    email: string;
    role: IRole;
    categories: Array<string>;
    albums: Array<string>;
    pictures: Array<string>;
}

export interface BaseModel {
    id: string;
    title: string;
    slug: string;
    content?: string;
}

export interface IArticle extends BaseModel {
  media: string;
  year?: number;
  journalist: string;
  file: string;
}

export interface ICv extends BaseModel {
  content: string;
}

export interface ICategory extends BaseModel {
    albums: Array<string>;
}

export type ICategoryInAlbum = Omit<ICategory, 'title' | 'content' | 'albums'>

export interface IAlbum extends BaseModel {
    year: number;
    info?: string;
    category?: ICategoryInAlbum;
    pictures: Array<string>;
}

// export interface IAlbumDetails extends BaseModel {
//     category?: string;
//     pictures: IPicture[]
// }

export interface IPicture extends BaseModel {
    year: number;
    image: string;
    thumb: string;
    landscape: string;
    publicID: string;
    publicIDThumb: string;
}

export type INewAlbum = Omit<IAlbum, 'id' | 'slug' | 'pictures'>
export type INewCategory = Omit<ICategory, 'id'>
export type ICategoryListItem = Omit<ICategory, 'content' | 'user' | 'albums'>
export type IArticleListItem = Omit<IArticle, 'id' | 'slug'>

// :::::::::::::::::::::: utils :::::::::::::::::::::::::::::::::::
// test not null typeguard
export function isNotNull
<TValueType>(value: TValueType | null): value is TValueType {
  return value !== null
}

export function isArray<T>(value: T | undefined) : value is T {
  if (!Array.isArray(value)) {
    return false
  }
  return true
}

export function
hasOwnProperty<X extends {}, Y extends PropertyKey>(obj: X, prop: Y)
: obj is X & Record<Y, unknown> {
  // eslint-disable-next-line no-prototype-builtins
  return obj.hasOwnProperty(prop)
}

export function hasArrOfObjWithProperty<A extends unknown[]>(value: A)
: value is A {
  if (
    value.some((v) => (
      v !== null && typeof v === 'object' && hasOwnProperty(v, 'year')))
  ) {
    return true
  }
  return false
}

export function isPictureArray(value : unknown) : value is IPicture[] {
  if (!Array.isArray(value)) {
    return false
  }

  if (value.some((v) => typeof v !== 'object')) {
    return false
  }
  return true
}
