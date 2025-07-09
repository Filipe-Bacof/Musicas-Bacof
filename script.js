const criarItemLista = (item) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    const img = document.createElement("img");

    a.href = item.spotify || item.link;
    a.target = "_blank";
    img.src = item.image;
    img.alt = `Imagem do ${item.name}`;

    a.appendChild(img);
    li.appendChild(a);
    return li;
};

const popularLista = async (dados, seletorUl) => {
    const ul = document.querySelector(seletorUl);
    ul.innerHTML = "";
    dados.forEach((item) => {
        const li = criarItemLista(item);
        ul.appendChild(li);
    });
};

document.addEventListener("DOMContentLoaded", () => {
    popularLista(bands, ".bands-list");
    popularLista(albuns, ".disc-list");
    popularLista(social, ".social-list");
});

const bands = [
    {
        "name": "Nile",
        "spotify": "https://open.spotify.com/artist/3v3VSKylQE69ztn5TUVlFE",
        "image": "https://cdn-images.dzcdn.net/images/artist/351c83e177efc133e3d4ce1bf7cfb32d/1900x1900-000000-80-0-0.jpg"
    },
    {
        "name": "Death",
        "spotify": "https://open.spotify.com/artist/4f5V3PQ66nIrBCqugJtaGn",
        "image": "https://images.genius.com/624dabc68558039a5bd547d60899173e.770x770x1.jpg"
    },
    {
        "name": "Amon Amarth",
        "spotify": "https://open.spotify.com/artist/3pulcT2wt7FEG10lQlqDJL",
        "image": "https://akamai.sscdn.co/letras/250x250/fotos/3/4/9/7/3497336a27b55651092c4704faa2ec53.jpg"
    },
    {
        "name": "Rammstein",
        "spotify": "https://open.spotify.com/artist/6wWVKhxIU2cEi0K81v7HvP",
        "image": "https://static.dw.com/image/48777860_804.jpg"
    },
    {
        "name": "Metallica",
        "spotify": "https://open.spotify.com/artist/2ye2Wgw4gimLv2eAKyk1NB",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYmQ4S_6VsrzZiF3vGrUgD9A-giIb96JBAcGCpCGgMtPJotdCm"
    },
    {
        "name": "Megadeth",
        "spotify": "https://open.spotify.com/artist/1Yox196W7bzVNZI7RBaPnf",
        "image": "https://roquereverso.files.wordpress.com/2022/09/megadeth.jpg"
    },
    {
        "name": "Slayer",
        "spotify": "https://open.spotify.com/artist/1IQ2e1buppatiN1bxUVkrk",
        "image": "http://www.albumrock.net/dyn_img/groupes/1218.jpg"
    },
    {
        "name": "Black Sabbath",
        "spotify": "https://open.spotify.com/artist/5M52tdBnJaKSvOpJGz8mfZ",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlnTQIL2L9RwXa0QRvP8pxXVXI11V51jRYdwbRwi2b2UPJDrESIWzYizUYPdOYtrDUxqo&usqp=CAU"
    }
];

