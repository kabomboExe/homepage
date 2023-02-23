
const numberOfBAImg = () => {
    const BA = [];

    for (let index = 1; index < 59; index++) {
        let string = index.toString().padStart(3, '0');
        BA.push("BA_anonym.pdf/BA_anonym-" + string + ".png");

    }

    return BA;
}

export default numberOfBAImg;