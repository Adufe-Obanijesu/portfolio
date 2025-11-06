module.exports = {
  async redirects() {
    return [
      {
        source: "/projects/capsule",
        destination: "https://capsuleconcept.netlify.app",
        permanent: false,
      },
      {
        source: "/projects/jitter",
        destination: "https://jitter-clone-sigma.vercel.app/",
        permanent: false,
      },
      {
        source: "/projects/typing-app",
        destination: "https://typing-eight-chi.vercel.app/",
        permanent: false,
      },
    ];
  },
};
