import { Annotations, Meta } from './commonTypes';
import { Endpoint, EndpointSpec, NetworkAttachmentConfig } from './network';
import { TaskSpec } from './task';
import { TODO } from '../../todo';

export type ServiceInfo = Meta & {
  ID: string,
  Spec: ServiceSpec,
  PreviousSpec?: ServiceSpec,
  Endpoint: Endpoint,
  UpdateStatus?: TODO,
};

type ServiceSpec = Annotations & {
  TaskTemplate: TaskSpec,
  Mode: TODO,
  UpdateConfig: TODO
  RollbackConfig?: TODO
  Networks: Array<NetworkAttachmentConfig>
  EndpointSpec?: EndpointSpec
};
