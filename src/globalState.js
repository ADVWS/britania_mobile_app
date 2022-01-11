import images from "../assets/image"
const { atom } = require("recoil")

export const initialRouteName = atom({
  key: 'initialRouteName',
  default: 'Home'
})

export const dataMyHome = atom({
  key: 'dataMyHome',
  default: {
    name: 'Belgravia exclusive pool villa bangna-rama 9',
    homeNo: '142/444',
    detail: 'CHAPEL - 5 ห้องนอน 6 ห้องน้ำ',
    land: '90 ตร.วา',
    usablearea: '500 ตร.ม.',
    image: "https://www.origin.co.th/wp-content/uploads/2021/01/BGV-scaled.jpg",
    inform: [
      {
        id: 1100887,
        status: 4, //อยู่ระหว่างดำเนินการ
        informtime: 1623198894,
        order: [
          {
            type: 'เฟอร์นิเจอร์',
            detail: 'ช่วยแก้ไขให้เรียบร้อยด้วย',
            rate: 'รอประเมิน',
            image: [
              'https://zmyhome.com/public/uploads/files/AluminiumSlidingDoor.jpg',
              'https://www.img.in.th/images/8a4c3c0ef923f5986bd541141fb66461.png'
            ],
            mechanic: {
              name: 'บิลลี่ อินทร',
              mobileno: '0957845160',
              lineID: '-',
              image: 'https://www.img.in.th/images/40ca8df31acdd26a6df38da6771a6864.png'
            },
          },
          {
            type: 'เฟอร์นิเจอร์',
            detail: 'ช่วยแก้ไขให้เรียบร้อยด้วย',
            rate: 'รอประเมิน',
            image: [
              'https://www.scgbuildingmaterials.com/media/default/2020/get-ideas/home-story/scg%20roof%20renovation/qa-%E0%B8%9B%E0%B8%B1%E0%B8%8D%E0%B8%AB%E0%B8%B2%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%9E%E0%B8%9A%E0%B8%9A%E0%B9%88%E0%B8%AD%E0%B8%A2/pic6.jpg',
              'https://f.ptcdn.info/157/064/000/ps1ozd8dtny0QQEoPJIy-o.jpg'
            ],
            mechanic:
            {
              name: 'ดา อินทร',
              mobileno: '0641034511',
              lineID: '-',
              image: 'https://www.img.in.th/images/c6afb04b5467cdef511f304e22c528ab.jpg'
            }
          }
        ],
      },
      {
        id: 1100886,
        status: 3, //สำเร็จ
        informtime: 1622715114,
        servicetime: '4/06/62 10.00-11.00 น.',
        order: [
          {
            type: 'เฟอร์นิเจอร์',
            detail: 'ช่วยแก้ไขให้เรียบร้อยด้วย',
            rate: 'รอประเมิน',
            image: [
              'https://www.wazzadu.com/thumbs/article/resize/760/article_365d6210-e371-11e9-a43b-eb5cbfc4d797.jpg',
            ],
            mechanic: {
              name: 'รูแปง อินทร',
              mobileno: '0812375837',
              lineID: '-',
              image: 'https://www.img.in.th/images/1bce9e1b933b7c9a8b17204405e3c806.png'
            }
          }
        ],
      },
      {
        id: 1100885,
        status: 5, //สำเร็จ
        informtime: 1623198894,
        order: [
          {
            type: 'เฟอร์นิเจอร์',
            detail: 'ช่วยแก้ไขให้เรียบร้อยด้วย',
            rate: 'รอประเมิน',
            image: [
              'https://www.wazzadu.com/thumbs/article/resize/760/article_365d6210-e371-11e9-a43b-eb5cbfc4d797.jpg',
            ],
            mechanic: {
              name: 'มด ประชาชล',
              mobileno: '0913199012',
              lineID: '-',
              image: 'https://www.img.in.th/images/85135b6bf2296360551d730804928652.png'
            }
          }
        ]
      }
    ]
  },
})

