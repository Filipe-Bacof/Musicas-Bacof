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
        "name": "Belphegor",
        "spotify": "https://open.spotify.com/artist/1uPIYn2IU0IuPWSZ58kzyM",
        "image": "https://i.scdn.co/image/ab6761610000e5eb2ab1a7b9329f83536f952214"
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
    },
    {
        "name": "Rammstein",
        "spotify": "https://open.spotify.com/artist/6wWVKhxIU2cEi0K81v7HvP",
        "image": "https://static.dw.com/image/48777860_804.jpg"
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
        "name": "Pestapokalipse VI",
        "spotify": "https://open.spotify.com/album/49J7pB6xc7G6mR8pYreIXq",
        "image": "https://cdns-images.dzcdn.net/images/cover/64a1fcdb5367611d3ba5b16b6550923f/500x500.jpg"
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
        "name": "Deicide",
        "spotify": "https://open.spotify.com/album/2gdL5FVb9weq5fVFa7Qw5F",
        "image": "https://pbs.twimg.com/media/EW7MXAtXsAIM_Pj.jpg"
    },
    {
        "name": "2112",
        "spotify": "https://open.spotify.com/album/3eBrvZnagmIDbdgse7cjI6",
        "image": "https://classicrockreview.wordpress.com/wp-content/uploads/2021/07/rush_2112.jpg"
    },
    {
        "name": "Infestissumam",
        "spotify": "https://open.spotify.com/album/32CbQps06lUasiux6N8tP3",
        "image": "https://m.media-amazon.com/images/I/61UtVEv9jTL._AC_SX425_.jpg"
    },
    {
        "name": "M-16",
        "spotify": "https://open.spotify.com/album/4z5S4xdou220mwTfA2mmZn",
        "image": "https://m.media-amazon.com/images/I/91Vx0qbXxCL._UF1000,1000_QL80_.jpg"
    },
    {
        "name": "Black Metal",
        "spotify": "https://open.spotify.com/album/1e6Osda6t8UDFYQ29sFVlV",
        "image": "https://m.media-amazon.com/images/I/51BNO6kP3CL._AC_SX425_.jpg"
    },
    {
        "name": "Cause of Death",
        "spotify": "https://open.spotify.com/album/79fVRZLnIqS3FytTLfTBT4",
        "image": "https://www.mundometalbr.com/wp-content/uploads/2021/10/bcd30e_a6292598ae3341bf975b7a0fa3145ff8_mv2.jpg"
    },
    {
        "name": "Hellbilly Deluxe",
        "spotify": "https://open.spotify.com/album/2B4lHoTCpWbxQPTZmCOjnH",
        "image": "https://m.media-amazon.com/images/I/81bPrUAESnL._AC_SX355_.jpg"
    },
    {
        "name": "Peace Sells",
        "spotify": "https://open.spotify.com/album/4U8ZF5zDIRy4lBnnXBN2uO",
        "image": "https://www.mundometalbr.com/wp-content/uploads/2021/10/45b4d3_8de7776a56534bcebebd87efcb2e6eeb_mv2.jpg"
    },
    {
        "name": "Show no Mercy",
        "spotify": "https://open.spotify.com/album/3D6BriGykla1Qi2YzeoE7X",
        "image": "https://upload.wikimedia.org/wikipedia/pt/1/1b/Show_No_Mercy.jpg"
    },
    {
        "name": "Extreme Aggression",
        "spotify": "https://open.spotify.com/album/5iN66znBhr5nr0nuGYDG2A",
        "image": "https://lastfm.freetls.fastly.net/i/u/ar0/aa583571268567a0a3e4b5fe097555ef"
    },
    {
        "name": "Rise of the Reaper",
        "spotify": "https://open.spotify.com/album/5MpIM8YvJWKW5DGaJWf9ut",
        "image": "https://roadiecrew.com/wp-content/uploads/Entrails-rise-of-the-reaper.jpg"
    }
];

const social = [
    {
        "name": "Instagram",
        "link": "https://www.instagram.com/filipe.bacof/",
        "image": "https://img.icons8.com/fluency/2x/instagram-new.png"
    },
    {
        "name": "GitHub",
        "link": "https://github.com/Filipe-Bacof",
        "image": "https://cdn.icon-icons.com/icons2/2429/PNG/512/github_logo_icon_147285.png"
    },
    {
        "name": "Linkedin",
        "link": "https://www.linkedin.com/in/filipe-bacof/",
        "image": "https://img.icons8.com/fluency/2x/linkedin.png"
    },
    {
        "name": "Facebook",
        "link": "https://www.facebook.com/filipe.bacof/",
        "image": "https://img.icons8.com/color/2x/facebook-new.png"
    }
];