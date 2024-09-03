import type { Schema, Attribute } from '@strapi/strapi';

export interface LayoutVideoLinks extends Schema.Component {
  collectionName: 'components_video_links_video_links';
  info: {
    displayName: 'VideoLink';
    icon: 'link';
    description: '';
  };
  attributes: {
    videoCode: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'layout.video-links': LayoutVideoLinks;
    }
  }
}
