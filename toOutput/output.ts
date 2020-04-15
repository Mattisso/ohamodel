import gql from 'graphql-tag';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};



export type Query = {
   __typename?: 'Query';
  getuser?: Maybe<User>;
  getusers?: Maybe<Array<Maybe<User>>>;
  getocompte?: Maybe<Ocompte>;
  getocomptes?: Maybe<Array<Maybe<Ocompte>>>;
  getoreference?: Maybe<OReference>;
  getoreferences?: Maybe<Array<Maybe<OReference>>>;
};


export type QueryGetuserArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryGetocompteArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryGetoreferenceArgs = {
  id?: Maybe<Scalars['ID']>;
};

export type User = {
   __typename?: 'User';
  id?: Maybe<Scalars['ID']>;
  username: Scalars['String'];
  role?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  loginAttempts?: Maybe<Scalars['Int']>;
  lockUntil?: Maybe<Scalars['Int']>;
};

export type Ocompte = {
   __typename?: 'Ocompte';
  id?: Maybe<Scalars['ID']>;
  CompteNumber?: Maybe<Scalars['String']>;
};

export type OReference = {
   __typename?: 'oReference';
  id?: Maybe<Scalars['ID']>;
  RefCode?: Maybe<Scalars['String']>;
  Description?: Maybe<Scalars['String']>;
  fullDescription?: Maybe<Scalars['String']>;
};

export type Mutation = {
   __typename?: 'Mutation';
  tocreateUser?: Maybe<User>;
};


export type MutationTocreateUserArgs = {
  username: Scalars['String'];
  role: Scalars['String'];
  password: Scalars['String'];
};

export type Subscription = {
   __typename?: 'subscription';
  toNewUser?: Maybe<User>;
};


