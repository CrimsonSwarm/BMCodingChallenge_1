import { useEffect, useState } from 'react';

const productsData = {
  pageInfo: {
    totalCount: 216,
    startCursor:
      'eyJ6aXBjb2RlIjoiMTMzNTUiLCJvZmZzZXQiOjAsInF1ZXJ5IjoiYmlyIiwiZmlsdGVyIjp7ImJyYW5kIjoiIiwiYWxsZXJnZW5pYyI6W10sImNoYXJhY3RlcmlzdGljIjpbXSwiaGllcmFyY2hpY2FsQ2F0ZWdvcmllc0x2bDAiOiIiLCJoaWVyYXJjaGljYWxDYXRlZ29yaWVzTHZsMSI6IiIsImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwyIjoiIiwiaGllcmFyY2hpY2FsQ2F0ZWdvcmllc0x2bDMiOiIifSwic29ydGluZyI6IkRFRkFVTFQiLCJjYW1wYWlnbiI6IiJ9',
    endCursor:
      'eyJ6aXBjb2RlIjoiMTMzNTUiLCJvZmZzZXQiOjU5LCJxdWVyeSI6ImJpciIsImZpbHRlciI6eyJicmFuZCI6IiIsImFsbGVyZ2VuaWMiOltdLCJjaGFyYWN0ZXJpc3RpYyI6W10sImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwwIjoiIiwiaGllcmFyY2hpY2FsQ2F0ZWdvcmllc0x2bDEiOiIiLCJoaWVyYXJjaGljYWxDYXRlZ29yaWVzTHZsMiI6IiIsImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwzIjoiIn0sInNvcnRpbmciOiJERUZBVUxUIiwiY2FtcGFpZ24iOiIifQ==',
    hasNextPage: true,
  },
  edges: [
    {
      cursor:
        'eyJ6aXBjb2RlIjoiMTMzNTUiLCJvZmZzZXQiOjAsInF1ZXJ5IjoiYmlyIiwiZmlsdGVyIjp7ImJyYW5kIjoiIiwiYWxsZXJnZW5pYyI6W10sImNoYXJhY3RlcmlzdGljIjpbXSwiaGllcmFyY2hpY2FsQ2F0ZWdvcmllc0x2bDAiOiIiLCJoaWVyYXJjaGljYWxDYXRlZ29yaWVzTHZsMSI6IiIsImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwyIjoiIiwiaGllcmFyY2hpY2FsQ2F0ZWdvcmllc0x2bDMiOiIifSwic29ydGluZyI6IkRFRkFVTFQiLCJjYW1wYWlnbiI6IiJ9',
      node: {
        id: 'cHJvZHVjdC0zOTUwMDQ1NDk=',
        productId: '395004549',
        name: 'Birne Abate Fetel',
        isAvailable: true,
        isBasePrice: true,
        packing: '2er Packung',
        units: [
          {
            id: 'cHJvZHVjdFVuaXQtMzk1MDA0NTQ5XzEwNQ==',
            unitId: 105,
            name: 'Packung',
            default: true,
            price: 5.78,
            specialPrice: null,
            __typename: 'ProductUnit',
          },
        ],
        sku: '395004549',
        image:
          '//assets.bringmeister.de/media/p/395004549/0/636da0d4c190140458956bb4b0534efb.jpg',
        properties: [],
        browserUrl: 'birne-abate-fetel-395004549',
        prices: {
          specialDiscount: 0,
          specialPrice: null,
          specialBasePrice: null,
          specialStartDateTs: null,
          specialEndDateTs: null,
          basePrice: 12.04,
          baseUnit: '1 kg',
          deposit: 0,
          __typename: 'ProductPrices',
        },
        depositType: null,
        rootCategory: {
          id: 'Y2F0ZWdvcnktMTAwMA==',
          name: 'Obst & Gemüse',
          path: 'obst-und-gemuese',
          position: 1,
          __typename: 'Category',
        },
        hierarchicalCategories: [
          {
            name: 'Obst & Gemüse',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Obst',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Birnen',
            __typename: 'ProductCategoryUrlInfo',
          },
        ],
        multibuy: null,
        __typename: 'Product',
      },
      __typename: 'ProductsEdge',
    },
    {
      cursor:
        'eyJ6aXBjb2RlIjoiMTMzNTUiLCJvZmZzZXQiOjEsInF1ZXJ5IjoiYmlyIiwiZmlsdGVyIjp7ImJyYW5kIjoiIiwiYWxsZXJnZW5pYyI6W10sImNoYXJhY3RlcmlzdGljIjpbXSwiaGllcmFyY2hpY2FsQ2F0ZWdvcmllc0x2bDAiOiIiLCJoaWVyYXJjaGljYWxDYXRlZ29yaWVzTHZsMSI6IiIsImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwyIjoiIiwiaGllcmFyY2hpY2FsQ2F0ZWdvcmllc0x2bDMiOiIifSwic29ydGluZyI6IkRFRkFVTFQiLCJjYW1wYWlnbiI6IiJ9',
      node: {
        id: 'cHJvZHVjdC0zOTUxMjc1NDk=',
        productId: '395127549',
        name: 'Nashi Birnen',
        isAvailable: true,
        isBasePrice: false,
        packing: '2er Packung',
        units: [
          {
            id: 'cHJvZHVjdFVuaXQtMzk1MTI3NTQ5XzEwNQ==',
            unitId: 105,
            name: 'Packung',
            default: true,
            price: 2.38,
            specialPrice: null,
            __typename: 'ProductUnit',
          },
        ],
        sku: '395127549',
        image:
          '//assets.bringmeister.de/media/p/395127549/0/4d487b17ba922d6b33dd9a19e71cff1c.jpg',
        properties: [],
        browserUrl: 'nashi-birnen-395127549',
        prices: {
          specialDiscount: 0,
          specialPrice: null,
          specialBasePrice: null,
          specialStartDateTs: null,
          specialEndDateTs: null,
          basePrice: 0,
          baseUnit: '0',
          deposit: 0,
          __typename: 'ProductPrices',
        },
        depositType: null,
        rootCategory: {
          id: 'Y2F0ZWdvcnktMTAwMA==',
          name: 'Obst & Gemüse',
          path: 'obst-und-gemuese',
          position: 1,
          __typename: 'Category',
        },
        hierarchicalCategories: [
          {
            name: 'Obst & Gemüse',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Obst',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Birnen',
            __typename: 'ProductCategoryUrlInfo',
          },
        ],
        multibuy: null,
        __typename: 'Product',
      },
      __typename: 'ProductsEdge',
    },
    {
      cursor:
        'eyJ6aXBjb2RlIjoiMTMzNTUiLCJvZmZzZXQiOjIsInF1ZXJ5IjoiYmlyIiwiZmlsdGVyIjp7ImJyYW5kIjoiIiwiYWxsZXJnZW5pYyI6W10sImNoYXJhY3RlcmlzdGljIjpbXSwiaGllcmFyY2hpY2FsQ2F0ZWdvcmllc0x2bDAiOiIiLCJoaWVyYXJjaGljYWxDYXRlZ29yaWVzTHZsMSI6IiIsImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwyIjoiIiwiaGllcmFyY2hpY2FsQ2F0ZWdvcmllc0x2bDMiOiIifSwic29ydGluZyI6IkRFRkFVTFQiLCJjYW1wYWlnbiI6IiJ9',
      node: {
        id: 'cHJvZHVjdC0zOTUyMDczMTE=',
        productId: '395207311',
        name: 'Demeter für EDEKA Birnen, Jules Guyot, Bio',
        isAvailable: true,
        isBasePrice: false,
        packing: '0.5kg Packung',
        units: [
          {
            id: 'cHJvZHVjdFVuaXQtMzk1MjA3MzExXzU3',
            unitId: 57,
            name: 'Packung',
            default: true,
            price: 3.79,
            specialPrice: null,
            __typename: 'ProductUnit',
          },
        ],
        sku: '395207311',
        image:
          '//assets.bringmeister.de/media/p/805984661/0/d19359bcab3bac05814a4aaf976df040.jpg',
        properties: ['NEW'],
        browserUrl: 'demeter-fuer-edeka-birnen-jules-guyot-bio-395207311',
        prices: {
          specialDiscount: 0,
          specialPrice: null,
          specialBasePrice: null,
          specialStartDateTs: null,
          specialEndDateTs: null,
          basePrice: 0,
          baseUnit: '0',
          deposit: 0,
          __typename: 'ProductPrices',
        },
        depositType: null,
        rootCategory: {
          id: 'Y2F0ZWdvcnktMTAwMA==',
          name: 'Obst & Gemüse',
          path: 'obst-und-gemuese',
          position: 1,
          __typename: 'Category',
        },
        hierarchicalCategories: [
          {
            name: 'Obst & Gemüse',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Obst',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Birnen',
            __typename: 'ProductCategoryUrlInfo',
          },
        ],
        multibuy: null,
        __typename: 'Product',
      },
      __typename: 'ProductsEdge',
    },
    {
      cursor:
        'eyJ6aXBjb2RlIjoiMTMzNTUiLCJvZmZzZXQiOjMsInF1ZXJ5IjoiYmlyIiwiZmlsdGVyIjp7ImJyYW5kIjoiIiwiYWxsZXJnZW5pYyI6W10sImNoYXJhY3RlcmlzdGljIjpbXSwiaGllcmFyY2hpY2FsQ2F0ZWdvcmllc0x2bDAiOiIiLCJoaWVyYXJjaGljYWxDYXRlZ29yaWVzTHZsMSI6IiIsImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwyIjoiIiwiaGllcmFyY2hpY2FsQ2F0ZWdvcmllc0x2bDMiOiIifSwic29ydGluZyI6IkRFRkFVTFQiLCJjYW1wYWlnbiI6IiJ9',
      node: {
        id: 'cHJvZHVjdC0zOTUxMDU0MzE=',
        productId: '395105431',
        name: 'GUT&GÜNSTIG Birnen Guyot',
        isAvailable: false,
        isBasePrice: true,
        packing: '1kg Packung',
        units: [
          {
            id: 'cHJvZHVjdFVuaXQtMzk1MTA1NDMxXzU3',
            unitId: 57,
            name: 'Packung',
            default: true,
            price: 1.85,
            specialPrice: null,
            __typename: 'ProductUnit',
          },
        ],
        sku: '395105431',
        image:
          '//assets.bringmeister.de/media/p/395105431/0/b01356b71f5d734383401c932d6ffaed.jpg',
        properties: [],
        browserUrl: 'gut-und-guenstig-birnen-guyot-395105431',
        prices: {
          specialDiscount: 0,
          specialPrice: null,
          specialBasePrice: null,
          specialStartDateTs: null,
          specialEndDateTs: null,
          basePrice: 1.85,
          baseUnit: '1 kg',
          deposit: 0,
          __typename: 'ProductPrices',
        },
        depositType: null,
        rootCategory: {
          id: 'Y2F0ZWdvcnktMTAwMA==',
          name: 'Obst & Gemüse',
          path: 'obst-und-gemuese',
          position: 1,
          __typename: 'Category',
        },
        hierarchicalCategories: [
          {
            name: 'Obst & Gemüse',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Obst',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Birnen',
            __typename: 'ProductCategoryUrlInfo',
          },
        ],
        multibuy: null,
        __typename: 'Product',
      },
      __typename: 'ProductsEdge',
    },
    {
      cursor:
        'eyJ6aXBjb2RlIjoiMTMzNTUiLCJvZmZzZXQiOjQsInF1ZXJ5IjoiYmlyIiwiZmlsdGVyIjp7ImJyYW5kIjoiIiwiYWxsZXJnZW5pYyI6W10sImNoYXJhY3RlcmlzdGljIjpbXSwiaGllcmFyY2hpY2FsQ2F0ZWdvcmllc0x2bDAiOiIiLCJoaWVyYXJjaGljYWxDYXRlZ29yaWVzTHZsMSI6IiIsImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwyIjoiIiwiaGllcmFyY2hpY2FsQ2F0ZWdvcmllc0x2bDMiOiIifSwic29ydGluZyI6IkRFRkFVTFQiLCJjYW1wYWlnbiI6IiJ9',
      node: {
        id: 'cHJvZHVjdC0xMzE4MjM2MDA4MQ==',
        productId: '13182360081',
        name: 'Mark Brandenburg Fruchtjoghurt Bircher Müsli',
        isAvailable: true,
        isBasePrice: true,
        packing: '200g Becher',
        units: [
          {
            id: 'cHJvZHVjdFVuaXQtMTMxODIzNjAwODFfNTc=',
            unitId: 57,
            name: 'Becher',
            default: true,
            price: 0.49,
            specialPrice: 0.4,
            __typename: 'ProductUnit',
          },
        ],
        sku: '13182360081',
        image:
          '//assets.bringmeister.de/media/p/13182360081/0/3ee2a0f3906b74f37871ded367cf966f.jpg',
        properties: ['CHILLED'],
        browserUrl: 'mark-brandenburg-fruchtjoghurt-bircher-muesli-13182360081',
        prices: {
          specialDiscount: 18,
          specialPrice: 0.4,
          specialBasePrice: 0.2,
          specialStartDateTs: 1629756000000,
          specialEndDateTs: 1629842399999,
          basePrice: 0.25,
          baseUnit: '100 g',
          deposit: 0,
          __typename: 'ProductPrices',
        },
        depositType: null,
        rootCategory: {
          id: 'Y2F0ZWdvcnktMTEzOQ==',
          name: 'Kühlregal',
          path: 'kuehlregal',
          position: 3,
          __typename: 'Category',
        },
        hierarchicalCategories: [
          {
            name: 'Kühlregal',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Molkereiprodukte',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Fruchtjoghurt',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Cerealien & Nüsse',
            __typename: 'ProductCategoryUrlInfo',
          },
        ],
        multibuy: null,
        __typename: 'Product',
      },
      __typename: 'ProductsEdge',
    },
    {
      cursor:
        'eyJ6aXBjb2RlIjoiMTMzNTUiLCJvZmZzZXQiOjUsInF1ZXJ5IjoiYmlyIiwiZmlsdGVyIjp7ImJyYW5kIjoiIiwiYWxsZXJnZW5pYyI6W10sImNoYXJhY3RlcmlzdGljIjpbXSwiaGllcmFyY2hpY2FsQ2F0ZWdvcmllc0x2bDAiOiIiLCJoaWVyYXJjaGljYWxDYXRlZ29yaWVzTHZsMSI6IiIsImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwyIjoiIiwiaGllcmFyY2hpY2FsQ2F0ZWdvcmllc0x2bDMiOiIifSwic29ydGluZyI6IkRFRkFVTFQiLCJjYW1wYWlnbiI6IiJ9',
      node: {
        id: 'cHJvZHVjdC0xMjAzMzE5MDAxMg==',
        productId: '12033190012',
        name: 'albi Heimische Birne',
        isAvailable: true,
        isBasePrice: true,
        packing: '6 x 1l Packung / Packung',
        units: [
          {
            id: 'cHJvZHVjdFVuaXQtMTIwMzMxOTAwMTJfNzE=',
            unitId: 71,
            name: 'Packung',
            default: true,
            price: 11.1,
            specialPrice: null,
            __typename: 'ProductUnit',
          },
        ],
        sku: '12033190012',
        image:
          '//assets.bringmeister.de/media/p/12033190012/0/0d61791b1e3cc47b2de9c83247415bc7.jpg',
        properties: [],
        browserUrl: 'albi-heimische-birne-12033190012',
        prices: {
          specialDiscount: 0,
          specialPrice: null,
          specialBasePrice: null,
          specialStartDateTs: null,
          specialEndDateTs: null,
          basePrice: 1.85,
          baseUnit: '1 Liter',
          deposit: 0,
          __typename: 'ProductPrices',
        },
        depositType: null,
        rootCategory: {
          id: 'Y2F0ZWdvcnktMTMyMg==',
          name: 'Getränke',
          path: 'getraenke',
          position: 5,
          __typename: 'Category',
        },
        hierarchicalCategories: [
          {
            name: 'Getränke',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Saft',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Fruchtsäfte',
            __typename: 'ProductCategoryUrlInfo',
          },
        ],
        multibuy: null,
        __typename: 'Product',
      },
      __typename: 'ProductsEdge',
    },
    {
      cursor:
        'eyJ6aXBjb2RlIjoiMTMzNTUiLCJvZmZzZXQiOjYsInF1ZXJ5IjoiYmlyIiwiZmlsdGVyIjp7ImJyYW5kIjoiIiwiYWxsZXJnZW5pYyI6W10sImNoYXJhY3RlcmlzdGljIjpbXSwiaGllcmFyY2hpY2FsQ2F0ZWdvcmllc0x2bDAiOiIiLCJoaWVyYXJjaGljYWxDYXRlZ29yaWVzTHZsMSI6IiIsImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwyIjoiIiwiaGllcmFyY2hpY2FsQ2F0ZWdvcmllc0x2bDMiOiIifSwic29ydGluZyI6IkRFRkFVTFQiLCJjYW1wYWlnbiI6IiJ9',
      node: {
        id: 'cHJvZHVjdC0xMjAzMzE5MDAxMQ==',
        productId: '12033190011',
        name: 'albi Heimische Birne',
        isAvailable: true,
        isBasePrice: true,
        packing: '1l Packung',
        units: [
          {
            id: 'cHJvZHVjdFVuaXQtMTIwMzMxOTAwMTFfNTc=',
            unitId: 57,
            name: 'Packung',
            default: true,
            price: 1.85,
            specialPrice: null,
            __typename: 'ProductUnit',
          },
        ],
        sku: '12033190011',
        image:
          '//assets.bringmeister.de/media/p/12033190011/0/f966e4885685deda7457cd30b3a5577a.jpg',
        properties: [],
        browserUrl: 'albi-heimische-birne-12033190011',
        prices: {
          specialDiscount: 0,
          specialPrice: null,
          specialBasePrice: null,
          specialStartDateTs: null,
          specialEndDateTs: null,
          basePrice: 1.85,
          baseUnit: '1 Liter',
          deposit: 0,
          __typename: 'ProductPrices',
        },
        depositType: null,
        rootCategory: {
          id: 'Y2F0ZWdvcnktMTMyMg==',
          name: 'Getränke',
          path: 'getraenke',
          position: 5,
          __typename: 'Category',
        },
        hierarchicalCategories: [
          {
            name: 'Getränke',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Saft',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Fruchtsäfte',
            __typename: 'ProductCategoryUrlInfo',
          },
        ],
        multibuy: null,
        __typename: 'Product',
      },
      __typename: 'ProductsEdge',
    },
    {
      cursor:
        'eyJ6aXBjb2RlIjoiMTMzNTUiLCJvZmZzZXQiOjcsInF1ZXJ5IjoiYmlyIiwiZmlsdGVyIjp7ImJyYW5kIjoiIiwiYWxsZXJnZW5pYyI6W10sImNoYXJhY3RlcmlzdGljIjpbXSwiaGllcmFyY2hpY2FsQ2F0ZWdvcmllc0x2bDAiOiIiLCJoaWVyYXJjaGljYWxDYXRlZ29yaWVzTHZsMSI6IiIsImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwyIjoiIiwiaGllcmFyY2hpY2FsQ2F0ZWdvcmllc0x2bDMiOiIifSwic29ydGluZyI6IkRFRkFVTFQiLCJjYW1wYWlnbiI6IiJ9',
      node: {
        id: 'cHJvZHVjdC0yOTY4MDY4MDA5Mg==',
        productId: '29680680092',
        name: 'Alnatura Bio Apfelmark mit Birne',
        isAvailable: true,
        isBasePrice: true,
        packing: '6 x 360g Glas / Packung',
        units: [
          {
            id: 'cHJvZHVjdFVuaXQtMjk2ODA2ODAwOTJfNzE=',
            unitId: 71,
            name: 'Pack',
            default: true,
            price: 8.7,
            specialPrice: null,
            __typename: 'ProductUnit',
          },
        ],
        sku: '29680680092',
        image:
          '//assets.bringmeister.de/media/p/29680680092/0/89db22c7df4a81fb8d4f415f260611ff.jpg',
        properties: ['ORGANIC'],
        browserUrl: 'alnatura-bio-apfelmark-mit-birne-29680680092',
        prices: {
          specialDiscount: 0,
          specialPrice: null,
          specialBasePrice: null,
          specialStartDateTs: null,
          specialEndDateTs: null,
          basePrice: 4.03,
          baseUnit: '1 kg',
          deposit: 0,
          __typename: 'ProductPrices',
        },
        depositType: null,
        rootCategory: {
          id: 'Y2F0ZWdvcnktMTUyNQ==',
          name: 'Nahrungsmittel',
          path: 'nahrungsmittel',
          position: 13,
          __typename: 'Category',
        },
        hierarchicalCategories: [
          {
            name: 'Nahrungsmittel',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Konserven & Eingelegtes',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Obstkonserven',
            __typename: 'ProductCategoryUrlInfo',
          },
        ],
        multibuy: null,
        __typename: 'Product',
      },
      __typename: 'ProductsEdge',
    },
    {
      cursor:
        'eyJ6aXBjb2RlIjoiMTMzNTUiLCJvZmZzZXQiOjgsInF1ZXJ5IjoiYmlyIiwiZmlsdGVyIjp7ImJyYW5kIjoiIiwiYWxsZXJnZW5pYyI6W10sImNoYXJhY3RlcmlzdGljIjpbXSwiaGllcmFyY2hpY2FsQ2F0ZWdvcmllc0x2bDAiOiIiLCJoaWVyYXJjaGljYWxDYXRlZ29yaWVzTHZsMSI6IiIsImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwyIjoiIiwiaGllcmFyY2hpY2FsQ2F0ZWdvcmllc0x2bDMiOiIifSwic29ydGluZyI6IkRFRkFVTFQiLCJjYW1wYWlnbiI6IiJ9',
      node: {
        id: 'cHJvZHVjdC0yOTY4MDY4MDA5MQ==',
        productId: '29680680091',
        name: 'Alnatura Bio Apfelmark mit Birne',
        isAvailable: true,
        isBasePrice: true,
        packing: '0.36kg Glas',
        units: [
          {
            id: 'cHJvZHVjdFVuaXQtMjk2ODA2ODAwOTFfNTc=',
            unitId: 57,
            name: 'Glas',
            default: true,
            price: 1.45,
            specialPrice: null,
            __typename: 'ProductUnit',
          },
        ],
        sku: '29680680091',
        image:
          '//assets.bringmeister.de/media/p/29680680091/0/810e2a25d9675bc1456acd457081d1ca.jpg',
        properties: ['ORGANIC'],
        browserUrl: 'alnatura-bio-apfelmark-mit-birne-29680680091',
        prices: {
          specialDiscount: 0,
          specialPrice: null,
          specialBasePrice: null,
          specialStartDateTs: null,
          specialEndDateTs: null,
          basePrice: 4.03,
          baseUnit: '1 kg',
          deposit: 0,
          __typename: 'ProductPrices',
        },
        depositType: null,
        rootCategory: {
          id: 'Y2F0ZWdvcnktMTUyNQ==',
          name: 'Nahrungsmittel',
          path: 'nahrungsmittel',
          position: 13,
          __typename: 'Category',
        },
        hierarchicalCategories: [
          {
            name: 'Nahrungsmittel',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Konserven & Eingelegtes',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Obstkonserven',
            __typename: 'ProductCategoryUrlInfo',
          },
        ],
        multibuy: null,
        __typename: 'Product',
      },
      __typename: 'ProductsEdge',
    },
    {
      cursor:
        'eyJ6aXBjb2RlIjoiMTMzNTUiLCJvZmZzZXQiOjksInF1ZXJ5IjoiYmlyIiwiZmlsdGVyIjp7ImJyYW5kIjoiIiwiYWxsZXJnZW5pYyI6W10sImNoYXJhY3RlcmlzdGljIjpbXSwiaGllcmFyY2hpY2FsQ2F0ZWdvcmllc0x2bDAiOiIiLCJoaWVyYXJjaGljYWxDYXRlZ29yaWVzTHZsMSI6IiIsImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwyIjoiIiwiaGllcmFyY2hpY2FsQ2F0ZWdvcmllc0x2bDMiOiIifSwic29ydGluZyI6IkRFRkFVTFQiLCJjYW1wYWlnbiI6IiJ9',
      node: {
        id: 'cHJvZHVjdC0xMjg3MzAwMDEy',
        productId: '1287300012',
        name: 'Birkel No.1 Schwäbische Spätzle',
        isAvailable: true,
        isBasePrice: true,
        packing: '8 x 500g Packung / Packung',
        units: [
          {
            id: 'cHJvZHVjdFVuaXQtMTI4NzMwMDAxMl83NA==',
            unitId: 74,
            name: 'Pack',
            default: true,
            price: 12.72,
            specialPrice: null,
            __typename: 'ProductUnit',
          },
        ],
        sku: '1287300012',
        image:
          '//assets.bringmeister.de/media/p/1287300012/0/5814f9182e79dcd46f963af11c74d9a0.jpg',
        properties: [],
        browserUrl: 'birkel-no1-schwaebische-spaetzle-1287300012',
        prices: {
          specialDiscount: 0,
          specialPrice: null,
          specialBasePrice: null,
          specialStartDateTs: null,
          specialEndDateTs: null,
          basePrice: 3.18,
          baseUnit: '1 kg',
          deposit: 0,
          __typename: 'ProductPrices',
        },
        depositType: null,
        rootCategory: {
          id: 'Y2F0ZWdvcnktMTUyNQ==',
          name: 'Nahrungsmittel',
          path: 'nahrungsmittel',
          position: 13,
          __typename: 'Category',
        },
        hierarchicalCategories: [
          {
            name: 'Nahrungsmittel',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Nudeln',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Spätzle',
            __typename: 'ProductCategoryUrlInfo',
          },
        ],
        multibuy: null,
        __typename: 'Product',
      },
      __typename: 'ProductsEdge',
    },
    {
      cursor:
        'eyJ6aXBjb2RlIjoiMTMzNTUiLCJvZmZzZXQiOjEwLCJxdWVyeSI6ImJpciIsImZpbHRlciI6eyJicmFuZCI6IiIsImFsbGVyZ2VuaWMiOltdLCJjaGFyYWN0ZXJpc3RpYyI6W10sImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwwIjoiIiwiaGllcmFyY2hpY2FsQ2F0ZWdvcmllc0x2bDEiOiIiLCJoaWVyYXJjaGljYWxDYXRlZ29yaWVzTHZsMiI6IiIsImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwzIjoiIn0sInNvcnRpbmciOiJERUZBVUxUIiwiY2FtcGFpZ24iOiIifQ==',
      node: {
        id: 'cHJvZHVjdC0xMjg3MzAwMDEx',
        productId: '1287300011',
        name: 'Birkel No.1 Schwäbische Spätzle',
        isAvailable: true,
        isBasePrice: true,
        packing: '0.5kg Packung',
        units: [
          {
            id: 'cHJvZHVjdFVuaXQtMTI4NzMwMDAxMV81Nw==',
            unitId: 57,
            name: 'Packung',
            default: true,
            price: 1.59,
            specialPrice: null,
            __typename: 'ProductUnit',
          },
        ],
        sku: '1287300011',
        image:
          '//assets.bringmeister.de/media/p/1287300011/0/43b840355cf917c3026e4c6cf9490a96.jpg',
        properties: [],
        browserUrl: 'birkel-no1-schwaebische-spaetzle-1287300011',
        prices: {
          specialDiscount: 0,
          specialPrice: null,
          specialBasePrice: null,
          specialStartDateTs: null,
          specialEndDateTs: null,
          basePrice: 3.18,
          baseUnit: '1 kg',
          deposit: 0,
          __typename: 'ProductPrices',
        },
        depositType: null,
        rootCategory: {
          id: 'Y2F0ZWdvcnktMTUyNQ==',
          name: 'Nahrungsmittel',
          path: 'nahrungsmittel',
          position: 13,
          __typename: 'Category',
        },
        hierarchicalCategories: [
          {
            name: 'Nahrungsmittel',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Nudeln',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Spätzle',
            __typename: 'ProductCategoryUrlInfo',
          },
        ],
        multibuy: {
          label: 'Käsespätzle für 3,99',
          type: 'MEALDEAL',
          startTs: 1618790400000,
          endTs: 1634428800000,
          __typename: 'ProductMultibuyInfo',
        },
        __typename: 'Product',
      },
      __typename: 'ProductsEdge',
    },
    {
      cursor:
        'eyJ6aXBjb2RlIjoiMTMzNTUiLCJvZmZzZXQiOjExLCJxdWVyeSI6ImJpciIsImZpbHRlciI6eyJicmFuZCI6IiIsImFsbGVyZ2VuaWMiOltdLCJjaGFyYWN0ZXJpc3RpYyI6W10sImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwwIjoiIiwiaGllcmFyY2hpY2FsQ2F0ZWdvcmllc0x2bDEiOiIiLCJoaWVyYXJjaGljYWxDYXRlZ29yaWVzTHZsMiI6IiIsImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwzIjoiIn0sInNvcnRpbmciOiJERUZBVUxUIiwiY2FtcGFpZ24iOiIifQ==',
      node: {
        id: 'cHJvZHVjdC03NTcwMjIwMDk5',
        productId: '7570220099',
        name: 'GUT&GÜNSTIG Wellnessgetränk Birne-Melisse',
        isAvailable: true,
        isBasePrice: true,
        packing: '3 x 1.5l Flasche / Pack',
        units: [
          {
            id: 'cHJvZHVjdFVuaXQtNzU3MDIyMDA5OV8xMDU=',
            unitId: 105,
            name: 'Pack',
            default: true,
            price: 1.95,
            specialPrice: null,
            __typename: 'ProductUnit',
          },
        ],
        sku: '7570220099',
        image:
          '//assets.bringmeister.de/media/p/7570220099/0/07e5807bf841c457dd0a643217d09792.jpg',
        properties: [],
        browserUrl:
          'gut-und-guenstig-wellnessgetraenk-birne-melisse-7570220099',
        prices: {
          specialDiscount: 0,
          specialPrice: null,
          specialBasePrice: null,
          specialStartDateTs: null,
          specialEndDateTs: null,
          basePrice: 0.43,
          baseUnit: '1 Liter',
          deposit: 0.75,
          __typename: 'ProductPrices',
        },
        depositType: 'EINWEG',
        rootCategory: {
          id: 'Y2F0ZWdvcnktMTMyMg==',
          name: 'Getränke',
          path: 'getraenke',
          position: 5,
          __typename: 'Category',
        },
        hierarchicalCategories: [
          {
            name: 'Getränke',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Mineralwasser',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Wasser mit Geschmack',
            __typename: 'ProductCategoryUrlInfo',
          },
        ],
        multibuy: null,
        __typename: 'Product',
      },
      __typename: 'ProductsEdge',
    },
    {
      cursor:
        'eyJ6aXBjb2RlIjoiMTMzNTUiLCJvZmZzZXQiOjEyLCJxdWVyeSI6ImJpciIsImZpbHRlciI6eyJicmFuZCI6IiIsImFsbGVyZ2VuaWMiOltdLCJjaGFyYWN0ZXJpc3RpYyI6W10sImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwwIjoiIiwiaGllcmFyY2hpY2FsQ2F0ZWdvcmllc0x2bDEiOiIiLCJoaWVyYXJjaGljYWxDYXRlZ29yaWVzTHZsMiI6IiIsImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwzIjoiIn0sInNvcnRpbmciOiJERUZBVUxUIiwiY2FtcGFpZ24iOiIifQ==',
      node: {
        id: 'cHJvZHVjdC03NTcwMjIwMDky',
        productId: '7570220092',
        name: 'GUT&GÜNSTIG Wellness-Getränk Birne & Melisse',
        isAvailable: true,
        isBasePrice: true,
        packing: '6 x 1.5l Flasche / Packung',
        units: [
          {
            id: 'cHJvZHVjdFVuaXQtNzU3MDIyMDA5Ml83MQ==',
            unitId: 71,
            name: 'Pack',
            default: true,
            price: 3.9,
            specialPrice: null,
            __typename: 'ProductUnit',
          },
        ],
        sku: '7570220092',
        image:
          '//assets.bringmeister.de/media/p/7570220092/0/955ad4cbf1ee6ab06af96daf12d2cc17.jpg',
        properties: [],
        browserUrl:
          'gut-und-guenstig-wellness-getraenk-birne-und-melisse-7570220092',
        prices: {
          specialDiscount: 0,
          specialPrice: null,
          specialBasePrice: null,
          specialStartDateTs: null,
          specialEndDateTs: null,
          basePrice: 0.43,
          baseUnit: '1 Liter',
          deposit: 1.5,
          __typename: 'ProductPrices',
        },
        depositType: 'EINWEG',
        rootCategory: {
          id: 'Y2F0ZWdvcnktMTMyMg==',
          name: 'Getränke',
          path: 'getraenke',
          position: 5,
          __typename: 'Category',
        },
        hierarchicalCategories: [
          {
            name: 'Getränke',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Mineralwasser',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Wasser mit Geschmack',
            __typename: 'ProductCategoryUrlInfo',
          },
        ],
        multibuy: null,
        __typename: 'Product',
      },
      __typename: 'ProductsEdge',
    },
    {
      cursor:
        'eyJ6aXBjb2RlIjoiMTMzNTUiLCJvZmZzZXQiOjEzLCJxdWVyeSI6ImJpciIsImZpbHRlciI6eyJicmFuZCI6IiIsImFsbGVyZ2VuaWMiOltdLCJjaGFyYWN0ZXJpc3RpYyI6W10sImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwwIjoiIiwiaGllcmFyY2hpY2FsQ2F0ZWdvcmllc0x2bDEiOiIiLCJoaWVyYXJjaGljYWxDYXRlZ29yaWVzTHZsMiI6IiIsImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwzIjoiIn0sInNvcnRpbmciOiJERUZBVUxUIiwiY2FtcGFpZ24iOiIifQ==',
      node: {
        id: 'cHJvZHVjdC0yODkzMTk3MDAzMg==',
        productId: '28931970032',
        name: 'Freche Freunde Bio Quetschie Apfel, Birne, Blaubeere & Dinkel',
        isAvailable: true,
        isBasePrice: true,
        packing: '6 x 100g Packung / Packung',
        units: [
          {
            id: 'cHJvZHVjdFVuaXQtMjg5MzE5NzAwMzJfNzE=',
            unitId: 71,
            name: 'Pack',
            default: true,
            price: 5.94,
            specialPrice: null,
            __typename: 'ProductUnit',
          },
        ],
        sku: '28931970032',
        image:
          '//assets.bringmeister.de/media/p/28931970032/0/de550884169ec84999ed1e9ce4effbb2.jpg',
        properties: ['ORGANIC'],
        browserUrl:
          'freche-freunde-bio-quetschie-apfel-birne-blaubeere-und-dinkel-28931970032',
        prices: {
          specialDiscount: 0,
          specialPrice: null,
          specialBasePrice: null,
          specialStartDateTs: null,
          specialEndDateTs: null,
          basePrice: 0.99,
          baseUnit: '100 g',
          deposit: 0,
          __typename: 'ProductPrices',
        },
        depositType: null,
        rootCategory: {
          id: 'Y2F0ZWdvcnktMTYzOQ==',
          name: 'Baby & Kind',
          path: 'baby-und-kind',
          position: 14,
          __typename: 'Category',
        },
        hierarchicalCategories: [
          {
            name: 'Baby & Kind',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Babynahrung & Kindernahrung',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Kinder',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Quetschbeutel',
            __typename: 'ProductCategoryUrlInfo',
          },
        ],
        multibuy: null,
        __typename: 'Product',
      },
      __typename: 'ProductsEdge',
    },
    {
      cursor:
        'eyJ6aXBjb2RlIjoiMTMzNTUiLCJvZmZzZXQiOjE0LCJxdWVyeSI6ImJpciIsImZpbHRlciI6eyJicmFuZCI6IiIsImFsbGVyZ2VuaWMiOltdLCJjaGFyYWN0ZXJpc3RpYyI6W10sImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwwIjoiIiwiaGllcmFyY2hpY2FsQ2F0ZWdvcmllc0x2bDEiOiIiLCJoaWVyYXJjaGljYWxDYXRlZ29yaWVzTHZsMiI6IiIsImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwzIjoiIn0sInNvcnRpbmciOiJERUZBVUxUIiwiY2FtcGFpZ24iOiIifQ==',
      node: {
        id: 'cHJvZHVjdC0yODkzMTk3MDAzMQ==',
        productId: '28931970031',
        name: 'Freche Freunde Bio Quetschie Apfel, Birne, Blaubeere & Dinkel',
        isAvailable: true,
        isBasePrice: true,
        packing: '100g Packung',
        units: [
          {
            id: 'cHJvZHVjdFVuaXQtMjg5MzE5NzAwMzFfNTc=',
            unitId: 57,
            name: 'Packung',
            default: true,
            price: 0.99,
            specialPrice: null,
            __typename: 'ProductUnit',
          },
        ],
        sku: '28931970031',
        image:
          '//assets.bringmeister.de/media/p/28931970031/0/9ae4d73da691479093656b72cca7f1c8.jpg',
        properties: ['ORGANIC'],
        browserUrl:
          'freche-freunde-bio-quetschie-apfel-birne-blaubeere-und-dinkel-28931970031',
        prices: {
          specialDiscount: 0,
          specialPrice: null,
          specialBasePrice: null,
          specialStartDateTs: null,
          specialEndDateTs: null,
          basePrice: 0.99,
          baseUnit: '100 g',
          deposit: 0,
          __typename: 'ProductPrices',
        },
        depositType: null,
        rootCategory: {
          id: 'Y2F0ZWdvcnktMTYzOQ==',
          name: 'Baby & Kind',
          path: 'baby-und-kind',
          position: 14,
          __typename: 'Category',
        },
        hierarchicalCategories: [
          {
            name: 'Baby & Kind',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Babynahrung & Kindernahrung',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Kinder',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Quetschbeutel',
            __typename: 'ProductCategoryUrlInfo',
          },
        ],
        multibuy: null,
        __typename: 'Product',
      },
      __typename: 'ProductsEdge',
    },
    {
      cursor:
        'eyJ6aXBjb2RlIjoiMTMzNTUiLCJvZmZzZXQiOjE1LCJxdWVyeSI6ImJpciIsImZpbHRlciI6eyJicmFuZCI6IiIsImFsbGVyZ2VuaWMiOltdLCJjaGFyYWN0ZXJpc3RpYyI6W10sImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwwIjoiIiwiaGllcmFyY2hpY2FsQ2F0ZWdvcmllc0x2bDEiOiIiLCJoaWVyYXJjaGljYWxDYXRlZ29yaWVzTHZsMiI6IiIsImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwzIjoiIn0sInNvcnRpbmciOiJERUZBVUxUIiwiY2FtcGFpZ24iOiIifQ==',
      node: {
        id: 'cHJvZHVjdC0yOTMyMTQ4MDA1MQ==',
        productId: '29321480051',
        name: 'MÖVENPICK Birchermüesli Classic 5 % Fett',
        isAvailable: true,
        isBasePrice: true,
        packing: '150g Becher',
        units: [
          {
            id: 'cHJvZHVjdFVuaXQtMjkzMjE0ODAwNTFfNTc=',
            unitId: 57,
            name: 'Becher',
            default: true,
            price: 0.85,
            specialPrice: null,
            __typename: 'ProductUnit',
          },
        ],
        sku: '29321480051',
        image:
          '//assets.bringmeister.de/media/p/29321480051/0/910e68fe4294edf4136e68e64e027ee4.jpg',
        properties: ['CHILLED'],
        browserUrl:
          'moevenpick-birchermueesli-classic-5-prozent-fett-29321480051',
        prices: {
          specialDiscount: 0,
          specialPrice: null,
          specialBasePrice: null,
          specialStartDateTs: null,
          specialEndDateTs: null,
          basePrice: 0.57,
          baseUnit: '100 g',
          deposit: 0,
          __typename: 'ProductPrices',
        },
        depositType: null,
        rootCategory: {
          id: 'Y2F0ZWdvcnktMTEzOQ==',
          name: 'Kühlregal',
          path: 'kuehlregal',
          position: 3,
          __typename: 'Category',
        },
        hierarchicalCategories: [
          {
            name: 'Kühlregal',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Molkereiprodukte',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Fruchtjoghurt',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Cerealien & Nüsse',
            __typename: 'ProductCategoryUrlInfo',
          },
        ],
        multibuy: null,
        __typename: 'Product',
      },
      __typename: 'ProductsEdge',
    },
    {
      cursor:
        'eyJ6aXBjb2RlIjoiMTMzNTUiLCJvZmZzZXQiOjE2LCJxdWVyeSI6ImJpciIsImZpbHRlciI6eyJicmFuZCI6IiIsImFsbGVyZ2VuaWMiOltdLCJjaGFyYWN0ZXJpc3RpYyI6W10sImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwwIjoiIiwiaGllcmFyY2hpY2FsQ2F0ZWdvcmllc0x2bDEiOiIiLCJoaWVyYXJjaGljYWxDYXRlZ29yaWVzTHZsMiI6IiIsImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwzIjoiIn0sInNvcnRpbmciOiJERUZBVUxUIiwiY2FtcGFpZ24iOiIifQ==',
      node: {
        id: 'cHJvZHVjdC03MDE4MzYwMDcx',
        productId: '7018360071',
        name: 'EDEKA Williams-Christ-Birnen',
        isAvailable: true,
        isBasePrice: true,
        packing: '225g Stück',
        units: [
          {
            id: 'cHJvZHVjdFVuaXQtNzAxODM2MDA3MV81Nw==',
            unitId: 57,
            name: 'Packung',
            default: true,
            price: 0.99,
            specialPrice: null,
            __typename: 'ProductUnit',
          },
        ],
        sku: '7018360071',
        image:
          '//assets.bringmeister.de/media/p/7018360071/0/35a3023413b87b540fb0f4ad2bf377d4.jpg',
        properties: [],
        browserUrl: 'edeka-williams-christ-birnen-7018360071',
        prices: {
          specialDiscount: 0,
          specialPrice: null,
          specialBasePrice: null,
          specialStartDateTs: null,
          specialEndDateTs: null,
          basePrice: 0.86,
          baseUnit: '100 g',
          deposit: 0,
          __typename: 'ProductPrices',
        },
        depositType: null,
        rootCategory: {
          id: 'Y2F0ZWdvcnktMTUyNQ==',
          name: 'Nahrungsmittel',
          path: 'nahrungsmittel',
          position: 13,
          __typename: 'Category',
        },
        hierarchicalCategories: [
          {
            name: 'Nahrungsmittel',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Konserven & Eingelegtes',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Obstkonserven',
            __typename: 'ProductCategoryUrlInfo',
          },
        ],
        multibuy: null,
        __typename: 'Product',
      },
      __typename: 'ProductsEdge',
    },
    {
      cursor:
        'eyJ6aXBjb2RlIjoiMTMzNTUiLCJvZmZzZXQiOjE3LCJxdWVyeSI6ImJpciIsImZpbHRlciI6eyJicmFuZCI6IiIsImFsbGVyZ2VuaWMiOltdLCJjaGFyYWN0ZXJpc3RpYyI6W10sImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwwIjoiIiwiaGllcmFyY2hpY2FsQ2F0ZWdvcmllc0x2bDEiOiIiLCJoaWVyYXJjaGljYWxDYXRlZ29yaWVzTHZsMiI6IiIsImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwzIjoiIn0sInNvcnRpbmciOiJERUZBVUxUIiwiY2FtcGFpZ24iOiIifQ==',
      node: {
        id: 'cHJvZHVjdC0zNjg2MzU5MDA2MQ==',
        productId: '36863590061',
        name: 'Kölln Zartes Bircher Fruchtiges Hafer-Müsli',
        isAvailable: true,
        isBasePrice: true,
        packing: '0.5kg Packung',
        units: [
          {
            id: 'cHJvZHVjdFVuaXQtMzY4NjM1OTAwNjFfNTc=',
            unitId: 57,
            name: 'Packung',
            default: true,
            price: 3.29,
            specialPrice: null,
            __typename: 'ProductUnit',
          },
        ],
        sku: '36863590061',
        image:
          '//assets.bringmeister.de/media/p/36863590061/0/ba3082f162e04b5107adb1598a27a2b4.jpg',
        properties: [],
        browserUrl: 'koelln-zartes-bircher-fruchtiges-hafer-muesli-36863590061',
        prices: {
          specialDiscount: 0,
          specialPrice: null,
          specialBasePrice: null,
          specialStartDateTs: null,
          specialEndDateTs: null,
          basePrice: 6.58,
          baseUnit: '1 kg',
          deposit: 0,
          __typename: 'ProductPrices',
        },
        depositType: null,
        rootCategory: {
          id: 'Y2F0ZWdvcnktMTUxNQ==',
          name: 'Cerealien & Müsli',
          path: 'cerealien-und-muesli',
          position: 12,
          __typename: 'Category',
        },
        hierarchicalCategories: [
          {
            name: 'Cerealien & Müsli',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Müsli',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Früchtemüsli',
            __typename: 'ProductCategoryUrlInfo',
          },
        ],
        multibuy: null,
        __typename: 'Product',
      },
      __typename: 'ProductsEdge',
    },
    {
      cursor:
        'eyJ6aXBjb2RlIjoiMTMzNTUiLCJvZmZzZXQiOjE4LCJxdWVyeSI6ImJpciIsImZpbHRlciI6eyJicmFuZCI6IiIsImFsbGVyZ2VuaWMiOltdLCJjaGFyYWN0ZXJpc3RpYyI6W10sImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwwIjoiIiwiaGllcmFyY2hpY2FsQ2F0ZWdvcmllc0x2bDEiOiIiLCJoaWVyYXJjaGljYWxDYXRlZ29yaWVzTHZsMiI6IiIsImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwzIjoiIn0sInNvcnRpbmciOiJERUZBVUxUIiwiY2FtcGFpZ24iOiIifQ==',
      node: {
        id: 'cHJvZHVjdC0zNTQzMjY2MDA5Mg==',
        productId: '35432660092',
        name: 'Freche Freunde Bio Birne, Pflaume & Brombeere Riegel',
        isAvailable: true,
        isBasePrice: true,
        packing: '24 x 23g Stück / Packung',
        units: [
          {
            id: 'cHJvZHVjdFVuaXQtMzU0MzI2NjAwOTJfNzE=',
            unitId: 71,
            name: 'Pack',
            default: true,
            price: 11.94,
            specialPrice: null,
            __typename: 'ProductUnit',
          },
        ],
        sku: '35432660092',
        image:
          '//assets.bringmeister.de/media/p/35432660092/0/c643b0a31de9096e801d5d82453146ed.jpg',
        properties: ['ORGANIC'],
        browserUrl:
          'freche-freunde-bio-birne-pflaume-und-brombeere-riegel-35432660092',
        prices: {
          specialDiscount: 0,
          specialPrice: null,
          specialBasePrice: null,
          specialStartDateTs: null,
          specialEndDateTs: null,
          basePrice: 2.16,
          baseUnit: '100 g',
          deposit: 0,
          __typename: 'ProductPrices',
        },
        depositType: null,
        rootCategory: {
          id: 'Y2F0ZWdvcnktMTYzOQ==',
          name: 'Baby & Kind',
          path: 'baby-und-kind',
          position: 14,
          __typename: 'Category',
        },
        hierarchicalCategories: [
          {
            name: 'Baby & Kind',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Babynahrung & Kindernahrung',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Süßigkeiten für Kinder',
            __typename: 'ProductCategoryUrlInfo',
          },
        ],
        multibuy: null,
        __typename: 'Product',
      },
      __typename: 'ProductsEdge',
    },
    {
      cursor:
        'eyJ6aXBjb2RlIjoiMTMzNTUiLCJvZmZzZXQiOjE5LCJxdWVyeSI6ImJpciIsImZpbHRlciI6eyJicmFuZCI6IiIsImFsbGVyZ2VuaWMiOltdLCJjaGFyYWN0ZXJpc3RpYyI6W10sImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwwIjoiIiwiaGllcmFyY2hpY2FsQ2F0ZWdvcmllc0x2bDEiOiIiLCJoaWVyYXJjaGljYWxDYXRlZ29yaWVzTHZsMiI6IiIsImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwzIjoiIn0sInNvcnRpbmciOiJERUZBVUxUIiwiY2FtcGFpZ24iOiIifQ==',
      node: {
        id: 'cHJvZHVjdC0zNTQzMjY2MDA5MQ==',
        productId: '35432660091',
        name: 'Freche Freunde Bio Birne, Pflaume & Brombeere Riegel',
        isAvailable: true,
        isBasePrice: true,
        packing: '92g Stück',
        units: [
          {
            id: 'cHJvZHVjdFVuaXQtMzU0MzI2NjAwOTFfNTc=',
            unitId: 57,
            name: 'Packung',
            default: true,
            price: 1.99,
            specialPrice: null,
            __typename: 'ProductUnit',
          },
        ],
        sku: '35432660091',
        image:
          '//assets.bringmeister.de/media/p/35432660091/0/9b26287321648700091cc941061d170e.jpg',
        properties: ['ORGANIC'],
        browserUrl:
          'freche-freunde-bio-birne-pflaume-und-brombeere-riegel-35432660091',
        prices: {
          specialDiscount: 0,
          specialPrice: null,
          specialBasePrice: null,
          specialStartDateTs: null,
          specialEndDateTs: null,
          basePrice: 2.16,
          baseUnit: '100 g',
          deposit: 0,
          __typename: 'ProductPrices',
        },
        depositType: null,
        rootCategory: {
          id: 'Y2F0ZWdvcnktMTYzOQ==',
          name: 'Baby & Kind',
          path: 'baby-und-kind',
          position: 14,
          __typename: 'Category',
        },
        hierarchicalCategories: [
          {
            name: 'Baby & Kind',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Babynahrung & Kindernahrung',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Süßigkeiten für Kinder',
            __typename: 'ProductCategoryUrlInfo',
          },
        ],
        multibuy: null,
        __typename: 'Product',
      },
      __typename: 'ProductsEdge',
    },
    {
      cursor:
        'eyJ6aXBjb2RlIjoiMTMzNTUiLCJvZmZzZXQiOjIwLCJxdWVyeSI6ImJpciIsImZpbHRlciI6eyJicmFuZCI6IiIsImFsbGVyZ2VuaWMiOltdLCJjaGFyYWN0ZXJpc3RpYyI6W10sImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwwIjoiIiwiaGllcmFyY2hpY2FsQ2F0ZWdvcmllc0x2bDEiOiIiLCJoaWVyYXJjaGljYWxDYXRlZ29yaWVzTHZsMiI6IiIsImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwzIjoiIn0sInNvcnRpbmciOiJERUZBVUxUIiwiY2FtcGFpZ24iOiIifQ==',
      node: {
        id: 'cHJvZHVjdC0zNjAxMDczMDA0MQ==',
        productId: '36010730041',
        name: 'Birkel Minuto XXL Lauch Käse Hackfleisch Topf',
        isAvailable: true,
        isBasePrice: true,
        packing: '78g Becher',
        units: [
          {
            id: 'cHJvZHVjdFVuaXQtMzYwMTA3MzAwNDFfNTc=',
            unitId: 57,
            name: 'Becher',
            default: true,
            price: 1.55,
            specialPrice: null,
            __typename: 'ProductUnit',
          },
        ],
        sku: '36010730041',
        image:
          '//assets.bringmeister.de/media/p/36010730041/0/8ce9e40164cf23e66554543080aae2d9.jpg',
        properties: [],
        browserUrl:
          'birkel-minuto-xxl-lauch-kaese-hackfleisch-topf-36010730041',
        prices: {
          specialDiscount: 0,
          specialPrice: null,
          specialBasePrice: null,
          specialStartDateTs: null,
          specialEndDateTs: null,
          basePrice: 1.99,
          baseUnit: '100 g',
          deposit: 0,
          __typename: 'ProductPrices',
        },
        depositType: null,
        rootCategory: {
          id: 'Y2F0ZWdvcnktMTUyNQ==',
          name: 'Nahrungsmittel',
          path: 'nahrungsmittel',
          position: 13,
          __typename: 'Category',
        },
        hierarchicalCategories: [
          {
            name: 'Nahrungsmittel',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Schnelle Küche',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Terrinen',
            __typename: 'ProductCategoryUrlInfo',
          },
        ],
        multibuy: null,
        __typename: 'Product',
      },
      __typename: 'ProductsEdge',
    },
    {
      cursor:
        'eyJ6aXBjb2RlIjoiMTMzNTUiLCJvZmZzZXQiOjIxLCJxdWVyeSI6ImJpciIsImZpbHRlciI6eyJicmFuZCI6IiIsImFsbGVyZ2VuaWMiOltdLCJjaGFyYWN0ZXJpc3RpYyI6W10sImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwwIjoiIiwiaGllcmFyY2hpY2FsQ2F0ZWdvcmllc0x2bDEiOiIiLCJoaWVyYXJjaGljYWxDYXRlZ29yaWVzTHZsMiI6IiIsImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwzIjoiIn0sInNvcnRpbmciOiJERUZBVUxUIiwiY2FtcGFpZ24iOiIifQ==',
      node: {
        id: 'cHJvZHVjdC0zMzYzOTgzMDAzMg==',
        productId: '33639830032',
        name: 'HiPP Bio Hippis Apfel-Birne-Banane ab 1 Jahr',
        isAvailable: true,
        isBasePrice: true,
        packing: '6 x 100g Packung / Packung',
        units: [
          {
            id: 'cHJvZHVjdFVuaXQtMzM2Mzk4MzAwMzJfNzE=',
            unitId: 71,
            name: 'Packung',
            default: true,
            price: 5.34,
            specialPrice: null,
            __typename: 'ProductUnit',
          },
        ],
        sku: '33639830032',
        image:
          '//assets.bringmeister.de/media/p/33639830032/0/1c9f739cebed4181cff2b111a423f4ad.jpg',
        properties: ['ORGANIC'],
        browserUrl: 'hipp-bio-hippis-apfel-birne-banane-ab-1-jahr-33639830032',
        prices: {
          specialDiscount: 0,
          specialPrice: null,
          specialBasePrice: null,
          specialStartDateTs: null,
          specialEndDateTs: null,
          basePrice: 0.89,
          baseUnit: '100 g',
          deposit: 0,
          __typename: 'ProductPrices',
        },
        depositType: null,
        rootCategory: {
          id: 'Y2F0ZWdvcnktMTYzOQ==',
          name: 'Baby & Kind',
          path: 'baby-und-kind',
          position: 14,
          __typename: 'Category',
        },
        hierarchicalCategories: [
          {
            name: 'Baby & Kind',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Babynahrung & Kindernahrung',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Kinder',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Quetschbeutel',
            __typename: 'ProductCategoryUrlInfo',
          },
        ],
        multibuy: null,
        __typename: 'Product',
      },
      __typename: 'ProductsEdge',
    },
    {
      cursor:
        'eyJ6aXBjb2RlIjoiMTMzNTUiLCJvZmZzZXQiOjIyLCJxdWVyeSI6ImJpciIsImZpbHRlciI6eyJicmFuZCI6IiIsImFsbGVyZ2VuaWMiOltdLCJjaGFyYWN0ZXJpc3RpYyI6W10sImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwwIjoiIiwiaGllcmFyY2hpY2FsQ2F0ZWdvcmllc0x2bDEiOiIiLCJoaWVyYXJjaGljYWxDYXRlZ29yaWVzTHZsMiI6IiIsImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwzIjoiIn0sInNvcnRpbmciOiJERUZBVUxUIiwiY2FtcGFpZ24iOiIifQ==',
      node: {
        id: 'cHJvZHVjdC0zMzYzOTgzMDAzMQ==',
        productId: '33639830031',
        name: 'HiPP Bio Hippis Apfel-Birne-Banane ab 1 Jahr',
        isAvailable: true,
        isBasePrice: true,
        packing: '100g Packung',
        units: [
          {
            id: 'cHJvZHVjdFVuaXQtMzM2Mzk4MzAwMzFfNTc=',
            unitId: 57,
            name: 'Packung',
            default: true,
            price: 0.89,
            specialPrice: null,
            __typename: 'ProductUnit',
          },
        ],
        sku: '33639830031',
        image:
          '//assets.bringmeister.de/media/p/33639830031/0/0cc0a6af58e92d4895e0998b9bddfe46.jpg',
        properties: ['ORGANIC'],
        browserUrl: 'hipp-bio-hippis-apfel-birne-banane-ab-1-jahr-33639830031',
        prices: {
          specialDiscount: 0,
          specialPrice: null,
          specialBasePrice: null,
          specialStartDateTs: null,
          specialEndDateTs: null,
          basePrice: 0.89,
          baseUnit: '100 g',
          deposit: 0,
          __typename: 'ProductPrices',
        },
        depositType: null,
        rootCategory: {
          id: 'Y2F0ZWdvcnktMTYzOQ==',
          name: 'Baby & Kind',
          path: 'baby-und-kind',
          position: 14,
          __typename: 'Category',
        },
        hierarchicalCategories: [
          {
            name: 'Baby & Kind',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Babynahrung & Kindernahrung',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Kinder',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Quetschbeutel',
            __typename: 'ProductCategoryUrlInfo',
          },
        ],
        multibuy: null,
        __typename: 'Product',
      },
      __typename: 'ProductsEdge',
    },
    {
      cursor:
        'eyJ6aXBjb2RlIjoiMTMzNTUiLCJvZmZzZXQiOjIzLCJxdWVyeSI6ImJpciIsImZpbHRlciI6eyJicmFuZCI6IiIsImFsbGVyZ2VuaWMiOltdLCJjaGFyYWN0ZXJpc3RpYyI6W10sImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwwIjoiIiwiaGllcmFyY2hpY2FsQ2F0ZWdvcmllc0x2bDEiOiIiLCJoaWVyYXJjaGljYWxDYXRlZ29yaWVzTHZsMiI6IiIsImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwzIjoiIn0sInNvcnRpbmciOiJERUZBVUxUIiwiY2FtcGFpZ24iOiIifQ==',
      node: {
        id: 'cHJvZHVjdC0xNDc5NDIwMDMx',
        productId: '1479420031',
        name: 'Birkel No.1 Buchstaben',
        isAvailable: true,
        isBasePrice: true,
        packing: '250g Packung',
        units: [
          {
            id: 'cHJvZHVjdFVuaXQtMTQ3OTQyMDAzMV81Nw==',
            unitId: 57,
            name: 'Packung',
            default: true,
            price: 0.99,
            specialPrice: null,
            __typename: 'ProductUnit',
          },
        ],
        sku: '1479420031',
        image:
          '//assets.bringmeister.de/media/p/1479420031/0/e736b81e36ef53096fcf1585c30e0bf0.jpg',
        properties: [],
        browserUrl: 'birkel-no1-buchstaben-1479420031',
        prices: {
          specialDiscount: 0,
          specialPrice: null,
          specialBasePrice: null,
          specialStartDateTs: null,
          specialEndDateTs: null,
          basePrice: 0.4,
          baseUnit: '100 g',
          deposit: 0,
          __typename: 'ProductPrices',
        },
        depositType: null,
        rootCategory: {
          id: 'Y2F0ZWdvcnktMTUyNQ==',
          name: 'Nahrungsmittel',
          path: 'nahrungsmittel',
          position: 13,
          __typename: 'Category',
        },
        hierarchicalCategories: [
          {
            name: 'Nahrungsmittel',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Nudeln',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Suppennudeln',
            __typename: 'ProductCategoryUrlInfo',
          },
        ],
        multibuy: null,
        __typename: 'Product',
      },
      __typename: 'ProductsEdge',
    },
    {
      cursor:
        'eyJ6aXBjb2RlIjoiMTMzNTUiLCJvZmZzZXQiOjI0LCJxdWVyeSI6ImJpciIsImZpbHRlciI6eyJicmFuZCI6IiIsImFsbGVyZ2VuaWMiOltdLCJjaGFyYWN0ZXJpc3RpYyI6W10sImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwwIjoiIiwiaGllcmFyY2hpY2FsQ2F0ZWdvcmllc0x2bDEiOiIiLCJoaWVyYXJjaGljYWxDYXRlZ29yaWVzTHZsMiI6IiIsImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwzIjoiIn0sInNvcnRpbmciOiJERUZBVUxUIiwiY2FtcGFpZ24iOiIifQ==',
      node: {
        id: 'cHJvZHVjdC0yOTY3NDU5MDA4MQ==',
        productId: '29674590081',
        name: 'Alnatura Bio Bircher Müsli',
        isAvailable: true,
        isBasePrice: true,
        packing: '500g Packung',
        units: [
          {
            id: 'cHJvZHVjdFVuaXQtMjk2NzQ1OTAwODFfNTc=',
            unitId: 57,
            name: 'Packung',
            default: true,
            price: 3.29,
            specialPrice: null,
            __typename: 'ProductUnit',
          },
        ],
        sku: '29674590081',
        image:
          '//assets.bringmeister.de/media/p/29674590081/0/e06dc51e5cccc47300bd5231fc705775.jpg',
        properties: ['ORGANIC'],
        browserUrl: 'alnatura-bio-bircher-muesli-29674590081',
        prices: {
          specialDiscount: 0,
          specialPrice: null,
          specialBasePrice: null,
          specialStartDateTs: null,
          specialEndDateTs: null,
          basePrice: 6.58,
          baseUnit: '1 kg',
          deposit: 0,
          __typename: 'ProductPrices',
        },
        depositType: null,
        rootCategory: {
          id: 'Y2F0ZWdvcnktMTUxNQ==',
          name: 'Cerealien & Müsli',
          path: 'cerealien-und-muesli',
          position: 12,
          __typename: 'Category',
        },
        hierarchicalCategories: [
          {
            name: 'Cerealien & Müsli',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Müsli',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Früchtemüsli',
            __typename: 'ProductCategoryUrlInfo',
          },
        ],
        multibuy: null,
        __typename: 'Product',
      },
      __typename: 'ProductsEdge',
    },
    {
      cursor:
        'eyJ6aXBjb2RlIjoiMTMzNTUiLCJvZmZzZXQiOjI1LCJxdWVyeSI6ImJpciIsImZpbHRlciI6eyJicmFuZCI6IiIsImFsbGVyZ2VuaWMiOltdLCJjaGFyYWN0ZXJpc3RpYyI6W10sImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwwIjoiIiwiaGllcmFyY2hpY2FsQ2F0ZWdvcmllc0x2bDEiOiIiLCJoaWVyYXJjaGljYWxDYXRlZ29yaWVzTHZsMiI6IiIsImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwzIjoiIn0sInNvcnRpbmciOiJERUZBVUxUIiwiY2FtcGFpZ24iOiIifQ==',
      node: {
        id: 'cHJvZHVjdC0zMzIxMzI1MDA5MQ==',
        productId: '33213250091',
        name: 'DANONE FruchtZwerge Erdbeere,Banane & Pfirsich-Birne',
        isAvailable: true,
        isBasePrice: true,
        packing: '0.4kg Becher',
        units: [
          {
            id: 'cHJvZHVjdFVuaXQtMzMyMTMyNTAwOTFfNTc=',
            unitId: 57,
            name: 'Packung',
            default: true,
            price: 2.09,
            specialPrice: null,
            __typename: 'ProductUnit',
          },
        ],
        sku: '33213250091',
        image:
          '//assets.bringmeister.de/media/p/33213250091/0/403c3c15552720810656a95d5367c72e.jpg',
        properties: ['CHILLED'],
        browserUrl:
          'danone-fruchtzwerge-erdbeerebanane-und-pfirsich-birne-33213250091',
        prices: {
          specialDiscount: 0,
          specialPrice: null,
          specialBasePrice: null,
          specialStartDateTs: null,
          specialEndDateTs: null,
          basePrice: 5.23,
          baseUnit: '1 kg',
          deposit: 0,
          __typename: 'ProductPrices',
        },
        depositType: null,
        rootCategory: {
          id: 'Y2F0ZWdvcnktMTEzOQ==',
          name: 'Kühlregal',
          path: 'kuehlregal',
          position: 3,
          __typename: 'Category',
        },
        hierarchicalCategories: [
          {
            name: 'Kühlregal',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Molkereiprodukte',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Fruchtquark',
            __typename: 'ProductCategoryUrlInfo',
          },
        ],
        multibuy: null,
        __typename: 'Product',
      },
      __typename: 'ProductsEdge',
    },
    {
      cursor:
        'eyJ6aXBjb2RlIjoiMTMzNTUiLCJvZmZzZXQiOjI2LCJxdWVyeSI6ImJpciIsImZpbHRlciI6eyJicmFuZCI6IiIsImFsbGVyZ2VuaWMiOltdLCJjaGFyYWN0ZXJpc3RpYyI6W10sImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwwIjoiIiwiaGllcmFyY2hpY2FsQ2F0ZWdvcmllc0x2bDEiOiIiLCJoaWVyYXJjaGljYWxDYXRlZ29yaWVzTHZsMiI6IiIsImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwzIjoiIn0sInNvcnRpbmciOiJERUZBVUxUIiwiY2FtcGFpZ24iOiIifQ==',
      node: {
        id: 'cHJvZHVjdC0xMjg3ODUwMDEx',
        productId: '1287850011',
        name: 'Birkel No.1 Breite Band',
        isAvailable: true,
        isBasePrice: true,
        packing: '0.5kg Packung',
        units: [
          {
            id: 'cHJvZHVjdFVuaXQtMTI4Nzg1MDAxMV81Nw==',
            unitId: 57,
            name: 'Packung',
            default: true,
            price: 1.59,
            specialPrice: null,
            __typename: 'ProductUnit',
          },
        ],
        sku: '1287850011',
        image:
          '//assets.bringmeister.de/media/p/1287850011/0/01f6a48c025c9d332b1cc2527a3902ee.jpg',
        properties: [],
        browserUrl: 'birkel-no1-breite-band-1287850011',
        prices: {
          specialDiscount: 0,
          specialPrice: null,
          specialBasePrice: null,
          specialStartDateTs: null,
          specialEndDateTs: null,
          basePrice: 3.18,
          baseUnit: '1 kg',
          deposit: 0,
          __typename: 'ProductPrices',
        },
        depositType: null,
        rootCategory: {
          id: 'Y2F0ZWdvcnktMTUyNQ==',
          name: 'Nahrungsmittel',
          path: 'nahrungsmittel',
          position: 13,
          __typename: 'Category',
        },
        hierarchicalCategories: [
          {
            name: 'Nahrungsmittel',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Nudeln',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Bandnudeln & Nudelnester',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Bandnudeln',
            __typename: 'ProductCategoryUrlInfo',
          },
        ],
        multibuy: null,
        __typename: 'Product',
      },
      __typename: 'ProductsEdge',
    },
    {
      cursor:
        'eyJ6aXBjb2RlIjoiMTMzNTUiLCJvZmZzZXQiOjI3LCJxdWVyeSI6ImJpciIsImZpbHRlciI6eyJicmFuZCI6IiIsImFsbGVyZ2VuaWMiOltdLCJjaGFyYWN0ZXJpc3RpYyI6W10sImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwwIjoiIiwiaGllcmFyY2hpY2FsQ2F0ZWdvcmllc0x2bDEiOiIiLCJoaWVyYXJjaGljYWxDYXRlZ29yaWVzTHZsMiI6IiIsImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwzIjoiIn0sInNvcnRpbmciOiJERUZBVUxUIiwiY2FtcGFpZ24iOiIifQ==',
      node: {
        id: 'cHJvZHVjdC00MDQ5Nzg0MDA4MQ==',
        productId: '40497840081',
        name: 'GUT&GÜNSTIG LED-Birne E27 806lm 2700K A+ 11W',
        isAvailable: true,
        isBasePrice: false,
        packing: 'Stück',
        units: [
          {
            id: 'cHJvZHVjdFVuaXQtNDA0OTc4NDAwODFfNTc=',
            unitId: 57,
            name: 'Stück',
            default: true,
            price: 2.99,
            specialPrice: null,
            __typename: 'ProductUnit',
          },
        ],
        sku: '40497840081',
        image:
          '//assets.bringmeister.de/media/p/40497840081/0/547be1f137797031e76f9dc1c80b929e.jpg',
        properties: [],
        browserUrl:
          'gut-und-guenstig-led-birne-e27-806lm-2700k-a-plus-11w-40497840081',
        prices: {
          specialDiscount: 0,
          specialPrice: null,
          specialBasePrice: null,
          specialStartDateTs: null,
          specialEndDateTs: null,
          basePrice: 0,
          baseUnit: '0',
          deposit: 0,
          __typename: 'ProductPrices',
        },
        depositType: null,
        rootCategory: {
          id: 'Y2F0ZWdvcnktMTc1OQ==',
          name: 'Küche & Haushalt',
          path: 'kueche-und-haushalt',
          position: 16,
          __typename: 'Category',
        },
        hierarchicalCategories: [
          {
            name: 'Küche & Haushalt',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Batterien & Leuchtmittel',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Leuchtmittel',
            __typename: 'ProductCategoryUrlInfo',
          },
        ],
        multibuy: null,
        __typename: 'Product',
      },
      __typename: 'ProductsEdge',
    },
    {
      cursor:
        'eyJ6aXBjb2RlIjoiMTMzNTUiLCJvZmZzZXQiOjI4LCJxdWVyeSI6ImJpciIsImZpbHRlciI6eyJicmFuZCI6IiIsImFsbGVyZ2VuaWMiOltdLCJjaGFyYWN0ZXJpc3RpYyI6W10sImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwwIjoiIiwiaGllcmFyY2hpY2FsQ2F0ZWdvcmllc0x2bDEiOiIiLCJoaWVyYXJjaGljYWxDYXRlZ29yaWVzTHZsMiI6IiIsImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwzIjoiIn0sInNvcnRpbmciOiJERUZBVUxUIiwiY2FtcGFpZ24iOiIifQ==',
      node: {
        id: 'cHJvZHVjdC0xMTE3NjI0MDAwMQ==',
        productId: '11176240001',
        name: 'Birkel Minuto Käse-Nudel-Topf',
        isAvailable: true,
        isBasePrice: true,
        packing: '70g Becher',
        units: [
          {
            id: 'cHJvZHVjdFVuaXQtMTExNzYyNDAwMDFfNTc=',
            unitId: 57,
            name: 'Packung',
            default: true,
            price: 0.99,
            specialPrice: null,
            __typename: 'ProductUnit',
          },
        ],
        sku: '11176240001',
        image:
          '//assets.bringmeister.de/media/p/11176240001/0/91ec8a6bab025686f0e869ed76f15be1.jpg',
        properties: [],
        browserUrl: 'birkel-minuto-kaese-nudel-topf-11176240001',
        prices: {
          specialDiscount: 0,
          specialPrice: null,
          specialBasePrice: null,
          specialStartDateTs: null,
          specialEndDateTs: null,
          basePrice: 1.41,
          baseUnit: '100 g',
          deposit: 0,
          __typename: 'ProductPrices',
        },
        depositType: null,
        rootCategory: {
          id: 'Y2F0ZWdvcnktMTUyNQ==',
          name: 'Nahrungsmittel',
          path: 'nahrungsmittel',
          position: 13,
          __typename: 'Category',
        },
        hierarchicalCategories: [
          {
            name: 'Nahrungsmittel',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Schnelle Küche',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Terrinen',
            __typename: 'ProductCategoryUrlInfo',
          },
        ],
        multibuy: null,
        __typename: 'Product',
      },
      __typename: 'ProductsEdge',
    },
    {
      cursor:
        'eyJ6aXBjb2RlIjoiMTMzNTUiLCJvZmZzZXQiOjI5LCJxdWVyeSI6ImJpciIsImZpbHRlciI6eyJicmFuZCI6IiIsImFsbGVyZ2VuaWMiOltdLCJjaGFyYWN0ZXJpc3RpYyI6W10sImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwwIjoiIiwiaGllcmFyY2hpY2FsQ2F0ZWdvcmllc0x2bDEiOiIiLCJoaWVyYXJjaGljYWxDYXRlZ29yaWVzTHZsMiI6IiIsImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwzIjoiIn0sInNvcnRpbmciOiJERUZBVUxUIiwiY2FtcGFpZ24iOiIifQ==',
      node: {
        id: 'cHJvZHVjdC0yMTY3NzgzMDA2Mg==',
        productId: '21677830062',
        name: 'Freche Freunde Bio Quetschie Apfel, Birne, Karotte & Kürbis',
        isAvailable: true,
        isBasePrice: true,
        packing: '6 x 100g Packung / Packung',
        units: [
          {
            id: 'cHJvZHVjdFVuaXQtMjE2Nzc4MzAwNjJfNzE=',
            unitId: 71,
            name: 'Pack',
            default: true,
            price: 5.94,
            specialPrice: null,
            __typename: 'ProductUnit',
          },
        ],
        sku: '21677830062',
        image:
          '//assets.bringmeister.de/media/p/21677830062/0/738692e40e1ad44f0a8659ca8c33dc31.jpg',
        properties: ['ORGANIC'],
        browserUrl:
          'freche-freunde-bio-quetschie-apfel-birne-karotte-und-kuerbis-21677830062',
        prices: {
          specialDiscount: 0,
          specialPrice: null,
          specialBasePrice: null,
          specialStartDateTs: null,
          specialEndDateTs: null,
          basePrice: 0.99,
          baseUnit: '100 g',
          deposit: 0,
          __typename: 'ProductPrices',
        },
        depositType: null,
        rootCategory: {
          id: 'Y2F0ZWdvcnktMTYzOQ==',
          name: 'Baby & Kind',
          path: 'baby-und-kind',
          position: 14,
          __typename: 'Category',
        },
        hierarchicalCategories: [
          {
            name: 'Baby & Kind',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Babynahrung & Kindernahrung',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Kinder',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Quetschbeutel',
            __typename: 'ProductCategoryUrlInfo',
          },
        ],
        multibuy: null,
        __typename: 'Product',
      },
      __typename: 'ProductsEdge',
    },
    {
      cursor:
        'eyJ6aXBjb2RlIjoiMTMzNTUiLCJvZmZzZXQiOjMwLCJxdWVyeSI6ImJpciIsImZpbHRlciI6eyJicmFuZCI6IiIsImFsbGVyZ2VuaWMiOltdLCJjaGFyYWN0ZXJpc3RpYyI6W10sImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwwIjoiIiwiaGllcmFyY2hpY2FsQ2F0ZWdvcmllc0x2bDEiOiIiLCJoaWVyYXJjaGljYWxDYXRlZ29yaWVzTHZsMiI6IiIsImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwzIjoiIn0sInNvcnRpbmciOiJERUZBVUxUIiwiY2FtcGFpZ24iOiIifQ==',
      node: {
        id: 'cHJvZHVjdC0yMTY3NzgzMDA2MQ==',
        productId: '21677830061',
        name: 'Freche Freunde Bio Quetschie Apfel, Birne, Karotte & Kürbis',
        isAvailable: true,
        isBasePrice: true,
        packing: '100g Packung',
        units: [
          {
            id: 'cHJvZHVjdFVuaXQtMjE2Nzc4MzAwNjFfNTc=',
            unitId: 57,
            name: 'Packung',
            default: true,
            price: 0.99,
            specialPrice: null,
            __typename: 'ProductUnit',
          },
        ],
        sku: '21677830061',
        image:
          '//assets.bringmeister.de/media/p/21677830061/0/6462916f01fc4ce8f09f643e2c16f839.jpg',
        properties: ['ORGANIC'],
        browserUrl:
          'freche-freunde-bio-quetschie-apfel-birne-karotte-und-kuerbis-21677830061',
        prices: {
          specialDiscount: 0,
          specialPrice: null,
          specialBasePrice: null,
          specialStartDateTs: null,
          specialEndDateTs: null,
          basePrice: 0.99,
          baseUnit: '100 g',
          deposit: 0,
          __typename: 'ProductPrices',
        },
        depositType: null,
        rootCategory: {
          id: 'Y2F0ZWdvcnktMTYzOQ==',
          name: 'Baby & Kind',
          path: 'baby-und-kind',
          position: 14,
          __typename: 'Category',
        },
        hierarchicalCategories: [
          {
            name: 'Baby & Kind',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Babynahrung & Kindernahrung',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Kinder',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Quetschbeutel',
            __typename: 'ProductCategoryUrlInfo',
          },
        ],
        multibuy: null,
        __typename: 'Product',
      },
      __typename: 'ProductsEdge',
    },
    {
      cursor:
        'eyJ6aXBjb2RlIjoiMTMzNTUiLCJvZmZzZXQiOjMxLCJxdWVyeSI6ImJpciIsImZpbHRlciI6eyJicmFuZCI6IiIsImFsbGVyZ2VuaWMiOltdLCJjaGFyYWN0ZXJpc3RpYyI6W10sImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwwIjoiIiwiaGllcmFyY2hpY2FsQ2F0ZWdvcmllc0x2bDEiOiIiLCJoaWVyYXJjaGljYWxDYXRlZ29yaWVzTHZsMiI6IiIsImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwzIjoiIn0sInNvcnRpbmciOiJERUZBVUxUIiwiY2FtcGFpZ24iOiIifQ==',
      node: {
        id: 'cHJvZHVjdC0zMzYxODM4MDA4Mg==',
        productId: '33618380082',
        name: 'Freche Freunde Bio Quetschie Apfel, Birne & Passionsfrucht',
        isAvailable: true,
        isBasePrice: true,
        packing: '6 x 100g Packung / Packung',
        units: [
          {
            id: 'cHJvZHVjdFVuaXQtMzM2MTgzODAwODJfNzE=',
            unitId: 71,
            name: 'Pack',
            default: true,
            price: 5.94,
            specialPrice: null,
            __typename: 'ProductUnit',
          },
        ],
        sku: '33618380082',
        image:
          '//assets.bringmeister.de/media/p/33618380082/0/4abc3323d2a12581bded115d7dfddde3.jpg',
        properties: ['ORGANIC'],
        browserUrl:
          'freche-freunde-bio-quetschie-apfel-birne-und-passionsfrucht-33618380082',
        prices: {
          specialDiscount: 0,
          specialPrice: null,
          specialBasePrice: null,
          specialStartDateTs: null,
          specialEndDateTs: null,
          basePrice: 0.99,
          baseUnit: '100 g',
          deposit: 0,
          __typename: 'ProductPrices',
        },
        depositType: null,
        rootCategory: {
          id: 'Y2F0ZWdvcnktMTYzOQ==',
          name: 'Baby & Kind',
          path: 'baby-und-kind',
          position: 14,
          __typename: 'Category',
        },
        hierarchicalCategories: [
          {
            name: 'Baby & Kind',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Babynahrung & Kindernahrung',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Kinder',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Quetschbeutel',
            __typename: 'ProductCategoryUrlInfo',
          },
        ],
        multibuy: null,
        __typename: 'Product',
      },
      __typename: 'ProductsEdge',
    },
    {
      cursor:
        'eyJ6aXBjb2RlIjoiMTMzNTUiLCJvZmZzZXQiOjMyLCJxdWVyeSI6ImJpciIsImZpbHRlciI6eyJicmFuZCI6IiIsImFsbGVyZ2VuaWMiOltdLCJjaGFyYWN0ZXJpc3RpYyI6W10sImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwwIjoiIiwiaGllcmFyY2hpY2FsQ2F0ZWdvcmllc0x2bDEiOiIiLCJoaWVyYXJjaGljYWxDYXRlZ29yaWVzTHZsMiI6IiIsImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwzIjoiIn0sInNvcnRpbmciOiJERUZBVUxUIiwiY2FtcGFpZ24iOiIifQ==',
      node: {
        id: 'cHJvZHVjdC0zMzYxODM4MDA4MQ==',
        productId: '33618380081',
        name: 'Freche Freunde Bio Quetschie Apfel, Birne & Passionsfrucht',
        isAvailable: true,
        isBasePrice: true,
        packing: '100g Packung',
        units: [
          {
            id: 'cHJvZHVjdFVuaXQtMzM2MTgzODAwODFfNTc=',
            unitId: 57,
            name: 'Packung',
            default: true,
            price: 0.99,
            specialPrice: null,
            __typename: 'ProductUnit',
          },
        ],
        sku: '33618380081',
        image:
          '//assets.bringmeister.de/media/p/33618380081/0/787bfa3bc93040d8cb8d3d5f05dc918d.jpg',
        properties: ['ORGANIC'],
        browserUrl:
          'freche-freunde-bio-quetschie-apfel-birne-und-passionsfrucht-33618380081',
        prices: {
          specialDiscount: 0,
          specialPrice: null,
          specialBasePrice: null,
          specialStartDateTs: null,
          specialEndDateTs: null,
          basePrice: 0.99,
          baseUnit: '100 g',
          deposit: 0,
          __typename: 'ProductPrices',
        },
        depositType: null,
        rootCategory: {
          id: 'Y2F0ZWdvcnktMTYzOQ==',
          name: 'Baby & Kind',
          path: 'baby-und-kind',
          position: 14,
          __typename: 'Category',
        },
        hierarchicalCategories: [
          {
            name: 'Baby & Kind',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Babynahrung & Kindernahrung',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Kinder',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Quetschbeutel',
            __typename: 'ProductCategoryUrlInfo',
          },
        ],
        multibuy: null,
        __typename: 'Product',
      },
      __typename: 'ProductsEdge',
    },
    {
      cursor:
        'eyJ6aXBjb2RlIjoiMTMzNTUiLCJvZmZzZXQiOjMzLCJxdWVyeSI6ImJpciIsImZpbHRlciI6eyJicmFuZCI6IiIsImFsbGVyZ2VuaWMiOltdLCJjaGFyYWN0ZXJpc3RpYyI6W10sImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwwIjoiIiwiaGllcmFyY2hpY2FsQ2F0ZWdvcmllc0x2bDEiOiIiLCJoaWVyYXJjaGljYWxDYXRlZ29yaWVzTHZsMiI6IiIsImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwzIjoiIn0sInNvcnRpbmciOiJERUZBVUxUIiwiY2FtcGFpZ24iOiIifQ==',
      node: {
        id: 'cHJvZHVjdC03MDQ0NjEwMDYx',
        productId: '7044610061',
        name: 'MÖVENPICK Birchermüsli Erdbeer-Rhabarber 5 % Fett',
        isAvailable: true,
        isBasePrice: true,
        packing: '150g Becher',
        units: [
          {
            id: 'cHJvZHVjdFVuaXQtNzA0NDYxMDA2MV81Nw==',
            unitId: 57,
            name: 'Becher',
            default: true,
            price: 0.85,
            specialPrice: null,
            __typename: 'ProductUnit',
          },
        ],
        sku: '7044610061',
        image:
          '//assets.bringmeister.de/media/p/7044610061/0/9890b2d00c51d005ec1ac0840f4d5637.jpg',
        properties: ['CHILLED'],
        browserUrl:
          'moevenpick-birchermuesli-erdbeer-rhabarber-5-prozent-fett-7044610061',
        prices: {
          specialDiscount: 0,
          specialPrice: null,
          specialBasePrice: null,
          specialStartDateTs: null,
          specialEndDateTs: null,
          basePrice: 0.57,
          baseUnit: '100 g',
          deposit: 0,
          __typename: 'ProductPrices',
        },
        depositType: null,
        rootCategory: {
          id: 'Y2F0ZWdvcnktMTEzOQ==',
          name: 'Kühlregal',
          path: 'kuehlregal',
          position: 3,
          __typename: 'Category',
        },
        hierarchicalCategories: [
          {
            name: 'Kühlregal',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Molkereiprodukte',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Fruchtjoghurt',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Cerealien & Nüsse',
            __typename: 'ProductCategoryUrlInfo',
          },
        ],
        multibuy: null,
        __typename: 'Product',
      },
      __typename: 'ProductsEdge',
    },
    {
      cursor:
        'eyJ6aXBjb2RlIjoiMTMzNTUiLCJvZmZzZXQiOjM0LCJxdWVyeSI6ImJpciIsImZpbHRlciI6eyJicmFuZCI6IiIsImFsbGVyZ2VuaWMiOltdLCJjaGFyYWN0ZXJpc3RpYyI6W10sImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwwIjoiIiwiaGllcmFyY2hpY2FsQ2F0ZWdvcmllc0x2bDEiOiIiLCJoaWVyYXJjaGljYWxDYXRlZ29yaWVzTHZsMiI6IiIsImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwzIjoiIn0sInNvcnRpbmciOiJERUZBVUxUIiwiY2FtcGFpZ24iOiIifQ==',
      node: {
        id: 'cHJvZHVjdC0xMTE2NTcwMDAxMQ==',
        productId: '11165700011',
        name: 'Birkel Minuto Frühlings-Topf',
        isAvailable: true,
        isBasePrice: true,
        packing: '52g Becher',
        units: [
          {
            id: 'cHJvZHVjdFVuaXQtMTExNjU3MDAwMTFfNTc=',
            unitId: 57,
            name: 'Becher',
            default: true,
            price: 0.99,
            specialPrice: null,
            __typename: 'ProductUnit',
          },
        ],
        sku: '11165700011',
        image:
          '//assets.bringmeister.de/media/p/11165700011/0/714a7ad5aa3a6c7c0a82f988e0f43f3e.jpg',
        properties: [],
        browserUrl: 'birkel-minuto-fruehlings-topf-11165700011',
        prices: {
          specialDiscount: 0,
          specialPrice: null,
          specialBasePrice: null,
          specialStartDateTs: null,
          specialEndDateTs: null,
          basePrice: 1.9,
          baseUnit: '100 g',
          deposit: 0,
          __typename: 'ProductPrices',
        },
        depositType: null,
        rootCategory: {
          id: 'Y2F0ZWdvcnktMTUyNQ==',
          name: 'Nahrungsmittel',
          path: 'nahrungsmittel',
          position: 13,
          __typename: 'Category',
        },
        hierarchicalCategories: [
          {
            name: 'Nahrungsmittel',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Schnelle Küche',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Terrinen',
            __typename: 'ProductCategoryUrlInfo',
          },
        ],
        multibuy: null,
        __typename: 'Product',
      },
      __typename: 'ProductsEdge',
    },
    {
      cursor:
        'eyJ6aXBjb2RlIjoiMTMzNTUiLCJvZmZzZXQiOjM1LCJxdWVyeSI6ImJpciIsImZpbHRlciI6eyJicmFuZCI6IiIsImFsbGVyZ2VuaWMiOltdLCJjaGFyYWN0ZXJpc3RpYyI6W10sImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwwIjoiIiwiaGllcmFyY2hpY2FsQ2F0ZWdvcmllc0x2bDEiOiIiLCJoaWVyYXJjaGljYWxDYXRlZ29yaWVzTHZsMiI6IiIsImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwzIjoiIn0sInNvcnRpbmciOiJERUZBVUxUIiwiY2FtcGFpZ24iOiIifQ==',
      node: {
        id: 'cHJvZHVjdC0xMTE2NTc4MDA1MQ==',
        productId: '11165780051',
        name: 'Birkel Minuto Kartoffel-Püree',
        isAvailable: true,
        isBasePrice: true,
        packing: '47g Becher',
        units: [
          {
            id: 'cHJvZHVjdFVuaXQtMTExNjU3ODAwNTFfNTc=',
            unitId: 57,
            name: 'Packung',
            default: true,
            price: 0.99,
            specialPrice: null,
            __typename: 'ProductUnit',
          },
        ],
        sku: '11165780051',
        image:
          '//assets.bringmeister.de/media/p/11165780051/0/48e118e1de62ccd4887f095f37bf4b7f.jpg',
        properties: [],
        browserUrl: 'birkel-minuto-kartoffel-pueree-11165780051',
        prices: {
          specialDiscount: 0,
          specialPrice: null,
          specialBasePrice: null,
          specialStartDateTs: null,
          specialEndDateTs: null,
          basePrice: 2.11,
          baseUnit: '100 g',
          deposit: 0,
          __typename: 'ProductPrices',
        },
        depositType: null,
        rootCategory: {
          id: 'Y2F0ZWdvcnktMTUyNQ==',
          name: 'Nahrungsmittel',
          path: 'nahrungsmittel',
          position: 13,
          __typename: 'Category',
        },
        hierarchicalCategories: [
          {
            name: 'Nahrungsmittel',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Schnelle Küche',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Terrinen',
            __typename: 'ProductCategoryUrlInfo',
          },
        ],
        multibuy: null,
        __typename: 'Product',
      },
      __typename: 'ProductsEdge',
    },
    {
      cursor:
        'eyJ6aXBjb2RlIjoiMTMzNTUiLCJvZmZzZXQiOjM2LCJxdWVyeSI6ImJpciIsImZpbHRlciI6eyJicmFuZCI6IiIsImFsbGVyZ2VuaWMiOltdLCJjaGFyYWN0ZXJpc3RpYyI6W10sImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwwIjoiIiwiaGllcmFyY2hpY2FsQ2F0ZWdvcmllc0x2bDEiOiIiLCJoaWVyYXJjaGljYWxDYXRlZ29yaWVzTHZsMiI6IiIsImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwzIjoiIn0sInNvcnRpbmciOiJERUZBVUxUIiwiY2FtcGFpZ24iOiIifQ==',
      node: {
        id: 'cHJvZHVjdC0yOTMyMTUwMDA4MQ==',
        productId: '29321500081',
        name: 'MÖVENPICK Birchermüesli Beerensymphonie 5 % Fett',
        isAvailable: true,
        isBasePrice: true,
        packing: '150g Becher',
        units: [
          {
            id: 'cHJvZHVjdFVuaXQtMjkzMjE1MDAwODFfNTc=',
            unitId: 57,
            name: 'Becher',
            default: true,
            price: 0.85,
            specialPrice: null,
            __typename: 'ProductUnit',
          },
        ],
        sku: '29321500081',
        image:
          '//assets.bringmeister.de/media/p/29321500081/0/1af60281b7b5c418029449b8776e70a9.jpg',
        properties: ['CHILLED'],
        browserUrl:
          'moevenpick-birchermueesli-beerensymphonie-5-prozent-fett-29321500081',
        prices: {
          specialDiscount: 0,
          specialPrice: null,
          specialBasePrice: null,
          specialStartDateTs: null,
          specialEndDateTs: null,
          basePrice: 0.57,
          baseUnit: '100 g',
          deposit: 0,
          __typename: 'ProductPrices',
        },
        depositType: null,
        rootCategory: {
          id: 'Y2F0ZWdvcnktMTEzOQ==',
          name: 'Kühlregal',
          path: 'kuehlregal',
          position: 3,
          __typename: 'Category',
        },
        hierarchicalCategories: [
          {
            name: 'Kühlregal',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Molkereiprodukte',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Fruchtjoghurt',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Cerealien & Nüsse',
            __typename: 'ProductCategoryUrlInfo',
          },
        ],
        multibuy: null,
        __typename: 'Product',
      },
      __typename: 'ProductsEdge',
    },
    {
      cursor:
        'eyJ6aXBjb2RlIjoiMTMzNTUiLCJvZmZzZXQiOjM3LCJxdWVyeSI6ImJpciIsImZpbHRlciI6eyJicmFuZCI6IiIsImFsbGVyZ2VuaWMiOltdLCJjaGFyYWN0ZXJpc3RpYyI6W10sImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwwIjoiIiwiaGllcmFyY2hpY2FsQ2F0ZWdvcmllc0x2bDEiOiIiLCJoaWVyYXJjaGljYWxDYXRlZ29yaWVzTHZsMiI6IiIsImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwzIjoiIn0sInNvcnRpbmciOiJERUZBVUxUIiwiY2FtcGFpZ24iOiIifQ==',
      node: {
        id: 'cHJvZHVjdC0xMjg3MzEwMDQx',
        productId: '1287310041',
        name: 'Birkel No.1 Hörnchen',
        isAvailable: true,
        isBasePrice: true,
        packing: '0.5kg Packung',
        units: [
          {
            id: 'cHJvZHVjdFVuaXQtMTI4NzMxMDA0MV81Nw==',
            unitId: 57,
            name: 'Packung',
            default: true,
            price: 1.59,
            specialPrice: null,
            __typename: 'ProductUnit',
          },
        ],
        sku: '1287310041',
        image:
          '//assets.bringmeister.de/media/p/1287310041/0/3bd1a0454bcf855fe53a9e5c63aadffb.jpg',
        properties: [],
        browserUrl: 'birkel-no1-hoernchen-1287310041',
        prices: {
          specialDiscount: 0,
          specialPrice: null,
          specialBasePrice: null,
          specialStartDateTs: null,
          specialEndDateTs: null,
          basePrice: 3.18,
          baseUnit: '1 kg',
          deposit: 0,
          __typename: 'ProductPrices',
        },
        depositType: null,
        rootCategory: {
          id: 'Y2F0ZWdvcnktMTUyNQ==',
          name: 'Nahrungsmittel',
          path: 'nahrungsmittel',
          position: 13,
          __typename: 'Category',
        },
        hierarchicalCategories: [
          {
            name: 'Nahrungsmittel',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Nudeln',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Kurze Nudeln',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Penne',
            __typename: 'ProductCategoryUrlInfo',
          },
        ],
        multibuy: null,
        __typename: 'Product',
      },
      __typename: 'ProductsEdge',
    },
    {
      cursor:
        'eyJ6aXBjb2RlIjoiMTMzNTUiLCJvZmZzZXQiOjM4LCJxdWVyeSI6ImJpciIsImZpbHRlciI6eyJicmFuZCI6IiIsImFsbGVyZ2VuaWMiOltdLCJjaGFyYWN0ZXJpc3RpYyI6W10sImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwwIjoiIiwiaGllcmFyY2hpY2FsQ2F0ZWdvcmllc0x2bDEiOiIiLCJoaWVyYXJjaGljYWxDYXRlZ29yaWVzTHZsMiI6IiIsImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwzIjoiIn0sInNvcnRpbmciOiJERUZBVUxUIiwiY2FtcGFpZ24iOiIifQ==',
      node: {
        id: 'cHJvZHVjdC00MjEyOTcwMDAzMQ==',
        productId: '42129700031',
        name: 'EDEKA Bio Fruchtjoghurt 3,8% Fett ohne Zuckerzusatz Birne-Apfel',
        isAvailable: true,
        isBasePrice: true,
        packing: '150g Becher',
        units: [
          {
            id: 'cHJvZHVjdFVuaXQtNDIxMjk3MDAwMzFfNTc=',
            unitId: 57,
            name: 'Becher',
            default: true,
            price: 0.49,
            specialPrice: null,
            __typename: 'ProductUnit',
          },
        ],
        sku: '42129700031',
        image:
          '//assets.bringmeister.de/media/p/42129700031/0/067c50d196601235f6307f8f21b3446a.jpg',
        properties: ['ORGANIC', 'CHILLED'],
        browserUrl:
          'edeka-bio-fruchtjoghurt-38-prozent-fett-ohne-zuckerzusatz-birne-apfel-42129700031',
        prices: {
          specialDiscount: 0,
          specialPrice: null,
          specialBasePrice: null,
          specialStartDateTs: null,
          specialEndDateTs: null,
          basePrice: 0.33,
          baseUnit: '100 g',
          deposit: 0,
          __typename: 'ProductPrices',
        },
        depositType: null,
        rootCategory: {
          id: 'Y2F0ZWdvcnktMTEzOQ==',
          name: 'Kühlregal',
          path: 'kuehlregal',
          position: 3,
          __typename: 'Category',
        },
        hierarchicalCategories: [
          {
            name: 'Kühlregal',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Molkereiprodukte',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Fruchtjoghurt',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Exotisch',
            __typename: 'ProductCategoryUrlInfo',
          },
        ],
        multibuy: null,
        __typename: 'Product',
      },
      __typename: 'ProductsEdge',
    },
    {
      cursor:
        'eyJ6aXBjb2RlIjoiMTMzNTUiLCJvZmZzZXQiOjM5LCJxdWVyeSI6ImJpciIsImZpbHRlciI6eyJicmFuZCI6IiIsImFsbGVyZ2VuaWMiOltdLCJjaGFyYWN0ZXJpc3RpYyI6W10sImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwwIjoiIiwiaGllcmFyY2hpY2FsQ2F0ZWdvcmllc0x2bDEiOiIiLCJoaWVyYXJjaGljYWxDYXRlZ29yaWVzTHZsMiI6IiIsImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwzIjoiIn0sInNvcnRpbmciOiJERUZBVUxUIiwiY2FtcGFpZ24iOiIifQ==',
      node: {
        id: 'cHJvZHVjdC0zMzYzOTIyMDA4Mg==',
        productId: '33639220082',
        name: 'Hipp Bio Früchte Williams-Christ-Birnen mit Apfel nach dem 4. Monat',
        isAvailable: true,
        isBasePrice: true,
        packing: '6 x 190g Glas',
        units: [
          {
            id: 'cHJvZHVjdFVuaXQtMzM2MzkyMjAwODJfNzE=',
            unitId: 71,
            name: 'Glas',
            default: true,
            price: 6.3,
            specialPrice: null,
            __typename: 'ProductUnit',
          },
        ],
        sku: '33639220082',
        image:
          '//assets.bringmeister.de/media/p/33639220082/0/49df75dc15f71bc044db96614644de47.jpg',
        properties: ['ORGANIC'],
        browserUrl:
          'hipp-bio-fruechte-williams-christ-birnen-mit-apfel-nach-dem-4-monat-33639220082',
        prices: {
          specialDiscount: 0,
          specialPrice: null,
          specialBasePrice: null,
          specialStartDateTs: null,
          specialEndDateTs: null,
          basePrice: 0.55,
          baseUnit: '100 g',
          deposit: 0,
          __typename: 'ProductPrices',
        },
        depositType: null,
        rootCategory: {
          id: 'Y2F0ZWdvcnktMTYzOQ==',
          name: 'Baby & Kind',
          path: 'baby-und-kind',
          position: 14,
          __typename: 'Category',
        },
        hierarchicalCategories: [
          {
            name: 'Baby & Kind',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Babynahrung & Kindernahrung',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Beikost',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Früchte',
            __typename: 'ProductCategoryUrlInfo',
          },
        ],
        multibuy: null,
        __typename: 'Product',
      },
      __typename: 'ProductsEdge',
    },
    {
      cursor:
        'eyJ6aXBjb2RlIjoiMTMzNTUiLCJvZmZzZXQiOjQwLCJxdWVyeSI6ImJpciIsImZpbHRlciI6eyJicmFuZCI6IiIsImFsbGVyZ2VuaWMiOltdLCJjaGFyYWN0ZXJpc3RpYyI6W10sImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwwIjoiIiwiaGllcmFyY2hpY2FsQ2F0ZWdvcmllc0x2bDEiOiIiLCJoaWVyYXJjaGljYWxDYXRlZ29yaWVzTHZsMiI6IiIsImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwzIjoiIn0sInNvcnRpbmciOiJERUZBVUxUIiwiY2FtcGFpZ24iOiIifQ==',
      node: {
        id: 'cHJvZHVjdC0zMzYzOTIyMDA4MQ==',
        productId: '33639220081',
        name: 'Hipp Bio Früchte Williams-Christ-Birnen mit Apfel nach dem 4. Monat',
        isAvailable: true,
        isBasePrice: true,
        packing: '190g Glas',
        units: [
          {
            id: 'cHJvZHVjdFVuaXQtMzM2MzkyMjAwODFfNTc=',
            unitId: 57,
            name: 'Glas',
            default: true,
            price: 1.05,
            specialPrice: null,
            __typename: 'ProductUnit',
          },
        ],
        sku: '33639220081',
        image:
          '//assets.bringmeister.de/media/p/33639220081/0/91f976bd1519af5b905a228a7b3ef998.jpg',
        properties: ['ORGANIC'],
        browserUrl:
          'hipp-bio-fruechte-williams-christ-birnen-mit-apfel-nach-dem-4-monat-33639220081',
        prices: {
          specialDiscount: 0,
          specialPrice: null,
          specialBasePrice: null,
          specialStartDateTs: null,
          specialEndDateTs: null,
          basePrice: 0.55,
          baseUnit: '100 g',
          deposit: 0,
          __typename: 'ProductPrices',
        },
        depositType: null,
        rootCategory: {
          id: 'Y2F0ZWdvcnktMTYzOQ==',
          name: 'Baby & Kind',
          path: 'baby-und-kind',
          position: 14,
          __typename: 'Category',
        },
        hierarchicalCategories: [
          {
            name: 'Baby & Kind',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Babynahrung & Kindernahrung',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Beikost',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Früchte',
            __typename: 'ProductCategoryUrlInfo',
          },
        ],
        multibuy: null,
        __typename: 'Product',
      },
      __typename: 'ProductsEdge',
    },
    {
      cursor:
        'eyJ6aXBjb2RlIjoiMTMzNTUiLCJvZmZzZXQiOjQxLCJxdWVyeSI6ImJpciIsImZpbHRlciI6eyJicmFuZCI6IiIsImFsbGVyZ2VuaWMiOltdLCJjaGFyYWN0ZXJpc3RpYyI6W10sImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwwIjoiIiwiaGllcmFyY2hpY2FsQ2F0ZWdvcmllc0x2bDEiOiIiLCJoaWVyYXJjaGljYWxDYXRlZ29yaWVzTHZsMiI6IiIsImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwzIjoiIn0sInNvcnRpbmciOiJERUZBVUxUIiwiY2FtcGFpZ24iOiIifQ==',
      node: {
        id: 'cHJvZHVjdC0zMTA4NTk5MDA3MQ==',
        productId: '31085990071',
        name: 'BFF Kristalline Streusüße Birkenzucker 100% Xylit',
        isAvailable: true,
        isBasePrice: true,
        packing: '300g Packung',
        units: [
          {
            id: 'cHJvZHVjdFVuaXQtMzEwODU5OTAwNzFfNTc=',
            unitId: 57,
            name: 'Packung',
            default: true,
            price: 5.49,
            specialPrice: null,
            __typename: 'ProductUnit',
          },
        ],
        sku: '31085990071',
        image:
          '//assets.bringmeister.de/media/p/31085990071/0/fb524fc83ee17b7ec5afe889f7afd205.jpg',
        properties: [],
        browserUrl:
          'bff-kristalline-streusuesse-birkenzucker-100-prozent-xylit-31085990071',
        prices: {
          specialDiscount: 0,
          specialPrice: null,
          specialBasePrice: null,
          specialStartDateTs: null,
          specialEndDateTs: null,
          basePrice: 18.3,
          baseUnit: '1 kg',
          deposit: 0,
          __typename: 'ProductPrices',
        },
        depositType: null,
        rootCategory: {
          id: 'Y2F0ZWdvcnktMTUyNQ==',
          name: 'Nahrungsmittel',
          path: 'nahrungsmittel',
          position: 13,
          __typename: 'Category',
        },
        hierarchicalCategories: [
          {
            name: 'Nahrungsmittel',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Zucker',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Süßstoff & Zuckerzusatz',
            __typename: 'ProductCategoryUrlInfo',
          },
        ],
        multibuy: null,
        __typename: 'Product',
      },
      __typename: 'ProductsEdge',
    },
    {
      cursor:
        'eyJ6aXBjb2RlIjoiMTMzNTUiLCJvZmZzZXQiOjQyLCJxdWVyeSI6ImJpciIsImZpbHRlciI6eyJicmFuZCI6IiIsImFsbGVyZ2VuaWMiOltdLCJjaGFyYWN0ZXJpc3RpYyI6W10sImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwwIjoiIiwiaGllcmFyY2hpY2FsQ2F0ZWdvcmllc0x2bDEiOiIiLCJoaWVyYXJjaGljYWxDYXRlZ29yaWVzTHZsMiI6IiIsImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwzIjoiIn0sInNvcnRpbmciOiJERUZBVUxUIiwiY2FtcGFpZ24iOiIifQ==',
      node: {
        id: 'cHJvZHVjdC0xNTE4MzkzMDA4MQ==',
        productId: '15183930081',
        name: 'Dr. Oetker Happy Birthday Kerzen',
        isAvailable: true,
        isBasePrice: false,
        packing: '1er Packung',
        units: [
          {
            id: 'cHJvZHVjdFVuaXQtMTUxODM5MzAwODFfNTc=',
            unitId: 57,
            name: 'Packung',
            default: true,
            price: 2.55,
            specialPrice: null,
            __typename: 'ProductUnit',
          },
        ],
        sku: '15183930081',
        image:
          '//assets.bringmeister.de/media/p/15183930081/0/5f25b64a609439d1a796f87173a0b520.jpg',
        properties: [],
        browserUrl: 'dr-oetker-happy-birthday-kerzen-15183930081',
        prices: {
          specialDiscount: 0,
          specialPrice: null,
          specialBasePrice: null,
          specialStartDateTs: null,
          specialEndDateTs: null,
          basePrice: 0,
          baseUnit: '0',
          deposit: 0,
          __typename: 'ProductPrices',
        },
        depositType: null,
        rootCategory: {
          id: 'Y2F0ZWdvcnktMTc1OQ==',
          name: 'Küche & Haushalt',
          path: 'kueche-und-haushalt',
          position: 16,
          __typename: 'Category',
        },
        hierarchicalCategories: [
          {
            name: 'Küche & Haushalt',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Kerzen & Feueranzünder',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Kerzen & Teelichter',
            __typename: 'ProductCategoryUrlInfo',
          },
        ],
        multibuy: null,
        __typename: 'Product',
      },
      __typename: 'ProductsEdge',
    },
    {
      cursor:
        'eyJ6aXBjb2RlIjoiMTMzNTUiLCJvZmZzZXQiOjQzLCJxdWVyeSI6ImJpciIsImZpbHRlciI6eyJicmFuZCI6IiIsImFsbGVyZ2VuaWMiOltdLCJjaGFyYWN0ZXJpc3RpYyI6W10sImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwwIjoiIiwiaGllcmFyY2hpY2FsQ2F0ZWdvcmllc0x2bDEiOiIiLCJoaWVyYXJjaGljYWxDYXRlZ29yaWVzTHZsMiI6IiIsImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwzIjoiIn0sInNvcnRpbmciOiJERUZBVUxUIiwiY2FtcGFpZ24iOiIifQ==',
      node: {
        id: 'cHJvZHVjdC0xNDc5NDAwMDcx',
        productId: '1479400071',
        name: 'Birkel No.1 Faden',
        isAvailable: true,
        isBasePrice: true,
        packing: '250g Packung',
        units: [
          {
            id: 'cHJvZHVjdFVuaXQtMTQ3OTQwMDA3MV81Nw==',
            unitId: 57,
            name: 'Packung',
            default: true,
            price: 0.99,
            specialPrice: null,
            __typename: 'ProductUnit',
          },
        ],
        sku: '1479400071',
        image:
          '//assets.bringmeister.de/media/p/1479400071/0/b38727f17c6262f293641db6a3574740.jpg',
        properties: [],
        browserUrl: 'birkel-no1-faden-1479400071',
        prices: {
          specialDiscount: 0,
          specialPrice: null,
          specialBasePrice: null,
          specialStartDateTs: null,
          specialEndDateTs: null,
          basePrice: 0.4,
          baseUnit: '100 g',
          deposit: 0,
          __typename: 'ProductPrices',
        },
        depositType: null,
        rootCategory: {
          id: 'Y2F0ZWdvcnktMTUyNQ==',
          name: 'Nahrungsmittel',
          path: 'nahrungsmittel',
          position: 13,
          __typename: 'Category',
        },
        hierarchicalCategories: [
          {
            name: 'Nahrungsmittel',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Nudeln',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Suppennudeln',
            __typename: 'ProductCategoryUrlInfo',
          },
        ],
        multibuy: null,
        __typename: 'Product',
      },
      __typename: 'ProductsEdge',
    },
    {
      cursor:
        'eyJ6aXBjb2RlIjoiMTMzNTUiLCJvZmZzZXQiOjQ0LCJxdWVyeSI6ImJpciIsImZpbHRlciI6eyJicmFuZCI6IiIsImFsbGVyZ2VuaWMiOltdLCJjaGFyYWN0ZXJpc3RpYyI6W10sImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwwIjoiIiwiaGllcmFyY2hpY2FsQ2F0ZWdvcmllc0x2bDEiOiIiLCJoaWVyYXJjaGljYWxDYXRlZ29yaWVzTHZsMiI6IiIsImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwzIjoiIn0sInNvcnRpbmciOiJERUZBVUxUIiwiY2FtcGFpZ24iOiIifQ==',
      node: {
        id: 'cHJvZHVjdC0zMTY3MTcyMDA1MQ==',
        productId: '31671720051',
        name: 'HiPP Bio Frucht & Urgetreide Birne in Apfel mit Dinkel nach 4. Monat',
        isAvailable: true,
        isBasePrice: true,
        packing: '190g Glas',
        units: [
          {
            id: 'cHJvZHVjdFVuaXQtMzE2NzE3MjAwNTFfNTc=',
            unitId: 57,
            name: 'Glas',
            default: true,
            price: 1.09,
            specialPrice: null,
            __typename: 'ProductUnit',
          },
        ],
        sku: '31671720051',
        image:
          '//assets.bringmeister.de/media/p/31671720051/0/4c7dfba78c837ace71441f1e5c104af0.jpg',
        properties: ['ORGANIC'],
        browserUrl:
          'hipp-bio-frucht-und-urgetreide-birne-in-apfel-mit-dinkel-nach-4-monat-31671720051',
        prices: {
          specialDiscount: 0,
          specialPrice: null,
          specialBasePrice: null,
          specialStartDateTs: null,
          specialEndDateTs: null,
          basePrice: 0.57,
          baseUnit: '100 g',
          deposit: 0,
          __typename: 'ProductPrices',
        },
        depositType: null,
        rootCategory: {
          id: 'Y2F0ZWdvcnktMTYzOQ==',
          name: 'Baby & Kind',
          path: 'baby-und-kind',
          position: 14,
          __typename: 'Category',
        },
        hierarchicalCategories: [
          {
            name: 'Baby & Kind',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Babynahrung & Kindernahrung',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Beikost',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Früchte',
            __typename: 'ProductCategoryUrlInfo',
          },
        ],
        multibuy: null,
        __typename: 'Product',
      },
      __typename: 'ProductsEdge',
    },
    {
      cursor:
        'eyJ6aXBjb2RlIjoiMTMzNTUiLCJvZmZzZXQiOjQ1LCJxdWVyeSI6ImJpciIsImZpbHRlciI6eyJicmFuZCI6IiIsImFsbGVyZ2VuaWMiOltdLCJjaGFyYWN0ZXJpc3RpYyI6W10sImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwwIjoiIiwiaGllcmFyY2hpY2FsQ2F0ZWdvcmllc0x2bDEiOiIiLCJoaWVyYXJjaGljYWxDYXRlZ29yaWVzTHZsMiI6IiIsImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwzIjoiIn0sInNvcnRpbmciOiJERUZBVUxUIiwiY2FtcGFpZ24iOiIifQ==',
      node: {
        id: 'cHJvZHVjdC0zMzYzOTgxMDA3Mg==',
        productId: '33639810072',
        name: 'HiPP Bio Hippis Mango-Maracuja in Birne-Apfel ab 1 Jahr',
        isAvailable: true,
        isBasePrice: true,
        packing: '6 x 100g Packung / Packung',
        units: [
          {
            id: 'cHJvZHVjdFVuaXQtMzM2Mzk4MTAwNzJfNzE=',
            unitId: 71,
            name: 'Packung',
            default: true,
            price: 5.34,
            specialPrice: null,
            __typename: 'ProductUnit',
          },
        ],
        sku: '33639810072',
        image:
          '//assets.bringmeister.de/media/p/33639810072/0/cb99e27900b2556a8ff3b8b75753c881.jpg',
        properties: ['ORGANIC'],
        browserUrl:
          'hipp-bio-hippis-mango-maracuja-in-birne-apfel-ab-1-jahr-33639810072',
        prices: {
          specialDiscount: 0,
          specialPrice: null,
          specialBasePrice: null,
          specialStartDateTs: null,
          specialEndDateTs: null,
          basePrice: 0.89,
          baseUnit: '100 g',
          deposit: 0,
          __typename: 'ProductPrices',
        },
        depositType: null,
        rootCategory: {
          id: 'Y2F0ZWdvcnktMTYzOQ==',
          name: 'Baby & Kind',
          path: 'baby-und-kind',
          position: 14,
          __typename: 'Category',
        },
        hierarchicalCategories: [
          {
            name: 'Baby & Kind',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Babynahrung & Kindernahrung',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Kinder',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Quetschbeutel',
            __typename: 'ProductCategoryUrlInfo',
          },
        ],
        multibuy: null,
        __typename: 'Product',
      },
      __typename: 'ProductsEdge',
    },
    {
      cursor:
        'eyJ6aXBjb2RlIjoiMTMzNTUiLCJvZmZzZXQiOjQ2LCJxdWVyeSI6ImJpciIsImZpbHRlciI6eyJicmFuZCI6IiIsImFsbGVyZ2VuaWMiOltdLCJjaGFyYWN0ZXJpc3RpYyI6W10sImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwwIjoiIiwiaGllcmFyY2hpY2FsQ2F0ZWdvcmllc0x2bDEiOiIiLCJoaWVyYXJjaGljYWxDYXRlZ29yaWVzTHZsMiI6IiIsImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwzIjoiIn0sInNvcnRpbmciOiJERUZBVUxUIiwiY2FtcGFpZ24iOiIifQ==',
      node: {
        id: 'cHJvZHVjdC0zMzYzOTgxMDA3MQ==',
        productId: '33639810071',
        name: 'HiPP Bio Hippis Mango-Maracuja in Birne-Apfel ab 1 Jahr',
        isAvailable: true,
        isBasePrice: true,
        packing: '100g Packung',
        units: [
          {
            id: 'cHJvZHVjdFVuaXQtMzM2Mzk4MTAwNzFfNTc=',
            unitId: 57,
            name: 'Packung',
            default: true,
            price: 0.89,
            specialPrice: null,
            __typename: 'ProductUnit',
          },
        ],
        sku: '33639810071',
        image:
          '//assets.bringmeister.de/media/p/33639810071/0/6ca5ce93d057e8c1280d585b361a7cc4.jpg',
        properties: ['ORGANIC'],
        browserUrl:
          'hipp-bio-hippis-mango-maracuja-in-birne-apfel-ab-1-jahr-33639810071',
        prices: {
          specialDiscount: 0,
          specialPrice: null,
          specialBasePrice: null,
          specialStartDateTs: null,
          specialEndDateTs: null,
          basePrice: 0.89,
          baseUnit: '100 g',
          deposit: 0,
          __typename: 'ProductPrices',
        },
        depositType: null,
        rootCategory: {
          id: 'Y2F0ZWdvcnktMTYzOQ==',
          name: 'Baby & Kind',
          path: 'baby-und-kind',
          position: 14,
          __typename: 'Category',
        },
        hierarchicalCategories: [
          {
            name: 'Baby & Kind',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Babynahrung & Kindernahrung',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Kinder',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Quetschbeutel',
            __typename: 'ProductCategoryUrlInfo',
          },
        ],
        multibuy: null,
        __typename: 'Product',
      },
      __typename: 'ProductsEdge',
    },
    {
      cursor:
        'eyJ6aXBjb2RlIjoiMTMzNTUiLCJvZmZzZXQiOjQ3LCJxdWVyeSI6ImJpciIsImZpbHRlciI6eyJicmFuZCI6IiIsImFsbGVyZ2VuaWMiOltdLCJjaGFyYWN0ZXJpc3RpYyI6W10sImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwwIjoiIiwiaGllcmFyY2hpY2FsQ2F0ZWdvcmllc0x2bDEiOiIiLCJoaWVyYXJjaGljYWxDYXRlZ29yaWVzTHZsMiI6IiIsImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwzIjoiIn0sInNvcnRpbmciOiJERUZBVUxUIiwiY2FtcGFpZ24iOiIifQ==',
      node: {
        id: 'cHJvZHVjdC0xNTYyODE4MDA5MQ==',
        productId: '15628180091',
        name: 'Birkel Nudel up Bolognese',
        isAvailable: true,
        isBasePrice: true,
        packing: '0.4kg Glas',
        units: [
          {
            id: 'cHJvZHVjdFVuaXQtMTU2MjgxODAwOTFfNTc=',
            unitId: 57,
            name: 'Glas',
            default: true,
            price: 2.49,
            specialPrice: null,
            __typename: 'ProductUnit',
          },
        ],
        sku: '15628180091',
        image:
          '//assets.bringmeister.de/media/p/15628180091/0/ecb8e1347720cb6030b6327fe9b3887b.jpg',
        properties: [],
        browserUrl: 'birkel-nudel-up-bolognese-15628180091',
        prices: {
          specialDiscount: 0,
          specialPrice: null,
          specialBasePrice: null,
          specialStartDateTs: null,
          specialEndDateTs: null,
          basePrice: 6.23,
          baseUnit: '1 kg',
          deposit: 0,
          __typename: 'ProductPrices',
        },
        depositType: null,
        rootCategory: {
          id: 'Y2F0ZWdvcnktMTUyNQ==',
          name: 'Nahrungsmittel',
          path: 'nahrungsmittel',
          position: 13,
          __typename: 'Category',
        },
        hierarchicalCategories: [
          {
            name: 'Nahrungsmittel',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Nudeln',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Nudelsoßen',
            __typename: 'ProductCategoryUrlInfo',
          },
        ],
        multibuy: null,
        __typename: 'Product',
      },
      __typename: 'ProductsEdge',
    },
    {
      cursor:
        'eyJ6aXBjb2RlIjoiMTMzNTUiLCJvZmZzZXQiOjQ4LCJxdWVyeSI6ImJpciIsImZpbHRlciI6eyJicmFuZCI6IiIsImFsbGVyZ2VuaWMiOltdLCJjaGFyYWN0ZXJpc3RpYyI6W10sImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwwIjoiIiwiaGllcmFyY2hpY2FsQ2F0ZWdvcmllc0x2bDEiOiIiLCJoaWVyYXJjaGljYWxDYXRlZ29yaWVzTHZsMiI6IiIsImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwzIjoiIn0sInNvcnRpbmciOiJERUZBVUxUIiwiY2FtcGFpZ24iOiIifQ==',
      node: {
        id: 'cHJvZHVjdC0zMDU2MTI1MDAwMQ==',
        productId: '30561250001',
        name: 'Birkel Nudel-Inspiration Kunterbunte Nudeln',
        isAvailable: true,
        isBasePrice: true,
        packing: '0.35kg Packung',
        units: [
          {
            id: 'cHJvZHVjdFVuaXQtMzA1NjEyNTAwMDFfNTc=',
            unitId: 57,
            name: 'Packung',
            default: true,
            price: 1.59,
            specialPrice: null,
            __typename: 'ProductUnit',
          },
        ],
        sku: '30561250001',
        image:
          '//assets.bringmeister.de/media/p/30561250001/0/81645c618d1e24964289b109e99f9a3c.jpg',
        properties: [],
        browserUrl: 'birkel-nudel-inspiration-kunterbunte-nudeln-30561250001',
        prices: {
          specialDiscount: 0,
          specialPrice: null,
          specialBasePrice: null,
          specialStartDateTs: null,
          specialEndDateTs: null,
          basePrice: 4.54,
          baseUnit: '1 kg',
          deposit: 0,
          __typename: 'ProductPrices',
        },
        depositType: null,
        rootCategory: {
          id: 'Y2F0ZWdvcnktMTUyNQ==',
          name: 'Nahrungsmittel',
          path: 'nahrungsmittel',
          position: 13,
          __typename: 'Category',
        },
        hierarchicalCategories: [
          {
            name: 'Nahrungsmittel',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Nudeln',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Kurze Nudeln',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Fussili & Spirelli',
            __typename: 'ProductCategoryUrlInfo',
          },
        ],
        multibuy: null,
        __typename: 'Product',
      },
      __typename: 'ProductsEdge',
    },
    {
      cursor:
        'eyJ6aXBjb2RlIjoiMTMzNTUiLCJvZmZzZXQiOjQ5LCJxdWVyeSI6ImJpciIsImZpbHRlciI6eyJicmFuZCI6IiIsImFsbGVyZ2VuaWMiOltdLCJjaGFyYWN0ZXJpc3RpYyI6W10sImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwwIjoiIiwiaGllcmFyY2hpY2FsQ2F0ZWdvcmllc0x2bDEiOiIiLCJoaWVyYXJjaGljYWxDYXRlZ29yaWVzTHZsMiI6IiIsImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwzIjoiIn0sInNvcnRpbmciOiJERUZBVUxUIiwiY2FtcGFpZ24iOiIifQ==',
      node: {
        id: 'cHJvZHVjdC0zNjc0NTYyMDA3Mg==',
        productId: '36745620072',
        name: 'HiPP Bio Mango-Maracuja in Birne-Apfel ab 6. Monat',
        isAvailable: true,
        isBasePrice: true,
        packing: '6 x 190g Glas / Packung',
        units: [
          {
            id: 'cHJvZHVjdFVuaXQtMzY3NDU2MjAwNzJfNzE=',
            unitId: 71,
            name: 'Pack',
            default: true,
            price: 6.3,
            specialPrice: null,
            __typename: 'ProductUnit',
          },
        ],
        sku: '36745620072',
        image:
          '//assets.bringmeister.de/media/p/36745620072/0/18265147fad3c9f83db63891e0c91d05.jpg',
        properties: ['ORGANIC'],
        browserUrl:
          'hipp-bio-mango-maracuja-in-birne-apfel-ab-6-monat-36745620072',
        prices: {
          specialDiscount: 0,
          specialPrice: null,
          specialBasePrice: null,
          specialStartDateTs: null,
          specialEndDateTs: null,
          basePrice: 0.55,
          baseUnit: '100 g',
          deposit: 0,
          __typename: 'ProductPrices',
        },
        depositType: null,
        rootCategory: {
          id: 'Y2F0ZWdvcnktMTYzOQ==',
          name: 'Baby & Kind',
          path: 'baby-und-kind',
          position: 14,
          __typename: 'Category',
        },
        hierarchicalCategories: [
          {
            name: 'Baby & Kind',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Babynahrung & Kindernahrung',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Beikost',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Früchte',
            __typename: 'ProductCategoryUrlInfo',
          },
        ],
        multibuy: null,
        __typename: 'Product',
      },
      __typename: 'ProductsEdge',
    },
    {
      cursor:
        'eyJ6aXBjb2RlIjoiMTMzNTUiLCJvZmZzZXQiOjUwLCJxdWVyeSI6ImJpciIsImZpbHRlciI6eyJicmFuZCI6IiIsImFsbGVyZ2VuaWMiOltdLCJjaGFyYWN0ZXJpc3RpYyI6W10sImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwwIjoiIiwiaGllcmFyY2hpY2FsQ2F0ZWdvcmllc0x2bDEiOiIiLCJoaWVyYXJjaGljYWxDYXRlZ29yaWVzTHZsMiI6IiIsImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwzIjoiIn0sInNvcnRpbmciOiJERUZBVUxUIiwiY2FtcGFpZ24iOiIifQ==',
      node: {
        id: 'cHJvZHVjdC0zNjc0NTYyMDA3MQ==',
        productId: '36745620071',
        name: 'HiPP Bio Mango-Maracuja in Birne-Apfel ab 6. Monat',
        isAvailable: true,
        isBasePrice: true,
        packing: '190g Glas',
        units: [
          {
            id: 'cHJvZHVjdFVuaXQtMzY3NDU2MjAwNzFfNTc=',
            unitId: 57,
            name: 'Glas',
            default: true,
            price: 1.05,
            specialPrice: null,
            __typename: 'ProductUnit',
          },
        ],
        sku: '36745620071',
        image:
          '//assets.bringmeister.de/media/p/36745620071/0/136ffb3bf121880c3c26a91c2dac337e.jpg',
        properties: ['ORGANIC'],
        browserUrl:
          'hipp-bio-mango-maracuja-in-birne-apfel-ab-6-monat-36745620071',
        prices: {
          specialDiscount: 0,
          specialPrice: null,
          specialBasePrice: null,
          specialStartDateTs: null,
          specialEndDateTs: null,
          basePrice: 0.55,
          baseUnit: '100 g',
          deposit: 0,
          __typename: 'ProductPrices',
        },
        depositType: null,
        rootCategory: {
          id: 'Y2F0ZWdvcnktMTYzOQ==',
          name: 'Baby & Kind',
          path: 'baby-und-kind',
          position: 14,
          __typename: 'Category',
        },
        hierarchicalCategories: [
          {
            name: 'Baby & Kind',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Babynahrung & Kindernahrung',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Beikost',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Früchte',
            __typename: 'ProductCategoryUrlInfo',
          },
        ],
        multibuy: null,
        __typename: 'Product',
      },
      __typename: 'ProductsEdge',
    },
    {
      cursor:
        'eyJ6aXBjb2RlIjoiMTMzNTUiLCJvZmZzZXQiOjUxLCJxdWVyeSI6ImJpciIsImZpbHRlciI6eyJicmFuZCI6IiIsImFsbGVyZ2VuaWMiOltdLCJjaGFyYWN0ZXJpc3RpYyI6W10sImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwwIjoiIiwiaGllcmFyY2hpY2FsQ2F0ZWdvcmllc0x2bDEiOiIiLCJoaWVyYXJjaGljYWxDYXRlZ29yaWVzTHZsMiI6IiIsImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwzIjoiIn0sInNvcnRpbmciOiJERUZBVUxUIiwiY2FtcGFpZ24iOiIifQ==',
      node: {
        id: 'cHJvZHVjdC0xMzgxMjYwMDUx',
        productId: '1381260051',
        name: 'Birkel No.1 Trulli',
        isAvailable: true,
        isBasePrice: true,
        packing: '0.5kg Packung',
        units: [
          {
            id: 'cHJvZHVjdFVuaXQtMTM4MTI2MDA1MV81Nw==',
            unitId: 57,
            name: 'Packung',
            default: true,
            price: 1.59,
            specialPrice: null,
            __typename: 'ProductUnit',
          },
        ],
        sku: '1381260051',
        image:
          '//assets.bringmeister.de/media/p/1381260051/0/028bc6919b6635814465c8c9ebe8e5d2.jpg',
        properties: [],
        browserUrl: 'birkel-no1-trulli-1381260051',
        prices: {
          specialDiscount: 0,
          specialPrice: null,
          specialBasePrice: null,
          specialStartDateTs: null,
          specialEndDateTs: null,
          basePrice: 3.18,
          baseUnit: '1 kg',
          deposit: 0,
          __typename: 'ProductPrices',
        },
        depositType: null,
        rootCategory: {
          id: 'Y2F0ZWdvcnktMTUyNQ==',
          name: 'Nahrungsmittel',
          path: 'nahrungsmittel',
          position: 13,
          __typename: 'Category',
        },
        hierarchicalCategories: [
          {
            name: 'Nahrungsmittel',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Nudeln',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Kurze Nudeln',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Fussili & Spirelli',
            __typename: 'ProductCategoryUrlInfo',
          },
        ],
        multibuy: null,
        __typename: 'Product',
      },
      __typename: 'ProductsEdge',
    },
    {
      cursor:
        'eyJ6aXBjb2RlIjoiMTMzNTUiLCJvZmZzZXQiOjUyLCJxdWVyeSI6ImJpciIsImZpbHRlciI6eyJicmFuZCI6IiIsImFsbGVyZ2VuaWMiOltdLCJjaGFyYWN0ZXJpc3RpYyI6W10sImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwwIjoiIiwiaGllcmFyY2hpY2FsQ2F0ZWdvcmllc0x2bDEiOiIiLCJoaWVyYXJjaGljYWxDYXRlZ29yaWVzTHZsMiI6IiIsImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwzIjoiIn0sInNvcnRpbmciOiJERUZBVUxUIiwiY2FtcGFpZ24iOiIifQ==',
      node: {
        id: 'cHJvZHVjdC0zMzYzOTA3MDA5Mg==',
        productId: '33639070092',
        name: 'HiPP Bio Pflaume mit Birne ab 5. Monat',
        isAvailable: true,
        isBasePrice: true,
        packing: '6 x 190g Glas / Packung',
        units: [
          {
            id: 'cHJvZHVjdFVuaXQtMzM2MzkwNzAwOTJfNzE=',
            unitId: 71,
            name: 'Glas',
            default: true,
            price: 6.3,
            specialPrice: null,
            __typename: 'ProductUnit',
          },
        ],
        sku: '33639070092',
        image:
          '//assets.bringmeister.de/media/p/33639070092/0/29d38b90f4310b3b8822dcbd0d21bb7d.jpg',
        properties: ['ORGANIC'],
        browserUrl: 'hipp-bio-pflaume-mit-birne-ab-5-monat-33639070092',
        prices: {
          specialDiscount: 0,
          specialPrice: null,
          specialBasePrice: null,
          specialStartDateTs: null,
          specialEndDateTs: null,
          basePrice: 0.55,
          baseUnit: '100 g',
          deposit: 0,
          __typename: 'ProductPrices',
        },
        depositType: null,
        rootCategory: {
          id: 'Y2F0ZWdvcnktMTYzOQ==',
          name: 'Baby & Kind',
          path: 'baby-und-kind',
          position: 14,
          __typename: 'Category',
        },
        hierarchicalCategories: [
          {
            name: 'Baby & Kind',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Babynahrung & Kindernahrung',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Beikost',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Früchte',
            __typename: 'ProductCategoryUrlInfo',
          },
        ],
        multibuy: null,
        __typename: 'Product',
      },
      __typename: 'ProductsEdge',
    },
    {
      cursor:
        'eyJ6aXBjb2RlIjoiMTMzNTUiLCJvZmZzZXQiOjUzLCJxdWVyeSI6ImJpciIsImZpbHRlciI6eyJicmFuZCI6IiIsImFsbGVyZ2VuaWMiOltdLCJjaGFyYWN0ZXJpc3RpYyI6W10sImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwwIjoiIiwiaGllcmFyY2hpY2FsQ2F0ZWdvcmllc0x2bDEiOiIiLCJoaWVyYXJjaGljYWxDYXRlZ29yaWVzTHZsMiI6IiIsImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwzIjoiIn0sInNvcnRpbmciOiJERUZBVUxUIiwiY2FtcGFpZ24iOiIifQ==',
      node: {
        id: 'cHJvZHVjdC0zMzYzOTA3MDA5MQ==',
        productId: '33639070091',
        name: 'HiPP Bio Pflaume mit Birne ab 5. Monat',
        isAvailable: true,
        isBasePrice: true,
        packing: '190g Glas',
        units: [
          {
            id: 'cHJvZHVjdFVuaXQtMzM2MzkwNzAwOTFfNTc=',
            unitId: 57,
            name: 'Glas',
            default: true,
            price: 1.05,
            specialPrice: null,
            __typename: 'ProductUnit',
          },
        ],
        sku: '33639070091',
        image:
          '//assets.bringmeister.de/media/p/33639070091/0/69e15f57496929301ee743bbbcdc56b5.jpg',
        properties: ['ORGANIC'],
        browserUrl: 'hipp-bio-pflaume-mit-birne-ab-5-monat-33639070091',
        prices: {
          specialDiscount: 0,
          specialPrice: null,
          specialBasePrice: null,
          specialStartDateTs: null,
          specialEndDateTs: null,
          basePrice: 0.55,
          baseUnit: '100 g',
          deposit: 0,
          __typename: 'ProductPrices',
        },
        depositType: null,
        rootCategory: {
          id: 'Y2F0ZWdvcnktMTYzOQ==',
          name: 'Baby & Kind',
          path: 'baby-und-kind',
          position: 14,
          __typename: 'Category',
        },
        hierarchicalCategories: [
          {
            name: 'Baby & Kind',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Babynahrung & Kindernahrung',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Beikost',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Früchte',
            __typename: 'ProductCategoryUrlInfo',
          },
        ],
        multibuy: null,
        __typename: 'Product',
      },
      __typename: 'ProductsEdge',
    },
    {
      cursor:
        'eyJ6aXBjb2RlIjoiMTMzNTUiLCJvZmZzZXQiOjU0LCJxdWVyeSI6ImJpciIsImZpbHRlciI6eyJicmFuZCI6IiIsImFsbGVyZ2VuaWMiOltdLCJjaGFyYWN0ZXJpc3RpYyI6W10sImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwwIjoiIiwiaGllcmFyY2hpY2FsQ2F0ZWdvcmllc0x2bDEiOiIiLCJoaWVyYXJjaGljYWxDYXRlZ29yaWVzTHZsMiI6IiIsImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwzIjoiIn0sInNvcnRpbmciOiJERUZBVUxUIiwiY2FtcGFpZ24iOiIifQ==',
      node: {
        id: 'cHJvZHVjdC0yOTY5ODY2MDA4Mg==',
        productId: '29698660082',
        name: 'Alnatura Demeter Pflaumen-Birnen-Müsli ab 6. Monat',
        isAvailable: true,
        isBasePrice: true,
        packing: '6 x 190g Glas / Packung',
        units: [
          {
            id: 'cHJvZHVjdFVuaXQtMjk2OTg2NjAwODJfNzE=',
            unitId: 71,
            name: 'Pack',
            default: true,
            price: 6.3,
            specialPrice: null,
            __typename: 'ProductUnit',
          },
        ],
        sku: '29698660082',
        image:
          '//assets.bringmeister.de/media/p/29698660082/0/4f871939759fcc840a94a164639171fc.jpg',
        properties: ['ORGANIC'],
        browserUrl:
          'alnatura-demeter-pflaumen-birnen-muesli-ab-6-monat-29698660082',
        prices: {
          specialDiscount: 0,
          specialPrice: null,
          specialBasePrice: null,
          specialStartDateTs: null,
          specialEndDateTs: null,
          basePrice: 0.55,
          baseUnit: '100 g',
          deposit: 0,
          __typename: 'ProductPrices',
        },
        depositType: null,
        rootCategory: {
          id: 'Y2F0ZWdvcnktMTYzOQ==',
          name: 'Baby & Kind',
          path: 'baby-und-kind',
          position: 14,
          __typename: 'Category',
        },
        hierarchicalCategories: [
          {
            name: 'Baby & Kind',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Babynahrung & Kindernahrung',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Beikost',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Früchte',
            __typename: 'ProductCategoryUrlInfo',
          },
        ],
        multibuy: null,
        __typename: 'Product',
      },
      __typename: 'ProductsEdge',
    },
    {
      cursor:
        'eyJ6aXBjb2RlIjoiMTMzNTUiLCJvZmZzZXQiOjU1LCJxdWVyeSI6ImJpciIsImZpbHRlciI6eyJicmFuZCI6IiIsImFsbGVyZ2VuaWMiOltdLCJjaGFyYWN0ZXJpc3RpYyI6W10sImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwwIjoiIiwiaGllcmFyY2hpY2FsQ2F0ZWdvcmllc0x2bDEiOiIiLCJoaWVyYXJjaGljYWxDYXRlZ29yaWVzTHZsMiI6IiIsImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwzIjoiIn0sInNvcnRpbmciOiJERUZBVUxUIiwiY2FtcGFpZ24iOiIifQ==',
      node: {
        id: 'cHJvZHVjdC0yOTY5ODY2MDA4MQ==',
        productId: '29698660081',
        name: 'Alnatura Demeter Pflaumen-Birnen-Müsli ab 6. Monat',
        isAvailable: true,
        isBasePrice: true,
        packing: '190g Glas',
        units: [
          {
            id: 'cHJvZHVjdFVuaXQtMjk2OTg2NjAwODFfNTc=',
            unitId: 57,
            name: 'Glas',
            default: true,
            price: 1.05,
            specialPrice: null,
            __typename: 'ProductUnit',
          },
        ],
        sku: '29698660081',
        image:
          '//assets.bringmeister.de/media/p/29698660081/0/1234bd205761920751e26012acd884ca.jpg',
        properties: ['ORGANIC'],
        browserUrl:
          'alnatura-demeter-pflaumen-birnen-muesli-ab-6-monat-29698660081',
        prices: {
          specialDiscount: 0,
          specialPrice: null,
          specialBasePrice: null,
          specialStartDateTs: null,
          specialEndDateTs: null,
          basePrice: 0.55,
          baseUnit: '100 g',
          deposit: 0,
          __typename: 'ProductPrices',
        },
        depositType: null,
        rootCategory: {
          id: 'Y2F0ZWdvcnktMTYzOQ==',
          name: 'Baby & Kind',
          path: 'baby-und-kind',
          position: 14,
          __typename: 'Category',
        },
        hierarchicalCategories: [
          {
            name: 'Baby & Kind',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Babynahrung & Kindernahrung',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Beikost',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Früchte',
            __typename: 'ProductCategoryUrlInfo',
          },
        ],
        multibuy: null,
        __typename: 'Product',
      },
      __typename: 'ProductsEdge',
    },
    {
      cursor:
        'eyJ6aXBjb2RlIjoiMTMzNTUiLCJvZmZzZXQiOjU2LCJxdWVyeSI6ImJpciIsImZpbHRlciI6eyJicmFuZCI6IiIsImFsbGVyZ2VuaWMiOltdLCJjaGFyYWN0ZXJpc3RpYyI6W10sImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwwIjoiIiwiaGllcmFyY2hpY2FsQ2F0ZWdvcmllc0x2bDEiOiIiLCJoaWVyYXJjaGljYWxDYXRlZ29yaWVzTHZsMiI6IiIsImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwzIjoiIn0sInNvcnRpbmciOiJERUZBVUxUIiwiY2FtcGFpZ24iOiIifQ==',
      node: {
        id: 'cHJvZHVjdC0yODIwMTEwMDA4MQ==',
        productId: '28201100081',
        name: 'Erdbär Bio Freche Freunde Quetschmus Birne, Banane, Orange & Vanille',
        isAvailable: true,
        isBasePrice: true,
        packing: '100g Packung',
        units: [
          {
            id: 'cHJvZHVjdFVuaXQtMjgyMDExMDAwODFfNTc=',
            unitId: 57,
            name: 'Packung',
            default: true,
            price: 0.99,
            specialPrice: null,
            __typename: 'ProductUnit',
          },
        ],
        sku: '28201100081',
        image:
          '//assets.bringmeister.de/media/p/28201100081/0/de66887a9fde65c82209df7fe425a1eb.jpg',
        properties: ['ORGANIC'],
        browserUrl:
          'erdbaer-bio-freche-freunde-quetschmus-birne-banane-orange-und-vanille-28201100081',
        prices: {
          specialDiscount: 0,
          specialPrice: null,
          specialBasePrice: null,
          specialStartDateTs: null,
          specialEndDateTs: null,
          basePrice: 0.99,
          baseUnit: '100 g',
          deposit: 0,
          __typename: 'ProductPrices',
        },
        depositType: null,
        rootCategory: {
          id: 'Y2F0ZWdvcnktMTYzOQ==',
          name: 'Baby & Kind',
          path: 'baby-und-kind',
          position: 14,
          __typename: 'Category',
        },
        hierarchicalCategories: [
          {
            name: 'Baby & Kind',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Babynahrung & Kindernahrung',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Kinder',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Quetschbeutel',
            __typename: 'ProductCategoryUrlInfo',
          },
        ],
        multibuy: null,
        __typename: 'Product',
      },
      __typename: 'ProductsEdge',
    },
    {
      cursor:
        'eyJ6aXBjb2RlIjoiMTMzNTUiLCJvZmZzZXQiOjU3LCJxdWVyeSI6ImJpciIsImZpbHRlciI6eyJicmFuZCI6IiIsImFsbGVyZ2VuaWMiOltdLCJjaGFyYWN0ZXJpc3RpYyI6W10sImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwwIjoiIiwiaGllcmFyY2hpY2FsQ2F0ZWdvcmllc0x2bDEiOiIiLCJoaWVyYXJjaGljYWxDYXRlZ29yaWVzTHZsMiI6IiIsImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwzIjoiIn0sInNvcnRpbmciOiJERUZBVUxUIiwiY2FtcGFpZ24iOiIifQ==',
      node: {
        id: 'cHJvZHVjdC0xNDc5MzcwMDEx',
        productId: '1479370011',
        name: 'Birkel No.1 Muscheln',
        isAvailable: true,
        isBasePrice: true,
        packing: '250g Packung',
        units: [
          {
            id: 'cHJvZHVjdFVuaXQtMTQ3OTM3MDAxMV81Nw==',
            unitId: 57,
            name: 'Packung',
            default: true,
            price: 0.99,
            specialPrice: null,
            __typename: 'ProductUnit',
          },
        ],
        sku: '1479370011',
        image:
          '//assets.bringmeister.de/media/p/1479370011/0/94ea4b52ed1a75ca4f368a361675a9ca.jpg',
        properties: [],
        browserUrl: 'birkel-no1-muscheln-1479370011',
        prices: {
          specialDiscount: 0,
          specialPrice: null,
          specialBasePrice: null,
          specialStartDateTs: null,
          specialEndDateTs: null,
          basePrice: 0.4,
          baseUnit: '100 g',
          deposit: 0,
          __typename: 'ProductPrices',
        },
        depositType: null,
        rootCategory: {
          id: 'Y2F0ZWdvcnktMTUyNQ==',
          name: 'Nahrungsmittel',
          path: 'nahrungsmittel',
          position: 13,
          __typename: 'Category',
        },
        hierarchicalCategories: [
          {
            name: 'Nahrungsmittel',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Nudeln',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Suppennudeln',
            __typename: 'ProductCategoryUrlInfo',
          },
        ],
        multibuy: null,
        __typename: 'Product',
      },
      __typename: 'ProductsEdge',
    },
    {
      cursor:
        'eyJ6aXBjb2RlIjoiMTMzNTUiLCJvZmZzZXQiOjU4LCJxdWVyeSI6ImJpciIsImZpbHRlciI6eyJicmFuZCI6IiIsImFsbGVyZ2VuaWMiOltdLCJjaGFyYWN0ZXJpc3RpYyI6W10sImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwwIjoiIiwiaGllcmFyY2hpY2FsQ2F0ZWdvcmllc0x2bDEiOiIiLCJoaWVyYXJjaGljYWxDYXRlZ29yaWVzTHZsMiI6IiIsImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwzIjoiIn0sInNvcnRpbmciOiJERUZBVUxUIiwiY2FtcGFpZ24iOiIifQ==',
      node: {
        id: 'cHJvZHVjdC0zMzYzODIxMDA2Mg==',
        productId: '33638210062',
        name: 'HiPP Bio Williams-Christ-Birne ab 5. Monat',
        isAvailable: true,
        isBasePrice: true,
        packing: '6 x 125g Glas / Packung',
        units: [
          {
            id: 'cHJvZHVjdFVuaXQtMzM2MzgyMTAwNjJfNzE=',
            unitId: 71,
            name: 'Pack',
            default: true,
            price: 5.1,
            specialPrice: null,
            __typename: 'ProductUnit',
          },
        ],
        sku: '33638210062',
        image:
          '//assets.bringmeister.de/media/p/33638210062/0/1e064986bbda5d04979b90c57755dafb.jpg',
        properties: ['ORGANIC'],
        browserUrl: 'hipp-bio-williams-christ-birne-ab-5-monat-33638210062',
        prices: {
          specialDiscount: 0,
          specialPrice: null,
          specialBasePrice: null,
          specialStartDateTs: null,
          specialEndDateTs: null,
          basePrice: 0.68,
          baseUnit: '100 g',
          deposit: 0,
          __typename: 'ProductPrices',
        },
        depositType: null,
        rootCategory: {
          id: 'Y2F0ZWdvcnktMTYzOQ==',
          name: 'Baby & Kind',
          path: 'baby-und-kind',
          position: 14,
          __typename: 'Category',
        },
        hierarchicalCategories: [
          {
            name: 'Baby & Kind',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Babynahrung & Kindernahrung',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Beikost',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Früchte',
            __typename: 'ProductCategoryUrlInfo',
          },
        ],
        multibuy: null,
        __typename: 'Product',
      },
      __typename: 'ProductsEdge',
    },
    {
      cursor:
        'eyJ6aXBjb2RlIjoiMTMzNTUiLCJvZmZzZXQiOjU5LCJxdWVyeSI6ImJpciIsImZpbHRlciI6eyJicmFuZCI6IiIsImFsbGVyZ2VuaWMiOltdLCJjaGFyYWN0ZXJpc3RpYyI6W10sImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwwIjoiIiwiaGllcmFyY2hpY2FsQ2F0ZWdvcmllc0x2bDEiOiIiLCJoaWVyYXJjaGljYWxDYXRlZ29yaWVzTHZsMiI6IiIsImhpZXJhcmNoaWNhbENhdGVnb3JpZXNMdmwzIjoiIn0sInNvcnRpbmciOiJERUZBVUxUIiwiY2FtcGFpZ24iOiIifQ==',
      node: {
        id: 'cHJvZHVjdC0zMzYzODIxMDA2MQ==',
        productId: '33638210061',
        name: 'HiPP Bio Williams-Christ-Birne ab 5. Monat',
        isAvailable: true,
        isBasePrice: true,
        packing: '125g Glas',
        units: [
          {
            id: 'cHJvZHVjdFVuaXQtMzM2MzgyMTAwNjFfNTc=',
            unitId: 57,
            name: 'Glas',
            default: true,
            price: 0.85,
            specialPrice: null,
            __typename: 'ProductUnit',
          },
        ],
        sku: '33638210061',
        image:
          '//assets.bringmeister.de/media/p/33638210061/0/38efd5c4f6a56979eec8411f46400940.jpg',
        properties: ['ORGANIC'],
        browserUrl: 'hipp-bio-williams-christ-birne-ab-5-monat-33638210061',
        prices: {
          specialDiscount: 0,
          specialPrice: null,
          specialBasePrice: null,
          specialStartDateTs: null,
          specialEndDateTs: null,
          basePrice: 0.68,
          baseUnit: '100 g',
          deposit: 0,
          __typename: 'ProductPrices',
        },
        depositType: null,
        rootCategory: {
          id: 'Y2F0ZWdvcnktMTYzOQ==',
          name: 'Baby & Kind',
          path: 'baby-und-kind',
          position: 14,
          __typename: 'Category',
        },
        hierarchicalCategories: [
          {
            name: 'Baby & Kind',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Babynahrung & Kindernahrung',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Beikost',
            __typename: 'ProductCategoryUrlInfo',
          },
          {
            name: 'Früchte',
            __typename: 'ProductCategoryUrlInfo',
          },
        ],
        multibuy: null,
        __typename: 'Product',
      },
      __typename: 'ProductsEdge',
    },
  ],
  __typename: 'ProductsConnection',
};

function useGetProducts() {
  const [cartInfo, setCartInfo] = useState<
    | {
        loading: true;
        data: undefined;
      }
    | {
        loading: false;
        data: typeof productsData;
      }
  >({
    loading: true,
    data: undefined,
  });

  useEffect(() => {
    setTimeout(() => {
      setCartInfo({
        loading: false,
        data: productsData,
      });
    }, 1000);
  }, []);

  return cartInfo;
}

export default useGetProducts;