const albuns = [
    {
        "name": "Master of Puppets",
        "spotify": "https://open.spotify.com/album/2Lq2qX3hYhiuPckC8Flj21",
        "image": "https://upload.wikimedia.org/wikipedia/pt/4/4d/Master_of_Puppets.jpg"
    },
    {
        "name": "The Sound of Perseverance",
        "spotify": "https://open.spotify.com/album/0p6DxsQOhQ5qiBnUu9G1PB",
        "image": "https://cdns-images.dzcdn.net/images/cover/d0cb9616fb23c55b2d477a3724e12985/264x264.jpg"
    },
    {
        "name": "Annihilation Of The Wicked",
        "spotify": "https://open.spotify.com/album/4BjBX6Ra2PgsH3qy5NsK2A",
        "image": "https://upload.wikimedia.org/wikipedia/en/5/5b/Nile_-_Annihilation_Of_The_Wicked.jpg"
    },
    {
        "name": "Surtur Rising",
        "spotify": "https://open.spotify.com/album/6bz1yWjzSUlsXXlih2fjyB",
        "image": "https://m.media-amazon.com/images/I/914WuRbjzOL._UF1000,1000_QL80_.jpg"
    },
    {
        "name": "Reinventing the Steel",
        "spotify": "https://open.spotify.com/album/7sEY94y1wQACVwMgeE62hd",
        "image": "https://m.media-amazon.com/images/I/817FhcppDOL._UF1000,1000_QL80_.jpg"
    },
    {
        "name": "Believe",
        "spotify": "https://open.spotify.com/album/6PfpFynKzUEFitHt7BwcVL",
        "image": "https://cdn-images.dzcdn.net/images/cover/9772445df8eaeadb716d6e8c03f6c81a/0x1900-000000-80-0-0.jpg"
    },
    {
        "name": "2112",
        "spotify": "https://open.spotify.com/album/3eBrvZnagmIDbdgse7cjI6",
        "image": "https://classicrockreview.wordpress.com/wp-content/uploads/2021/07/rush_2112.jpg"
    },
    {
        "name": "Black Ice",
        "spotify": "https://open.spotify.com/album/7qVfz4UGONwEd5nQjj0ESN",
        "image": "https://upload.wikimedia.org/wikipedia/pt/5/55/Black_Ice.jpg"
    },
    {
        "name": "Paranoid",
        "spotify": "https://open.spotify.com/album/4kA2o0L3tz9vFKJetiFUJI",
        "image": "https://m.media-amazon.com/images/I/81J19yHBFTL._UF894,1000_QL80_.jpg"
    },
    {
        "name": "M-16",
        "spotify": "https://open.spotify.com/album/4z5S4xdou220mwTfA2mmZn",
        "image": "https://m.media-amazon.com/images/I/91Vx0qbXxCL._UF1000,1000_QL80_.jpg"
    },
    {
        "name": "Dirt",
        "spotify": "https://open.spotify.com/album/58NXIEYqmq5dQHg9nV9duM",
        "image": "https://upload.wikimedia.org/wikipedia/pt/b/ba/Dirt.jpg"
    },
    {
        "name": "Torture",
        "spotify": "https://open.spotify.com/album/7AaZ6zhZXDKilXqsJ52g8b",
        "image": "https://m.media-amazon.com/images/I/81Ljy1yOnZL._UF1000,1000_QL80_.jpg"
    },
    {
        "name": "Thirteen",
        "spotify": "https://open.spotify.com/album/0ja6Rjg1a5Fw2IEwTymwQE",
        "image": "https://upload.wikimedia.org/wikipedia/pt/d/d4/Megadeth_TH1RT3EN_Cover.jpg"
    },
    {
        "name": "Repentless",
        "spotify": "https://open.spotify.com/album/5QTGKCuJbyViaQQXjHOvjL",
        "image": "https://upload.wikimedia.org/wikipedia/pt/2/2f/Repentless.png"
    },
    {
        "name": "Extreme Aggression",
        "spotify": "https://open.spotify.com/album/5iN66znBhr5nr0nuGYDG2A",
        "image": "https://lastfm.freetls.fastly.net/i/u/ar0/aa583571268567a0a3e4b5fe097555ef"
    },
    {
        "name": "From Hell I Rise",
        "spotify": "https://open.spotify.com/album/4ckLWU4gnRz63E4raWVEFF",
        "image": "https://m.media-amazon.com/images/I/81brELnx-EL._UF350,350_QL50_.jpg"
    }
];

const social = [
    {
        "name": "Instagram",
        "link": "https://www.instagram.com/filipe.bacof/",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/500px-Instagram_icon.png"
    },
    {
        "name": "GitHub",
        "link": "https://github.com/Filipe-Bacof",
        "image": "https://camo.githubusercontent.com/4374f0b29a45f7d158ec8fe94398eb90f4ac94c03d6b99346b99e916e5157cb9/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f706e672f6769746875622e706e67"
    },
    {
        "name": "Linkedin",
        "link": "https://www.linkedin.com/in/filipe-bacof/",
        "image": "https://images.icon-icons.com/1043/PNG/512/social_media_icons_flat_shadow_set_512x512_0010_linkedin_icon-icons.com_76459.png"
    },
    {
        "name": "Facebook",
        "link": "https://www.facebook.com/filipe.bacof/",
        "image": "https://cdn6.aptoide.com/imgs/3/a/3/3a358df023050199d97d4ee04ca27f00_icon.png"
    },
    {
        "name": "Threads",
        "link": "https://www.threads.com/@filipe.bacof",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF9YLpYW4qCi3gA_o-i3_gw2a7-fKjM8Q_8Q&s"
    }

    
];