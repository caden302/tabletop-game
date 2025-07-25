import Token from "./Token";
import enemyImg from "../assets/BlackFrost.webp";

function EnemyToken(props) {
    return (
        <Token
            imgSrc={enemyImg}
            initialPos={{x:300, y:150}}
            size={24}
            {...props}
        ></Token>
    )
}

export default EnemyToken;