import type { Schema, Struct } from '@strapi/strapi';

export interface TutorialStep extends Struct.ComponentSchema {
  collectionName: 'components_tutorial_steps';
  info: {
    displayName: 'step';
    icon: 'cog';
  };
  attributes: {
    StepDescription: Schema.Attribute.Blocks & Schema.Attribute.Required;
    StepImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.Required;
    StepNumber: Schema.Attribute.Integer & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'tutorial.step': TutorialStep;
    }
  }
}
