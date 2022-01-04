const { atom } = require("recoil")

export const initialRouteName = atom({
    key: 'initialRouteName',
    default: 'Home'
})

export const dataMyHome = atom({
    key: 'dataMyHome',
    default:  {
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
                        mechanic: [
                            {
                                name: 'บิลลี่ อินทร',
                                mobileno: '0957845160',
                                lineID: '-',
                                image: 'https://www.img.in.th/images/40ca8df31acdd26a6df38da6771a6864.png'
                            },
                        ]
                    },
                    {
                        type: 'เฟอร์นิเจอร์',
                        detail: 'ช่วยแก้ไขให้เรียบร้อยด้วย',
                        rate: 'รอประเมิน',
                        image: [
                            'https://www.scgbuildingmaterials.com/media/default/2020/get-ideas/home-story/scg%20roof%20renovation/qa-%E0%B8%9B%E0%B8%B1%E0%B8%8D%E0%B8%AB%E0%B8%B2%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%9E%E0%B8%9A%E0%B8%9A%E0%B9%88%E0%B8%AD%E0%B8%A2/pic6.jpg',
                            'https://f.ptcdn.info/157/064/000/ps1ozd8dtny0QQEoPJIy-o.jpg'
                        ],
                        mechanic: [
                            {
                                name: 'ดา อินทร',
                                mobileno: '0641034511',
                                lineID: '-',
                                image: 'https://www.img.in.th/images/c6afb04b5467cdef511f304e22c528ab.jpg'
                            },
                            {
                                name: 'รูแปง อินทร',
                                mobileno: '0812375837',
                                lineID: '-',
                                image: 'https://www.img.in.th/images/1bce9e1b933b7c9a8b17204405e3c806.png'
                            }
                        ]
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
                        mechanic: [
                            {
                                name: 'มด ประชาชล',
                                mobileno: '0913199012',
                                lineID: '-',
                                image: 'https://www.img.in.th/images/85135b6bf2296360551d730804928652.png'
                            }
                        ]
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
                            mechanic: [
                                {
                                    name: 'บิลลี่ อินทร',
                                    mobileno: '0957845160',
                                    lineID: '-',
                                    image: 'https://www.img.in.th/images/40ca8df31acdd26a6df38da6771a6864.png'
                                }
                            ]
                        },
                        {
                            type: 'เฟอร์นิเจอร์',
                            detail: 'ช่วยแก้ไขให้เรียบร้อยด้วย',
                            rate: 'รอประเมิน',
                            image: [
                                'https://www.scgbuildingmaterials.com/media/default/2020/get-ideas/home-story/scg%20roof%20renovation/qa-%E0%B8%9B%E0%B8%B1%E0%B8%8D%E0%B8%AB%E0%B8%B2%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%9E%E0%B8%9A%E0%B8%9A%E0%B9%88%E0%B8%AD%E0%B8%A2/pic6.jpg',
                                'https://f.ptcdn.info/157/064/000/ps1ozd8dtny0QQEoPJIy-o.jpg'
                            ],
                            mechanic: [
                                {
                                    name: 'ดา อินทร',
                                    mobileno: '0641034511',
                                    lineID: '-',
                                    image: 'https://www.img.in.th/images/c6afb04b5467cdef511f304e22c528ab.jpg'
                                },
                                {
                                    name: 'รูแปง อินทร',
                                    mobileno: '0812375837',
                                    lineID: '-',
                                    image: 'https://www.img.in.th/images/1bce9e1b933b7c9a8b17204405e3c806.png'
                                }
                            ]
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
                            mechanic: [
                                {
                                    name: 'ดา อินทร',
                                    mobileno: '0641034511',
                                    lineID: '-',
                                    image: 'https://www.img.in.th/images/c6afb04b5467cdef511f304e22c528ab.jpg'
                                },
                                {
                                    name: 'รูแปง อินทร',
                                    mobileno: '0812375837',
                                    lineID: '-',
                                    image: 'https://www.img.in.th/images/1bce9e1b933b7c9a8b17204405e3c806.png'
                                }
                            ]
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
                            mechanic: [
                                {
                                    name: 'มด ประชาชล',
                                    mobileno: '0913199012',
                                    lineID: '-',
                                    image: 'https://www.img.in.th/images/85135b6bf2296360551d730804928652.png'
                                }
                            ]
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
            image: "https://www.origin.co.th/wp-content/uploads/2020/10/ELLIS-1-1536x864.jpg"
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
                status: 'VERIFY'
            },
            {
                name: 'ดวงกมล ชูศักดิ์สกุลวิบูล',
                email: 'ddkkk@gmail.com',
                tel: '098-334-2334',
                status: 'ACTIVE'
            }
        ]
    }
)

export const dataListOccupant = atom(
    {
        key: 'dataListOccupant',
        default: [
            {
                name: 'ดวงกมล ชูศักดิ์สกุลวิบูล',
                email: 'ddkkk@gmail.com',
                tel: '098-334-2334',
                image : require('../assets/image/profpic/SampleProf2.jpg'),
                expire: 1665162000,
                status: 'VERIFY'
            },
            {
                name: 'ดวงกมล ชูศักดิ์สกุลวิบูล',
                email: 'ddkkk@gmail.com',
                tel: '098-334-2334',
                image : require('../assets/image/profpic/SampleProf3.jpg'),
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