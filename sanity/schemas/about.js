export default {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'title',
      title: 'Professional Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Short Description',
      type: 'text',
      description: 'Used for meta descriptions and intro'
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string'
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'experience',
      title: 'Experience Timeline',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'year',
              title: 'Year/Period',
              type: 'string'
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text'
            }
          ]
        }
      ]
    },
    {
      name: 'skills',
      title: 'Skills & Interests',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'social',
      title: 'Social Links',
      type: 'object',
      fields: [
        {
          name: 'github',
          title: 'GitHub',
          type: 'string'
        },
        {
          name: 'twitter',
          title: 'Twitter',
          type: 'string'
        },
        {
          name: 'linkedin',
          title: 'LinkedIn',
          type: 'string'
        },
        {
          name: 'instagram',
          title: 'Instagram',
          type: 'string'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'title',
      media: 'profileImage'
    }
  }
}