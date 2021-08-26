import React from "react";

class Detail extends React.Component {
    componentDidMount() {
        const {location, history} = this.props;
        if(location.state === undefined) {
            history.push('/'); //홈으로 이동
        }
    }
    render() {
        const {location} = this.props;
        if(location.state) { //state가 있을 때 실행 (render먼저 실행한 후에 componentDidMount가 실행되기 때문에 검사를 한다)
            return <span>{location.state.title}</span>
        } else {
            return null;
        }
    }
}

export default Detail;