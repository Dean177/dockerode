export type Version = { Index: number };

export type Meta = Version & {
  Version: Version,
  CreatedAt: string,
  UpdatedAt: string,
};

export type Annotations = {
  Name: string
  Labels: {
    [k: string]: string,
  }
};

export type Driver  = {
  Name: string,
  Options: { [k: string]: string },
};

export type TLSInfo = {
  TrustRoot: string,
  CertIssuerSubject: string,
  CertIssuerPublicKey: string,
};

export type PluginSpec = {
  Name: string,
  Remote: string,
  Privileges: Array<PluginPrivilege>,
  Disabled: boolean
};

export type PluginPrivilege = {
  Name: string,
  Description: string,
  Value: Array<string>,
};
