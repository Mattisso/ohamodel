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
  getnstbalance?: Maybe<NstBalance>;
  getnstbalances?: Maybe<Array<Maybe<NstBalance>>>;
  getnstbalanceinput?: Maybe<NstBalanceInput>;
  getnstbalanceinputs?: Maybe<Array<Maybe<NstBalanceInput>>>;
  getnttbalance?: Maybe<NttBalance>;
  getnttbalances?: Maybe<Array<Maybe<NttBalance>>>;
  getnttcomptebalance?: Maybe<NttCompteBalance>;
  getnttcomptebalances?: Maybe<Array<Maybe<NttCompteBalance>>>;
  getnttcomptebalancedetail?: Maybe<NttCompteBalanceDetail>;
  getnttcomptebalancedetails?: Maybe<Array<Maybe<NttCompteBalanceDetail>>>;
  getocompte?: Maybe<Ocompte>;
  getocomptes?: Maybe<Array<Maybe<Ocompte>>>;
  getocomptereference?: Maybe<OcompteReference>;
  getocomptereferences?: Maybe<Array<Maybe<OcompteReference>>>;
  getoexerccompta?: Maybe<OExercCompta>;
  getoexerccomptas?: Maybe<Array<Maybe<OExercCompta>>>;
  getoexercice?: Maybe<OExercice>;
  getoexercices?: Maybe<Array<Maybe<OExercice>>>;
  getolevel?: Maybe<Olevel>;
  getolevels?: Maybe<Array<Maybe<Olevel>>>;
  getoreference?: Maybe<OReference>;
  getoreferences?: Maybe<Array<Maybe<OReference>>>;
  getoreportdetail?: Maybe<OReportDetail>;
  getoreportdetails?: Maybe<Array<Maybe<OReportDetail>>>;
  getoreportheader?: Maybe<OReportHeader>;
  getoreportheaders?: Maybe<Array<Maybe<OReportHeader>>>;
  getostableauposte?: Maybe<OStableauPoste>;
  getostableaupostes?: Maybe<Array<Maybe<OStableauPoste>>>;
  getostblarea?: Maybe<OStblArea>;
  getostblareas?: Maybe<Array<Maybe<OStblArea>>>;
  getotableauposte?: Maybe<OTableauPoste>;
  getotableaupostes?: Maybe<Array<Maybe<OTableauPoste>>>;
  getuser?: Maybe<User>;
  getusers?: Maybe<Array<Maybe<User>>>;
};


export type QueryGetnstbalanceArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryGetnstbalanceinputArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryGetnttbalanceArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryGetnttcomptebalanceArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryGetnttcomptebalancedetailArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryGetocompteArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryGetocomptereferenceArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryGetoexerccomptaArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryGetoexerciceArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryGetolevelArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryGetoreferenceArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryGetoreportdetailArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryGetoreportheaderArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryGetostableauposteArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryGetostblareaArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryGetotableauposteArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryGetuserArgs = {
  id?: Maybe<Scalars['ID']>;
};

export type NstBalance = {
   __typename?: 'nstBalance';
  id?: Maybe<Scalars['ID']>;
  SoldeCredit?: Maybe<Scalars['Int']>;
  SoldeDebit?: Maybe<Scalars['Int']>;
  NumCompte?: Maybe<Scalars['String']>;
  IntitulCompte?: Maybe<Scalars['String']>;
  OcompteKey?: Maybe<Scalars['String']>;
  OreferenceKey?: Maybe<Scalars['String']>;
  OtableauposteKey?: Maybe<Scalars['String']>;
  OexercComptaKey?: Maybe<Scalars['String']>;
};

export type NstBalanceInput = {
   __typename?: 'nstBalanceInput';
  id?: Maybe<Scalars['ID']>;
  SoldeDebit?: Maybe<Scalars['Int']>;
  CompteNumber?: Maybe<Scalars['String']>;
  SoldeCredit?: Maybe<Scalars['Int']>;
  IntitulCompte?: Maybe<Scalars['String']>;
  NumCompte?: Maybe<Scalars['String']>;
};

export type NttBalance = {
   __typename?: 'nttBalance';
  id?: Maybe<Scalars['ID']>;
  SoldeCredit?: Maybe<Scalars['Int']>;
  SoldeDebit?: Maybe<Scalars['Int']>;
  NumCompte?: Maybe<Scalars['String']>;
  IntitulCompte?: Maybe<Scalars['String']>;
  OcompteKey?: Maybe<Scalars['String']>;
  OreferenceKey?: Maybe<Scalars['String']>;
  OtableauposteKey?: Maybe<Scalars['String']>;
  OexercComptaKey?: Maybe<Scalars['String']>;
};

