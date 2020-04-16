import React from "react";
import "./App.css";
import Customer from "./components/Customer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const styles = (theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto",
  },
  table: {
    minWidth: 1080, // 테이블 형태 고정 크기
  },
  progress: {
    marginTop: theme.spacing(2),
  },
});

class App extends React.Component {
  state = {
    customers: "",
    completed: 0,
  };

  componentDidMount() {
    this.timer = setInterval(this.progress, 20); // 0.02초 마다 progress 함수가 실행되게
    this.callApi()
      .then((res) => this.setState({ customers: res }))
      .catch((err) => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("/api/customers");
    const body = await response.json();
    return body;
  };

  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
  };

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>예약날짜</TableCell>
              <TableCell>예약시간</TableCell>
              <TableCell>예약자명</TableCell>
              <TableCell>인원</TableCell>
              <TableCell>연락처</TableCell>
              <TableCell>선택메뉴</TableCell>
              <TableCell>선입금여부</TableCell>
              <TableCell>예약금</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.customers ? (
              this.state.customers.map((current) => {
                return (
                  <Customer
                    key={current.id}
                    id={current.id}
                    reserv_date={current.reserv_date}
                    reserv_time={current.reserv_time}
                    reserv_name={current.reserv_name}
                    reserv_person={current.reserv_person}
                    phonenumber={current.phonenumber}
                    choice_menu={current.choice_menu}
                    prepayment={current.prepayment}
                    prepayment_amount={current.prepayment_amount}
                  />
                );
              })
            ) : (
              <TableRow>
                <TableCell colSpan="9" align="center">
                  <LinearProgress
                    className={classes.progress}
                    variant="determinate"
                    color="secondary"
                    value={this.state.completed}
                  />
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