export const dataMyproject = atom({
  key: 'dataMyproject',
  default: [
    {
      name: 'Belgravia exclusive pool villa bangna-rama 9',
      homeNo: '142/444',
      detail: 'CHAPEL - 5 ห้องนอน 6 ห้องน้ำ',
      land: '90 ตร.วา',
      usablearea: '500 ตร.ม.',
      image: "https://www.origin.co.th/wp-content/uploads/2021/01/BGV-scaled.jpg",
      inform: [
        {
          id: 1100887,
          status: 4, //อยู่ระหว่างดำเนินการ
          informtime: 1623198894,
          servicetime: '12/06/62 10.00-11.00 น.',
          order: [
            {
              type: 'เฟอร์นิเจอร์',
              detail: 'ช่วยแก้ไขให้เรียบร้อยด้วย',
              rate: 'รอประเมิน',
              image: [
                'https://zmyhome.com/public/uploads/files/AluminiumSlidingDoor.jpg',
                'https://www.img.in.th/images/8a4c3c0ef923f5986bd541141fb66461.png'
              ],
              mechanic: {
                name: 'บิลลี่ อินทร',
                mobileno: '0957845160',
                lineID: '-',
                image: 'https://www.img.in.th/images/40ca8df31acdd26a6df38da6771a6864.png'
              }
            },
            {
              type: 'เฟอร์นิเจอร์',
              detail: 'ช่วยแก้ไขให้เรียบร้อยด้วย',
              rate: 'รอประเมิน',
              image: [
                'https://www.scgbuildingmaterials.com/media/default/2020/get-ideas/home-story/scg%20roof%20renovation/qa-%E0%B8%9B%E0%B8%B1%E0%B8%8D%E0%B8%AB%E0%B8%B2%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%9E%E0%B8%9A%E0%B8%9A%E0%B9%88%E0%B8%AD%E0%B8%A2/pic6.jpg',
                'https://f.ptcdn.info/157/064/000/ps1ozd8dtny0QQEoPJIy-o.jpg'
              ],
              mechanic: {
                name: 'ดา อินทร',
                mobileno: '0641034511',
                lineID: '-',
                image: 'https://www.img.in.th/images/c6afb04b5467cdef511f304e22c528ab.jpg'
              }
            }
          ],
        },
        {
          id: 1100886,
          status: 3, //สำเร็จ
          informtime: 1622715114,
          servicetime: '4/06/62 10.00-11.00 น.',
          order: [
            {
              type: 'เฟอร์นิเจอร์',
              detail: 'ช่วยแก้ไขให้เรียบร้อยด้วย',
              rate: 'รอประเมิน',
              image: [
                'https://www.wazzadu.com/thumbs/article/resize/760/article_365d6210-e371-11e9-a43b-eb5cbfc4d797.jpg',
              ],
              mechanic: {
                name: 'รูแปง อินทร',
                mobileno: '0812375837',
                lineID: '-',
                image: 'https://www.img.in.th/images/1bce9e1b933b7c9a8b17204405e3c806.png'
              }
            }
          ],
        },
        {
          id: 1100885,
          status: 5, //สำเร็จ
          informtime: 1622534688,
          servicetime: '2/06/62 10.00-11.00 น.',
          order: [
            {
              type: 'เฟอร์นิเจอร์',
              detail: 'ช่วยแก้ไขให้เรียบร้อยด้วย',
              rate: 'รอประเมิน',
              image: [
                'https://www.wazzadu.com/thumbs/article/resize/760/article_365d6210-e371-11e9-a43b-eb5cbfc4d797.jpg',
              ],
              mechanic: {
                name: 'มด ประชาชล',
                mobileno: '0913199012',
                lineID: '-',
                image: 'https://www.img.in.th/images/85135b6bf2296360551d730804928652.png'
              }
            }
          ],
        }
      ]
    },
    {
      name: 'Belgravia Bangna - Rama9',
      homeNo: '162/23',
      detail: 'ELLIS - 4 ห้องนอน 5 ห้องน้ำ 3 ที่จอดรถ และห้องแม่บ้าน',
      land: '70 ตร.วา',
      usablearea: '360 ตร.ม.',
      image: "https://www.origin.co.th/wp-content/uploads/2020/10/ELLIS-1-1536x864.jpg",
      // resident: [
      //     {
      //         name: 'ดวงกมล ชูศักดิ์สกุลวิบูล',
      //         email: 'ddkkk@gmail.com',
      //         tel: '098-334-2334',
      //         type : 'THAI',
      //         identity : '12345679',
      //         image: 'https://scontent.fbkk2-7.fna.fbcdn.net/v/t39.30808-6/213713549_208962517899651_1213391919512128248_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHCnyb1k4SMQfoIAfNCj9_102eozQ_PblvTZ6jND89uW3Oex1qUjW_mrtciiaxf3-nN7dJZxHxERu0dD_zyOoka&_nc_ohc=MwjVuE4RqUQAX-CWeG1&tn=rTpMqQ4q7xNK1u7q&_nc_zt=23&_nc_ht=scontent.fbkk2-7.fna&oh=00_AT-geBIOKhkP_3zeWP0R8Nt_x_fzE468SMcc1XI31anUAQ&oe=61DB0F84',
      //         status: 'VERIFY'
      //     },
      //     {
      //         name: 'ดวงกมล ชูศักดิ์สกุลวิบูล',
      //         email: 'ddkkk@gmail.com',
      //         tel: '098-334-2334',
      //         type: 'FOREIGN',
      //         identity : '12345679',
      //         image: 'https://scontent.fbkk2-4.fna.fbcdn.net/v/t1.6435-9/94400039_113277753696176_8027304235685117952_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=174925&_nc_eui2=AeHeUx38YqjjuH80BFqNYzVW4Exs_3kN9RzgTGz_eQ31HI7QXNzAeNGjBVlFiR-1fwknAf5BiO0BHBxKN2CTf2D3&_nc_ohc=bNjGyFOuUKEAX94b7NQ&tn=rTpMqQ4q7xNK1u7q&_nc_ht=scontent.fbkk2-4.fna&oh=00_AT8iktc_gLMlnGNqYl8_S9SfAO9hKGSoq-nItbGBiRmhlg&oe=61FBC8DF',
      //         status: 'ACTIVE'
      //     }
      // ],
      occupant: [
        {
          name: 'ดวงกมล ชูศักดิ์สกุลวิบูล',
          email: 'ddkkk@gmail.com',
          tel: '098-334-2334',
          type: 'THAI',
          identity: '12345679',
          image: 'https://scontent.fbkk2-5.fna.fbcdn.net/v/t39.30808-6/214851602_339920594367892_353886184762612393_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeE0hqZqSxmOnule10jyO-82vjQWPQWI_cK-NBY9BYj9wjeCYd8tjEg7x9ISuZuGhVrhE2XrUTvCv2K5xQ8SNoQx&_nc_ohc=iCzt75sYDCYAX8xFR5w&_nc_zt=23&_nc_ht=scontent.fbkk2-5.fna&oh=00_AT9Kzk7s02kiFcbcvkcYunfHknwlKp07o6qkPin2U7hVAA&oe=61DAC59E',
          expire: 1665162000,
          status: 'VERIFY'
        },
        {
          name: 'ดวงกมล ชูศักดิ์สกุลวิบูล',
          email: 'ddkkk@gmail.com',
          tel: '098-334-2334',
          type: 'FOREIGN',
          identity: '12345679',
          image: 'https://scontent.fbkk2-7.fna.fbcdn.net/v/t1.6435-9/94504794_111236907236263_7652594624308969472_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=174925&_nc_eui2=AeFEWg3DrhRRfWdkHIYuCVcVJ8sAVY-w9_YnywBVj7D39mqPU7f5E_RiXQouDTfUenp_ik65rtALKnCLJ2Do1Amv&_nc_ohc=E_b_37gbeBIAX_nRqYp&_nc_ht=scontent.fbkk2-7.fna&oh=00_AT8RU3viGg9H-O1AEH6SnVpL9yVuf6-FJPHWiQql4cUVuw&oe=61FA5C09',
          expire: 1665162000,
          status: 'ACTIVE'
        }
      ]
    },
    {
      name: 'Britania Bangna Km 12',
      homeNo: '485/34 (345)',
      detail: 'Oxford - 3 ห้องนอน 3 ห้องน้ำ 2',
      land: '70 ตร.วา',
      usablearea: '150 ตร.ม.',
      image: 'https://www.britania.co.th/wp-content/uploads/2019/07/eacaa16c66362b5c345f02185b21b9f6-1.jpg'
    },
    {
      name: 'Britania Bangna Km 12',
      homeNo: '23/564 (343)',
      detail: 'Regent - 3 ห้องนอน 3 ห้องน้ำ 2',
      land: '70 ตร.วา',
      usablearea: '140 ตร.ม.',
      image: 'https://www.britania.co.th/wp-content/uploads/2019/07/0642028d65ceea99135a11eea49c964e.jpg'
    }
  ]
})

