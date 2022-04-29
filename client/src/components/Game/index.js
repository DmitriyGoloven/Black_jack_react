import {connect} from "react-redux";
import Game from "./Game";
import {players} from "../../store/reducer/selectors"
import {getNewGame} from "../../store/reducer/actions";
import {createStructuredSelector} from "reselect";

const mapStateToProp = createStructuredSelector({
    players
})

const mapDispatchToProps = {
    getNewGame
}

export default connect(mapStateToProp, mapDispatchToProps)(Game);