/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *     compliant with the 'date-time' format outlined in section 5.6 of
   *     the RFC 3339 profile of the ISO 8601 standard for representation
   *     of dates and times using the Gregorian calendar.
   */
  DateTime: any;
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: any;
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: any;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
  transform?: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']>;
  contentType_contains?: InputMaybe<Scalars['String']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentType_not?: InputMaybe<Scalars['String']>;
  contentType_not_contains?: InputMaybe<Scalars['String']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName?: InputMaybe<Scalars['String']>;
  fileName_contains?: InputMaybe<Scalars['String']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName_not?: InputMaybe<Scalars['String']>;
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  height?: InputMaybe<Scalars['Int']>;
  height_exists?: InputMaybe<Scalars['Boolean']>;
  height_gt?: InputMaybe<Scalars['Int']>;
  height_gte?: InputMaybe<Scalars['Int']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  height_lt?: InputMaybe<Scalars['Int']>;
  height_lte?: InputMaybe<Scalars['Int']>;
  height_not?: InputMaybe<Scalars['Int']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size?: InputMaybe<Scalars['Int']>;
  size_exists?: InputMaybe<Scalars['Boolean']>;
  size_gt?: InputMaybe<Scalars['Int']>;
  size_gte?: InputMaybe<Scalars['Int']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size_lt?: InputMaybe<Scalars['Int']>;
  size_lte?: InputMaybe<Scalars['Int']>;
  size_not?: InputMaybe<Scalars['Int']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  width?: InputMaybe<Scalars['Int']>;
  width_exists?: InputMaybe<Scalars['Boolean']>;
  width_gt?: InputMaybe<Scalars['Int']>;
  width_gte?: InputMaybe<Scalars['Int']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  width_lt?: InputMaybe<Scalars['Int']>;
  width_lte?: InputMaybe<Scalars['Int']>;
  width_not?: InputMaybe<Scalars['Int']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  authorCollection?: Maybe<AuthorCollection>;
  blogPostCollection?: Maybe<BlogPostCollection>;
  entryCollection?: Maybe<EntryCollection>;
  personCollection?: Maybe<PersonCollection>;
  postCollection?: Maybe<PostCollection>;
};


export type AssetLinkingCollectionsAuthorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsPersonCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/zokhru8rmbo6/content_types/author) */
export type Author = Entry & {
  __typename?: 'Author';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<AuthorLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Asset>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/zokhru8rmbo6/content_types/author) */
