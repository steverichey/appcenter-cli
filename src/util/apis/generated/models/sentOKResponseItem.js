/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a SentOKResponseItem.
 */
class SentOKResponseItem {
  /**
   * Create a SentOKResponseItem.
   * @property {uuid} invitationId The id of the invitation
   * @property {object} [organization]
   * @property {uuid} [organization.id] The internal unique id (UUID) of the
   * organization.
   * @property {string} [organization.displayName] The display name of the
   * organization
   * @property {string} [organization.name] The slug name of the organization
   * @property {string} [organization.avatarUrl] The URL to a user-uploaded
   * Avatar image
   * @property {string} [organization.origin] The creation origin of this
   * organization. Possible values include: 'appcenter', 'hockeyapp'
   * @property {string} [organization.createdAt] The creation date of this
   * organization
   * @property {string} [organization.updatedAt] The date the organization was
   * last updated at
   * @property {object} [app]
   * @property {uuid} [app.id] The unique ID (UUID) of the app
   * @property {string} [app.description] The description of the app
   * @property {string} [app.displayName] The display name of the app
   * @property {string} [app.releaseType] A one-word descriptive release-type
   * value that starts with a capital letter but is otherwise lowercase
   * @property {string} [app.iconUrl] The string representation of the URL
   * pointing to the app's icon
   * @property {string} [app.iconSource] The string representation of the
   * source of the app's icon
   * @property {string} [app.name] The name of the app used in URLs
   * @property {string} [app.os] The OS the app will be running on. Possible
   * values include: 'Android', 'iOS', 'macOS', 'Tizen', 'tvOS', 'Windows',
   * 'Linux', 'Custom'
   * @property {object} [app.owner] The information about the app's owner
   * @property {uuid} [app.owner.id] The unique id (UUID) of the owner
   * @property {string} [app.owner.avatarUrl] The avatar URL of the owner
   * @property {string} [app.owner.displayName] The owner's display name
   * @property {string} [app.owner.email] The owner's email address
   * @property {string} [app.owner.name] The unique name that used to identify
   * the owner
   * @property {string} [app.owner.type] The owner type. Can either be 'org' or
   * 'user'. Possible values include: 'org', 'user'
   * @property {string} [app.appSecret] A unique and secret key used to
   * identify the app in communication with the ingestion endpoint for crash
   * reporting and analytics
   * @property {object} [app.azureSubscription]
   * @property {uuid} [app.azureSubscription.subscriptionId] The azure
   * subscription id
   * @property {uuid} [app.azureSubscription.tenantId] The tenant id of the
   * azure subscription belongs to
   * @property {string} [app.azureSubscription.subscriptionName] The name of
   * the azure subscription
   * @property {boolean} [app.azureSubscription.isBilling] If the subscription
   * is used for billing
   * @property {boolean} [app.azureSubscription.isBillable] If the subscription
   * can be used for billing
   * @property {boolean} [app.azureSubscription.isMicrosoftInternal] If the
   * subscription is internal Microsoft subscription
   * @property {string} [app.platform] The platform of the app. Possible values
   * include: 'Java', 'Objective-C-Swift', 'UWP', 'Cordova', 'React-Native',
   * 'Unity', 'Electron', 'Xamarin', 'WPF', 'WinForms', 'Unknown', 'Custom'
   * @property {string} [app.origin] The creation origin of this app. Possible
   * values include: 'appcenter', 'hockeyapp', 'codepush'
   * @property {string} [app.createdAt] The created date of this app
   * @property {string} [app.updatedAt] The last updated date of this app
   * @property {array} [app.memberPermissions] The permissions of the calling
   * user
   */
  constructor() {
  }

  /**
   * Defines the metadata of SentOKResponseItem
   *
   * @returns {object} metadata of SentOKResponseItem
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SentOKResponseItem',
      type: {
        name: 'Composite',
        className: 'SentOKResponseItem',
        modelProperties: {
          invitationId: {
            required: true,
            serializedName: 'invitation_id',
            type: {
              name: 'String'
            }
          },
          organization: {
            required: false,
            serializedName: 'organization',
            type: {
              name: 'Composite',
              className: 'SentOKResponseItemOrganization'
            }
          },
          app: {
            required: false,
            serializedName: 'app',
            type: {
              name: 'Composite',
              className: 'SentOKResponseItemApp'
            }
          }
        }
      }
    };
  }
}

module.exports = SentOKResponseItem;
