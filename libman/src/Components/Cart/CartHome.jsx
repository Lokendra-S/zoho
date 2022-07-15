import React from 'react'
import { Container, Row } from 'react-bootstrap'
import CartProducts from './CartProducts'
import CartTotal from './CartTotal'

function CartHome() {
  return (
      <>
        <Container fluid className='cart_container'>
            <Row className='px-xs-3 px-lg-4 px-xl-5 my-2 gap-2'>
              <CartProducts col_sm={12} col_md={12} col_lg={7} col_xl={7} col_xxl={7} />
              <CartTotal col_sm={12} col_md={12} col_lg={4} col_xl={4} col_xxl={4} />
            </Row>
        </Container>
      </>
  )
}

export default CartHome