export type AuthorLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/zokhru8rmbo6/content_types/author) */
export type AuthorNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/zokhru8rmbo6/content_types/author) */
export type AuthorPictureArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type AuthorCollection = {
  __typename?: 'AuthorCollection';
  items: Array<Maybe<Author>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type AuthorFilter = {
  AND?: InputMaybe<Array<InputMaybe<AuthorFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AuthorFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  picture_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type AuthorLinkingCollections = {
  __typename?: 'AuthorLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  postCollection?: Maybe<PostCollection>;
};


export type AuthorLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AuthorLinkingCollectionsPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum AuthorOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/zokhru8rmbo6/content_types/blogPost) */
export type BlogPost = Entry & {
  __typename?: 'BlogPost';
  author?: Maybe<Person>;
  body?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  heroImage?: Maybe<Asset>;
  linkedFrom?: Maybe<BlogPostLinkingCollections>;
  publishDate?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  sys: Sys;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  title?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/zokhru8rmbo6/content_types/blogPost) */
export type BlogPostAuthorArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/zokhru8rmbo6/content_types/blogPost) */
export type BlogPostBodyArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/zokhru8rmbo6/content_types/blogPost) */
export type BlogPostDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/zokhru8rmbo6/content_types/blogPost) */
export type BlogPostHeroImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/zokhru8rmbo6/content_types/blogPost) */
export type BlogPostLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/zokhru8rmbo6/content_types/blogPost) */
export type BlogPostPublishDateArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/zokhru8rmbo6/content_types/blogPost) */
export type BlogPostSlugArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/zokhru8rmbo6/content_types/blogPost) */
export type BlogPostTagsArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/zokhru8rmbo6/content_types/blogPost) */
export type BlogPostTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type BlogPostCollection = {
  __typename?: 'BlogPostCollection';
  items: Array<Maybe<BlogPost>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type BlogPostFilter = {
  AND?: InputMaybe<Array<InputMaybe<BlogPostFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<BlogPostFilter>>>;
  author?: InputMaybe<CfPersonNestedFilter>;
  author_exists?: InputMaybe<Scalars['Boolean']>;
  body?: InputMaybe<Scalars['String']>;
  body_contains?: InputMaybe<Scalars['String']>;
  body_exists?: InputMaybe<Scalars['Boolean']>;
  body_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  body_not?: InputMaybe<Scalars['String']>;
  body_not_contains?: InputMaybe<Scalars['String']>;
  body_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heroImage_exists?: InputMaybe<Scalars['Boolean']>;
  publishDate?: InputMaybe<Scalars['DateTime']>;
  publishDate_exists?: InputMaybe<Scalars['Boolean']>;
  publishDate_gt?: InputMaybe<Scalars['DateTime']>;
  publishDate_gte?: InputMaybe<Scalars['DateTime']>;
  publishDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishDate_lt?: InputMaybe<Scalars['DateTime']>;
  publishDate_lte?: InputMaybe<Scalars['DateTime']>;
  publishDate_not?: InputMaybe<Scalars['DateTime']>;
  publishDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  tags_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tags_exists?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type BlogPostLinkingCollections = {
  __typename?: 'BlogPostLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type BlogPostLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum BlogPostOrder {
  PublishDateAsc = 'publishDate_ASC',
  PublishDateDesc = 'publishDate_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']>;
};

/** [See type definition](https://app.contentful.com/spaces/zokhru8rmbo6/content_types/person) */
export type Person = Entry & {
  __typename?: 'Person';
  company?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  email?: Maybe<Scalars['String']>;
  facebook?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  image?: Maybe<Asset>;
  linkedFrom?: Maybe<PersonLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  shortBio?: Maybe<Scalars['String']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/zokhru8rmbo6/content_types/person) */
export type PersonCompanyArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/zokhru8rmbo6/content_types/person) */
export type PersonEmailArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/zokhru8rmbo6/content_types/person) */
export type PersonFacebookArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/zokhru8rmbo6/content_types/person) */
export type PersonGithubArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/zokhru8rmbo6/content_types/person) */
export type PersonImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/zokhru8rmbo6/content_types/person) */
export type PersonLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/zokhru8rmbo6/content_types/person) */
export type PersonNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/zokhru8rmbo6/content_types/person) */
export type PersonPhoneArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/zokhru8rmbo6/content_types/person) */
export type PersonShortBioArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/zokhru8rmbo6/content_types/person) */
export type PersonTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/zokhru8rmbo6/content_types/person) */
export type PersonTwitterArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type PersonCollection = {
  __typename?: 'PersonCollection';
  items: Array<Maybe<Person>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PersonFilter = {
  AND?: InputMaybe<Array<InputMaybe<PersonFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PersonFilter>>>;
  company?: InputMaybe<Scalars['String']>;
  company_contains?: InputMaybe<Scalars['String']>;
  company_exists?: InputMaybe<Scalars['Boolean']>;
  company_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  company_not?: InputMaybe<Scalars['String']>;
  company_not_contains?: InputMaybe<Scalars['String']>;
  company_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  email?: InputMaybe<Scalars['String']>;
  email_contains?: InputMaybe<Scalars['String']>;
  email_exists?: InputMaybe<Scalars['Boolean']>;
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email_not?: InputMaybe<Scalars['String']>;
  email_not_contains?: InputMaybe<Scalars['String']>;
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  facebook?: InputMaybe<Scalars['String']>;
  facebook_contains?: InputMaybe<Scalars['String']>;
  facebook_exists?: InputMaybe<Scalars['Boolean']>;
  facebook_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  facebook_not?: InputMaybe<Scalars['String']>;
  facebook_not_contains?: InputMaybe<Scalars['String']>;
  facebook_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  github?: InputMaybe<Scalars['String']>;
  github_contains?: InputMaybe<Scalars['String']>;
  github_exists?: InputMaybe<Scalars['Boolean']>;
  github_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  github_not?: InputMaybe<Scalars['String']>;
  github_not_contains?: InputMaybe<Scalars['String']>;
  github_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phone?: InputMaybe<Scalars['String']>;
  phone_contains?: InputMaybe<Scalars['String']>;
  phone_exists?: InputMaybe<Scalars['Boolean']>;
  phone_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phone_not?: InputMaybe<Scalars['String']>;
  phone_not_contains?: InputMaybe<Scalars['String']>;
  phone_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shortBio?: InputMaybe<Scalars['String']>;
  shortBio_contains?: InputMaybe<Scalars['String']>;
  shortBio_exists?: InputMaybe<Scalars['Boolean']>;
  shortBio_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shortBio_not?: InputMaybe<Scalars['String']>;
  shortBio_not_contains?: InputMaybe<Scalars['String']>;
  shortBio_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  twitter?: InputMaybe<Scalars['String']>;
  twitter_contains?: InputMaybe<Scalars['String']>;
  twitter_exists?: InputMaybe<Scalars['Boolean']>;
  twitter_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  twitter_not?: InputMaybe<Scalars['String']>;
  twitter_not_contains?: InputMaybe<Scalars['String']>;
  twitter_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PersonLinkingCollections = {
  __typename?: 'PersonLinkingCollections';
  blogPostCollection?: Maybe<BlogPostCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type PersonLinkingCollectionsBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PersonLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum PersonOrder {
  CompanyAsc = 'company_ASC',
  CompanyDesc = 'company_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  FacebookAsc = 'facebook_ASC',
  FacebookDesc = 'facebook_DESC',
  GithubAsc = 'github_ASC',
  GithubDesc = 'github_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PhoneAsc = 'phone_ASC',
  PhoneDesc = 'phone_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TwitterAsc = 'twitter_ASC',
  TwitterDesc = 'twitter_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/zokhru8rmbo6/content_types/post) */
export type Post = Entry & {
  __typename?: 'Post';
  author?: Maybe<Author>;
  content?: Maybe<PostContent>;
  contentRelationsCollection?: Maybe<PostContentRelationsCollection>;
  contentfulMetadata: ContentfulMetadata;
  coverImage?: Maybe<Asset>;
  date?: Maybe<Scalars['DateTime']>;
  excerpt?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<PostLinkingCollections>;
  slug?: Maybe<Scalars['String']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/zokhru8rmbo6/content_types/post) */
export type PostAuthorArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/zokhru8rmbo6/content_types/post) */
export type PostContentArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/zokhru8rmbo6/content_types/post) */
export type PostContentRelationsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** [See type definition](https://app.contentful.com/spaces/zokhru8rmbo6/content_types/post) */
export type PostCoverImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/zokhru8rmbo6/content_types/post) */
export type PostDateArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/zokhru8rmbo6/content_types/post) */
export type PostExcerptArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/zokhru8rmbo6/content_types/post) */
export type PostLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/zokhru8rmbo6/content_types/post) */
export type PostSlugArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/zokhru8rmbo6/content_types/post) */
export type PostTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type PostCollection = {
  __typename?: 'PostCollection';
  items: Array<Maybe<Post>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PostContent = {
  __typename?: 'PostContent';
  json: Scalars['JSON'];
  links: PostContentLinks;
};

export type PostContentAssets = {
  __typename?: 'PostContentAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type PostContentEntries = {
  __typename?: 'PostContentEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type PostContentLinks = {
  __typename?: 'PostContentLinks';
  assets: PostContentAssets;
  entries: PostContentEntries;
};

export type PostContentRelationsCollection = {
  __typename?: 'PostContentRelationsCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PostFilter = {
  AND?: InputMaybe<Array<InputMaybe<PostFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PostFilter>>>;
  author?: InputMaybe<CfAuthorNestedFilter>;
  author_exists?: InputMaybe<Scalars['Boolean']>;
  contentRelationsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  content_contains?: InputMaybe<Scalars['String']>;
  content_exists?: InputMaybe<Scalars['Boolean']>;
  content_not_contains?: InputMaybe<Scalars['String']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  coverImage_exists?: InputMaybe<Scalars['Boolean']>;
  date?: InputMaybe<Scalars['DateTime']>;
  date_exists?: InputMaybe<Scalars['Boolean']>;
  date_gt?: InputMaybe<Scalars['DateTime']>;
  date_gte?: InputMaybe<Scalars['DateTime']>;
  date_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  date_lt?: InputMaybe<Scalars['DateTime']>;
  date_lte?: InputMaybe<Scalars['DateTime']>;
  date_not?: InputMaybe<Scalars['DateTime']>;
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  excerpt?: InputMaybe<Scalars['String']>;
  excerpt_contains?: InputMaybe<Scalars['String']>;
  excerpt_exists?: InputMaybe<Scalars['Boolean']>;
  excerpt_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  excerpt_not?: InputMaybe<Scalars['String']>;
  excerpt_not_contains?: InputMaybe<Scalars['String']>;
  excerpt_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PostLinkingCollections = {
  __typename?: 'PostLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type PostLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum PostOrder {
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  ExcerptAsc = 'excerpt_ASC',
  ExcerptDesc = 'excerpt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type Query = {
  __typename?: 'Query';
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  author?: Maybe<Author>;
  authorCollection?: Maybe<AuthorCollection>;
  blogPost?: Maybe<BlogPost>;
  blogPostCollection?: Maybe<BlogPostCollection>;
  entryCollection?: Maybe<EntryCollection>;
  person?: Maybe<Person>;
  personCollection?: Maybe<PersonCollection>;
  post?: Maybe<Post>;
  postCollection?: Maybe<PostCollection>;
};


export type QueryAssetArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryAuthorArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAuthorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AuthorOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AuthorFilter>;
};


export type QueryBlogPostArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<BlogPostOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BlogPostFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryPersonArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPersonCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PersonOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PersonFilter>;
};


