
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum OrderDirection {
    ASC = "ASC",
    DESC = "DESC"
}

export class Sort {
    orderBy?: Nullable<string>;
    orderDirection?: Nullable<OrderDirection>;
}

export abstract class IQuery {
    abstract campaignDocuments(campaignId?: Nullable<string>): Nullable<Nullable<CampaignDocument>[]> | Promise<Nullable<Nullable<CampaignDocument>[]>>;

    abstract campaignImages(campaignId?: Nullable<string>): Nullable<Nullable<CampaignImage>[]> | Promise<Nullable<Nullable<CampaignImage>[]>>;

    abstract projectDetail(projectId: string): ProjectDetail | Promise<ProjectDetail>;

    abstract projectTypes(): Nullable<Nullable<ProjectType>[]> | Promise<Nullable<Nullable<ProjectType>[]>>;

    abstract projects(sort?: Nullable<Sort>, skip?: Nullable<number>, limit?: Nullable<number>): Nullable<Nullable<Project>[]> | Promise<Nullable<Nullable<Project>[]>>;

    abstract project(slug: string): Nullable<Project> | Promise<Nullable<Project>>;

    abstract subscribers(): Nullable<Nullable<Subscriber>[]> | Promise<Nullable<Nullable<Subscriber>[]>>;
}

export class CampaignDocument {
    _id?: Nullable<string>;
    campaignId?: Nullable<string>;
    title?: Nullable<string>;
    path?: Nullable<string>;
    icon?: Nullable<string>;
    format?: Nullable<string>;
    statusId?: Nullable<number>;
    createdAt?: Nullable<string>;
    updatedAt?: Nullable<string>;
    deletedAt?: Nullable<string>;
}

export class CampaignImage {
    _id?: Nullable<string>;
    campaignId?: Nullable<string>;
    title?: Nullable<string>;
    description?: Nullable<string>;
    path?: Nullable<string>;
    image?: Nullable<string>;
    statusId?: Nullable<number>;
    createdAt?: Nullable<string>;
    updatedAt?: Nullable<string>;
    deletedAt?: Nullable<string>;
}

export abstract class IMutation {
    abstract createProjectDetail(projectId: string, description: string, requirements?: Nullable<string>): ProjectDetail | Promise<ProjectDetail>;

    abstract createProject(title: string, excerpt: string, slug: string, goal: number, image: string, contractAddress: string, statusId?: Nullable<number>, startedAt?: Nullable<string>): Project | Promise<Project>;

    abstract subscribe(email?: Nullable<string>): Nullable<boolean> | Promise<Nullable<boolean>>;
}

export class ProjectDetail {
    _id?: Nullable<string>;
    projectId?: Nullable<string>;
    description?: Nullable<string>;
    requirements?: Nullable<string>;
    createdAt?: Nullable<string>;
    updatedAt?: Nullable<string>;
}

export class ProjectType {
    _id?: Nullable<string>;
    name?: Nullable<string>;
    lkName?: Nullable<string>;
    statusId?: Nullable<number>;
}

export abstract class ISubscription {
    abstract projectCreated(): Nullable<Project> | Promise<Nullable<Project>>;
}

export class Project {
    _id?: Nullable<string>;
    title?: Nullable<string>;
    excerpt?: Nullable<string>;
    slug?: Nullable<string>;
    image?: Nullable<string>;
    goal?: Nullable<number>;
    contractAddress?: Nullable<string>;
    statusId?: Nullable<number>;
    startedAt?: Nullable<string>;
    endedAt?: Nullable<string>;
    createdAt?: Nullable<string>;
    updatedAt?: Nullable<string>;
}

export class Subscriber {
    email?: Nullable<string>;
    statusId?: Nullable<number>;
    subscribedAt?: Nullable<string>;
}

type Nullable<T> = T | null;
