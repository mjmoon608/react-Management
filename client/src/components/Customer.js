import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

class Customer extends React.Component {
  render() {
    return (
      <TableRow>
        <TableCell>{this.props.id}</TableCell>
        <TableCell>{this.props.reservation_date}</TableCell>
        <TableCell>{this.props.reservation_time}</TableCell>
        <TableCell>{this.props.reservation_name}</TableCell>
        <TableCell>{this.props.reservation_personnel}</TableCell>
        <TableCell>{this.props.phoneNumber}</TableCell>
        <TableCell>{this.props.choice_Menu}</TableCell>
        <TableCell>{this.props.Prepayment}</TableCell>
        <TableCell>{this.props.Prepayment_amout}</TableCell>
      </TableRow>
    );
  }
}

export default Customer;
