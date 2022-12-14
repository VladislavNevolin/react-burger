import { useSelector } from 'react-redux';
import styles from './ingredient-details.module.css';

export default function IngredientDetails() {
    const item = useSelector(store => store.item.currItem);

    return (
        <>
            <img src={item.image_large} alt={item.title} />
            <p className="text text_type_main-medium mt-4 mb-8">{item.name}</p>
            <div className={`${styles.parContainer} mb-15`}>
                <p className={`${styles.par} text text_type_main-default text_color_inactive`}>
                    Калории,ккал
                    <span className="text text_type_digits-default text_color_inactive mt-2">{item.calories}</span>
                </p>
                <p className={`${styles.par} text text_type_main-default text_color_inactive`}>
                    Белки, г 
                    <span className="text text_type_digits-default text_color_inactive mt-2">{item.proteins}</span>
                </p>
                <p className={`${styles.par} text text_type_main-default text_color_inactive`}>
                    Жиры, г 
                    <span className="text text_type_digits-default text_color_inactive mt-2">{item.fat}</span>
                </p>
                <p className={`${styles.par} text text_type_main-default text_color_inactive`}>
                    Углеводы, г 
                    <span className="text text_type_digits-default text_color_inactive mt-2">{item.carbohydrates}</span>
                </p>
            </div>
        </>
    )
}