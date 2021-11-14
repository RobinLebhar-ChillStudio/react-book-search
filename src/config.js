const APIKEY = "AIzaSyCfWRtzDxxxjIh92KEQjXpiEobQnICSvNE"
export const ENDPOINTS = {
        bookSearch : (query) =>  `https://www.googleapis.com/books/v1/volumes?key=${APIKEY}&q=${query}&langRestrict=en&maxResults=5`,
        bookById : (bookId) => `https://www.googleapis.com/books/v1/volumes/${bookId}?key=${APIKEY}&langRestrict=en`
}
export const MOCK_RESULT= {
        "kind": "books#volumes",
        "totalItems": 2457,
        "items": [
            {
                "kind": "books#volume",
                "id": "lMM4jgEACAAJ",
                "etag": "b+ZSLOEnacg",
                "selfLink": "https://www.googleapis.com/books/v1/volumes/lMM4jgEACAAJ",
                "volumeInfo": {
                    "title": "Harry Potter Coloring Book",
                    "authors": [
                        "Inc. Scholastic"
                    ],
                    "publisher": "Scholastic Incorporated",
                    "publishedDate": "2015-11-10",
                    "description": "Packed with stunning pieces of artwork from the Warner Bros. archive, this deluxe coloring book gives fans the chance to color in the vivid settings and beloved characters of J.K. Rowling's wizarding world. Containing intricate line drawings used in the making of the Harry Potter films, this coloring book includes fan-favorite scenes, creatures, and characters: from Dobby and baby Norbert to Quidditch games and the unforgettable final battle between Harry and Lord Voldemort. Unique and interactive, Harry Potter: The Official Coloring Book is a perfect collector's item for all fans of the blockbuster saga--whether it's for those who grew up with Harry, Ron, and Hermione, or those who are discovering the magic for the very first time.",
                    "industryIdentifiers": [
                        {
                            "type": "ISBN_10",
                            "identifier": "1338029991"
                        },
                        {
                            "type": "ISBN_13",
                            "identifier": "9781338029994"
                        }
                    ],
                    "readingModes": {
                        "text": false,
                        "image": false
                    },
                    "pageCount": 96,
                    "printType": "BOOK",
                    "categories": [
                        "Juvenile Fiction"
                    ],
                    "averageRating": 3,
                    "ratingsCount": 2,
                    "maturityRating": "NOT_MATURE",
                    "allowAnonLogging": false,
                    "contentVersion": "preview-1.0.0",
                    "imageLinks": {
                        "smallThumbnail": "http://books.google.com/books/content?id=lMM4jgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                        "thumbnail": "http://books.google.com/books/content?id=lMM4jgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
                    },
                    "language": "en",
                    "previewLink": "http://books.google.com/books?id=lMM4jgEACAAJ&dq=Harry+potter&hl=&cd=1&source=gbs_api",
                    "infoLink": "http://books.google.com/books?id=lMM4jgEACAAJ&dq=Harry+potter&hl=&source=gbs_api",
                    "canonicalVolumeLink": "https://books.google.com/books/about/Harry_Potter_Coloring_Book.html?hl=&id=lMM4jgEACAAJ"
                },
                "saleInfo": {
                    "country": "US",
                    "saleability": "NOT_FOR_SALE",
                    "isEbook": false
                },
                "accessInfo": {
                    "country": "US",
                    "viewability": "NO_PAGES",
                    "embeddable": false,
                    "publicDomain": false,
                    "textToSpeechPermission": "ALLOWED",
                    "epub": {
                        "isAvailable": false
                    },
                    "pdf": {
                        "isAvailable": false
                    },
                    "webReaderLink": "http://play.google.com/books/reader?id=lMM4jgEACAAJ&hl=&printsec=frontcover&source=gbs_api",
                    "accessViewStatus": "NONE",
                    "quoteSharingAllowed": false
                },
                "searchInfo": {
                    "textSnippet": "Filled with intricate illustrations and elaborate designs used in the making of the Harry Potter films, this book invites you to imbue the wizarding world with color in your own explorations of Hogwarts Castle, the Forbidden Forest, and ..."
                }
            },
            {
                "kind": "books#volume",
                "id": "kLAoswEACAAJ",
                "etag": "ZDQ3mKlMyxc",
                "selfLink": "https://www.googleapis.com/books/v1/volumes/kLAoswEACAAJ",
                "volumeInfo": {
                    "title": "Harry Potter and the Cursed Child",
                    "authors": [
                        "J. K. Rowling",
                        "Jack Thorne",
                        "John Tiffany"
                    ],
                    "publisher": "Sphere",
                    "publishedDate": "2017-07-25",
                    "description": "The official playscript of the original West End production of Harry Potter and the Cursed Child. It was always difficult being Harry Potter and it isn't much easier now that he is an overworked employee of the Ministry of Magic, a husband, and father of three school-age children. While Harry grapples with a past that refuses to stay where it belongs, his youngest son Albus must struggle with the weight of a family legacy he never wanted. As past and present fuse ominously, both father and son learn the uncomfortable truth: sometimes, darkness comes from unexpected places. The playscript for Harry Potter and the Cursed Child was originally released as a 'special rehearsal edition' alongside the opening of Jack Thorne's play in London's West End in summer 2016. Based on an original story by J.K. Rowling, John Tiffany and Jack Thorne, the play opened to rapturous reviews from theatregoers and critics alike, while the official playscript became an immediate global bestseller. This revised paperback edition updates the 'special rehearsal edition' with the conclusive and final dialogue from the play, which has subtly changed since its rehearsals, as well as a conversation piece between director John Tiffany and writer Jack Thorne, who share stories and insights about reading playscripts. This edition also includes useful background information including the Potter family tree and a timeline of events from the wizarding world prior to the beginning of Harry Potter and the Cursed Child.",
                    "industryIdentifiers": [
                        {
                            "type": "ISBN_10",
                            "identifier": "0751565369"
                        },
                        {
                            "type": "ISBN_13",
                            "identifier": "9780751565362"
                        }
                    ],
                    "readingModes": {
                        "text": false,
                        "image": false
                    },
                    "pageCount": 352,
                    "printType": "BOOK",
                    "categories": [
                        "Fiction"
                    ],
                    "averageRating": 5,
                    "ratingsCount": 1,
                    "maturityRating": "NOT_MATURE",
                    "allowAnonLogging": false,
                    "contentVersion": "preview-1.0.0",
                    "panelizationSummary": {
                        "containsEpubBubbles": false,
                        "containsImageBubbles": false
                    },
                    "imageLinks": {
                        "smallThumbnail": "http://books.google.com/books/content?id=kLAoswEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                        "thumbnail": "http://books.google.com/books/content?id=kLAoswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
                    },
                    "language": "en",
                    "previewLink": "http://books.google.com/books?id=kLAoswEACAAJ&dq=Harry+potter&hl=&cd=2&source=gbs_api",
                    "infoLink": "http://books.google.com/books?id=kLAoswEACAAJ&dq=Harry+potter&hl=&source=gbs_api",
                    "canonicalVolumeLink": "https://books.google.com/books/about/Harry_Potter_and_the_Cursed_Child.html?hl=&id=kLAoswEACAAJ"
                },
                "saleInfo": {
                    "country": "US",
                    "saleability": "NOT_FOR_SALE",
                    "isEbook": false
                },
                "accessInfo": {
                    "country": "US",
                    "viewability": "NO_PAGES",
                    "embeddable": false,
                    "publicDomain": false,
                    "textToSpeechPermission": "ALLOWED",
                    "epub": {
                        "isAvailable": false
                    },
                    "pdf": {
                        "isAvailable": false
                    },
                    "webReaderLink": "http://play.google.com/books/reader?id=kLAoswEACAAJ&hl=&printsec=frontcover&source=gbs_api",
                    "accessViewStatus": "NONE",
                    "quoteSharingAllowed": false
                },
                "searchInfo": {
                    "textSnippet": "As an overworked employee of the Ministry of Magic, a husband, and a father, Harry Potter struggles with a past that refuses to stay where it belongs while his youngest son, Albus, finds the weight of the family legacy difficult to bear."
                }
            },
            {
                "kind": "books#volume",
                "id": "eq9XvgAACAAJ",
                "etag": "nogmmiynjJo",
                "selfLink": "https://www.googleapis.com/books/v1/volumes/eq9XvgAACAAJ",
                "volumeInfo": {
                    "title": "Fantastic Beasts and Where to Find Them: Cinematic Guide: Newt Scamander Do Not Feed Out",
                    "authors": [
                        "Felicity Baker"
                    ],
                    "publishedDate": "2017-02-02",
                    "description": "The essential film companion for Newt Scamander! Relive the magic of Newt's world with this hardback guidebook featuring your favourite scenes and quotes from Fantastic Beasts and Where to Find Them.",
                    "industryIdentifiers": [
                        {
                            "type": "ISBN_10",
                            "identifier": "1407179403"
                        },
                        {
                            "type": "ISBN_13",
                            "identifier": "9781407179407"
                        }
                    ],
                    "readingModes": {
                        "text": false,
                        "image": false
                    },
                    "pageCount": 64,
                    "printType": "BOOK",
                    "averageRating": 5,
                    "ratingsCount": 1,
                    "maturityRating": "NOT_MATURE",
                    "allowAnonLogging": false,
                    "contentVersion": "preview-1.0.0",
                    "panelizationSummary": {
                        "containsEpubBubbles": false,
                        "containsImageBubbles": false
                    },
                    "imageLinks": {
                        "smallThumbnail": "http://books.google.com/books/content?id=eq9XvgAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                        "thumbnail": "http://books.google.com/books/content?id=eq9XvgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
                    },
                    "language": "en",
                    "previewLink": "http://books.google.com/books?id=eq9XvgAACAAJ&dq=Harry+potter&hl=&cd=3&source=gbs_api",
                    "infoLink": "http://books.google.com/books?id=eq9XvgAACAAJ&dq=Harry+potter&hl=&source=gbs_api",
                    "canonicalVolumeLink": "https://books.google.com/books/about/Fantastic_Beasts_and_Where_to_Find_Them.html?hl=&id=eq9XvgAACAAJ"
                },
                "saleInfo": {
                    "country": "US",
                    "saleability": "NOT_FOR_SALE",
                    "isEbook": false
                },
                "accessInfo": {
                    "country": "US",
                    "viewability": "NO_PAGES",
                    "embeddable": false,
                    "publicDomain": false,
                    "textToSpeechPermission": "ALLOWED",
                    "epub": {
                        "isAvailable": false
                    },
                    "pdf": {
                        "isAvailable": false
                    },
                    "webReaderLink": "http://play.google.com/books/reader?id=eq9XvgAACAAJ&hl=&printsec=frontcover&source=gbs_api",
                    "accessViewStatus": "NONE",
                    "quoteSharingAllowed": false
                },
                "searchInfo": {
                    "textSnippet": "Relive all the magic of Newt&#39;s world with this hardback guidebook featuring all you need to know about Newt from the movie."
                }
            },
            {
                "kind": "books#volume",
                "id": "f280CwAAQBAJ",
                "etag": "iwAtgiLU/dg",
                "selfLink": "https://www.googleapis.com/books/v1/volumes/f280CwAAQBAJ",
                "volumeInfo": {
                    "title": "Harry Potter: The Complete Collection (1-7)",
                    "authors": [
                        "J.K. Rowling"
                    ],
                    "publisher": "Pottermore Publishing",
                    "publishedDate": "2015-12-14",
                    "description": "All seven eBooks in the multi-award winning, internationally bestselling Harry Potter series, available as one download with stunning cover art by Olly Moss. Enjoy the stories that have captured the imagination of millions worldwide. Having now become classics of our time, the Harry Potter ebooks never fail to bring comfort and escapism to readers of all ages. With its message of hope, belonging and the enduring power of truth and love, the story of the Boy Who Lived continues to delight generations of new readers.",
                    "industryIdentifiers": [
                        {
                            "type": "ISBN_13",
                            "identifier": "9781781106464"
                        },
                        {
                            "type": "ISBN_10",
                            "identifier": "1781106460"
                        }
                    ],
                    "readingModes": {
                        "text": true,
                        "image": false
                    },
                    "pageCount": 4236,
                    "printType": "BOOK",
                    "categories": [
                        "Young Adult Fiction"
                    ],
                    "averageRating": 4,
                    "ratingsCount": 51,
                    "maturityRating": "NOT_MATURE",
                    "allowAnonLogging": true,
                    "contentVersion": "1.22.20.0.preview.2",
                    "panelizationSummary": {
                        "containsEpubBubbles": false,
                        "containsImageBubbles": false
                    },
                    "imageLinks": {
                        "smallThumbnail": "http://books.google.com/books/content?id=f280CwAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                        "thumbnail": "http://books.google.com/books/content?id=f280CwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
                    },
                    "language": "en",
                    "previewLink": "http://books.google.com/books?id=f280CwAAQBAJ&pg=PP1&dq=Harry+potter&hl=&cd=4&source=gbs_api",
                    "infoLink": "http://books.google.com/books?id=f280CwAAQBAJ&dq=Harry+potter&hl=&source=gbs_api",
                    "canonicalVolumeLink": "https://books.google.com/books/about/Harry_Potter_The_Complete_Collection_1_7.html?hl=&id=f280CwAAQBAJ"
                },
                "saleInfo": {
                    "country": "US",
                    "saleability": "NOT_FOR_SALE",
                    "isEbook": false
                },
                "accessInfo": {
                    "country": "US",
                    "viewability": "NO_PAGES",
                    "embeddable": false,
                    "publicDomain": false,
                    "textToSpeechPermission": "ALLOWED",
                    "epub": {
                        "isAvailable": true
                    },
                    "pdf": {
                        "isAvailable": true
                    },
                    "webReaderLink": "http://play.google.com/books/reader?id=f280CwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                    "accessViewStatus": "NONE",
                    "quoteSharingAllowed": false
                }
            },
            {
                "kind": "books#volume",
                "id": "tbLsxgEACAAJ",
                "etag": "zyveyLacB2s",
                "selfLink": "https://www.googleapis.com/books/v1/volumes/tbLsxgEACAAJ",
                "volumeInfo": {
                    "title": "Harry Potter: A Pop-Up Guide to Diagon Alley and Beyond",
                    "authors": [
                        "Matthew Reinhart"
                    ],
                    "publisher": "Insight Editions",
                    "publishedDate": "2020-10-20",
                    "description": "Journey into the Wizarding World once more with this stunning new masterpiece from New York Times best-selling paper engineer Matthew Reinhart. This exhilarating pop-up book invites you to relive the movie adventures of Hermione Granger, Ron Weasley, and the Boy Who Lived—Harry Potter—as you explore London’s magical Diagon Alley like never before. Inside, gorgeously intricate pop-up spreads render fan-favorite Diagon Alley establishments such as Ollivanders, Weasleys’ Wizard Wheezes, and the Leaky Cauldron, plus other locales like the Ministry of Magic and platform nine and three-quarters. Pull tabs allow fans to command the action—rescue a Ukrainian Ironbelly dragon from the depths of Gringotts, or help Harry navigate out of Knockturn Alley after a Floo powder mishap. Alongside each pop, discover facts and insights from the making of the Harry Potter films. Plus, the book opens into a displayable 3D diorama of all the pop-ups at once. Packed with amazing moments and hidden surprises, Harry Potter: A Pop-Up Guide to Diagon Alley and Beyond is a landmark new pop-up book guaranteed to impress Harry Potter fans everywhere.",
                    "industryIdentifiers": [
                        {
                            "type": "ISBN_10",
                            "identifier": "1683839188"
                        },
                        {
                            "type": "ISBN_13",
                            "identifier": "9781683839187"
                        }
                    ],
                    "readingModes": {
                        "text": false,
                        "image": false
                    },
                    "pageCount": 10,
                    "printType": "BOOK",
                    "categories": [
                        "Performing Arts"
                    ],
                    "averageRating": 3,
                    "ratingsCount": 1,
                    "maturityRating": "NOT_MATURE",
                    "allowAnonLogging": false,
                    "contentVersion": "preview-1.0.0",
                    "panelizationSummary": {
                        "containsEpubBubbles": false,
                        "containsImageBubbles": false
                    },
                    "imageLinks": {
                        "smallThumbnail": "http://books.google.com/books/content?id=tbLsxgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                        "thumbnail": "http://books.google.com/books/content?id=tbLsxgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
                    },
                    "language": "en",
                    "previewLink": "http://books.google.com/books?id=tbLsxgEACAAJ&dq=Harry+potter&hl=&cd=5&source=gbs_api",
                    "infoLink": "http://books.google.com/books?id=tbLsxgEACAAJ&dq=Harry+potter&hl=&source=gbs_api",
                    "canonicalVolumeLink": "https://books.google.com/books/about/Harry_Potter_A_Pop_Up_Guide_to_Diagon_Al.html?hl=&id=tbLsxgEACAAJ"
                },
                "saleInfo": {
                    "country": "US",
                    "saleability": "NOT_FOR_SALE",
                    "isEbook": false
                },
                "accessInfo": {
                    "country": "US",
                    "viewability": "NO_PAGES",
                    "embeddable": false,
                    "publicDomain": false,
                    "textToSpeechPermission": "ALLOWED",
                    "epub": {
                        "isAvailable": false
                    },
                    "pdf": {
                        "isAvailable": false
                    },
                    "webReaderLink": "http://play.google.com/books/reader?id=tbLsxgEACAAJ&hl=&printsec=frontcover&source=gbs_api",
                    "accessViewStatus": "NONE",
                    "quoteSharingAllowed": false
                },
                "searchInfo": {
                    "textSnippet": "Alongside each pop, discover facts and insights from the making of the Harry Potter films. Plus, the book opens into a displayable 3D diorama of all the pop-ups at once."
                }
            }
        ]
    }