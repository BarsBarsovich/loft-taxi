import './Navigtion.css';
import PropTypes from "prop-types";

const Navigation = ({navigateTo}) => {
    const navigationTitles = [{title: 'Карта', key: 'map'}, {title: 'Профиль', key: 'profile'}, {
        title: 'Выйти',
        key: 'logout'
    }];
    return (
        <ul className="nav__list" data-testid="nav">
            {navigationTitles.map((item, index) => (
                <li key={index} className="nav__item">
                    <span onClick={() => navigateTo(item.key)} className="nav__item-link">{item.title}</span>
                </li>
            ))}
        </ul>
    );
}

Navigation.propTypes = {
    navigateTo: PropTypes.func.isRequired
}

export default Navigation;
