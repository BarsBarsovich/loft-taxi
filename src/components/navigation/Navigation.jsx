import './Navigtion.css';

const Navigation = ({navigateTo}) => {
    const navigationTitles = [{title: 'Карта', key: 'map'}, {title: 'Профиль', key: 'profile'}, {
        title: 'Выйти',
        key: 'login'
    }];
    return (
        <ul className="nav__list">
            {navigationTitles.map((item, index) => (
                <li key={index} className="nav__item">
                    <span onClick={() => navigateTo(item.key)} className="nav__item-link">{item.title}</span>
                </li>
            ))}
        </ul>
    );
}

export default Navigation;
