import React from 'react';
import styled from 'styled-components';
import NumberFormat from 'react-number-format';

const productData = {
  id: 'recEHmzvupvT8ZONH',
  name: 'albany sectional',
  price: 109999,
  image:
    'https://dl.airtable.com/.attachmentThumbnails/0be1af59cf889899b5c9abb1e4db38a4/d631ac52',
  colors: ['#000', '#ffb900'],
  company: 'liddy',
  description:
    'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
  category: 'living room',
};

const CardExample = () => {
  return (
    <>
      <CardExampleContainer>
        <StyledCard>
          <img 
            src={productData.image}
            alt={productData.name}
          />
          <footer>
            <h4>{productData.name}</h4>
            <p>
              <NumberFormat
                value={productData.price}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
              />
            </p>
          </footer>
        </StyledCard>
      </CardExampleContainer>
    </>
  );
};

const CardExampleContainer = styled.div`
  background: var(--backgroundGray);
  padding: 2rem;
`;
const StyledCard = styled.article`
  width: 90vw;
  max-width: 300px;
  background: var(--cardWhite);
  border-radius: 0.25rem;
  img{
    width: 100%;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }
  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    h4 {
      text-transform: capitalize;
      &::before {
        content: 'Name: ';
        color:red;
      }
    }
    h4:hover {
      color: green;
    }
    p {
      color: var(--primary);
      font-weight: bold;
    }
  }
  transition:all 0.5s ease-in-out; 
  &:hover {
    box-shadow: 0 3px #222;
    cursor: pointer;
  }
  @media (min-width:768px) {
    max-width: 600px;
  }

`;

export default CardExample;
