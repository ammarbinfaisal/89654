export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e521051051f08c29dabe4e3',
                  title: 'Sanity Studio',
                  name: '89654-studio',
                  apiId: 'dbb9caa1-9099-4657-984d-3236d258ddfe'
                },
                {
                  buildHookId: '5e52105153b108650a75a8e4',
                  title: 'Blog Website',
                  name: '89654',
                  apiId: 'c4b95bbc-4e86-4e5c-81f7-3c2c4f2fa313'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ammarbinfaisal/89654',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://89654.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
