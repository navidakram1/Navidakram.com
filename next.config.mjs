/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "navidakram.com",
      },
      {
        protocol: "https",
        hostname: "cdn.21st.dev",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "**.supabase.co",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      }
    ],
  },
  async redirects() {
    return [
      {
        source: "/discord",
        destination: "https://discordapp.com/users/760862401440120862",
        permanent: false,
      },
      {
        source: "/location",
        destination: "https://goo.gl/maps/Q3eGeP6bxSRwsKu98",
        permanent: false,
      },
      {
        source: "/location2",
        destination: "https://maps.app.goo.gl/r24uUWyxFnoBL2pp9",
        permanent: false,
      },
      {
        source: "/music",
        destination: "https://www.youtube.com/playlist?list=PLWdKCECfzQTJvaUMgseAgRgfQg9_me6L4",
        permanent: false,
      },
      {
        source: "/payment",
        destination: "https://buy.stripe.com/8wM03g6CtfsS5MIaEM",
        permanent: false,
      },
      {
        source: "/skype",
        destination: "https://join.skype.com/invite/uI9DXVddavoV",
        permanent: false,
      },
      {
        source: "/telegram",
        destination: "https://t.me/navidakram",
        permanent: false,
      },
      {
        source: "/revolut",
        destination: "https://revolut.me/sknavi42t1",
        permanent: false,
      },
      {
        source: "/company",
        destination: "https://api.whatsapp.com/message/A7CQA2VELUXSL1?autoload=1&app_absent=0",
        permanent: false,
      },
      {
        source: "/drop",
        destination: "https://www.playbook.com/navidakram/drop",
        permanent: false,
      },
      {
        source: "/instagram",
        destination: "https://www.instagram.com/navid.akram.jukto/",
        permanent: false,
      },
      {
        source: "/visa",
        destination: "https://drive.google.com/drive/folders/1hraxIGzMNwQnqZGMDNhiX6ZqzHOw-kW1?usp=sharing",
        permanent: false,
      },
      {
        source: "/whatsapp",
        destination: "https://wa.me/353851956384",
        permanent: false,
      },
      {
        source: "/Fb",
        destination: "https://www.facebook.com/juktwoacc/",
        permanent: false,
      },
      {
        source: "/fb",
        destination: "https://www.facebook.com/juktwoacc/",
        permanent: false,
      },
      {
        source: "/linkedin",
        destination: "https://www.linkedin.com/in/navidakram",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
