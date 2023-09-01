import React, {useState} from 'react';
import styles from './styles.module.scss'

const SearchBar = ({ onFormSubmit, term, setTerm }) => {
	

	const onSubmit = event => {
		event.preventDefault();

		onFormSubmit(term);
	};

	return (
		<div className={styles.searchBar}>
			<div className={styles.logoContainer}>
				<h1>Find videos</h1>
			</div>
			<form onSubmit={onSubmit} className={styles.inputGroup}>
				<div className={styles.inputBox}>
					<label>Video Search</label>
					<input 
						
						type='text'
						value={term}
						onChange={(event) => setTerm(event.target.value)}
					/>
				</div>
			</form>
		</div>
	);
}

export default SearchBar;