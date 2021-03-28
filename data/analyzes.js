export const analyzes = {
    'maintitle': 'Более 50 видов анализа по основным блокам комплексного предпроектного анализа территорий',
    'content': [
        {
            categories : [
                {
                    cat_id: 'A',
                    cat_title: 'Жители и туристы',
                    cat_content: {
                        groups:
                            [
                                {
                                    group_id: 1,
                                    group_title: 'Плотность населения',
                                    group_desc: 'Плотность жителей, человек / га. Детальные данные по распределению населения, аггрегированные на гексагональной сетке с ячейкой площадью 1 га',
                                    layers: [
                                        {
                                            layer_id: 1,
                                            layer_final_id: 'A.1.1',
                                            layer_title: 'Плотность населения',
                                            layer_desc: undefined,
                                            sublayers: undefined,
                                            layer_type: 'A',
                                            layer_map: 'https://drive.google.com/file/d/1LwBs4Vcf_arqZWYpmpSRfpiSovQYZDTR/view',
                                        }
                                    ]
                                },
                                {
                                    group_id: 2,
                                    group_title: 'Индекс привлекательности городских пространств',
                                    group_desc: 'Показатель, отражающий востребоварнность общественных пространств у жителей. Итоговый индекс складывается из количества цифровых следов, распределении и связности функций, востребованности улиной инфраструктуры у пешеходов.',
                                    layers: [
                                        {
                                            layer_id: 1,
                                            layer_final_id: 'A.2.1',
                                            layer_title: 'Индекс привлекательности городских пространств',
                                            layer_desc: undefined,
                                            sublayers: undefined,
                                            layer_type: 'A',
                                            layer_map: 'https://drive.google.com/file/d/1u04nDyJ0sog7JAOK9StUDVE2HxIwZ89i/view'
                                        }
                                    ]
                                },
                                {
                                    group_id: 3,
                                    group_title: 'Индекс популярности улично-дорожной сети у спортсменов',
                                    group_desc: 'Относительный на масштабе города (территории) показатель востребованности элементов улично-дорожной сети у жителей для занятия спортом: бег, велоспорт, общий показатель',
                                    layers: [
                                        {
                                            layer_id: 1,
                                            layer_final_id: 'A.3.1',
                                            layer_title: 'Для занятия бегом',
                                            layer_desc: undefined,
                                            sublayers: undefined,
                                            layer_type: 'A',
                                            layer_map: 'https://drive.google.com/file/d/1CD8emhUKjPaTt36lWzzyteaI10r0SvoY/view'
                                        },
                                        {
                                            layer_id: 2,
                                            layer_final_id: 'A.3.2',
                                            layer_title: 'Для велоспорта',
                                            layer_desc: undefined,
                                            sublayers: undefined,
                                            layer_type: 'A',
                                            layer_map: 'https://drive.google.com/file/d/12XX9CUpwtPlPUZ0ouKyN9Y4WNEoGshWD/view'
                                        },
                                        {
                                            layer_id: 3,
                                            layer_final_id: 'A.3.3',
                                            layer_title: 'Общий показатель: бег и велоспорт',
                                            layer_desc: undefined,
                                            sublayers: undefined,
                                            layer_type: 'A',
                                            layer_map: 'https://drive.google.com/file/d/1lEmy2ZZFffmztgrPeQK6gGkHlgl3rPRc/view'
                                        }
                                    ]
                                },
                                {
                                    group_id: 5,
                                    group_title: 'Индекс популярности улично-дорожной сети у туристов',
                                    group_desc: 'Аналитически расчитанный показатель популярности элеметнов дорожной сети у туристов при перемещении пешком. В расчета учитывается распределение объектов туристической инфраструктуры, цифровые следы, оставленные туристами,  распределение сервисов и стрит-ритейла',
                                    layers: [
                                        {
                                            layer_id: 1,
                                            layer_title: 'Индекс популярности улично-дорожной сети у туристов',
                                            layer_final_id: 'A.5.1',
                                            layer_desc: undefined,
                                            sublayers: undefined,
                                            layer_type: 'A',
                                            layer_map: 'https://drive.google.com/file/d/11caZ9g8QV-lNW2eKoy-AHJ5EF2S1WZT_/view'
                                        }
                                    ]
                                },
                                {
                                    group_id: 6,
                                    group_title: 'Индекс социальной активности',
                                    group_desc: 'Плотность цифровых следов, фотофиксаций / га. Геотегированные данные из социальных сетей, размеченные с использованием методов искуственного интелекта и разбитые на следующие категории: Туристы, Местные жители, фото в помещении, Фото на улице. Также доступно разделение по временам года и более детальная классификачия во времени.',
                                    layers: [
                                        {
                                            layer_id: 1,
                                            layer_title: 'Социальная активность на улице и в помещениях',
                                            layer_final_id: undefined,
                                            layer_desc: undefined,
                                            layer_type: 'A',
                                            layer_map: undefined,
                                            sublayers: [
                                                {
                                                    sublayer_id: 1,
                                                    sublayer_title: 'На улице',
                                                    sublayer_final_id: 'A.6.1-1',
                                                    sublayer_map: 'https://drive.google.com/file/d/1XUwIKlIafMNVUxPKUVAsQPr2BbK-nD_e/view'
                                                },
                                                {
                                                    sublayer_id: 2,
                                                    sublayer_title: 'В помещениях',
                                                    sublayer_final_id: 'A.6.1-2',
                                                    sublayer_map: 'https://drive.google.com/file/d/1IHZ7UENKe3sdQQL2LeQu0tQQS84sLJ63/view'
                                                }
                                            ]
                                        },
                                        {
                                            layer_id: 2,
                                            layer_title: 'Социальная активность у туристов и местных жителей',
                                            layer_final_id: undefined,
                                            layer_desc: undefined,
                                            layer_map: undefined,
                                            layer_type: 'A',
                                            sublayers: [
                                                {
                                                    sublayer_id: 1,
                                                    sublayer_title: 'Туристы',
                                                    sublayer_final_id: 'A.6.2-1',
                                                    sublayer_map: 'https://drive.google.com/file/d/1sjvlqjcajxj1DbZ28RYW8EPyTGqxv9mi/view'
                                                },
                                                {
                                                    sublayer_id: 2,
                                                    sublayer_title: 'Местные жители',
                                                    sublayer_final_id: 'A.6.2-2',
                                                    sublayer_map: 'https://drive.google.com/file/d/14CdBm549_X7WJbqrjddHbb2vp8oHzw1d/view'
                                                }
                                            ]
                                        },
                                        {
                                            layer_id: 3,
                                            layer_title: 'Сезонная социальная активность',
                                            layer_desc: undefined,
                                            layer_final_id: undefined,
                                            layer_type: 'A',
                                            layer_map: undefined,
                                            sublayers: [
                                                {
                                                    sublayer_id: 1,
                                                    sublayer_title: 'Зимняя',
                                                    sublayer_final_id: 'A.6.3-1',
                                                    sublayer_map: 'https://drive.google.com/file/d/1wHvo8bh9oLJAt5oURl4N8ItfLAELbl96/view'
                                                },
                                                {
                                                    sublayer_id: 2,
                                                    sublayer_title: 'Весенняя',
                                                    sublayer_final_id: 'A.6.3-2',
                                                    sublayer_map: 'https://drive.google.com/file/d/1cmPGpTCAz52UXNcRmPtjkt-Es1CclXIB/view'
                                                },
                                                {
                                                    sublayer_id: 3,
                                                    sublayer_title: 'Летняя',
                                                    sublayer_final_id: 'A.6.3-3',
                                                    sublayer_map: 'https://drive.google.com/file/d/12cxgaUx2rrFHQGqTLUQQ8jsh-l2cj4YB/view'
                                                },
                                                {
                                                    sublayer_id: 4,
                                                    sublayer_title: 'Осенняя',
                                                    sublayer_final_id: 'A.6.3-4',
                                                    sublayer_map: 'https://drive.google.com/file/d/1Kg9JgH70fTGfqoKcf9sUfjQNSL4VURxS/view'
                                                },
                                            ]
                                        }
                                    ]
                                },
                                {
                                    group_id: 7,
                                    group_title: 'Обеспеченность городскими сервисами',
                                    group_desc: 'Обеспеченность территорий группами сервисов в зоне 15-ти минутной пешеходной доступности. Доступно для категорий Магазины и здравоохранение, Объекты образования, Общественное питание, Развлечения, Спорт и отдых. Итоговый индекс обеспеченности представляет собой сумму взвешенных значений перечисленных показателей. За основу взята оригинальная методология WalkScore (https://www.walkscore.com/methodology.shtml)',
                                    layers: [
                                        {
                                            layer_id: 1,
                                            layer_title: 'Общий показатель',
                                            layer_final_id: 'A.7.1',
                                            layer_desc: undefined,
                                            sublayers: undefined,
                                            layer_type: 'A',
                                            layer_map: 'https://drive.google.com/file/d/1-kj3Af6PS1xhRNNpMZXZrIG5LD9ErtBq/view'
                                        },
                                        {
                                            layer_id: 2,
                                            layer_title: 'Магазины и здравоохранение',
                                            layer_final_id: 'A.7.2',
                                            layer_desc: undefined,
                                            sublayers: undefined,
                                            layer_type: 'A',
                                            layer_map: 'https://drive.google.com/file/d/1zDnTBcAkYg6g1Hq5uhOYWfMFYI5rLO3d/view'
                                        },
                                        {
                                            layer_id: 3,
                                            layer_title: 'Объекты образования',
                                            layer_final_id: 'A.7.3',
                                            layer_desc: undefined,
                                            sublayers: undefined,
                                            layer_type: 'A',
                                            layer_map: 'https://drive.google.com/file/d/1ZwqaNyLMpcQq9ACY5mHMdkgNq8fWJS7x/view'
                                        },
                                        {
                                            layer_id: 4,
                                            layer_title: 'Общественное питание',
                                            layer_final_id: 'A.7.4',
                                            layer_desc: undefined,
                                            sublayers: undefined,
                                            layer_type: 'A',
                                            layer_map: 'https://drive.google.com/file/d/19no8mte9HZijc5yaKDMt5Bu1HN_tPdgn/view'
                                        },
                                        {
                                            layer_id: 5,
                                            layer_title: 'Развлечения',
                                            layer_final_id: 'A.7.5',
                                            layer_desc: undefined,
                                            sublayers: undefined,
                                            layer_type: 'A',
                                            layer_map: 'https://drive.google.com/file/d/1VdjhII0FXGEmd-IzFjBPnC4-lLHekJ0V/view'
                                        },
                                        {
                                            layer_id: 6,
                                            layer_title: 'Спорт и отдых',
                                            layer_final_id: 'A.7.6',
                                            layer_desc: undefined,
                                            sublayers: undefined,
                                            layer_type: 'A',
                                            layer_map: 'https://drive.google.com/file/d/18-3otdZ4qJdgWKptqHl7EtfKRuxxbN8E/view'
                                        },
                                    ]
                                },
                            ]
                    },
                },
                {
                    cat_id: 'B',
                    cat_title: 'Мобильность',
                    cat_content: {
                        groups: [
                            {
                                group_id: 1,
                                group_title: 'Безопасность на дорогах (Плотность ДТП)',
                                group_desc: 'Плотность дорожно-транспортых происшествий. Официальная статистика ГИБДД. Доступно выделение участков с наибольшим количеством жертв / пострадавших, оценка различных временных периодов',
                                layers: [
                                    {
                                        layer_id: 1,
                                        layer_final_id: 'B.1.1',
                                        layer_title: 'Безопасность на дорогах (Плотность ДТП)',
                                        layer_desc: undefined,
                                        sublayers: undefined,
                                        layer_type: 'T',
                                        layer_map: undefined,
                                    }
                                ]
                            },
                            {
                                group_id: 4,
                                group_title: 'Зоны пешеходной доступности социально значимых объектов и инфраструктуры (800 м)',
                                group_desc: 'Изохроны десятиминутной пешеходной доступности социально значимых сервисов.',
                                layers: [
                                    {
                                        layer_id: 1,
                                        layer_final_id: 'B.4.1',
                                        layer_title: 'Детские сады',
                                        layer_desc: undefined,
                                        sublayers: undefined,
                                        layer_type: 'A',
                                        layer_map: 'https://drive.google.com/file/d/1CbMxeQJWxq1Obz9Khoo2EXlBs2dc9a1k/view'
                                    },
                                    {
                                        layer_id: 2,
                                        layer_final_id: 'B.4.2',
                                        layer_title: 'Школы',
                                        layer_desc: undefined,
                                        sublayers: undefined,
                                        layer_type: 'A',
                                        layer_map: 'https://drive.google.com/file/d/1xLjgEqM7YkK3NUF76697csfYZ0_KnRu9/view'
                                    },
                                    {
                                        layer_id: 3,
                                        layer_final_id: 'B.4.3',
                                        layer_title: 'Благоустроенное озеленение',
                                        layer_desc: undefined,
                                        sublayers: undefined,
                                        layer_type: 'A',
                                        layer_map: 'https://drive.google.com/file/d/1qvI6xVlJAegPDisQ8EAexVdfR30UYWKM/view'
                                    },
                                    {
                                        layer_id: 4,
                                        layer_final_id: 'B.4.4',
                                        layer_title: 'Станции метро',
                                        layer_desc: undefined,
                                        sublayers: undefined,
                                        layer_type: 'A',
                                        layer_map: 'https://drive.google.com/file/d/1Ljz3YULYwPtDpin-UWriIz-vfpfJZ2gg/view'
                                    },
                                    {
                                        layer_id: 5,
                                        layer_final_id: 'B.4.5',
                                        layer_title: 'Парковки',
                                        layer_desc: undefined,
                                        sublayers: undefined,
                                        layer_type: 'A',
                                        layer_map: 'https://drive.google.com/file/d/1nsctgaI3HJCjv3nhxQ-GYnBE2u3Rt__q/view'
                                    },
                                    {
                                        layer_id: 6,
                                        layer_final_id: 'B.4.6',
                                        layer_title: 'Остановки общественного транспорта',
                                        layer_desc: undefined,
                                        sublayers: undefined,
                                        layer_type: 'A',
                                        layer_map: 'https://drive.google.com/file/d/1oeQOPwwur_Kq_ah2x-MiQ_QUhF2SbJOL/view'
                                    }
                                ]
                            },
                            {
                                group_id: 5,
                                group_desc: 'Классификация участков транспортной инфраструктуры по востребованности у жителей при перемещении на автомобиле. В расчете участвуют данные по населению и сервисам. ',
                                group_title: 'Востребованность транспортной инфраструктуры',
                                layers: [
                                    {
                                        layer_title: 'Востребованность транспортной инфраструктуры',
                                        layer_id: 1,
                                        layer_final_id: 'B.5.1',
                                        layer_desc: undefined,
                                        sublayers: undefined,
                                        layer_type: 'A',
                                        layer_map: 'https://drive.google.com/file/d/1Zq-7B1yxW8rwpcZvrPL6ftxXDh8sTlOR/view'
                                    }
                                ]
                            },
                            {
                                group_id: 6,
                                group_title: 'Востребованность пешеходной инфраструктуры',
                                group_desc: 'Классификация участков транспортной инфраструктуры по востребованности у жителей при перемещении пешком. В расчете участвуют данные по населению, оставновкам общественного транспорта и сервисам',
                                layers: [
                                    {
                                        layer_id: 1,
                                        layer_title: 'Востребованность пешеходной инфраструктуры',
                                        layer_final_id: 'B.6.1',
                                        layer_desc: undefined,
                                        sublayers: undefined,
                                        layer_type: 'A',
                                        layer_map: 'https://drive.google.com/file/d/1tPpv-IRgdiXOc4zPGHFaJEtmhR8XK9BQ/view'
                                    }
                                ]
                            },
                            {
                                group_id: 7,
                                group_title: 'Общественный транспорт',
                                group_desc: undefined,
                                layers: [
                                    {
                                        layer_id: 1,
                                        layer_title: 'Остановки общественного транспорта',
                                        layer_final_id: 'B.7.1',
                                        layer_desc: 'Расположение остановок общественного транспорта',
                                        sublayers: undefined,
                                        layer_type: 'T',
                                        layer_map: 'https://drive.google.com/file/d/1-tFBMPJni9QwtXpZnkvr3Qk7PbV3iovu/view'
                                    },
                                    {
                                        layer_id: 2,
                                        layer_title: 'Маршруты общественного транспорта',
                                        layer_final_id: 'B.7.2',
                                        layer_desc: 'Распределение маршрутов общественного транспорта по типам транспорта на территории города',
                                        sublayers: undefined,
                                        layer_type: 'T',
                                        layer_map: 'https://drive.google.com/file/d/1oQBwuSQaLGUZDN-PsKme2s5kEwfVtB1T/view'
                                    },
                                    {
                                        layer_id: 3,
                                        layer_title: 'Станции метро',
                                        layer_final_id: 'B.7.3',
                                        layer_desc: 'Расположение станций метро и вестибюлей станций.',
                                        sublayers: undefined,
                                        layer_type: 'T',
                                        layer_map: undefined
                                    },
                                    {
                                        layer_id: 4,
                                        layer_title: 'Платформы ж/д транспорта',
                                        layer_desc: 'Расположение станций и остановочных пунктов железнодорожного транспорта',
                                        layer_final_id: 'B.7.4',
                                        sublayers: undefined,
                                        layer_type: 'T',
                                        layer_map: undefined
                                    }
                                ]
                            }
                        ]
                    },
                },
                {
                    cat_id: 'C',
                    cat_title: 'Городские сервисы',
                    cat_content: {
                        groups: [
                            {
                                group_id: 1,
                                group_title: 'Плотность социально-досуговых функций (медицина, общество, культура, досуг)',
                                group_desc: 'Распределение на территории сервисов, относящихся к социально-досуговой инфраструктуре. Представление в виде плотностной гексагональной сетки с размером ячейки 1 га.',
                                layers: [
                                    {
                                        layer_id: 1,
                                        layer_title: 'Плотность социально-досуговых функций (медицина, общество, культура, досуг)',
                                        layer_final_id: 'C.1.1',
                                        layer_desc: undefined,
                                        sublayers: undefined,
                                        layer_type: 'A',
                                        layer_map: 'https://drive.google.com/file/d/1uWsnh1k1jrsq4c39yzzMBqcq1JXtqrq9/view'
                                    }
                                ]
                            },
                            {
                                group_id: 2,
                                group_title: 'Плотность общественно-деловых функций (бизнес, услуги, государство)',
                                group_desc: 'Распределение на территории сервисов, относящихся к общественно-деловой инфраструктуре. Представление в виде плотностной гексагональной сетки с размером ячейки 1 га',
                                layers: [
                                    {
                                        layer_id: 1,
                                        layer_title: 'Плотность общественно-деловых функций (бизнес, услуги, государство)',
                                        sublayers: undefined,
                                        layer_desc: undefined,
                                        layer_type: 'A',
                                        layer_final_id: 'C.2.1',
                                        layer_map: 'https://drive.google.com/file/d/1Wlly0YQiG9WWiRURMj6_DzSVPKjclxao/view'
                                    }
                                ]
                            },
                            {
                                group_id: 3,
                                group_title: 'Концентрация точек торговли на 100 метров улицы',
                                group_desc: 'Распределение объектов стрит-ритейла вдоль осей элементов улично-дорожно сети.',
                                layers: [
                                    {
                                        layer_id: 1,
                                        layer_title: 'Концентрация точек торговли на 100 метров улицы',
                                        layer_type: 'A',
                                        sublayers: undefined,
                                        layer_desc: undefined,
                                        layer_final_id: 'C.3.1',
                                        layer_map: 'https://drive.google.com/file/d/1l-eA-G1t7HD5aoMXsJoIE_Ih4EJQY4k-/view'
                                    }
                                ]
                            }
                        ]
                    },
                },
                {
                    cat_id: 'D',
                    cat_title: 'Градостроительные данные',
                    cat_content: {
                        groups: [
                            {
                                group_id: 1,
                                group_title: 'Программа реновации',
                                group_desc: 'Объекты реновации для Москвы',
                                layers: [
                                    {
                                        layer_id: 1,
                                        layer_desc: undefined,
                                        layer_type: 'A',
                                        layer_title: 'Программа реновации',
                                        sublayers: undefined,
                                        layer_final_id: 'D.1.1',
                                        layer_map: undefined
                                    }
                                ]
                            },
                            {
                                group_id: 2,
                                group_title: 'Строящийся жилой фонд',
                                group_desc: 'Объекты строящегося жилого фонда из официальных источников',
                                layers: [
                                    {
                                        layer_id: 1,
                                        layer_desc: undefined,
                                        layer_type: 'A',
                                        layer_title: 'Программа реновации',
                                        layer_final_id: 'D.2.1',
                                        sublayers: undefined,
                                        layer_map: undefined
                                    }
                                ]
                            },
                            {
                                group_id: 3,
                                group_title: 'Жилая/нежилая застройка',
                                group_desc: 'Информация о этажности и типе застройки, годе ввода здания в эксплутацию',
                                layers: [
                                    {
                                        layer_id: 1,
                                        layer_desc: undefined,
                                        layer_type: 'A',
                                        layer_title: 'Жилая/нежилая застройка',
                                        sublayers: undefined,
                                        layer_final_id: 'D.3.1',
                                        layer_map: 'https://drive.google.com/file/d/16lQGYjfte_sxKf4K51fSAdr6_NcO0ltg/view'
                                    }
                                ]
                            },
                            {
                                group_id: 4,
                                group_title: 'Этажность застройки',
                                group_desc: 'Информация о этажности и типе застройки, годе ввода здания в эксплутацию',
                                layers: [
                                    {
                                        layer_id: 1,
                                        layer_type: 'A',
                                        layer_title: 'Этажность застройки',
                                        layer_desc: undefined,
                                        layer_final_id: 'D.4.1',
                                        sublayers: undefined,
                                        layer_map: 'https://drive.google.com/file/d/1BchNl8HNDvdZSjsbyIX4WJcF2FvWlzc6/view'
                                    }
                                ]
                            },
                            {
                                group_id: 5,
                                group_title: 'Периоды застройки',
                                group_desc: 'Информация о этажности и типе застройки, годе ввода здания в эксплутацию',
                                layers: [
                                    {
                                        layer_id: 1,
                                        layer_type: 'A',
                                        layer_final_id: 'D.5.1',
                                        layer_desc: '',
                                        layer_title: 'Периоды застройки',
                                        sublayers: undefined,
                                        layer_map: 'https://drive.google.com/file/d/1iVfF3skNAySvUzvvdStpd1iMZ_-sWgSG/view'
                                    }
                                ]
                            },
                            {
                                group_id: 6,
                                group_title: 'Административно-территориальное деление',
                                group_desc: 'Городское административно-территориальное деление',
                                layers: [
                                    {
                                        layer_title: 'Административно-территориальное деление',
                                        layer_id: 1,
                                        layer_desc: undefined,
                                        layer_type: 'A',
                                        layer_final_id: 'D.6.1',
                                        sublayers: undefined,
                                        layer_map: undefined,
                                    }
                                ]
                            },
                            {
                                group_id: 8,
                                group_title: 'Территориальное зонирование (ПЗЗ - Правила землепользования и застройки)',
                                group_desc: 'Информация о видах разрешенного использования территорий и предельно допустимых параметрах застройки',
                                layers: [
                                    {
                                        layer_id: 1,
                                        layer_title: 'Зоны',
                                        layer_type: 'A',
                                        layer_desc: undefined,
                                        layer_final_id: 'D.8.1',
                                        sublayers: undefined,
                                        layer_map: undefined
                                    },
                                    {
                                        layer_id: 2,
                                        layer_title: 'Подзоны',
                                        layer_type: 'A',
                                        layer_desc: undefined,
                                        layer_final_id: 'D.8.2',
                                        sublayers: undefined,
                                        layer_map: undefined
                                    }
                                ]
                            },
                            {
                                group_id: 9,
                                group_title: 'Кадастровые кварталы',
                                group_desc: 'Границы кадастровых кварталов',
                                layers: [
                                    {
                                        layer_id: 1,
                                        layer_desc: undefined,
                                        layer_title: 'Кадастровые кварталы',
                                        layer_type: 'A',
                                        sublayers: undefined,
                                        layer_final_id: 'D.9.1',
                                        layer_map: undefined
                                    }
                                ]
                            },
                            {
                                group_id: 12,
                                group_title: 'Ценные исторические и культурные объекты и территории',
                                group_desc: 'Объекты культурного наследия из единого реестра Министерства культуры РФ',
                                layers: [
                                    {
                                        layer_id: 1,
                                        layer_type: 'A',
                                        layer_title: 'Объекты культурного наследия',
                                        layer_desc: undefined,
                                        sublayers: undefined,
                                        layer_final_id: 'D.12.1',
                                        layer_map: 'https://drive.google.com/file/d/1vPRCdSf_gt9aNdpfAjhgnzN3AmqwAhjo/view'
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    cat_id: 'E',
                    cat_title: 'Экология',
                    cat_content: {
                        groups: [
                            {
                                group_id: 1,
                                group_title: 'Индекс видимого озеленения (Green View Index)',
                                group_desc: 'Процент от общего обзора человека, которое составляет озеленение. При расчете использованы алгоритмы ComputerVision',
                                layers: [
                                    {
                                        layer_id: 1,
                                        layer_title: 'Индекс видимого озеленения (Green View Index)',
                                        layer_final_id: 'E.1.1',
                                        layer_type: 'A',
                                        layer_desc: undefined,
                                        sublayers: undefined,
                                        layer_map: 'https://drive.google.com/file/d/1ODpmc8WstdyEET0d8k7Uv6DxyVBmy_bq/view'
                                    }
                                ]
                            },
                            {
                                group_id: 2,
                                group_title: 'Температура поверхности (Land Surface Temperature)',
                                group_desc: 'Температура поверхности в градусах Цельсия. Источником информации служат мультиспектральные космоснимки',
                                layers: [
                                    {
                                        layer_id: 1,
                                        layer_title: 'Температура поверхности (Land Surface Temperature)',
                                        layer_type: 'A',
                                        layer_desc: undefined,
                                        layer_final_id: 'E.2.1',
                                        sublayers: undefined,
                                        layer_map: 'https://drive.google.com/file/d/13TDo0pwoFcAmSQvNmh6C-CbRo-bZwg2J/view'
                                    }
                                ]
                            },
                            {
                                group_id: 3,
                                group_title: 'NDVI',
                                group_desc: 'Вегитационный индекс',
                                layers: [
                                    {
                                        layer_id: 1,
                                        layer_title: 'NDVI',
                                        layer_desc: undefined,
                                        layer_type: 'A',
                                        layer_final_id: 'E.3.1',
                                        sublayers: undefined,
                                        layer_map: undefined
                                    }
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    ],
    'comment': 'Количество видов анализа будет пополняться'
};

