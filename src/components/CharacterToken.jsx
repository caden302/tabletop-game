import Token from "./Token";
import characterImg from "../assets/Nahobino_Form_Render.webp";

function CharacterToken(props) {
    return (
        <Token
            imgSrc={characterImg}
            initialPos={{x:300, y:150}}
            size={24}
            {...props}
        ></Token>
    )
}

export default CharacterToken;