// This file is generated by scripts/generate-graphql-types.ts
// Do not edit this file directly

import * as ResponseTypes from './responseTypes';

export type Query =
  | 'getField'
  | 'getFieldValues'
  | 'getItemId'
  | 'getProjectId';
export type Mutation = 'clearItemFieldValue' | 'setItemFieldValue';
export type Request = Query | Mutation;

export const supportedQueries = [
  'getField',
  'getFieldValues',
  'getItemId',
  'getProjectId',
] as const;
export const supportedMutations = [
  'clearItemFieldValue',
  'setItemFieldValue',
] as const;
export const supportedRequests = [...supportedQueries, ...supportedMutations];

export type ProjectV2FieldValue =
  | {text: string}
  | {number: number}
  | {date: string}
  | {singleSelectOptionId: string}
  | {iterationId: string};

export type FieldDataType =
  | 'ASSIGNEES'
  | 'LINKED_PULL_REQUESTS'
  | 'REVIEWERS'
  | 'LABELS'
  | 'MILESTONE'
  | 'REPOSITORY'
  | 'TITLE'
  | 'TEXT'
  | 'SINGLE_SELECT'
  | 'NUMBER'
  | 'DATE'
  | 'ITERATION'
  | 'TRACKS'
  | 'TRACKED_BY';

export type RequestParams<T extends Request> = T extends 'getField'
  ? {
      owner: string;
      projectNumber: number;
      fieldName: string;
    }
  : T extends 'getFieldValues'
    ? {
        resourceUrl: string;
      }
    : T extends 'getItemId'
      ? {
          resourceUrl: string;
        }
      : T extends 'getProjectId'
        ? {
            owner: string;
            number: number;
          }
        : T extends 'clearItemFieldValue'
          ? {
              projectId: string;
              itemId: string;
              fieldId: string;
            }
          : T extends 'setItemFieldValue'
            ? {
                projectId: string;
                itemId: string;
                fieldId: string;
                value: ProjectV2FieldValue;
              }
            : never;

export type Response<T extends Request> = T extends 'getField'
  ? ResponseTypes.getField
  : T extends 'getFieldValues'
    ? ResponseTypes.getFieldValues
    : T extends 'getItemId'
      ? ResponseTypes.getItemId
      : T extends 'getProjectId'
        ? ResponseTypes.getProjectId
        : T extends 'clearItemFieldValue'
          ? ResponseTypes.clearItemFieldValue
          : T extends 'setItemFieldValue'
            ? ResponseTypes.setItemFieldValue
            : never;
