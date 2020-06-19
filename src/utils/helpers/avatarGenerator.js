const tinycolor = require("tinycolor2");

const randomizer = () => Math.round(Math.random() * 5)

export default (username) => {
   const colors = tinycolor("#21CBF3").analogous().map( color => color.toHexString());
   const userNameArray = username.split(' ');
   const userInitials = userNameArray[1] ? userNameArray[0][0] + userNameArray[1][0] : userNameArray[0][0]

   return {
       color: colors[randomizer()],
       initials: userInitials
   }
}
