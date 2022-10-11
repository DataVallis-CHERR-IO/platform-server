
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

    abstract campaigns(): Nullable<Nullable<Campaign>[]> | Promise<Nullable<Nullable<Campaign>[]>>;

    abstract campaign(slug?: Nullable<string>): Nullable<Campaign> | Promise<Nullable<Campaign>>;

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

export class Campaign {
    _id?: Nullable<string>;
    title?: Nullable<string>;
    description?: Nullable<string>;
    slug?: Nullable<string>;
    contractAddress?: Nullable<string>;
    image?: Nullable<string>;
    goal?: Nullable<number>;
    isHighlightedProject?: Nullable<boolean>;
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

export abstract class IMutation {
    abstract subscribe(email?: Nullable<string>): Nullable<boolean> | Promise<Nullable<boolean>>;
}

type Nullable<T> = T | null;
