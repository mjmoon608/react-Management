import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

class Customer extends React.Component {
  render() {
    return (
      <TableRow>
        <TableCell>{this.props.id}</TableCell>
        <TableCell>{this.props.reserv_date}</TableCell>
        <TableCell>{this.props.reserv_time}</TableCell>
        <TableCell>{this.props.reserv_name}</TableCell>
        <TableCell>{this.props.reserv_person}</TableCell>
        <TableCell>{this.props.phonenumber}</TableCell>
        <TableCell>{this.props.choice_menu}</TableCell>
        <TableCell>{this.props.prepayment}</TableCell>
        <TableCell>{this.props.prepayment_amount}</TableCell>
      </TableRow>
    );
  }
}

export default Customer;
