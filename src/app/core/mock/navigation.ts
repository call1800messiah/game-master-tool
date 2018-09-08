export const NAVIGATION: any[] = [
  {
    title: "Objekte",
    children: [
      {
        title: "Person",
        route: '/person'
      },
      {
        title: "Ort",
        route: '/location'
      },
      {
        title: "Gegenstand",
        route: '/item'
      },
      {
        title: "Ereignis",
        route: '/event'
      },
      {
        title: "Szene",
        route: '/scene'
      },
      {
        title: "Abenteuer",
        route: '/quest'
      }
    ],
    hasChildren: true,
    route: '/entity'
  },
  {
    title: "Konflikte",
    children: [
      {
        title: "Kampf",
        route: '/combat'
      },
      {
        title: "Seekampf",
        route: '/marine-combat'
      }
    ],
    hasChildren: true,
    route: '/combat'
  },
  {
    title: "Anzeige",
    children: [
      {
        title: "Szene",
        route: '/scene'
      },
      {
        title: "Kampf",
        route: '/combat'
      }
    ],
    hasChildren: true,
    route: '/display'
  },
  {
    title: "Fluss",
    children: [],
    hasChildren: false,
    route: '/flow'
  },
  {
    title: "Benutzer",
    children: [],
    hasChildren: false,
    route: '/user'
  },
];
