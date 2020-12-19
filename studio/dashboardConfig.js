export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5fde8396af983808f87e9d5c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-j8pv8fiz',
                  apiId: '21ef5b1d-9da8-4be7-bacb-a1de11d1f9ad'
                },
                {
                  buildHookId: '5fde8396b888110bfa84edc3',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-qdacccf4',
                  apiId: 'f07ddf9c-1959-4d02-8171-5fa8aa224e22'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/slabe/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-qdacccf4.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
