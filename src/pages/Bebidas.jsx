import React, { useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipesContext from '../context/RecipesContext';

function Bebidas() {
  const { recipes: { drinks } } = useContext(RecipesContext);
  const history = useHistory();
  const NUMBER_ELEVEN = 11;

  useEffect(() => {
    if (drinks.length === 1) {
      history.push(`bebidas/${drinks[0].idDrink}`);
    }
  }, [drinks, history]);

  return (
    <>
      <main>
        <Header type="Bebidas" />
        {drinks.length !== 0 && drinks.map((drink, index) => (
          index <= NUMBER_ELEVEN && (
            <Link to={ `/bebidas/${drink.idDrink}` }>
              <div key={ drink.idDrink } data-testid={ `${index}-recipe-card` }>
                <h4 data-testid={ `${index}-card-name` }>{drink.strDrink}</h4>
                <img
                  data-testid={ `${index}-card-img` }
                  src={ drink.strDrinkThumb }
                  alt="strDrinkThumb"
                />
              </div>
            </Link>
          )
        ))}
      </main>
      <Footer />
    </>
  );
}

export default Bebidas;
