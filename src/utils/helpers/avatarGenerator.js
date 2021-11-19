const tinycolor = require('tinycolor2');

const randomizer = () => Math.round(Math.random() * 5);

export default (username) => {
    const colors = tinycolor('#21CBF3')
        .analogous()
        .map((color) => color.toHexString());
    const [firstName, lastName] = username.split(' ');
    const userInitials = lastName ? firstName[0] + lastName[0] : firstName[0];

    const color = colors[randomizer()];
    return {
        avatarColor: `linear-gradient(45deg, ${color} 30%, ${tinycolor(color).lighten(20)} 90%)`,
        userInitials: userInitials,
    };
};

//random color from string in javascript!