export type QueryPostArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PostOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostFilter>;
};

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String'];
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  publishedVersion?: Maybe<Scalars['Int']>;
  spaceId: Scalars['String'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  id?: InputMaybe<Scalars['String']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_exists?: InputMaybe<Scalars['Boolean']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_not?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type CfAuthorNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfAuthorNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfAuthorNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  picture_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type CfPersonNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfPersonNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfPersonNestedFilter>>>;
  company?: InputMaybe<Scalars['String']>;
  company_contains?: InputMaybe<Scalars['String']>;
  company_exists?: InputMaybe<Scalars['Boolean']>;
  company_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  company_not?: InputMaybe<Scalars['String']>;
  company_not_contains?: InputMaybe<Scalars['String']>;
  company_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  email?: InputMaybe<Scalars['String']>;
  email_contains?: InputMaybe<Scalars['String']>;
  email_exists?: InputMaybe<Scalars['Boolean']>;
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email_not?: InputMaybe<Scalars['String']>;
  email_not_contains?: InputMaybe<Scalars['String']>;
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  facebook?: InputMaybe<Scalars['String']>;
  facebook_contains?: InputMaybe<Scalars['String']>;
  facebook_exists?: InputMaybe<Scalars['Boolean']>;
  facebook_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  facebook_not?: InputMaybe<Scalars['String']>;
  facebook_not_contains?: InputMaybe<Scalars['String']>;
  facebook_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  github?: InputMaybe<Scalars['String']>;
  github_contains?: InputMaybe<Scalars['String']>;
  github_exists?: InputMaybe<Scalars['Boolean']>;
  github_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  github_not?: InputMaybe<Scalars['String']>;
  github_not_contains?: InputMaybe<Scalars['String']>;
  github_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phone?: InputMaybe<Scalars['String']>;
  phone_contains?: InputMaybe<Scalars['String']>;
  phone_exists?: InputMaybe<Scalars['Boolean']>;
  phone_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phone_not?: InputMaybe<Scalars['String']>;
  phone_not_contains?: InputMaybe<Scalars['String']>;
  phone_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shortBio?: InputMaybe<Scalars['String']>;
  shortBio_contains?: InputMaybe<Scalars['String']>;
  shortBio_exists?: InputMaybe<Scalars['Boolean']>;
  shortBio_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shortBio_not?: InputMaybe<Scalars['String']>;
  shortBio_not_contains?: InputMaybe<Scalars['String']>;
  shortBio_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  twitter?: InputMaybe<Scalars['String']>;
  twitter_contains?: InputMaybe<Scalars['String']>;
  twitter_exists?: InputMaybe<Scalars['Boolean']>;
  twitter_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  twitter_not?: InputMaybe<Scalars['String']>;
  twitter_not_contains?: InputMaybe<Scalars['String']>;
  twitter_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type HeroPostItemFragment = { __typename?: 'BlogPost', slug?: string | null, title?: string | null, publishDate?: any | null, heroImage?: { __typename?: 'Asset', url?: string | null } | null, author?: { __typename?: 'Person', name?: string | null, image?: { __typename?: 'Asset', url?: string | null } | null } | null } & { ' $fragmentName'?: 'HeroPostItemFragment' };

export type AllBlogPostQueryVariables = Exact<{ [key: string]: never; }>;


export type AllBlogPostQuery = { __typename?: 'Query', blogPostCollection?: { __typename?: 'BlogPostCollection', items: Array<(
      { __typename?: 'BlogPost' }
      & { ' $fragmentRefs'?: { 'HeroPostItemFragment': HeroPostItemFragment } }
    ) | null> } | null };

export type GetBlogPostBySlugQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
}>;


export type GetBlogPostBySlugQuery = { __typename?: 'Query', blogPostCollection?: { __typename?: 'BlogPostCollection', items: Array<(
      { __typename?: 'BlogPost' }
      & { ' $fragmentRefs'?: { 'HeroPostItemFragment': HeroPostItemFragment } }
    ) | null> } | null };

export const HeroPostItemFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroPostItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BlogPost"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"heroImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"publishDate"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]} as unknown as DocumentNode<HeroPostItemFragment, unknown>;
export const AllBlogPostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllBlogPost"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blogPostCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroPostItem"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroPostItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BlogPost"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"heroImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"publishDate"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]} as unknown as DocumentNode<AllBlogPostQuery, AllBlogPostQueryVariables>;
export const GetBlogPostBySlugDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetBlogPostBySlug"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blogPostCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroPostItem"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroPostItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BlogPost"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"heroImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"publishDate"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]} as unknown as DocumentNode<GetBlogPostBySlugQuery, GetBlogPostBySlugQueryVariables>;