export const dataListResident = atom(
  {
    key: 'dataListResident',
    default: [
      {
        name: 'ดวงกมล ชูศักดิ์สกุลวิบูล',
        email: 'ddkkk@gmail.com',
        tel: '098-334-2334',
        type: 'THAI',
        identity: '12345679',
        image: 'https://scontent.fbkk2-7.fna.fbcdn.net/v/t39.30808-6/213713549_208962517899651_1213391919512128248_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHCnyb1k4SMQfoIAfNCj9_102eozQ_PblvTZ6jND89uW3Oex1qUjW_mrtciiaxf3-nN7dJZxHxERu0dD_zyOoka&_nc_ohc=MwjVuE4RqUQAX-CWeG1&tn=rTpMqQ4q7xNK1u7q&_nc_zt=23&_nc_ht=scontent.fbkk2-7.fna&oh=00_AT-geBIOKhkP_3zeWP0R8Nt_x_fzE468SMcc1XI31anUAQ&oe=61DB0F84',
        status: 'VERIFY'
      },
      {
        name: 'ดวงกมล ชูศักดิ์สกุลวิบูล',
        email: 'ddkkk@gmail.com',
        tel: '098-334-2334',
        type: 'FOREIGN',
        identity: '12345679',
        image: 'https://scontent.fbkk2-4.fna.fbcdn.net/v/t1.6435-9/94400039_113277753696176_8027304235685117952_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=174925&_nc_eui2=AeHeUx38YqjjuH80BFqNYzVW4Exs_3kN9RzgTGz_eQ31HI7QXNzAeNGjBVlFiR-1fwknAf5BiO0BHBxKN2CTf2D3&_nc_ohc=bNjGyFOuUKEAX94b7NQ&tn=rTpMqQ4q7xNK1u7q&_nc_ht=scontent.fbkk2-4.fna&oh=00_AT8iktc_gLMlnGNqYl8_S9SfAO9hKGSoq-nItbGBiRmhlg&oe=61FBC8DF',
        status: 'ACTIVE'
      },
    ]
  }
)

