import React, { useState } from 'react';
import { Button, Card, CardContent, Typography, IconButton } from '@mui/material';
import { AddCircle, RemoveCircle } from '@mui/icons-material';

const CardComponent = () => {
  const [cards, setCards] = useState([]);

  const handleAddCard = () => {
    const newCard = {
      title: 'New Card',
      content: 'This is a new card added on button click.',
      count: 0,
      expanded: false,
    };

    setCards([...cards, newCard]);
  };

  const handleIncrement = (index) => {
    const updatedCards = [...cards];
    updatedCards[index].count++;
    setCards(updatedCards);
  };

  const handleRemove = (index) => {
    const updatedCards = [...cards];
    updatedCards.splice(index, 1);
    setCards(updatedCards);
  };

  const handleCardClick = (index) => {
    const updatedCards = [...cards];
    updatedCards[index].expanded = !updatedCards[index].expanded;
    setCards(updatedCards);
  };

  return (
    <div>
      {cards.map((card, index) => (
        <Card key={index} onClick={() => handleCardClick(index)} sx={{ cursor: 'pointer', marginBottom: '10px' }}>
          <CardContent>
            <Typography variant="h5" component="div">
              {card.title}
            </Typography>
            {card.expanded && (
              <>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {card.content}
                </Typography>
                <Typography>
                  Count: {card.count}
                  <IconButton onClick={() => handleIncrement(index)}>
                    <AddCircle />
                  </IconButton>
                  <IconButton onClick={() => handleRemove(index)}>
                    <RemoveCircle />
                  </IconButton>
                </Typography>
              </>
            )}
          </CardContent>
        </Card>
      ))}

      <Button variant="contained" onClick={handleAddCard}>
        Add Card
      </Button>
    </div>
  );
};

export default CardComponent;
