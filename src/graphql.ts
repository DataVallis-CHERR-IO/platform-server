
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

export abstract class IMutation {
    abstract newProject(contractAddress: string, goal: number): boolean | Promise<boolean>;

    abstract createProjectDetail(projectId: string, description: string, requirements?: Nullable<string>): ProjectDetail | Promise<ProjectDetail>;

    abstract createProjectMedia(projectId: string, type: string, title: string, format: string, content: string): boolean | Promise<boolean>;

    abstract createProject(title: string, excerpt: string, slug: string, image: string, contractAddress: string): Project | Promise<Project>;

    abstract subscribe(email: string): string | Promise<string>;

    abstract upload(title: string, extension: string, content: string, isObject?: Nullable<boolean>): string | Promise<string>;
}

export abstract class IQuery {
    abstract projectDetail(projectId: string): ProjectDetail | Promise<ProjectDetail>;

    abstract projectMedia(projectId: string, type?: Nullable<string>): Nullable<Nullable<ProjectMedia>[]> | Promise<Nullable<Nullable<ProjectMedia>[]>>;

    abstract projectTypes(): Nullable<Nullable<ProjectType>[]> | Promise<Nullable<Nullable<ProjectType>[]>>;

    abstract projects(sort?: Nullable<Sort>, skip?: Nullable<number>, limit?: Nullable<number>): Nullable<Nullable<Project>[]> | Promise<Nullable<Nullable<Project>[]>>;

    abstract project(slug: string): Nullable<Project> | Promise<Nullable<Project>>;
}

export class ProjectDetail {
    _id?: Nullable<string>;
    projectId?: Nullable<string>;
    description?: Nullable<string>;
    requirements?: Nullable<string>;
    createdAt?: Nullable<string>;
    updatedAt?: Nullable<string>;
}

export class ProjectMedia {
    _id?: Nullable<string>;
    projectId?: Nullable<string>;
    type?: Nullable<string>;
    title?: Nullable<string>;
    path?: Nullable<string>;
    format?: Nullable<string>;
    icon?: Nullable<string>;
    statusId?: Nullable<number>;
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
    abstract projectCreated(): Project | Promise<Project>;
}

export class Project {
    _id?: Nullable<string>;
    title?: Nullable<string>;
    excerpt?: Nullable<string>;
    slug?: Nullable<string>;
    image?: Nullable<string>;
    contractAddress?: Nullable<string>;
}

type Nullable<T> = T | null;
