import { nanoid } from "nanoid";
import { useState } from "react";

const CardForm = () => {

    const [name, setName] = useState('');
    const [descr, setDescr] = useState('');
    const [type, setType] = useState('important');
    const [tags, setTags] = useState('');
    
    const onChangeName = (e) => {
        setName(e.target.value)
    };
    const onChangeDescr = (e) => {
        setDescr(e.target.value);
    } 
    const onSetType = (type) => {
        setType(type);
    };
    const onChangeTags = (e) => {
        setTags((e.target.value).replace(/#/, ''));
    };

    const onCreateNewCard = () => {
        let arrTags = tags.split(' ').filter(tag => tag !== '').map(tag => '#' + tag);
        const newCard = {
            id: nanoid(),
            name,
            descr,
            type,
            tags: arrTags
        };

        return newCard;
    }
    

    return (
        <form onClick={(e) => e.preventDefault()} action="" className="cards__form">
            <div className="cards__form-input-title">Название карточки</div>
            <input onChange={onChangeName} className="cards__form-input" type="text" value={name}/>
            <div className="cards__form-input-title">Описание карточки</div>
            <textarea onChange={onChangeDescr} className="cards__form-textarea" name="" value={descr}></textarea>
            <div className="cards__form-important">
                <div className="cards__from-important-title">Важность</div>
                <div className="cards__form-important-btns">
                    <button onClick={() => onSetType('important')} className={`cards__form-important-btn btn ${type === 'important' ? 'active' : ''}`}>Важное</button>
                    <button onClick={() => onSetType('unimportant')} className={`cards__form-important-btn btn ${type === 'unimportant' ? 'active' : ''}`}>Неважное</button>
                </div>
            </div>
            <div className="cards__form-input-title">Теги (через пробел)</div>
            <input onChange={onChangeTags} className="cards__form-input cards__form-tag" type="text" value={tags}/>
            <button onClick={onCreateNewCard} className="cards__form-main-btn btn">Создать</button>
        </form>
    );
};

export default CardForm;