/*
@inter user type "interprete"
@sup user type "supervisor"
@deq user type "chef d'equipe"
*/

const USER_ROLE = {
  INTERPRETE: "inter"
};

const USERS = {
  "0893092849": {
    nom: "Franvale",
    phone: "089302849",
    role: USER_ROLE.INTERPRETE,
    password: "disck12"
  },
  "0972556355": {
    nom: "Katanga",
    phone: "0972556355",
    role: USER_ROLE.SUPERVISOR,
    password: "1234"
  }
};
//=======================================================

/*
@sup for supervisor
@deq for "chef d'equipe"
*/

const TEAMS = [
  {
    id: "a",
    sup: {
      nom: "Albert Kankobwe",
      phone: "+243 974 522 625"
    },
    deq: {
      nom: "",
      phone: ""
    }
  },
  {
    id: "b",
    sup: {
      nom: "Bertin",
      phone: "+243 971 025 181",
      deq: "Chance"
    },
    deq: {
      nom: "Chance",
      phone: ""
    }
  },
  {
    id: "c",
    sup: {
      nom: "Serge",
      phone: "+243 970 656 484",
      deq: "Cedrick"
    },
    deq: {
      nom: "",
      phone: ""
    }
  },
  {
    id: "d",
    sup: {
      nom: "Katanga",
      phone: "+243 972 556 355, +243 851 595 620",
      deq: "Mwenz"
    },
    deq: {
      nom: "",
      phone: ""
    }
  }
];
//===================================

/*
different pages
*/
const PAGES = {
  LOGIN: "login",
  HOME_INTERPRETE: "pageHomeInter",
  HOME_SUPERVISOR: "pageHomeSup",
  PAGE_TEAM_STATS: "pageTeamStats"
};
//=======================

const ERROR_MESSAGES = {
  USER_DONT_EXIST: "This user dosnt not exist!",
  PASSWORD_INCORRECT: "The password is incorrect!"
};

const HEURES_DE_SERV = {
  mat: { from: "07:00", to: "15:00" },
  apr: { from: "15:00", to: "23:00" },
  nui: { from: "23:00", to: "07:00" },
  MATIN: { val: "mat", name: "白班/MATIN" },
  APREM: { val: "apr", name: "中班/APREM" },
  NUIT: { val: "nui", name: "夜班/NUIT" }
};

export { USERS, TEAMS, PAGES, ERROR_MESSAGES, USER_ROLE, HEURES_DE_SERV };
