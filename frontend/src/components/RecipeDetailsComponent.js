import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecipesContext } from '../hooks/useRecipesContext';
import { formatDistanceToNow } from 'date-fns';

const RecipeDetailsComponent = ({ recipe }) => {
    const { dispatch } = useRecipesContext();
    const navigate = useNavigate();

    const handleClick = async () => {
        const response = await fetch('/api/recipes/' + recipe._id, {
            method: 'DELETE'
        });

        const json = await response.json();

        if (response.ok) {
            dispatch({ type: 'DELETE_RECIPE', payload: json });
            navigate('/my-recipes'); // Navigate to My Recipes page
        }
    };

    return (
        <div className="recipe-details">
            {recipe.imageUrl && (
                <img src={`${process.env.REACT_APP_BASE_URL}${recipe.imageUrl}`} alt={recipe.title} style={{ width: '100%', borderRadius: '8px' }} />
            )}
            <h4>{recipe.title}</h4>
            <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
            <p><strong>Process:</strong> {recipe.process}</p>
            <p>{formatDistanceToNow(new Date(recipe.createdAt), { addSuffix: true })}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>Delete</span>
        </div>
    );
};

export default RecipeDetailsComponent;