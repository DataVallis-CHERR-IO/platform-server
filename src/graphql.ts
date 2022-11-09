/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class WhereInput {
    projectId: number;
    mediaTypeId?: Nullable<number>;
    slug: string;
}

export class ProjectTypeInput {
    id: number;
    lkName: string;
}

export abstract class IMutation {
    abstract newProject(contractAddress: string, goal: number): boolean | Promise<boolean>;

    abstract createProjectMedia(projectId: number, mediaTypeId: number, name: string, path: string): boolean | Promise<boolean>;

    abstract createProject(title: string, excerpt: string, description: string, slug: string, image: string, contractAddress: string, goal: number, duration: number, projectTypes: ProjectTypeInput[]): Project | Promise<Project>;

    abstract subscribe(email: string): string | Promise<string>;

    abstract upload(title: string, extension: string, content: string, isObject?: Nullable<boolean>): string | Promise<string>;
}

export abstract class IQuery {
    abstract mediaTypes(): Nullable<MediaType>[] | Promise<Nullable<MediaType>[]>;

    abstract projectMedia(where: WhereInput): Nullable<Nullable<ProjectMedia>[]> | Promise<Nullable<Nullable<ProjectMedia>[]>>;

    abstract projectProjectTypes(where: WhereInput): Nullable<ProjectProjectType>[] | Promise<Nullable<ProjectProjectType>[]>;

    abstract projectTypes(): Nullable<ProjectType>[] | Promise<Nullable<ProjectType>[]>;

    abstract projects(skip?: Nullable<number>, take?: Nullable<number>): Nullable<Nullable<Project>[]> | Promise<Nullable<Nullable<Project>[]>>;

    abstract project(where: WhereInput): Nullable<Project> | Promise<Nullable<Project>>;
}

export class MediaType {
    id: number;
    lkName: string;
}

export class ProjectMedia {
    id: number;
    projectId?: Nullable<number>;
    mediaTypeId?: Nullable<number>;
    name?: Nullable<string>;
    path?: Nullable<string>;
    statusId?: Nullable<number>;
    createdAt?: Nullable<string>;
    updatedAt?: Nullable<string>;
}

export class ProjectProjectType {
    id: number;
    projectTypeId: number;
}

export class ProjectType {
    id: number;
    lkName: string;
}

export abstract class ISubscription {
    abstract projectCreated(): Project | Promise<Project>;
}

export class Project {
    id: number;
    title?: Nullable<string>;
    excerpt?: Nullable<string>;
    description?: Nullable<string>;
    slug?: Nullable<string>;
    image?: Nullable<string>;
    contractAddress?: Nullable<string>;
    goal?: Nullable<number>;
    duration?: Nullable<number>;
    projectTypes?: Nullable<Nullable<ProjectType>[]>;
    createdAt?: Nullable<string>;
    updatedAt?: Nullable<string>;
}

type Nullable<T> = T | null;