export type NttCompteBalance = {
   __typename?: 'nttCompteBalance';
  id?: Maybe<Scalars['ID']>;
  OexercComptaKey?: Maybe<Scalars['String']>;
  OtableauposteKey?: Maybe<Scalars['String']>;
  OreferenceKey?: Maybe<Scalars['String']>;
  totalSoldeDebit?: Maybe<Scalars['Int']>;
  totalSoldeCredit?: Maybe<Scalars['Int']>;
  TotalAmortissment?: Maybe<Scalars['Int']>;
  TotalProvision?: Maybe<Scalars['Int']>;
  amntNet?: Maybe<Scalars['Int']>;
  nttcomptebalancedetails?: Maybe<Scalars['String']>;
};

export type NttCompteBalanceDetail = {
   __typename?: 'nttCompteBalanceDetail';
  id?: Maybe<Scalars['ID']>;
  nttcomptebalanceKey?: Maybe<Scalars['String']>;
  NumCompte?: Maybe<Scalars['String']>;
  IntitulCompte?: Maybe<Scalars['String']>;
  SoldeDebit?: Maybe<Scalars['Int']>;
  SoldeCredit?: Maybe<Scalars['Int']>;
  AmortAmnt?: Maybe<Scalars['Int']>;
  ProvisAmnt?: Maybe<Scalars['Int']>;
  NetAmnt?: Maybe<Scalars['Int']>;
};

export type Ocompte = {
   __typename?: 'Ocompte';
  id?: Maybe<Scalars['ID']>;
  CompteNumber?: Maybe<Scalars['String']>;
};

export type OcompteReference = {
   __typename?: 'OcompteReference';
  id?: Maybe<Scalars['ID']>;
  OcompteKey?: Maybe<Scalars['String']>;
  OstblareaKey?: Maybe<Scalars['String']>;
  OreferenceKey?: Maybe<Scalars['String']>;
  OtableauposteKey?: Maybe<Scalars['String']>;
  OstableauposteKey?: Maybe<Scalars['String']>;
  Exception?: Maybe<Scalars['Boolean']>;
  Taux?: Maybe<Scalars['Float']>;
};

export type OExercCompta = {
   __typename?: 'oExercCompta';
  id?: Maybe<Scalars['ID']>;
  DateDebut?: Maybe<Scalars['String']>;
  Cloture?: Maybe<Scalars['Boolean']>;
  Datefin?: Maybe<Scalars['String']>;
  oExercComptaId?: Maybe<Scalars['String']>;
};

export type OExercice = {
   __typename?: 'oExercice';
  id?: Maybe<Scalars['ID']>;
  oExerciceEncour?: Maybe<Scalars['String']>;
  ExercicePrev?: Maybe<Scalars['String']>;
  OexercComptaPrevKey?: Maybe<Scalars['String']>;
  OexercComptaEncourKey?: Maybe<Scalars['String']>;
};

export type Olevel = {
   __typename?: 'Olevel';
  id?: Maybe<Scalars['ID']>;
  olevelNum?: Maybe<Scalars['String']>;
  olevelDescption?: Maybe<Scalars['String']>;
};

export type OReference = {
   __typename?: 'oReference';
  id?: Maybe<Scalars['ID']>;
  RefCode?: Maybe<Scalars['String']>;
  Description?: Maybe<Scalars['String']>;
  fullDescription?: Maybe<Scalars['String']>;
};

export type OReportDetail = {
   __typename?: 'oReportDetail';
  id?: Maybe<Scalars['ID']>;
  OtableauposteKey?: Maybe<Scalars['String']>;
  OreferenceKey?: Maybe<Scalars['String']>;
  olevelKey?: Maybe<Scalars['String']>;
  SortOrder?: Maybe<Scalars['Int']>;
};

export type OReportHeader = {
   __typename?: 'oReportHeader';
  id?: Maybe<Scalars['ID']>;
  OtableauposteKey?: Maybe<Scalars['String']>;
  OreferenceKey?: Maybe<Scalars['String']>;
  SortOrderH?: Maybe<Scalars['Int']>;
};

export type OStableauPoste = {
   __typename?: 'oStableauPoste';
  id?: Maybe<Scalars['ID']>;
  StableauName?: Maybe<Scalars['String']>;
  StbleauLongName?: Maybe<Scalars['String']>;
  OtableauposteKey?: Maybe<Scalars['String']>;
  ostblareas?: Maybe<Scalars['String']>;
};

export type OStblArea = {
   __typename?: 'oStblArea';
  id?: Maybe<Scalars['ID']>;
  AreaShortName?: Maybe<Scalars['String']>;
  AreaLongName?: Maybe<Scalars['String']>;
  ocomptes?: Maybe<Scalars['String']>;
};

export type OTableauPoste = {
   __typename?: 'oTableauPoste';
  id?: Maybe<Scalars['ID']>;
  TableauName?: Maybe<Scalars['String']>;
  tableauLongName?: Maybe<Scalars['String']>;
  ostableaupostes?: Maybe<Scalars['String']>;
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

export type Mutation = {
   __typename?: 'Mutation';
  toCreateNstBalance?: Maybe<NstBalance>;
  toUpdateNstBalance?: Maybe<NstBalance>;
  toDeleteNstBalance?: Maybe<NstBalance>;
};

export type Subscription = {
   __typename?: 'subscription';
  toNewUser?: Maybe<User>;
};


