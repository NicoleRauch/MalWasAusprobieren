// ==UserScript==
// @name        MalWasAusprobieren
// @namespace   nicolerauch
// @author      nicolerauch & myria
// @description TBD
// @run-at      document-end
// @include     *://www.wanikani.com/radicals/*
// @version     0.1.0
// @run-at      document-end
// ==/UserScript==

(function () {
    'use strict';


    var allRadicals = [
        {
            "id": 6,
            "level": 1,
            "slug": "barb",
            "characters": "亅",
            "character_images": []
        },
        {
            "id": 18,
            "level": 1,
            "slug": "big",
            "characters": "大",
            "character_images": []
        },
        {
            "id": 25,
            "level": 1,
            "slug": "construction",
            "characters": "工",
            "character_images": []
        },
        {
            "id": 15,
            "level": 1,
            "slug": "cross",
            "characters": "十",
            "character_images": []
        },
        {
            "id": 3,
            "level": 1,
            "slug": "drop",
            "characters": "丶",
            "character_images": []
        },
        {
            "id": 12,
            "level": 1,
            "slug": "enter",
            "characters": "入",
            "character_images": []
        },
        {
            "id": 2,
            "level": 1,
            "slug": "fins",
            "characters": "ハ",
            "character_images": []
        },
        {
            "id": 1,
            "level": 1,
            "slug": "ground",
            "characters": "一",
            "character_images": []
        },
        {
            "id": 8762,
            "level": 1,
            "slug": "gun",
            "characters": null,
            "character_images": [
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1055-subject-8762-normal-weight-black-original.png?1520987608",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "original"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1055-subject-8762-normal-weight-black-1024px.png?1520987608",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "1024px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1055-subject-8762-normal-weight-black-512px.png?1520987608",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "512x512",
                        "style_name": "512px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1055-subject-8762-normal-weight-black-256px.png?1520987608",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "256x256",
                        "style_name": "256px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1055-subject-8762-normal-weight-black-128px.png?1520987608",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "128x128",
                        "style_name": "128px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1055-subject-8762-normal-weight-black-64px.png?1520987608",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "64x64",
                        "style_name": "64px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1055-subject-8762-normal-weight-black-32px.png?1520987608",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "32x32",
                        "style_name": "32px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/577-subject-8762-without-css-original.svg?1520987228",
                    "metadata": {
                        "inline_styles": false
                    },
                    "content_type": "image/svg+xml"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/99-subject-8762-with-css-original.svg?1520987072",
                    "metadata": {
                        "inline_styles": true
                    },
                    "content_type": "image/svg+xml"
                }
            ]
        },
        {
            "id": 8763,
            "level": 1,
            "slug": "leaf",
            "characters": null,
            "character_images": [
                {
                    "url": "https://cdn.wanikani.com/images/legacy/100-subject-8763-with-css-original.svg?1520987074",
                    "metadata": {
                        "inline_styles": true
                    },
                    "content_type": "image/svg+xml"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/578-subject-8763-without-css-original.svg?1520987228",
                    "metadata": {
                        "inline_styles": false
                    },
                    "content_type": "image/svg+xml"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1056-subject-8763-normal-weight-black-original.png?1520987610",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "original"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1056-subject-8763-normal-weight-black-1024px.png?1520987610",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "1024px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1056-subject-8763-normal-weight-black-512px.png?1520987610",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "512x512",
                        "style_name": "512px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1056-subject-8763-normal-weight-black-256px.png?1520987610",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "256x256",
                        "style_name": "256px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1056-subject-8763-normal-weight-black-128px.png?1520987610",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "128x128",
                        "style_name": "128px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1056-subject-8763-normal-weight-black-64px.png?1520987610",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "64x64",
                        "style_name": "64px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1056-subject-8763-normal-weight-black-32px.png?1520987610",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "32x32",
                        "style_name": "32px"
                    },
                    "content_type": "image/png"
                }
            ]
        },
        {
            "id": 8,
            "level": 1,
            "slug": "lid",
            "characters": "亠",
            "character_images": []
        },
        {
            "id": 20,
            "level": 1,
            "slug": "mountain",
            "characters": "山",
            "character_images": []
        },
        {
            "id": 16,
            "level": 1,
            "slug": "mouth",
            "characters": "口",
            "character_images": []
        },
        {
            "id": 11,
            "level": 1,
            "slug": "nine",
            "characters": "九",
            "character_images": []
        },
        {
            "id": 9,
            "level": 1,
            "slug": "person",
            "characters": "人",
            "character_images": []
        },
        {
            "id": 13,
            "level": 1,
            "slug": "power",
            "characters": "力",
            "character_images": []
        },
        {
            "id": 14,
            "level": 1,
            "slug": "prison",
            "characters": "勹",
            "character_images": []
        },
        {
            "id": 21,
            "level": 1,
            "slug": "river",
            "characters": "川",
            "character_images": []
        },
        {
            "id": 4,
            "level": 1,
            "slug": "seven",
            "characters": "七",
            "character_images": []
        },
        {
            "id": 5,
            "level": 1,
            "slug": "slide",
            "characters": "丿",
            "character_images": []
        },
        {
            "id": 8761,
            "level": 1,
            "slug": "stick",
            "characters": null,
            "character_images": [
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1066-subject-8761-normal-weight-black-original.png?1520987638",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "original"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1066-subject-8761-normal-weight-black-1024px.png?1520987638",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "1024px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1066-subject-8761-normal-weight-black-512px.png?1520987638",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "512x512",
                        "style_name": "512px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1066-subject-8761-normal-weight-black-256px.png?1520987638",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "256x256",
                        "style_name": "256px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1066-subject-8761-normal-weight-black-128px.png?1520987638",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "128x128",
                        "style_name": "128px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1066-subject-8761-normal-weight-black-64px.png?1520987638",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "64x64",
                        "style_name": "64px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1066-subject-8761-normal-weight-black-32px.png?1520987638",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "32x32",
                        "style_name": "32px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/588-subject-8761-without-css-original.svg?1520987231",
                    "metadata": {
                        "inline_styles": false
                    },
                    "content_type": "image/svg+xml"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/110-subject-8761-with-css-original.svg?1520987081",
                    "metadata": {
                        "inline_styles": true
                    },
                    "content_type": "image/svg+xml"
                }
            ]
        },
        {
            "id": 22,
            "level": 1,
            "slug": "sun",
            "characters": "日",
            "character_images": []
        },
        {
            "id": 10,
            "level": 1,
            "slug": "toe",
            "characters": "ト",
            "character_images": []
        },
        {
            "id": 23,
            "level": 1,
            "slug": "tree",
            "characters": "木",
            "character_images": []
        },
        {
            "id": 7,
            "level": 1,
            "slug": "two",
            "characters": "二",
            "character_images": []
        },
        {
            "id": 19,
            "level": 1,
            "slug": "woman",
            "characters": "女",
            "character_images": []
        },
        {
            "id": 50,
            "level": 2,
            "slug": "book",
            "characters": "本",
            "character_images": []
        },
        {
            "id": 36,
            "level": 2,
            "slug": "bow",
            "characters": "弓",
            "character_images": []
        },
        {
            "id": 34,
            "level": 2,
            "slug": "child",
            "characters": "子",
            "character_images": []
        },
        {
            "id": 126,
            "level": 2,
            "slug": "cow",
            "characters": "牛",
            "character_images": []
        },
        {
            "id": 17,
            "level": 2,
            "slug": "dirt",
            "characters": "土",
            "character_images": []
        },
        {
            "id": 47,
            "level": 2,
            "slug": "dog",
            "characters": "犬",
            "character_images": []
        },
        {
            "id": 33,
            "level": 2,
            "slug": "evening",
            "characters": "夕",
            "character_images": []
        },
        {
            "id": 53,
            "level": 2,
            "slug": "eye",
            "characters": "目",
            "character_images": []
        },
        {
            "id": 46,
            "level": 2,
            "slug": "fire",
            "characters": "火",
            "character_images": []
        },
        {
            "id": 39,
            "level": 2,
            "slug": "five",
            "characters": "五",
            "character_images": []
        },
        {
            "id": 37,
            "level": 2,
            "slug": "flag",
            "characters": "尸",
            "character_images": []
        },
        {
            "id": 38,
            "level": 2,
            "slug": "hair",
            "characters": "彡",
            "character_images": []
        },
        {
            "id": 41,
            "level": 2,
            "slug": "hand",
            "characters": "手",
            "character_images": []
        },
        {
            "id": 29,
            "level": 2,
            "slug": "head",
            "characters": "冂",
            "character_images": []
        },
        {
            "id": 40,
            "level": 2,
            "slug": "heaven",
            "characters": "天",
            "character_images": []
        },
        {
            "id": 48,
            "level": 2,
            "slug": "king",
            "characters": "王",
            "character_images": []
        },
        {
            "id": 28,
            "level": 2,
            "slug": "legs",
            "characters": "儿",
            "character_images": []
        },
        {
            "id": 49,
            "level": 2,
            "slug": "middle",
            "characters": "中",
            "character_images": []
        },
        {
            "id": 43,
            "level": 2,
            "slug": "moon",
            "characters": "月",
            "character_images": []
        },
        {
            "id": 26,
            "level": 2,
            "slug": "narwhal",
            "characters": "ナ",
            "character_images": []
        },
        {
            "id": 140,
            "level": 2,
            "slug": "private",
            "characters": "ム",
            "character_images": []
        },
        {
            "id": 51,
            "level": 2,
            "slug": "rice-paddy",
            "characters": "田",
            "character_images": []
        },
        {
            "id": 35,
            "level": 2,
            "slug": "small",
            "characters": "小",
            "character_images": []
        },
        {
            "id": 55,
            "level": 2,
            "slug": "stand",
            "characters": "立",
            "character_images": []
        },
        {
            "id": 54,
            "level": 2,
            "slug": "stone",
            "characters": "石",
            "character_images": []
        },
        {
            "id": 30,
            "level": 2,
            "slug": "stool",
            "characters": "又",
            "character_images": []
        },
        {
            "id": 44,
            "level": 2,
            "slug": "stop",
            "characters": "止",
            "character_images": []
        },
        {
            "id": 27,
            "level": 2,
            "slug": "street",
            "characters": "丁",
            "character_images": []
        },
        {
            "id": 24,
            "level": 2,
            "slug": "sword",
            "characters": "刀",
            "character_images": []
        },
        {
            "id": 32,
            "level": 2,
            "slug": "thousand",
            "characters": "千",
            "character_images": []
        },
        {
            "id": 31,
            "level": 2,
            "slug": "treasure",
            "characters": "メ",
            "character_images": []
        },
        {
            "id": 45,
            "level": 2,
            "slug": "water",
            "characters": "水",
            "character_images": []
        },
        {
            "id": 52,
            "level": 2,
            "slug": "white",
            "characters": "白",
            "character_images": []
        },
        {
            "id": 42,
            "level": 2,
            "slug": "writing",
            "characters": "文",
            "character_images": []
        },
        {
            "id": 72,
            "level": 3,
            "slug": "arrow",
            "characters": "矢",
            "character_images": []
        },
        {
            "id": 62,
            "level": 3,
            "slug": "canopy",
            "characters": "广",
            "character_images": []
        },
        {
            "id": 66,
            "level": 3,
            "slug": "direction",
            "characters": "方",
            "character_images": []
        },
        {
            "id": 73,
            "level": 3,
            "slug": "door",
            "characters": "戸",
            "character_images": []
        },
        {
            "id": 70,
            "level": 3,
            "slug": "drawer-70",
            "characters": "母",
            "character_images": []
        },
        {
            "id": 61,
            "level": 3,
            "slug": "dry",
            "characters": "干",
            "character_images": []
        },
        {
            "id": 68,
            "level": 3,
            "slug": "father",
            "characters": "父",
            "character_images": []
        },
        {
            "id": 63,
            "level": 3,
            "slug": "fingers",
            "characters": "扌",
            "character_images": []
        },
        {
            "id": 67,
            "level": 3,
            "slug": "fur",
            "characters": "毛",
            "character_images": []
        },
        {
            "id": 8764,
            "level": 3,
            "slug": "hat",
            "characters": null,
            "character_images": [
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1105-subject-8764-normal-weight-black-original.png?1520987745",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "original"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1105-subject-8764-normal-weight-black-1024px.png?1520987745",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "1024px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1105-subject-8764-normal-weight-black-512px.png?1520987745",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "512x512",
                        "style_name": "512px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1105-subject-8764-normal-weight-black-256px.png?1520987745",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "256x256",
                        "style_name": "256px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1105-subject-8764-normal-weight-black-128px.png?1520987745",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "128x128",
                        "style_name": "128px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1105-subject-8764-normal-weight-black-64px.png?1520987745",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "64x64",
                        "style_name": "64px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1105-subject-8764-normal-weight-black-32px.png?1520987745",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "32x32",
                        "style_name": "32px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/149-subject-8764-with-css-original.svg?1520987093",
                    "metadata": {
                        "inline_styles": true
                    },
                    "content_type": "image/svg+xml"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/627-subject-8764-without-css-original.svg?1520987243",
                    "metadata": {
                        "inline_styles": false
                    },
                    "content_type": "image/svg+xml"
                }
            ]
        },
        {
            "id": 65,
            "level": 3,
            "slug": "heart",
            "characters": "心",
            "character_images": []
        },
        {
            "id": 210,
            "level": 3,
            "slug": "life",
            "characters": "生",
            "character_images": []
        },
        {
            "id": 238,
            "level": 3,
            "slug": "now",
            "characters": "今",
            "character_images": []
        },
        {
            "id": 69,
            "level": 3,
            "slug": "old",
            "characters": "古",
            "character_images": []
        },
        {
            "id": 64,
            "level": 3,
            "slug": "origin",
            "characters": "元",
            "character_images": []
        },
        {
            "id": 87,
            "level": 3,
            "slug": "poop",
            "characters": "幺",
            "character_images": []
        },
        {
            "id": 58,
            "level": 3,
            "slug": "ra-58",
            "characters": "ラ",
            "character_images": []
        },
        {
            "id": 59,
            "level": 3,
            "slug": "raptor-cage-59",
            "characters": "久",
            "character_images": []
        },
        {
            "id": 57,
            "level": 3,
            "slug": "spoon",
            "characters": "匕",
            "character_images": []
        },
        {
            "id": 71,
            "level": 3,
            "slug": "task",
            "characters": "用",
            "character_images": []
        },
        {
            "id": 102,
            "level": 3,
            "slug": "towel",
            "characters": "巾",
            "character_images": []
        },
        {
            "id": 8765,
            "level": 3,
            "slug": "triceratops",
            "characters": null,
            "character_images": [
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1114-subject-8765-normal-weight-black-original.png?1520987767",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "original"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1114-subject-8765-normal-weight-black-1024px.png?1520987767",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "1024px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1114-subject-8765-normal-weight-black-512px.png?1520987767",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "512x512",
                        "style_name": "512px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1114-subject-8765-normal-weight-black-256px.png?1520987767",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "256x256",
                        "style_name": "256px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1114-subject-8765-normal-weight-black-128px.png?1520987767",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "128x128",
                        "style_name": "128px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1114-subject-8765-normal-weight-black-64px.png?1520987767",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "64x64",
                        "style_name": "64px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1114-subject-8765-normal-weight-black-32px.png?1520987767",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "32x32",
                        "style_name": "32px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/158-subject-8765-with-css-original.svg?1520987096",
                    "metadata": {
                        "inline_styles": true
                    },
                    "content_type": "image/svg+xml"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/636-subject-8765-without-css-original.svg?1520987246",
                    "metadata": {
                        "inline_styles": false
                    },
                    "content_type": "image/svg+xml"
                }
            ]
        },
        {
            "id": 60,
            "level": 3,
            "slug": "winter",
            "characters": "夂",
            "character_images": []
        },
        {
            "id": 77,
            "level": 4,
            "slug": "alligator",
            "characters": "也",
            "character_images": []
        },
        {
            "id": 85,
            "level": 4,
            "slug": "bamboo",
            "characters": "竹",
            "character_images": []
        },
        {
            "id": 100,
            "level": 4,
            "slug": "bed",
            "characters": "巴",
            "character_images": []
        },
        {
            "id": 8766,
            "level": 4,
            "slug": "beggar",
            "characters": null,
            "character_images": [
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1119-subject-8766-normal-weight-black-original.png?1520987779",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "original"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1119-subject-8766-normal-weight-black-1024px.png?1520987779",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "1024px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1119-subject-8766-normal-weight-black-512px.png?1520987779",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "512x512",
                        "style_name": "512px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1119-subject-8766-normal-weight-black-256px.png?1520987779",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "256x256",
                        "style_name": "256px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1119-subject-8766-normal-weight-black-128px.png?1520987779",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "128x128",
                        "style_name": "128px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1119-subject-8766-normal-weight-black-64px.png?1520987779",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "64x64",
                        "style_name": "64px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1119-subject-8766-normal-weight-black-32px.png?1520987779",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "32x32",
                        "style_name": "32px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/163-subject-8766-with-css-original.svg?1520987099",
                    "metadata": {
                        "inline_styles": true
                    },
                    "content_type": "image/svg+xml"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/641-subject-8766-without-css-original.svg?1520987247",
                    "metadata": {
                        "inline_styles": false
                    },
                    "content_type": "image/svg+xml"
                }
            ]
        },
        {
            "id": 81,
            "level": 4,
            "slug": "branch",
            "characters": "支",
            "character_images": []
        },
        {
            "id": 93,
            "level": 4,
            "slug": "car",
            "characters": "車",
            "character_images": []
        },
        {
            "id": 79,
            "level": 4,
            "slug": "ceremony",
            "characters": "弋",
            "character_images": []
        },
        {
            "id": 116,
            "level": 4,
            "slug": "cliff",
            "characters": "厂",
            "character_images": []
        },
        {
            "id": 88,
            "level": 4,
            "slug": "ear",
            "characters": "耳",
            "character_images": []
        },
        {
            "id": 82,
            "level": 4,
            "slug": "energy",
            "characters": "气",
            "character_images": []
        },
        {
            "id": 90,
            "level": 4,
            "slug": "flowers",
            "characters": "艹",
            "character_images": []
        },
        {
            "id": 95,
            "level": 4,
            "slug": "foot",
            "characters": "足",
            "character_images": []
        },
        {
            "id": 76,
            "level": 4,
            "slug": "forehead",
            "characters": "冖",
            "character_images": []
        },
        {
            "id": 8767,
            "level": 4,
            "slug": "horns",
            "characters": null,
            "character_images": [
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1128-subject-8767-normal-weight-black-original.png?1520987802",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "original"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1128-subject-8767-normal-weight-black-1024px.png?1520987802",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "1024px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1128-subject-8767-normal-weight-black-512px.png?1520987802",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "512x512",
                        "style_name": "512px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1128-subject-8767-normal-weight-black-256px.png?1520987802",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "256x256",
                        "style_name": "256px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1128-subject-8767-normal-weight-black-128px.png?1520987802",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "128x128",
                        "style_name": "128px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1128-subject-8767-normal-weight-black-64px.png?1520987802",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "64x64",
                        "style_name": "64px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1128-subject-8767-normal-weight-black-32px.png?1520987802",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "32x32",
                        "style_name": "32px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/172-subject-8767-with-css-original.svg?1520987102",
                    "metadata": {
                        "inline_styles": true
                    },
                    "content_type": "image/svg+xml"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/650-subject-8767-without-css-original.svg?1520987250",
                    "metadata": {
                        "inline_styles": false
                    },
                    "content_type": "image/svg+xml"
                }
            ]
        },
        {
            "id": 89,
            "level": 4,
            "slug": "insect",
            "characters": "虫",
            "character_images": []
        },
        {
            "id": 75,
            "level": 4,
            "slug": "leader",
            "characters": "ｲ",
            "character_images": []
        },
        {
            "id": 99,
            "level": 4,
            "slug": "loiter",
            "characters": "彳",
            "character_images": []
        },
        {
            "id": 154,
            "level": 4,
            "slug": "master",
            "characters": "主",
            "character_images": []
        },
        {
            "id": 74,
            "level": 4,
            "slug": "measurement",
            "characters": "寸",
            "character_images": []
        },
        {
            "id": 96,
            "level": 4,
            "slug": "not",
            "characters": "不",
            "character_images": []
        },
        {
            "id": 101,
            "level": 4,
            "slug": "pi",
            "characters": "兀",
            "character_images": []
        },
        {
            "id": 84,
            "level": 4,
            "slug": "plate",
            "characters": "皿",
            "character_images": []
        },
        {
            "id": 92,
            "level": 4,
            "slug": "red",
            "characters": "赤",
            "character_images": []
        },
        {
            "id": 98,
            "level": 4,
            "slug": "rice",
            "characters": "米",
            "character_images": []
        },
        {
            "id": 78,
            "level": 4,
            "slug": "roof",
            "characters": "宀",
            "character_images": []
        },
        {
            "id": 97,
            "level": 4,
            "slug": "samurai",
            "characters": "士",
            "character_images": []
        },
        {
            "id": 91,
            "level": 4,
            "slug": "see",
            "characters": "見",
            "character_images": []
        },
        {
            "id": 94,
            "level": 4,
            "slug": "shellfish",
            "characters": "貝",
            "character_images": []
        },
        {
            "id": 8768,
            "level": 4,
            "slug": "spikes",
            "characters": null,
            "character_images": [
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1141-subject-8768-normal-weight-black-original.png?1520987835",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "original"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1141-subject-8768-normal-weight-black-1024px.png?1520987835",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "1024px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1141-subject-8768-normal-weight-black-512px.png?1520987835",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "512x512",
                        "style_name": "512px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1141-subject-8768-normal-weight-black-256px.png?1520987835",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "256x256",
                        "style_name": "256px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1141-subject-8768-normal-weight-black-128px.png?1520987835",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "128x128",
                        "style_name": "128px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1141-subject-8768-normal-weight-black-64px.png?1520987835",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "64x64",
                        "style_name": "64px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1141-subject-8768-normal-weight-black-32px.png?1520987835",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "32x32",
                        "style_name": "32px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/185-subject-8768-with-css-original.svg?1520987104",
                    "metadata": {
                        "inline_styles": true
                    },
                    "content_type": "image/svg+xml"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/663-subject-8768-without-css-original.svg?1520987253",
                    "metadata": {
                        "inline_styles": false
                    },
                    "content_type": "image/svg+xml"
                }
            ]
        },
        {
            "id": 80,
            "level": 4,
            "slug": "spirit",
            "characters": "ネ",
            "character_images": []
        },
        {
            "id": 86,
            "level": 4,
            "slug": "thread",
            "characters": "糸",
            "character_images": []
        },
        {
            "id": 211,
            "level": 4,
            "slug": "umbrella",
            "characters": "乚",
            "character_images": []
        },
        {
            "id": 83,
            "level": 4,
            "slug": "world",
            "characters": "世",
            "character_images": []
        },
        {
            "id": 115,
            "level": 5,
            "slug": "axe",
            "characters": "斤",
            "character_images": []
        },
        {
            "id": 120,
            "level": 5,
            "slug": "blue",
            "characters": "青",
            "character_images": []
        },
        {
            "id": 104,
            "level": 5,
            "slug": "coffin",
            "characters": "耂",
            "character_images": []
        },
        {
            "id": 110,
            "level": 5,
            "slug": "color",
            "characters": "色",
            "character_images": []
        },
        {
            "id": 213,
            "level": 5,
            "slug": "feathers",
            "characters": "羽",
            "character_images": []
        },
        {
            "id": 111,
            "level": 5,
            "slug": "go",
            "characters": "行",
            "character_images": []
        },
        {
            "id": 118,
            "level": 5,
            "slug": "gold",
            "characters": "金",
            "character_images": []
        },
        {
            "id": 123,
            "level": 5,
            "slug": "ice",
            "characters": "冫",
            "character_images": []
        },
        {
            "id": 122,
            "level": 5,
            "slug": "key",
            "characters": "乍",
            "character_images": []
        },
        {
            "id": 8770,
            "level": 5,
            "slug": "kick",
            "characters": null,
            "character_images": [
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1153-subject-8770-normal-weight-black-original.png?1520987866",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "original"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1153-subject-8770-normal-weight-black-1024px.png?1520987866",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "1024px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1153-subject-8770-normal-weight-black-512px.png?1520987866",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "512x512",
                        "style_name": "512px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1153-subject-8770-normal-weight-black-256px.png?1520987866",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "256x256",
                        "style_name": "256px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1153-subject-8770-normal-weight-black-128px.png?1520987866",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "128x128",
                        "style_name": "128px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1153-subject-8770-normal-weight-black-64px.png?1520987866",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "64x64",
                        "style_name": "64px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1153-subject-8770-normal-weight-black-32px.png?1520987866",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "32x32",
                        "style_name": "32px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/675-subject-8770-without-css-original.svg?1520987256",
                    "metadata": {
                        "inline_styles": false
                    },
                    "content_type": "image/svg+xml"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/197-subject-8770-with-css-original.svg?1520987107",
                    "metadata": {
                        "inline_styles": true
                    },
                    "content_type": "image/svg+xml"
                }
            ]
        },
        {
            "id": 171,
            "level": 5,
            "slug": "lantern",
            "characters": "开",
            "character_images": []
        },
        {
            "id": 113,
            "level": 5,
            "slug": "lip-ring",
            "characters": "可",
            "character_images": []
        },
        {
            "id": 108,
            "level": 5,
            "slug": "meat",
            "characters": "肉",
            "character_images": []
        },
        {
            "id": 155,
            "level": 5,
            "slug": "meet",
            "characters": "会",
            "character_images": []
        },
        {
            "id": 121,
            "level": 5,
            "slug": "mustache",
            "characters": "冋",
            "character_images": []
        },
        {
            "id": 119,
            "level": 5,
            "slug": "rain",
            "characters": "雨",
            "character_images": []
        },
        {
            "id": 124,
            "level": 5,
            "slug": "run",
            "characters": "走",
            "character_images": []
        },
        {
            "id": 117,
            "level": 5,
            "slug": "say",
            "characters": "言",
            "character_images": []
        },
        {
            "id": 114,
            "level": 5,
            "slug": "scooter",
            "characters": "⻌",
            "character_images": []
        },
        {
            "id": 109,
            "level": 5,
            "slug": "self",
            "characters": "自",
            "character_images": []
        },
        {
            "id": 103,
            "level": 5,
            "slug": "tsunami",
            "characters": "氵",
            "character_images": []
        },
        {
            "id": 106,
            "level": 5,
            "slug": "twenty",
            "characters": "廾",
            "character_images": []
        },
        {
            "id": 8769,
            "level": 5,
            "slug": "viking",
            "characters": null,
            "character_images": [
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1165-subject-8769-normal-weight-black-original.png?1520987896",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "original"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1165-subject-8769-normal-weight-black-1024px.png?1520987896",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "1024px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1165-subject-8769-normal-weight-black-512px.png?1520987896",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "512x512",
                        "style_name": "512px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1165-subject-8769-normal-weight-black-256px.png?1520987896",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "256x256",
                        "style_name": "256px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1165-subject-8769-normal-weight-black-128px.png?1520987896",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "128x128",
                        "style_name": "128px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1165-subject-8769-normal-weight-black-64px.png?1520987896",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "64x64",
                        "style_name": "64px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1165-subject-8769-normal-weight-black-32px.png?1520987896",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "32x32",
                        "style_name": "32px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/209-subject-8769-with-css-original.svg?1520987111",
                    "metadata": {
                        "inline_styles": true
                    },
                    "content_type": "image/svg+xml"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/687-subject-8769-without-css-original.svg?1520987257",
                    "metadata": {
                        "inline_styles": false
                    },
                    "content_type": "image/svg+xml"
                }
            ]
        },
        {
            "id": 125,
            "level": 5,
            "slug": "village",
            "characters": "里",
            "character_images": []
        },
        {
            "id": 112,
            "level": 5,
            "slug": "west",
            "characters": "西",
            "character_images": []
        },
        {
            "id": 107,
            "level": 5,
            "slug": "window",
            "characters": "毋",
            "character_images": []
        },
        {
            "id": 105,
            "level": 5,
            "slug": "wolverine",
            "characters": "ヨ",
            "character_images": []
        },
        {
            "id": 130,
            "level": 6,
            "slug": "angel",
            "characters": "ホ",
            "character_images": []
        },
        {
            "id": 144,
            "level": 6,
            "slug": "animal",
            "characters": "犭",
            "character_images": []
        },
        {
            "id": 137,
            "level": 6,
            "slug": "blood",
            "characters": "血",
            "character_images": []
        },
        {
            "id": 131,
            "level": 6,
            "slug": "boil",
            "characters": "灬",
            "character_images": []
        },
        {
            "id": 127,
            "level": 6,
            "slug": "box",
            "characters": "凵",
            "character_images": []
        },
        {
            "id": 267,
            "level": 6,
            "slug": "city",
            "characters": "市",
            "character_images": []
        },
        {
            "id": 133,
            "level": 6,
            "slug": "cyclops-133",
            "characters": "向",
            "character_images": []
        },
        {
            "id": 212,
            "level": 6,
            "slug": "death",
            "characters": "亡",
            "character_images": []
        },
        {
            "id": 139,
            "level": 6,
            "slug": "eat",
            "characters": "食",
            "character_images": []
        },
        {
            "id": 143,
            "level": 6,
            "slug": "fortune",
            "characters": "占",
            "character_images": []
        },
        {
            "id": 135,
            "level": 6,
            "slug": "grain",
            "characters": "禾",
            "character_images": []
        },
        {
            "id": 134,
            "level": 6,
            "slug": "jet",
            "characters": "未",
            "character_images": []
        },
        {
            "id": 128,
            "level": 6,
            "slug": "knife",
            "characters": "刂",
            "character_images": []
        },
        {
            "id": 142,
            "level": 6,
            "slug": "lack",
            "characters": "欠",
            "character_images": []
        },
        {
            "id": 129,
            "level": 6,
            "slug": "ladle",
            "characters": "斗",
            "character_images": []
        },
        {
            "id": 56,
            "level": 6,
            "slug": "lion",
            "characters": "L",
            "character_images": []
        },
        {
            "id": 138,
            "level": 6,
            "slug": "long",
            "characters": "長",
            "character_images": []
        },
        {
            "id": 141,
            "level": 6,
            "slug": "mama",
            "characters": "マ",
            "character_images": []
        },
        {
            "id": 156,
            "level": 6,
            "slug": "neck",
            "characters": "首",
            "character_images": []
        },
        {
            "id": 136,
            "level": 6,
            "slug": "sheep",
            "characters": "羊",
            "character_images": []
        },
        {
            "id": 174,
            "level": 6,
            "slug": "tongue",
            "characters": "舌",
            "character_images": []
        },
        {
            "id": 132,
            "level": 6,
            "slug": "yakuza",
            "characters": "歹",
            "character_images": []
        },
        {
            "id": 151,
            "level": 7,
            "slug": "bird",
            "characters": "鳥",
            "character_images": []
        },
        {
            "id": 153,
            "level": 7,
            "slug": "black",
            "characters": "黒",
            "character_images": []
        },
        {
            "id": 149,
            "level": 7,
            "slug": "boat",
            "characters": "舟",
            "character_images": []
        },
        {
            "id": 169,
            "level": 7,
            "slug": "circumference",
            "characters": "周",
            "character_images": []
        },
        {
            "id": 147,
            "level": 7,
            "slug": "clan",
            "characters": "氏",
            "character_images": []
        },
        {
            "id": 150,
            "level": 7,
            "slug": "fish",
            "characters": "魚",
            "character_images": []
        },
        {
            "id": 214,
            "level": 7,
            "slug": "gate",
            "characters": "門",
            "character_images": []
        },
        {
            "id": 146,
            "level": 7,
            "slug": "husband",
            "characters": "夫",
            "character_images": []
        },
        {
            "id": 228,
            "level": 7,
            "slug": "oneself",
            "characters": "己",
            "character_images": []
        },
        {
            "id": 233,
            "level": 7,
            "slug": "pig",
            "characters": "豕",
            "character_images": []
        },
        {
            "id": 148,
            "level": 7,
            "slug": "spear",
            "characters": "矛",
            "character_images": []
        },
        {
            "id": 145,
            "level": 7,
            "slug": "stamp",
            "characters": "卩",
            "character_images": []
        },
        {
            "id": 177,
            "level": 7,
            "slug": "table",
            "characters": "几",
            "character_images": []
        },
        {
            "id": 418,
            "level": 7,
            "slug": "teacher",
            "characters": "孝",
            "character_images": []
        },
        {
            "id": 192,
            "level": 7,
            "slug": "temple",
            "characters": "寺",
            "character_images": []
        },
        {
            "id": 419,
            "level": 7,
            "slug": "top-hat",
            "characters": "且",
            "character_images": []
        },
        {
            "id": 173,
            "level": 7,
            "slug": "wing",
            "characters": "勿",
            "character_images": []
        },
        {
            "id": 152,
            "level": 7,
            "slug": "yellow",
            "characters": "黄",
            "character_images": []
        },
        {
            "id": 217,
            "level": 8,
            "slug": "cage",
            "characters": "匚",
            "character_images": []
        },
        {
            "id": 8780,
            "level": 8,
            "slug": "cape",
            "characters": null,
            "character_images": [
                {
                    "url": "https://cdn.wanikani.com/images/legacy/973-subject-8780-normal-weight-black-original.png?1520987373",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "original"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/973-subject-8780-normal-weight-black-1024px.png?1520987373",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "1024px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/973-subject-8780-normal-weight-black-512px.png?1520987373",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "512x512",
                        "style_name": "512px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/973-subject-8780-normal-weight-black-256px.png?1520987373",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "256x256",
                        "style_name": "256px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/973-subject-8780-normal-weight-black-128px.png?1520987373",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "128x128",
                        "style_name": "128px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/973-subject-8780-normal-weight-black-64px.png?1520987373",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "64x64",
                        "style_name": "64px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/973-subject-8780-normal-weight-black-32px.png?1520987373",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "32x32",
                        "style_name": "32px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/17-subject-8780-with-css-original.svg?1520987055",
                    "metadata": {
                        "inline_styles": true
                    },
                    "content_type": "image/svg+xml"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/495-subject-8780-without-css-original.svg?1520987194",
                    "metadata": {
                        "inline_styles": false
                    },
                    "content_type": "image/svg+xml"
                }
            ]
        },
        {
            "id": 159,
            "level": 8,
            "slug": "cloud",
            "characters": "云",
            "character_images": []
        },
        {
            "id": 161,
            "level": 8,
            "slug": "compare",
            "characters": "比",
            "character_images": []
        },
        {
            "id": 172,
            "level": 8,
            "slug": "easy",
            "characters": "易",
            "character_images": []
        },
        {
            "id": 8771,
            "level": 8,
            "slug": "hills",
            "characters": null,
            "character_images": [
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1199-subject-8771-normal-weight-black-original.png?1520987974",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "original"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1199-subject-8771-normal-weight-black-1024px.png?1520987974",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "1024px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1199-subject-8771-normal-weight-black-512px.png?1520987974",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "512x512",
                        "style_name": "512px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1199-subject-8771-normal-weight-black-256px.png?1520987974",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "256x256",
                        "style_name": "256px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1199-subject-8771-normal-weight-black-128px.png?1520987974",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "128x128",
                        "style_name": "128px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1199-subject-8771-normal-weight-black-64px.png?1520987974",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "64x64",
                        "style_name": "64px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1199-subject-8771-normal-weight-black-32px.png?1520987974",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "32x32",
                        "style_name": "32px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/721-subject-8771-without-css-original.svg?1520987264",
                    "metadata": {
                        "inline_styles": false
                    },
                    "content_type": "image/svg+xml"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/243-subject-8771-with-css-original.svg?1520987120",
                    "metadata": {
                        "inline_styles": true
                    },
                    "content_type": "image/svg+xml"
                }
            ]
        },
        {
            "id": 170,
            "level": 8,
            "slug": "hole",
            "characters": "穴",
            "character_images": []
        },
        {
            "id": 157,
            "level": 8,
            "slug": "hook",
            "characters": "ユ",
            "character_images": []
        },
        {
            "id": 165,
            "level": 8,
            "slug": "horse",
            "characters": "馬",
            "character_images": []
        },
        {
            "id": 163,
            "level": 8,
            "slug": "net",
            "characters": "罒",
            "character_images": []
        },
        {
            "id": 164,
            "level": 8,
            "slug": "sickle",
            "characters": "釆",
            "character_images": []
        },
        {
            "id": 158,
            "level": 8,
            "slug": "snake",
            "characters": "巳",
            "character_images": []
        },
        {
            "id": 216,
            "level": 8,
            "slug": "suit",
            "characters": "合",
            "character_images": []
        },
        {
            "id": 160,
            "level": 8,
            "slug": "weapon",
            "characters": "殳",
            "character_images": []
        },
        {
            "id": 218,
            "level": 9,
            "slug": "anti",
            "characters": "反",
            "character_images": []
        },
        {
            "id": 220,
            "level": 9,
            "slug": "brush",
            "characters": "聿",
            "character_images": []
        },
        {
            "id": 176,
            "level": 9,
            "slug": "building",
            "characters": "阝",
            "character_images": []
        },
        {
            "id": 8772,
            "level": 9,
            "slug": "cleat",
            "characters": null,
            "character_images": [
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1207-subject-8772-normal-weight-black-original.png?1520987992",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "original"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1207-subject-8772-normal-weight-black-1024px.png?1520987992",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "1024px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1207-subject-8772-normal-weight-black-512px.png?1520987992",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "512x512",
                        "style_name": "512px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1207-subject-8772-normal-weight-black-256px.png?1520987992",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "256x256",
                        "style_name": "256px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1207-subject-8772-normal-weight-black-128px.png?1520987992",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "128x128",
                        "style_name": "128px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1207-subject-8772-normal-weight-black-64px.png?1520987992",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "64x64",
                        "style_name": "64px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1207-subject-8772-normal-weight-black-32px.png?1520987992",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "32x32",
                        "style_name": "32px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/251-subject-8772-with-css-original.svg?1520987122",
                    "metadata": {
                        "inline_styles": true
                    },
                    "content_type": "image/svg+xml"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/729-subject-8772-without-css-original.svg?1520987269",
                    "metadata": {
                        "inline_styles": false
                    },
                    "content_type": "image/svg+xml"
                }
            ]
        },
        {
            "id": 175,
            "level": 9,
            "slug": "clown",
            "characters": "咅",
            "character_images": []
        },
        {
            "id": 420,
            "level": 9,
            "slug": "coat-rack",
            "characters": "疋",
            "character_images": []
        },
        {
            "id": 229,
            "level": 9,
            "slug": "correct",
            "characters": "正",
            "character_images": []
        },
        {
            "id": 8820,
            "level": 9,
            "slug": "eternity",
            "characters": "永",
            "character_images": []
        },
        {
            "id": 8819,
            "level": 9,
            "slug": "gladiator",
            "characters": null,
            "character_images": [
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1437-subject-8819-without-css-original.svg?1544035142",
                    "metadata": {
                        "inline_styles": false
                    },
                    "content_type": "image/svg+xml"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1436-subject-8819-with-css-original.svg?1544035142",
                    "metadata": {
                        "inline_styles": true
                    },
                    "content_type": "image/svg+xml"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1435-subject-8819-normal-weight-black-original.png?1544035141",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "original"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1435-subject-8819-normal-weight-black-1024px.png?1544035141",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "1024px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1435-subject-8819-normal-weight-black-512px.png?1544035141",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "512x512",
                        "style_name": "512px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1435-subject-8819-normal-weight-black-256px.png?1544035141",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "256x256",
                        "style_name": "256px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1435-subject-8819-normal-weight-black-128px.png?1544035141",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "128x128",
                        "style_name": "128px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1435-subject-8819-normal-weight-black-64px.png?1544035141",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "64x64",
                        "style_name": "64px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1435-subject-8819-normal-weight-black-32px.png?1544035141",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "32x32",
                        "style_name": "32px"
                    },
                    "content_type": "image/png"
                }
            ]
        },
        {
            "id": 188,
            "level": 9,
            "slug": "heavy",
            "characters": "重",
            "character_images": []
        },
        {
            "id": 424,
            "level": 9,
            "slug": "helicopter",
            "characters": "覀",
            "character_images": []
        },
        {
            "id": 167,
            "level": 9,
            "slug": "history",
            "characters": "史",
            "character_images": []
        },
        {
            "id": 166,
            "level": 9,
            "slug": "jammed-in",
            "characters": "介",
            "character_images": []
        },
        {
            "id": 417,
            "level": 9,
            "slug": "machine",
            "characters": "台",
            "character_images": []
        },
        {
            "id": 8773,
            "level": 9,
            "slug": "pope",
            "characters": null,
            "character_images": [
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1216-subject-8773-normal-weight-black-original.png?1520988029",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "original"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1216-subject-8773-normal-weight-black-1024px.png?1520988029",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "1024px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1216-subject-8773-normal-weight-black-512px.png?1520988029",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "512x512",
                        "style_name": "512px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1216-subject-8773-normal-weight-black-256px.png?1520988029",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "256x256",
                        "style_name": "256px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1216-subject-8773-normal-weight-black-128px.png?1520988029",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "128x128",
                        "style_name": "128px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1216-subject-8773-normal-weight-black-64px.png?1520988029",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "64x64",
                        "style_name": "64px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1216-subject-8773-normal-weight-black-32px.png?1520988029",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "32x32",
                        "style_name": "32px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/260-subject-8773-with-css-original.svg?1520987125",
                    "metadata": {
                        "inline_styles": true
                    },
                    "content_type": "image/svg+xml"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/738-subject-8773-without-css-original.svg?1520987271",
                    "metadata": {
                        "inline_styles": false
                    },
                    "content_type": "image/svg+xml"
                }
            ]
        },
        {
            "id": 178,
            "level": 9,
            "slug": "spicy",
            "characters": "辛",
            "character_images": []
        },
        {
            "id": 8779,
            "level": 9,
            "slug": "spring",
            "characters": null,
            "character_images": [
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1219-subject-8779-normal-weight-black-original.png?1520988042",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "original"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1219-subject-8779-normal-weight-black-1024px.png?1520988042",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "1024px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1219-subject-8779-normal-weight-black-512px.png?1520988042",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "512x512",
                        "style_name": "512px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1219-subject-8779-normal-weight-black-256px.png?1520988042",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "256x256",
                        "style_name": "256px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1219-subject-8779-normal-weight-black-128px.png?1520988042",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "128x128",
                        "style_name": "128px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1219-subject-8779-normal-weight-black-64px.png?1520988042",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "64x64",
                        "style_name": "64px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1219-subject-8779-normal-weight-black-32px.png?1520988042",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "32x32",
                        "style_name": "32px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/263-subject-8779-with-css-original.svg?1520987128",
                    "metadata": {
                        "inline_styles": true
                    },
                    "content_type": "image/svg+xml"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/741-subject-8779-without-css-original.svg?1520987272",
                    "metadata": {
                        "inline_styles": false
                    },
                    "content_type": "image/svg+xml"
                }
            ]
        },
        {
            "id": 8785,
            "level": 9,
            "slug": "squid",
            "characters": null,
            "character_images": [
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1272-subject-8785-normal-weight-black-original.png?1520988190",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "original"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1272-subject-8785-normal-weight-black-1024px.png?1520988190",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "1024px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1272-subject-8785-normal-weight-black-512px.png?1520988190",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "512x512",
                        "style_name": "512px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1272-subject-8785-normal-weight-black-256px.png?1520988190",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "256x256",
                        "style_name": "256px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1272-subject-8785-normal-weight-black-128px.png?1520988190",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "128x128",
                        "style_name": "128px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1272-subject-8785-normal-weight-black-64px.png?1520988190",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "64x64",
                        "style_name": "64px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1272-subject-8785-normal-weight-black-32px.png?1520988190",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "32x32",
                        "style_name": "32px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/316-subject-8785-with-css-original.svg?1520987143",
                    "metadata": {
                        "inline_styles": true
                    },
                    "content_type": "image/svg+xml"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/794-subject-8785-without-css-original.svg?1520987286",
                    "metadata": {
                        "inline_styles": false
                    },
                    "content_type": "image/svg+xml"
                }
            ]
        },
        {
            "id": 168,
            "level": 9,
            "slug": "tent",
            "characters": "癶",
            "character_images": []
        },
        {
            "id": 8787,
            "level": 9,
            "slug": "yurt",
            "characters": null,
            "character_images": [
                {
                    "url": "https://cdn.wanikani.com/images/legacy/256-subject-8787-with-css-original.svg?1520987125",
                    "metadata": {
                        "inline_styles": true
                    },
                    "content_type": "image/svg+xml"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/734-subject-8787-without-css-original.svg?1520987270",
                    "metadata": {
                        "inline_styles": false
                    },
                    "content_type": "image/svg+xml"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1212-subject-8787-normal-weight-black-original.png?1520988011",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "original"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1212-subject-8787-normal-weight-black-1024px.png?1520988011",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "1024px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1212-subject-8787-normal-weight-black-512px.png?1520988011",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "512x512",
                        "style_name": "512px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1212-subject-8787-normal-weight-black-256px.png?1520988011",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "256x256",
                        "style_name": "256px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1212-subject-8787-normal-weight-black-128px.png?1520988011",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "128x128",
                        "style_name": "128px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1212-subject-8787-normal-weight-black-64px.png?1520988011",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "64x64",
                        "style_name": "64px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1212-subject-8787-normal-weight-black-32px.png?1520988011",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "32x32",
                        "style_name": "32px"
                    },
                    "content_type": "image/png"
                }
            ]
        },
        {
            "id": 182,
            "level": 10,
            "slug": "alcohol",
            "characters": "酉",
            "character_images": []
        },
        {
            "id": 181,
            "level": 10,
            "slug": "beans",
            "characters": "豆",
            "character_images": []
        },
        {
            "id": 219,
            "level": 10,
            "slug": "bundle",
            "characters": "束",
            "character_images": []
        },
        {
            "id": 8774,
            "level": 10,
            "slug": "chinese",
            "characters": null,
            "character_images": [
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1222-subject-8774-normal-weight-black-original.png?1520988054",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "original"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1222-subject-8774-normal-weight-black-1024px.png?1520988054",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "1024px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1222-subject-8774-normal-weight-black-512px.png?1520988054",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "512x512",
                        "style_name": "512px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1222-subject-8774-normal-weight-black-256px.png?1520988054",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "256x256",
                        "style_name": "256px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1222-subject-8774-normal-weight-black-128px.png?1520988054",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "128x128",
                        "style_name": "128px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1222-subject-8774-normal-weight-black-64px.png?1520988054",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "64x64",
                        "style_name": "64px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1222-subject-8774-normal-weight-black-32px.png?1520988054",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "32x32",
                        "style_name": "32px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/266-subject-8774-with-css-original.svg?1520987129",
                    "metadata": {
                        "inline_styles": true
                    },
                    "content_type": "image/svg+xml"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/744-subject-8774-without-css-original.svg?1520987274",
                    "metadata": {
                        "inline_styles": false
                    },
                    "content_type": "image/svg+xml"
                }
            ]
        },
        {
            "id": 186,
            "level": 10,
            "slug": "dynamite",
            "characters": "丙",
            "character_images": []
        },
        {
            "id": 275,
            "level": 10,
            "slug": "fault",
            "characters": "失",
            "character_images": []
        },
        {
            "id": 184,
            "level": 10,
            "slug": "geoduck",
            "characters": "頁",
            "character_images": []
        },
        {
            "id": 180,
            "level": 10,
            "slug": "kiss",
            "characters": "各",
            "character_images": []
        },
        {
            "id": 183,
            "level": 10,
            "slug": "landslide",
            "characters": "辰",
            "character_images": []
        },
        {
            "id": 185,
            "level": 10,
            "slug": "music",
            "characters": "曲",
            "character_images": []
        },
        {
            "id": 439,
            "level": 10,
            "slug": "sell",
            "characters": "売",
            "character_images": []
        },
        {
            "id": 187,
            "level": 10,
            "slug": "sick",
            "characters": "疒",
            "character_images": []
        },
        {
            "id": 200,
            "level": 10,
            "slug": "stairs",
            "characters": "乃",
            "character_images": []
        },
        {
            "id": 179,
            "level": 10,
            "slug": "tombstone",
            "characters": "圣",
            "character_images": []
        },
        {
            "id": 240,
            "level": 10,
            "slug": "turkey",
            "characters": "隹",
            "character_images": []
        },
        {
            "id": 8777,
            "level": 11,
            "slug": "bear",
            "characters": null,
            "character_images": [
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1233-subject-8777-normal-weight-black-original.png?1520988095",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "original"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1233-subject-8777-normal-weight-black-1024px.png?1520988095",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "1024px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1233-subject-8777-normal-weight-black-512px.png?1520988095",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "512x512",
                        "style_name": "512px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1233-subject-8777-normal-weight-black-256px.png?1520988095",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "256x256",
                        "style_name": "256px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1233-subject-8777-normal-weight-black-128px.png?1520988095",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "128x128",
                        "style_name": "128px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1233-subject-8777-normal-weight-black-64px.png?1520988095",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "64x64",
                        "style_name": "64px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1233-subject-8777-normal-weight-black-32px.png?1520988095",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "32x32",
                        "style_name": "32px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/277-subject-8777-with-css-original.svg?1520987134",
                    "metadata": {
                        "inline_styles": true
                    },
                    "content_type": "image/svg+xml"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/755-subject-8777-without-css-original.svg?1520987276",
                    "metadata": {
                        "inline_styles": false
                    },
                    "content_type": "image/svg+xml"
                }
            ]
        },
        {
            "id": 8775,
            "level": 11,
            "slug": "blackjack",
            "characters": null,
            "character_images": [
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1234-subject-8775-normal-weight-black-original.png?1520988097",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "original"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1234-subject-8775-normal-weight-black-1024px.png?1520988097",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "1024px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1234-subject-8775-normal-weight-black-512px.png?1520988097",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "512x512",
                        "style_name": "512px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1234-subject-8775-normal-weight-black-256px.png?1520988097",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "256x256",
                        "style_name": "256px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1234-subject-8775-normal-weight-black-128px.png?1520988097",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "128x128",
                        "style_name": "128px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1234-subject-8775-normal-weight-black-64px.png?1520988097",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "64x64",
                        "style_name": "64px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1234-subject-8775-normal-weight-black-32px.png?1520988097",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "32x32",
                        "style_name": "32px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/278-subject-8775-with-css-original.svg?1520987134",
                    "metadata": {
                        "inline_styles": true
                    },
                    "content_type": "image/svg+xml"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/756-subject-8775-without-css-original.svg?1520987277",
                    "metadata": {
                        "inline_styles": false
                    },
                    "content_type": "image/svg+xml"
                }
            ]
        },
        {
            "id": 194,
            "level": 11,
            "slug": "drunkard",
            "characters": "戈",
            "character_images": []
        },
        {
            "id": 193,
            "level": 11,
            "slug": "escalator",
            "characters": "及",
            "character_images": []
        },
        {
            "id": 198,
            "level": 11,
            "slug": "few",
            "characters": "少",
            "character_images": []
        },
        {
            "id": 190,
            "level": 11,
            "slug": "humble",
            "characters": "申",
            "character_images": []
        },
        {
            "id": 191,
            "level": 11,
            "slug": "older-brother",
            "characters": "兄",
            "character_images": []
        },
        {
            "id": 189,
            "level": 11,
            "slug": "orders",
            "characters": "令",
            "character_images": []
        },
        {
            "id": 196,
            "level": 11,
            "slug": "root",
            "characters": "艮",
            "character_images": []
        },
        {
            "id": 199,
            "level": 11,
            "slug": "simple",
            "characters": "単",
            "character_images": []
        },
        {
            "id": 195,
            "level": 11,
            "slug": "skin",
            "characters": "皮",
            "character_images": []
        },
        {
            "id": 197,
            "level": 11,
            "slug": "sound",
            "characters": "音",
            "character_images": []
        },
        {
            "id": 8776,
            "level": 11,
            "slug": "trash",
            "characters": null,
            "character_images": [
                {
                    "url": "https://cdn.wanikani.com/images/legacy/6-subject-8776-with-css-original.svg?1520987052",
                    "metadata": {
                        "inline_styles": true
                    },
                    "content_type": "image/svg+xml"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/484-subject-8776-without-css-original.svg?1520987190",
                    "metadata": {
                        "inline_styles": false
                    },
                    "content_type": "image/svg+xml"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/962-subject-8776-normal-weight-black-original.png?1520987339",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "original"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/962-subject-8776-normal-weight-black-1024px.png?1520987339",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "1024px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/962-subject-8776-normal-weight-black-512px.png?1520987339",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "512x512",
                        "style_name": "512px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/962-subject-8776-normal-weight-black-256px.png?1520987339",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "256x256",
                        "style_name": "256px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/962-subject-8776-normal-weight-black-128px.png?1520987339",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "128x128",
                        "style_name": "128px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/962-subject-8776-normal-weight-black-64px.png?1520987339",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "64x64",
                        "style_name": "64px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/962-subject-8776-normal-weight-black-32px.png?1520987339",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "32x32",
                        "style_name": "32px"
                    },
                    "content_type": "image/png"
                }
            ]
        },
        {
            "id": 204,
            "level": 12,
            "slug": "asia",
            "characters": "亜",
            "character_images": []
        },
        {
            "id": 339,
            "level": 12,
            "slug": "beforehand",
            "characters": "予",
            "character_images": []
        },
        {
            "id": 390,
            "level": 12,
            "slug": "business",
            "characters": "業",
            "character_images": []
        },
        {
            "id": 205,
            "level": 12,
            "slug": "crab",
            "characters": "其",
            "character_images": []
        },
        {
            "id": 201,
            "level": 12,
            "slug": "early",
            "characters": "早",
            "character_images": []
        },
        {
            "id": 208,
            "level": 12,
            "slug": "excuse",
            "characters": "免",
            "character_images": []
        },
        {
            "id": 8821,
            "level": 12,
            "slug": "fix",
            "characters": "直",
            "character_images": []
        },
        {
            "id": 207,
            "level": 12,
            "slug": "jackhammer",
            "characters": "示",
            "character_images": []
        },
        {
            "id": 399,
            "level": 12,
            "slug": "request",
            "characters": "求",
            "character_images": []
        },
        {
            "id": 203,
            "level": 12,
            "slug": "someone",
            "characters": "者",
            "character_images": []
        },
        {
            "id": 8778,
            "level": 12,
            "slug": "tofu",
            "characters": null,
            "character_images": [
                {
                    "url": "https://cdn.wanikani.com/images/legacy/292-subject-8778-with-css-original.svg?1520987137",
                    "metadata": {
                        "inline_styles": true
                    },
                    "content_type": "image/svg+xml"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/770-subject-8778-without-css-original.svg?1520987280",
                    "metadata": {
                        "inline_styles": false
                    },
                    "content_type": "image/svg+xml"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1248-subject-8778-normal-weight-black-original.png?1520988132",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "original"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1248-subject-8778-normal-weight-black-1024px.png?1520988132",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "1024px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1248-subject-8778-normal-weight-black-512px.png?1520988132",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "512x512",
                        "style_name": "512px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1248-subject-8778-normal-weight-black-256px.png?1520988132",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "256x256",
                        "style_name": "256px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1248-subject-8778-normal-weight-black-128px.png?1520988132",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "128x128",
                        "style_name": "128px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1248-subject-8778-normal-weight-black-64px.png?1520988132",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "64x64",
                        "style_name": "64px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1248-subject-8778-normal-weight-black-32px.png?1520988132",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "32x32",
                        "style_name": "32px"
                    },
                    "content_type": "image/png"
                }
            ]
        },
        {
            "id": 269,
            "level": 12,
            "slug": "together",
            "characters": "共",
            "character_images": []
        },
        {
            "id": 206,
            "level": 12,
            "slug": "yoga",
            "characters": "廴",
            "character_images": []
        },
        {
            "id": 202,
            "level": 12,
            "slug": "younger-brother",
            "characters": "弟",
            "character_images": []
        },
        {
            "id": 234,
            "level": 13,
            "slug": "body",
            "characters": "身",
            "character_images": []
        },
        {
            "id": 226,
            "level": 13,
            "slug": "bookshelf",
            "characters": "冊",
            "character_images": []
        },
        {
            "id": 231,
            "level": 13,
            "slug": "center",
            "characters": "央",
            "character_images": []
        },
        {
            "id": 223,
            "level": 13,
            "slug": "circle",
            "characters": "丸",
            "character_images": []
        },
        {
            "id": 8781,
            "level": 13,
            "slug": "creeper",
            "characters": null,
            "character_images": [
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1252-subject-8781-normal-weight-black-original.png?1520988142",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "original"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1252-subject-8781-normal-weight-black-1024px.png?1520988142",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "1024px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1252-subject-8781-normal-weight-black-512px.png?1520988142",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "512x512",
                        "style_name": "512px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1252-subject-8781-normal-weight-black-256px.png?1520988142",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "256x256",
                        "style_name": "256px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1252-subject-8781-normal-weight-black-128px.png?1520988142",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "128x128",
                        "style_name": "128px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1252-subject-8781-normal-weight-black-64px.png?1520988142",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "64x64",
                        "style_name": "64px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1252-subject-8781-normal-weight-black-32px.png?1520988142",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "32x32",
                        "style_name": "32px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/774-subject-8781-without-css-original.svg?1520987281",
                    "metadata": {
                        "inline_styles": false
                    },
                    "content_type": "image/svg+xml"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/296-subject-8781-with-css-original.svg?1520987138",
                    "metadata": {
                        "inline_styles": true
                    },
                    "content_type": "image/svg+xml"
                }
            ]
        },
        {
            "id": 224,
            "level": 13,
            "slug": "east",
            "characters": "東",
            "character_images": []
        },
        {
            "id": 8823,
            "level": 13,
            "slug": "elephant",
            "characters": "象",
            "character_images": []
        },
        {
            "id": 235,
            "level": 13,
            "slug": "fruit",
            "characters": "果",
            "character_images": []
        },
        {
            "id": 8822,
            "level": 13,
            "slug": "good",
            "characters": "良",
            "character_images": []
        },
        {
            "id": 239,
            "level": 13,
            "slug": "hundred",
            "characters": "百",
            "character_images": []
        },
        {
            "id": 221,
            "level": 13,
            "slug": "idea",
            "characters": "意",
            "character_images": []
        },
        {
            "id": 230,
            "level": 13,
            "slug": "original",
            "characters": "原",
            "character_images": []
        },
        {
            "id": 227,
            "level": 13,
            "slug": "products",
            "characters": "品",
            "character_images": []
        },
        {
            "id": 225,
            "level": 13,
            "slug": "roof-225",
            "characters": "亼",
            "character_images": []
        },
        {
            "id": 8824,
            "level": 13,
            "slug": "scarecrow",
            "characters": "畐",
            "character_images": []
        },
        {
            "id": 215,
            "level": 13,
            "slug": "shrimp",
            "characters": "尺",
            "character_images": []
        },
        {
            "id": 232,
            "level": 13,
            "slug": "soul",
            "characters": "忄",
            "character_images": []
        },
        {
            "id": 222,
            "level": 13,
            "slug": "womb",
            "characters": "坴",
            "character_images": []
        },
        {
            "id": 8782,
            "level": 14,
            "slug": "bar",
            "characters": null,
            "character_images": [
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1260-subject-8782-normal-weight-black-original.png?1520988163",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "original"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1260-subject-8782-normal-weight-black-1024px.png?1520988163",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "1024px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1260-subject-8782-normal-weight-black-512px.png?1520988163",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "512x512",
                        "style_name": "512px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1260-subject-8782-normal-weight-black-256px.png?1520988163",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "256x256",
                        "style_name": "256px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1260-subject-8782-normal-weight-black-128px.png?1520988163",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "128x128",
                        "style_name": "128px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1260-subject-8782-normal-weight-black-64px.png?1520988163",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "64x64",
                        "style_name": "64px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1260-subject-8782-normal-weight-black-32px.png?1520988163",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "32x32",
                        "style_name": "32px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/304-subject-8782-with-css-original.svg?1520987140",
                    "metadata": {
                        "inline_styles": true
                    },
                    "content_type": "image/svg+xml"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/782-subject-8782-without-css-original.svg?1520987283",
                    "metadata": {
                        "inline_styles": false
                    },
                    "content_type": "image/svg+xml"
                }
            ]
        },
        {
            "id": 264,
            "level": 14,
            "slug": "genius",
            "characters": "才",
            "character_images": []
        },
        {
            "id": 247,
            "level": 14,
            "slug": "part",
            "characters": "分",
            "character_images": []
        },
        {
            "id": 236,
            "level": 14,
            "slug": "pool",
            "characters": "勺",
            "character_images": []
        },
        {
            "id": 237,
            "level": 14,
            "slug": "public",
            "characters": "公",
            "character_images": []
        },
        {
            "id": 246,
            "level": 14,
            "slug": "well",
            "characters": "井",
            "character_images": []
        },
        {
            "id": 8783,
            "level": 15,
            "slug": "grass",
            "characters": null,
            "character_images": [
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1265-subject-8783-normal-weight-black-original.png?1520988176",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "original"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1265-subject-8783-normal-weight-black-1024px.png?1520988176",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "1024px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1265-subject-8783-normal-weight-black-512px.png?1520988176",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "512x512",
                        "style_name": "512px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1265-subject-8783-normal-weight-black-256px.png?1520988176",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "256x256",
                        "style_name": "256px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1265-subject-8783-normal-weight-black-128px.png?1520988176",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "128x128",
                        "style_name": "128px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1265-subject-8783-normal-weight-black-64px.png?1520988176",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "64x64",
                        "style_name": "64px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1265-subject-8783-normal-weight-black-32px.png?1520988176",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "32x32",
                        "style_name": "32px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/309-subject-8783-with-css-original.svg?1520987141",
                    "metadata": {
                        "inline_styles": true
                    },
                    "content_type": "image/svg+xml"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/787-subject-8783-without-css-original.svg?1520987284",
                    "metadata": {
                        "inline_styles": false
                    },
                    "content_type": "image/svg+xml"
                }
            ]
        },
        {
            "id": 408,
            "level": 15,
            "slug": "height",
            "characters": "丈",
            "character_images": []
        },
        {
            "id": 243,
            "level": 15,
            "slug": "man",
            "characters": "男",
            "character_images": []
        },
        {
            "id": 242,
            "level": 15,
            "slug": "paragraph",
            "characters": "句",
            "character_images": []
        },
        {
            "id": 244,
            "level": 15,
            "slug": "past",
            "characters": "去",
            "character_images": []
        },
        {
            "id": 241,
            "level": 15,
            "slug": "saw",
            "characters": "巩",
            "character_images": []
        },
        {
            "id": 245,
            "level": 15,
            "slug": "walk",
            "characters": "歩",
            "character_images": []
        },
        {
            "id": 248,
            "level": 16,
            "slug": "attach",
            "characters": "付",
            "character_images": []
        },
        {
            "id": 421,
            "level": 16,
            "slug": "drum",
            "characters": "壴",
            "character_images": []
        },
        {
            "id": 250,
            "level": 16,
            "slug": "face",
            "characters": "面",
            "character_images": []
        },
        {
            "id": 249,
            "level": 16,
            "slug": "valley",
            "characters": "谷",
            "character_images": []
        },
        {
            "id": 8784,
            "level": 16,
            "slug": "zombie",
            "characters": null,
            "character_images": [
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1274-subject-8784-normal-weight-black-original.png?1520988195",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "original"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1274-subject-8784-normal-weight-black-1024px.png?1520988195",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "1024px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1274-subject-8784-normal-weight-black-512px.png?1520988195",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "512x512",
                        "style_name": "512px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1274-subject-8784-normal-weight-black-256px.png?1520988195",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "256x256",
                        "style_name": "256px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1274-subject-8784-normal-weight-black-128px.png?1520988195",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "128x128",
                        "style_name": "128px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1274-subject-8784-normal-weight-black-64px.png?1520988195",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "64x64",
                        "style_name": "64px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1274-subject-8784-normal-weight-black-32px.png?1520988195",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "32x32",
                        "style_name": "32px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/318-subject-8784-with-css-original.svg?1520987143",
                    "metadata": {
                        "inline_styles": true
                    },
                    "content_type": "image/svg+xml"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/796-subject-8784-without-css-original.svg?1520987287",
                    "metadata": {
                        "inline_styles": false
                    },
                    "content_type": "image/svg+xml"
                }
            ]
        },
        {
            "id": 251,
            "level": 17,
            "slug": "comfort",
            "characters": "楽",
            "character_images": []
        },
        {
            "id": 209,
            "level": 17,
            "slug": "criminal",
            "characters": "非",
            "character_images": []
        },
        {
            "id": 8825,
            "level": 17,
            "slug": "festival",
            "characters": "祭",
            "character_images": []
        },
        {
            "id": 253,
            "level": 17,
            "slug": "good-luck",
            "characters": "吉",
            "character_images": []
        },
        {
            "id": 422,
            "level": 17,
            "slug": "guard",
            "characters": "兑",
            "character_images": []
        },
        {
            "id": 252,
            "level": 17,
            "slug": "nothing",
            "characters": "無",
            "character_images": []
        },
        {
            "id": 255,
            "level": 17,
            "slug": "poem",
            "characters": "苟",
            "character_images": []
        },
        {
            "id": 254,
            "level": 17,
            "slug": "tiger",
            "characters": "虍",
            "character_images": []
        },
        {
            "id": 8786,
            "level": 17,
            "slug": "worm-8786",
            "characters": null,
            "character_images": [
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1046-subject-8786-normal-weight-black-original.png?1520987586",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "original"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1046-subject-8786-normal-weight-black-1024px.png?1520987586",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "1024px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1046-subject-8786-normal-weight-black-512px.png?1520987586",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "512x512",
                        "style_name": "512px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1046-subject-8786-normal-weight-black-256px.png?1520987586",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "256x256",
                        "style_name": "256px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1046-subject-8786-normal-weight-black-128px.png?1520987586",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "128x128",
                        "style_name": "128px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1046-subject-8786-normal-weight-black-64px.png?1520987586",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "64x64",
                        "style_name": "64px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1046-subject-8786-normal-weight-black-32px.png?1520987586",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "32x32",
                        "style_name": "32px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/90-subject-8786-with-css-original.svg?1520987070",
                    "metadata": {
                        "inline_styles": true
                    },
                    "content_type": "image/svg+xml"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/568-subject-8786-without-css-original.svg?1520987224",
                    "metadata": {
                        "inline_styles": false
                    },
                    "content_type": "image/svg+xml"
                }
            ]
        },
        {
            "id": 261,
            "level": 18,
            "slug": "conflict",
            "characters": "争",
            "character_images": []
        },
        {
            "id": 257,
            "level": 18,
            "slug": "gambler",
            "characters": "尭",
            "character_images": []
        },
        {
            "id": 260,
            "level": 18,
            "slug": "happiness",
            "characters": "幸",
            "character_images": []
        },
        {
            "id": 256,
            "level": 18,
            "slug": "long-ago",
            "characters": "昔",
            "character_images": []
        },
        {
            "id": 259,
            "level": 18,
            "slug": "mask",
            "characters": "曽",
            "character_images": []
        },
        {
            "id": 415,
            "level": 18,
            "slug": "noon",
            "characters": "午",
            "character_images": []
        },
        {
            "id": 258,
            "level": 18,
            "slug": "previous",
            "characters": "先",
            "character_images": []
        },
        {
            "id": 262,
            "level": 18,
            "slug": "treasure-chest",
            "characters": "凶",
            "character_images": []
        },
        {
            "id": 263,
            "level": 19,
            "slug": "become",
            "characters": "成",
            "character_images": []
        },
        {
            "id": 265,
            "level": 19,
            "slug": "black-hole",
            "characters": "复",
            "character_images": []
        },
        {
            "id": 266,
            "level": 19,
            "slug": "director",
            "characters": "司",
            "character_images": []
        },
        {
            "id": 272,
            "level": 19,
            "slug": "ego",
            "characters": "我",
            "character_images": []
        },
        {
            "id": 423,
            "level": 19,
            "slug": "feeling",
            "characters": "感",
            "character_images": []
        },
        {
            "id": 268,
            "level": 19,
            "slug": "reason",
            "characters": "由",
            "character_images": []
        },
        {
            "id": 362,
            "level": 19,
            "slug": "right",
            "characters": "右",
            "character_images": []
        },
        {
            "id": 8788,
            "level": 20,
            "slug": "explosion",
            "characters": null,
            "character_images": [
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1297-subject-8788-normal-weight-black-original.png?1520988253",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "original"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1297-subject-8788-normal-weight-black-1024px.png?1520988253",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "1024px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1297-subject-8788-normal-weight-black-512px.png?1520988253",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "512x512",
                        "style_name": "512px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1297-subject-8788-normal-weight-black-256px.png?1520988253",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "256x256",
                        "style_name": "256px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1297-subject-8788-normal-weight-black-128px.png?1520988253",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "128x128",
                        "style_name": "128px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1297-subject-8788-normal-weight-black-64px.png?1520988253",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "64x64",
                        "style_name": "64px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1297-subject-8788-normal-weight-black-32px.png?1520988253",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "32x32",
                        "style_name": "32px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/341-subject-8788-with-css-original.svg?1520987148",
                    "metadata": {
                        "inline_styles": true
                    },
                    "content_type": "image/svg+xml"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/819-subject-8788-without-css-original.svg?1520987293",
                    "metadata": {
                        "inline_styles": false
                    },
                    "content_type": "image/svg+xml"
                }
            ]
        },
        {
            "id": 273,
            "level": 20,
            "slug": "flood",
            "characters": "巛",
            "character_images": []
        },
        {
            "id": 270,
            "level": 20,
            "slug": "fly",
            "characters": "飛",
            "character_images": []
        },
        {
            "id": 274,
            "level": 20,
            "slug": "mole",
            "characters": "至",
            "character_images": []
        },
        {
            "id": 271,
            "level": 20,
            "slug": "mona-lisa",
            "characters": "兼",
            "character_images": []
        },
        {
            "id": 383,
            "level": 20,
            "slug": "righteousness",
            "characters": "義",
            "character_images": []
        },
        {
            "id": 281,
            "level": 21,
            "slug": "angle",
            "characters": "角",
            "character_images": []
        },
        {
            "id": 393,
            "level": 21,
            "slug": "blade",
            "characters": "刃",
            "character_images": []
        },
        {
            "id": 305,
            "level": 21,
            "slug": "half",
            "characters": "半",
            "character_images": []
        },
        {
            "id": 276,
            "level": 21,
            "slug": "mohawk",
            "characters": "啇",
            "character_images": []
        },
        {
            "id": 278,
            "level": 21,
            "slug": "next",
            "characters": "次",
            "character_images": []
        },
        {
            "id": 280,
            "level": 21,
            "slug": "number",
            "characters": "番",
            "character_images": []
        },
        {
            "id": 279,
            "level": 21,
            "slug": "peace",
            "characters": "平",
            "character_images": []
        },
        {
            "id": 277,
            "level": 21,
            "slug": "simultaneous",
            "characters": "斉",
            "character_images": []
        },
        {
            "id": 287,
            "level": 22,
            "slug": "ability",
            "characters": "能",
            "character_images": []
        },
        {
            "id": 285,
            "level": 22,
            "slug": "allocate",
            "characters": "充",
            "character_images": []
        },
        {
            "id": 282,
            "level": 22,
            "slug": "bathtub",
            "characters": "呂",
            "character_images": []
        },
        {
            "id": 283,
            "level": 22,
            "slug": "cheap",
            "characters": "安",
            "character_images": []
        },
        {
            "id": 284,
            "level": 22,
            "slug": "dollar",
            "characters": "弗",
            "character_images": []
        },
        {
            "id": 286,
            "level": 22,
            "slug": "football",
            "characters": "爰",
            "character_images": []
        },
        {
            "id": 8826,
            "level": 22,
            "slug": "icicle",
            "characters": "丬",
            "character_images": []
        },
        {
            "id": 320,
            "level": 23,
            "slug": "clothes",
            "characters": "衣",
            "character_images": []
        },
        {
            "id": 8789,
            "level": 23,
            "slug": "corn-8789",
            "characters": null,
            "character_images": [
                {
                    "url": "https://cdn.wanikani.com/images/legacy/975-subject-8789-normal-weight-black-original.png?1520987380",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "original"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/975-subject-8789-normal-weight-black-1024px.png?1520987380",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "1024px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/975-subject-8789-normal-weight-black-512px.png?1520987380",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "512x512",
                        "style_name": "512px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/975-subject-8789-normal-weight-black-256px.png?1520987380",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "256x256",
                        "style_name": "256px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/975-subject-8789-normal-weight-black-128px.png?1520987380",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "128x128",
                        "style_name": "128px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/975-subject-8789-normal-weight-black-64px.png?1520987380",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "64x64",
                        "style_name": "64px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/975-subject-8789-normal-weight-black-32px.png?1520987380",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "32x32",
                        "style_name": "32px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/19-subject-8789-with-css-original.svg?1520987055",
                    "metadata": {
                        "inline_styles": true
                    },
                    "content_type": "image/svg+xml"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/497-subject-8789-without-css-original.svg?1520987194",
                    "metadata": {
                        "inline_styles": false
                    },
                    "content_type": "image/svg+xml"
                }
            ]
        },
        {
            "id": 292,
            "level": 23,
            "slug": "demon",
            "characters": "鬼",
            "character_images": []
        },
        {
            "id": 288,
            "level": 23,
            "slug": "leather",
            "characters": "革",
            "character_images": []
        },
        {
            "id": 8793,
            "level": 23,
            "slug": "morning",
            "characters": null,
            "character_images": [
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1315-subject-8793-normal-weight-black-original.png?1520988307",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "original"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1315-subject-8793-normal-weight-black-1024px.png?1520988307",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "1024px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1315-subject-8793-normal-weight-black-512px.png?1520988307",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "512x512",
                        "style_name": "512px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1315-subject-8793-normal-weight-black-256px.png?1520988307",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "256x256",
                        "style_name": "256px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1315-subject-8793-normal-weight-black-128px.png?1520988307",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "128x128",
                        "style_name": "128px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1315-subject-8793-normal-weight-black-64px.png?1520988307",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "64x64",
                        "style_name": "64px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1315-subject-8793-normal-weight-black-32px.png?1520988307",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "32x32",
                        "style_name": "32px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/359-subject-8793-with-css-original.svg?1520987153",
                    "metadata": {
                        "inline_styles": true
                    },
                    "content_type": "image/svg+xml"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/837-subject-8793-without-css-original.svg?1520987298",
                    "metadata": {
                        "inline_styles": false
                    },
                    "content_type": "image/svg+xml"
                }
            ]
        },
        {
            "id": 290,
            "level": 23,
            "slug": "restaurant",
            "characters": "亭",
            "character_images": []
        },
        {
            "id": 291,
            "level": 23,
            "slug": "road",
            "characters": "道",
            "character_images": []
        },
        {
            "id": 289,
            "level": 23,
            "slug": "vines",
            "characters": "丩",
            "character_images": []
        },
        {
            "id": 298,
            "level": 24,
            "slug": "accept",
            "characters": "受",
            "character_images": []
        },
        {
            "id": 296,
            "level": 24,
            "slug": "control",
            "characters": "制",
            "character_images": []
        },
        {
            "id": 293,
            "level": 24,
            "slug": "dawn",
            "characters": "旦",
            "character_images": []
        },
        {
            "id": 8790,
            "level": 24,
            "slug": "death-star",
            "characters": null,
            "character_images": [
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1319-subject-8790-normal-weight-black-original.png?1520988319",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "original"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1319-subject-8790-normal-weight-black-1024px.png?1520988319",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "1024px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1319-subject-8790-normal-weight-black-512px.png?1520988319",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "512x512",
                        "style_name": "512px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1319-subject-8790-normal-weight-black-256px.png?1520988319",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "256x256",
                        "style_name": "256px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1319-subject-8790-normal-weight-black-128px.png?1520988319",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "128x128",
                        "style_name": "128px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1319-subject-8790-normal-weight-black-64px.png?1520988319",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "64x64",
                        "style_name": "64px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1319-subject-8790-normal-weight-black-32px.png?1520988319",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "32x32",
                        "style_name": "32px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/363-subject-8790-with-css-original.svg?1520987154",
                    "metadata": {
                        "inline_styles": true
                    },
                    "content_type": "image/svg+xml"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/841-subject-8790-without-css-original.svg?1520987299",
                    "metadata": {
                        "inline_styles": false
                    },
                    "content_type": "image/svg+xml"
                }
            ]
        },
        {
            "id": 295,
            "level": 24,
            "slug": "guest",
            "characters": "客",
            "character_images": []
        },
        {
            "id": 294,
            "level": 24,
            "slug": "korea",
            "characters": "韋",
            "character_images": []
        },
        {
            "id": 297,
            "level": 24,
            "slug": "nature",
            "characters": "然",
            "character_images": []
        },
        {
            "id": 304,
            "level": 25,
            "slug": "both",
            "characters": "両",
            "character_images": []
        },
        {
            "id": 299,
            "level": 25,
            "slug": "capital",
            "characters": "京",
            "character_images": []
        },
        {
            "id": 301,
            "level": 25,
            "slug": "friend",
            "characters": "友",
            "character_images": []
        },
        {
            "id": 356,
            "level": 25,
            "slug": "greenhouse",
            "characters": "莫",
            "character_images": []
        },
        {
            "id": 303,
            "level": 25,
            "slug": "lifeguard",
            "characters": "冓",
            "character_images": []
        },
        {
            "id": 425,
            "level": 25,
            "slug": "mantis",
            "characters": "禹",
            "character_images": []
        },
        {
            "id": 302,
            "level": 25,
            "slug": "mix",
            "characters": "交",
            "character_images": []
        },
        {
            "id": 300,
            "level": 25,
            "slug": "wedding",
            "characters": "甫",
            "character_images": []
        },
        {
            "id": 306,
            "level": 26,
            "slug": "announce",
            "characters": "告",
            "character_images": []
        },
        {
            "id": 8828,
            "level": 26,
            "slug": "chapter",
            "characters": "章",
            "character_images": []
        },
        {
            "id": 8792,
            "level": 26,
            "slug": "comb",
            "characters": null,
            "character_images": [
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1332-subject-8792-normal-weight-black-original.png?1520988352",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "original"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1332-subject-8792-normal-weight-black-1024px.png?1520988352",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "1024px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1332-subject-8792-normal-weight-black-512px.png?1520988352",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "512x512",
                        "style_name": "512px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1332-subject-8792-normal-weight-black-256px.png?1520988352",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "256x256",
                        "style_name": "256px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1332-subject-8792-normal-weight-black-128px.png?1520988352",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "128x128",
                        "style_name": "128px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1332-subject-8792-normal-weight-black-64px.png?1520988352",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "64x64",
                        "style_name": "64px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1332-subject-8792-normal-weight-black-32px.png?1520988352",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "32x32",
                        "style_name": "32px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/376-subject-8792-with-css-original.svg?1520987156",
                    "metadata": {
                        "inline_styles": true
                    },
                    "content_type": "image/svg+xml"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/854-subject-8792-without-css-original.svg?1520987301",
                    "metadata": {
                        "inline_styles": false
                    },
                    "content_type": "image/svg+xml"
                }
            ]
        },
        {
            "id": 8791,
            "level": 26,
            "slug": "egg-8791",
            "characters": null,
            "character_images": [
                {
                    "url": "https://cdn.wanikani.com/images/legacy/984-subject-8791-normal-weight-black-original.png?1520987408",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "original"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/984-subject-8791-normal-weight-black-1024px.png?1520987408",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "1024px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/984-subject-8791-normal-weight-black-512px.png?1520987408",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "512x512",
                        "style_name": "512px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/984-subject-8791-normal-weight-black-256px.png?1520987408",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "256x256",
                        "style_name": "256px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/984-subject-8791-normal-weight-black-128px.png?1520987408",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "128x128",
                        "style_name": "128px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/984-subject-8791-normal-weight-black-64px.png?1520987408",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "64x64",
                        "style_name": "64px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/984-subject-8791-normal-weight-black-32px.png?1520987408",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "32x32",
                        "style_name": "32px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/28-subject-8791-with-css-original.svg?1520987058",
                    "metadata": {
                        "inline_styles": true
                    },
                    "content_type": "image/svg+xml"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/506-subject-8791-without-css-original.svg?1520987199",
                    "metadata": {
                        "inline_styles": false
                    },
                    "content_type": "image/svg+xml"
                }
            ]
        },
        {
            "id": 307,
            "level": 26,
            "slug": "ten-thousand",
            "characters": "万",
            "character_images": []
        },
        {
            "id": 8827,
            "level": 26,
            "slug": "warehouse",
            "characters": "倉",
            "character_images": []
        },
        {
            "id": 331,
            "level": 27,
            "slug": "call",
            "characters": "召",
            "character_images": []
        },
        {
            "id": 311,
            "level": 27,
            "slug": "change",
            "characters": "化",
            "character_images": []
        },
        {
            "id": 332,
            "level": 27,
            "slug": "exit",
            "characters": "出",
            "character_images": []
        },
        {
            "id": 308,
            "level": 27,
            "slug": "farming",
            "characters": "農",
            "character_images": []
        },
        {
            "id": 312,
            "level": 27,
            "slug": "peoples",
            "characters": "民",
            "character_images": []
        },
        {
            "id": 309,
            "level": 27,
            "slug": "rake",
            "characters": "而",
            "character_images": []
        },
        {
            "id": 310,
            "level": 27,
            "slug": "substitute",
            "characters": "代",
            "character_images": []
        },
        {
            "id": 313,
            "level": 27,
            "slug": "surplus",
            "characters": "余",
            "character_images": []
        },
        {
            "id": 315,
            "level": 28,
            "slug": "barracks",
            "characters": "屯",
            "character_images": []
        },
        {
            "id": 314,
            "level": 28,
            "slug": "giant",
            "characters": "巨",
            "character_images": []
        },
        {
            "id": 316,
            "level": 28,
            "slug": "hercules-316",
            "characters": "絜",
            "character_images": []
        },
        {
            "id": 318,
            "level": 28,
            "slug": "lovely",
            "characters": "麗",
            "character_images": []
        },
        {
            "id": 326,
            "level": 28,
            "slug": "odd",
            "characters": "奇",
            "character_images": []
        },
        {
            "id": 317,
            "level": 28,
            "slug": "specialty",
            "characters": "専",
            "character_images": []
        },
        {
            "id": 325,
            "level": 29,
            "slug": "above",
            "characters": "上",
            "character_images": []
        },
        {
            "id": 321,
            "level": 29,
            "slug": "blame",
            "characters": "責",
            "character_images": []
        },
        {
            "id": 319,
            "level": 29,
            "slug": "charcoal",
            "characters": "尞",
            "character_images": []
        },
        {
            "id": 322,
            "level": 29,
            "slug": "district",
            "characters": "区",
            "character_images": []
        },
        {
            "id": 324,
            "level": 29,
            "slug": "nose",
            "characters": "乙",
            "character_images": []
        },
        {
            "id": 323,
            "level": 29,
            "slug": "servant",
            "characters": "臣",
            "character_images": []
        },
        {
            "id": 329,
            "level": 30,
            "slug": "lineage",
            "characters": "系",
            "character_images": []
        },
        {
            "id": 327,
            "level": 30,
            "slug": "north",
            "characters": "北",
            "character_images": []
        },
        {
            "id": 162,
            "level": 30,
            "slug": "one-sided",
            "characters": "片",
            "character_images": []
        },
        {
            "id": 328,
            "level": 30,
            "slug": "oversee",
            "characters": "監",
            "character_images": []
        },
        {
            "id": 391,
            "level": 30,
            "slug": "pirate",
            "characters": "冘",
            "character_images": []
        },
        {
            "id": 330,
            "level": 30,
            "slug": "turtle-shell",
            "characters": "甲",
            "character_images": []
        },
        {
            "id": 336,
            "level": 31,
            "slug": "bully",
            "characters": "鬲",
            "character_images": []
        },
        {
            "id": 333,
            "level": 31,
            "slug": "fang",
            "characters": "牙",
            "character_images": []
        },
        {
            "id": 8829,
            "level": 31,
            "slug": "guy",
            "characters": "郎",
            "character_images": []
        },
        {
            "id": 338,
            "level": 31,
            "slug": "library",
            "characters": "扁",
            "character_images": []
        },
        {
            "id": 334,
            "level": 31,
            "slug": "line-up",
            "characters": "並",
            "character_images": []
        },
        {
            "id": 335,
            "level": 31,
            "slug": "potato-335",
            "characters": "華",
            "character_images": []
        },
        {
            "id": 337,
            "level": 31,
            "slug": "rocket",
            "characters": "离",
            "character_images": []
        },
        {
            "id": 340,
            "level": 32,
            "slug": "cat-pirate",
            "characters": "卬",
            "character_images": []
        },
        {
            "id": 343,
            "level": 32,
            "slug": "certain",
            "characters": "必",
            "character_images": []
        },
        {
            "id": 433,
            "level": 32,
            "slug": "cottage",
            "characters": "舎",
            "character_images": []
        },
        {
            "id": 8799,
            "level": 32,
            "slug": "elf",
            "characters": null,
            "character_images": [
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1360-subject-8799-normal-weight-black-original.png?1520988430",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "original"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1360-subject-8799-normal-weight-black-1024px.png?1520988430",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "1024px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1360-subject-8799-normal-weight-black-512px.png?1520988430",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "512x512",
                        "style_name": "512px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1360-subject-8799-normal-weight-black-256px.png?1520988430",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "256x256",
                        "style_name": "256px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1360-subject-8799-normal-weight-black-128px.png?1520988430",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "128x128",
                        "style_name": "128px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1360-subject-8799-normal-weight-black-64px.png?1520988430",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "64x64",
                        "style_name": "64px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1360-subject-8799-normal-weight-black-32px.png?1520988430",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "32x32",
                        "style_name": "32px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/404-subject-8799-with-css-original.svg?1520987162",
                    "metadata": {
                        "inline_styles": true
                    },
                    "content_type": "image/svg+xml"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/882-subject-8799-without-css-original.svg?1520987309",
                    "metadata": {
                        "inline_styles": false
                    },
                    "content_type": "image/svg+xml"
                }
            ]
        },
        {
            "id": 342,
            "level": 32,
            "slug": "night",
            "characters": "夜",
            "character_images": []
        },
        {
            "id": 341,
            "level": 32,
            "slug": "same",
            "characters": "同",
            "character_images": []
        },
        {
            "id": 427,
            "level": 32,
            "slug": "spider",
            "characters": "夋",
            "character_images": []
        },
        {
            "id": 8794,
            "level": 33,
            "slug": "coral",
            "characters": null,
            "character_images": [
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1027-subject-8794-normal-weight-black-original.png?1520987539",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "original"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1027-subject-8794-normal-weight-black-1024px.png?1520987539",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "1024px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1027-subject-8794-normal-weight-black-512px.png?1520987539",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "512x512",
                        "style_name": "512px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1027-subject-8794-normal-weight-black-256px.png?1520987539",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "256x256",
                        "style_name": "256px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1027-subject-8794-normal-weight-black-128px.png?1520987539",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "128x128",
                        "style_name": "128px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1027-subject-8794-normal-weight-black-64px.png?1520987539",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "64x64",
                        "style_name": "64px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1027-subject-8794-normal-weight-black-32px.png?1520987539",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "32x32",
                        "style_name": "32px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/71-subject-8794-with-css-original.svg?1520987066",
                    "metadata": {
                        "inline_styles": true
                    },
                    "content_type": "image/svg+xml"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/549-subject-8794-without-css-original.svg?1520987216",
                    "metadata": {
                        "inline_styles": false
                    },
                    "content_type": "image/svg+xml"
                }
            ]
        },
        {
            "id": 346,
            "level": 33,
            "slug": "inside",
            "characters": "内",
            "character_images": []
        },
        {
            "id": 344,
            "level": 33,
            "slug": "interval",
            "characters": "間",
            "character_images": []
        },
        {
            "id": 345,
            "level": 33,
            "slug": "sock",
            "characters": "享",
            "character_images": []
        },
        {
            "id": 347,
            "level": 33,
            "slug": "storehouse",
            "characters": "蔵",
            "character_images": []
        },
        {
            "id": 8830,
            "level": 33,
            "slug": "syrup",
            "characters": "喿",
            "character_images": []
        },
        {
            "id": 382,
            "level": 33,
            "slug": "wide",
            "characters": "広",
            "character_images": []
        },
        {
            "id": 428,
            "level": 34,
            "slug": "boot",
            "characters": "堇",
            "character_images": []
        },
        {
            "id": 348,
            "level": 34,
            "slug": "catapult",
            "characters": "呉",
            "character_images": []
        },
        {
            "id": 350,
            "level": 34,
            "slug": "claw",
            "characters": "爪",
            "character_images": []
        },
        {
            "id": 349,
            "level": 34,
            "slug": "member",
            "characters": "員",
            "character_images": []
        },
        {
            "id": 351,
            "level": 34,
            "slug": "slice",
            "characters": "亥",
            "character_images": []
        },
        {
            "id": 352,
            "level": 35,
            "slug": "belt",
            "characters": "帯",
            "character_images": []
        },
        {
            "id": 8831,
            "level": 35,
            "slug": "commander",
            "characters": "将",
            "character_images": []
        },
        {
            "id": 355,
            "level": 35,
            "slug": "sake",
            "characters": "為",
            "character_images": []
        },
        {
            "id": 354,
            "level": 35,
            "slug": "shuriken",
            "characters": "彑",
            "character_images": []
        },
        {
            "id": 353,
            "level": 35,
            "slug": "turtle",
            "characters": "亀",
            "character_images": []
        },
        {
            "id": 357,
            "level": 36,
            "slug": "bright",
            "characters": "明",
            "character_images": []
        },
        {
            "id": 429,
            "level": 36,
            "slug": "dance",
            "characters": "舛",
            "character_images": []
        },
        {
            "id": 359,
            "level": 36,
            "slug": "departure",
            "characters": "発",
            "character_images": []
        },
        {
            "id": 361,
            "level": 36,
            "slug": "south",
            "characters": "南",
            "character_images": []
        },
        {
            "id": 360,
            "level": 36,
            "slug": "sweet",
            "characters": "甘",
            "character_images": []
        },
        {
            "id": 358,
            "level": 36,
            "slug": "valuable",
            "characters": "貴",
            "character_images": []
        },
        {
            "id": 363,
            "level": 37,
            "slug": "omen",
            "characters": "兆",
            "character_images": []
        },
        {
            "id": 364,
            "level": 37,
            "slug": "prize",
            "characters": "賞",
            "character_images": []
        },
        {
            "id": 365,
            "level": 37,
            "slug": "skewer",
            "characters": "串",
            "character_images": []
        },
        {
            "id": 366,
            "level": 37,
            "slug": "violence",
            "characters": "暴",
            "character_images": []
        },
        {
            "id": 395,
            "level": 37,
            "slug": "wrap",
            "characters": "包",
            "character_images": []
        },
        {
            "id": 371,
            "level": 38,
            "slug": "have",
            "characters": "有",
            "character_images": []
        },
        {
            "id": 367,
            "level": 38,
            "slug": "hot-pepper",
            "characters": "辟",
            "character_images": []
        },
        {
            "id": 369,
            "level": 38,
            "slug": "prefecture",
            "characters": "県",
            "character_images": []
        },
        {
            "id": 370,
            "level": 38,
            "slug": "sky",
            "characters": "空",
            "character_images": []
        },
        {
            "id": 368,
            "level": 38,
            "slug": "think",
            "characters": "思",
            "character_images": []
        },
        {
            "id": 372,
            "level": 38,
            "slug": "tooth",
            "characters": "歯",
            "character_images": []
        },
        {
            "id": 373,
            "level": 39,
            "slug": "buddy",
            "characters": "君",
            "character_images": []
        },
        {
            "id": 374,
            "level": 39,
            "slug": "former",
            "characters": "旧",
            "character_images": []
        },
        {
            "id": 376,
            "level": 39,
            "slug": "hill",
            "characters": "岡",
            "character_images": []
        },
        {
            "id": 430,
            "level": 39,
            "slug": "nurse",
            "characters": "㐮",
            "character_images": []
        },
        {
            "id": 413,
            "level": 39,
            "slug": "reality",
            "characters": "真",
            "character_images": []
        },
        {
            "id": 414,
            "level": 39,
            "slug": "scroll",
            "characters": "巻",
            "character_images": []
        },
        {
            "id": 375,
            "level": 39,
            "slug": "six-375",
            "characters": "六",
            "character_images": []
        },
        {
            "id": 377,
            "level": 39,
            "slug": "three",
            "characters": "三",
            "character_images": []
        },
        {
            "id": 378,
            "level": 40,
            "slug": "employ",
            "characters": "雇",
            "character_images": []
        },
        {
            "id": 379,
            "level": 40,
            "slug": "every",
            "characters": "毎",
            "character_images": []
        },
        {
            "id": 380,
            "level": 40,
            "slug": "preserve",
            "characters": "保",
            "character_images": []
        },
        {
            "id": 8796,
            "level": 41,
            "slug": "cactus",
            "characters": null,
            "character_images": [
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1404-subject-8796-normal-weight-black-original.png?1520988550",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "original"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1404-subject-8796-normal-weight-black-1024px.png?1520988550",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "1024px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1404-subject-8796-normal-weight-black-512px.png?1520988550",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "512x512",
                        "style_name": "512px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1404-subject-8796-normal-weight-black-256px.png?1520988550",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "256x256",
                        "style_name": "256px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1404-subject-8796-normal-weight-black-128px.png?1520988550",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "128x128",
                        "style_name": "128px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1404-subject-8796-normal-weight-black-64px.png?1520988550",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "64x64",
                        "style_name": "64px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1404-subject-8796-normal-weight-black-32px.png?1520988550",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "32x32",
                        "style_name": "32px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/448-subject-8796-with-css-original.svg?1520987174",
                    "metadata": {
                        "inline_styles": true
                    },
                    "content_type": "image/svg+xml"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/926-subject-8796-without-css-original.svg?1520987320",
                    "metadata": {
                        "inline_styles": false
                    },
                    "content_type": "image/svg+xml"
                }
            ]
        },
        {
            "id": 381,
            "level": 41,
            "slug": "signpost",
            "characters": "夆",
            "character_images": [],
            subradicals: ["winter"]
        },
        {
            "id": 385,
            "level": 42,
            "slug": "bone",
            "characters": "骨",
            "character_images": [],
            subradicals: ["mustache", "forehead", "moon"]
        },
        {
            "id": 384,
            "level": 42,
            "slug": "melon",
            "characters": "瓜",
            "character_images": []
        },
        {
            "id": 8798,
            "level": 42,
            "slug": "satellite",
            "characters": null,
            "character_images": [
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1407-subject-8798-normal-weight-black-original.png?1520988559",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "original"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1407-subject-8798-normal-weight-black-1024px.png?1520988559",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "1024px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1407-subject-8798-normal-weight-black-512px.png?1520988559",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "512x512",
                        "style_name": "512px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1407-subject-8798-normal-weight-black-256px.png?1520988559",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "256x256",
                        "style_name": "256px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1407-subject-8798-normal-weight-black-128px.png?1520988559",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "128x128",
                        "style_name": "128px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1407-subject-8798-normal-weight-black-64px.png?1520988559",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "64x64",
                        "style_name": "64px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1407-subject-8798-normal-weight-black-32px.png?1520988559",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "32x32",
                        "style_name": "32px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/451-subject-8798-with-css-original.svg?1520987176",
                    "metadata": {
                        "inline_styles": true
                    },
                    "content_type": "image/svg+xml"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/929-subject-8798-without-css-original.svg?1520987321",
                    "metadata": {
                        "inline_styles": false
                    },
                    "content_type": "image/svg+xml"
                }
            ]
        },
        {
            "id": 387,
            "level": 42,
            "slug": "shop",
            "characters": "屋",
            "character_images": [],
            subradicals: ["flag", "ground", "private", "dirt"]
        },
        {
            "id": 412,
            "level": 43,
            "slug": "badger",
            "characters": "豸",
            "character_images": []
        },
        {
            "id": 389,
            "level": 43,
            "slug": "imperial",
            "characters": "龍",
            "character_images": [],
            subradicals: ["moon", "stand"]
        },
        {
            "id": 388,
            "level": 43,
            "slug": "plow",
            "characters": "耒",
            "character_images": [],
            subradicals: ["slide", "dirt", "tree"]
        },
        {
            "id": 392,
            "level": 44,
            "slug": "can",
            "characters": "缶",
            "character_images": [],
            subradicals: ["mountain", "gun"]
        },
        {
            "id": 394,
            "level": 44,
            "slug": "dragon",
            "characters": "竜",
            "character_images": [],
            subradicals: ["stand", "rice-paddy", "umbrella"]
        },
        {
            "id": 416,
            "level": 44,
            "slug": "wind",
            "characters": "風",
            "character_images": [],
            subradicals: ["table", "slide", "insect"]
        },
        {
            "id": 397,
            "level": 45,
            "slug": "again",
            "characters": "更",
            "character_images": [],
            subradicals: ["ground", "rice-paddy", "treasure"]
        },
        {
            "id": 398,
            "level": 45,
            "slug": "house",
            "characters": "家",
            "character_images": [],
            subradicals: ["roof", "pig"]
        },
        {
            "id": 396,
            "level": 45,
            "slug": "protect",
            "characters": "守",
            "character_images": [],
            subradicals: ["roof", "measurement"]
        },
        {
            "id": 411,
            "level": 46,
            "slug": "fat",
            "characters": "太",
            "character_images": [],
            subradicals: ["big", "drop"]
        },
        {
            "id": 400,
            "level": 46,
            "slug": "favor",
            "characters": "恵",
            "character_images": [],
            subradicals: ["cross", "rice-paddy", "heart"]
        },
        {
            "id": 431,
            "level": 47,
            "slug": "penguin",
            "characters": "敝",
            "character_images": [],
            subradicals: ["fins", "towel", "winter"]
        },
        {
            "id": 402,
            "level": 47,
            "slug": "wave",
            "characters": "波",
            "character_images": [],
            subradicals: ["tsunami", "skin"]
        },
        {
            "id": 404,
            "level": 48,
            "slug": "form",
            "characters": "容",
            "character_images": [],
            subradicals: ["roof", "valley"]
        },
        {
            "id": 403,
            "level": 48,
            "slug": "mysterious",
            "characters": "玄",
            "character_images": [],
            subradicals: ["lid", "poop"]
        },
        {
            "id": 405,
            "level": 48,
            "slug": "sunlight",
            "characters": "光",
            "character_images": [],
            subradicals: ["triceratops", "pi"]
        },
        {
            "id": 407,
            "level": 49,
            "slug": "crab-trap",
            "characters": "甚",
            "character_images": [],
            subradicals: ["cage", "legs", "crab"]
        },
        {
            "id": 406,
            "level": 49,
            "slug": "times",
            "characters": "回",
            "character_images": [],
            subradicals: ["mouth"]
        },
        {
            "id": 409,
            "level": 50,
            "slug": "name",
            "characters": "名",
            "character_images": [],
            subradicals: ["evening", "mouth"]
        },
        {
            "id": 8797,
            "level": 50,
            "slug": "psychopath",
            "characters": null,
            "character_images": [
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1427-subject-8797-normal-weight-black-original.png?1520988612",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "original"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1427-subject-8797-normal-weight-black-1024px.png?1520988612",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "1024x1024",
                        "style_name": "1024px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1427-subject-8797-normal-weight-black-512px.png?1520988612",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "512x512",
                        "style_name": "512px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1427-subject-8797-normal-weight-black-256px.png?1520988612",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "256x256",
                        "style_name": "256px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1427-subject-8797-normal-weight-black-128px.png?1520988612",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "128x128",
                        "style_name": "128px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1427-subject-8797-normal-weight-black-64px.png?1520988612",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "64x64",
                        "style_name": "64px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/1427-subject-8797-normal-weight-black-32px.png?1520988612",
                    "metadata": {
                        "color": "#000000",
                        "dimensions": "32x32",
                        "style_name": "32px"
                    },
                    "content_type": "image/png"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/471-subject-8797-with-css-original.svg?1520987183",
                    "metadata": {
                        "inline_styles": true
                    },
                    "content_type": "image/svg+xml"
                },
                {
                    "url": "https://cdn.wanikani.com/images/legacy/949-subject-8797-without-css-original.svg?1520987325",
                    "metadata": {
                        "inline_styles": false
                    },
                    "content_type": "image/svg+xml"
                }
            ],
            subradicals: ["forehead", "hair", "spoon", "box", "treasure"]
        },
        {
            "id": 410,
            "level": 50,
            "slug": "splinter",
            "characters": "禺",
            "character_images": [],
            subradicals: ["turtle-shell", "mustache", "head"]
        },
        {
            "id": 432,
            "level": 51,
            "slug": "stomach",
            "characters": "胃",
            "character_images": [],
            subradicals: ["rice paddy", "moon"]
        },
        {
            "id": 426,
            "level": 52,
            "slug": "frostbite",
            "characters": "夌",
            "character_images": [],
            subradicals: ["dirt", "legs", "winter"]
        },
        {
            "id": 438,
            "level": 53,
            "slug": "tall",
            "characters": "高",
            "character_images": [],
            subradicals: ["lid", "mouth", "mustache"]
        },
        {
            "id": 8832,
            "level": 55,
            "slug": "doubt",
            "characters": "疑",
            "character_images": [],
            subradicals: ["spoon", "mama", "arrow", "coat-rack"]
        },
        {
            "id": 435,
            "level": 57,
            "slug": "concave",
            "characters": "凹",
            "character_images": []
        },
        {
            "id": 434,
            "level": 57,
            "slug": "convex",
            "characters": "凸",
            "character_images": []
        },
        {
            "id": 436,
            "level": 59,
            "slug": "below",
            "characters": "下",
            "character_images": [],
            subradicals: ["ground", "toe"]
        },
        {
            "id": 437,
            "level": 60,
            "slug": "courage",
            "characters": "勇",
            "character_images": [],
            subradicals: ["mama", "man"]
        }
    ];

    ////////////////////////////////////////////////////////////////////////////

    var url = document.URL;
    var urlParts = url.split("/");

    if (urlParts[urlParts.length - 2] === "radicals") {
        var radicalName = urlParts[urlParts.length - 1];
        showSubRadicals(radicalName);
        showSuperRadicals(radicalName);
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function toName(slug) {
        return slug.split("-").map(capitalizeFirstLetter).join(" ");
    }

    function findRadical(radicalName) {
        console.log(allRadicals)
        return allRadicals.find(function(r){ return r.slug === radicalName; });
    }

    function htmlFor(radicalObjects, heading) {
        var sectionStartHTML = '<section>'
            + '<h2>' + heading + '</h2>'
            + '<ul class="single-character-grid">';

        var radicalHTML = radicalObjects.map(function (radical, idx) {
            console.log("subradical ", radical, toName(radical.slug));
            return (
                '<li class="radical-' + idx + ' character-item">'
                + '<span lang="ja" class="item-badge"></span>'
                + '<a href="/radicals/' + radical.slug + '">'
                + '<span class="character" lang="ja">' + radical.characters + '</span>'
                + '<ul><li>' + toName(radical.slug) + '</li></ul>'
                + '</a>'
                + '</li>'
            );
        }).join("");

        var sectionEndHTML = "</ul></section>";

        return sectionStartHTML + radicalHTML + sectionEndHTML;
    }

    function showSubRadicals(radicalName) {
        var radical = findRadical(radicalName);
        console.log("showSubRadicals", radical)
        if (!radical || !radical.subradicals || radical.subradicals.length === 0) {
            return; // nothing to show here
        }

        var subRadicals = radical.subradicals.map(findRadical);

        $("#information").parent().append(htmlFor(subRadicals, "Contained Radicals"));
    }

    function showSuperRadicals(radicalName) {
        console.log("showSuperRadicals", radicalName);
        var superRadicals = allRadicals.filter(function (radical) {
            return radical.subradicals && radical.subradicals.includes(radicalName);
        });

        if (!superRadicals || superRadicals.length === 0) {
            return; // nothing to show here
        }

        $("#information").parent().append(htmlFor(superRadicals, "Found In Radicals"));
    }

})();
