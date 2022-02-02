import React, { PureComponent } from "react";
import ImageCounter from "./ImageCounter";
import { Card, CardContent, Grid, Typography } from "@mui/material";
export default class Hero extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <Grid item xs={12} md={6} lg={3}>
        <Card sx={{height: 280}}>
          <ImageCounter
            count={this.state.count}
            imageUrl={this.props.imageUrl}
            onCount={this.handleClick}
            title={this.props.title}
          />
          <CardContent>
            <Typography variant="h6" component="h5">
              {this.props.title}
            </Typography>
            <Typography variant="body1">{this.props.subtitle}</Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  }

  handleClick() {
    this.setState((pevState) => ({ count: pevState.count + 1 }));
  }
}