// export const dataListResidentTest = atom(
//     {
//         key: 'dataListResidentTest',
//         default: [
//             {
//                 name: 'ดวงกมล ชูศักดิ์สกุลวิบูล',
//                 email: 'ddkkk@gmail.com',
//                 tel: '098-334-2334',
//                 type : 'THAI',
//                 identity : '12345679',
//                 image: 'https://scontent.fbkk2-7.fna.fbcdn.net/v/t39.30808-6/213713549_208962517899651_1213391919512128248_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHCnyb1k4SMQfoIAfNCj9_102eozQ_PblvTZ6jND89uW3Oex1qUjW_mrtciiaxf3-nN7dJZxHxERu0dD_zyOoka&_nc_ohc=MwjVuE4RqUQAX-CWeG1&tn=rTpMqQ4q7xNK1u7q&_nc_zt=23&_nc_ht=scontent.fbkk2-7.fna&oh=00_AT-geBIOKhkP_3zeWP0R8Nt_x_fzE468SMcc1XI31anUAQ&oe=61DB0F84',
//                 status: 'VERIFY'
//             },
//             {
//                 name: 'ดวงกมล ชูศักดิ์สกุลวิบูล',
//                 email: 'ddkkk@gmail.com',
//                 tel: '098-334-2334',
//                 type: 'FOREIGN',
//                 identity : '12345679',
//                 image: 'https://scontent.fbkk2-4.fna.fbcdn.net/v/t1.6435-9/94400039_113277753696176_8027304235685117952_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=174925&_nc_eui2=AeHeUx38YqjjuH80BFqNYzVW4Exs_3kN9RzgTGz_eQ31HI7QXNzAeNGjBVlFiR-1fwknAf5BiO0BHBxKN2CTf2D3&_nc_ohc=bNjGyFOuUKEAX94b7NQ&tn=rTpMqQ4q7xNK1u7q&_nc_ht=scontent.fbkk2-4.fna&oh=00_AT8iktc_gLMlnGNqYl8_S9SfAO9hKGSoq-nItbGBiRmhlg&oe=61FBC8DF',
//                 status: 'ACTIVE'
//             }
//         ]
//     }
// )

