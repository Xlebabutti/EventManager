const LanguageSwitcher = () => {

    const handleLanguageChange = (e: { target: { value: any } }) => {
        const newLang = e.target.value
    }

    return (
        <select name="" id="">
            <option value="ru">RU</option>
            <option value="en">EN</option>
        </select>
    )
}

export default LanguageSwitcher

// TODO: Сделаю после готового UI