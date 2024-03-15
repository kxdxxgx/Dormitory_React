// Search/container.js
import { connect } from 'react-redux';
import { setKeyword, setDate, setGuest } from './action';
import { Search } from './Search';

const mapStateToProps = (state) => ({
    keyword: state.setSearch.keyword,
    Date: state.setSearch.Date,
    guest: state.setSearch.guest // 수정된 부분
});

const mapDispatchToProps = (dispatch) => ({
    setKeyword: (payload) => dispatch(setKeyword(payload)),
    setDate: (payload) => dispatch(setDate(payload)),
    setGuest: (payload) => dispatch(setGuest(payload))  // 수정된 부분
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);