export const dataListOccupant = atom(
  {
    key: 'dataListOccupant',
    default: [
      {
        name: 'ดวงกมล ชูศักดิ์สกุลวิบูล',
        email: 'ddkkk@gmail.com',
        tel: '098-334-2334',
        type: 'THAI',
        identity: '12345679',
        image: 'https://scontent.fbkk2-5.fna.fbcdn.net/v/t39.30808-6/214851602_339920594367892_353886184762612393_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeE0hqZqSxmOnule10jyO-82vjQWPQWI_cK-NBY9BYj9wjeCYd8tjEg7x9ISuZuGhVrhE2XrUTvCv2K5xQ8SNoQx&_nc_ohc=iCzt75sYDCYAX8xFR5w&_nc_zt=23&_nc_ht=scontent.fbkk2-5.fna&oh=00_AT9Kzk7s02kiFcbcvkcYunfHknwlKp07o6qkPin2U7hVAA&oe=61DAC59E',
        expire: 1665162000,
        status: 'VERIFY'
      },
      {
        name: 'ดวงกมล ชูศักดิ์สกุลวิบูล',
        email: 'ddkkk@gmail.com',
        tel: '098-334-2334',
        type: 'FOREIGN',
        identity: '12345679',
        image: 'https://scontent.fbkk2-7.fna.fbcdn.net/v/t1.6435-9/94504794_111236907236263_7652594624308969472_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=174925&_nc_eui2=AeFEWg3DrhRRfWdkHIYuCVcVJ8sAVY-w9_YnywBVj7D39mqPU7f5E_RiXQouDTfUenp_ik65rtALKnCLJ2Do1Amv&_nc_ohc=E_b_37gbeBIAX_nRqYp&_nc_ht=scontent.fbkk2-7.fna&oh=00_AT8RU3viGg9H-O1AEH6SnVpL9yVuf6-FJPHWiQql4cUVuw&oe=61FA5C09',
        expire: 1665162000,
        status: 'ACTIVE'
      }
    ]
  }
)

export const dataListInform = atom({
  key: 'dataListInform',
  default: []
})

export const dataListHistory = atom({
  key: 'dataListHistory',
  default: []
})

export const dataInformDetail = atom({
  key: 'dataInformDetail',
  default: {}
})

export const informType = atom({
  key: 'informType',
  default: [
    { name: 'ไฟฟ้า', value: 'ไฟฟ้า', iamge: images.electricity },
    { name: 'ท่อน้ำ/อากาศ ดี/เสีย', value: 'ท่อน้ำ/อากาศ ดี/เสีย', iamge: images.pipe },
    { name: 'ประตู', value: 'ประตู', iamge: images.door },
    { name: 'พื้น', value: 'พื้น', iamge: images.floor },
    { name: 'ฝ้าเพดาน', value: 'ฝ้าเพดาน', iamge: images.ceiling },
    { name: 'สุขภัณฑ์ / อุปกรณ์', value: 'สุขภัณฑ์ / อุปกรณ์', iamge: images.wc },
    { name: 'โครงสร้าง', value: 'โครงสร้าง', iamge: images.layout },
    { name: 'ผนัง', value: 'ผนัง', iamge: images.wall },
    { name: 'สี', value: 'สี', iamge: images.color },
    { name: 'เฟอร์นิเจอร์', value: 'เฟอร์นิเจอร์', iamge: images.furniture },
    { name: 'หลังคา', value: 'หลังคา', iamge: images.roof },
    { name: 'ซ่อมพื้นที่ส่วนกลาง', value: 'ซ่อมพื้นที่ส่วนกลาง', iamge: images.public },
    { name: 'เบ็ดเตล็ด', value: 'เบ็ดเตล็ด', iamge: images.other },
  ]
})

export const informTime = atom({
  key: 'informTime',
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
  ]
})

export const informSet = atom({
  key: 'informSet',
  default: [],
})
export const todoListState = atom({
  key: 'todoListState',
  default: [
    { text: "Todo" },
    { text: "AnotherTodo" }
  ]
});

export const informSelectType = atom({
  key: 'informSelectType',
  default: ''
})

export const newInform = atom({
  key: 'newInform',
  default: []
})

export const newContactInform = atom({
  key: 'newContactInform',
  default: {
    address: "",
    fullname: "",
    mobileno: ""
  }
})
