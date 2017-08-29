import { Annotations, Meta } from './commonTypes';

export type Endpoint = {
  Spec: EndpointSpec,
  Ports: Array<PortConfig>,
  VirtualIPs: Array<EndpointVirtualIP>,
};

export type EndpointSpec = {
  Mode: ResolutionMode
  Ports: Array<PortConfig>
};

type ResolutionMode = 'vip' | 'dnsrr';

type PortConfig = {
  Name: string,
  Protocol: PortConfigProtocol,
  TargetPort: number,
  PublishedPort: number,
};

type PortConfigProtocol = 'tcp' | 'udp';

type EndpointVirtualIP = {
  NetworkID: string,
  Addr: string,
};

type Network = Meta & {
  ID: string,
  Spec: NetworkSpec,
  DriverState: Driver,
  IPAMOptions?: IPAMOptions,
};

type NetworkSpec = Annotations & {
  DriverConfiguration?: Driver,
  IPv6Enabled: boolean,
  Internal: boolean,
  Attachable: boolean,
  IPAMOptions?: IPAMOptions,
};

export type NetworkAttachmentConfig = {
  Target: string,
  Aliases: Array<string>,
};

export type NetworkAttachment = {
  Network: Network,
  Addresses: Array<string>,
};

type IPAMOptions = {
  Driver: Driver,
  Configs: Array<IPAMConfig>,
};

type IPAMConfig = {
  Subnet: string,
  Range: string,
  Gateway: string,
};

type Driver = {
  Name: string,
  Options: { [k: string]: string },
};
