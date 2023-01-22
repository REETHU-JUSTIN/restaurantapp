import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function footer() {
  return (
    <div>
        <Card className="text-center">
      <Card.Header>About</Card.Header>
      <Card.Body>
        <Card.Title>Address</Card.Title>
        <Card.Text>
          CHALAKKUDY - ANGAMALYNear Muringoor Signal,
          Angamaly-Chalakudy NHOpening Time:Monday to Sunday -11:00 AM - 7:00 PM
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">All Rights Reserved To Tikkaway</Card.Footer>
    </Card>
</div>
  )
}

export default footer