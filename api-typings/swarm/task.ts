/// <reference path="../../dockerode.d.ts" />

import { Annotations, Driver, Meta, PluginSpec } from './commonTypes';
import { NetworkAttachment, NetworkAttachmentConfig } from './network';
import Platform = NodeJS.Platform;
import { TODO } from '../../todo';

export type TaskState =
  'new'
  | 'allocated'
  | 'pending'
  | 'assigned'
  | 'accepted'
  | 'preparing'
  | 'ready'
  | 'starting'
  | 'running'
  | 'complete'
  | 'shutdown'
  | 'failed'
  | 'rejected';

export type Task = Meta & Annotations & {
  ID: string,
  Spec: TaskSpec,
  ServiceID: string,
  Slot: number,
  NodeID: string,
  Status: TaskStatus,
  DesiredState: TaskState,
  NetworksAttachments: Array<NetworkAttachment>,
  GenericResources: Array<GenericResource>,
};

export type TaskSpec = {
  ContainerSpec?: TODO,
  PluginSpec?: PluginSpec,
  Resources?: ResourceRequirements,
  RestartPolicy?: RestartPolicy,
  Placement?: Placement,
  Networks: Array<NetworkAttachmentConfig>,
  LogDriver?: Driver,
  ForceUpdate: number,
  Runtime: TODO,
};

export type GenericResource = {
  NamedResourceSpec?: NamedGenericResource,
  DiscreteResourceSpec?: DiscreteGenericResource,
};

export type NamedGenericResource = {
  Kind: string,
  Value: string,
};

export type DiscreteGenericResource = {
  Kind: string,
  Value: number,
};

type ResourceRequirements  = {
  Limits?: Resources,
  Reservations?: Resources,
};

type Resources = {
  NanoCPUs: number,
  MemoryBytes: number,
  GenericResources: Array<GenericResource>,
};

export type RestartPolicy  = {
  Condition: RestartPolicyCondition,
  Delay: number,
  MaxAttempts?: number,
  Window: number,
};

export type TaskStatus = {
  Timestamp: string,
  State: TaskState,
  Message: string
  Err: string,
  ContainerStatus: ContainerStatus,
  PortStatus: {
    Ports: Array<TODO>,
  },
};

type Placement = {
  Constraints: Array<string>,
  Preferences: Array<PlacementPreference>,
  Platforms: Array<Platform>,
};

export type PlacementPreference = {
  Spread?: {
    SpreadDescriptor: string,
  },
};

export type RestartPolicyCondition = 'none' | 'on-failure' | 'any';

type ContainerStatus = {
  ContainerID: string,
  PID: number,
  ExitCode: number,
};


