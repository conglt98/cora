import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Board from "../Game/Board";
import * as gameActions from "../../actions";
import {pieces} from "../../constants/actionTypes";
import {checkWin} from "../../algorithms/main";
import NavBar from "../NavBar";
import InfoRoom from "./InfoRoom";
import Timer from "./Timer";
import Footer from '../Footer';
import "../../styles/Game/Game.css"
import ChatBox from "./ChatBox";
import GameResultModal from "./GameResultModal";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isWin: -1,
      piecesWin: null
    }
  }

  componentWillMount = ()=>{
    console.log("GAME");
    console.log(this.props.chooseRoom);
    let room = JSON.parse(JSON.stringify(this.props.chooseRoom))
    this.props.actions.roomPlaying(room)
  }

  componentWillReceiveProps = props =>{
    if (props.countdown===0){
        this.setState({
          isWin:1
        })
    }
  }

  componentDidMount = ()=>{
    if (this.props.user.socket)
    this.props.user.socket.on('play-game-from-server',(data)=>{
      console.log("gamefromserver");
      
      let dataJSON = JSON.parse(data);
      console.log(dataJSON);

      const {actions, array_board, number_cell} = this.props;

      let count_tmp = this.state.count + 1;
      this.setState({count: count_tmp});

      let array_new = array_board;
      array_new[dataJSON.x][dataJSON.y] = dataJSON.info.turn === "X" ? "O":"X";
      actions.mark(array_new);
   
      //check win
      const pieces_win = dataJSON.result;

      if (pieces_win && pieces_win.length > 0) {
        console.log("win");
        this.setState({isWin: 1, piecesWin: pieces_win});

      } else if (count_tmp === number_cell * number_cell) {
        this.setState({isWin: 0})
      } else {
        actions.switch_piece(dataJSON.info.turn); 
      }
    })
  }

  mark(row, col) {
    console.log(this.props.user);
    let request = {
      x:row,
      y:col,
      socket_id: this.props.user.idsocket,
      game_id: this.props.roomPlaying.id,
      user_id: this.props.user.id
    }
    console.log(request);
    this.props.user.socket.emit('play-game-from-client',request);
    
    const {actions, array_board, piece_current, number_cell} = this.props;
    if (this.state.isWin === 1) {
      return;
    }

    let count_tmp = this.state.count + 1;
    this.setState({count: count_tmp});

    let array_new = array_board;
    array_new[row][col] = piece_current;

    actions.mark(array_new);

    //check win
    const pieces_win = checkWin(array_new, row, col, piece_current);

    if (pieces_win.length > 0) {
      console.log("win");
      this.setState({isWin: 1, piecesWin: pieces_win});

    } else if (count_tmp === number_cell * number_cell) {
      this.setState({isWin: 0})
    } else {
      actions.switch_piece(piece_current === pieces.X
        ? pieces.O
        : pieces.X); 
    }
  }

  reset_board() {
    this
      .props
      .actions
      .init_array(Array(15).fill(null).map(() => Array(15).fill(null)));
    this
      .props
      .actions
      .switch_piece(pieces.X);
    this.setState({count: 0, isWin: -1, piecesWin: null});
  }

  render() {
    
    const {actions, array_board, piece_current} = this.props;
    //console.log(array_board);
    const {isWin, piecesWin} = this.state;
    return (
    <div>
    <NavBar/>
    <GameResultModal piece_current={piece_current} is_win={isWin} time={this.props.countdown}/>
    <Timer piece_current={piece_current} is_win={isWin}/>
        <div className="container container-info-board-message">
          <div className="row">
            <div className="col">
                <InfoRoom />
            </div>
            <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12 col-board">
                <div className="container-board">
                    <Board
                        set_number_cell={ numberCell => { 
                          const number_cell = parseInt(numberCell); 
                          actions.set_number_cell(number_cell); 
                          actions.init_array(
                              Array(number_cell).fill(null).map(() => Array(number_cell).fill(null))
                            ); 
                          } 
                        }
                        
                        array_board={array_board}
                        
                        mark={(row,col) => this.mark(row, col)}
                        
                        piece_current={piece_current}
                        
                        is_win={isWin}
                        
                        pieces_win={piecesWin}
                        
                        reset_board={() => this.reset_board()}
                    />
              </div>

            </div>
            <div className="col">
                  <ChatBox/>
            </div>
          </div>
        </div>
    <Footer/>
    </div>
  );
  }
}

const mapStateToProps = state => (
  {
    number_cell: state.gameReducer.number_cell, 
    array_board: state.gameReducer.array_board, 
    piece_current: state.gameReducer.piece_current,
    user: state.user,
    chooseRoom:state.chooseRoom,
    countdown:state.countdown,
    roomPlaying:state.roomPlaying
  }
);

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(gameActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);