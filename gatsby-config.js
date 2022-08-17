module.exports = {
  // ...
  plugins: [
    {
      resolve: '@plasmicapp/loader-gatsby',
      options: {
        projects: [
          {
            id: 'i1R9JuZcEVnjtzkqUFoFHH', // ID of a project you are using
            token: 'xhOBiNSTl9G3WYBuldJXuAn1wNO4lzAUVcyRaU3lXy1eogQcGA8YO0TSwmP4sSvBN70Zf9zs4XAEXyVHJj6g' // API token for that project
          }
        ],
        // Fetches the latest revisions, whether or not they were unpublished!
        // Disable for production to ensure you render only published changes.
        preview: true
      }
    }
  ]
};
