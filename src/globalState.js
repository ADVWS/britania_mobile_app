import images from "../assets/image";
const { atom } = require("recoil");

export const userProfile = atom({
  key: "userProfile",
  default: {},
});

export const userType = atom({
  key: "userType",
  default: 2,
});

export const Language = atom({
  key: "Language",
  default: {},
});

export const LANGTEXT = atom({
  key: "LANGTEXT",
  default: 'TH',
});

export const unitMember = atom({
  key: "unitMember",
  default: {},
});

export const unitOwner = atom({
  key: "unitOwner",
  default: {},
});

export const caseType = atom({
  key: "caseType",
  default: []
})

export const caseList = atom({
  key: "caseList",
  default: []
})

export const checkInTime = atom({
  key: "checkInTime",
  default: []
})

export const project = atom({
  key: "project",
  default: false
})

export const holiday = atom({
  key: "holiday",
  default: []
})

export const dataListInform = atom({
  key: "dataListInform",
  default: [],
});

export const dataListHistory = atom({
  key: "dataListHistory",
  default: [],
});

export const dataInformDetail = atom({
  key: "dataInformDetail",
  default: {},
});

export const dataNotify = atom({
  key: "dataNotify",
  default: [],
});
export const ownerType = atom({
  key: "ownerType",
  default: "none",
});

export const informType = atom({
  key: "informType",
  default: [
    { image: images.electricity, seq: 1},
    { image: images.pipe, seq: 2 },
    { image: images.door, seq: 3 },
    { image: images.floor, seq: 4},
    { image: images.ceiling, seq: 5 },
    { image: images.wc, seq: 6 },
    { image: images.layout, seq: 7 },
    { image: images.wall, seq: 8 },
    { image: images.color, seq: 9 },
    { image: images.furniture, seq: 10 },
    { image: images.roof, seq: 11},
    { image: images.public, seq: 12 },
    { image: images.other, seq: 13 },
  ],
});

export const informTime = atom({
  key: "informTime",
  default: [
    { time: "9.00 น." },
    { time: "10.00 น." },
    { time: "11.00 น." },
    { time: "12.00 น." },
    { time: "13.00 น." },
    { time: "14.00 น." },
    { time: "15.00 น." },
    { time: "16.00 น." },
    { time: "17.00 น." },
    { time: "18.00 น." },
  ],
});

export const informSet = atom({
  key: "informSet",
  default: [],
});
export const todoListState = atom({
  key: "todoListState",
  default: [{ text: "Todo" }, { text: "AnotherTodo" }],
});

export const newInform = atom({
  key: "newInform",
  default: [],
});

export const callbackEdit = atom({
  key: "callbackEdit",
  default: "",
});
