import { FaSearch, FaGithub } from 'react-icons/fa';
import css from './SearchBar.module.css'
import PropTypes from 'prop-types'

export const SearchBar = ({ onSubmit }) => {
    return(
        <header className={css.header}>
        <div className={css.wrapper}>
            <p className={css.logo}><a href="./*">Catt&nbsp;O'Finder</a></p>
            <form onSubmit={onSubmit} className={css.form}>
                <input 
                    className={css.input} 
                    type="text" 
                    name="searchQuery"
                    autoComplete="off" 
                    placeholder="Search images..." />
                <button className={css.submit} type="submit"><FaSearch/></button>
            </form>
            <div className={css.contact}><a href="https://github.com/WiktorRLewandowski/goit-react-hw-03-image-finder">
                <FaGithub className={css.icon}/></a>
            </div>
        </div>
        </header>
    )
}

SearchBar.propTypes = {
    onSubmit: PropTypes.func
}