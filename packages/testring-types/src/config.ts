import { PluginConfig } from './plugin';

export type ConfigPluginDescriptor = string | [string, PluginConfig];

export interface IConfig {
    config: string,
    report: string,
    debug: boolean,
    silent: boolean,
    bail: boolean,
    workerLimit: number,
    retryCount: number,
    retryDelay: number,
    tests: string,
    httpThrottle: number,
    loggerLevel: number,
    envConfig?: string,
    plugins?: Array<ConfigPluginDescriptor>
}
