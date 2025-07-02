import type { Schema, Struct } from '@strapi/strapi';

export interface LayoutVideoLinks extends Struct.ComponentSchema {
  collectionName: 'components_video_links_video_links';
  info: {
    description: '';
    displayName: 'VideoLink';
    icon: 'link';
  };
  attributes: {
    videoCode: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'layout.video-links': LayoutVideoLinks;
    }
  }
}
