
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export abstract class IQuery {
    abstract campaignDetail(campaignId?: Nullable<string>): Nullable<CampaignDetail> | Promise<Nullable<CampaignDetail>>;

    abstract campaignDocuments(campaignId?: Nullable<string>): Nullable<Nullable<CampaignDocument>[]> | Promise<Nullable<Nullable<CampaignDocument>[]>>;

    abstract campaignImages(campaignId?: Nullable<string>): Nullable<Nullable<CampaignImage>[]> | Promise<Nullable<Nullable<CampaignImage>[]>>;

    abstract projectTypes(): Nullable<Nullable<ProjectType>[]> | Promise<Nullable<Nullable<ProjectType>[]>>;

    abstract projects(): Nullable<Nullable<Project>[]> | Promise<Nullable<Nullable<Project>[]>>;

    abstract project(slug?: Nullable<string>): Nullable<Project> | Promise<Nullable<Project>>;

    abstract subscribers(): Nullable<Nullable<Subscriber>[]> | Promise<Nullable<Nullable<Subscriber>[]>>;
}

export class CampaignDetail {
    _id?: Nullable<string>;
    campaignId?: Nullable<string>;
    requirements?: Nullable<string>;
    description?: Nullable<string>;
    createdAt?: Nullable<string>;
    updatedAt?: Nullable<string>;
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

export class ProjectType {
    _id?: Nullable<string>;
    name?: Nullable<string>;
    lkName?: Nullable<string>;
    statusId?: Nullable<number>;
}

export abstract class IMutation {
    abstract createProject(title: string, excerpt: string, slug: string, goal: number, image: string, contractAddress: string, statusId?: Nullable<number>, startedAt?: Nullable<string>): Nullable<Project> | Promise<Nullable<Project>>;

    abstract subscribe(email?: Nullable<string>): Nullable<boolean> | Promise<Nullable<boolean>>;
}

export class Project {
    _id?: Nullable<string>;
    title?: Nullable<string>;
    excerpt?: Nullable<string>;
    slug?: Nullable<string>;
    contractAddress?: Nullable<string>;
    image?: Nullable<string>;
    goal?: Nullable<number>;
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
